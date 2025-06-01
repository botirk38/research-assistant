"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import type { Collaborator } from "@/types/researcher";
import { Users, Settings } from "lucide-react";
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
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="space-y-1">
          <CardTitle className="flex items-center gap-2">
            <Users className="text-muted-foreground h-5 w-5" />
            Potential Research Collaborations
          </CardTitle>
        </div>
        <Button variant="outline" size="sm" className="rounded-full p-2">
          <Settings className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {collaborators.map((collaborator, index) => (
          <div
            key={index}
            className="border-border hover:bg-accent rounded-lg border p-3"
          >
            <div className="flex items-center justify-between">
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
                className="border-border text-card-foreground"
                onClick={() => onConnectClick(collaborator.id)}
              >
                Connect
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default CollaborationCard;
