import { useEffect, useState } from "react";

type BlogPost = {
  readTimeInMinutes: number;
  title: string;
  brief: string;
  slug: string;
  publishedAt: string;
  coverImage: {
    url: string;
  };
};

export function useBlogs() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const query = `
          query {
            publication(host: "blogs.abhi.wtf") {
              posts(first: 10) {
                edges {
                  node {
                    title
                    brief
                    slug
                    coverImage {
                      url
                    }
                    publishedAt
                    readTimeInMinutes
                  }
                }
              }
            }
          }
        `;

        const res = await fetch("https://gql.hashnode.com", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query }),
        });

        const json = await res.json();

        const postsData =
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          json.data?.publication?.posts?.edges?.map((edge: any) => edge.node) || [];

        setPosts(postsData);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return { posts, loading, error };
}
