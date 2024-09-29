import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      edges {
        node {
          name
        }
      }
    }
  }
`;
