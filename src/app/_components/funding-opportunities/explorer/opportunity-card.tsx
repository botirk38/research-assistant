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

interface OpportunityCardProps {
  opportunity: FundingOpportunity;
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
        <div className="mb-4 flex justify-between">
          <Badge variant="outline" className="bg-muted">
            {opportunity.category}
          </Badge>
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
        <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <h4 className="mb-2 text-sm font-semibold">Requirements</h4>
            <ul className="list-disc space-y-1 pl-5 text-sm">
              {opportunity.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-2 text-sm font-semibold">Key Dates</h4>
            <ul className="space-y-1 text-sm">
              {opportunity.keyDates.map((date, index) => (
                <li key={index} className="flex justify-between">
                  <span>{date.event}:</span>
                  <span className="font-medium">{formatDate(date.date)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
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
            <a href={`/opportunities/${opportunity.id}`}>View Full Details</a>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
