import type { FundingOpportunity } from "@/types/researcher";

export const mockOpportunities: FundingOpportunity[] = [
  {
    id: "1",
    title: "Machine Learning for Climate Data Analysis",
    organization: "European Research Council",
    country: "Netherlands",
    description:
      "Funding for innovative machine learning approaches to analyze and predict climate patterns using large-scale environmental datasets.",
    amount: "€250,000",
    deadline: "2025-08-15",
    category: "Machine Learning",
    matchScore: 92,
    eligibility: "PhD Required, EU Institution Affiliation",
    requirements: [
      "Detailed ML research proposal",
      "Computational resources plan",
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
      email: "sjohnson@erc.europa.eu",
      phone: "+31 20 555 1234",
    },
    aiAnalysis: {
      successProbability: 78,
      strengths: [
        "Aligns with ML expertise",
        "Strong funding allocation",
        "High-impact application area",
      ],
      weaknesses: ["Highly competitive", "Complex data requirements"],
      recommendations: [
        "Focus on novel ML architectures",
        "Emphasize scalability of solution",
      ],
    },
    recommendationType: "research-area",
  },
  {
    id: "2",
    title: "Natural Language Processing Research Fellowship",
    organization: "German Research Foundation",
    country: "Germany",
    description:
      "Fellowship program supporting advanced NLP research, focusing on multilingual models and cross-cultural language understanding.",
    amount: "€175,000",
    deadline: "2025-11-30",
    category: "Natural Language Processing",
    matchScore: 85,
    eligibility: "PhD Required, Early Career Researcher",
    requirements: [
      "NLP research proposal",
      "Language model architecture plans",
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
      name: "Dr. Michael Weber",
      email: "mweber@dfg.de",
      phone: "+49 30 555 6789",
    },
    aiAnalysis: {
      successProbability: 72,
      strengths: [
        "Direct NLP focus",
        "Growing field",
        "Strong computational resources",
      ],
      weaknesses: ["Competitive field", "Specific language requirements"],
      recommendations: [
        "Emphasize multilingual aspects",
        "Include cross-cultural applications",
      ],
    },
    recommendationType: "exploration-area",
  },
  {
    id: "3",
    title: "Computer Vision Innovation Grant",
    organization: "French National Centre for Scientific Research",
    country: "France",
    description:
      "Funding for innovative computer vision research, particularly in areas of object detection, scene understanding, and visual reasoning.",
    amount: "€500,000",
    deadline: "2025-09-30",
    category: "Computer Vision",
    matchScore: 78,
    eligibility: "PhD Required, EU Research Institution Affiliation",
    requirements: [
      "Computer vision research proposal",
      "Dataset and methodology description",
      "Computing infrastructure plans",
      "Team composition and qualifications",
    ],
    keyDates: [
      { event: "Application Opens", date: "2025-04-01" },
      { event: "Webinar for Applicants", date: "2025-05-15" },
      { event: "Application Deadline", date: "2025-09-30" },
      { event: "Award Notification", date: "2025-12-15" },
    ],
    contactInfo: {
      name: "Dr. Robert Dupont",
      email: "rdupont@cnrs.fr",
      phone: "+33 1 555 4321",
    },
    aiAnalysis: {
      successProbability: 65,
      strengths: [
        "Strong CV research focus",
        "Substantial funding",
        "Excellent facilities",
      ],
      weaknesses: ["Technical complexity", "Hardware requirements"],
      recommendations: [
        "Focus on novel architectures",
        "Include real-world applications",
      ],
    },
    recommendationType: "research-area",
  },
  {
    id: "4",
    title: "Data Visualization for Healthcare Research",
    organization: "Swedish Research Council",
    country: "Sweden",
    description:
      "Research program focused on innovative data visualization techniques for complex medical data and healthcare analytics.",
    amount: "€350,000",
    deadline: "2025-07-15",
    category: "Data Visualization",
    matchScore: 88,
    eligibility: "PhD Required, European Institution Affiliation",
    requirements: [
      "Interactive visualization proposal",
      "User study design",
      "Prototype demonstration",
      "Healthcare partnership plan",
    ],
    keyDates: [
      { event: "Letter of Intent Due", date: "2025-04-01" },
      { event: "Application Deadline", date: "2025-07-15" },
      { event: "Review Period", date: "2025-08-15" },
      { event: "Award Notification", date: "2025-10-01" },
    ],
    contactInfo: {
      name: "Dr. Lisa Andersson",
      email: "landersson@vr.se",
      phone: "+46 8 555 8765",
    },
    aiAnalysis: {
      successProbability: 82,
      strengths: [
        "Clear visualization focus",
        "Healthcare impact",
        "User-centered approach",
      ],
      weaknesses: ["Complex stakeholder requirements"],
      recommendations: [
        "Emphasize interactive features",
        "Include accessibility considerations",
      ],
    },
    recommendationType: "exploration-area",
  },
  {
    id: "5",
    title: "Machine Learning for Sustainable Systems",
    organization: "Danish Innovation Fund",
    country: "Denmark",
    description:
      "Funding for applying machine learning techniques to sustainability challenges and environmental monitoring systems.",
    amount: "€200,000",
    deadline: "2025-10-01",
    category: "Machine Learning",
    matchScore: 76,
    eligibility: "PhD Required, EU Researchers Welcome",
    requirements: [
      "ML research proposal",
      "Environmental impact assessment",
      "Data collection strategy",
      "Sustainability metrics",
    ],
    keyDates: [
      { event: "Application Opens", date: "2025-05-01" },
      { event: "Webinar for Applicants", date: "2025-06-15" },
      { event: "Application Deadline", date: "2025-10-01" },
      { event: "Award Notification", date: "2025-12-01" },
    ],
    contactInfo: {
      name: "Dr. James Nielsen",
      email: "jnielsen@innovationsfonden.dk",
      phone: "+45 33 555 3456",
    },
    aiAnalysis: {
      successProbability: 70,
      strengths: [
        "ML expertise required",
        "Environmental impact",
        "Policy relevance",
      ],
      weaknesses: [
        "Complex data requirements",
        "Real-world deployment challenges",
      ],
      recommendations: [
        "Focus on scalable ML solutions",
        "Include monitoring frameworks",
      ],
    },
    recommendationType: "research-area",
  },
  {
    id: "6",
    title: "Computer Vision for Medical Imaging",
    organization: "Swiss National Science Foundation",
    country: "Switzerland",
    description:
      "Fellowship supporting innovative computer vision applications in medical imaging and diagnostic systems.",
    amount: "€220,000",
    deadline: "2025-05-31",
    category: "Computer Vision",
    matchScore: 94,
    eligibility: "PhD Required, Early Career Researcher",
    requirements: [
      "Computer vision research proposal",
      "Medical imaging expertise",
      "Publication record",
      "Clinical partnership plan",
    ],
    keyDates: [
      { event: "Application Opens", date: "2025-01-15" },
      { event: "Application Deadline", date: "2025-05-31" },
      { event: "Review Period", date: "2025-06-15" },
      { event: "Award Notification", date: "2025-07-31" },
    ],
    contactInfo: {
      name: "Dr. Emily Mueller",
      email: "emueller@snf.ch",
      phone: "+41 31 555 9876",
    },
    aiAnalysis: {
      successProbability: 80,
      strengths: ["Strong CV focus", "Medical application", "Clinical impact"],
      weaknesses: ["Medical data restrictions", "Clinical validation required"],
      recommendations: [
        "Emphasize diagnostic accuracy",
        "Include clinical workflows",
      ],
    },
    recommendationType: "exploration-area",
  },
  {
    id: "7",
    title: "Natural Language Processing for Scientific Literature",
    organization: "Norwegian Research Council",
    country: "Norway",
    description:
      "Development of NLP systems for analyzing and synthesizing scientific literature and research papers.",
    amount: "€400,000",
    deadline: "2025-11-15",
    category: "Natural Language Processing",
    matchScore: 81,
    eligibility: "PhD Required, Industry or Academic Affiliation",
    requirements: [
      "NLP system proposal",
      "Model architecture plan",
      "Dataset creation strategy",
      "Evaluation framework",
    ],
    keyDates: [
      { event: "Application Opens", date: "2025-06-01" },
      { event: "Letter of Intent Due", date: "2025-08-15" },
      { event: "Application Deadline", date: "2025-11-15" },
      { event: "Award Notification", date: "2026-01-15" },
    ],
    contactInfo: {
      name: "Dr. Thomas Berg",
      email: "tberg@forskningsradet.no",
      phone: "+47 22 555 2345",
    },
    aiAnalysis: {
      successProbability: 75,
      strengths: [
        "Clear NLP application",
        "Research impact",
        "Substantial funding",
      ],
      weaknesses: ["Complex text processing", "Large dataset requirements"],
      recommendations: [
        "Focus on multi-domain adaptation",
        "Include citation analysis",
      ],
    },
    recommendationType: "research-area",
  },
  {
    id: "8",
    title: "Interactive Data Visualization Platform",
    organization: "European Commission",
    country: "Italy",
    description:
      "Development of advanced interactive data visualization platforms for complex scientific and social data.",
    amount: "€300,000",
    deadline: "2025-08-30",
    category: "Data Visualization",
    matchScore: 87,
    eligibility: "PhD Required, International Applications Welcome",
    requirements: [
      "Visualization platform proposal",
      "Interactive prototype",
      "User experience research plan",
      "Scalability strategy",
    ],
    keyDates: [
      { event: "Application Opens", date: "2025-03-15" },
      { event: "Webinar for Applicants", date: "2025-04-30" },
      { event: "Application Deadline", date: "2025-08-30" },
      { event: "Award Notification", date: "2025-11-15" },
    ],
    contactInfo: {
      name: "Dr. Amara Santos",
      email: "asantos@ec.europa.eu",
      phone: "+32 2 555 7890",
    },
    aiAnalysis: {
      successProbability: 79,
      strengths: [
        "Visualization expertise required",
        "Wide application scope",
        "International collaboration",
      ],
      weaknesses: [
        "Complex user requirements",
        "Technical integration challenges",
      ],
      recommendations: [
        "Focus on user interaction",
        "Include accessibility features",
      ],
    },
    recommendationType: "research-area",
  },
];

export function getOpportunity(id: string): FundingOpportunity | undefined {
  return mockOpportunities.find((opp) => opp.id === id);
}
