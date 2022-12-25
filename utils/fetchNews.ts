import { gql } from "graphql-request";

const fetchNews = async (
    category?: Category | string,
    keywords?: string,
    isDynamic?: boolean,
) => {
    // GraphQL query
    const query = gql`
    query MyQuery(
        $access_key: String!
        $categories: String!
        $keywords: String
    ) {
    myQuery(
        access_key: "e0d614a9cb105f26281962bccc44a448"
        categories: $categories
        countries: "us, gb"
        sort: "published_desc"
        keywords: $keywords
    ) {
        data {
          author
          category
          country
          description
          image
          language
          source
          published_at
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
`;
    // fetch with next.js 13 caching

    // Sort by images vs no images
}

export default fetchNews;

// stepzen import curl "http://api.mediastack.com/v1/news?access_key=e0d614a9cb105f26281962bccc44a448&countries=us%2Cgb&limit=100&offset=0&sort=published_desc"
