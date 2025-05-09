"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ChatPopover from "../_components/researcher/chat-popover";
import Header from "../_components/researcher/dashboard/header";
import TopNavigation from "../_components/researcher/dashboard/top-navigation";
import PublicationsStats from "../_components/researcher/dashboard/publication-stats";
import PublicationsArea from "../_components/researcher/dashboard/publications-area";
import ResearchProfileSection from "../_components/researcher/dashboard/researcher-profile";
import ResearchIdeas from "../_components/researcher/dashboard/research-ideas";
import Collaborations from "../_components/researcher/dashboard/collaborations";
import FundingOpportunities from "../_components/researcher/dashboard/funding-opportunities";

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
