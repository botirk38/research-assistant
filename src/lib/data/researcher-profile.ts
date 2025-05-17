import type { ResearcherData } from "@/types/researcher";

export const getResearcherData = (id: string) => {
  // Mock data for demonstration
  const researchers: Record<string, ResearcherData> = {
    "sarah-chen": {
      name: "Dr. Sarah Chen",
      title: "Associate Professor",
      institution: "Stanford University",
      department: "School of Medicine",
      field: "Medical AI",
      bio: "Dr. Sarah Chen is a leading researcher in the application of artificial intelligence to medical diagnostics. Her work focuses on developing machine learning models for early disease detection and personalized treatment planning.",
      avatar: "/placeholder.svg?height=400&width=400",
      email: "sarah.chen@stanford.edu",
      phone: "+1 (650) 123-4567",
      website: "https://sarahchen.stanford.edu",
      location: "Stanford, CA",
      socialLinks: [
        {
          platform: "Twitter",
          url: "https://twitter.com/sarahchen",
          username: "@sarahchen",
        },
        {
          platform: "LinkedIn",
          url: "https://linkedin.com/in/sarahchen",
          username: "sarahchen",
        },
        {
          platform: "Google Scholar",
          url: "https://scholar.google.com/citations?user=sarahchen",
          username: "Sarah Chen",
        },
        {
          platform: "ORCID",
          url: "https://orcid.org/0000-0002-1234-5678",
          username: "0000-0002-1234-5678",
        },
      ],
      stats: {
        hIndex: 32,
        citations: 4850,
        publications: 78,
        collaborators: 124,
      },
      publications: [
        {
          title:
            "Deep Learning for Medical Image Analysis: A Comprehensive Review",
          subtitle: "A survey of recent advances and future directions",
          journal: "Nature Medicine",
          year: 2023,
          citations: 145,
          url: "#",
          coAuthors: ["J. Smith", "R. Johnson", "M. Williams"],
        },
        {
          title:
            "AI-Driven Diagnostics for Rare Diseases: Challenges and Opportunities",
          subtitle:
            "A systematic review of AI applications in rare disease diagnostics",
          journal: "Journal of Medical AI",
          year: 2022,
          citations: 87,
          url: "#",
          coAuthors: ["L. Zhang", "K. Patel"],
        },
        {
          title:
            "Federated Learning in Healthcare: Privacy-Preserving Collaborative Model Training",
          subtitle: "A review of recent advancements and applications",
          journal: "IEEE Transactions on Medical Imaging",
          year: 2021,
          citations: 203,
          url: "#",
          coAuthors: ["A. Garcia", "T. Nguyen", "S. Kim"],
        },
        {
          title: "Explainable AI for Clinical Decision Support Systems",
          subtitle: "A survey of methods and applications",
          journal: "JAMA Network Open",
          year: 2021,
          citations: 176,
          url: "#",
          coAuthors: ["B. Taylor", "C. Robinson"],
        },
        {
          title: "Transfer Learning Approaches for Medical Image Segmentation",
          subtitle:
            "Innovations in deep learning for medical image partitioning",
          journal: "Medical Image Analysis",
          year: 2020,
          citations: 312,
          url: "#",
          coAuthors: ["D. Wilson", "E. Brown", "F. Davis"],
        },
      ],
      researchInterests: [
        "Medical AI",
        "Computer Vision",
        "Machine Learning",
        "Healthcare Informatics",
        "Precision Medicine",
      ],
      currentProjects: [
        "AI-powered diagnostic tools for neurological disorders",
        "Privacy-preserving federated learning for multi-institutional collaboration",
        "Explainable AI methods for clinical decision support",
      ],
      education: [
        {
          degree: "Ph.D. in Computer Science",
          institution: "MIT",
          year: 2015,
        },
        {
          degree: "M.S. in Biomedical Engineering",
          institution: "Johns Hopkins University",
          year: 2011,
        },
        {
          degree: "B.S. in Electrical Engineering",
          institution: "UC Berkeley",
          year: 2009,
        },
      ],
      awards: [
        { name: "NIH Director's New Innovator Award", year: 2022 },
        { name: "Stanford Medicine Faculty Innovation Award", year: 2021 },
        { name: "IEEE Young Investigator Award", year: 2019 },
      ],
    },
    "james-wilson": {
      name: "Prof. James Wilson",
      title: "Professor",
      institution: "MIT",
      department: "Department of Electrical Engineering and Computer Science",
      field: "Computer Vision",
      bio: "Prof. James Wilson is a renowned expert in computer vision and deep learning. His research focuses on 3D scene understanding, visual reasoning, and embodied AI systems.",
      avatar: "/placeholder.svg?height=400&width=400",
      email: "james.wilson@mit.edu",
      phone: "+1 (617) 987-6543",
      website: "https://jameswilson.mit.edu",
      location: "Cambridge, MA",
      socialLinks: [
        {
          platform: "Twitter",
          url: "https://twitter.com/jameswilson",
          username: "@jameswilson",
        },
        {
          platform: "LinkedIn",
          url: "https://linkedin.com/in/jameswilson",
          username: "jameswilson",
        },
        {
          platform: "Google Scholar",
          url: "https://scholar.google.com/citations?user=jameswilson",
          username: "James Wilson",
        },
        {
          platform: "GitHub",
          url: "https://github.com/jameswilson",
          username: "jameswilson",
        },
      ],
      stats: {
        hIndex: 45,
        citations: 12500,
        publications: 120,
        collaborators: 210,
      },
      publications: [
        {
          title: "NeuroVision: Neural Networks for 3D Scene Understanding",
          subtitle: "Integrating deep learning for 3D scene comprehension",
          journal: "CVPR",
          year: 2023,
          citations: 87,
          url: "#",
          coAuthors: ["A. Smith", "B. Johnson"],
        },
        {
          title: "Self-Supervised Learning for Visual Representation",
          subtitle: "Advances in learning without labeled data",
          journal: "NeurIPS",
          year: 2022,
          citations: 203,
          url: "#",
          coAuthors: ["C. Brown", "D. Davis"],
        },
        {
          title: "Transformer Architectures for Multi-Modal Understanding",
          subtitle: "Exploring transformer models in vision and language tasks",
          journal: "ICCV",
          year: 2021,
          citations: 312,
          url: "#",
          coAuthors: ["E. Martin", "F. Thompson"],
        },
        {
          title: "Embodied AI: Connecting Vision, Language, and Action",
          subtitle: "Towards integrated cognitive robotics",
          journal: "Science Robotics",
          year: 2021,
          citations: 176,
          url: "#",
          coAuthors: ["G. Rodriguez", "H. Kim"],
        },
        {
          title: "Efficient Neural Networks for Resource-Constrained Devices",
          subtitle: "Techniques for optimizing AI on edge hardware",
          journal: "ECCV",
          year: 2020,
          citations: 145,
          url: "#",
          coAuthors: ["I. Chen", "J. Park"],
        },
      ],
      researchInterests: [
        "Computer Vision",
        "Deep Learning",
        "3D Scene Understanding",
        "Embodied AI",
        "Visual Reasoning",
      ],
      currentProjects: [
        "Neural scene representation for autonomous navigation",
        "Multi-modal learning for robot manipulation",
        "Efficient vision transformers for edge devices",
      ],
      education: [
        {
          degree: "Ph.D. in Computer Science",
          institution: "Stanford University",
          year: 2008,
        },
        {
          degree: "M.S. in Computer Science",
          institution: "Carnegie Mellon University",
          year: 2004,
        },
        {
          degree: "B.S. in Computer Engineering",
          institution: "University of Michigan",
          year: 2002,
        },
      ],
      awards: [
        { name: "ACM SIGGRAPH Significant New Researcher Award", year: 2022 },
        {
          name: "MIT EECS Faculty Research Innovation Fellowship",
          year: 2020,
        },
        { name: "NSF CAREER Award", year: 2015 },
      ],
    },

    "jane-doe": {
      name: "Dr. Jane Doe",
      title: "Senior Research Scientist",
      institution: "Harvard University",
      department: "Department of Computer Science",
      field: "Machine Learning & Ethics",
      bio: "Dr. Jane Doe is a pioneer in responsible AI and machine learning ethics. Her research focuses on developing fair and transparent AI systems, with particular emphasis on bias mitigation and algorithmic accountability.",
      avatar: "/placeholder.svg?height=400&width=400",
      email: "jane.doe@harvard.edu",
      phone: "+1 (617) 555-0123",
      website: "https://janedoe.harvard.edu",
      location: "Cambridge, MA",
      socialLinks: [
        {
          platform: "Twitter",
          url: "https://twitter.com/janedoe",
          username: "@janedoe",
        },
        {
          platform: "LinkedIn",
          url: "https://linkedin.com/in/janedoe",
          username: "janedoe",
        },
        {
          platform: "Google Scholar",
          url: "https://scholar.google.com/citations?user=janedoe",
          username: "Jane Doe",
        },
        {
          platform: "ORCID",
          url: "https://orcid.org/0000-0003-4567-8901",
          username: "0000-0003-4567-8901",
        },
      ],
      stats: {
        hIndex: 28,
        citations: 3750,
        publications: 65,
        collaborators: 98,
      },
      publications: [
        {
          title: "Fairness Metrics in Machine Learning: A Critical Analysis",
          subtitle:
            "Evaluating the landscape of fairness definitions and metrics",
          journal: "Nature Machine Intelligence",
          year: 2023,
          citations: 95,
          url: "#",
          coAuthors: ["M. Johnson", "P. Singh", "R. Kumar"],
        },
        {
          title: "Ethical Considerations in Automated Decision Systems",
          subtitle: "Frameworks for assessing ethical AI deployments",
          journal: "AI Ethics Journal",
          year: 2022,
          citations: 142,
          url: "#",
          coAuthors: ["S. Martinez", "K. Chen"],
        },
        {
          title: "Debiasing Neural Networks: Methods and Implications",
          subtitle: "Techniques for reducing bias in neural models",
          journal: "Conference on Fairness, Accountability, and Transparency",
          year: 2021,
          citations: 187,
          url: "#",
          coAuthors: ["L. Wilson", "A. Patel", "C. Lee"],
        },
        {
          title: "Transparency in AI: A Framework for Explainable Models",
          subtitle: "Strategies for building interpretable AI systems",
          journal: "Journal of Artificial Intelligence Research",
          year: 2021,
          citations: 163,
          url: "#",
          coAuthors: ["R. Anderson", "M. White"],
        },
        {
          title: "Algorithmic Bias in Healthcare Applications",
          subtitle: "Investigating the impacts of AI bias in medical contexts",
          journal: "Science and Ethics",
          year: 2020,
          citations: 228,
          url: "#",
          coAuthors: ["T. Thompson", "J. Garcia", "S. Kim"],
        },
      ],
      researchInterests: [
        "AI Ethics",
        "Machine Learning",
        "Algorithmic Fairness",
        "Responsible AI",
        "Bias Mitigation",
      ],
      currentProjects: [
        "Developing frameworks for ethical AI deployment",
        "Bias detection and mitigation in healthcare ML models",
        "Transparent and explainable AI systems",
      ],
      education: [
        {
          degree: "Ph.D. in Computer Science",
          institution: "UC Berkeley",
          year: 2012,
        },
        {
          degree: "M.S. in Artificial Intelligence",
          institution: "Stanford University",
          year: 2008,
        },
        {
          degree: "B.S. in Mathematics",
          institution: "Harvard University",
          year: 2006,
        },
      ],
      awards: [
        { name: "ACM SIGAI Autonomous Agents Research Award", year: 2023 },
        { name: "Harvard CS Excellence in Research Award", year: 2021 },
        { name: "NSF CAREER Award", year: 2018 },
      ],
    },
  };

  return researchers[id];
};
