import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Calendar,
  Users,
  Quote,
  ExternalLink,
  Download,
  BookOpen,
  Award,
} from "lucide-react";
import type { Publication } from "@/types/researcher";
import Link from "next/link";

interface PublicationHeaderProps {
  publication: Publication;
}

export function PublicationHeader({ publication }: PublicationHeaderProps) {
  return (
    <Card className="border-border from-background to-muted/20 bg-gradient-to-br">
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Title and Subtitle */}
          <div>
            <h1 className="text-3xl leading-tight font-bold tracking-tight">
              {publication.title}
            </h1>
            {publication.subtitle && (
              <p className="text-muted-foreground mt-2 text-lg">
                {publication.subtitle}
              </p>
            )}
          </div>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-blue-600" />
              <span className="font-medium">{publication.journal}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-green-600" />
              <span>{publication.year}</span>
            </div>
            <div className="flex items-center gap-2">
              <Quote className="h-4 w-4 text-orange-600" />
              <span>{publication.citations} citations</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-purple-600" />
              <span>{publication.coAuthors.length} authors</span>
            </div>
          </div>

          {/* Authors */}
          <div>
            <p className="text-muted-foreground mb-2 text-sm font-medium">
              Authors
            </p>
            <p className="text-sm">{publication.coAuthors.join(", ")}</p>
          </div>

          {/* Keywords */}
          {publication.keywords && publication.keywords?.length > 0 && (
            <div>
              <p className="text-muted-foreground mb-2 text-sm font-medium">
                Keywords
              </p>
              <div className="flex flex-wrap gap-2">
                {publication.keywords.map((keyword, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {keyword}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <Separator />

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            {publication.pdfUrl && (
              <Button size="sm" className="gap-2">
                <Download className="h-4 w-4" />
                Download PDF
              </Button>
            )}
            {publication.doi && (
              <Link
                href={`https://doi.org/${publication.doi}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm" className="gap-2">
                  <ExternalLink className="h-4 w-4" />
                  View on Publisher
                </Button>
              </Link>
            )}
            <Button variant="outline" size="sm" className="gap-2">
              <Quote className="h-4 w-4" />
              Cite
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Award className="h-4 w-4" />
              Related Works
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
