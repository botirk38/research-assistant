import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";
import { User, Settings, FileText, Link, MoveUpRight, LogOut } from "lucide-react";
import Image from "next/image";

const UserMenu = () => {
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

export default UserMenu;
