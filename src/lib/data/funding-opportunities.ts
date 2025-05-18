import type { FundingOpportunity } from "@/types/researcher";

export const mockOpportunities: FundingOpportunity[] = [
  {
    id: "1",
    title: "Climate Change Research Grant",
    organization: "National Science Foundation",
    description:
      "Funding for research projects focused on climate change impacts and mitigation strategies.",
    amount: "$250,000",
    deadline: "2025-08-15",
    category: "Environmental Science",
    matchScore: 92,
    eligibility: "PhD Required, University Affiliation, US Citizen/Resident",
    requirements: [
      "Detailed research proposal",
      "Budget plan",
      "CV and publication list",
      "Letter of institutional support",
    ],
    keyDates: [
      { event: "Application Opens", date: "2025-06-01" },
      { event: "Letter of Intent Due", date: "2025-08-01" },
      { event: "Application Deadline", date: "2025-10-15" },
      { event: "Award Notification", date: "2025-11-01" },
    ],
    contactInfo: {
      name: "Dr. Sarah Johnson",
      email: "sjohnson@nsf.gov",
      phone: "(202) 555-1234",
    },
    aiAnalysis: {
      successProbability: 78,
      strengths: [
        "Timely research area",
        "Strong funding allocation",
        "Clear objectives",
      ],
      weaknesses: ["Highly competitive", "Complex application process"],
      recommendations: [
        "Focus on interdisciplinary approach",
        "Emphasize practical applications",
      ],
    },
  },
  {
    id: "2",
    title: "Artificial Intelligence Ethics Fellowship",
    organization: "Tech Ethics Institute",
    description:
      "Fellowship program supporting research on ethical implications of artificial intelligence and machine learning.",
    amount: "$75,000",
    deadline: "2025-11-30",
    category: "Computer Science & Ethics",
    matchScore: 85,
    eligibility: "Graduate Student, Early Career Researcher",
    requirements: [
      "Research proposal",
      "Personal statement",
      "Two letters of recommendation",
      "Ethics statement",
    ],
    keyDates: [
      { event: "Application Opens", date: "2025-02-15" },
      { event: "Application Deadline", date: "2025-06-30" },
      { event: "Interviews", date: "2025-07-15" },
      { event: "Award Notification", date: "2025-08-01" },
    ],
    contactInfo: {
      name: "Dr. Michael Chen",
      email: "mchen@techethics.org",
      phone: "(415) 555-6789",
    },
    aiAnalysis: {
      successProbability: 72,
      strengths: [
        "Growing field",
        "Interdisciplinary focus",
        "Societal impact",
      ],
      weaknesses: ["Limited funding amount", "Narrow scope"],
      recommendations: [
        "Highlight practical applications",
        "Include diverse perspectives",
      ],
    },
  },
  {
    id: "3",
    title: "Quantum Computing Innovation Grant",
    organization: "Department of Energy",
    description:
      "Funding for breakthrough research in quantum computing applications for energy systems.",
    amount: "$500,000",
    deadline: "2025-09-30",
    category: "Quantum Physics & Computing",
    matchScore: 78,
    eligibility: "PhD Required, US Citizen/Resident",
    requirements: [
      "Detailed research proposal",
      "Preliminary results",
      "Equipment and facility requirements",
      "Team composition and qualifications",
    ],
    keyDates: [
      { event: "Application Opens", date: "2025-04-01" },
      { event: "Webinar for Applicants", date: "2025-05-15" },
      { event: "Application Deadline", date: "2025-09-30" },
      { event: "Award Notification", date: "2025-12-15" },
    ],
    contactInfo: {
      name: "Dr. Robert Williams",
      email: "rwilliams@energy.gov",
      phone: "(202) 555-4321",
    },
    aiAnalysis: {
      successProbability: 65,
      strengths: [
        "Strategic priority area",
        "Substantial funding",
        "Long-term support",
      ],
      weaknesses: ["Highly technical requirements", "Limited applicant pool"],
      recommendations: [
        "Focus on energy applications",
        "Demonstrate technical feasibility",
      ],
    },
  },
  {
    id: "4",
    title: "Public Health Equity Research Program",
    organization: "National Institutes of Health",
    description:
      "Research program addressing health disparities and promoting equitable healthcare access.",
    amount: "$350,000",
    deadline: "2025-07-15",
    category: "Public Health & Medicine",
    matchScore: 88,
    eligibility: "MD or PhD Required, University Affiliation",
    requirements: [
      "Research proposal with community engagement plan",
      "Preliminary data",
      "IRB approval or plan",
      "Diversity statement",
    ],
    keyDates: [
      { event: "Letter of Intent Due", date: "2025-04-01" },
      { event: "Application Deadline", date: "2025-07-15" },
      { event: "Review Period", date: "2025-08-15" },
      { event: "Award Notification", date: "2025-10-01" },
    ],
    contactInfo: {
      name: "Dr. Lisa Rodriguez",
      email: "lrodriguez@nih.gov",
      phone: "(301) 555-8765",
    },
    aiAnalysis: {
      successProbability: 82,
      strengths: [
        "High priority area",
        "Strong societal impact",
        "Diverse applicant pool",
      ],
      weaknesses: ["Complex community engagement requirements"],
      recommendations: [
        "Emphasize community partnerships",
        "Include preliminary data",
      ],
    },
  },
  {
    id: "5",
    title: "Sustainable Agriculture Innovation Grant",
    organization: "Department of Agriculture",
    description:
      "Funding for research on sustainable farming practices and food security solutions.",
    amount: "$200,000",
    deadline: "2025-10-01",
    category: "Agriculture & Sustainability",
    matchScore: 76,
    eligibility: "PhD Required, US Citizen/Resident",
    requirements: [
      "Research proposal",
      "Field test plan",
      "Environmental impact assessment",
      "Stakeholder engagement strategy",
    ],
    keyDates: [
      { event: "Application Opens", date: "2025-05-01" },
      { event: "Webinar for Applicants", date: "2025-06-15" },
      { event: "Application Deadline", date: "2025-10-01" },
      { event: "Award Notification", date: "2025-12-01" },
    ],
    contactInfo: {
      name: "Dr. James Wilson",
      email: "jwilson@usda.gov",
      phone: "(202) 555-3456",
    },
    aiAnalysis: {
      successProbability: 70,
      strengths: [
        "Practical applications",
        "Growing field",
        "Policy relevance",
      ],
      weaknesses: ["Requires field testing", "Weather-dependent outcomes"],
      recommendations: [
        "Include climate adaptation components",
        "Partner with local farmers",
      ],
    },
  },
  {
    id: "6",
    title: "Early Career Researcher Fellowship in Neuroscience",
    organization: "Brain Research Foundation",
    description:
      "Fellowship supporting innovative neuroscience research by early career scientists.",
    amount: "$120,000",
    deadline: "2025-05-31",
    category: "Neuroscience & Biology",
    matchScore: 94,
    eligibility: "PhD Required, Early Career Researcher",
    requirements: [
      "Research proposal",
      "Career development plan",
      "Publication record",
      "Two letters of recommendation",
    ],
    keyDates: [
      { event: "Application Opens", date: "2025-01-15" },
      { event: "Application Deadline", date: "2025-05-31" },
      { event: "Review Period", date: "2025-06-15" },
      { event: "Award Notification", date: "2025-07-31" },
    ],
    contactInfo: {
      name: "Dr. Emily Parker",
      email: "eparker@brainresearch.org",
      phone: "(312) 555-9876",
    },
    aiAnalysis: {
      successProbability: 80,
      strengths: [
        "Targeted at early career",
        "Growing field",
        "Prestigious foundation",
      ],
      weaknesses: ["Highly competitive", "Limited to specific research areas"],
      recommendations: [
        "Highlight innovative methods",
        "Connect to foundation priorities",
      ],
    },
  },
  {
    id: "7",
    title: "Renewable Energy Technology Development Grant",
    organization: "Clean Energy Alliance",
    description:
      "Funding for development and implementation of innovative renewable energy technologies.",
    amount: "$400,000",
    deadline: "2025-11-15",
    category: "Engineering & Energy Systems",
    matchScore: 81,
    eligibility: "PhD Required, Industry or Academic Affiliation",
    requirements: [
      "Technical proposal",
      "Prototype development plan",
      "Market analysis",
      "Commercialization strategy",
    ],
    keyDates: [
      { event: "Application Opens", date: "2025-06-01" },
      { event: "Letter of Intent Due", date: "2025-08-15" },
      { event: "Application Deadline", date: "2025-11-15" },
      { event: "Award Notification", date: "2026-01-15" },
    ],
    contactInfo: {
      name: "Dr. Thomas Lee",
      email: "tlee@cleanenergy.org",
      phone: "(617) 555-2345",
    },
    aiAnalysis: {
      successProbability: 75,
      strengths: [
        "High funding amount",
        "Industry relevance",
        "Policy priority",
      ],
      weaknesses: ["Requires prototype development", "Commercialization focus"],
      recommendations: ["Emphasize scalability", "Include industry partners"],
    },
  },
  {
    id: "8",
    title: "Global Health Security Research Program",
    organization: "World Health Organization",
    description:
      "Research program focused on preventing and responding to global health threats and pandemics.",
    amount: "$300,000",
    deadline: "2025-08-30",
    category: "Public Health & Epidemiology",
    matchScore: 87,
    eligibility: "MD or PhD Required, International Applications Welcome",
    requirements: [
      "Research proposal",
      "International collaboration plan",
      "Data sharing strategy",
      "Capacity building component",
    ],
    keyDates: [
      { event: "Application Opens", date: "2025-03-15" },
      { event: "Webinar for Applicants", date: "2025-04-30" },
      { event: "Application Deadline", date: "2025-08-30" },
      { event: "Award Notification", date: "2025-11-15" },
    ],
    contactInfo: {
      name: "Dr. Amara Okonkwo",
      email: "aokonkwo@who.int",
      phone: "+41 22 555 7890",
    },
    aiAnalysis: {
      successProbability: 79,
      strengths: [
        "Global priority",
        "International collaboration",
        "Policy impact",
      ],
      weaknesses: ["Complex international requirements", "Reporting burden"],
      recommendations: [
        "Include low-resource settings",
        "Address implementation challenges",
      ],
    },
  },
];

export function getOpportunity(id: string): FundingOpportunity | undefined {
  return mockOpportunities.find((opp) => opp.id === id);
}
