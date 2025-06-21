"use client";

import { notificationsData } from "@/lib/data/notifications";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { Bell, Check, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const NotificationMenu = () => {
  const [notifications, setNotifications] = useState(notificationsData);
  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n)),
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const getNotificationTypeStyles = (type: string) => {
    switch (type) {
      case "opportunity":
        return "bg-primary text-primary-foreground";
      case "success":
        return "bg-green-200 text-foreground dark:bg-green-800/30 dark:text-green-300";
      case "request":
        return "bg-secondary text-secondary-foreground";
      case "reminder":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-foreground relative"
        >
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="bg-destructive absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-medium text-white">
              {unreadCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>

      <PopoverContent
        align="end"
        className="bg-popover text-popover-foreground border-border w-full max-w-sm rounded-lg border p-0"
      >
        <div className="border-border bg-background border-b px-4 py-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold">Notifications</h3>
            <Button
              variant="ghost"
              size="sm"
              className="text-xs"
              onClick={markAllAsRead}
              disabled={unreadCount === 0}
            >
              Mark all as read
            </Button>
          </div>
        </div>

        <div className="bg-background max-h-[350px] overflow-y-auto">
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className={`border-border border-b px-4 py-3 last:border-0 ${
                  !notification.read ? "bg-muted/30" : ""
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`mt-1 h-2 w-2 flex-shrink-0 rounded-full ${
                      !notification.read ? "bg-primary" : "bg-transparent"
                    }`}
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-foreground text-sm font-medium">
                        {notification.title}
                      </p>
                      <span className="text-muted-foreground text-xs">
                        {notification.timestamp}
                      </span>
                    </div>
                    <p className="text-muted-foreground mt-1 text-xs">
                      {notification.description}
                    </p>
                    <div className="mt-2 flex items-center justify-between">
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs ${getNotificationTypeStyles(
                          notification.type,
                        )}`}
                      >
                        {notification.type}
                      </span>
                      <div className="flex gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => markAsRead(notification.id)}
                          disabled={notification.read}
                          title="Mark as read"
                        >
                          <Check className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          title="More options"
                        >
                          <MoreHorizontal className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-muted-foreground px-4 py-6 text-center text-sm">
              No notifications to display
            </div>
          )}
        </div>

        <div className="border-border bg-background border-t p-3">
          <Button variant="outline" size="sm" className="w-full text-xs">
            View all notifications
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default NotificationMenu;
