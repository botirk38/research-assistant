import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DepartmentInfo = ({
  department,
  institution,
}: {
  department: string;
  institution: string;
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Department</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{department}</p>
        <p className="mt-2">{institution}</p>
      </CardContent>
    </Card>
  );
};

export default DepartmentInfo;
