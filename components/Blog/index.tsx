"use client"

import Image from "next/image"
import { Calendar, Clock, ExternalLink, AlertCircle, Loader2, ArrowUpRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BlogPost } from "@/hooks/useBlogs"

export default function BlogList({ posts, error }: { posts: BlogPost[], error: string | null }) {

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  if (error) {
    return (
      <Card className="border-destructive/50 bg-destructive/5 mt-70 ml-10">
        <CardContent className="flex items-center justify-center py-12">
          <div className="text-center space-y-4">
            <AlertCircle className="w-10 h-10 text-destructive mx-auto" />
            <h3 className="text-lg font-semibold text-destructive">Failed to load blog posts</h3>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              Something went wrong while fetching blog content. Please try again in a moment.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              <Loader2 className="w-4 h-4 animate-spin" />
              Reload
            </button>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!posts || posts.length === 0) {
    return (
      <Card className="mt-76 ml-10">
        <CardContent className="flex items-center justify-center py-12">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
              <ExternalLink className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold">No blog posts yet</h3>
            <p className="text-muted-foreground">When I publish something new, you’ll see it here!</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6 px-2 md:px-10 mt-40">
        <span className="text-xl md:text-2xl font-medium mb-10 block text-center">
            🚧 Work logs, brain dumps, and occasional genius. Welcome aboard.
        </span>

      {posts.map((post, index) => (
        <Card
          key={post.slug}
          className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80"
        >
          <CardContent className="p-0">
            <a
              href={`https://blogs.abhi.wtf/${post.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-40 relative"
            >
              <div className="relative pl-4 w-0 lg:w-64 h-full overflow-hidden flex-shrink-0">
                {post.coverImage?.url ? (
                  <Image
                    src={post.coverImage.url}
                    alt={post.title}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110 hidden lg:block"
                    sizes="256px"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = "none"
                      const parent = target.parentElement
                      if (parent) {
                        parent.innerHTML = `
                          <div class="w-full h-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center">
                            <div class="text-center">
                              <div class="text-3xl mb-2">📝</div>
                              <div class="text-sm text-muted-foreground font-medium">Blog Post</div>
                            </div>
                          </div>
                        `
                      }
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl mb-2">📝</div>
                      <div className="text-sm text-muted-foreground font-medium">Blog Post</div>
                    </div>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/20 group-hover:to-background/40 transition-all duration-300" />

                {index === 0 && (
                  <Badge className="absolute top-3 left-6 bg-primary text-primary-foreground text-xs px-2 py-1 shadow-lg">
                    Latest
                  </Badge>
                )}
              </div>

              <div className="flex-1 px-6 py-1 flex flex-col justify-between min-w-0 relative">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-1">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTimeInMinutes || 2} min read</span>
                  </div>
                </div>

                <h3 className="text-md md:text-xl font-bold leading-tight group-hover:text-primary transition-colors mb-3 line-clamp-2">
                  {post.title}
                </h3>

                {post.brief && (
                  <p className="text-muted-foreground leading-relaxed text-sm mb-4 line-clamp-2 flex-1">
                    {post.brief}
                  </p>
                )}

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary group-hover:text-primary/80 transition-colors">
                    Read full article
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
