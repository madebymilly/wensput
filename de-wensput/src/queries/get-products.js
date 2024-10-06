import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query GetProducts {
    products(where: {stockStatus: IN_STOCK}) {
      nodes {
        id
        name
        ... on SimpleProduct {
          id
          name
          metaData {
            key
            value
          }
          allPaLeeftijd {
            nodes {
              name
            }
          }
          allPaThema {
            nodes {
              name
              slug
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
          allPaMinAantalSpelers {
            nodes {
              name
              slug
            }
          }
          allPaMaxAantalSpelers {
            nodes {
              name
              slug
            }
          }
          allPaSpeelduur {
            nodes {
              name
              slug
            }
          }
          allPaTaal {
            nodes {
              name
              slug
            }
          }
        }
      }
    }
  }
`;
