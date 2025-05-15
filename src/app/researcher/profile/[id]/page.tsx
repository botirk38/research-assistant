import {
  ArrowLeft,
  AtSign,
  BookOpen,
  Calendar,
  Download,
  ExternalLink,
  Globe,
  Mail,
  MapPin,
  Phone,
  Share2,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Types
type SocialLink = {
  platform: string;
  url: string;
  username: string;
};

type Publication = {
  title: string;
  journal: string;
  year: number;
  citations: number;
  url: string;
  coAuthors: string[];
};

type Education = {
  degree: string;
  institution: string;
  year: string;
};

type Award = {
  name: string;
  year: string;
};

type ResearcherData = {
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
  stats: {
    hIndex: number;
    citations: number;
    publications: number;
    collaborators: number;
  };
  publications: Publication[];
  researchInterests: string[];
  currentProjects: string[];
  education: Education[];
  awards: Award[];
};

const getResearcherData = (id: string) => {
  // Mock data for demonstration
  const researchers = {
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
          journal: "Nature Medicine",
          year: 2023,
          citations: 145,
          url: "#",
          coAuthors: ["J. Smith", "R. Johnson", "M. Williams"],
        },
        {
          title:
            "AI-Driven Diagnostics for Rare Diseases: Challenges and Opportunities",
          journal: "Journal of Medical AI",
          year: 2022,
          citations: 87,
          url: "#",
          coAuthors: ["L. Zhang", "K. Patel"],
        },
        {
          title:
            "Federated Learning in Healthcare: Privacy-Preserving Collaborative Model Training",
          journal: "IEEE Transactions on Medical Imaging",
          year: 2021,
          citations: 203,
          url: "#",
          coAuthors: ["A. Garcia", "T. Nguyen", "S. Kim"],
        },
        {
          title: "Explainable AI for Clinical Decision Support Systems",
          journal: "JAMA Network Open",
          year: 2021,
          citations: 176,
          url: "#",
          coAuthors: ["B. Taylor", "C. Robinson"],
        },
        {
          title: "Transfer Learning Approaches for Medical Image Segmentation",
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
          year: "2015",
        },
        {
          degree: "M.S. in Biomedical Engineering",
          institution: "Johns Hopkins University",
          year: "2011",
        },
        {
          degree: "B.S. in Electrical Engineering",
          institution: "UC Berkeley",
          year: "2009",
        },
      ],
      awards: [
        { name: "NIH Director's New Innovator Award", year: "2022" },
        { name: "Stanford Medicine Faculty Innovation Award", year: "2021" },
        { name: "IEEE Young Investigator Award", year: "2019" },
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
      coverImage: "/placeholder.svg?height=400&width=1200",
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
          journal: "CVPR",
          year: 2023,
          citations: 87,
          url: "#",
          coAuthors: ["A. Smith", "B. Johnson"],
        },
        {
          title: "Self-Supervised Learning for Visual Representation",
          journal: "NeurIPS",
          year: 2022,
          citations: 203,
          url: "#",
          coAuthors: ["C. Brown", "D. Davis"],
        },
        {
          title: "Transformer Architectures for Multi-Modal Understanding",
          journal: "ICCV",
          year: 2021,
          citations: 312,
          url: "#",
          coAuthors: ["E. Martin", "F. Thompson"],
        },
        {
          title: "Embodied AI: Connecting Vision, Language, and Action",
          journal: "Science Robotics",
          year: 2021,
          citations: 176,
          url: "#",
          coAuthors: ["G. Rodriguez", "H. Kim"],
        },
        {
          title: "Efficient Neural Networks for Resource-Constrained Devices",
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
          year: "2008",
        },
        {
          degree: "M.S. in Computer Science",
          institution: "Carnegie Mellon University",
          year: "2004",
        },
        {
          degree: "B.S. in Computer Engineering",
          institution: "University of Michigan",
          year: "2002",
        },
      ],
      awards: [
        { name: "ACM SIGGRAPH Significant New Researcher Award", year: "2022" },
        {
          name: "MIT EECS Faculty Research Innovation Fellowship",
          year: "2020",
        },
        { name: "NSF CAREER Award", year: "2015" },
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
           journal: "Nature Machine Intelligence",
           year: 2023,
           citations: 95,
           url: "#",
           coAuthors: ["M. Johnson", "P. Singh", "R. Kumar"],
         },
         {
           title: "Ethical Considerations in Automated Decision Systems",
           journal: "AI Ethics Journal",
           year: 2022,
           citations: 142,
           url: "#",
           coAuthors: ["S. Martinez", "K. Chen"],
         },
         {
           title: "Debiasing Neural Networks: Methods and Implications",
           journal: "Conference on Fairness, Accountability, and Transparency",
           year: 2021,
           citations: 187,
           url: "#",
           coAuthors: ["L. Wilson", "A. Patel", "C. Lee"],
         },
         {
           title: "Transparency in AI: A Framework for Explainable Models",
           journal: "Journal of Artificial Intelligence Research",
           year: 2021,
           citations: 163,
           url: "#",
           coAuthors: ["R. Anderson", "M. White"],
         },
         {
           title: "Algorithmic Bias in Healthcare Applications",
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
           year: "2012",
         },
         {
           degree: "M.S. in Artificial Intelligence",
           institution: "Stanford University",
           year: "2008",
         },
         {
           degree: "B.S. in Mathematics",
           institution: "Harvard University",
           year: "2006",
         },
       ],
       awards: [
         { name: "ACM SIGAI Autonomous Agents Research Award", year: "2023" },
         { name: "Harvard CS Excellence in Research Award", year: "2021" },
         { name: "NSF CAREER Award", year: "2018" },
       ],
     },


  };

  return researchers[id as keyof typeof researchers];
};

