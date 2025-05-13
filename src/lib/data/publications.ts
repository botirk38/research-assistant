import type { FundingOpportunity, ResearchIdea } from "@/types/researcher";


export const allPublicationsOverTime = [
  { year: "2025 Q1", count: 3, date: new Date(2025, 0, 15) },   // Jan 2025
  { year: "2025 Q1", count: 5, date: new Date(2025, 1, 8) },    // Feb 2025
  { year: "2025 Q1", count: 8, date: new Date(2025, 2, 10) },   // Mar 2025
  { year: "2025 Q2", count: 7, date: new Date(2025, 3, 5) },    // Apr 2025
  { year: "2025 Q2", count: 11, date: new Date(2025, 4, 20) },  // May 2025
  { year: "2025 Q2", count: 14, date: new Date(2025, 5, 17) },  // Jun 2025
  { year: "2025 Q3", count: 9, date: new Date(2025, 6, 5) },    // Jul 2025
  { year: "2025 Q3", count: 13, date: new Date(2025, 7, 22) },  // Aug 2025
  { year: "2025 Q3", count: 16, date: new Date(2025, 8, 12) },  // Sep 2025
  { year: "2025 Q4", count: 18, date: new Date(2025, 9, 3) },   // Oct 2025
  { year: "2025 Q4", count: 21, date: new Date(2025, 10, 25) }, // Nov 2025
  { year: "2025 Q4", count: 24, date: new Date(2025, 11, 19) }, // Dec 2025
];

export const allCoreLevels = [
  { level: "A*", count: 2, date: new Date(2025, 0, 15) },  // Jan 2025
  { level: "A*", count: 4, date: new Date(2025, 1, 15) },  // Feb 2025
  { level: "A", count: 3, date: new Date(2025, 2, 22) },   // Mar 2025
  { level: "A", count: 5, date: new Date(2025, 3, 22) },   // Apr 2025
  { level: "B", count: 4, date: new Date(2025, 4, 10) },   // May 2025
  { level: "B", count: 6, date: new Date(2025, 5, 10) },   // Jun 2025
  { level: "C", count: 1, date: new Date(2025, 6, 18) },   // Jul 2025
  { level: "C", count: 3, date: new Date(2025, 7, 18) },   // Aug 2025
  { level: "D", count: 2, date: new Date(2025, 8, 27) },   // Sep 2025
  { level: "D", count: 3, date: new Date(2025, 9, 14) },   // Oct 2025
];

export const allCitationSources = [
  { name: "Advanced ML for Personalized Medicine", value: 920, date: new Date(2025, 0, 23) },    // Jan 2025
  { name: "Neural Networks in Edge Computing", value: 750, date: new Date(2025, 1, 15) },        // Feb 2025
  { name: "Quantum Data Mining Applications", value: 430, date: new Date(2025, 2, 5) },          // Mar 2025
  { name: "AI Ethics in Digital Governance", value: 580, date: new Date(2025, 3, 12) },          // Apr 2025
  { name: "Sustainable Computing Research", value: 670, date: new Date(2025, 4, 23) },           // May 2025
  { name: "Blockchain Systems for Science", value: 540, date: new Date(2025, 5, 15) },           // Jun 2025
  { name: "IoT Security Frameworks", value: 810, date: new Date(2025, 6, 5) },                   // Jul 2025
  { name: "Explainable AI Models", value: 730, date: new Date(2025, 7, 19) },                    // Aug 2025
  { name: "Federated Learning Applications", value: 620, date: new Date(2025, 8, 8) },           // Sep 2025
  { name: "Robotic Process Automation", value: 550, date: new Date(2025, 9, 27) },               // Oct 2025
  { name: "Digital Twin Technology", value: 490, date: new Date(2025, 10, 14) },                 // Nov 2025
  { name: "Generative AI for Education", value: 880, date: new Date(2025, 11, 12) },             // Dec 2025
];

export const pieColors = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#af19ff", "#ff19af", "#19ffaf", "#19afff"];

