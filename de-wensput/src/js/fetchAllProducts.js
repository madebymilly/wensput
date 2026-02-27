import client from "./apolloClient"; // jouw client
import { GET_PRODUCTS_PAGED } from "./queries/get-product-paged"; // pas pad aan

export async function fetchAllProducts(apolloClient, batchSize = 100) {
  let all = [];
  let after = null;
  let hasNextPage = true;

  while (hasNextPage) {
    const { data } = await apolloClient.query({
      query: GET_PRODUCTS_PAGED,
      variables: { first: batchSize, after },
      fetchPolicy: "network-only", // voorkomt cache-gedoe tijdens loopen
    });

    const nodes = data?.products?.nodes ?? [];
    const pageInfo = data?.products?.pageInfo;

    all.push(...nodes);

    hasNextPage = Boolean(pageInfo?.hasNextPage);
    after = pageInfo?.endCursor ?? null;
  }

  return all;
}