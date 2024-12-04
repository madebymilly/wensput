
import Products from './Products'
import LedController from './LedController';
import AudioList from './AudioList';

const Test = ({products}) => {
  return (
    <div className="TestComponent">
      <h1>Data of the Wensput for testing:</h1>
      <h2>Products:</h2>
      <Products products={products} />
      <h2>Led controller:</h2>
      <LedController />
      <h2>AudioList:</h2>
      <AudioList />
      </div>
  )
}

export default Test;
