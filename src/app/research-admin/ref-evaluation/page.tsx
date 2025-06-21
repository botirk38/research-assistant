"use client";

import React, { useState, useMemo } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { PDFViewer } from "@/components/pdf-viewer";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import {
  Users,
  TrendingUp,
  Send,
  Calendar,
  Star,
  Eye,
  School,
  Laptop,
  Hammer,
  FlaskConical,
  Stethoscope,
  Briefcase,
} from "lucide-react";

// Mock school options with icons
const mockSchools = [
  { label: "All Schools", value: "All Schools", icon: School },
  {
    label: "School of Computer Science",
    value: "School of Computer Science",
    icon: Laptop,
  },
  {
    label: "School of Engineering",
    value: "School of Engineering",
    icon: Hammer,
  },
  {
    label: "School of Natural Sciences",
    value: "School of Natural Sciences",
    icon: FlaskConical,
  },
  {
    label: "School of Medicine",
    value: "School of Medicine",
    icon: Stethoscope,
  },
  {
    label: "School of Business",
    value: "School of Business",
    icon: Briefcase,
  },
];

// Mock data for researchers and papers (with school property)
interface Paper {
  id: string;
  title: string;
  journal: string;
  publishedDate: string;
  citations: number;
  impactFactor: number;
  category: string;
  status: "published" | "accepted" | "under-review";
  refScore?: "4*" | "3*" | "2*" | "1*" | "Unclassified";
  pdfUrl?: string;
}

interface Researcher {
  id: string;
  name: string;
  role: string;
  avatar: string;
  school: string;
  papers: Paper[];
}

