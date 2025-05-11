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
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Types
type SocialLink = {
  platform: string
  url: string
  username: string
}

type Publication = {
  title: string
  journal: string
  year: number
  citations: number
  url: string
  coAuthors: string[]
}

type Education = {
  degree: string
  institution: string
  year: string
}

type Award = {
  name: string
  year: string
}

type ResearcherData = {
  name: string
  title: string
  institution: string
  department: string
  field: string
  bio: string
  avatar: string
  email: string
  phone: string
  website: string
  location: string
  socialLinks: SocialLink[]
  stats: {
    hIndex: number
    citations: number
    publications: number
    collaborators: number
  }
  publications: Publication[]
  researchInterests: string[]
  currentProjects: string[]
  education: Education[]
  awards: Award[]
}

// This would typically come from your database
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
        { platform: "Twitter", url: "https://twitter.com/sarahchen", username: "@sarahchen" },
        { platform: "LinkedIn", url: "https://linkedin.com/in/sarahchen", username: "sarahchen" },
        {
          platform: "Google Scholar",
          url: "https://scholar.google.com/citations?user=sarahchen",
          username: "Sarah Chen",
        },
        { platform: "ORCID", url: "https://orcid.org/0000-0002-1234-5678", username: "0000-0002-1234-5678" },
      ],
      stats: {
        hIndex: 32,
        citations: 4850,
        publications: 78,
        collaborators: 124,
      },
      publications: [
        {
          title: "Deep Learning for Medical Image Analysis: A Comprehensive Review",
          journal: "Nature Medicine",
          year: 2023,
          citations: 145,
          url: "#",
          coAuthors: ["J. Smith", "R. Johnson", "M. Williams"],
        },
        {
          title: "AI-Driven Diagnostics for Rare Diseases: Challenges and Opportunities",
          journal: "Journal of Medical AI",
          year: 2022,
          citations: 87,
          url: "#",
          coAuthors: ["L. Zhang", "K. Patel"],
        },
        {
          title: "Federated Learning in Healthcare: Privacy-Preserving Collaborative Model Training",
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
        { degree: "Ph.D. in Computer Science", institution: "MIT", year: "2015" },
        { degree: "M.S. in Biomedical Engineering", institution: "Johns Hopkins University", year: "2011" },
        { degree: "B.S. in Electrical Engineering", institution: "UC Berkeley", year: "2009" },
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
        { platform: "Twitter", url: "https://twitter.com/jameswilson", username: "@jameswilson" },
        { platform: "LinkedIn", url: "https://linkedin.com/in/jameswilson", username: "jameswilson" },
        {
          platform: "Google Scholar",
          url: "https://scholar.google.com/citations?user=jameswilson",
          username: "James Wilson",
        },
        { platform: "GitHub", url: "https://github.com/jameswilson", username: "jameswilson" },
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
        { degree: "Ph.D. in Computer Science", institution: "Stanford University", year: "2008" },
        { degree: "M.S. in Computer Science", institution: "Carnegie Mellon University", year: "2004" },
        { degree: "B.S. in Computer Engineering", institution: "University of Michigan", year: "2002" },
      ],
      awards: [
        { name: "ACM SIGGRAPH Significant New Researcher Award", year: "2022" },
        { name: "MIT EECS Faculty Research Innovation Fellowship", year: "2020" },
        { name: "NSF CAREER Award", year: "2015" },
      ],
    },
  }

  return researchers[id as keyof typeof researchers]
}

