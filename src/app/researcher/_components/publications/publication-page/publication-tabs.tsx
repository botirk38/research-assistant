"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import {
  FileText,
  BarChart3,
  MessageSquare,
  X,
  PanelRightClose,
} from "lucide-react";
import { AIChatPanel } from "./ai-chat-panel";
import { useState } from "react";

import type { Publication } from "@/types/researcher";
import { PDFViewer } from "@/components/pdf-viewer";

interface PublicationTabsProps {
  publication: Publication;
}

export function PublicationTabs({ publication }: PublicationTabsProps) {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="w-full">
      {/* Header with tabs and chat toggle */}
      <div className="flex items-center justify-between border-b">
        <Tabs defaultValue="pdf" className="flex-1">
          <TabsList className="grid w-full grid-cols-2 lg:w-auto">
            <TabsTrigger value="pdf" className="gap-2">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Document</span>
            </TabsTrigger>
            <TabsTrigger value="details" className="gap-2">
              <BarChart3 className="h-4 w-4" />
              <span className="hidden sm:inline">Details</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pdf" className="mt-4">
            <ResizablePanelGroup
              direction="horizontal"
              className="h-[calc(100vh-8rem)]"
            >
              <ResizablePanel defaultSize={showChat ? 65 : 100} minSize={40}>
                <div className="relative h-full">
                  <PDFViewer fileUrl={publication.pdfUrl} height="100vh" />

                  {/* Floating AI Chat Toggle Button */}
                  <Button
                    onClick={() => setShowChat(!showChat)}
                    className="fixed right-6 bottom-6 z-10 h-12 w-12 rounded-full shadow-lg"
                    size="icon"
                    variant={showChat ? "secondary" : "default"}
                  >
                    {showChat ? (
                      <PanelRightClose className="h-5 w-5" />
                    ) : (
                      <>
                        <MessageSquare className="h-5 w-5" />
                        <span className="bg-primary absolute -top-1 -right-1 h-3 w-3 animate-pulse rounded-full" />
                      </>
                    )}
                  </Button>
                </div>
              </ResizablePanel>

              {showChat && (
                <>
                  <ResizableHandle className="bg-border hover:bg-border/80 w-2 transition-colors" />
                  <ResizablePanel defaultSize={35} minSize={25} maxSize={60}>
                    <div className="bg-background/50 h-full border-l backdrop-blur-sm">
                      <div className="bg-background flex items-center justify-between border-b p-4">
                        <div className="flex items-center gap-2">
                          <MessageSquare className="text-primary h-4 w-4" />
                          <h3 className="text-sm font-semibold">
                            AI Assistant
                          </h3>
                        </div>
                        <Button
                          onClick={() => setShowChat(false)}
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="h-[calc(100%-4rem)]">
                        <AIChatPanel publication={publication} />
                      </div>
                    </div>
                  </ResizablePanel>
                </>
              )}
            </ResizablePanelGroup>
          </TabsContent>

          <TabsContent value="details" className="mt-4 space-y-6">
            <div className="mx-auto max-w-4xl space-y-6">
              {/* Publication Metadata */}
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h2 className="text-2xl leading-tight font-bold">
                        {publication.title}
                      </h2>
                      <p className="text-muted-foreground mt-2">
                        {publication.coAuthors?.join(", ")} • {publication.year}
                      </p>
                    </div>

                    {publication.journal && (
                      <div className="flex items-center gap-2 text-sm">
                        <span className="font-medium">Published in:</span>
                        <span className="text-muted-foreground">
                          {publication.journal}
                        </span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Abstract */}
              {publication.abstract && (
                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                      <div className="bg-primary h-2 w-2 rounded-full" />
                      Abstract
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {publication.abstract}
                    </p>
                  </CardContent>
                </Card>
              )}

              {/* References */}
              {publication.references && publication.references.length > 0 && (
                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                      <div className="bg-primary h-2 w-2 rounded-full" />
                      References
                      <span className="text-muted-foreground text-sm font-normal">
                        ({publication.references.length})
                      </span>
                    </h3>
                    <ScrollArea className="h-[400px] pr-4">
                      <div className="space-y-3">
                        {publication.references.map((ref, index) => (
                          <div
                            key={index}
                            className="group border-border/50 hover:border-border rounded-lg border p-3 transition-colors"
                          >
                            <div className="flex gap-3">
                              <span className="text-muted-foreground mt-1 min-w-[2rem] font-mono text-xs">
                                [{index + 1}]
                              </span>
                              <p className="text-sm leading-relaxed">{ref}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
