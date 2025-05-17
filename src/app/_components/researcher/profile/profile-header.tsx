import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { ResearcherData } from "@/types/researcher";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Share2,
  BookOpen,
  MapPin,
  Mail,
  Globe,
  Download,
} from "lucide-react";

const ProfileHeader = ({ researcher }: { researcher: ResearcherData }) => {
  return (
    <>
      <div className="relative h-48 w-full md:h-64 lg:h-80">
        <div className="to-background/80 absolute inset-0 bg-gradient-to-b from-transparent"></div>
        <div className="absolute top-4 left-4">
          <Link href="/researcher">
            <Button
              variant="outline"
              size="sm"
              className="bg-background/80 backdrop-blur-sm"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          </Link>
        </div>
        <div className="absolute top-4 right-4">
          <Button
            variant="outline"
            size="sm"
            className="bg-background/80 backdrop-blur-sm"
          >
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
        </div>
      </div>

      <div className="relative z-10 -mt-16 mb-8 flex flex-col gap-6 md:-mt-20 md:flex-row">
        <div className="flex-shrink-0">
          <Avatar className="border-background h-32 w-32 rounded-full border-4 md:h-40 md:w-40">
            <AvatarImage
              src={researcher.avatar || "/placeholder.svg"}
              alt={researcher.name}
            />
            <AvatarFallback>
              {researcher.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-1 pt-4 md:pt-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="text-3xl font-bold">{researcher.name}</h1>
              <div className="text-muted-foreground mt-1 flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
                <div className="flex items-center">
                  <BookOpen className="mr-1 h-4 w-4" />
                  <span>{researcher.title}</span>
                </div>
                <div className="hidden sm:block">•</div>
                <div className="flex items-center">
                  <MapPin className="mr-1 h-4 w-4" />
                  <span>{researcher.institution}</span>
                </div>
                <div className="hidden sm:block">•</div>
                <div className="flex items-center">
                  <Globe className="mr-1 h-4 w-4" />
                  <span>{researcher.field}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button>
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </Button>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileHeader;
