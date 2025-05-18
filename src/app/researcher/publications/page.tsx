import PublicationsBrowser from "@/app/_components/publications/publications-browser";

export default function PublicationsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Research Publications</h1>
      <p className="text-muted-foreground mb-8">
        Browse and discover academic publications across your research and
        exploration areas.
      </p>
      <PublicationsBrowser />
    </main>
  );
}
