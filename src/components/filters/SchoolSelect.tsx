import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SchoolOption {
  label: string;
  value: string;
  icon: React.ElementType;
}

interface SchoolSelectProps {
  schools: SchoolOption[];
  selectedSchool: string;
  onSchoolChange: (school: string) => void;
}

export function SchoolSelect({
  schools,
  selectedSchool,
  onSchoolChange,
}: SchoolSelectProps) {
  return (
    <Select value={selectedSchool} onValueChange={onSchoolChange}>
      <SelectTrigger>
        <SelectValue placeholder="Select a school" />
      </SelectTrigger>
      <SelectContent>
        {schools.map((school) => {
          const Icon = school.icon;
          return (
            <SelectItem key={school.value} value={school.value}>
              <Icon className="mr-2 inline-block h-4 w-4" />
              {school.label}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}
