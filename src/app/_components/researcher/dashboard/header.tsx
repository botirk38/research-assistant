import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Bell, Check, FileText, LogOut, MoreHorizontal, MoveUpRight, Settings, User } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Link from "next/link";
import Image from "next/image";

// Sample notifications data
const notificationsData = [
  {
    id: "n1",
    title: "New research opportunity",
    description: "A new grant application is available for your area of study",
    timestamp: "1h ago",
    read: false,
    type: "opportunity"
  },
  {
    id: "n2",
    title: "Publication accepted",
    description: "Your paper 'AI Applications in Modern Research' has been accepted",
    timestamp: "3h ago",
    read: false,
    type: "success"
  },
  {
    id: "n3",
    title: "Peer review requested",
    description: "Dr. Smith has requested your review on their latest publication",
    timestamp: "1d ago",
    read: true,
    type: "request"
  },
  {
    id: "n4",
    title: "Conference reminder",
    description: "The Annual Research Summit begins next week",
    timestamp: "2d ago",
    read: true,
    type: "reminder"
  }
];

// Notification menu component with popover
const NotificationMenu = () => {
  const unreadCount = notificationsData.filter(notification => !notification.read).length;

  // Function to get notification type styling
  const getNotificationTypeStyles = (type : string) => {
    switch(type) {
      case "opportunity":
        return "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400";
      case "success":
        return "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400";
      case "request":
        return "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400";
      case "reminder":
        return "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400";
      default:
        return "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400";
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative text-muted-foreground hover:text-foreground"
        >
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
              {unreadCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full max-w-sm p-0" align="end">
        <div className="relative overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800">
          <div className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold">Notifications</h3>
              <Button variant="ghost" size="sm" className="text-xs">
                Mark all as read
              </Button>
            </div>
          </div>

          <div className="max-h-[350px] overflow-y-auto">
            {notificationsData.map((notification) => (
              <div
                key={notification.id}
                className={`px-4 py-3 border-b border-zinc-100 dark:border-zinc-800 last:border-0 ${
                  !notification.read ? "bg-zinc-50 dark:bg-zinc-900/50" : ""
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`mt-1 flex-shrink-0 w-2 h-2 rounded-full ${!notification.read ? "bg-blue-500" : "bg-transparent"}`}></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-sm text-zinc-900 dark:text-zinc-100">
                        {notification.title}
                      </p>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400">
                        {notification.timestamp}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                      {notification.description}
                    </p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${getNotificationTypeStyles(notification.type)}`}>
                        {notification.type}
                      </span>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="icon" className="w-6 h-6">
                          <Check className="w-3 h-3" />
                        </Button>
                        <Button variant="ghost" size="icon" className="w-6 h-6">
                          <MoreHorizontal className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
            <Button variant="outline" size="sm" className="w-full text-xs">
              View all notifications
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

// User menu component with popover
const UserMenu = () => {
  // User data - in a real app, this would come from a user context/auth state
  const userData = {
    name: "Jane Doe",
    role: "Researcher",
    department: "Computer Science",
    university: "MIT",
    avatar: "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-02-albo9B0tWOSLXCVZh9rX9KFxXIVWMr.png",
  };

  const menuItems = [
    {
      label: "Profile",
      href: "/profile",
      icon: <User className="w-4 h-4" />,
    },
    {
      label: "Settings",
      href: "/researcher/settings",
      icon: <Settings className="w-4 h-4" />,
    },

    {
      label: "Terms & Policies",
      href: "#",
      icon: <FileText className="w-4 h-4" />,
      external: true,
    },
  ];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="p-0 flex items-center justify-center">
          <Avatar className="border-border h-8 w-8 border cursor-pointer">
            <AvatarImage src={userData.avatar} alt={userData.name} />
            <AvatarFallback className="bg-muted text-muted-foreground">
              {userData.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-full max-w-sm p-0" align="end">
        <div className="relative overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800">
          <div className="relative px-6 pt-6 pb-4">
            {/* Profile Header */}
            <div className="flex items-center gap-4 mb-4">
              <div className="relative shrink-0">
                <Image
                  src={userData.avatar}
                  alt={userData.name}
                  width={72}
                  height={72}
                  className="rounded-full ring-4 ring-white dark:ring-zinc-900 object-cover"
                />
                <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-zinc-900" />
              </div>


              <div className="flex-1">
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                  {userData.name}
                </h2>
                <div className="flex flex-col space-y-1 text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                  <span className="font-medium">{userData.role}</span>
                  <div className="flex items-center">
                    <span>{userData.department}</span>
                    <span className="mx-2 text-zinc-400 dark:text-zinc-600">•</span>
                    <span>{userData.university}</span>
                  </div>
                </div>
              </div>


            </div>

            <div className="h-px bg-zinc-200 dark:bg-zinc-800 my-4" />

            {/* Menu Items */}
            <div className="space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between p-2
                            hover:bg-zinc-50 dark:hover:bg-zinc-800/50
                            rounded-lg transition-colors duration-200"
                >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{item.label}</span>
                  </div>
                  <div className="flex items-center">
                    {item.external && <MoveUpRight className="w-4 h-4" />}
                  </div>
                </Link>
              ))}

              <button
                type="button"
                className="w-full flex items-center justify-between p-2
                          hover:bg-zinc-50 dark:hover:bg-zinc-800/50
                          rounded-lg transition-colors duration-200"
              >
                <Link className="flex items-center gap-2" href="/">
                  <LogOut className="w-4 h-4" />
                  <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Logout</span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

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
