import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../queries/get-products';

function useGetProducts() {
    const { loading, error, data } = useQuery(GET_PRODUCTS);

    return { loading, error, products: data?.products?.nodes || [] };
}

export default useGetProducts;
