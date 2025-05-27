"use client";

import {
  ExternalLink,
  BookOpen,
  Users,
  Award,
  Compass,
  Beaker,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { Publication } from "@/types/researcher";

interface PublicationCardProps {
  publication: Publication;
}

export function PublicationCard({ publication }: PublicationCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle className="text-xl">{publication.title}</CardTitle>
            <p className="text-muted-foreground mt-1">{publication.subtitle}</p>
          </div>
          <div className="flex shrink-0 items-center space-x-2">
            <Badge variant="outline" className="flex items-center gap-1">
              <Award className="h-3 w-3" />
              {publication.citations} citations
            </Badge>
            <Badge>{publication.year}</Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm">
              <BookOpen className="text-muted-foreground mr-2 h-4 w-4" />
              <span className="font-medium">{publication.journal}</span>
            </div>
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
          </div>

          <div>
            <div className="mb-2 flex items-center">
              <Users className="text-muted-foreground mr-2 h-4 w-4" />
              <span className="text-sm font-medium">Co-Authors</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {publication.coAuthors.map((author, index) => (
                <Badge key={index} variant="secondary" className="font-normal">
                  {author}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <div className="text-muted-foreground text-sm">
          Published in {publication.year}
        </div>
        <Button variant="outline" size="sm" asChild>
          <a
            href={publication.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            View Publication
            <ExternalLink className="ml-2 h-3 w-3" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
