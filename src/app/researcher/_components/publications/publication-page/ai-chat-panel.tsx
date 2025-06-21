"use client";

import { useCallback } from "react";
import { useChat } from "@ai-sdk/react";
import { Chat } from "@/components/ui/chat";
import { FileText } from "lucide-react";
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
    useChat({
      api: `/api/chat/pdf/${publication.id}`,
      body: {
        pdfUrl: publication.pdfUrl,
        publicationTitle: publication.title,
        publicationAuthors: publication.coAuthors?.join(", "),
        publicationJournal: publication.journal,
        publicationYear: publication.year,
        publicationAbstract: publication.abstract,
      },
    });

  const handleQuestionSelect = useCallback(
    (question: string) => {
      const event = {
        target: { value: question },
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
    <div className={`h-full ${className}`}>
      <Chat
        messages={messages}
        input={input}
        onInputChange={handleInputChange}
        onSubmit={handleChatSubmit}
        onQuestionSelect={handleQuestionSelect}
        isLoading={isLoading}
        placeholder={placeholder}
        presetQuestions={presetQuestions}
        emptyState={{
          title: "Ask me anything",
          description:
            "I can help you understand this publication, summarize key points, or answer specific questions about the research.",
          icon: <FileText className="mx-auto h-12 w-12" />,
        }}
        className="bg-background border-0"
      />
    </div>
  );
}
