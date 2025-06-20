import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Users, BookOpen, TrendingUp, Award, Search } from "lucide-react";

export default function Loading() {
  return (
    <div className="container mx-auto space-y-6 p-6">
      {/* Header */}
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Team Research Papers
            </h1>
            <p className="text-muted-foreground">
              Select papers from team members to share with Innovation Manager
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="text-sm">
              <Users className="mr-1 h-4 w-4" />
              Research Lead
            </Badge>
          </div>
        </div>

        {/* Stats Cards - Loading State */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-sm font-medium">Team Members</p>
                  <Skeleton className="h-8 w-8" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-green-600" />
                <div>
                  <p className="text-sm font-medium">Total Papers</p>
                  <Skeleton className="h-8 w-8" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-purple-600" />
                <div>
                  <p className="text-sm font-medium">Total Citations</p>
                  <Skeleton className="h-8 w-12" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-orange-600" />
                <div>
                  <p className="text-sm font-medium">Selected Papers</p>
                  <Skeleton className="h-8 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Search Bar - Loading State */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <div className="flex-1">
              <div className="relative">
                <Search className="text-muted-foreground absolute top-3 left-3 h-4 w-4" />
                <Skeleton className="h-10 w-full" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Team Members Loading State */}
      <div className="space-y-6">
        {/* Loading Team Member 1 */}
        <Card className="overflow-hidden">
          <CardHeader className="border-b pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div>
                  <Skeleton className="mb-2 h-5 w-32" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Skeleton className="h-6 w-16" />
                <Skeleton className="h-8 w-20" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex gap-6 overflow-x-auto pb-4">
              {/* Loading Paper Cards */}
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-80 flex-shrink-0 rounded-lg border p-4"
                >
                  <div className="space-y-3">
                    {/* Paper Preview Image Loading */}
                    <div className="relative">
                      <Skeleton className="h-32 w-full rounded-md" />
                      <div className="absolute top-2 left-2">
                        <Skeleton className="h-4 w-4 rounded" />
                      </div>
                      <div className="absolute top-2 right-2">
                        <Skeleton className="h-5 w-16 rounded-full" />
                      </div>
                    </div>

                    {/* Paper Info Loading */}
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-3/4" />
                      <Skeleton className="h-3 w-1/2" />

                      <div className="flex items-center justify-between">
                        <Skeleton className="h-3 w-20" />
                        <Skeleton className="h-4 w-12 rounded-full" />
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center space-x-3">
                          <Skeleton className="h-3 w-8" />
                          <Skeleton className="h-3 w-8" />
                        </div>
                        <Skeleton className="h-6 w-6 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Loading Team Member 2 */}
        <Card className="overflow-hidden">
          <CardHeader className="border-b pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div>
                  <Skeleton className="mb-2 h-5 w-28" />
                  <Skeleton className="h-4 w-20" />
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Skeleton className="h-6 w-16" />
                <Skeleton className="h-8 w-20" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex gap-6 overflow-x-auto pb-4">
              {/* Loading Paper Cards */}
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="w-80 flex-shrink-0 rounded-lg border p-4"
                >
                  <div className="space-y-3">
                    {/* Paper Preview Image Loading */}
                    <div className="relative">
                      <Skeleton className="h-32 w-full rounded-md" />
                      <div className="absolute top-2 left-2">
                        <Skeleton className="h-4 w-4 rounded" />
                      </div>
                      <div className="absolute top-2 right-2">
                        <Skeleton className="h-5 w-16 rounded-full" />
                      </div>
                    </div>

                    {/* Paper Info Loading */}
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-2/3" />
                      <Skeleton className="h-3 w-1/2" />

                      <div className="flex items-center justify-between">
                        <Skeleton className="h-3 w-20" />
                        <Skeleton className="h-4 w-12 rounded-full" />
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center space-x-3">
                          <Skeleton className="h-3 w-8" />
                          <Skeleton className="h-3 w-8" />
                        </div>
                        <Skeleton className="h-6 w-6 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Loading Team Member 3 */}
        <Card className="overflow-hidden">
          <CardHeader className="border-b pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div>
                  <Skeleton className="mb-2 h-5 w-36" />
                  <Skeleton className="h-4 w-28" />
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Skeleton className="h-6 w-16" />
                <Skeleton className="h-8 w-20" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex gap-6 overflow-x-auto pb-4">
              {/* Loading Paper Cards */}
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-80 flex-shrink-0 rounded-lg border p-4"
                >
                  <div className="space-y-3">
                    {/* Paper Preview Image Loading */}
                    <div className="relative">
                      <Skeleton className="h-32 w-full rounded-md" />
                      <div className="absolute top-2 left-2">
                        <Skeleton className="h-4 w-4 rounded" />
                      </div>
                      <div className="absolute top-2 right-2">
                        <Skeleton className="h-5 w-16 rounded-full" />
                      </div>
                    </div>

                    {/* Paper Info Loading */}
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-4/5" />
                      <Skeleton className="h-3 w-1/2" />

                      <div className="flex items-center justify-between">
                        <Skeleton className="h-3 w-20" />
                        <Skeleton className="h-4 w-12 rounded-full" />
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center space-x-3">
                          <Skeleton className="h-3 w-8" />
                          <Skeleton className="h-3 w-8" />
                        </div>
                        <Skeleton className="h-6 w-6 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Loading Animation Indicator */}
      <div className="flex items-center justify-center py-8">
        <div className="text-muted-foreground flex items-center space-x-2">
          <div className="h-4 w-4 animate-spin rounded-full border-b-2 border-blue-600"></div>
          <span className="text-sm">Loading research papers...</span>
        </div>
      </div>
    </div>
  );
}
