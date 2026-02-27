import { useEffect, useState } from "react";
import { useApolloClient } from "@apollo/client";
import { GET_PRODUCTS_PAGED } from "../queries/get-products-paged";

function useGetProducts() {
  const client = useApolloClient();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchAllProducts() {
      try {
        let allProducts = [];
        let after = null;
        let hasNextPage = true;

        while (hasNextPage) {
          const { data } = await client.query({
            query: GET_PRODUCTS_PAGED,
            variables: {
              first: 100,   // batch size
              after: after,
            },
            fetchPolicy: "network-only",
          });

          allProducts = [...allProducts, ...data.products.nodes];

          hasNextPage = data.products.pageInfo.hasNextPage;
          after = data.products.pageInfo.endCursor;
        }

        if (!cancelled) {
          setProducts(allProducts);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchAllProducts();

    return () => {
      cancelled = true;
    };
  }, [client]);

  return { loading, error, products };
}

export default useGetProducts;