import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query GetProducts {
    products(where: {stockStatus: IN_STOCK}) {
      nodes {
        id
        name
        type
        ... on SimpleProduct {
          id
          name
          allPaLeeftijd {
            nodes {
              name
            }
          }
          allPaThema {
            nodes {
              name
            }
          }
          productCategories {
            nodes {
              name
            }
          }
          productTags {
            nodes {
              name
            }
          }
        }
      }
    }
  }
`;
