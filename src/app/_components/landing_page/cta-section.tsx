import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CallToActionSection() {
  return (
    <section>
      <div className="py-12">
        <div className="mx-auto max-w-5xl px-6">
          <div className="space-y-6 text-center">
            <h2 className="text-foreground text-3xl font-semibold text-balance lg:text-4xl">
              Accelerate your research with ResearchAssistant
            </h2>
            <p className="text-muted-foreground mx-auto max-w-xl text-lg">
              Start managing your projects, tracking metrics, and discovering
              collaborators—all in one platform built for research teams.
            </p>
            <div className="flex justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/signup">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Request a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
