"use client";

import { useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ChatContainer } from "./chat-container";
import { ChatInput } from "./chat-input";
import type { ChatMessage, PresetQuestion, ChatEmptyState } from "./types";

interface ChatProps {
  messages: ChatMessage[];
  input: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading?: boolean;
  placeholder?: string;
  presetQuestions?: PresetQuestion[];
  className?: string;
  emptyState?: ChatEmptyState;
  onQuestionSelect?: (question: string) => void;
}

export function Chat({
  messages,
  input,
  onInputChange,
  onSubmit,
  isLoading = false,
  placeholder = "Type your message...",
  presetQuestions = [],
  className,
  emptyState,
  onQuestionSelect,
}: ChatProps) {
  const handleQuestionSelect = useCallback(
    (question: string) => {
      if (onQuestionSelect) {
        onQuestionSelect(question);
      } else {
        // Fallback: simulate input change
        const mockEvent = {
          target: { value: question },
        } as React.ChangeEvent<HTMLInputElement>;
        onInputChange(mockEvent);
      }
    },
    [onInputChange, onQuestionSelect],
  );

  const showPresets = messages.length === 0 && presetQuestions.length > 0;

  return (
    <Card className={cn("flex h-full flex-col", className)}>
      {/* Messages Area */}
      <div className="min-h-0 flex-1">
        <ChatContainer
          messages={messages}
          isLoading={isLoading}
          emptyState={emptyState}
        />
      </div>

      {/* Separator */}
      <Separator />

      {/* Input Area */}
      <div className="bg-background/95 p-4 backdrop-blur-sm">
        <ChatInput
          input={input}
          onInputChange={onInputChange}
          onSubmit={onSubmit}
          onQuestionSelect={handleQuestionSelect}
          isLoading={isLoading}
          placeholder={placeholder}
          presetQuestions={presetQuestions}
          showPresets={showPresets}
        />
      </div>
    </Card>
  );
}
