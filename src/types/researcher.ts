export type Publication = {
  title: string;
  subtitle: string;
}


export type Collaborator = {
  name: string;
  affiliation: string;
    id: string;
};


export interface FundingOpportunity {
  title: string;
  amount: string;
  deadline: string;
}


export type ResearchIdea = {
  title: string;
  description: string;
};
