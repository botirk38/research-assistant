import { type DateRange } from "react-day-picker";

export type SocialLink = {
  platform: string;
  url: string;
  username: string;
};

export type Publication = {
  title: string;
  subtitle: string;
  journal: string;
  year: number;
  citations: number;
  url: string;
  coAuthors: string[];
  recommendationType?: "research-area" | "exploration-area";
};

export type Education = {
  degree: string;
  institution: string;
  year: number;
};

export type Award = {
  name: string;
  year: number;
};

export type ResearcherStats = {
  hIndex: number;
  citations: number;
  publications: number;
  collaborators: number;
};

export type ResearcherData = {
  name: string;
  title: string;
  institution: string;
  department: string;
  field: string;
  bio: string;
  avatar: string;
  email: string;
  phone: string;
  website: string;
  location: string;
  socialLinks: SocialLink[];
  stats: ResearcherStats;
  publications: Publication[];
  researchInterests: string[];
  currentProjects: string[];
  education: Education[];
  awards: Award[];
};

export type Collaborator = {
  name: string;
  affiliation: string;
  id: string;
};

interface KeyDate {
  event: string;
  date: string;
}

interface ContactInfo {
  name: string;
  email: string;
  phone: string;
}

interface AIAnalysis {
  successProbability: number;
  strengths: string[];
  weaknesses: string[];
  recommendations: string[];
}

export interface FundingOpportunity {
  id: string;
  title: string;
  amount: string;
  deadline: string;
  organization: string;
  category: string;
  matchScore: number;
  description: string;
  eligibility: string;
  requirements: string[];
  keyDates: KeyDate[];
  contactInfo: ContactInfo;
  aiAnalysis: AIAnalysis;
}

export type ResearchIdea = {
  title: string;
  description: string;
};

export type FundingOpportunityFilterState = {
  fundingRange: [number, number];
  dateRange: DateRange | undefined;
  selectedEligibility: string[];
  selectedCategories: string[];
  minMatchScore: number | undefined;
};
