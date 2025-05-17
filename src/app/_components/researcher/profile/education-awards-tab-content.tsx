import type { Education, Award } from "@/types/researcher";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const EducationAwardsTabContent = ({
  education,
  awards,
}: {
  education: Education[];
  awards: Award[];
}) => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Education</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <p className="text-muted-foreground">{edu.institution}</p>
                </div>
                <Badge variant="outline">{edu.year}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Awards & Honors</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {awards.map((award, index) => (
              <div key={index} className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold">{award.name}</h3>
                </div>
                <Badge variant="outline">{award.year}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EducationAwardsTabContent;
