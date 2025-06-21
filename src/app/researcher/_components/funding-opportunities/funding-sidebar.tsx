import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

interface FundingSidebarProps {
  amount: string;
  deadline: string;
  matchScore: number;
}

export function FundingSidebar({
  amount,
  deadline,
  matchScore,
}: FundingSidebarProps) {
  return (
    <div className="bg-card rounded-lg border p-4 shadow-sm">
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Award Amount</h3>
            <span className="text-xl font-bold text-red-500">{amount}</span>
          </div>
          <Separator />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Application Deadline</h3>
            <span className="font-medium">{deadline}</span>
          </div>
          <Separator />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Match Score</h3>
            <span className="font-medium">{matchScore}%</span>
          </div>
          <Progress value={matchScore} className="h-2" />
        </div>
        <Button className="w-full bg-red-500 hover:bg-red-600">
          Apply Now
        </Button>
      </div>
    </div>
  );
}
