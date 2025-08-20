import './App.scss'
import WishingWell from './components/WishingWell'

import useGetProducts from './hooks/useGetProducts';

function App() {
  const { loading, error, products } = useGetProducts();

  if (loading) {
      return <div className="App"><div className="App__loading"><p>Er worden nieuwe wensen geladen...</p></div></div>; // Show a loading message or spinner
  }

  if (error) {
      return <div className="App"><div className="App__error"><p>Foutmelding: {error.message}</p></div></div>; // Show an error message
  }

  if (products.length === 0) {
      return <div className="App"><div className="App__error"><p>Geen producten gevonden</p></div></div>; // Handle empty product list
  }

  return (
    <div className="App">
      <WishingWell allProducts={products} />
    </div>
  );
}

export default App;
