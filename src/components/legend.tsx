import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { LegendProps } from "recharts";

interface CustomLegendProps extends LegendProps {
  activeKeys: Record<string, boolean>;
  toggleKey: (key: string) => void;
}

export const CustomLegend: React.FC<CustomLegendProps> = ({
  payload,
  activeKeys,
  toggleKey,
}) => {
  if (!payload) return null;

  return (
    <div className="flex max-w-full space-x-3 overflow-x-auto px-2 pt-1 text-xs">
      {payload.map((entry, index) => {
        const name = entry.value as string;
        const isActive = activeKeys[name] ?? true;
        const truncatedText =
          name.length > 24 ? `${name.slice(0, 21)}...` : name;

        return (
          <div
            key={`legend-item-${index}`}
            className="flex flex-shrink-0 cursor-pointer items-center space-x-2"
            onClick={() => toggleKey(name)}
          >
            <span
              className="inline-block h-3 w-3 rounded-sm"
              style={{
                backgroundColor: entry.color,
                opacity: isActive ? 1 : 0.3,
              }}
            />
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Badge
                    variant={isActive ? "outline" : "secondary"}
                    className="max-w-[160px] truncate font-normal"
                  >
                    {truncatedText}
                  </Badge>
                </TooltipTrigger>
                <TooltipContent side="top">{name}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        );
      })}
    </div>
  );
};
