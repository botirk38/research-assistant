import { Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ITEMS_PER_PAGE_OPTIONS } from "@/utils/pagination";

interface ItemsPerPageSelectorProps {
  itemsPerPage: number;
  autoCalculatePageSize: boolean;
  onItemsPerPageChange: (value: string) => void;
  onAutoCalculateToggle: (enabled: boolean) => void;
}

export function ItemsPerPageSelector({
  itemsPerPage,
  autoCalculatePageSize,
  onItemsPerPageChange,
  onAutoCalculateToggle,
}: ItemsPerPageSelectorProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm">
          <Settings2 className="mr-2 h-4 w-4" />
          {itemsPerPage} per page
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="auto-calculate">Auto-calculate page size</Label>
            <div className="flex items-center space-x-2">
              <Switch
                id="auto-calculate"
                checked={autoCalculatePageSize}
                onCheckedChange={onAutoCalculateToggle}
              />
              <Label
                htmlFor="auto-calculate"
                className="text-muted-foreground text-sm"
              >
                Adjust based on screen size
              </Label>
            </div>
          </div>

          {!autoCalculatePageSize && (
            <div className="space-y-2">
              <Label htmlFor="items-per-page">Items per page</Label>
              <Select
                value={itemsPerPage.toString()}
                onValueChange={onItemsPerPageChange}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {ITEMS_PER_PAGE_OPTIONS.map((option) => (
                    <SelectItem key={option} value={option.toString()}>
                      {option} items
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {autoCalculatePageSize && (
            <p className="text-muted-foreground text-sm">
              Page size is automatically calculated based on your screen size
              and view mode. Current: {itemsPerPage} items
            </p>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
