import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaGoogle, FaMicrosoft } from "react-icons/fa";

interface AuthCardProps extends React.ComponentProps<typeof Card> {
  title: string;
  description: string;
  showSocialLogin?: boolean;
  showDivider?: boolean;
  children: React.ReactNode;
}

export function AuthCard({
  title,
  description,
  showSocialLogin = true,
  showDivider = true,
  children,
  className,
  ...props
}: AuthCardProps) {
  return (
    <Card className={className} {...props}>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid gap-6">
            {showSocialLogin && (
              <div className="flex flex-col gap-4">
                <Button variant="outline" className="w-full">
                  <FaMicrosoft className="mr-2" />
                  Continue with Microsoft
                </Button>
                <Button variant="outline" className="w-full">
                  <FaGoogle className="mr-2" />
                  Continue with Google
                </Button>
              </div>
            )}
            {showSocialLogin && showDivider && (
              <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                <span className="bg-card text-muted-foreground relative z-10 px-2">
                  Or continue with
                </span>
              </div>
            )}
            {children}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
