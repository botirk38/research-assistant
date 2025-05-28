"use client";

import { useCallback } from "react";
import { useChat } from "@ai-sdk/react";
import { useTheme } from "next-themes";
import { Worker, Viewer, SpecialZoomLevel } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, FileText, Send } from "lucide-react";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "@react-pdf-viewer/search/lib/styles/index.css";

// Hardcoded PDF
const pdfUrl = "https://arxiv.org/pdf/2203.15556.pdf";
const fileName = "2203.15556.pdf";

export default function PDFChatApp() {
  const { resolvedTheme } = useTheme();

  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({ api: "/api/chat" });

  // Preset chat buttons should set the input field directly
  const setInputValue = useCallback(
    (value: string) => {
      const event = {
        target: { value },
      } as React.ChangeEvent<HTMLInputElement>;
      handleInputChange(event);
    },
    [handleInputChange],
  );

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const handleChatSubmit = useCallback(
    (event: React.FormEvent) => {
      handleSubmit(event);
    },
    [handleSubmit],
  );

  return (
    <div className="bg-background flex h-screen flex-col">
      {/* Header */}
      <header className="border-border bg-background/80 border-b shadow-sm backdrop-blur-md">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <FileText className="text-primary h-8 w-8" />
            <h1 className="from-primary to-accent bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent">
              PDF AI Chat
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="bg-secondary/50">
              {fileName}
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* PDF Viewer Panel */}
        <div className="bg-card flex flex-1 flex-col overflow-y-auto">
          <div className="flex-1 p-4">
            <div className="bg-card border-border h-full min-h-[70vh] overflow-auto rounded-lg border shadow-xl">
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                <Viewer
                  fileUrl={pdfUrl}
                  plugins={[defaultLayoutPluginInstance]}
                  theme={resolvedTheme === "dark" ? "dark" : "light"}
                  defaultScale={SpecialZoomLevel.PageFit}
                />
              </Worker>
            </div>
          </div>
        </div>

        {/* Chat Panel */}
        <div className="border-border bg-background/80 flex w-96 flex-col overflow-hidden border-l backdrop-blur-md">
          <CardHeader className="p-4">
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="text-primary h-5 w-5" />
              <span>AI Assistant</span>
            </CardTitle>
            <p className="text-muted-foreground text-sm">
              Ask questions about your PDF content
            </p>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col overflow-hidden p-0">
            {/* Messages */}
            <div className="min-h-0 flex-1">
              <ScrollArea className="h-full px-4">
                <div className="space-y-4 pb-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-lg p-3 ${
                          message.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-foreground"
                        }`}
                      >
                        <div className="text-sm whitespace-pre-wrap">
                          {message.content}
                        </div>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-muted max-w-[85%] rounded-lg p-3">
                        <div className="flex items-center gap-2">
                          <div className="flex gap-1">
                            <div className="bg-primary h-2 w-2 animate-bounce rounded-full"></div>
                            <div
                              className="bg-primary h-2 w-2 animate-bounce rounded-full"
                              style={{ animationDelay: "0.1s" }}
                            ></div>
                            <div
                              className="bg-primary h-2 w-2 animate-bounce rounded-full"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                          </div>
                          <span className="text-muted-foreground text-sm">
                            AI is thinking...
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>
            </div>
            {/* Chat Input */}
            <div className="border-border bg-background border-t p-4">
              <form onSubmit={handleChatSubmit} className="space-y-3">
                <div className="flex gap-2">
                  <Input
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Ask about the PDF content..."
                    disabled={isLoading}
                    className="flex-1"
                    onKeyPress={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleChatSubmit(e);
                      }
                    }}
                  />
                  <Button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="bg-primary hover:bg-primary/90"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setInputValue("Summarize this document")}
                    disabled={isLoading}
                  >
                    Summarize
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setInputValue("What are the key findings?")}
                    disabled={isLoading}
                  >
                    Key Findings
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setInputValue("Explain the methodology")}
                    disabled={isLoading}
                  >
                    Methodology
                  </Button>
                </div>
              </form>
            </div>
          </CardContent>
        </div>
      </div>
    </div>
  );
}
