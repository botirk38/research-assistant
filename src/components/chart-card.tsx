import  { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

const ChartCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <Card>
    <CardHeader>
      <CardTitle className="text-lg">{title}</CardTitle>
    </CardHeader>
    <CardContent className="h-64">{children}</CardContent>
  </Card>
);

export default ChartCard;
