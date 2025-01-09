function Products({ products }) {
  // console.log(products)
  return (
    <>
      <h1>{products.length}</h1>
      {products.map(({ id, name = '', allPaBenodigdeSpeelruimte = '', allPaMinAantalSpelers = '', allPaSpeelduur = '', allPaTaal = '', allPaThema = [], productCategories = [], productTags= [], slug = '' }) => (
        <div key={id} style={{ padding: '20px' }}>
          <h3>{name}</h3>
          <h4>Slug: {slug}</h4>
          <h5>Audio-file: '/audio/games/{slug}.mp3'</h5>
          {allPaBenodigdeSpeelruimte.nodes.length > 0 ? <p>Speelruimte: {allPaBenodigdeSpeelruimte.nodes[0].name} / {allPaBenodigdeSpeelruimte.nodes[0].slug}</p> : ''}
          {allPaMinAantalSpelers.nodes.length > 0 ? <p>Min. aantal spelers: {allPaMinAantalSpelers.nodes[0].slug}</p> : ''}
          {allPaSpeelduur.nodes.length > 0 ? <p>Speelduur: {allPaSpeelduur.nodes[0].slug}</p> : ''}
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
      ))}
    </>
  );
}

export default Products;
