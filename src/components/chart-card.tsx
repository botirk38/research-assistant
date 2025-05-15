import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

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
    <CardContent className="h-full w-full px-3">{children}</CardContent>
  </Card>
);

export default ChartCard;
