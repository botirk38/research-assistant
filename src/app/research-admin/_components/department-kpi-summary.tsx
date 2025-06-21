import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DepartmentKPIChart } from "@/components/charts";

export function DepartmentKPISummary() {
  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold">
          Department KPI Summary
        </CardTitle>
      </CardHeader>
      <CardContent>
        <DepartmentKPIChart />
      </CardContent>
    </Card>
  );
}

export default DepartmentKPISummary;