const mockResearchers: Researcher[] = [
  {
    id: "1",
    name: "Dr. Sarah Chen",
    role: "Senior Research Scientist",
    avatar: "/placeholder.svg?height=50&width=50",
    school: "School of Computer Science",
    papers: [
      {
        id: "p1",
        title:
          "Advanced Machine Learning Approaches for Predictive Analytics in Healthcare Systems",
        journal: "Nature Machine Intelligence",
        publishedDate: "2024-03-15",
        citations: 127,
        impactFactor: 8.5,
        category: "AI/ML",
        status: "published",
        pdfUrl: "https://arxiv.org/pdf/2106.14834.pdf",
        refScore: "4*",
      },
      {
        id: "p2",
        title: "Deep Learning Models for Medical Image Analysis",
        journal: "IEEE Transactions on Medical Imaging",
        publishedDate: "2024-01-10",
        citations: 89,
        impactFactor: 7.2,
        category: "AI/ML",
        status: "published",
        pdfUrl: "https://arxiv.org/pdf/2106.14834.pdf",
        refScore: "3*",
      },
      {
        id: "p3",
        title:
          "Federated Learning in Healthcare: Privacy-Preserving Approaches",
        journal: "Nature Digital Medicine",
        publishedDate: "2024-04-20",
        citations: 45,
        impactFactor: 6.8,
        category: "AI/ML",
        status: "accepted",
        pdfUrl: "https://arxiv.org/pdf/2106.14834.pdf",
        refScore: "2*",
      },
    ],
  },
  {
    id: "2",
    name: "Dr. James Liu",
    role: "Principal Investigator",
    avatar: "/placeholder.svg?height=50&width=50",
    school: "School of Computer Science",
    papers: [
      {
        id: "p4",
        title: "Quantum Computing Applications in Cryptographic Security",
        journal: "Science",
        publishedDate: "2024-02-28",
        citations: 203,
        impactFactor: 9.2,
        category: "Quantum Computing",
        status: "published",
        pdfUrl: "https://arxiv.org/pdf/2106.14834.pdf",
        refScore: "4*",
      },
      {
        id: "p5",
        title: "Quantum Error Correction in NISQ Devices",
        journal: "Physical Review Letters",
        publishedDate: "2024-03-05",
        citations: 156,
        impactFactor: 8.1,
        category: "Quantum Computing",
        status: "published",
        pdfUrl: "https://arxiv.org/pdf/2106.14834.pdf",
        refScore: "3*",
      },
    ],
  },
  {
    id: "3",
    name: "Dr. Maria Garcia",
    role: "Energy Systems Lead",
    avatar: "/placeholder.svg?height=50&width=50",
    school: "School of Engineering",
    papers: [
      {
        id: "p6",
        title:
          "Sustainable Energy Storage Solutions: Novel Battery Technologies",
        journal: "Nature Energy",
        publishedDate: "2024-01-20",
        citations: 178,
        impactFactor: 7.8,
        category: "Energy",
        status: "published",
        pdfUrl: "https://arxiv.org/pdf/2106.14834.pdf",
        refScore: "4*",
      },
      {
        id: "p7",
        title: "Grid-Scale Energy Storage: Economic and Technical Analysis",
        journal: "Energy Policy",
        publishedDate: "2024-02-15",
        citations: 92,
        impactFactor: 6.5,
        category: "Energy",
        status: "published",
        pdfUrl: "https://arxiv.org/pdf/2106.14834.pdf",
        refScore: "3*",
      },
      {
        id: "p8",
        title: "Renewable Energy Integration Challenges",
        journal: "Applied Energy",
        publishedDate: "2024-04-01",
        citations: 67,
        impactFactor: 7.1,
        category: "Energy",
        status: "under-review",
        pdfUrl: "https://arxiv.org/pdf/2106.14834.pdf",
        refScore: "Unclassified",
      },
    ],
  },
  {
    id: "4",
    name: "Dr. Kevin Zhang",
    role: "Bioengineering Lead",
    avatar: "/placeholder.svg?height=50&width=50",
    school: "School of Medicine",
    papers: [
      {
        id: "p9",
        title: "3D Printing and Stem Cell Integration for Tissue Regeneration",
        journal: "Cell",
        publishedDate: "2024-04-10",
        citations: 234,
        impactFactor: 9.1,
        category: "Bioengineering",
        status: "published",
        pdfUrl: "https://arxiv.org/pdf/2106.14834.pdf",
        refScore: "4*",
      },
      {
        id: "p10",
        title: "Biocompatible Materials for Organ-on-Chip Applications",
        journal: "Lab on a Chip",
        publishedDate: "2024-03-22",
        citations: 112,
        impactFactor: 6.9,
        category: "Bioengineering",
        status: "accepted",
        pdfUrl: "https://arxiv.org/pdf/2106.14834.pdf",
        refScore: "3*",
      },
    ],
  },
  {
    id: "5",
    name: "Dr. Emily Watson",
    role: "Research Associate",
    avatar: "/placeholder.svg?height=50&width=50",
    school: "School of Natural Sciences",
    papers: [
      {
        id: "p11",
        title: "Natural Language Processing for Scientific Literature Mining",
        journal: "Computational Linguistics",
        publishedDate: "2024-02-08",
        citations: 78,
        impactFactor: 5.8,
        category: "AI/ML",
        status: "published",
        pdfUrl: "https://arxiv.org/pdf/2106.14834.pdf",
        refScore: "3*",
      },
      {
        id: "p12",
        title: "Automated Research Paper Classification Systems",
        journal: "Journal of Informetrics",
        publishedDate: "2024-03-30",
        citations: 34,
        impactFactor: 4.2,
        category: "AI/ML",
        status: "accepted",
        pdfUrl: "https://arxiv.org/pdf/2106.14834.pdf",
        refScore: "2*",
      },
    ],
  },
];

