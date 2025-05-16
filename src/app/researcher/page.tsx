"use client";

import ChatPopover from "../_components/researcher/chat-popover";
import Header from "../_components/researcher/dashboard/header";
import TopNavigation from "../_components/researcher/dashboard/top-navigation";
import PublicationsStats from "../_components/researcher/dashboard/publication-stats";
import PublicationsArea from "../_components/researcher/dashboard/publications-area";
import ResearchProfileSection from "../_components/researcher/dashboard/researcher-profile";
import ResearchIdeas from "../_components/researcher/dashboard/research-ideas";
import Collaborations from "../_components/researcher/dashboard/collaborations";
import FundingOpportunities from "../_components/researcher/dashboard/funding-opportunities";
import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { DollarSign, Search, Settings } from "lucide-react";

import { QuickActions, type QuickActionItem } from "@/components/quick-actions";

const TablesSection: React.FC = () => (
  <div className="space-y-6">
    <ResearchIdeas />
    <Collaborations />
    <FundingOpportunities />
  </div>
);

export default function ResearcherProfile() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);

  const customActions: QuickActionItem[] = [
    {
      icon: <Search className="h-5 w-5" />,
      label: "Publications",
      href: "/researcher/publications",
    },

    {
      icon: <DollarSign className="h-5 w-5" />,
      label: "Funding Opportunities",
      href: "/researcher/funding-opportunities",
    },

    {
      icon: <Settings className="h-5 w-5" />,
      label: "Settings",
      href: "/researcher/settings",
    },
  ];

  const handleDateChange = (newDateRange: DateRange | undefined) => {
    setDateRange(newDateRange);
  };
  return (
    <>
      <Header />
      <div className="mx-auto flex max-w-7xl flex-col gap-6 p-6">
        <TopNavigation dateRange={dateRange} onDateChange={handleDateChange} />
        <QuickActions items={customActions} />
        <PublicationsStats dateRange={dateRange} />
        <ResearchProfileSection dateRange={dateRange} />

        <PublicationsArea />
        <TablesSection />
        <ChatPopover />
      </div>
    </>
  );
}
