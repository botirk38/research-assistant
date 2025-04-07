"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Bell, Settings } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import ChatPopover from "../_components/researcher/chat-popover";

interface StatCardProps {
  title: string;
  subtitle: string;
  value: string | number;
}

interface PublicationItemProps {
  title: string;
  subtitle: string;
}

interface Publication {
  title: string;
  subtitle: string;
}

interface PublicationsCardProps {
  title: string;
  subtitle: string;
  publications: Publication[];
}

interface ResearchIdea {
  title: string;
  description: string;
}

interface Collaborator {
  name: string;
  affiliation: string;
}

interface FundingOpportunity {
  title: string;
  amount: string;
  deadline: string;
}

interface ResearchAreaItem {
  color: string;
  label: string;
  percentage: string;
}

// Header Component
const Header = () => (
  <header className="border-border bg-secondary flex h-16 items-center justify-between border-b px-4">
    <div className="flex items-center">
      <SidebarTrigger />
      <h1 className="font-display text-foreground text-xl font-semibold">
        Researcher Dashboard
      </h1>
    </div>
    <div className="flex items-center space-x-2">
      <Button
        variant="ghost"
        size="icon"
        className="text-muted-foreground hover:text-foreground"
      >
        <Bell className="h-5 w-5" />
      </Button>
      <Avatar className="border-border h-8 w-8 border">
        <div className="bg-muted text-muted-foreground flex h-full w-full items-center justify-center text-sm font-medium">
          JD
        </div>
      </Avatar>
    </div>
  </header>
);

// TopNavigation Component
const TopNavigation: React.FC = () => (
  <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
    <h2 className="font-display text-foreground text-2xl font-semibold">
      Publications Overview
    </h2>
    <Select defaultValue="all">
      <SelectTrigger className="border-border bg-secondary text-foreground w-[240px] border shadow-sm">
        <SelectValue placeholder="From - To Dates" />
      </SelectTrigger>
      <SelectContent className="border-border bg-popover border">
        <SelectItem value="all">All Time</SelectItem>
        <SelectItem value="2023">2023 - Present</SelectItem>
        <SelectItem value="2020">2020 - 2023</SelectItem>
        <SelectItem value="2015">2015 - 2020</SelectItem>
        <SelectItem value="custom">Custom Range</SelectItem>
      </SelectContent>
    </Select>
  </div>
);

// StatCard Component
const StatCard: React.FC<StatCardProps> = ({ title, subtitle, value }) => (
  <Card className="animate-fade-in border-border bg-card rounded-xl border p-6 transition-normal hover:shadow-md">
    <h2 className="text-primary font-display mb-2 text-lg font-medium">
      {title}
    </h2>
    <p className="text-muted-foreground mb-1 text-sm">{subtitle}</p>
    <div className="mt-2 flex h-24 items-center justify-center">
      <span className="text-card-foreground text-3xl font-bold">{value}</span>
    </div>
  </Card>
);

// PublicationsStats Component
const PublicationsStats: React.FC = () => (
  <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
    <StatCard title="My Publications" subtitle="Reference Levels" value="12" />
    <StatCard title="My Publications" subtitle="CORE Levels" value="8" />
    <StatCard title="My Publications" subtitle="Top Citations" value="3,240" />
  </div>
);