export default function RefEvaluationPage() {
  const [selectedSchool, setSelectedSchool] = useState<string>("All Schools");
  const [selectedPapers, setSelectedPapers] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSendDialog, setShowSendDialog] = useState(false);

  // Filter researchers by school and search term
  const filteredResearchers = useMemo(() => {
    return mockResearchers.filter(
      (researcher) =>
        (selectedSchool === "All Schools" ||
          researcher.school === selectedSchool) &&
        (researcher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          researcher.papers.some(
            (paper) =>
              paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              paper.journal.toLowerCase().includes(searchTerm.toLowerCase()),
          )),
    );
  }, [selectedSchool, searchTerm]);

  // Get all published paper IDs in the filtered researchers
  const allPublishedPaperIds = useMemo(() => {
    return filteredResearchers.flatMap((researcher) =>
      researcher.papers
        .filter((paper) => paper.status === "published")
        .map((paper) => paper.id),
    );
  }, [filteredResearchers]);

  // PDF dialog state
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const handlePaperSelection = (paperId: string) => {
    setSelectedPapers((prev) =>
      prev.includes(paperId)
        ? prev.filter((id) => id !== paperId)
        : [...prev, paperId],
    );
  };

  const handleSelectAll = () => {
    if (
      allPublishedPaperIds.every((id) => selectedPapers.includes(id)) &&
      allPublishedPaperIds.length > 0
    ) {
      setSelectedPapers((prev) =>
        prev.filter((id) => !allPublishedPaperIds.includes(id)),
      );
    } else {
      setSelectedPapers((prev) => [
        ...new Set([...prev, ...allPublishedPaperIds]),
      ]);
    }
  };

  const handleSend = () => {
    setShowSendDialog(true);
    setTimeout(() => {
      alert(`Sent REF evaluation request to ${selectedPapers.length} paper(s)`);
      setShowSendDialog(false);
      setSelectedPapers([]);
    }, 1000);
  };

  return (
    <div className="container mx-auto space-y-8 p-6">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-foreground text-3xl font-bold tracking-tight">
              AI REF Evaluation
            </h1>
            <p className="text-muted-foreground mt-1">
              This tool uses AI to provide a preliminary REF (Research
              Excellence Framework) score for each paper.
              <br />
              Filter by school, select published papers, and send AI-powered REF
              evaluation requests.
            </p>
          </div>
          <div className="flex items-end gap-4">
            <div>
              <label className="text-muted-foreground mb-1 block text-sm font-medium">
                School
              </label>
              <Select value={selectedSchool} onValueChange={setSelectedSchool}>
                <SelectTrigger className="border-input focus:ring-ring focus:border-ring w-56 rounded-md border shadow-sm transition focus:ring-2">
                  <SelectValue placeholder="Select a school" />
                </SelectTrigger>
                <SelectContent>
                  {mockSchools.map((school) => {
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
            </div>
            <Input
              placeholder="Search researchers or papers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-input focus:ring-ring focus:border-ring w-64 rounded-md border shadow-sm transition focus:ring-2"
            />
            {allPublishedPaperIds.length > 0 && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleSelectAll}
                className="border-input bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground ml-2 rounded-md border transition"
              >
                {allPublishedPaperIds.every((id) => selectedPapers.includes(id))
                  ? "Deselect All"
                  : "Select All"}
              </Button>
            )}
          </div>
        </div>
        {selectedPapers.length > 0 && (
          <div className="flex justify-end">
            <Button
              onClick={handleSend}
              disabled={showSendDialog}
              className="bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-ring rounded-md shadow transition focus:ring-2"
            >
              <Send className="mr-2 h-4 w-4" />
              {showSendDialog
                ? "Sending..."
                : `Send to ${selectedPapers.length} Paper(s)`}
            </Button>
          </div>
        )}
      </div>

      <div className="space-y-8">
        {filteredResearchers.map((researcher) => (
          <Card
            key={researcher.id}
            className="border-card bg-card overflow-hidden rounded-xl border shadow-md"
          >
            <CardHeader className="border-border bg-muted/60 border-b pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar className="border-border bg-background h-12 w-12 border shadow">
                    <AvatarImage
                      src={researcher.avatar || "/placeholder.svg"}
                      alt={researcher.name}
                    />
                    <AvatarFallback>
                      {researcher.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-foreground text-lg">
                      {researcher.name}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {researcher.role}
                    </CardDescription>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-secondary text-secondary-foreground border-border ml-4 rounded border px-2 py-1 text-xs"
                  >
                    {researcher.school}
                  </Badge>
                </div>
                <Badge
                  variant="outline"
                  className="bg-muted text-muted-foreground border-border rounded border px-2 py-1 text-xs"
                >
                  {researcher.papers.length} papers
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex gap-6 overflow-x-auto pb-2">
                {researcher.papers.map((paper) => (
                  <div
                    key={paper.id}
                    className={`border-border bg-popover relative w-80 flex-shrink-0 rounded-lg border p-4 shadow-sm transition-all duration-150 ${
                      paper.status === "published"
                        ? "hover:border-primary hover:shadow-lg"
                        : "opacity-60"
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="relative">
                        <div className="flex h-32 items-center justify-center">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="border-border bg-muted hover:bg-accent focus:ring-ring rounded-full border focus:ring-2"
                                aria-label={`Preview PDF for ${paper.title}`}
                                onClick={() =>
                                  setPdfUrl(paper.pdfUrl ?? "/sample.pdf")
                                }
                              >
                                <Eye className="text-primary h-6 w-6" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent
                              className="w-full max-w-3xl p-0"
                              showCloseButton
                            >
                              <VisuallyHidden>
                                <DialogTitle>PDF Preview</DialogTitle>
                              </VisuallyHidden>
                              {pdfUrl && (
                                <PDFViewer fileUrl={pdfUrl} height="70vh" />
                              )}
                            </DialogContent>
                          </Dialog>
                        </div>

                        {paper.status === "published" && (
                          <div className="absolute right-2 bottom-2">
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Badge
                                  variant="default"
                                  className="border-primary bg-primary text-primary-foreground cursor-help rounded border px-2 py-1 text-xs font-bold shadow"
                                >
                                  REF: {paper.refScore ?? "Unclassified"}
                                </Badge>
                              </TooltipTrigger>
                              <TooltipContent side="top" sideOffset={8}>
                                {(() => {
                                  switch (paper.refScore) {
                                    case "4*":
                                      return "Outstanding originality, significance, and rigour.";
                                    case "3*":
                                      return "Very considerable originality, significance, and rigour.";
                                    case "2*":
                                      return "Recognised originality, significance, and rigour.";
                                    case "1*":
                                      return "Limited originality, significance, or rigour.";
                                    default:
                                      return "Not classified by AI model.";
                                  }
                                })()}
                              </TooltipContent>
                            </Tooltip>
                          </div>
                        )}
                        {paper.status === "published" && (
                          <Checkbox
                            checked={selectedPapers.includes(paper.id)}
                            onCheckedChange={() =>
                              handlePaperSelection(paper.id)
                            }
                            className="border-primary focus:ring-primary focus:border-primary bg-background absolute top-2 left-2 z-10 rounded border focus:ring-2"
                            aria-label={`Select paper ${paper.title}`}
                          />
                        )}
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-foreground line-clamp-2 text-base leading-tight font-semibold">
                          {paper.title}
                        </h4>
                        <p className="text-muted-foreground text-xs font-medium">
                          {paper.journal}
                        </p>

                        <div className="mt-1 flex items-center justify-between text-xs">
                          <div className="text-muted-foreground flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>
                              {new Date(
                                paper.publishedDate,
                              ).toLocaleDateString()}
                            </span>
                          </div>
                          <Badge
                            variant="outline"
                            className="bg-accent text-accent-foreground border-border rounded border px-2 py-0.5 text-xs"
                          >
                            {paper.category}
                          </Badge>
                        </div>

                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-center space-x-3 text-xs">
                            <div className="flex items-center space-x-1">
                              <TrendingUp className="text-chart-2 h-3 w-3" />
                              <span className="text-chart-2 font-semibold">
                                {paper.citations}
                              </span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Star className="text-chart-5 h-3 w-3" />
                              <span className="text-chart-5 font-semibold">
                                {paper.impactFactor}
                              </span>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="hover:bg-muted focus:ring-ring h-6 w-6 rounded p-0 transition focus:ring-2"
                            aria-label={`View paper ${paper.title}`}
                          >
                            <Eye className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredResearchers.length === 0 && (
        <Card className="border-border bg-card rounded-xl border shadow">
          <CardContent className="p-10 text-center">
            <Users className="text-muted-foreground mx-auto mb-4 h-12 w-12" />
            <h3 className="text-foreground mb-2 text-lg font-semibold">
              No researchers found
            </h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or school filter.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
