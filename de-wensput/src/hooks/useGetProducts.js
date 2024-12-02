import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../queries/get-products';

function useGetProducts() {

  const { loading, error, data } = useQuery(GET_PRODUCTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return data.products.nodes;
}

export default useGetProducts;
