import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ContactCard } from "../../_components/funding-opportunities/contact-card";
import { FundingHeader } from "../../_components/funding-opportunities/funding-header";
import { FundingSidebar } from "../../_components/funding-opportunities/funding-sidebar";
import { FundingTabs } from "../../_components/funding-opportunities/funding-tabs";
import { AIReviewSection } from "@/components/ai-review-section";
import { getOpportunity } from "@/lib/data/funding-opportunities";

export default async function FundingDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const opportunity = getOpportunity(id);

  if (!opportunity) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Funding opportunity not found</h1>
        <p className="text-muted-foreground mt-2">
          The requested funding opportunity could not be found.
        </p>
        <Link href="/researcher" className="mt-4">
          <Button variant="outline">Back to Dashboard</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex w-full items-center justify-center">
      <div className="container items-center space-y-8 py-6">
        <FundingHeader
          title={opportunity.title}
          organization={opportunity.organization}
          category={opportunity.category}
        />

        <div className="grid gap-6 md:grid-cols-3">
          <div className="space-y-6 md:col-span-2">
            <FundingTabs
              description={opportunity.description}
              eligibility={opportunity.eligibility}
              requirements={opportunity.requirements}
              keyDates={opportunity.keyDates}
            />
          </div>

          <div className="space-y-6">
            <FundingSidebar
              amount={opportunity.amount}
              deadline={opportunity.deadline}
              matchScore={opportunity.matchScore}
            />
            <ContactCard contactInfo={opportunity.contactInfo} />
          </div>
        </div>

        <div className="mt-8">
          <AIReviewSection analysis={opportunity.aiAnalysis} />
        </div>
      </div>
    </div>
  );
}
