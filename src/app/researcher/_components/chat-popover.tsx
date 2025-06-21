"use client";

import { useState } from "react";
import { MessageSquare, Send, Minimize2, Maximize2 } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  message: z.string().min(1, {
    message: "Message is required",
  }),
});

type FormSchema = z.infer<typeof formSchema>;

function ChatPopover() {
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      content: "Hello! How can I help with your research today?",
    },
  ]);

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });

  const handleSendMessage = (data: FormSchema) => {
    if (!data.message.trim()) return;
    setMessages([
      ...messages,
      { id: Date.now(), sender: "user", content: data.message },
    ]);
    form.reset();
    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          sender: "ai",
          content:
            "Thanks for your message. I can help you find relevant research papers or funding opportunities based on your interests.",
        },
      ]);
    }, 1000);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="fixed right-6 bottom-6 z-50">
          <Button
            className="text-primary-foreground bg-primary hover:bg-primary/90 flex rounded-full p-3"
            variant="outline"
          >
            <MessageSquare className="h-5 w-5" />
          </Button>
        </div>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className={`border-border bg-card fixed right-6 bottom-20 z-50 flex w-80 flex-col rounded-xl border p-0 shadow-lg transition-normal sm:w-96 ${
          isMinimized ? "h-14" : "h-[450px]"
        }`}
        side="top"
      >
        {/* Chat header */}
        <div className="border-border flex items-center justify-between border-b p-3">
          <div className="flex items-center">
            <Avatar className="bg-primary/20 flex h-8 w-8 items-center justify-center">
              <MessageSquare className="text-primary h-4 w-4" />
            </Avatar>
            <span className="font-display text-card-foreground ml-2 font-medium">
              Research Assistant
            </span>
          </div>
          <div className="flex items-center space-x-1">
            {isMinimized ? (
              <Button
                className="text-muted-foreground hover:bg-accent hover:text-accent-foreground h-7 w-7"
                size="icon"
                variant="ghost"
                onClick={() => setIsMinimized(false)}
              >
                <Maximize2 className="h-4 w-4" />
              </Button>
            ) : (
              <Button
                className="text-muted-foreground hover:bg-accent hover:text-accent-foreground h-7 w-7"
                size="icon"
                variant="ghost"
                onClick={() => setIsMinimized(true)}
              >
                <Minimize2 className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
        {!isMinimized && (
          <>
            {/* Chat messages */}
            <div className="flex-1 space-y-3 overflow-y-auto p-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`animate-fade-in max-w-[80%] rounded-lg p-3 ${
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-card-foreground"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </div>
            {/* Chat input */}
            <Form {...form}>
              <form
                className="border-border flex items-center border-t p-3"
                onSubmit={form.handleSubmit(handleSendMessage)}
              >
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="mr-2 flex-1">
                      <FormControl>
                        <Textarea
                          {...field}
                          className="focus:border-primary focus:ring-primary border-input h-10 resize-none py-2"
                          placeholder="Type your message..."
                          onKeyDown={async (e) => {
                            if (e.key === "Enter" && !e.shiftKey) {
                              e.preventDefault();
                              await form.handleSubmit(handleSendMessage)();
                            }
                          }}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button
                  className="bg-primary hover:bg-primary/90 text-primary-foreground h-10 w-10 transition-normal"
                  size="icon"
                  type="submit"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </Form>
          </>
        )}
      </PopoverContent>
    </Popover>
  );
}

export default ChatPopover;
