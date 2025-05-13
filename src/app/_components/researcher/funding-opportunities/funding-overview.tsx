interface FundingOverviewProps {
  description: string
  eligibility: string
}

export function FundingOverview({ description, eligibility }: FundingOverviewProps) {
  return (
    <div className="space-y-4 pt-4">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Description</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Eligibility</h2>
        <p className="text-muted-foreground">{eligibility}</p>
      </div>
    </div>
  )
}
