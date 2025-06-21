"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, MessageCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { ChatMessage } from "./chat-message";
import type { ChatMessage as ChatMessageType, ChatEmptyState } from "./types";

interface ChatContainerProps {
  messages: ChatMessageType[];
  isLoading?: boolean;
  className?: string;
  emptyState?: ChatEmptyState;
}

const LoadingIndicator = () => (
  <div className="mb-4 flex justify-start">
    <div className="flex max-w-[85%] items-center gap-3">
      <div className="bg-primary/10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
        <Loader2 className="text-primary h-4 w-4 animate-spin" />
      </div>
      <Card className="bg-muted/50 border-border/50">
        <CardContent className="p-4">
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
            <Badge variant="secondary" className="text-xs">
              Thinking...
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
);

const EmptyState = ({
  title,
  description,
  icon,
}: NonNullable<ChatContainerProps["emptyState"]>) => (
  <div className="flex flex-col items-center justify-center py-12 text-center">
    <div className="relative mb-6">
      <div className="text-primary/20 mb-2">
        {icon || <Sparkles className="mx-auto h-12 w-12" />}
      </div>
      <div className="absolute inset-0 animate-pulse">
        <div className="text-primary/40">
          {icon || <Sparkles className="mx-auto h-12 w-12" />}
        </div>
      </div>
    </div>

    <Card className="max-w-md border-dashed">
      <CardContent className="p-6 text-center">
        <h3 className="text-foreground mb-2 font-semibold">
          {title || "Start a conversation"}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description ||
            "Ask me anything and I'll help you find the information you need."}
        </p>
      </CardContent>
    </Card>
  </div>
);

export function ChatContainer({
  messages,
  isLoading = false,
  className,
  emptyState = {},
}: ChatContainerProps) {
  const hasMessages = messages.length > 0;

  return (
    <div className={cn("flex h-full min-h-0 flex-col", className)}>
      <ScrollArea className="flex-1 px-4">
        <div className="space-y-4 py-4">
          {!hasMessages && <EmptyState {...emptyState} />}

          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}

          {isLoading && <LoadingIndicator />}
        </div>
      </ScrollArea>
    </div>
  );
}
