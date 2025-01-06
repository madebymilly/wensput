/*
* GraphQL query needs WPGraphQL for WooCommerce plugin to be installed and activated
* Products items marked as features have an audio file.
*/

import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
query GetProducts {
  products(
    where: {
      stockStatus: IN_STOCK,
      featured: true,
      tagNotIn: "Uitbreidingen"
    },
    first: 99999
  ) {
    nodes {
      id
      name
      slug
      ... on SimpleProduct {
        id
        name
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
