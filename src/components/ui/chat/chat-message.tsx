"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Bot,
  User,
  Search,
  FileText,
  Brain,
  Clock,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type {
  ChatMessage,
  SearchPDFResult,
  SearchResult,
  ToolInvocation,
  ReasoningPart,
  ToolInvocationPart,
  SourcePart,
  FilePart,
  TextPart,
} from "./types";

interface ChatMessageProps {
  message: ChatMessage;
  isLoading?: boolean;
}

export function ChatMessage({ message, isLoading }: ChatMessageProps) {
  const isUser = message.role === "user";

  const renderTextPart = (text: string, index: number) => (
    <div key={index} className="whitespace-pre-wrap text-sm leading-relaxed">
      {text}
    </div>
  );

  const renderReasoningPart = (part: ReasoningPart, index: number) => (
    <Card key={index} className="border-blue-200 bg-blue-50/50 dark:border-blue-800 dark:bg-blue-950/20">
      <CardContent className="p-3">
        <div className="flex items-center gap-2 mb-2">
          <Brain className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          <Badge variant="secondary" className="text-xs">
            Thinking
          </Badge>
        </div>
        <div className="text-sm text-blue-900 dark:text-blue-100 whitespace-pre-wrap">
          {part.reasoning}
        </div>
      </CardContent>
    </Card>
  );

  const renderSearchPDFTool = (toolInvocation: ToolInvocation, index: number) => {
    if (toolInvocation.state === "call" || toolInvocation.state === "partial-call") {
      return (
        <Card key={index} className="border-green-200 bg-green-50/50 dark:border-green-800 dark:bg-green-950/20">
          <CardContent className="p-3">
            <div className="flex items-center gap-2 mb-2">
              <Search className="h-4 w-4 text-green-600 dark:text-green-400" />
              <Badge variant="secondary" className="text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                <Loader2 className="h-3 w-3 mr-1 animate-spin" />
                Searching
              </Badge>
            </div>
            <div className="text-sm text-green-800 dark:text-green-200">
              Query: &quot;{(toolInvocation.args as { query?: string })?.query}&quot;
            </div>
          </CardContent>
        </Card>
      );
    }

    if (toolInvocation.state === "result") {
      const results = (toolInvocation.result as SearchPDFResult)?.results ?? [];
      return (
        <Card key={index} className="border-green-200 bg-green-50/50 dark:border-green-800 dark:bg-green-950/20">
          <CardContent className="p-3">
            <div className="flex items-center gap-2 mb-3">
              <Search className="h-4 w-4 text-green-600 dark:text-green-400" />
              <Badge variant="secondary" className="text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                <CheckCircle2 className="h-3 w-3 mr-1" />
                {results.length} result{results.length !== 1 ? 's' : ''}
              </Badge>
            </div>
            <div className="space-y-2">
              {results.map((result: SearchResult, i: number) => (
                <Card key={i} className="bg-white/50 dark:bg-gray-800/50 border-0">
                  <CardContent className="p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <FileText className="h-3 w-3 text-gray-500" />
                      <Badge variant="outline" className="text-xs">
                        Page {result.page}
                      </Badge>
                    </div>
                    <div className="text-xs text-gray-700 dark:text-gray-300 line-clamp-3">
                      {result.content.substring(0, 200)}...
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      );
    }

    return null;
  };

  const renderGenericTool = (toolInvocation: ToolInvocation, index: number) => {
    if (toolInvocation.state === "call" || toolInvocation.state === "partial-call") {
      return (
        <Card key={index} className="border-amber-200 bg-amber-50/50 dark:border-amber-800 dark:bg-amber-950/20">
          <CardContent className="p-3">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-4 w-4 text-amber-600 dark:text-amber-400" />
              <Badge variant="secondary" className="text-xs bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                <Loader2 className="h-3 w-3 mr-1 animate-spin" />
                {toolInvocation.toolName}
              </Badge>
            </div>
            <pre className="text-xs text-amber-800 dark:text-amber-200 bg-amber-100/50 dark:bg-amber-900/20 p-2 rounded overflow-x-auto">
              {JSON.stringify(toolInvocation.args, null, 2)}
            </pre>
          </CardContent>
        </Card>
      );
    }

    if (toolInvocation.state === "result") {
      return (
        <Card key={index} className="border-gray-200 bg-gray-50/50 dark:border-gray-800 dark:bg-gray-950/20">
          <CardContent className="p-3">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="h-4 w-4 text-gray-600 dark:text-gray-400" />
              <Badge variant="secondary" className="text-xs">
                {toolInvocation.toolName} result
              </Badge>
            </div>
            <pre className="text-xs text-gray-800 dark:text-gray-200 bg-gray-100/50 dark:bg-gray-900/20 p-2 rounded overflow-x-auto">
              {JSON.stringify(toolInvocation.result, null, 2)}
            </pre>
          </CardContent>
        </Card>
      );
    }

    return null;
  };

  const renderToolInvocation = (part: ToolInvocationPart, index: number) => {
    const { toolInvocation } = part;
    if (toolInvocation.toolName === "searchPDF") {
      return renderSearchPDFTool(toolInvocation, index);
    }
    return renderGenericTool(toolInvocation, index);
  };

  const renderSourcePart = (part: SourcePart, index: number) => (
    <Card key={index} className="border-purple-200 bg-purple-50/50 dark:border-purple-800 dark:bg-purple-950/20">
      <CardContent className="p-3">
        <div className="flex items-center gap-2 mb-2">
          <FileText className="h-4 w-4 text-purple-600 dark:text-purple-400" />
          <Badge variant="secondary" className="text-xs bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
            Source
          </Badge>
        </div>
        <pre className="text-xs text-purple-800 dark:text-purple-200 bg-purple-100/50 dark:bg-purple-900/20 p-2 rounded overflow-x-auto">
          {JSON.stringify(part.source, null, 2)}
        </pre>
      </CardContent>
    </Card>
  );

  const renderFilePart = (part: FilePart, index: number) => (
    <Card key={index} className="border-indigo-200 bg-indigo-50/50 dark:border-indigo-800 dark:bg-indigo-950/20">
      <CardContent className="p-3">
        <div className="flex items-center gap-2 mb-2">
          <FileText className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
          <Badge variant="secondary" className="text-xs bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
            {part.mimeType}
          </Badge>
        </div>
        <div className="text-xs text-indigo-800 dark:text-indigo-200 bg-indigo-100/50 dark:bg-indigo-900/20 p-2 rounded">
          {part.data.length > 100 ? `${part.data.substring(0, 100)}...` : part.data}
        </div>
      </CardContent>
    </Card>
  );

  const renderStepStart = (index: number) => (
    <div key={index} className="flex items-center gap-2 py-2">
      <Separator className="flex-1" />
      <Badge variant="outline" className="text-xs">
        Processing step
      </Badge>
      <Separator className="flex-1" />
    </div>
  );

  const renderParts = () => {
    if (!message.parts || message.parts.length === 0) {
      return renderTextPart(message.content, 0);
    }

    return message.parts.map((part, index) => {
      switch (part.type) {
        case "text":
          return part.text ? renderTextPart(part.text, index) : null;
        case "reasoning":
          return renderReasoningPart(part as ReasoningPart, index);
        case "tool-invocation":
          return renderToolInvocation(part as ToolInvocationPart, index);
        case "source":
          return renderSourcePart(part as SourcePart, index);
        case "file":
          return renderFilePart(part as FilePart, index);
        case "step-start":
          return renderStepStart(index);
        default:
          return null;
      }
    });
  };

  return (
    <div
      className={cn(
        "flex gap-3 group",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      {!isUser && (
        <Avatar className="h-8 w-8 shrink-0">
          <AvatarFallback className="bg-primary/10">
            <Bot className="h-4 w-4" />
          </AvatarFallback>
        </Avatar>
      )}
      
      <div
        className={cn(
          "max-w-[85%] space-y-2",
          isUser && "order-first"
        )}
      >
        <Card
          className={cn(
            "relative",
            isUser
              ? "bg-primary text-primary-foreground border-primary/20"
              : "bg-muted/50 border-border/50"
          )}
        >
          <CardContent className="p-4">
            {renderParts()}
          </CardContent>
        </Card>
      </div>

      {isUser && (
        <Avatar className="h-8 w-8 shrink-0">
          <AvatarFallback className="bg-muted">
            <User className="h-4 w-4" />
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}