"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PlusCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

// Form schema for validation
const formSchema = z.object({
  newArea: z.string().min(2, {
    message: "Area must be at least 2 characters.",
  }),
});

interface ResearchAreaSectionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  areas: string[];
  removeArea: (index: number) => void;
  onAddArea: (area: string) => void;
  formId: string;
  accentColor: string;
}

export default function ResearchAreaSection({
  icon,
  title,
  description,
  areas,
  removeArea,
  onAddArea,
  formId,
  accentColor,
}: ResearchAreaSectionProps) {
  // Initialize form with react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      newArea: "",
    },
  });

  // Handle form submission
  function onSubmit(values: z.infer<typeof formSchema>) {
    onAddArea(values.newArea);
    form.reset();
  }

  return (
    <section className="bg-card rounded-lg border shadow-sm">
      <div className="p-6">
        <div className="mb-2 flex items-center gap-3">
          {icon}
          <h2 className="text-card-foreground text-xl font-semibold">
            {title}
          </h2>
        </div>
        <p className="text-muted-foreground mb-6">{description}</p>

        <div className="mb-6 flex flex-wrap gap-2">
          {areas.map((area, i) => (
            <div key={i} className="group">
              <div className="bg-secondary text-secondary-foreground flex items-center gap-2 rounded-full px-4 py-2 text-sm">
                {area}
                <button
                  onClick={() => removeArea(i)}
                  className="bg-secondary-foreground/10 hover:bg-secondary-foreground/20 rounded-full p-1"
                >
                  <X className="h-3 w-3" />
                  <span className="sr-only">Remove {area}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex gap-2"
            id={formId}
          >
            <FormField
              control={form.control}
              name="newArea"
              render={({ field }) => (
                <FormItem className="max-w-xs flex-1 space-y-0">
                  <FormControl>
                    <Input
                      placeholder="Add new area..."
                      className="bg-background border-input focus-visible:ring-ring focus-visible:ring-1"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-destructive mt-1 text-xs" />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className={`bg-${accentColor} text-white hover:bg-${accentColor}/90`}
            >
              <PlusCircle className="mr-2 h-4 w-4" />
              Add
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
