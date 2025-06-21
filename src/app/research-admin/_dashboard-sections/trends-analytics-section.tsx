import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ComparisonTrends } from "@/components/charts";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BarChart3, TrendingUp, Users2, Share2 } from "lucide-react";

type TrendMetric =
  | "publications"
  | "ref"
  | "interdisciplinary"
  | "collaborations";

const trends: {
  metric: TrendMetric;
  title: string;
  icon: React.ReactNode;
  description: string;
}[] = [
  {
    metric: "publications",
    title: "Publications",
    icon: <BarChart3 className="text-primary h-5 w-5" />,
    description: "Track publications over the selected period",
  },
  {
    metric: "ref",
    title: "REF Scores",
    icon: <TrendingUp className="h-5 w-5 text-green-600" />,
    description: "Track REF scores over the selected period",
  },
  {
    metric: "interdisciplinary",
    title: "Interdisciplinary",
    icon: <Users2 className="h-5 w-5 text-blue-600" />,
    description: "Track interdisciplinary research over time",
  },
  {
    metric: "collaborations",
    title: "Collaborations",
    icon: <Share2 className="h-5 w-5 text-purple-600" />,
    description: "Track collaborations over time",
  },
];

export function TrendsAnalyticsSection() {
  const [selectedMetric, setSelectedMetric] =
    useState<TrendMetric>("publications");

  return (
    <section className="space-y-10">
      <div>
        <h2 className="mb-1 text-3xl font-bold">Trends & Analytics</h2>
        <p className="text-muted-foreground mb-4 text-lg">
          Historical performance trends and key performance indicators
        </p>
        <hr className="border-muted-foreground/20 my-4" />
      </div>
      <Tabs
        value={selectedMetric}
        onValueChange={(v) => setSelectedMetric(v as TrendMetric)}
      >
        <TabsList>
          {trends.map((trend) => (
            <TabsTrigger key={trend.metric} value={trend.metric}>
              {trend.icon}
              {trend.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {trends.map((trend) => (
          <TabsContent key={trend.metric} value={trend.metric}>
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  {trend.title} Trend
                </CardTitle>
                <CardDescription>{trend.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ComparisonTrends metric={trend.metric} />
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}

export default TrendsAnalyticsSection;
