import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Twitter, AtSign, ExternalLink } from "lucide-react";
import type { SocialLink } from "@/types/researcher";

const SocialLinks = ({ links }: { links: SocialLink[] }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Social Links</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {links.map((link, index) => (
          <div key={index} className="flex items-start">
            {link.platform === "Twitter" ? (
              <Twitter className="text-muted-foreground mt-0.5 mr-3 h-5 w-5" />
            ) : (
              <AtSign className="text-muted-foreground mt-0.5 mr-3 h-5 w-5" />
            )}
            <div>
              <p className="text-muted-foreground text-sm">{link.platform}</p>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:underline"
              >
                {link.username}
                <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default SocialLinks;
