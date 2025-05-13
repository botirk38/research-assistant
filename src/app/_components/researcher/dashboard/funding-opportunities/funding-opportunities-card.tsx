import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import type { FundingOpportunity } from "@/types/researcher";
import { Button } from "@/components/ui/button";
import { DollarSign } from "lucide-react";

interface FundingCardProps {
  data: FundingOpportunity[];
  onFundingOpportunityClick: (id: string) => void;
}

const FundingCard: React.FC<FundingCardProps> = ({
  data,
  onFundingOpportunityClick,
}) => (
  <Card className="border-t-destructive border-border border border-t-4 transition-shadow hover:shadow-md">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <DollarSign className="text-destructive h-5 w-5" />
        Funding Opportunities
      </CardTitle>
      <CardDescription>
        Personalized grant recommendations based on your research profile
      </CardDescription>
    </CardHeader>
    <CardContent className="space-y-3">
      {data.map((opportunity, index) => (
        <div
          key={index}
          className="border-destructive/20 bg-destructive/5 rounded-lg border p-4"
        >
          <div className="flex justify-between">
            <h3 className="text-card-foreground font-medium">
              {opportunity.title}
            </h3>
            <span className="text-destructive font-medium">
              {opportunity.amount}
            </span>
          </div>
          <p className="text-muted-foreground mt-1 text-sm">
            Deadline: {opportunity.deadline}
          </p>
          <div className="mt-3 flex justify-end">
            <Button
              size="sm"
              className="bg-destructive text-primary-foreground hover:bg-destructive/90"
              onClick={() => onFundingOpportunityClick(opportunity.id)}
            >
              View Details
            </Button>
          </div>
        </div>
      ))}
    </CardContent>
  </Card>
);

export default FundingCard;
