"use client"

import BlogPage from "@/components/Blog"
import { useNavbarWidth } from "@/components/NavBar"
import { useBlogs } from "@/hooks/useBlogs"

export default function Page() {
  const { navbarWidth } = useNavbarWidth()
  const { posts, loading, error } = useBlogs()

  if (loading) {
    return (
      <div className="space-y-6 mt-40 pl-10" aria-busy="true" aria-live="polite"
        style={{
          marginLeft: navbarWidth > 0 ? `${navbarWidth}px` : "0px",
          marginRight: navbarWidth > 0 ? `${9 * navbarWidth / 10}px` : "0px",
        }}
      >
        {[...Array(4)].map((_, i) => (
            <div key={i} className="overflow-hidden animate-pulse border rounded-xl bg-background shadow-sm">
              <div className="p-0">
                <div className="flex">
                  <div className="hidden md:block w-64 h-40 bg-muted" />
                  <div className="flex-1 p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="h-4 w-24 bg-muted rounded" />
                      <div className="h-4 w-20 bg-muted rounded" />
                    </div>
                    <div className="h-6 w-4/5 bg-muted rounded" />
                    <div className="space-y-2">
                      <div className="h-4 w-full bg-muted rounded" />
                      <div className="h-4 w-3/4 bg-muted rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
        ))}
      </div>
    )
  }

  return (
    <div className="min-h-screen overflow-hidden">
      <main
        className="pb-16 md:pb-0 transition-all duration-300"
        style={{
          marginLeft: navbarWidth > 0 ? `${navbarWidth}px` : "0px",
          marginRight: navbarWidth > 0 ? `${9 * navbarWidth / 10}px` : "0px",
        }}
      >
        <BlogPage posts={posts} error={error} />
      </main>
    </div>
  )
}