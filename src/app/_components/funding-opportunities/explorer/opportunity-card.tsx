"use client";

import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { FundingOpportunity } from "@/types/researcher";
import { explorationAreas, fullResearchAreas } from "@/lib/data/publications";
import Link from "next/link";

interface OpportunityCardProps {
  opportunity: FundingOpportunity;
}

// Helper to determine area type for a category
function getCategoryType(category: string) {
  if (fullResearchAreas.some((r) => r.label === category))
    return "Research Area";
  if (explorationAreas.some((r) => r.label === category))
    return "Exploration Area";
  return null;
}

export function OpportunityCard({ opportunity }: OpportunityCardProps) {
  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, "MMMM d, yyyy");
  };

  // Calculate days until deadline
  const getDaysUntilDeadline = (dateString: string) => {
    const deadline = new Date(dateString);
    const today = new Date();
    const diffTime = deadline.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // Get category type
  const categoryType = getCategoryType(opportunity.category);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl">{opportunity.title}</CardTitle>
            <CardDescription className="mt-1 text-base">
              {opportunity.organization}
            </CardDescription>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold">{opportunity.amount}</div>
            <div className="text-muted-foreground text-sm">
              Deadline: {formatDate(opportunity.deadline)}
            </div>
            {getDaysUntilDeadline(opportunity.deadline) <= 30 && (
              <Badge
                variant={
                  getDaysUntilDeadline(opportunity.deadline) <= 14
                    ? "destructive"
                    : "default"
                }
                className="mt-1"
              >
                {getDaysUntilDeadline(opportunity.deadline)} days left
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-muted">
              {opportunity.category}
            </Badge>
            {categoryType && (
              <Badge
                variant={
                  categoryType === "Research Area" ? "default" : "secondary"
                }
                className="text-xs"
              >
                {categoryType}
              </Badge>
            )}
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-sm font-medium">Match Score:</span>
            <Badge
              variant={opportunity.matchScore > 85 ? "default" : "secondary"}
              className={opportunity.matchScore > 85 ? "bg-green-500" : ""}
            >
              {opportunity.matchScore}%
            </Badge>
          </div>
        </div>
        <p className="mb-4">{opportunity.description}</p>

        <div className="text-muted-foreground text-sm">
          <span className="font-medium">Eligibility:</span>{" "}
          {opportunity.eligibility}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-4 border-t pt-4 sm:flex-row sm:justify-between">
        <div className="text-sm">
          <p className="font-medium">Contact:</p>
          <p>{opportunity.contactInfo.name}</p>
          <p>{opportunity.contactInfo.email}</p>
        </div>
        <div className="flex gap-2 self-end">
          <Button asChild>
            <Link href={`/opportunities/${opportunity.id}`}>
              View Full Details
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
