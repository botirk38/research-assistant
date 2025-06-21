import type { ResearcherStats } from "@/types/researcher";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const StatCards = ({ stats }: { stats: ResearcherStats }) => {
  return (
    <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
      <Card>
        <CardHeader className="p-4 pb-2">
          <CardDescription>Publications</CardDescription>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <CardTitle>{stats.publications}</CardTitle>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="p-4 pb-2">
          <CardDescription>Citations</CardDescription>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <CardTitle>{stats.citations.toLocaleString()}</CardTitle>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="p-4 pb-2">
          <CardDescription>h-index</CardDescription>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <CardTitle>{stats.hIndex}</CardTitle>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="p-4 pb-2">
          <CardDescription>Collaborators</CardDescription>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <CardTitle>{stats.collaborators}</CardTitle>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatCards;
