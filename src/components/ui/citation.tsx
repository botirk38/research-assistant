"use client";

import type { LightbulbIcon as LucideProps } from "lucide-react";

export const Citation = (props: typeof LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M6 3a7.5 7.5 0 0 0 0 15h0a7.5 7.5 0 0 0 0-15Z" />
    <path d="M15.5 3a7.5 7.5 0 0 0 0 15h0a7.5 7.5 0 0 0 0-15Z" />
    <path d="M8 14h.01" />
    <path d="M17.5 14h.01" />
    <path d="M9 11v-.5a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v.5" />
    <path d="M18.5 11v-.5a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v.5" />
  </svg>
);
