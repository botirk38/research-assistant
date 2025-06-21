interface ContactInfo {
  name: string;
  email: string;
  phone: string;
}

interface ContactCardProps {
  contactInfo: ContactInfo;
}

export function ContactCard({ contactInfo }: ContactCardProps) {
  return (
    <div className="bg-card rounded-lg border p-4 shadow-sm">
      <div className="space-y-4">
        <h3 className="font-semibold">Contact Information</h3>
        <div className="space-y-2 text-sm">
          <p className="font-medium">{contactInfo.name}</p>
          <p className="text-muted-foreground">{contactInfo.email}</p>
          <p className="text-muted-foreground">{contactInfo.phone}</p>
        </div>
      </div>
    </div>
  );
}
