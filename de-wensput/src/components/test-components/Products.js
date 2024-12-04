function Products({products}) {
  return products.map(({ id, name, allPaLeeftijd, allPaMinAantalSpelers, allPaMaxAantalSpelers, allPaSpeelduur, allPaTaal, allPaThema, productCategories, productTags, slug }) => (
    <div key={id} style={{ padding: '20px' }}>
      <h3>{name}</h3>
      <h4>Slug: {slug}</h4>
      <h5>Audio-file: '/audio/games/{slug}.mp3'</h5>
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
