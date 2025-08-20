(async () => {
  const query = `
    query {
      publication(host: "blogs.abhishekbr.dev") {
        title
        posts(first: 10) {
          edges {
            node {
              title
              slug
              brief
              publishedAt
              readTimeInMinutes
              coverImage {
                url
              }
            }
          }
        }
      }
    }
  `;

  const response = await fetch("https://gql.hashnode.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const result = await response.json();
  console.log(JSON.stringify(result, null, 2));
})();
