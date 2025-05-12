import { notificationsData } from "@/lib/data/notifications";
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";
import { Bell, Check, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const NotificationMenu = () => {
  // Create a state for notifications based on the initial data
  const [notifications, setNotifications] = useState(notificationsData);

  // Calculate unread count based on the current state
  const unreadCount = notifications.filter(notification => !notification.read).length;

  // Function to mark a single notification as read
  const markAsRead = (id: string) => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  // Function to mark all notifications as read
  const markAllAsRead = () => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification => ({ ...notification, read: true }))
    );
  };

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

          <div className="max-h-[350px] overflow-y-auto">
            {notifications.length > 0 ? (
              notifications.map((notification) => (
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
                          <Button
                            variant="ghost"
                            size="icon"
                            className="w-6 h-6"
                            onClick={() => markAsRead(notification.id)}
                            disabled={notification.read}
                            title="Mark as read"
                          >
                            <Check className="w-3 h-3" />
                          </Button>
                          <Button variant="ghost" size="icon" className="w-6 h-6" title="More options">
                            <MoreHorizontal className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="px-4 py-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
                No notifications to display
              </div>
            )}
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

export default NotificationMenu;
