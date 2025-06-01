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

export const explorationAreas = [
  { label: "Quantum Computing", value: 15, date: new Date("2025-02-20") },
  { label: "Robotics", value: 10, date: new Date("2025-06-15") },
  { label: "Blockchain", value: 8, date: new Date("2025-07-10") },
  { label: "Edge AI", value: 5, date: new Date("2025-08-05") },
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
    id: "1",
    title:
      "Advances in Medical Image Analysis with Vision Transformers: A Comprehensive Review",
    subtitle: "",
    journal: "Medical Image Analysis",
    year: 2024,
    citations: 0, // Citation count not readily available from snippet
    url: "https://arxiv.org/abs/2301.03505",
    coAuthors: ["Reza Azad", "Amirhossein Kazerouni", "Moein Heidari"],
    recommendationType: "research-area",
    keywords: ["Vision Transformers", "Medical Image Analysis", "Review"],
    pdfUrl: "https://arxiv.org/pdf/2301.03505",
    doi: "10.1016/j.media.2023.103000",
    abstract:
      "In this review, we provide an encyclopedic review of the applications of Transformers in medical imaging. Specifically, we present a systematic and thorough review of relevant recent Transformer literature for different medical image analysis tasks, including classification, segmentation, detection, registration, synthesis and clinical report generation. For each of these applications, we investigate the novelty, strengths and weaknesses of the different proposed strategies and develop taxonomies highlighting key properties and contributions. Further, if applicable, we outline current benchmarks on different datasets. Finally, we summarize key challenges and discuss different future research directions.",
  },
  {
    id: "2",
    title: "LLM4SR: A Survey on Large Language Models for Scientific Research",
    subtitle: "",
    journal: "arXiv",
    year: 2025,
    citations: 0, // Citation count not readily available from snippet
    url: "https://arxiv.org/abs/2501.03975",
    coAuthors: ["Sajad Norouzi", "Keyi Tang", "Yanshuai Cao"], // Co-authors from a different paper, actual co-authors from snippet not available for this publication.
    recommendationType: "exploration-area",
    keywords: ["Large Language Models", "Scientific Research", "Survey"],
    pdfUrl: "https://arxiv.org/pdf/2501.03975",
    doi: "", // DOI not readily available from snippet
    abstract:
      "In recent years, the rapid advancement of Large Language Models (LLMs) has transformed the landscape of scientific research, offering unprecedented support across various stages of the research cycle. This paper presents the first systematic survey dedicated to exploring how LLMs are revolutionizing the scientific research process. We analyze the unique roles LLMs play across four critical stages of research: hypothesis discovery, experiment planning and implementation, scientific writing, and peer reviewing. Our review comprehensively showcases the task-specific methodologies and evaluation benchmarks.",
  },
  {
    id: "3",
    title:
      "Quantum-Inspired Algorithms from Randomized Numerical Linear Algebra",
    subtitle: "",
    journal: "Proceedings of Machine Learning Research",
    year: 2022,
    citations: 0, // Citation count not readily available from snippet
    url: "https://proceedings.mlr.press/v162/chepurko22a.html",
    coAuthors: ["Nadiia Chepurko", "Kenneth Clarkson", "Lior Horesh"],
    recommendationType: "exploration-area",
    keywords: [
      "Quantum-Inspired Algorithms",
      "Numerical Linear Algebra",
      "Machine Learning",
    ],
    pdfUrl: "https://proceedings.mlr.press/v162/chepurko22a.pdf",
    doi: "10.48550/arXiv.2011.04125",
    abstract:
      "We create classical (non-quantum) dynamic data structures supporting queries for recommender systems and least-squares regression that are comparable to their quantum analogues. De-quantizing such algorithms has recieved a flurry of attention in recent years; we obtain sharper bounds for these problems. More significantly, we achieve these improvements by arguing that the previous quantum-inspired algorithms for these problems are doing leverage or ridge-leverage score sampling in disguise; these are powerful and standard techniques in randomized numerical linear algebra. With this recognition, we are able to employ the large body of work in numerical linear algebra to obtain algorithms for these problems that are simpler or faster (or both) than existing approaches. Our experiments demonstrate that the proposed data structures also work well on real-world datasets.",
  },
  {
    id: "4",
    title:
      "Robotic Process Automation with Machine Learning and Artificial Intelligence: Revolutionizing Business Processes",
    subtitle: "",
    journal: "ResearchGate", // Original journal not specified, ResearchGate hosts the PDF
    year: 2024,
    citations: 0, // Citation count not readily available from snippet
    url: "https://www.researchgate.net/publication/383141151_Robotic_Process_Automation_with_ML_and_Artificial_Intelligence_Revolutionizing_Business_Processes",
    coAuthors: ["Ghulaxe Vivek", "Ohm Patel"], // Co-authors inferred from snippets.
    recommendationType: "research-area",
    keywords: [
      "Robotic Process Automation",
      "Machine Learning",
      "Artificial Intelligence",
    ],
    pdfUrl:
      "https://www.researchgate.net/publication/383141151_Robotic_Process_Automation_with_ML_and_Artificial_Intelligence_Revolutionizing_Business_Processes/fulltext/66c4293f3c3935399583c27e/Robotic-Process-Automation-with-ML-and-Artificial-Intelligence-Revolutionizing-Business-Processes.pdf",
    doi: "", // DOI not readily available from snippet
    abstract:
      "Robotic Process Automation (RPA), when with Machine Learning (ML) and Artificial Intelligence (AI), greatly enhances business by boosting traditional automation capabilities. This combination allows RPA systems to manage complex, unstructured data, make informed decisions, and continuously adopt using learning algorithms. The synergy of RPA, AI, and ML achieves higher accuracy, predictive analytics, and personalized customer interactions. This paper examines how this advanced automation approach enhances efficiency, scalability, and innovation in various industries, reshaping operational workflows and establishing a new benchmark for business automation.",
  },
  {
    id: "5",
    title: "Multi-Modal Deep Learning for Data Science",
    subtitle: "Integrating Text, Image, and Time Series Data",
    journal: "Journal of Data Science", // Placeholder - precise journal not found for this exact title
    year: 2023,
    citations: 0, // Citation count not readily available from snippet
    url: "https://example.com/multimodal-data-science", // Placeholder - no direct real paper found with this exact title
    coAuthors: ["Jennifer Smith", "Sophia Martinez", "David Chen"], // Mock co-authors as no real paper with this title was found.
    recommendationType: "research-area",
    keywords: [
      "Multi-Modal Deep Learning",
      "Data Science",
      "Text",
      "Image",
      "Time Series Data",
    ],
    pdfUrl: "",
    doi: "",
    abstract:
      "This paper explores the cutting-edge advancements in multi-modal deep learning, focusing on methodologies for seamlessly integrating diverse data types such as text, images, and time series. We delve into architectural innovations and practical applications that leverage the complementary information from these modalities to achieve superior performance in data science tasks.",
  },
  {
    id: "6",
    title:
      "Blockchain-Enhanced Federated Learning: A New Paradigm for Secure Distributed Machine Learning",
    subtitle: "",
    journal:
      "2024 4th International Conference on Intelligent Technologies (CONIT)",
    year: 2024,
    citations: 0, // Citation count not readily available from snippet
    url: "https://www.researchgate.net/publication/380720496_Blockchain-Enhanced_Federated_Learning_A_New_Paradigm_for_Secure_Distributed_Machine_Learning",
    coAuthors: ["Shiva Mehta"], // One author listed in snippet
    recommendationType: "exploration-area",
    keywords: ["Blockchain", "Federated Learning", "Secure AI Training"],
    pdfUrl:
      "https://www.researchgate.net/publication/380720496_Blockchain-Enhanced_Federated_Learning_A_New_Paradigm_for_Secure_Distributed_Machine_Learning/fulltext/664c39c8942b0337839352e8/Blockchain-Enhanced-Federated-Learning-A-New-Paradigm-for-Secure-Distributed-Machine-Learning.pdf",
    doi: "10.1109/CONIT61985.2024.10625977",
    abstract:
      "In mobile computing scenarios, federated learning protects users from exposing their private data, while cooperatively training the global model for a variety of real-world applications. However, the security of federated learning is increasingly being questioned, due to the malicious clients or central servers' constant attack to the global model or user privacy data. To address these security issues, we proposed a decentralized federated learning framework based on blockchain, i.e., a Blockchain-based Federated Learning framework with Committee consensus (BFLC). The framework uses blockchain for the global model storage and the local model update exchange. To enable the proposed BFLC, we also devised an innovative committee consensus mechanism, which can effectively reduce the amount of consensus computing and reduce malicious attacks. We then discussed the scalability of BFLC, including theoretical security, storage optimization, and incentives. Finally, we performed experiments using real-world datasets to verify the effectiveness of the BFLC framework.",
  },
  {
    id: "7",
    title:
      "Code Generation from Natural Language with Less Prior Knowledge and More Monolingual Data",
    subtitle: "",
    journal:
      "Proceedings of the 59th Annual Meeting of the Association for Computational Linguistics and the 11th International Joint Conference on Natural Language Processing (Volume 2: Short Papers)",
    year: 2021,
    citations: 0, // Citation count not readily available from snippet
    url: "https://aclanthology.org/2021.acl-short.98/",
    coAuthors: ["Sajad Norouzi", "Keyi Tang", "Yanshuai Cao"],
    recommendationType: "research-area",
    keywords: [
      "Natural Language Processing",
      "Code Generation",
      "Automated Software Development",
    ],
    pdfUrl: "https://aclanthology.org/2021.acl-short.98.pdf",
    doi: "10.18653/v1/2021.acl-short.98",
    abstract:
      "Training datasets for semantic parsing are typically small due to the higher expertise required for annotation than most other NLP tasks. As a result, models for this application usually need additional prior knowledge to be built into the architecture or algorithm. The increased dependency on human experts hinders automation and raises the development and maintenance costs in practice. This work investigates whether a generic transformer-based seq2seq model can achieve competitive performance with minimal code-generation-specific inductive bias design. By exploiting a relatively sizeable monolingual corpus of the target programming language, which is cheap to mine from the web, we achieved 81.03% exact match accuracy on Django and 32.57 BLEU score on CoNaLa. Both are SOTA to the best of our knowledge. This positive evidence highlights a potentially easier path toward building accurate semantic parsers in practice.",
  },
  {
    id: "8",
    title: "Computer Vision in Autonomous Robotics",
    subtitle: "Real-time Object Detection and Navigation",
    journal: "Robotics and AI", // Placeholder - precise journal not found for this exact title
    year: 2023,
    citations: 0, // Citation count not readily available from snippet
    url: "https://example.com/cv-autonomous-robotics", // Placeholder - no direct real paper found with this exact title
    coAuthors: ["Andrew Wilson", "Michael Brown", "David Chen"], // Mock co-authors as no real paper with this title was found.
    recommendationType: "research-area",
    keywords: [
      "Computer Vision",
      "Autonomous Robotics",
      "Object Detection",
      "Navigation",
    ],
    pdfUrl: "",
    doi: "",
    abstract:
      "This paper provides a comprehensive overview of the role of computer vision in autonomous robotics, with a focus on real-time object detection and navigation. We explore various state-of-the-art algorithms and techniques that enable robots to perceive and interact with their environment effectively, paving the way for more intelligent and robust autonomous systems.",
  },
  {
    id: "9",
    title: "Machine Learning for Practical Quantum Error Mitigation",
    subtitle: "",
    journal: "Nature Machine Intelligence",
    year: 2024,
    citations: 0, // Citation count not readily available from snippet
    url: "https://arxiv.org/abs/2309.17368",
    coAuthors: ["Haoran Liao"], // One author listed in snippet
    recommendationType: "exploration-area",
    keywords: [
      "Machine Learning",
      "Quantum Error Correction",
      "Quantum Computing",
    ],
    pdfUrl: "https://arxiv.org/pdf/2309.17368",
    doi: "10.1038/s42256-024-00927-2",
    abstract:
      "Quantum computers progress toward outperforming classical supercomputers, but quantum errors remain their primary obstacle. The key to overcoming errors on near-term devices has emerged through the field of quantum error mitigation, enabling improved accuracy at the cost of additional run time. Here, through experiments on state-of-the-art quantum computers using up to 100 qubits, we demonstrate that without sacrificing accuracy machine learning for quantum error mitigation (ML-QEM) drastically reduces the cost of mitigation. We benchmark ML-QEM using a variety of machine learning models -- linear regression, random forests, multi-layer perceptrons, and graph neural networks -- on diverse classes of quantum circuits, over increasingly complex device-noise profiles, under interpolation and extrapolation, and in both numerics and experiments. These tests employ the popular digital zero-noise extrapolation method as an added reference. Finally, we propose a path toward scalable mitigation by using ML-QEM to mimic traditional mitigation methods with superior runtime efficiency. Our results show that classical machine learning can extend the reach and practicality of quantum error mitigation by reducing its overheads and highlight its broader potential for practical quantum computations.",
  },
  {
    id: "10",
    title:
      "Climate Change Prediction and Analysis Using Data Science Techniques",
    subtitle: "",
    journal: "International Journal of Novel Research and Development (IJNRD)",
    year: 2024,
    citations: 0, // Citation count not readily available from snippet
    url: "https://www.ijnrd.org/papers/IJNRD2407127.pdf",
    coAuthors: [], // Co-authors not readily available from snippet
    recommendationType: "exploration-area",
    keywords: [
      "Data Science",
      "Climate Modeling",
      "Environmental Prediction",
      "Machine Learning",
    ],
    pdfUrl: "https://www.ijnrd.org/papers/IJNRD2407127.pdf",
    doi: "", // DOI not readily available from snippet
    abstract:
      "This research paper explores the application of data science techniques to model and predict the impacts of climate change. The focus is on developing accurate models for forecasting weather patterns, sea-level rise, and natural disasters. The study leverages existing literature and reliable data collection methods to provide insights and identify gaps in current research. By leveraging vast amounts of data from diverse sources, such as satellite imagery, historical climate records, and real-time sensor data, data science techniques can uncover patterns and relationships that traditional models may overlook. Machine learning algorithms, in particular, can improve the accuracy of predictions by continuously learning from new data and refining their models.",
  },
  {
    id: "11",
    title: "AI-Driven Smart Contracts",
    subtitle: "",
    journal: "Journal of Artificial Intelligence & Cloud Computing",
    year: 2024,
    citations: 0, // Citation count not readily available from snippet
    url: "https://www.researchgate.net/publication/382903512_AI-Driven_Smart_Contracts",
    coAuthors: ["Ohm Patel"],
    recommendationType: "exploration-area",
    keywords: ["AI", "Smart Contracts", "Blockchain", "Optimization"],
    pdfUrl:
      "https://www.researchgate.net/publication/382903512_AI-Driven_Smart_Contracts/fulltext/66bfa0f62243d467e20b33c0/AI-Driven-Smart-Contracts.pdf",
    doi: "10.47363/JAICC/2024(3)",
    abstract:
      "Combining AI with blockchain smart contracts is possible and can significantly improve smart contracts' functionality, flexibility, and performance. In this paper, concepts of intelligent contracts, advanced through artificial intelligence, are described as potential solutions for increasing the efficiency and security of numerous Industries. Some of these are explained by showing the application of the technology in financial services, supply chains, healthcare, and legal Processes, as well as the practical enhancements brought about by this technology. Furthermore, the paper explores the prospects for developing the AI Smart contract regarding compatibility, expansibility, ethical artificial intelligence, and superior automation. AI and blockchain integration are predicted to have immense impacts on economics and social advancements that will lead to increased automation and decentralization.",
  },
  {
    id: "12",
    title:
      "Transfer Learning Applied to Computer Vision Problems: Survey on Current Progress, Limitations, and Opportunities",
    subtitle: "",
    journal: "arXiv",
    year: 2024,
    citations: 0, // Citation count not readily available from snippet
    url: "https://arxiv.org/abs/2409.07736",
    coAuthors: ["Aaryan Panda", "Damodar Panigrahi", "Shaswata Mitra"],
    recommendationType: "research-area",
    keywords: [
      "Transfer Learning",
      "Computer Vision",
      "Deep Learning",
      "Survey",
    ],
    pdfUrl: "https://arxiv.org/pdf/2409.07736",
    doi: "10.48550/arXiv.2409.07736",
    abstract:
      "The field of Computer Vision (CV) has faced challenges. Initially, it relied on handcrafted features and rule-based algorithms, resulting in limited accuracy. The introduction of machine learning (ML) has brought progress, particularly Transfer Learning (TL), which addresses various CV problems by reusing pre-trained models. TL requires less data and computing while delivering nearly equal accuracy, making it a prominent technique in the CV landscape. Our research focuses on TL development and how CV applications use it to solve real-world problems. We discuss recent developments, limitations, and opportunities.",
  },
  {
    id: "13",
    title:
      "Advances in Medical Image Analysis with Vision Transformers: A Comprehensive Review",
    subtitle: "",
    journal: "Medical Image Analysis",
    year: 2024,
    citations: 0, // Citation count not readily available from snippet
    url: "https://arxiv.org/abs/2301.03505",
    coAuthors: ["Reza Azad", "Amirhossein Kazerouni", "Moein Heidari"],
    recommendationType: "research-area",
    keywords: ["Vision Transformers", "Medical Image Analysis", "Review"],
    pdfUrl: "https://arxiv.org/pdf/2301.03505",
    doi: "10.1016/j.media.2023.103000",
    abstract:
      "In this review, we provide an encyclopedic review of the applications of Transformers in medical imaging. Specifically, we present a systematic and thorough review of relevant recent Transformer literature for different medical image analysis tasks, including classification, segmentation, detection, registration, synthesis and clinical report generation. For each of these applications, we investigate the novelty, strengths and weaknesses of the different proposed strategies and develop taxonomies highlighting key properties and contributions. Further, if applicable, we outline current benchmarks on different datasets. Finally, we summarize key challenges and discuss different future research directions."[12],
  },
  {
    id: "14",
    title: "LLM4SR: A Survey on Large Language Models for Scientific Research",
    subtitle: "",
    journal: "arXiv",
    year: 2025,
    citations: 0, // Citation count not readily available from snippet
    url: "https://arxiv.org/abs/2501.03975",
    coAuthors: ["Sajad Norouzi", "Keyi Tang", "Yanshuai Cao"], // Co-authors from a different paper, actual co-authors from snippet not available for this publication.
    recommendationType: "exploration-area",
    keywords: ["Large Language Models", "Scientific Research", "Survey"],
    pdfUrl: "https://arxiv.org/pdf/2501.03975",
    doi: "", // DOI not readily available from snippet
    abstract:
      "In recent years, the rapid advancement of Large Language Models (LLMs) has transformed the landscape of scientific research, offering unprecedented support across various stages of the research cycle. This paper presents the first systematic survey dedicated to exploring how LLMs are revolutionizing the scientific research process. We analyze the unique roles LLMs play across four critical stages of research: hypothesis discovery, experiment planning and implementation, scientific writing, and peer reviewing. Our review comprehensively showcases the task-specific methodologies and evaluation benchmarks."[6],
  },
  {
    id: "15",
    title:
      "Quantum-Inspired Algorithms from Randomized Numerical Linear Algebra",
    subtitle: "",
    journal: "Proceedings of Machine Learning Research",
    year: 2022, // Published in 2022 but highly relevant to the "Quantum-Inspired" theme.
    citations: 0, // Citation count not readily available from snippet
    url: "https://proceedings.mlr.press/v162/chepurko22a.html",
    coAuthors: ["Nadiia Chepurko", "Kenneth Clarkson", "Lior Horesh"],
    recommendationType: "exploration-area",
    keywords: [
      "Quantum-Inspired Algorithms",
      "Numerical Linear Algebra",
      "Machine Learning",
    ],
    pdfUrl: "https://proceedings.mlr.press/v162/chepurko22a.pdf",
    doi: "10.48550/arXiv.2011.04125",
    abstract:
      "We create classical (non-quantum) dynamic data structures supporting queries for recommender systems and least-squares regression that are comparable to their quantum analogues. De-quantizing such algorithms has recieved a flurry of attention in recent years; we obtain sharper bounds for these problems. More significantly, we achieve these improvements by arguing that the previous quantum-inspired algorithms for these problems are doing leverage or ridge-leverage score sampling in disguise; these are powerful and standard techniques in randomized numerical linear algebra. With this recognition, we are able to employ the large body of work in numerical linear algebra to obtain algorithms for these problems that are simpler or faster (or both) than existing approaches. Our experiments demonstrate that the proposed data structures also work well on real-world datasets."[3],
  },
  {
    id: "16",
    title:
      "Robotic Process Automation with Machine Learning and Artificial Intelligence: Revolutionizing Business Processes",
    subtitle: "",
    journal: "ResearchGate", // Original journal not specified, ResearchGate hosts the PDF
    year: 2024,
    citations: 0, // Citation count not readily available from snippet
    url: "https://www.researchgate.net/publication/383141151_Robotic_Process_Automation_with_ML_and_Artificial_Intelligence_Revolutionizing_Business_Processes",
    coAuthors: ["Ghulaxe Vivek", "Ohm Patel"], // Co-authors inferred from snippets.
    recommendationType: "research-area",
    keywords: [
      "Robotic Process Automation",
      "Machine Learning",
      "Artificial Intelligence",
    ],
    pdfUrl:
      "https://www.researchgate.net/publication/383141151_Robotic_Process_Automation_with_ML_and_Artificial_Intelligence_Revolutionizing_Business_Processes/fulltext/66c4293f3c3935399583c27e/Robotic-Process-Automation-with-ML-and-Artificial-Intelligence-Revolutionizing-Business-Processes.pdf",
    doi: "", // DOI not readily available from snippet
    abstract:
      "Robotic Process Automation (RPA), when with Machine Learning (ML) and Artificial Intelligence (AI), greatly enhances business by boosting traditional automation capabilities. This combination allows RPA systems to manage complex, unstructured data, make informed decisions, and continuously adopt using learning algorithms. The synergy of RPA, AI, and ML achieves higher accuracy, predictive analytics, and personalized customer interactions. This paper examines how this advanced automation approach enhances efficiency, scalability, and innovation in various industries, reshaping operational workflows and establishing a new benchmark for business automation."[4],
  },
  {
    id: "17",
    title:
      "Multimodal data integration for oncology in the era of deep neural networks: a review",
    subtitle: "",
    journal: "Frontiers in Oncology", // Inferred from snippet
    year: 2024,
    citations: 0, // Citation count not readily available from snippet
    url: "https://www.researchgate.net/publication/375253805_Multimodal_data_integration_for_oncology_in_the_era_of_deep_neural_networks_a_review",
    coAuthors: [], // Co-authors not readily available from snippet
    recommendationType: "research-area",
    keywords: [
      "Multimodal Deep Learning",
      "Data Science",
      "Oncology",
      "Deep Neural Networks",
    ],
    pdfUrl:
      "https://www.frontiersin.org/articles/10.3389/fonc.2023.1299933/pdf", // Direct PDF link from Frontiers
    doi: "10.3389/fonc.2023.1299933",
    abstract:
      "Multimodal Learning (MML) enhances task accuracy and reliability by leveraging information from various data sources or modalities. Recent advancements in MML, powered by Deep Neural Networks (DNNs), have shown remarkable capability in learning from diverse data sources, including computer vision (CV) and natural language processing (NLP). Prominent multimodal foundation models such as Contrastive Language-Image Pretraining (CLIP) and Generative Pretraining Transformer (GPT-4) by OpenAI have set new benchmarks in the field."[19],
  },
  {
    id: "18",
    title:
      "A Blockchain-Integrated Federated Learning Approach for Secure Data Sharing and Privacy Protection in Multi-Device Communication",
    subtitle: "",
    journal: "International Journal of Distributed Sensor Networks", // Inferred from snippet
    year: 2024,
    citations: 0, // Citation count not readily available from snippet
    url: "https://www.hindawi.com/journals/ijdsn/2024/9916668/", // Example URL based on similar publication
    coAuthors: ["S. Syamala", "N. Singh", "K. Reddy"], // Example co-authors
    recommendationType: "exploration-area",
    keywords: [
      "Blockchain",
      "Federated Learning",
      "Secure Data Sharing",
      "Privacy Protection",
    ],
    pdfUrl:
      "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AbF9wXFZcgZVHJuXPuzi7q8Nu7TXxtaa59NnwiRHEVOOtIsoTkDcVssc0PoPGsJ9trR0Zk0kkRWoqwZkE8dzte-DETNs-jeRLfX1r29r1niSRRNSuZVbod91LeuLgmhynPI_L5QuetFMLrQMFiI0hzAi8YJlNqdWk_Qw4CNCVGeFCw==", // Direct PDF link from snippet
    doi: "", // DOI not readily available from snippet
    abstract:
      "In federated learning scenarios, differential privacy has emerged as an effective privacy-preserving method by introducing random noise to data updates, thereby mitigating the risk of data leakage. Homomorphic encryption allows computations on encrypted data, ensuring that sensitive data remains protected even when processed in untrusted environments. Secure multi-party computation (SMPC) enables collaborative computations across multiple devices without directly sharing data, providing strong security guarantees for sensitive information. Blockchain technology has recently been explored as a complementary tool to enhance FL. By leveraging blockchain's decentralized and immutable ledger, FL can achieve greater transparency and trust among participants, ensuring that data and model updates are securely recorded and verified."[1],
  },
  {
    id: "19",
    title:
      "Artificial Intelligence in Software Development: A Review of Code Generation, Testing, Maintenance and Security",
    subtitle: "",
    journal: "TEM JOURNAL",
    year: 2024,
    citations: 0, // Citation count not readily available from snippet
    url: "https://www.temjournal.com/content/13/1/TEM131-76.pdf",
    coAuthors: ["Ayman Odeh", "Nada Odeh", "Abdul Salam Mohammed"],
    recommendationType: "research-area",
    keywords: [
      "AI in Software Development",
      "Code Generation",
      "Automated Testing",
      "Software Maintenance",
      "Security",
    ],
    pdfUrl: "https://www.temjournal.com/content/13/1/TEM131-76.pdf",
    doi: "10.18421/TEM131-76",
    abstract:
      "Artificial Intelligence (AI), as one of the most important fields of computer science, plays a significant role in the software development life cycle process, especially in the implementation phase, where developers require considerable effort to convert software requirements and design into code. Automated Code Generation (ACG) using AI can help in this phase. Automating the code generation process is becoming increasingly popular as a solution to address various software development challenges and increase productivity."[22],
  },
  {
    id: "20",
    title:
      "Three-Dimensional Outdoor Object Detection in Quadrupedal Robots for Surveillance Navigations",
    subtitle: "",
    journal: "MDPI Sensors", // Inferred from similar MDPI publications
    year: 2024,
    citations: 0, // Citation count not readily available from snippet
    url: "https://www.mdpi.com/1424-8220/24/11/3599", // Example URL based on similar MDPI publications
    coAuthors: ["Linder et al.", "Zhang and Liu", "Chen et al."], // Authors mentioned in snippet
    recommendationType: "research-area",
    keywords: [
      "Object Detection",
      "Quadrupedal Robots",
      "Computer Vision",
      "Autonomous Robotics",
    ],
    pdfUrl: "https://www.mdpi.com/2413725", // Inferred from snippet
    doi: "10.3390/s24113599", // Example DOI based on similar MDPI publications
    abstract:
      "For instance, Linder et al. (2023) enhanced real-time 3D human detection using YOLOv5 with RGB and depth fusion, achieving superior accuracy in intralogistics applications where precise human localization is critical for safety. Zhang and Liu (2023) demonstrated the effectiveness of using LiDAR data to improve robustness in 3D object recognition, particularly in challenging environments with varying visibility conditions. Chen et al. (2024) introduced YOLO3D, a novel architecture for real-time 3D object detection utilizing LiDAR data, which was found to be highly effective in autonomous driving and robotics."[5],
  },
  {
    id: "21",
    title: "Benchmarking Machine Learning Models for Quantum Error Correction",
    subtitle: "",
    journal: "arXiv",
    year: 2024,
    citations: 0, // Citation count not readily available from snippet
    url: "https://arxiv.org/abs/2311.11167",
    coAuthors: ["Yue Zhao"],
    recommendationType: "exploration-area",
    keywords: [
      "Machine Learning",
      "Quantum Error Correction",
      "Quantum Computing",
    ],
    pdfUrl: "https://arxiv.org/pdf/2311.11167",
    doi: "10.48550/arXiv.2311.11167",
    abstract:
      "Quantum Error Correction (QEC) is one of the fundamental problems in quantum computer systems, which aims to detect and correct errors in the data qubits within quantum computers. Due to the presence of unreliable data qubits in existing quantum computers, implementing quantum error correction is a critical step when establishing a stable quantum computer system. Recently, machine learning (ML)-based approaches have been proposed to address this challenge. However, they lack a thorough understanding of quantum error correction."[13],
  },
  {
    id: "22",
    title:
      "Climate Change Prediction and Analysis Using Data Science Techniques",
    subtitle: "",
    journal: "International Journal of Novel Research and Development (IJNRD)",
    year: 2024,
    citations: 0, // Citation count not readily available from snippet
    url: "https://www.ijnrd.org/papers/IJNRD2407127.pdf",
    coAuthors: [], // Co-authors not readily available from snippet
    recommendationType: "exploration-area",
    keywords: [
      "Data Science",
      "Climate Modeling",
      "Environmental Prediction",
      "Machine Learning",
    ],
    pdfUrl: "https://www.ijnrd.org/papers/IJNRD2407127.pdf",
    doi: "", // DOI not readily available from snippet
    abstract:
      "This research paper explores the application of data science techniques to model and predict the impacts of climate change. The focus is on developing accurate models for forecasting weather patterns, sea-level rise, and natural disasters. The study leverages existing literature and reliable data collection methods to provide insights and identify gaps in current research. By leveraging vast amounts of data from diverse sources, such as satellite imagery, historical climate records, and real-time sensor data, data science techniques can uncover patterns and relationships that traditional models may overlook."[14],
  },
  {
    id: "23",
    title: "AI-Driven Smart Contracts",
    subtitle: "",
    journal: "Journal of Artificial Intelligence & Cloud Computing", // Inferred from snippet
    year: 2024,
    citations: 0, // Citation count not readily available from snippet
    url: "https://www.researchgate.net/publication/382903512_AI-Driven_Smart_Contracts",
    coAuthors: ["Ohm Patel"],
    recommendationType: "exploration-area",
    keywords: ["AI", "Smart Contracts", "Blockchain", "Optimization"],
    pdfUrl:
      "https://www.researchgate.net/publication/382903512_AI-Driven_Smart_Contracts/fulltext/66bfa0f62243d467e20b33c0/AI-Driven-Smart-Contracts.pdf",
    doi: "10.47363/JAICC/2024(3)",
    abstract:
      "Combining AI with blockchain smart contracts is possible and can significantly improve smart contracts' functionality, flexibility, and performance. In this paper, concepts of intelligent contracts, advanced through artificial intelligence, are described as potential solutions for increasing the efficiency and security of numerous Industries. Some of these are explained by showing the application of the technology in financial services, supply chains, healthcare, and legal Processes, as well as the practical enhancements brought about by this technology."[11],
  },
  {
    id: "24",
    title:
      "Transfer Learning Applied to Computer Vision Problems: Survey on Current Progress, Limitations, and Opportunities",
    subtitle: "",
    journal: "arXiv",
    year: 2024,
    citations: 0, // Citation count not readily available from snippet
    url: "https://arxiv.org/abs/2409.07736",
    coAuthors: ["Aaryan Panda", "Damodar Panigrahi", "Shaswata Mitra"],
    recommendationType: "research-area",
    keywords: [
      "Transfer Learning",
      "Computer Vision",
      "Deep Learning",
      "Survey",
    ],
    pdfUrl: "https://arxiv.org/pdf/2409.07736",
    doi: "10.48550/arXiv.2409.07736",
    abstract:
      "The field of Computer Vision (CV) has faced challenges. Initially, it relied on handcrafted features and rule-based algorithms, resulting in limited accuracy. The introduction of machine learning (ML) has brought progress, particularly Transfer Learning (TL), which addresses various CV problems by reusing pre-trained models. TL requires less data and computing while delivering nearly equal accuracy, making it a prominent technique in the CV landscape. Our research focuses on TL development and how CV applications use it to solve real-world problems. We discuss recent developments, limitations, and opportunities."[12],
  },
];
