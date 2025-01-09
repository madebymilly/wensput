import './App.scss'
import WishingWell from './components/WishingWell'

import useGetProducts from './hooks/useGetProducts';

function App() {
  const { loading, error, products } = useGetProducts();

  if (loading) {
      return <p>Loading...</p>; // Show a loading message or spinner
  }

  if (error) {
      return <p>Error: {error.message}</p>; // Show an error message
  }

  if (products.length === 0) {
      return <p>No products found.</p>; // Handle empty product list
  }

  return (
    <div className="App">
      <WishingWell allProducts={products} />
    </div>
  );
}

export default App;
