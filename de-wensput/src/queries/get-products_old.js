import { gql } from '@apollo/client';

// This query works with PA_AUDIO taxonomy:
export const GET_PRODUCTS = gql`
  query GetProducts {
    products(where: {stockStatus: IN_STOCK, taxonomyFilter: {filters: {taxonomy: PA_AUDIO, terms: "true"}}}) {
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
              slug
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
              slug
            }
          }
          productTags {
            nodes {
              name
              slug
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
          slug
        }
      }
    }
  }
`;
