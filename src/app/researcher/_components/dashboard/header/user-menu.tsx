"use client";

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
      href: "/researcher/profile/jane-doe",
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
      <PopoverContent
        className="bg-popover text-popover-foreground border-border w-full max-w-sm rounded-lg border p-0"
        align="end"
      >
        <div className="relative overflow-hidden rounded-lg">
          <div className="bg-background relative px-6 pt-6 pb-4">
            {/* Profile Header */}
            <div className="mb-4 flex items-center gap-4">
              <div className="relative shrink-0">
                <Image
                  src={userData.avatar}
                  alt={userData.name}
                  width={72}
                  height={72}
                  className="ring-background rounded-full object-cover ring-4"
                />
                <div className="ring-background absolute right-0 bottom-0 h-4 w-4 rounded-full bg-emerald-500 ring-2" />
              </div>

              <div className="flex-1">
                <h2 className="text-foreground text-xl font-semibold">
                  {userData.name}
                </h2>
                <div className="text-muted-foreground mt-1 flex flex-col space-y-1 text-sm">
                  <span className="font-medium">{userData.role}</span>
                  <div className="flex items-center">
                    <span>{userData.department}</span>
                    <span className="text-muted-foreground mx-2">•</span>
                    <span>{userData.university}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-border my-4 h-px" />

            {/* Menu Items */}
            <div className="space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="hover:bg-muted flex items-center justify-between rounded-lg p-2 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <span className="text-foreground text-sm font-medium">
                      {item.label}
                    </span>
                  </div>
                  {item.external && (
                    <MoveUpRight className="text-muted-foreground h-4 w-4" />
                  )}
                </Link>
              ))}

              <Link
                href="/"
                className="hover:bg-muted flex items-center gap-2 rounded-lg p-2 transition-colors"
              >
                <LogOut className="h-4 w-4" />
                <span className="text-foreground text-sm font-medium">
                  Logout
                </span>
              </Link>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default UserMenu;
