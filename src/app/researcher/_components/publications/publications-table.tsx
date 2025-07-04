import type { Publication } from "@/types/researcher";
import { ExternalLink, Beaker, Compass } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface PublicationsTableProps {
  publications: Publication[];
}

export function PublicationsTable({ publications }: PublicationsTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="w-full text-sm">
        <thead className="bg-muted/50">
          <tr>
            <th className="px-4 py-3 text-left font-medium whitespace-nowrap">
              Title
            </th>
            <th className="px-4 py-3 text-left font-medium whitespace-nowrap">
              Journal
            </th>
            <th className="px-4 py-3 text-left font-medium whitespace-nowrap">
              Year
            </th>
            <th className="px-4 py-3 text-left font-medium whitespace-nowrap">
              Citations
            </th>
            <th className="px-4 py-3 text-left font-medium whitespace-nowrap">
              Authors
            </th>
            <th className="px-4 py-3 text-left font-medium whitespace-nowrap">
              Type
            </th>
            <th className="sr-only px-4 py-3 text-left font-medium whitespace-nowrap">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {publications.map((publication, index) => (
            <tr key={index} className="hover:bg-muted/50 border-t">
              <td className="px-4 py-3">
                <div>
                  <div className="font-medium">{publication.title}</div>
                  <div className="text-muted-foreground text-xs">
                    {publication.subtitle}
                  </div>
                </div>
              </td>
              <td className="px-4 py-3">{publication.journal}</td>
              <td className="px-4 py-3">{publication.year}</td>
              <td className="px-4 py-3">{publication.citations}</td>
              <td className="px-4 py-3">
                <div className="text-muted-foreground">
                  {publication.coAuthors.join(", ")}
                </div>
              </td>
              <td className="px-4 py-3">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Badge
                        variant="secondary"
                        className="flex items-center gap-2"
                      >
                        {publication.recommendationType === "research-area" ? (
                          <>
                            <Beaker className="h-3 w-3" />
                            Research Area
                          </>
                        ) : (
                          <>
                            <Compass className="h-3 w-3" />
                            Exploration Area
                          </>
                        )}
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                      {publication.recommendationType === "research-area"
                        ? "Matches your current research areas"
                        : "Suggested based on potential new research directions"}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </td>
              <td className="px-4 py-3">
                <Link
                  href={`/researcher/publications/${publication.id}`}
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span className="sr-only">View publication</span>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
