(async ()=>{
    const query = `
  query {
    publication(host: "blogs.pulkitxm.com") {
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

const response = await fetch("https://gql.hashnode.com", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query }),
});

const result = await response.json();
console.log(JSON.stringify(result, null, 2));

})()