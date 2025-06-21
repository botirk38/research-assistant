"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useAnimatedText } from "@/components/ui/animated-text";
import Plan from "@/components/ui/agent-plan";

const mockSchools = [
  { label: "All Schools", value: "All Schools" },
  { label: "School of Computer Science", value: "School of Computer Science" },
  { label: "School of Engineering", value: "School of Engineering" },
  { label: "School of Natural Sciences", value: "School of Natural Sciences" },
  { label: "School of Medicine", value: "School of Medicine" },
  { label: "School of Business", value: "School of Business" },
];

const TOOL_STEPS = [
  { label: "Data Acquisition & Validation" },
  { label: "Data Preprocessing & Cleaning" },
  { label: "Analytical Insights Generation" },
  { label: "Report Drafting & Synthesis" },
  { label: "Recommendations & Action Items" },
];

const MOCK_REPORT = {
  summary:
    "The School of Computer Science demonstrated strong research output in 2023, with a 15% increase in publications and a 10% rise in citations.",
  insights: [
    "Interdisciplinary collaborations increased by 20%",
    "AI and Machine Learning remain the top research areas",
    "External funding grew by $1.2M compared to last year",
  ],
  recommendations: [
    "Encourage more cross-departmental projects",
    "Invest in faculty development for emerging technologies",
    "Expand industry partnerships for applied research",
  ],
};

export default function AIReportsPage() {
  const [selectedSchool, setSelectedSchool] = useState<string>("All Schools");
  const [currentStep, setCurrentStep] = useState<number | null>(null);
  const [aiReportReady, setAIReportReady] = useState(false);
  const [aiReport, setAIReport] = useState<string | null>(null);

  // Use animated text hook for streaming effect
  const animatedReport = useAnimatedText(aiReport ?? "", "");

  // Professional descriptions for each step
  function getDescriptionForStep(idx: number, selectedSchool: string) {
    switch (idx) {
      case 0:
        return `Collect and validate research data for ${selectedSchool}, ensuring completeness and accuracy.`;
      case 1:
        return "Standardize, clean, and preprocess the acquired data to prepare it for analysis, addressing missing values and inconsistencies.";
      case 2:
        return "Apply AI-driven analytics to extract key trends, patterns, and insights relevant to research performance and impact.";
      case 3:
        return "Generate a comprehensive draft report, synthesizing insights and findings into a clear, actionable summary.";
      case 4:
        return "Formulate evidence-based recommendations and actionable items to support strategic decision-making.";
      default:
        return "";
    }
  }

  // Index-based status logic for sequential step progression
  const aiReportTasks = TOOL_STEPS.map((step, idx) => {
    let status: "pending" | "in-progress" | "completed";

    if (aiReportReady && currentStep === null) {
      // All steps are completed when report is ready
      status = "completed";
    } else if (currentStep !== null) {
      if (idx < currentStep) {
        // Steps before current step are completed
        status = "completed";
      } else if (idx === currentStep) {
        // Current step is in progress
        status = "in-progress";
      } else {
        // Steps after current step are pending
        status = "pending";
      }
    } else {
      // Initial state - all pending
      status = "pending";
    }

    return {
      id: (idx + 1).toString(),
      title: step.label,
      description: getDescriptionForStep(idx, selectedSchool),
      status,
      priority: "high",
      level: 0,
      dependencies: idx === 0 ? [] : [idx.toString()],
      subtasks: [],
    };
  });

  const handleGenerateReport = () => {
    setCurrentStep(0);
    setAIReportReady(false);
    setAIReport(null);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < TOOL_STEPS.length) {
        setCurrentStep(step);
      } else {
        clearInterval(interval);
        // Let the last step be "in-progress" for a bit before marking all as completed
        setTimeout(() => {
          setCurrentStep(null);
          setAIReportReady(true);
          const reportText = [
            MOCK_REPORT.summary,
            "",
            "Insights:",
            ...MOCK_REPORT.insights.map((insight) => `- ${insight}`),
            "",
            "Recommendations:",
            ...MOCK_REPORT.recommendations.map((rec) => `- ${rec}`),
          ].join("\n");
          setAIReport(reportText);
        }, 1200); // Show last step as "in-progress" for 1.2s
      }
    }, 1500); // Slightly longer interval for better visibility
  };

  return (
    <div className="bg-background flex min-h-screen w-screen flex-col items-center justify-center pt-10">
      <Card className="border-muted w-full max-w-2xl shadow-md">
        <CardHeader className="pb-2">
          <div className="mb-2 flex items-center gap-2">
            <Sparkles className="text-primary size-6" />
            <CardTitle className="text-xl font-bold">AI Reports</CardTitle>
          </div>
          <CardDescription>
            Instantly generate AI-powered summaries and insights for any school.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              handleGenerateReport();
            }}
          >
            <div className="flex flex-col gap-2">
              <Label htmlFor="school-select">School</Label>
              <Select
                value={selectedSchool}
                onValueChange={setSelectedSchool}
                name="school"
              >
                <SelectTrigger id="school-select" className="w-full">
                  <SelectValue placeholder="Select a school" />
                </SelectTrigger>
                <SelectContent>
                  {mockSchools.map((school) => (
                    <SelectItem key={school.value} value={school.value}>
                      {school.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={currentStep !== null}
            >
              {currentStep !== null ? (
                <>
                  <span className="mr-2 animate-spin">
                    <Sparkles className="size-4" />
                  </span>
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 size-4" />
                  Generate AI Report
                </>
              )}
            </Button>
          </form>
          {/* Show agent plan steps for tool calls */}
          {currentStep !== null && (
            <div className="mt-6 space-y-2">
              <Plan key={`progress-${currentStep}`} tasks={aiReportTasks} />
            </div>
          )}
          {/* Optionally, show the completed plan when report is ready */}
          {currentStep === null && aiReportReady && (
            <div className="mt-6 space-y-2">
              <Plan key="completed" tasks={aiReportTasks} />
            </div>
          )}
          <div className="mt-6">
            <Card className="border-muted-foreground/30 bg-muted min-h-[120px] border-dashed shadow-none">
              <CardContent className="flex flex-col items-center justify-center py-6">
                {aiReport ? (
                  <span className="text-foreground text-center text-base whitespace-pre-wrap">
                    {animatedReport}
                  </span>
                ) : (
                  <span className="text-muted-foreground text-center text-base">
                    AI-generated summary and insights will appear here after you
                    generate a report.
                  </span>
                )}
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
