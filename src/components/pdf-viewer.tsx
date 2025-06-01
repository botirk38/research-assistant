"use client";

import { useTheme } from "next-themes";
import { Worker, Viewer, SpecialZoomLevel } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { Card } from "@/components/ui/card";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "@react-pdf-viewer/search/lib/styles/index.css";

interface PDFViewerProps {
  fileUrl: string;
  className?: string;
  height?: string;
}

export function PDFViewer({
  fileUrl,
  className,
  height = "70vh",
}: PDFViewerProps) {
  const { resolvedTheme } = useTheme();
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <Card
      className={`border-border overflow-hidden p-0 shadow-xl ${className}`}
    >
      <div
        className="h-full overflow-auto"
        style={{ height, maxHeight: height }}
      >
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <Viewer
            fileUrl={fileUrl}
            plugins={[defaultLayoutPluginInstance]}
            theme={resolvedTheme === "dark" ? "dark" : "light"}
            defaultScale={SpecialZoomLevel.PageFit}
          />
        </Worker>
      </div>
    </Card>
  );
}
