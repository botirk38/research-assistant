"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Search,
  Send,
  Star,
  TrendingUp,
  Users,
  Calendar,
  BookOpen,
  Award,
  Eye,
} from "lucide-react";
import Image from "next/image";

interface Paper {
  id: string;
  title: string;
  journal: string;
  publishedDate: string;
  citations: number;
  impactFactor: number;
  category: string;
  status: "published" | "accepted" | "under-review";
  previewImage: string;
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  papers: Paper[];
}

const mockTeamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Dr. Sarah Chen",
    role: "Senior Research Scientist",
    avatar: "/placeholder.svg?height=50&width=50",
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
        previewImage: "/placeholder.svg?height=120&width=160",
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
        previewImage: "/placeholder.svg?height=120&width=160",
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
        previewImage: "/placeholder.svg?height=120&width=160",
      },
    ],
  },
  {
    id: "2",
    name: "Dr. James Liu",
    role: "Principal Investigator",
    avatar: "/placeholder.svg?height=50&width=50",
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
        previewImage: "/placeholder.svg?height=120&width=160",
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
        previewImage: "/placeholder.svg?height=120&width=160",
      },
    ],
  },
  {
    id: "3",
    name: "Dr. Maria Garcia",
    role: "Energy Systems Lead",
    avatar: "/placeholder.svg?height=50&width=50",
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
        previewImage: "/placeholder.svg?height=120&width=160",
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
        previewImage: "/placeholder.svg?height=120&width=160",
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
        previewImage: "/placeholder.svg?height=120&width=160",
      },
    ],
  },
  {
    id: "4",
    name: "Dr. Kevin Zhang",
    role: "Bioengineering Lead",
    avatar: "/placeholder.svg?height=50&width=50",
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
        previewImage: "/placeholder.svg?height=120&width=160",
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
        previewImage: "/placeholder.svg?height=120&width=160",
      },
    ],
  },
  {
    id: "5",
    name: "Dr. Emily Watson",
    role: "Research Associate",
    avatar: "/placeholder.svg?height=50&width=50",
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
        previewImage: "/placeholder.svg?height=120&width=160",
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
        previewImage: "/placeholder.svg?height=120&width=160",
      },
    ],
  },
];

