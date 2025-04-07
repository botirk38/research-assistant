"use client";

import { motion } from "framer-motion";
import { Zap, BarChart, Users, Shield, Layers, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Smart Automation",
    description:
      "Automate repetitive tasks and workflows to save time and reduce errors.",
    icon: <Zap className="size-5" />,
  },
  {
    title: "Advanced Analytics",
    description:
      "Gain valuable insights with real-time data visualization and reporting.",
    icon: <BarChart className="size-5" />,
  },
  {
    title: "Team Collaboration",
    description:
      "Work together seamlessly with integrated communication tools.",
    icon: <Users className="size-5" />,
  },
  {
    title: "Enterprise Security",
    description:
      "Keep your data safe with end-to-end encryption and compliance features.",
    icon: <Shield className="size-5" />,
  },
  {
    title: "Seamless Integration",
    description:
      "Connect with your favorite tools through our extensive API ecosystem.",
    icon: <Layers className="size-5" />,
  },
  {
    title: "24/7 Support",
    description:
      "Get help whenever you need it with our dedicated support team.",
    icon: <Star className="size-5" />,
  },
];

export function FeaturesSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="features" className="w-full py-20 md:py-32">
      <div className="w-full px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col items-center justify-center space-y-4 text-center"
        >
          <Badge
            className="rounded-full px-4 py-1.5 text-sm font-medium"
            variant="secondary"
          >
            Features
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Everything You Need to Succeed
          </h2>
          <p className="text-muted-foreground max-w-[800px] md:text-lg">
            Our comprehensive platform provides all the tools you need to
            streamline your workflow, boost productivity, and achieve your
            goals.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, i) => (
            <motion.div key={i} variants={item}>
              <Card className="border-border/40 from-background to-muted/10 h-full overflow-hidden bg-gradient-to-b backdrop-blur transition-all hover:shadow-md">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="bg-primary/10 dark:bg-primary/20 text-primary mb-4 flex size-10 items-center justify-center rounded-full">
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