export const opportunities: FundingOpportunity[] = [


  {
    id: "nsf-advanced-computing",
    title: "NSF Advanced Computing Initiative",
    amount: "$1.2M",
    deadline: "June 15, 2025",
    organization: "National Science Foundation",
    category: "Computing Research",
    matchScore: 92,
    description:
      "The NSF Advanced Computing Initiative supports innovative research in high-performance computing, data-intensive computing, and advanced cyberinfrastructure. Projects should address significant research challenges in computational science, engineering, or computer science.",
    eligibility:
      "Open to academic institutions, non-profit research organizations, and industry partners with a focus on advanced computing research.",
    requirements: [
      "Detailed research proposal (max 15 pages)",
      "Budget justification",
      "CV of principal investigators",
      "Letters of support from collaborating institutions",
      "Data management plan",
    ],
    keyDates: [
      { event: "Letter of Intent Due", date: "March 1, 2025" },
      { event: "Application Deadline", date: "June 15, 2025" },
      { event: "Review Period", date: "July - August 2025" },
      { event: "Award Announcements", date: "September 30, 2025" },
      { event: "Project Start Date", date: "January 1, 2026" },
    ],
    contactInfo: {
      name: "Dr. Sarah Chen",
      email: "schen@nsf.gov",
      phone: "(703) 555-1234",
    },
    aiAnalysis: {
      successProbability: 78,
      strengths: [
        "Strong publication history in high-performance computing",
        "Previous NSF grant experience",
        "Collaborative partnerships with industry leaders",
        "Innovative approach to data-intensive computing challenges",
      ],
      weaknesses: [
        "Limited experience with cyberinfrastructure development",
        "Proposal budget may need more detailed justification",
        "Team could benefit from more diverse expertise",
      ],
      recommendations: [
        "Emphasize practical applications of your research",
        "Strengthen the data management plan section",
        "Include more detailed metrics for success evaluation",
        "Consider adding a collaborator with cyberinfrastructure expertise",
      ],
    },
  },
 {
    id: "nih-medical-technology",
    title: "NIH Medical Technology Research",
    amount: "$850K",
    deadline: "August 30, 2025",
    organization: "National Institutes of Health",
    category: "Medical Research",
    matchScore: 87,
    description:
      "This funding opportunity supports the development of innovative medical technologies that address unmet clinical needs. Projects should focus on translational research that bridges the gap between laboratory discoveries and clinical applications.",
    eligibility: "Open to academic medical centers, research hospitals, and biomedical technology companies.",
    requirements: [
      "Research plan (max 12 pages)",
      "Preliminary data demonstrating feasibility",
      "Regulatory strategy for technology development",
      "Commercialization plan",
      "Team qualifications and expertise",
    ],
    keyDates: [
      { event: "Pre-application Webinar", date: "May 15, 2025" },
      { event: "Application Deadline", date: "August 30, 2025" },
      { event: "Peer Review", date: "October 2025" },
      { event: "Award Notifications", date: "December 15, 2025" },
      { event: "Funding Start Date", date: "February 1, 2026" },
    ],
    contactInfo: {
      name: "Dr. Michael Johnson",
      email: "mjohnson@nih.gov",
      phone: "(301) 555-9876",
    },
    aiAnalysis: {
      successProbability: 65,
      strengths: [
        "Strong preliminary data on technology efficacy",
        "Clear clinical application pathway",
        "Experienced research team with medical background",
        "Previous successful NIH grant completions",
      ],
      weaknesses: [
        "Limited commercialization experience",
        "Regulatory pathway needs more detail",
        "Budget allocation for clinical testing may be insufficient",
      ],
      recommendations: [
        "Strengthen the commercialization plan section",
        "Consult with regulatory affairs expert for FDA pathway",
        "Include more detailed timeline for clinical testing",
        "Consider adding industry partner for commercialization support",
      ],
    },
  },

];



export const ideas: ResearchIdea[] = [
  {
    title: "Federated Learning for Privacy-Preserving Medical Analysis",
    description: "Aligns with your work in healthcare AI",
  },
  {
    title: "Multi-modal Learning for Clinical Decision Support",
    description: "Extension of your medical imaging research",
  },
];

export const fullResearchAreas = [
  { label: "Machine Learning", value: 42, date: new Date("2025-01-15") },
  { label: "Data Visualization", value: 28, date: new Date("2025-03-22") },
  { label: "Natural Language Processing", value: 18, date: new Date("2025-05-10") },
  { label: "Computer Vision", value: 12, date: new Date("2025-04-05") },
];

export const areaColors = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50"];

export const impactDimensions = [
  { category: "Knowledge", value: 80 },
  { category: "Socio-economic", value: 75 },
  { category: "Technology", value: 80 },
  { category: "Policy", value: 60 },
  { category: "Public Engagement", value: 70 },
];
