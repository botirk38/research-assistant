"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Send, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import type { PresetQuestion } from "./types";

interface ChatInputProps {
  input: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  onQuestionSelect?: (question: string) => void;
  isLoading?: boolean;
  placeholder?: string;
  presetQuestions?: PresetQuestion[];
  showPresets?: boolean;
  className?: string;
}

export function ChatInput({
  input,
  onInputChange,
  onSubmit,
  onQuestionSelect,
  isLoading = false,
  placeholder = "Type your message...",
  presetQuestions = [],
  showPresets = true,
  className,
}: ChatInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    onSubmit(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleQuestionSelect = (question: string) => {
    if (onQuestionSelect) {
      onQuestionSelect(question);
    } else {
      // Fallback: simulate input change
      const mockEvent = {
        target: { value: question },
      } as React.ChangeEvent<HTMLInputElement>;
      onInputChange(mockEvent);
    }
  };

  return (
    <div className={cn("space-y-4", className)}>
      {/* Preset Questions */}
      {showPresets && presetQuestions.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Sparkles className="text-muted-foreground h-4 w-4" />
            <span className="text-muted-foreground text-sm font-medium">
              Quick questions
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {presetQuestions.map((preset, index) => (
              <Badge
                key={index}
                variant="outline"
                className={cn(
                  "hover:bg-primary/10 hover:border-primary/50 cursor-pointer transition-all",
                  "rounded-full border-dashed px-2 py-1 text-xs",
                  isLoading && "cursor-not-allowed opacity-50",
                )}
                onClick={() =>
                  !isLoading && handleQuestionSelect(preset.question)
                }
              >
                {preset.label}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Chat Input */}
      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="relative">
          <Input
            value={input}
            onChange={onInputChange}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            disabled={isLoading}
            className={cn(
              "rounded-full pr-12 transition-all duration-200",
              "focus:ring-primary/20 focus:border-primary/50 focus:ring-2",
              isFocused && "shadow-md",
              isLoading && "opacity-75",
            )}
          />
          <Button
            type="submit"
            disabled={isLoading || !input.trim()}
            size="sm"
            className={cn(
              "absolute top-1/2 right-1 -translate-y-1/2",
              "h-8 w-8 rounded-full p-0 transition-all",
              "disabled:cursor-not-allowed disabled:opacity-50",
              input.trim() && !isLoading
                ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                : "bg-muted hover:bg-muted/80 text-muted-foreground",
            )}
          >
            <Send className="h-3.5 w-3.5" />
          </Button>
        </div>

        {/* Input hint */}
        <div className="text-muted-foreground flex items-center justify-between px-1 text-xs">
          <span>Press Enter to send</span>
          {input.length > 0 && (
            <span className="text-right">
              {input.length} character{input.length !== 1 ? "s" : ""}
            </span>
          )}
        </div>
      </form>
    </div>
  );
}
