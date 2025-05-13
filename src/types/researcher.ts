export type Publication = {
  title: string;
  subtitle: string;
}


export type Collaborator = {
  name: string;
  affiliation: string;
    id: string;
};


interface KeyDate {
  event: string
  date: string
}

interface ContactInfo {
  name: string
  email: string
  phone: string
}

interface AIAnalysis {
  successProbability: number
  strengths: string[]
  weaknesses: string[]
  recommendations: string[]
}

export interface FundingOpportunity {
  id: string
  title: string
  amount: string
  deadline: string
  organization: string
  category: string
  matchScore: number
  description: string
  eligibility: string
  requirements: string[]
  keyDates: KeyDate[]
  contactInfo: ContactInfo
  aiAnalysis: AIAnalysis
}


export type ResearchIdea = {
  title: string;
  description: string;
};
