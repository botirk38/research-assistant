import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const ResearcherNotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="mb-4 text-2xl font-bold">Researcher not found</h1>
      <p className="mb-6">
        The researcher profile you&apos;re looking for doesn&apos;t exist or has
        been removed.
      </p>
      <Link href="/researcher">
        <Button>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Button>
      </Link>
    </div>
  );
};

export default ResearcherNotFound;
