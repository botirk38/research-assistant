import type { Publication, ResearchIdea } from "@/types/researcher";

export const allPublicationsOverTime = [
  { year: "2025 Q1", count: 3, date: new Date(2025, 0, 15) }, // Jan 2025
  { year: "2025 Q1", count: 5, date: new Date(2025, 1, 8) }, // Feb 2025
  { year: "2025 Q1", count: 8, date: new Date(2025, 2, 10) }, // Mar 2025
  { year: "2025 Q2", count: 7, date: new Date(2025, 3, 5) }, // Apr 2025
  { year: "2025 Q2", count: 11, date: new Date(2025, 4, 20) }, // May 2025
  { year: "2025 Q2", count: 14, date: new Date(2025, 5, 17) }, // Jun 2025
  { year: "2025 Q3", count: 9, date: new Date(2025, 6, 5) }, // Jul 2025
  { year: "2025 Q3", count: 13, date: new Date(2025, 7, 22) }, // Aug 2025
  { year: "2025 Q3", count: 16, date: new Date(2025, 8, 12) }, // Sep 2025
  { year: "2025 Q4", count: 18, date: new Date(2025, 9, 3) }, // Oct 2025
  { year: "2025 Q4", count: 21, date: new Date(2025, 10, 25) }, // Nov 2025
  { year: "2025 Q4", count: 24, date: new Date(2025, 11, 19) }, // Dec 2025
];

export const allRefLevels = [
  { level: "4*", count: 2, date: new Date(2025, 0, 15) }, // Jan 2025
  { level: "4*", count: 4, date: new Date(2025, 1, 15) }, // Feb 2025
  { level: "3*", count: 3, date: new Date(2025, 2, 22) }, // Mar 2025
  { level: "3*", count: 5, date: new Date(2025, 3, 22) }, // Apr 2025
  { level: "2*", count: 4, date: new Date(2025, 4, 10) }, // May 2025
  { level: "2*", count: 6, date: new Date(2025, 5, 10) }, // Jun 2025
  { level: "1*", count: 1, date: new Date(2025, 6, 18) }, // Jul 2025
  { level: "1*", count: 3, date: new Date(2025, 7, 18) }, // Aug 2025
  { level: "U", count: 2, date: new Date(2025, 8, 27) }, // Sep 2025 (Unclassified)
  { level: "U", count: 3, date: new Date(2025, 9, 14) }, // Oct 2025 (Unclassified)
];

export const allCitationSources = [
  {
    name: "Advanced ML for Personalized Medicine",
    value: 920,
    date: new Date(2025, 0, 23),
  }, // Jan 2025
  {
    name: "Neural Networks in Edge Computing",
    value: 750,
    date: new Date(2025, 1, 15),
  }, // Feb 2025
  {
    name: "Quantum Data Mining Applications",
    value: 430,
    date: new Date(2025, 2, 5),
  }, // Mar 2025
  {
    name: "AI Ethics in Digital Governance",
    value: 580,
    date: new Date(2025, 3, 12),
  }, // Apr 2025
  {
    name: "Sustainable Computing Research",
    value: 670,
    date: new Date(2025, 4, 23),
  }, // May 2025
  {
    name: "Blockchain Systems for Science",
    value: 540,
    date: new Date(2025, 5, 15),
  }, // Jun 2025
  { name: "IoT Security Frameworks", value: 810, date: new Date(2025, 6, 5) }, // Jul 2025
  { name: "Explainable AI Models", value: 730, date: new Date(2025, 7, 19) }, // Aug 2025
  {
    name: "Federated Learning Applications",
    value: 620,
    date: new Date(2025, 8, 8),
  }, // Sep 2025
  {
    name: "Robotic Process Automation",
    value: 550,
    date: new Date(2025, 9, 27),
  }, // Oct 2025
  { name: "Digital Twin Technology", value: 490, date: new Date(2025, 10, 14) }, // Nov 2025
  {
    name: "Generative AI for Education",
    value: 880,
    date: new Date(2025, 11, 12),
  }, // Dec 2025
];

