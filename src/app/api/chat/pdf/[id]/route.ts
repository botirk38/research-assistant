import type { NextRequest } from "next/server";
import { streamText, tool, type Message } from "ai";
import { openai } from "@ai-sdk/openai";
import { WebPDFLoader } from "@langchain/community/document_loaders/web/pdf";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { OpenAIEmbeddings } from "@langchain/openai";
import { z } from "zod";
import type { Document } from "@langchain/core/documents";

// Types
interface VectorStoreWithSearch extends MemoryVectorStore {
  similaritySearch(query: string, k: number): Promise<Document[]>;
}

interface RequestBody {
  messages: Message[];
  pdfUrl: string;
  publicationTitle: string;
  publicationAuthors: string;
  publicationJournal: string;
  publicationYear: number;
}

interface SearchResult {
  content: string;
  page: number;
}

// PDF Processing
async function loadPDFFromUrl(url: string) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch PDF: ${response.statusText}`);
  }
  return await response.blob();
}

async function extractTextFromPDF(pdfBlob: Blob) {
  const loader = new WebPDFLoader(pdfBlob, { splitPages: false });
  return await loader.load();
}

async function createTextChunks(
  documents: Document<Record<string, unknown>>[],
) {
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200,
  });
  return await splitter.splitDocuments(documents);
}

async function createVectorStore(chunks: Document<Record<string, unknown>>[]) {
  const embeddings = new OpenAIEmbeddings();
  return await MemoryVectorStore.fromDocuments(chunks, embeddings);
}

// Search
async function searchPDF(
  query: string,
  pdfUrl: string,
): Promise<SearchResult[]> {
  try {
    const pdfBlob = await loadPDFFromUrl(pdfUrl);
    const documents = await extractTextFromPDF(pdfBlob);
    const chunks = await createTextChunks(documents);
    const vectorStore = await createVectorStore(chunks);

    const results = await (
      vectorStore as VectorStoreWithSearch
    ).similaritySearch(query, 3);

    return results.map((doc: Document, i: number) => ({
      content: doc.pageContent,
      page: (doc.metadata as { page?: number })?.page ?? i + 1,
    }));
  } catch (error) {
    console.error("Search error:", error);
    return [];
  }
}

// API Handler
export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as RequestBody;
    const {
      messages,
      pdfUrl,
      publicationTitle,
      publicationAuthors,
      publicationJournal,
      publicationYear,
    } = body;

    if (!pdfUrl) {
      return new Response("PDF URL is required", { status: 400 });
    }

    const result = streamText({
      model: openai("gpt-4o"),
      messages,
      tools: {
        searchPDF: tool({
          description: "Search for information in the PDF document",
          parameters: z.object({
            query: z.string().describe("Search query to find relevant content"),
          }),
          execute: async ({ query }) => {
            const results = await searchPDF(query, pdfUrl);
            return { results };
          },
        }),
      },
      system: `You are analyzing "${publicationTitle}" by ${publicationAuthors} (${publicationJournal}, ${publicationYear}).

Use the searchPDF tool to find relevant information. Always cite page numbers when referencing content.`,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("API error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
