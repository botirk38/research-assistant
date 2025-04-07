"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Settings, Sparkles } from "lucide-react";
import ResearchAreaSection from "@/app/_components/researcher/settings/research-area-section";

export default function ResearcherSettingsPage() {
  const [researchAreas, setResearchAreas] = useState([
    "Machine Learning",
    "Artificial Intelligence",
    "Natural Language Processing",
    "Computer Vision",
    "Data Science",
  ]);

  const [explorationAreas, setExplorationAreas] = useState([
    "Quantum Computing",
    "Robotics",
    "Blockchain",
  ]);

  const removeResearchArea = (index: number) => {
    setResearchAreas(researchAreas.filter((_, i) => i !== index));
  };

  const removeExplorationArea = (index: number) => {
    setExplorationAreas(explorationAreas.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto max-w-5xl px-4 py-12">
        <header className="mb-12">
          <h1 className="text-primary text-4xl font-bold">
            Researcher Settings
          </h1>

          <p className="text-muted-foreground max-w-2xl">
            Customize your research profile and exploration interests to enhance
            your academic journey
          </p>
        </header>

        <div className="grid gap-8">
          <ResearchAreaSection
            icon={<Search className="text-chart-1 h-5 w-5" />}
            title="Research Areas"
            description="Your established research domains and expertise"
            areas={researchAreas}
            removeArea={removeResearchArea}
            onAddArea={(area) => setResearchAreas([...researchAreas, area])}
            formId="research-form"
            accentColor="chart-1"
          />

          <ResearchAreaSection
            icon={<Sparkles className="text-chart-2 h-5 w-5" />}
            title="Exploration Areas"
            description="New frontiers you're interested in exploring"
            areas={explorationAreas}
            removeArea={removeExplorationArea}
            onAddArea={(area) =>
              setExplorationAreas([...explorationAreas, area])
            }
            formId="exploration-form"
            accentColor="chart-2"
          />
        </div>
      </div>
    </div>
  );
}
