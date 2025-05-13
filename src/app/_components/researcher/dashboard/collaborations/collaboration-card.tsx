"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import type { Collaborator } from "@/types/researcher";
import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CollaborationCardProps {
  collaborators: Collaborator[];
  onConnectClick: (id: string) => void;
}

const CollaborationCard: React.FC<CollaborationCardProps> = ({
  collaborators,
  onConnectClick,
}) => {
  return (
    <Card className="transition-shadow hover:shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="text-muted-foreground h-5 w-5" />
          Potential Research Collaborations
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {collaborators.map((collaborator, index) => (
          <div
            key={index}
            className="bg-accent flex items-center justify-between rounded-lg p-3"
          >
            <div className="flex-1">
              <h3 className="text-card-foreground font-medium">
                {collaborator.name}
              </h3>
              <p className="text-muted-foreground text-sm">
                {collaborator.affiliation}
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="border-border text-card-foreground hover:bg-accent"
              onClick={() => onConnectClick(collaborator.id)}
            >
              Connect
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default CollaborationCard;
