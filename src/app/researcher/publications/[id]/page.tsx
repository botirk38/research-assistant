import { notFound } from "next/navigation";
import { mockPublications } from "@/lib/data/publications";
import { PublicationHeader } from "../../_components/publications/publication-page/publication-header";
import { PublicationTabs } from "../../_components/publications/publication-page/publication-tabs";
interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PublicationPage({ params }: PageProps) {
  const { id } = await params;
  const publication = mockPublications.find((pub) => pub.id === id);

  if (!publication) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-7xl px-4 py-6">
      <div className="space-y-6">
        {/* Publication Header */}
        <PublicationHeader publication={publication} />

        {/* Main Content Tabs */}
        <PublicationTabs publication={publication} />
      </div>
    </div>
  );
}