export const pieColors = [
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#ff7f50",
  "#af19ff",
  "#ff19af",
  "#19ffaf",
  "#19afff",
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
  {
    label: "Natural Language Processing",
    value: 18,
    date: new Date("2025-05-10"),
  },
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

export const mockPublications: Publication[] = [
  {
    title: "Advances in Vision Transformers for Medical Image Analysis",
    subtitle: "A Deep Learning Approach to Healthcare Diagnostics",
    journal: "IEEE Transactions on Computer Vision",
    year: 2024,
    citations: 187,
    url: "https://example.com/vision-transformers-medical",
    coAuthors: ["Maria Rodriguez", "David Chen", "Sarah Johnson"],
  },
  {
    title: "Large Language Models in Scientific Research",
    subtitle: "Applications and Ethical Considerations in Academic Writing",
    journal: "Computational Linguistics",
    year: 2023,
    citations: 242,
    url: "https://example.com/llm-scientific-research",
    coAuthors: ["James Wilson", "Sarah Johnson", "Michael Brown"],
  },
  {
    title: "Quantum-Inspired Algorithms for Machine Learning",
    subtitle: "Bridging Classical and Quantum Computing",
    journal: "Quantum Information Processing",
    year: 2024,
    citations: 165,
    url: "https://example.com/quantum-ml-algorithms",
    coAuthors: ["Robert Lee", "Jennifer Smith", "David Chen"],
  },
  {
    title: "Robotic Process Automation with Deep Learning",
    subtitle: "Intelligent Automation in Manufacturing",
    journal: "Robotics and Autonomous Systems",
    year: 2023,
    citations: 178,
    url: "https://example.com/robotics-deep-learning",
    coAuthors: ["Lisa Wong", "Michael Brown", "Rachel Green"],
  },
  {
    title: "Multi-Modal Deep Learning for Data Science",
    subtitle: "Integrating Text, Image, and Time Series Data",
    journal: "Journal of Data Science",
    year: 2023,
    citations: 193,
    url: "https://example.com/multimodal-data-science",
    coAuthors: ["Jennifer Smith", "Sophia Martinez", "David Chen"],
  },
  {
    title: "Blockchain-Enhanced Federated Learning",
    subtitle: "Secure and Decentralized AI Training",
    journal: "IEEE Transactions on Blockchain",
    year: 2022,
    citations: 212,
    url: "https://example.com/blockchain-federated-learning",
    coAuthors: ["Kevin Zhang", "Sarah Johnson", "Christopher Lee"],
  },
  {
    title: "Natural Language Processing for Code Generation",
    subtitle: "Automated Software Development Using AI",
    journal: "ACM Transactions on Programming Languages",
    year: 2024,
    citations: 156,
    url: "https://example.com/nlp-code-generation",
    coAuthors: ["Elizabeth Brown", "Jennifer Smith", "Michelle Kim"],
  },
  {
    title: "Computer Vision in Autonomous Robotics",
    subtitle: "Real-time Object Detection and Navigation",
    journal: "Robotics and AI",
    year: 2023,
    citations: 203,
    url: "https://example.com/cv-autonomous-robotics",
    coAuthors: ["Andrew Wilson", "Michael Brown", "David Chen"],
  },
  {
    title: "Machine Learning for Quantum Error Correction",
    subtitle: "Improving Quantum Computer Reliability",
    journal: "Physical Review Quantum",
    year: 2023,
    citations: 178,
    url: "https://example.com/ml-quantum-error",
    coAuthors: ["Laura Martinez", "Sarah Johnson", "Karen Wong"],
  },
  {
    title: "Data Science Approaches to Climate Modeling",
    subtitle: "Machine Learning for Environmental Prediction",
    journal: "Environmental Data Science",
    year: 2022,
    citations: 224,
    url: "https://example.com/data-science-climate",
    coAuthors: ["Mark Thompson", "Jennifer Smith", "Robert Brown"],
  },
  {
    title: "AI-Powered Smart Contract Optimization",
    subtitle: "Improving Blockchain Transaction Efficiency",
    journal: "Blockchain Research & Applications",
    year: 2024,
    citations: 145,
    url: "https://example.com/ai-smart-contracts",
    coAuthors: ["David Chen", "Susan Chen", "Michael Brown"],
  },
  {
    title: "Transfer Learning in Computer Vision",
    subtitle: "Efficient Training for Limited Data Scenarios",
    journal: "Pattern Recognition",
    year: 2023,
    citations: 167,
    url: "https://example.com/transfer-learning-cv",
    coAuthors: ["Jennifer Smith", "Sarah Johnson", "Emily Johnson"],
  },
];
