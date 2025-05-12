import { SidebarTrigger } from "@/components/ui/sidebar";
import NotificationMenu from "./header/notification-menu";
import UserMenu from "./header/user-menu";




const Header = () => (
  <header className="border-border bg-secondary flex h-16 items-center justify-between border-b px-4">
    <div className="flex items-center">
      <SidebarTrigger />
      <h1 className="font-display text-foreground text-xl font-semibold">
        Researcher Dashboard
      </h1>
    </div>
    <div className="flex items-center space-x-2">
      <NotificationMenu />
      <UserMenu />
    </div>
  </header>
);

export default Header;