export default function BestPapersPage() {
  const [selectedPapers, setSelectedPapers] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSendDialog, setShowSendDialog] = useState(false);

  const handlePaperSelection = (paperId: string) => {
    setSelectedPapers((prev) =>
      prev.includes(paperId)
        ? prev.filter((id) => id !== paperId)
        : [...prev, paperId],
    );
  };

  const handleMemberSelectAll = (memberPapers: Paper[]) => {
    const memberPaperIds = memberPapers.map((p) => p.id);
    const allSelected = memberPaperIds.every((id) =>
      selectedPapers.includes(id),
    );

    if (allSelected) {
      setSelectedPapers((prev) =>
        prev.filter((id) => !memberPaperIds.includes(id)),
      );
    } else {
      setSelectedPapers((prev) => [...new Set([...prev, ...memberPaperIds])]);
    }
  };

  const filteredMembers = mockTeamMembers.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.papers.some(
        (paper) =>
          paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          paper.journal.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
  );

  const handleSendToInnovationManager = () => {
    setShowSendDialog(true);
    // UI-only functionality for now
    setTimeout(() => {
      alert(
        `Sending ${selectedPapers.length} selected papers to Innovation Manager`,
      );
      setShowSendDialog(false);
      setSelectedPapers([]);
    }, 1000);
  };

  const totalPapers = mockTeamMembers.reduce(
    (sum, member) => sum + member.papers.length,
    0,
  );
  const totalCitations = mockTeamMembers.reduce(
    (sum, member) =>
      sum +
      member.papers.reduce((paperSum, paper) => paperSum + paper.citations, 0),
    0,
  );

  return (
    <div className="container mx-auto space-y-6 p-6">
      {/* Header */}
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Team Research Papers
            </h1>
            <p className="text-muted-foreground">
              Select papers from team members to share with Innovation Manager
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="text-sm">
              <Users className="mr-1 h-4 w-4" />
              Research Lead
            </Badge>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-sm font-medium">Team Members</p>
                  <p className="text-2xl font-bold">{mockTeamMembers.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-green-600" />
                <div>
                  <p className="text-sm font-medium">Total Papers</p>
                  <p className="text-2xl font-bold">{totalPapers}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-purple-600" />
                <div>
                  <p className="text-sm font-medium">Total Citations</p>
                  <p className="text-2xl font-bold">{totalCitations}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-orange-600" />
                <div>
                  <p className="text-sm font-medium">Selected Papers</p>
                  <p className="text-2xl font-bold text-orange-600">
                    {selectedPapers.length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Search and Send Button */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <div className="flex-1">
              <div className="relative">
                <Search className="text-muted-foreground absolute top-3 left-3 h-4 w-4" />
                <Input
                  placeholder="Search team members or papers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            {selectedPapers.length > 0 && (
              <Button
                onClick={handleSendToInnovationManager}
                disabled={showSendDialog}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Send className="mr-2 h-4 w-4" />
                {showSendDialog
                  ? "Sending..."
                  : `Send ${selectedPapers.length} Papers`}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Team Members Horizontal Rows */}
      <div className="space-y-6">
        {filteredMembers.map((member) => (
          <Card key={member.id} className="overflow-hidden">
            <CardHeader className="border-b pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src={member.avatar || "/placeholder.svg"}
                      alt={member.name}
                    />
                    <AvatarFallback>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription>{member.role}</CardDescription>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant="secondary" className="text-sm">
                    {member.papers.length} papers
                  </Badge>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleMemberSelectAll(member.papers)}
                    className="text-sm"
                  >
                    {member.papers.every((p) => selectedPapers.includes(p.id))
                      ? "Deselect All"
                      : "Select All"}
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              {/* Horizontal scrollable papers */}
              <div className="flex gap-6 overflow-x-auto pb-4">
                {member.papers.map((paper) => (
                  <div
                    key={paper.id}
                    className={`w-80 flex-shrink-0 cursor-pointer rounded-lg border p-4 transition-all hover:shadow-md ${
                      selectedPapers.includes(paper.id)
                        ? "border-blue-200 bg-blue-50 ring-2 ring-blue-200"
                        : "hover:bg-muted/50"
                    }`}
                    onClick={() => handlePaperSelection(paper.id)}
                  >
                    <div className="space-y-3">
                      {/* Paper Preview Image */}
                      <div className="relative">
                        <Image
                          src={paper.previewImage || "/placeholder.svg"}
                          alt={`Preview of ${paper.title}`}
                          className="h-32 w-full rounded-md bg-gray-100 object-cover"
                        />
                        <div className="absolute top-2 left-2">
                          <Checkbox
                            checked={selectedPapers.includes(paper.id)}
                            onChange={() => handlePaperSelection(paper.id)}
                            className="bg-white shadow-sm"
                          />
                        </div>
                        <div className="absolute top-2 right-2">
                          <Badge
                            variant={
                              paper.status === "published"
                                ? "default"
                                : paper.status === "accepted"
                                  ? "secondary"
                                  : "outline"
                            }
                            className="bg-white/90 text-xs backdrop-blur-sm"
                          >
                            {paper.status}
                          </Badge>
                        </div>
                      </div>

                      {/* Paper Info */}
                      <div className="space-y-2">
                        <h4 className="line-clamp-2 text-sm leading-tight font-semibold">
                          {paper.title}
                        </h4>
                        <p className="text-muted-foreground text-xs font-medium">
                          {paper.journal}
                        </p>

                        <div className="text-muted-foreground flex items-center justify-between text-xs">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>
                              {new Date(
                                paper.publishedDate,
                              ).toLocaleDateString()}
                            </span>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {paper.category}
                          </Badge>
                        </div>

                        <div className="flex items-center justify-between pt-1">
                          <div className="flex items-center space-x-3 text-xs">
                            <div className="flex items-center space-x-1">
                              <TrendingUp className="h-3 w-3 text-green-600" />
                              <span className="font-semibold text-green-600">
                                {paper.citations}
                              </span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Star className="h-3 w-3 text-yellow-600" />
                              <span className="font-semibold text-yellow-600">
                                {paper.impactFactor}
                              </span>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-6 w-6 p-0"
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

      {filteredMembers.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <Users className="text-muted-foreground mx-auto mb-4 h-12 w-12" />
            <h3 className="mb-2 text-lg font-semibold">
              No team members found
            </h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
