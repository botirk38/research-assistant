import Link from "next/link"
import { ArrowLeft, Download, Share2, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface FundingHeaderProps {
  title: string
  organization: string
  category: string
}

export function FundingHeader({ title, organization, category }: FundingHeaderProps) {
  return (
    <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:items-start md:space-y-0">
      <div className="space-y-1">
        <div className="flex items-center space-x-2">
          <Link href="/researcher" className="text-muted-foreground hover:text-foreground">
            <Button variant="ghost" size="sm" className="gap-1">
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Button>
          </Link>
        </div>
        <h1 className="text-2xl font-bold sm:text-3xl">{title}</h1>
        <div className="flex items-center space-x-2 text-muted-foreground">
          <span>{organization}</span>
          <span>•</span>
          <Badge variant="outline">{category}</Badge>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
        <Button variant="outline" size="sm" className="gap-1">
          <Star className="h-4 w-4" />
          Save
        </Button>
        <Button variant="outline" size="sm" className="gap-1">
          <Share2 className="h-4 w-4" />
          Share
        </Button>
        <Button variant="outline" size="sm" className="gap-1">
          <Download className="h-4 w-4" />
          Download PDF
        </Button>
      </div>
    </div>
  )
}
