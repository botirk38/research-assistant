"use client";

import { useCallback } from "react";
import { useChat } from "@ai-sdk/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Sparkles } from "lucide-react";
import type { Publication } from "@/types/researcher";

interface AIChatPanelProps {
  publication: Publication;
  placeholder?: string;
  presetQuestions?: Array<{
    label: string;
    question: string;
  }>;
  className?: string;
}

export function AIChatPanel({
  publication,
  placeholder = "Ask about this publication...",
  presetQuestions = [
    {
      label: "Summarize",
      question: "Can you provide a summary of this paper?",
    },
    {
      label: "Key findings",
      question: "What are the main findings and conclusions?",
    },
    {
      label: "Methodology",
      question: "What methodology was used in this research?",
    },
    {
      label: "Limitations",
      question: "What are the limitations of this study?",
    },
  ],
  className,
}: AIChatPanelProps) {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({ api: `/api/chat/pdf/${publication.id}` });

  const setInputValue = useCallback(
    (value: string) => {
      const event = {
        target: { value },
      } as React.ChangeEvent<HTMLInputElement>;
      handleInputChange(event);
    },
    [handleInputChange],
  );

  const handleChatSubmit = useCallback(
    (event: React.FormEvent) => {
      handleSubmit(event);
    },
    [handleSubmit],
  );

  return (
    <div className={`bg-background flex h-full flex-col ${className}`}>
      {/* Messages Area */}
      <div className="min-h-0 flex-1">
        <ScrollArea className="h-full">
          <div className="space-y-4 p-4">
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="relative mb-4">
                  <Sparkles className="text-primary/20 h-12 w-12" />
                  <div className="absolute inset-0 h-12 w-12 animate-pulse">
                    <Sparkles className="text-primary/40 h-12 w-12" />
                  </div>
                </div>
                <h3 className="text-foreground mb-2 font-medium">
                  Ask me anything
                </h3>
                <p className="text-muted-foreground max-w-[200px] text-sm">
                  I can help you understand this publication, summarize key
                  points, or answer specific questions.
                </p>
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground ml-4"
                      : "bg-muted/50 text-foreground mr-4"
                  }`}
                >
                  <div className="leading-relaxed whitespace-pre-wrap">
                    {message.content}
                  </div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted/50 mr-4 max-w-[85%] rounded-2xl px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1">
                      <div className="bg-primary/60 h-2 w-2 animate-bounce rounded-full"></div>
                      <div
                        className="bg-primary/60 h-2 w-2 animate-bounce rounded-full"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="bg-primary/60 h-2 w-2 animate-bounce rounded-full"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                    <span className="text-muted-foreground text-xs">
                      Analyzing...
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </div>

      {/* Input Area */}
      <div className="bg-background/95 space-y-3 border-t p-4 backdrop-blur-sm">
        {/* Preset Questions */}
        {messages.length === 0 && presetQuestions.length > 0 && (
          <div className="space-y-2">
            <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
              Quick Questions
            </p>
            <div className="flex flex-wrap gap-2">
              {presetQuestions.map((preset, index) => (
                <Button
                  key={index}
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setInputValue(preset.question)}
                  disabled={isLoading}
                  className="h-7 rounded-full border-dashed px-3 text-xs transition-all hover:border-solid"
                >
                  {preset.label}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Chat Input */}
        <form onSubmit={handleChatSubmit}>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Input
                value={input}
                onChange={handleInputChange}
                placeholder={placeholder}
                disabled={isLoading}
                className="border-border/50 focus:border-primary/50 rounded-full pr-12 transition-colors"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleChatSubmit(e);
                  }
                }}
              />
              <Button
                type="submit"
                disabled={isLoading || !input.trim()}
                size="sm"
                className="absolute top-1/2 right-1 h-8 w-8 -translate-y-1/2 rounded-full p-0"
              >
                <Send className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
