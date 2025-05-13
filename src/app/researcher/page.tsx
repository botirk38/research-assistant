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

// TablesSection Component
const TablesSection: React.FC = () => (
  <div className="space-y-6">
    <ResearchIdeas />
    <Collaborations />
    <FundingOpportunities />
  </div>
);

// Main ResearcherProfile Component
export default function ResearcherProfile() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);

  const handleDateChange = (newDateRange: DateRange | undefined) => {
    setDateRange(newDateRange);
  };
  return (
    <>
      <Header />
      <div className="mx-auto max-w-7xl p-6">
        <TopNavigation dateRange={dateRange} onDateChange={handleDateChange} />
        <PublicationsStats dateRange={dateRange} />
        <ResearchProfileSection dateRange={dateRange} />

        <PublicationsArea />
        <TablesSection />
        <ChatPopover />
      </div>
    </>
  );
}
