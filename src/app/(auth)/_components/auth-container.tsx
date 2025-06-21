import { cn } from "@/lib/utils";

interface AuthContainerProps extends React.ComponentProps<"div"> {
  children: React.ReactNode;
}

export function AuthContainer({
  className,
  children,
  ...props
}: AuthContainerProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      {children}
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
