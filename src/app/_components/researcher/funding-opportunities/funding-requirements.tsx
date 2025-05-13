interface FundingRequirementsProps {
  requirements: string[];
}

export function FundingRequirements({
  requirements,
}: FundingRequirementsProps) {
  return (
    <div className="space-y-4 pt-4">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Application Requirements</h2>
        <ul className="text-muted-foreground list-disc space-y-1 pl-5">
          {requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
