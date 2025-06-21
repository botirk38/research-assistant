import type { Publication } from "@/types/researcher";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Calendar, BookOpen } from "lucide-react";

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

export default PublicationsTabContent;