// ResearchProfile Component
const ResearchProfileCard: React.FC = () => {
  const researchAreas: ResearchAreaItem[] = [
    { color: "bg-chart-1", label: "Machine Learning", percentage: "42%" },
    { color: "bg-chart-2", label: "Data Visualization", percentage: "28%" },
    {
      color: "bg-chart-3",
      label: "Natural Language Processing",
      percentage: "18%",
    },
    { color: "bg-chart-4", label: "Computer Vision", percentage: "12%" },
  ];
  return (
    <Card className="animate-fade-in border-border bg-card rounded-xl border p-6 transition-normal hover:shadow-md">
      <h2 className="text-primary font-display mb-4 text-lg font-medium">
        My Research Profile
      </h2>
      <p className="text-card-foreground mb-4 text-sm">
        Based on Publication Analysis
      </p>
      <div className="space-y-2">
        {researchAreas.map((area, index) => (
          <div key={index} className="flex items-center">
            <div className={`${area.color} mr-2 h-2 w-2 rounded-full`}></div>
            <span className="text-card-foreground">{area.label}</span>
            <div className="text-muted-foreground ml-auto">
              {area.percentage}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

// ResearchImpact Component
const ResearchImpactCard: React.FC = () => (
  <Card className="animate-fade-in border-border bg-card rounded-xl border p-6 transition-normal hover:shadow-md">
    <h2 className="text-primary font-display mb-4 text-lg font-medium">
      Research Impact
    </h2>
    <div className="flex h-48 items-center justify-center">
      <div className="text-muted-foreground text-sm">
        Impact visualization will appear here
      </div>
    </div>
  </Card>
);

// ResearchProfileSection Component
const ResearchProfileSection: React.FC = () => (
  <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
    <ResearchProfileCard />
    <ResearchImpactCard />
  </div>
);

// PublicationItem Component
const PublicationItem: React.FC<PublicationItemProps> = ({
  title,
  subtitle,
}) => (
  <div className="border-border hover:bg-accent rounded-lg border p-3 transition-normal">
    <h3 className="text-card-foreground font-medium">{title}</h3>
    <p className="text-muted-foreground text-sm">{subtitle}</p>
  </div>
);

// PublicationsCard Component
const PublicationsCard: React.FC<PublicationsCardProps> = ({
  title,
  subtitle,
  publications,
}) => (
  <Card className="animate-fade-in border-border bg-card rounded-xl border p-6 transition-normal hover:shadow-md">
    <div className="mb-6 flex items-center justify-between">
      <h2 className="font-display text-card-foreground text-lg font-medium">
        {title}
      </h2>
      <Button
        variant="outline"
        size="sm"
        className="border-border text-card-foreground hover:bg-accent rounded-full p-3 text-sm"
      >
        <Settings className="h-4 w-4" />
      </Button>
    </div>
    <p className="text-muted-foreground mb-4 text-sm">{subtitle}</p>
    <div className="space-y-4">
      {publications.map((pub, index) => (
        <PublicationItem
          key={index}
          title={pub.title}
          subtitle={pub.subtitle}
        />
      ))}
    </div>
  </Card>
);

// PublicationsArea Component
const PublicationsArea: React.FC = () => {
  const researchPublications: Publication[] = [
    {
      title: "Deep Learning for Medical Imaging",
      subtitle: "Journal of Medical AI, 2023",
    },
    {
      title: "Explainable AI in Healthcare",
      subtitle: "IEEE Transactions, 2022",
    },
  ];
  const explorationPublications: Publication[] = [
    {
      title: "Quantum Computing Applications",
      subtitle: "Emerging field exploration",
    },
    {
      title: "Sustainable AI Systems",
      subtitle: "New research direction",
    },
  ];
  return (
    <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
      <PublicationsCard
        title="Publications"
        subtitle="Research Areas"
        publications={researchPublications}
      />
      <PublicationsCard
        title="Publications"
        subtitle="Exploration Areas"
        publications={explorationPublications}
      />
    </div>
  );
};

// ResearchIdeasCard Component
const ResearchIdeasCard: React.FC = () => {
  const ideas: ResearchIdea[] = [
    {
      title: "Federated Learning for Privacy-Preserving Medical Analysis",
      description: "Aligns with your work in healthcare AI",
    },
    {
      title: "Multi-modal Learning for Clinical Decision Support",
      description: "Extension of your medical imaging research",
    },
  ];
  return (
    <Card className="animate-fade-in border-border bg-card rounded-xl border p-6 transition-normal hover:shadow-md">
      <h2 className="font-display text-card-foreground mb-4 text-xl font-semibold">
        Open Research Ideas
      </h2>
      <p className="text-muted-foreground mb-4 text-sm">
        Recommendations based on your research profile and interests
      </p>
      <div className="space-y-3">
        {ideas.map((idea, index) => (
          <div key={index} className="bg-accent rounded-lg p-3">
            <h3 className="text-card-foreground font-medium">{idea.title}</h3>
            <p className="text-muted-foreground text-sm">{idea.description}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

// CollaborationCard Component
const CollaborationCard: React.FC = () => {
  const collaborators: Collaborator[] = [
    {
      name: "Dr. Sarah Chen",
      affiliation: "Stanford University • Medical AI",
    },
    {
      name: "Prof. James Wilson",
      affiliation: "MIT • Computer Vision",
    },
  ];
  return (
    <Card className="animate-fade-in border-border bg-card rounded-xl border p-6 transition-normal hover:shadow-md">
      <h2 className="font-display text-card-foreground mb-4 text-xl font-semibold">
        Potential Research Collaborations
      </h2>
      <div className="space-y-3">
        {collaborators.map((collaborator, index) => (
          <div
            key={index}
            className="bg-accent flex items-center rounded-lg p-3"
          >
            <div className="flex-1">
              <h3 className="text-card-foreground font-medium">
                {collaborator.name}
              </h3>
              <p className="text-muted-foreground text-sm">
                {collaborator.affiliation}
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="border-border text-card-foreground hover:bg-accent"
            >
              Connect
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
};

// FundingCard Component
const FundingCard: React.FC = () => {
  const opportunities: FundingOpportunity[] = [
    {
      title: "NSF Advanced Computing Initiative",
      amount: "$1.2M",
      deadline: "June 15, 2025",
    },
    {
      title: "NIH Medical Technology Research",
      amount: "$850K",
      deadline: "August 30, 2025",
    },
  ];
  return (
    <Card className="border-t-destructive animate-fade-in border-border bg-card rounded-xl border border-t-4 p-6 transition-normal hover:shadow-md">
      <h2 className="font-display text-card-foreground mb-4 text-xl font-semibold">
        Funding Opportunities
      </h2>
      <p className="text-muted-foreground mb-4 text-sm">
        Personalized grant recommendations based on your research profile
      </p>
      <div className="space-y-3">
        {opportunities.map((opportunity, index) => (
          <div
            key={index}
            className="border-destructive/20 bg-destructive/5 rounded-lg border p-4"
          >
            <div className="flex justify-between">
              <h3 className="text-card-foreground font-medium">
                {opportunity.title}
              </h3>
              <span className="text-destructive font-medium">
                {opportunity.amount}
              </span>
            </div>
            <p className="text-muted-foreground mt-1 text-sm">
              Deadline: {opportunity.deadline}
            </p>
            <div className="mt-3 flex justify-end">
              <Button
                size="sm"
                className="bg-destructive hover:bg-destructive/90 text-primary-foreground"
              >
                View Details
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

// TablesSection Component
const TablesSection: React.FC = () => (
  <div className="space-y-6">
    <ResearchIdeasCard />
    <CollaborationCard />
    <FundingCard />
  </div>
);

// Main ResearcherProfile Component
export default function ResearcherProfile() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-7xl p-6">
        <TopNavigation />
        <PublicationsStats />
        <ResearchProfileSection />
        <PublicationsArea />
        <TablesSection />
        <ChatPopover />
      </div>
    </>
  );
}
