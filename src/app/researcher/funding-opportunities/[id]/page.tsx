import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ContactCard } from "@/app/_components/researcher/funding-opportunities/contact-card"
import { FundingHeader } from "@/app/_components/researcher/funding-opportunities/funding-header"
import { FundingSidebar } from "@/app/_components/researcher/funding-opportunities/funding-sidebar"
import { FundingTabs } from "@/app/_components/researcher/funding-opportunities/funding-tabs"
import { AIReviewSection } from "@/components/ai-review-section"
import type { FundingOpportunity } from "@/types/researcher"





// This would typically come from a database or API
const getFundingOpportunity = async (id: string): Promise<FundingOpportunity | undefined> => {
  // Mock data based on the image
  const opportunities = {
    "nsf-advanced-computing": {
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
    "nih-medical-technology": {
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
  }

  return opportunities[id as keyof typeof opportunities]
}

export default async function FundingDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
  const opportunity = await getFundingOpportunity(id)

  if (!opportunity) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <h1 className="text-2xl font-bold">Funding opportunity not found</h1>
        <p className="mt-2 text-muted-foreground">The requested funding opportunity could not be found.</p>
        <Link href="/researcher" className="mt-4">
          <Button variant="outline">Back to Dashboard</Button>
        </Link>
      </div>
    )
  }

  return (
      <div className="w-full flex items-center justify-center">
    <div className="container items-center py-6 space-y-8">
      <FundingHeader
        title={opportunity.title}
        organization={opportunity.organization}
        category={opportunity.category}
      />

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <FundingTabs
            description={opportunity.description}
            eligibility={opportunity.eligibility}
            requirements={opportunity.requirements}
            keyDates={opportunity.keyDates}
          />
        </div>

        <div className="space-y-6">
          <FundingSidebar
            amount={opportunity.amount}
            deadline={opportunity.deadline}
            matchScore={opportunity.matchScore}
          />
          <ContactCard contactInfo={opportunity.contactInfo} />
        </div>
      </div>

      <div className="mt-8">
        <AIReviewSection analysis={opportunity.aiAnalysis} />
      </div>
    </div>
      </div>
  )
}
