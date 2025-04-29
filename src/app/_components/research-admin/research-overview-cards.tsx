import {
  BarChart3,
  BookOpen,
  Building2,
  FileText,
  Network,
  PieChart,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ResearchOverviewCards() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card className="bg-card border-border text-card-foreground border">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            University Wide Overview
          </CardTitle>
          <FileText className="text-chart-1 h-4 w-4" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1,248</div>
          <p className="text-muted-foreground text-xs">
            Total publications in current period
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border-border text-card-foreground border">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            University Wide Overview - REF
          </CardTitle>
          <BarChart3 className="text-chart-2 h-4 w-4" />
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <div className="flex flex-col">
              <span className="text-xs">
                4*: <span className="font-bold">218</span>
              </span>
              <span className="text-xs">
                3*: <span className="font-bold">432</span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs">
                2*: <span className="font-bold">356</span>
              </span>
              <span className="text-xs">
                1*: <span className="font-bold">242</span>
              </span>
            </div>
          </div>
          <p className="text-muted-foreground mt-2 text-xs">
            Quantity in each REF score
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border-border text-card-foreground border">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Interdisciplinary Papers
          </CardTitle>
          <Network className="text-chart-3 h-4 w-4" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">324</div>
          <p className="text-muted-foreground text-xs">
            Breakdown by department
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border-border text-card-foreground border">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Research Publications by Rankings
          </CardTitle>
          <BookOpen className="text-chart-4 h-4 w-4" />
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <div className="flex flex-col">
              <span className="text-xs">
                A*: <span className="font-bold">156</span>
              </span>
              <span className="text-xs">
                A: <span className="font-bold">287</span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs">
                B: <span className="font-bold">412</span>
              </span>
              <span className="text-xs">
                C: <span className="font-bold">393</span>
              </span>
            </div>
          </div>
          <p className="text-muted-foreground mt-2 text-xs">
            Conference/Journal Rankings (CORE)
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border-border text-card-foreground border">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Department-wise Breakdown
          </CardTitle>
          <PieChart className="text-chart-5 h-4 w-4" />
        </CardHeader>
        <CardContent>
          <div className="flex h-10 w-full items-center space-x-1">
            <div className="bg-chart-1 h-2 w-1/4 rounded-full"></div>
            <div className="bg-chart-2 h-2 w-1/5 rounded-full"></div>
            <div className="bg-chart-3 h-2 w-1/6 rounded-full"></div>
            <div className="bg-chart-4 h-2 w-1/3 rounded-full"></div>
          </div>
          <p className="text-muted-foreground mt-2 text-xs">
            REF scores distribution
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border-border text-card-foreground border">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Internal/External Institute Papers
          </CardTitle>
          <Building2 className="text-primary h-4 w-4" />
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <div>
              <div className="text-lg font-bold">742</div>
              <p className="text-muted-foreground text-xs">Internal</p>
            </div>
            <div>
              <div className="text-lg font-bold">506</div>
              <p className="text-muted-foreground text-xs">External</p>
            </div>
          </div>
          <p className="text-muted-foreground mt-2 text-xs">By department</p>
        </CardContent>
      </Card>
    </div>
  );
}