// Component: Profile Header
const ProfileHeader = ({ researcher }: { researcher: ResearcherData }) => {
  return (
    <>
      <div className="relative h-48 w-full md:h-64 lg:h-80">
        <div className="to-background/80 absolute inset-0 bg-gradient-to-b from-transparent"></div>
        <div className="absolute top-4 left-4">
          <Link href="/researcher">
            <Button
              variant="outline"
              size="sm"
              className="bg-background/80 backdrop-blur-sm"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          </Link>
        </div>
        <div className="absolute top-4 right-4">
          <Button
            variant="outline"
            size="sm"
            className="bg-background/80 backdrop-blur-sm"
          >
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
        </div>
      </div>

      <div className="relative z-10 -mt-16 mb-8 flex flex-col gap-6 md:-mt-20 md:flex-row">
        <div className="flex-shrink-0">
          <Avatar className="border-background h-32 w-32 rounded-full border-4 md:h-40 md:w-40">
            <AvatarImage
              src={researcher.avatar || "/placeholder.svg"}
              alt={researcher.name}
            />
            <AvatarFallback>
              {researcher.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-1 pt-4 md:pt-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="text-3xl font-bold">{researcher.name}</h1>
              <div className="text-muted-foreground mt-1 flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
                <div className="flex items-center">
                  <BookOpen className="mr-1 h-4 w-4" />
                  <span>{researcher.title}</span>
                </div>
                <div className="hidden sm:block">•</div>
                <div className="flex items-center">
                  <MapPin className="mr-1 h-4 w-4" />
                  <span>{researcher.institution}</span>
                </div>
                <div className="hidden sm:block">•</div>
                <div className="flex items-center">
                  <Globe className="mr-1 h-4 w-4" />
                  <span>{researcher.field}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button>
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </Button>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Component: Stat Cards
const StatCards = ({ stats }: { stats: ResearcherData["stats"] }) => {
  return (
    <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
      <Card>
        <CardHeader className="p-4 pb-2">
          <CardDescription>Publications</CardDescription>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <CardTitle>{stats.publications}</CardTitle>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="p-4 pb-2">
          <CardDescription>Citations</CardDescription>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <CardTitle>{stats.citations.toLocaleString()}</CardTitle>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="p-4 pb-2">
          <CardDescription>h-index</CardDescription>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <CardTitle>{stats.hIndex}</CardTitle>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="p-4 pb-2">
          <CardDescription>Collaborators</CardDescription>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <CardTitle>{stats.collaborators}</CardTitle>
        </CardContent>
      </Card>
    </div>
  );
};

// Component: Overview Tab Content
const OverviewTabContent = ({ researcher }: { researcher: ResearcherData }) => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Biography</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{researcher.bio}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Research Interests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {researcher.researchInterests.map((interest, index) => (
              <Badge key={index} variant="secondary">
                {interest}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Current Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-2 pl-5">
            {researcher.currentProjects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

// Component: Publications Tab Content
const PublicationsTabContent = ({
  publications,
}: {
  publications: Publication[];
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Publications</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {publications.map((pub, index) => (
          <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
            <h3 className="hover:text-primary text-lg font-semibold">
              <Link href={pub.url}>{pub.title}</Link>
            </h3>
            <div className="text-muted-foreground mt-1 flex flex-wrap items-center gap-x-2 text-sm">
              <span>{pub.journal}</span>
              <span>•</span>
              <div className="flex items-center">
                <Calendar className="mr-1 h-3 w-3" />
                <span>{pub.year}</span>
              </div>
              <span>•</span>
              <div className="flex items-center">
                <BookOpen className="mr-1 h-3 w-3" />
                <span>{pub.citations} citations</span>
              </div>
            </div>
            <div className="mt-2 text-sm">
              <span className="text-muted-foreground">Co-authors: </span>
              {pub.coAuthors.join(", ")}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

// Component: Projects Tab Content
const ProjectsTabContent = ({ projects }: { projects: string[] }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Current Research Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
              <h3 className="text-lg font-semibold">{project}</h3>
              <p className="text-muted-foreground mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

// Component: Education and Awards Tab Content
const EducationAwardsTabContent = ({
  education,
  awards,
}: {
  education: Education[];
  awards: Award[];
}) => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Education</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <p className="text-muted-foreground">{edu.institution}</p>
                </div>
                <Badge variant="outline">{edu.year}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Awards & Honors</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {awards.map((award, index) => (
              <div key={index} className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold">{award.name}</h3>
                </div>
                <Badge variant="outline">{award.year}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Component: Contact Information
const ContactInfo = ({ researcher }: { researcher: ResearcherData }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start">
          <Mail className="text-muted-foreground mt-0.5 mr-3 h-5 w-5" />
          <div>
            <p className="text-muted-foreground text-sm">Email</p>
            <a href={`mailto:${researcher.email}`} className="hover:underline">
              {researcher.email}
            </a>
          </div>
        </div>

        <div className="flex items-start">
          <Phone className="text-muted-foreground mt-0.5 mr-3 h-5 w-5" />
          <div>
            <p className="text-muted-foreground text-sm">Phone</p>
            <a href={`tel:${researcher.phone}`} className="hover:underline">
              {researcher.phone}
            </a>
          </div>
        </div>

        <div className="flex items-start">
          <Globe className="text-muted-foreground mt-0.5 mr-3 h-5 w-5" />
          <div>
            <p className="text-muted-foreground text-sm">Website</p>
            <a
              href={researcher.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:underline"
            >
              {researcher.website.replace("https://", "")}
              <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>
        </div>

        <div className="flex items-start">
          <MapPin className="text-muted-foreground mt-0.5 mr-3 h-5 w-5" />
          <div>
            <p className="text-muted-foreground text-sm">Location</p>
            <p>{researcher.location}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Component: Social Links
const SocialLinks = ({ links }: { links: SocialLink[] }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Social Links</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {links.map((link, index) => (
          <div key={index} className="flex items-start">
            {link.platform === "Twitter" ? (
              <Twitter className="text-muted-foreground mt-0.5 mr-3 h-5 w-5" />
            ) : (
              <AtSign className="text-muted-foreground mt-0.5 mr-3 h-5 w-5" />
            )}
            <div>
              <p className="text-muted-foreground text-sm">{link.platform}</p>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:underline"
              >
                {link.username}
                <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

// Component: Department Info
const DepartmentInfo = ({
  department,
  institution,
}: {
  department: string;
  institution: string;
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Department</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{department}</p>
        <p className="mt-2">{institution}</p>
      </CardContent>
    </Card>
  );
};

// Main Component
export default async function ResearcherProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const researcher = getResearcherData(id);

  if (!researcher) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="mb-4 text-2xl font-bold">Researcher not found</h1>
        <p className="mb-6">
          The researcher profile you&apos;re looking for doesn&apos;t exist or
          has been removed.
        </p>
        <Link href="/researcher">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center">
      <div className="container">
        {/* Header with cover image and profile info */}
        <ProfileHeader researcher={researcher} />

        <div className="px-4 pb-12">
          {/* Stats cards */}
          <StatCards stats={researcher.stats} />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Main content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="publications">Publications</TabsTrigger>
                  <TabsTrigger value="projects">Projects</TabsTrigger>
                  <TabsTrigger value="education">
                    Education & Awards
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                  <OverviewTabContent researcher={researcher} />
                </TabsContent>

                <TabsContent value="publications">
                  <PublicationsTabContent
                    publications={researcher.publications}
                  />
                </TabsContent>

                <TabsContent value="projects">
                  <ProjectsTabContent projects={researcher.currentProjects} />
                </TabsContent>

                <TabsContent value="education">
                  <EducationAwardsTabContent
                    education={researcher.education}
                    awards={researcher.awards}
                  />
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <ContactInfo researcher={researcher} />
              <SocialLinks links={researcher.socialLinks} />
              <DepartmentInfo
                department={researcher.department}
                institution={researcher.institution}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
