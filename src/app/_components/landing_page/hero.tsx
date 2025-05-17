import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroHeader } from "./header";
import { ChevronRight, CirclePlay } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden">
        <section className="to-muted from-background bg-linear-to-b">
          <div className="relative py-36">
            <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
              <div className="md:w-1/2">
                <div>
                  <h1 className="max-w-md text-5xl font-medium text-balance md:text-6xl">
                    Supercharge academic research workflows
                  </h1>
                  <p className="text-muted-foreground my-8 max-w-2xl text-xl text-balance">
                    A unified platform for researchers and universities to
                    manage projects, track metrics, find funding, collaborate,
                    and build on existing work—smarter and faster.
                  </p>

                  <div className="flex items-center gap-3">
                    <Button asChild size="lg" className="pr-4.5">
                      <Link href="/signup">
                        <span className="text-nowrap">Get Started</span>
                        <ChevronRight className="opacity-50" />
                      </Link>
                    </Button>
                    <Button
                      key={2}
                      asChild
                      size="lg"
                      variant="outline"
                      className="pl-5"
                    >
                      <Link href="/signup">
                        <CirclePlay className="fill-primary/25 stroke-primary" />
                        <span className="text-nowrap">Watch demo</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-24 translate-x-12 perspective-near md:absolute md:top-40 md:-right-6 md:bottom-16 md:left-1/2 md:mt-0 md:translate-x-0">
              <div className="before:border-foreground/5 before:bg-foreground/5 relative h-full before:absolute before:-inset-x-4 before:top-0 before:bottom-7 before:skew-x-6 before:rounded-[calc(var(--radius)+1rem)] before:border">
                <div className="bg-background shadow-foreground/10 ring-foreground/5 relative h-full -translate-y-12 skew-x-6 overflow-hidden rounded-(--radius) border border-transparent shadow-md ring-1">
                  <Image
                    src="/research-assistant.png"
                    alt="app screen"
                    width="2880"
                    height="1842"
                    className="size-full object-cover object-top-left"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
