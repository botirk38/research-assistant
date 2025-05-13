import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FundingOverview } from "./funding-overview";
import { FundingRequirements } from "./funding-requirements";
import { FundingTimeline } from "./funding-timeline";

interface KeyDate {
  event: string;
  date: string;
}

interface FundingTabsProps {
  description: string;
  eligibility: string;
  requirements: string[];
  keyDates: KeyDate[];
}

export function FundingTabs({
  description,
  eligibility,
  requirements,
  keyDates,
}: FundingTabsProps) {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="requirements">Requirements</TabsTrigger>
        <TabsTrigger value="timeline">Timeline</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <FundingOverview description={description} eligibility={eligibility} />
      </TabsContent>
      <TabsContent value="requirements">
        <FundingRequirements requirements={requirements} />
      </TabsContent>
      <TabsContent value="timeline">
        <FundingTimeline keyDates={keyDates} />
      </TabsContent>
    </Tabs>
  );
}
