import { Calendar } from "lucide-react";

interface KeyDate {
  event: string;
  date: string;
}

interface FundingTimelineProps {
  keyDates: KeyDate[];
}

export function FundingTimeline({ keyDates }: FundingTimelineProps) {
  return (
    <div className="space-y-4 pt-4">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Key Dates</h2>
        <div className="space-y-4">
          {keyDates.map((date, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="mt-1 flex-shrink-0">
                <Calendar className="text-muted-foreground h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">{date.event}</p>
                <p className="text-muted-foreground text-sm">{date.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
