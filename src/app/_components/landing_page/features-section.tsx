import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Features() {
  return (
    <section>
      <div className="bg-muted/50 py-24">
        <div className="mx-auto w-full max-w-5xl px-6">
          <div>
            <h2 className="text-foreground text-4xl font-semibold">
              Streamlined Research Management
            </h2>
            <p className="text-muted-foreground mt-4 mb-12 text-lg text-balance">
              Simplify your research workflows—track progress, manage datasets,
              analyze results, and keep your collaborators aligned. Stay focused
              with intelligent, adaptive tools.
            </p>
            <div className="bg-foreground/5 rounded-3xl p-6">
              <Image
                className="w-full rounded-3xl object-cover"
                src="/research-admin.png"
                alt="Research Admin page"
                width="800"
                height="200"
              />
            </div>
          </div>

          <div className="border-foreground/10 relative mt-16 grid gap-12 border-b pb-12 [--radius:1rem] md:grid-cols-2">
            <div>
              <h3 className="text-foreground text-xl font-semibold">
                Funding & Collaboration
              </h3>
              <p className="text-muted-foreground my-4 text-lg">
                Discover relevant funding opportunities and connect with other
                researchers working in similar domains.
              </p>
              <Card className="aspect-video overflow-hidden px-6">
                <Card className="h-full translate-y-6">
                  <CardContent className="w-full">
                    <Image
                      src="/researcher-profile.png"
                      width="400"
                      height="400"
                      alt="Researcher Profile"
                    />
                  </CardContent>
                </Card>
              </Card>
            </div>
            <div>
              <h3 className="text-foreground text-xl font-semibold">
                Metric Tracking & Extensions
              </h3>
              <p className="text-muted-foreground my-4 text-lg">
                Automatically track key research metrics and identify
                opportunities to extend or build on existing work.
              </p>
              <Card className="aspect-video overflow-hidden">
                <Card className="h-full translate-6">
                  <CardContent className="w-full">
                    <Image
                      src="/funding-details.png"
                      width="400"
                      height="400"
                      className="w-full"
                      alt="Funding Opportunity Details"
                    />
                  </CardContent>
                </Card>
              </Card>
            </div>
          </div>

          <blockquote className="before:bg-primary relative mt-12 max-w-xl pl-6 before:absolute before:inset-y-0 before:left-0 before:w-1 before:rounded-full">
            <p className="text-foreground text-lg">
              The platform made it easy to keep our research organized and
              discover collaborators we wouldn&apos;t have otherwise found. It
              feels like a research-native workspace.
            </p>
            <footer className="mt-4 flex items-center gap-2">
              <cite>Méschac Irung</cite>
              <span
                aria-hidden
                className="bg-foreground/15 size-1 rounded-full"
              ></span>
              <span className="text-muted-foreground">Research Fellow</span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
