import FundingExplorer from "../_components/funding-opportunities/funding-explorer";

export default function FundingOpportunitiesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">
        Research Funding Opportunities
      </h1>
      <p className="text-muted-foreground mb-8">
        Discover and explore funding opportunities tailored to your research
        interests and eligibility criteria.
      </p>
      <FundingExplorer />
    </main>
  );
}
