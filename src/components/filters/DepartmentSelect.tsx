import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DepartmentSelectProps {
  departments: string[];
  selectedDepartment: string;
  onDepartmentChange: (department: string) => void;
  placeholder?: string;
  className?: string;
}

export function DepartmentSelect({
  departments,
  selectedDepartment,
  onDepartmentChange,
  placeholder = "All Departments",
  className,
}: DepartmentSelectProps) {
  return (
    <Select value={selectedDepartment} onValueChange={onDepartmentChange}>
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {departments.map((dept) => (
          <SelectItem key={dept} value={dept}>
            {dept}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default DepartmentSelect;
