import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { User, Settings, FileText, MoveUpRight, LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const UserMenu = () => {
  const userData = {
    name: "Jane Doe",
    role: "Researcher",
    department: "Computer Science",
    university: "MIT",
    avatar:
      "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-02-albo9B0tWOSLXCVZh9rX9KFxXIVWMr.png",
  };

  const menuItems = [
    {
      label: "Profile",
      href: "/profile",
      icon: <User className="h-4 w-4" />,
    },
    {
      label: "Settings",
      href: "/researcher/settings",
      icon: <Settings className="h-4 w-4" />,
    },

    {
      label: "Terms & Policies",
      href: "#",
      icon: <FileText className="h-4 w-4" />,
      external: true,
    },
  ];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="flex items-center justify-center p-0">
          <Avatar className="border-border h-8 w-8 cursor-pointer border">
            <AvatarImage src={userData.avatar} alt={userData.name} />
            <AvatarFallback className="bg-muted text-muted-foreground">
              {userData.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-full max-w-sm p-0" align="end">
        <div className="relative overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800">
          <div className="relative px-6 pt-6 pb-4">
            {/* Profile Header */}
            <div className="mb-4 flex items-center gap-4">
              <div className="relative shrink-0">
                <Image
                  src={userData.avatar}
                  alt={userData.name}
                  width={72}
                  height={72}
                  className="rounded-full object-cover ring-4 ring-white dark:ring-zinc-900"
                />
                <div className="absolute right-0 bottom-0 h-4 w-4 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-zinc-900" />
              </div>

              <div className="flex-1">
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                  {userData.name}
                </h2>
                <div className="mt-1 flex flex-col space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                  <span className="font-medium">{userData.role}</span>
                  <div className="flex items-center">
                    <span>{userData.department}</span>
                    <span className="mx-2 text-zinc-400 dark:text-zinc-600">
                      •
                    </span>
                    <span>{userData.university}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="my-4 h-px bg-zinc-200 dark:bg-zinc-800" />

            {/* Menu Items */}
            <div className="space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between rounded-lg p-2 transition-colors duration-200 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      {item.label}
                    </span>
                  </div>
                  <div className="flex items-center">
                    {item.external && <MoveUpRight className="h-4 w-4" />}
                  </div>
                </Link>
              ))}

              <button
                type="button"
                className="flex w-full items-center justify-between rounded-lg p-2 transition-colors duration-200 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
              >
                <Link className="flex items-center gap-2" href="/">
                  <LogOut className="h-4 w-4" />
                  <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    Logout
                  </span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default UserMenu;
