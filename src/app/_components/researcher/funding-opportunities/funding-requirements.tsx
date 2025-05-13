interface FundingRequirementsProps {
  requirements: string[]
}

export function FundingRequirements({ requirements }: FundingRequirementsProps) {
  return (
    <div className="space-y-4 pt-4">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Application Requirements</h2>
        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
          {requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
