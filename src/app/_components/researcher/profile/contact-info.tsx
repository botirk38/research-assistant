import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ResearcherData } from "@/types/researcher";
import { Mail, Phone, Globe, MapPin, ExternalLink } from "lucide-react";

const ContactInfo = ({ researcher }: { researcher: ResearcherData }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start">
          <Mail className="text-muted-foreground mt-0.5 mr-3 h-5 w-5" />
          <div>
            <p className="text-muted-foreground text-sm">Email</p>
            <a href={`mailto:${researcher.email}`} className="hover:underline">
              {researcher.email}
            </a>
          </div>
        </div>

        <div className="flex items-start">
          <Phone className="text-muted-foreground mt-0.5 mr-3 h-5 w-5" />
          <div>
            <p className="text-muted-foreground text-sm">Phone</p>
            <a href={`tel:${researcher.phone}`} className="hover:underline">
              {researcher.phone}
            </a>
          </div>
        </div>

        <div className="flex items-start">
          <Globe className="text-muted-foreground mt-0.5 mr-3 h-5 w-5" />
          <div>
            <p className="text-muted-foreground text-sm">Website</p>
            <a
              href={researcher.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:underline"
            >
              {researcher.website.replace("https://", "")}
              <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>
        </div>

        <div className="flex items-start">
          <MapPin className="text-muted-foreground mt-0.5 mr-3 h-5 w-5" />
          <div>
            <p className="text-muted-foreground text-sm">Location</p>
            <p>{researcher.location}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactInfo;
