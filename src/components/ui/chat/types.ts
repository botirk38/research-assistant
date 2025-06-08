import type { UIMessage } from "@ai-sdk/ui-utils";

// Extract part types using type indexing
export type ChatMessagePart = UIMessage['parts'][number];

export type TextPart = Extract<ChatMessagePart, { type: 'text' }>;
export type ReasoningPart = Extract<ChatMessagePart, { type: 'reasoning' }>;
export type ToolInvocationPart = Extract<ChatMessagePart, { type: 'tool-invocation' }>;
export type SourcePart = Extract<ChatMessagePart, { type: 'source' }>;
export type FilePart = Extract<ChatMessagePart, { type: 'file' }>;
export type StepStartPart = Extract<ChatMessagePart, { type: 'step-start' }>;

// Extract tool invocation types
export type ToolInvocation = ToolInvocationPart['toolInvocation'];
export type ToolCall = Extract<ToolInvocation, { state: 'call' | 'partial-call' }>;
export type ToolResult = Extract<ToolInvocation, { state: 'result' }>;

// Chat-specific types
export interface PresetQuestion {
  label: string;
  question: string;
}

export interface SearchResult {
  content: string;
  page: number;
}

export interface SearchPDFResult {
  results: SearchResult[];
}

// Compatible chat message type that accepts UIMessage
export type ChatMessage = UIMessage & {
  role: 'user' | 'assistant' | 'system' | 'data';
};

export interface ChatEmptyState {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}