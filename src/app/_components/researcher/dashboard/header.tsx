import { Avatar } from "@/components/ui/avatar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

const Header = () => (
  <header className="border-border bg-secondary flex h-16 items-center justify-between border-b px-4">
    <div className="flex items-center">
      <SidebarTrigger />
      <h1 className="font-display text-foreground text-xl font-semibold">
        Researcher Dashboard
      </h1>
    </div>
    <div className="flex items-center space-x-2">
      <Button
        variant="ghost"
        size="icon"
        className="text-muted-foreground hover:text-foreground"
      >
        <Bell className="h-5 w-5" />
      </Button>
      <Avatar className="border-border h-8 w-8 border">
        <div className="bg-muted text-muted-foreground flex h-full w-full items-center justify-center text-sm font-medium">
          JD
        </div>
      </Avatar>
    </div>
  </header>
);

export default Header;
