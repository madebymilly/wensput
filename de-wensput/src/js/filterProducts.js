export function filterProducts(products, answers) {
  const filteredProducts = products.filter(product => {

    // TODO: ook checken of audio file beschikbaar is!!!
    const hasAudio = product.metaData && product.metaData[0].value; // Controleer of er audio in metaData is
    if (!hasAudio) return false; // Als er geen audio is, stop dan meteen met filteren

    const ageFilter = answers.age && product.allPaLeeftijd.nodes.find(node => parseInt(node.slug) >= answers.age);
    const playersFilter = answers.players && product.allPaMinAantalSpelers.nodes.find(node => parseInt(node.slug) >= answers.players);
    const categoryFilter = answers.category && product.productCategories.nodes.some(node => node.slug === answers.category); // TODO: zijn er meer vragen met category?
    const themaFilter = answers.theme && product.allPaThema.nodes.some(node => node.slug === answers.theme);
    const tagFilter = answers.tag && product.productTags.nodes.some(node => node.slug === answers.tag);
    const durationFilter = answers.duration.some(item =>
      product.allPaSpeelduur.nodes.some(obj => obj.name === item)
    );

    return ageFilter !== undefined && playersFilter !== undefined && categoryFilter && themaFilter && tagFilter && durationFilter;
  });

  return filteredProducts;
}