// Component: Profile Header
const ProfileHeader = ({ researcher }: { researcher: ResearcherData }) => {
  return (
    <>
      <div className="relative h-48 md:h-64 lg:h-80 w-full">

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80"></div>
        <div className="absolute top-4 left-4">
          <Link href="/researcher">
            <Button variant="outline" size="sm" className="bg-background/80 backdrop-blur-sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          </Link>
        </div>
        <div className="absolute top-4 right-4">
          <Button variant="outline" size="sm" className="bg-background/80 backdrop-blur-sm">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 -mt-16 md:-mt-20 mb-8 relative z-10">
        <div className="flex-shrink-0">
          <Avatar className="h-32 w-32 md:h-40 md:w-40 border-4 border-background rounded-full">
            <AvatarImage src={researcher.avatar || "/placeholder.svg"} alt={researcher.name} />
            <AvatarFallback>
              {researcher.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-1 pt-4 md:pt-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold">{researcher.name}</h1>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-muted-foreground mt-1">
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  <span>{researcher.title}</span>
                </div>
                <div className="hidden sm:block">•</div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{researcher.institution}</span>
                </div>
                <div className="hidden sm:block">•</div>
                <div className="flex items-center">
                  <Globe className="h-4 w-4 mr-1" />
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
  )
}

// Component: Stat Cards
const StatCards = ({ stats }: { stats: ResearcherData["stats"] }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
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
  )
}

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
          <ul className="list-disc pl-5 space-y-2">
            {researcher.currentProjects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

// Component: Publications Tab Content
const PublicationsTabContent = ({ publications }: { publications: Publication[] }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Publications</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {publications.map((pub, index) => (
          <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
            <h3 className="font-semibold text-lg hover:text-primary">
              <Link href={pub.url}>{pub.title}</Link>
            </h3>
            <div className="flex flex-wrap items-center gap-x-2 text-sm text-muted-foreground mt-1">
              <span>{pub.journal}</span>
              <span>•</span>
              <div className="flex items-center">
                <Calendar className="h-3 w-3 mr-1" />
                <span>{pub.year}</span>
              </div>
              <span>•</span>
              <div className="flex items-center">
                <BookOpen className="h-3 w-3 mr-1" />
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
  )
}

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
              <h3 className="font-semibold text-lg">{project}</h3>
              <p className="text-muted-foreground mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

// Component: Education and Awards Tab Content
const EducationAwardsTabContent = ({
  education,
  awards,
}: {
  education: Education[]
  awards: Award[]
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
              <div key={index} className="flex justify-between items-start">
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
              <div key={index} className="flex justify-between items-start">
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
  )
}

// Component: Contact Information
const ContactInfo = ({ researcher }: { researcher: ResearcherData }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start">
          <Mail className="h-5 w-5 mr-3 mt-0.5 text-muted-foreground" />
          <div>
            <p className="text-sm text-muted-foreground">Email</p>
            <a href={`mailto:${researcher.email}`} className="hover:underline">
              {researcher.email}
            </a>
          </div>
        </div>

        <div className="flex items-start">
          <Phone className="h-5 w-5 mr-3 mt-0.5 text-muted-foreground" />
          <div>
            <p className="text-sm text-muted-foreground">Phone</p>
            <a href={`tel:${researcher.phone}`} className="hover:underline">
              {researcher.phone}
            </a>
          </div>
        </div>

        <div className="flex items-start">
          <Globe className="h-5 w-5 mr-3 mt-0.5 text-muted-foreground" />
          <div>
            <p className="text-sm text-muted-foreground">Website</p>
            <a
              href={researcher.website}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center"
            >
              {researcher.website.replace("https://", "")}
              <ExternalLink className="h-3 w-3 ml-1" />
            </a>
          </div>
        </div>

        <div className="flex items-start">
          <MapPin className="h-5 w-5 mr-3 mt-0.5 text-muted-foreground" />
          <div>
            <p className="text-sm text-muted-foreground">Location</p>
            <p>{researcher.location}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

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
              <Twitter className="h-5 w-5 mr-3 mt-0.5 text-muted-foreground" />
            ) : (
              <AtSign className="h-5 w-5 mr-3 mt-0.5 text-muted-foreground" />
            )}
            <div>
              <p className="text-sm text-muted-foreground">{link.platform}</p>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center"
              >
                {link.username}
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

// Component: Department Info
const DepartmentInfo = ({ department, institution }: { department: string; institution: string }) => {
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
  )
}

// Main Component
export default async function ResearcherProfile({ params }: { params: Promise< { id: string }> }) {

    const { id } = await params;
  const researcher = getResearcherData(id)

  if (!researcher) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-2xl font-bold mb-4">Researcher not found</h1>
        <p className="mb-6">The researcher profile you&apos;re looking for doesn&apos;t exist or has been removed.</p>
        <Link href="/researcher">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header with cover image and profile info */}
      <ProfileHeader researcher={researcher} />

      <div className=" px-4 pb-12">
        {/* Stats cards */}
        <StatCards stats={researcher.stats} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="publications">Publications</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="education">Education & Awards</TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <OverviewTabContent researcher={researcher} />
              </TabsContent>

              <TabsContent value="publications">
                <PublicationsTabContent publications={researcher.publications} />
              </TabsContent>

              <TabsContent value="projects">
                <ProjectsTabContent projects={researcher.currentProjects} />
              </TabsContent>

              <TabsContent value="education">
                <EducationAwardsTabContent education={researcher.education} awards={researcher.awards} />
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <ContactInfo researcher={researcher} />
            <SocialLinks links={researcher.socialLinks} />
            <DepartmentInfo department={researcher.department} institution={researcher.institution} />
          </div>
        </div>
      </div>
    </div>
  )
}
