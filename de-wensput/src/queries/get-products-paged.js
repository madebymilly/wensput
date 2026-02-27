import { gql } from "@apollo/client";

export const GET_PRODUCTS_PAGED = gql`
  query GetProductsPaged($first: Int!, $after: String) {
    products(
      first: $first
      after: $after
      where: {
        stockStatus: IN_STOCK
        featured: true
        tagNotIn: "Uitbreidingen"
      }
    ) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        name
        slug
        ... on SimpleProduct {
          id
          name
          allPaBenodigdeSpeelruimte { nodes { name slug } }
          allPaThema { nodes { name slug } }
          productCategories { nodes { name slug } }
          productTags { nodes { name slug } }
          allPaMinAantalSpelers { nodes { name slug } }
          allPaSpeelduur { nodes { name slug } }
          allPaTaal { nodes { name slug } }
        }
      }
    }
  }
`;