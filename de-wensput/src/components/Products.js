import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../queries/get-products';

function Products() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const products = data.products.nodes;

  return products.map(({ id, name, metaData, allPaLeeftijd, allPaMinAantalSpelers, allPaMaxAantalSpelers, allPaSpeelduur, allPaTaal, allPaThema, productCategories, productTags }) => (
    <div key={id} style={{ padding: '20px', border: '2px solid red' }}>
      <h3>{name}</h3>
      <h4>Audio-file: <a href={metaData && metaData[0].value} target="_blank" rel="noreferrer">{metaData && metaData[0].value}</a></h4>
      <p>Leeftijd: {allPaLeeftijd.nodes[0].name} / {allPaLeeftijd.nodes[0].slug}</p>
      <p>Aantal spelers: {allPaMinAantalSpelers.nodes[0].slug}-{allPaMaxAantalSpelers.nodes[0].slug}</p>
      <p>Speelduur: {allPaSpeelduur.nodes[0].slug}</p>
      <p>Taal:{allPaTaal.nodes.length > 0 ?
        allPaTaal.nodes.map(({ name }) => (
          <span key={name}> {name}</span>
        )) : ''
      }</p>
      <p>
        Thema's:
        {allPaThema.nodes.length > 0 ?
          allPaThema.nodes.map(({ name }) => (
            <span key={name}> {name}</span>
          )) : ''
        }
      </p>
      <p>
        Categorieen:
        {productCategories.nodes.length > 0 ?
          productCategories.nodes.map(({ name }) => (
            <span key={name}> {name}</span>
          )) : ''
        }
      </p>
      <p>
        Tags:
        {productTags.nodes.length > 0 ?
          productTags.nodes.map(({ name }) => (
            <span key={name}> {name}</span>
          )) : ''
        }
      </p>
    </div>
  ));
}

export default Products;
