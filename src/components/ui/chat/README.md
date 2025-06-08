# Chat Components

A set of reusable chat UI components built with shadcn/ui components and designed to work with the AI SDK.

## Components

### `Chat`
The main chat component that combines all other chat components into a complete chat interface.

### `ChatContainer` 
Displays chat messages with loading states and empty state.

### `ChatInput`
Input component with preset questions and send functionality.

### `ChatMessage`
Individual message component that renders different types of AI SDK message parts.

## Features

- **Full AI SDK Integration**: Compatible with `@ai-sdk/ui-utils` types
- **Rich Message Parts**: Supports text, reasoning, tool invocations, sources, files, and step boundaries
- **Special Tool Handling**: Enhanced UI for `searchPDF` tool with result previews
- **Preset Questions**: Quick action buttons for common queries
- **Loading States**: Animated loading indicators and disabled states
- **Empty State**: Customizable empty state with icon and description
- **Responsive Design**: Works on mobile and desktop
- **Dark Mode**: Full dark mode support
- **Type Safe**: Full TypeScript support with extracted AI SDK types

## Usage

### Basic Usage

```tsx
import { Chat } from "@/components/ui/chat";
import { useChat } from "@ai-sdk/react";

function MyChat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat"
  });

  return (
    <Chat
      messages={messages}
      input={input}
      onInputChange={handleInputChange}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      placeholder="Ask me anything..."
    />
  );
}
```

### With Preset Questions

```tsx
const presetQuestions = [
  { label: "Summarize", question: "Can you summarize this document?" },
  { label: "Key Points", question: "What are the main points?" },
  { label: "Questions", question: "What questions should I ask?" }
];

<Chat
  messages={messages}
  input={input}
  onInputChange={handleInputChange}
  onSubmit={handleSubmit}
  isLoading={isLoading}
  presetQuestions={presetQuestions}
  placeholder="Ask about this document..."
/>
```

### Custom Empty State

```tsx
import { FileText } from "lucide-react";

<Chat
  messages={messages}
  input={input}
  onInputChange={handleInputChange}
  onSubmit={handleSubmit}
  isLoading={isLoading}
  emptyState={{
    title: "Analyze Document",
    description: "Upload a document and I'll help you understand its contents.",
    icon: <FileText className="h-12 w-12" />
  }}
/>
```

### Individual Components

You can also use components separately for more control:

```tsx
import { ChatContainer, ChatInput } from "@/components/ui/chat";

function CustomChat() {
  return (
    <div className="flex flex-col h-full">
      <ChatContainer
        messages={messages}
        isLoading={isLoading}
        className="flex-1"
      />
      <ChatInput
        input={input}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
        isLoading={isLoading}
        presetQuestions={presetQuestions}
      />
    </div>
  );
}
```

## Message Parts Rendering

The chat components automatically render different AI SDK message parts:

### Text Parts
Regular text content from user or assistant messages.

### Reasoning Parts
AI thinking process displayed in blue-themed cards with brain icon.

### Tool Invocations
- **searchPDF Tool**: Special handling with search icons, query display, and formatted results
- **Generic Tools**: Loading states with tool names and arguments, results display

### Source Parts
Source citations displayed in purple-themed cards.

### File Parts
File attachments with MIME type indicators in indigo-themed cards.

### Step Start Parts
Process boundaries shown as subtle separators.

## SearchPDF Tool Integration

The components provide enhanced UI for the `searchPDF` tool:

**During Search:**
- Green-themed card with animated search icon
- "Searching" badge with loading indicator
- Query text display

**Search Results:**
- Results count badge
- Individual result cards showing:
  - Page numbers
  - Content previews (truncated)
  - Clean card layout

## Types

All components use extracted types from the AI SDK:

```tsx
import type { 
  ChatMessage,
  PresetQuestion,
  ChatEmptyState,
  SearchResult,
  SearchPDFResult
} from "@/components/ui/chat/types";
```

## Styling

Components use shadcn/ui components and Tailwind CSS classes. Key design features:

- **Color-coded parts**: Different colors for different message part types
- **Consistent spacing**: Proper padding and margins throughout
- **Smooth animations**: Loading states and transitions
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Responsive**: Mobile-first design that scales up

## Customization

All components accept className props for custom styling:

```tsx
<Chat
  className="border-2 border-primary rounded-lg"
  // ... other props
/>
```

Individual components can be styled separately for maximum flexibility.