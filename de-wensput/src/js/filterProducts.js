export function filterProducts(products, answer = []) {

  // console.log('products: ', products);
  // console.log('answer: ', answer);

  let filteredProducts = [];

  // If 'sort'
  if (answer.sort) {
    filteredProducts = products.sort((a, b) => {
      const sortValue = answer.sort[0];

      // Check if the sortValue is in the product array:
      const aHasSortValue = a.productTags.nodes.some(tag => tag.slug === sortValue);
      const bHasSortValue = b.productTags.nodes.some(tag => tag.slug === sortValue);

      // Sort
      if (aHasSortValue && !bHasSortValue) return -1;
      if (!aHasSortValue && bHasSortValue) return 1;

      // Otherwise, keep original order
      return 0;
    });

    // If 'solo'
  } else if (answer.solo) {

    // If solo === 'true'
    if (answer.solo === 'true') {
      filteredProducts = products.filter(product => {

        const tagFilter = product.productTags.nodes.some(node => node.slug === 'solo')
        const playersFilter = product.allPaMinAantalSpelers.nodes.some(node => parseInt(node.slug) === 1);
        return tagFilter || playersFilter;
      });

    // If solo === 'false'
    } else {
      filteredProducts = products.filter(product => {

        const playersFilter = product.allPaMinAantalSpelers.nodes.some(node => parseInt(node.slug) >= 4);
        return playersFilter;
      });
    }

  // If 'luck'
  } else if (answer.luck) {

    // If luck === 'true'
    if (answer.luck === 'true') {
      filteredProducts = products.filter(product => {

        const tagFilter = product.productTags.nodes.some(node => node.slug === 'dobbel')
        const catFilter = product.productCategories.nodes.some(node => node.slug === 'party')

        const nonTagFilter = !product.productTags.nodes.some(node => node.slug === 'kennis-taal')
        const nonCatFilter = !product.productCategories.nodes.some(node => node.slug === 'expert')

        return (nonTagFilter && tagFilter) || (nonCatFilter && catFilter);
      });

     // If luck === 'false'
    } else {
      filteredProducts = products.filter(product => {

        const nonTagFilter = !product.productTags.nodes.some(node => node.slug === 'dobbel')
        const nonCatFilter = !product.productCategories.nodes.some(node => node.slug === 'party')

        const tagFilter = product.productTags.nodes.some(node => node.slug === 'kennis-taal')
        const catFilter = product.productCategories.nodes.some(node => node.slug === 'expert')

        return (nonTagFilter && tagFilter) || (nonCatFilter && catFilter);
      });
    }

  // If 'attributes'
  } else {
    filteredProducts = products.filter(product => {

      if (answer.category) {
        return answer.category.some(
          value => product.productCategories.nodes.some(node => node.slug === value)
        );
      } else if (answer.nonCategory) {
        return answer.nonCategory.every(
          value => !product.productCategories.nodes.some(node => node.slug === value)
        );
      } else if (answer.tag) {
        return answer.tag.some(
          value => product.productTags.nodes.some(node => node.slug === value)
        );
      } else if (answer.nonTag) {
        return answer.nonTag.every(
          value => !product.productTags.nodes.some(node => node.slug === value)
        );
      } else if (answer.theme) {
        return answer.theme.some(
          value => product.allPaThema.nodes.some(node => node.slug === value)
        );
      } else if (answer.nonTheme) {
        return answer.nonTheme.every(
          value => !product.allPaThema.nodes.some(node => node.slug === value)
        );
      } else if (answer.space) {
        return answer.space.some(
          value => product.allPaBenodigdeSpeelruimte.nodes.some(node => node.slug === value)
        );
      } else if (answer.nonSpace) {
        return answer.nonSpace.every(
          value => !product.allPaBenodigdeSpeelruimte.nodes.some(node => node.slug === value)
        );
      } else if (answer.duration) {
        return answer.duration.some(
          value => product.allPaSpeelduur.nodes.some(node => node.slug === value)
        );
      } else if (answer.language) {
        return answer.language.some(
          value => product.allPaTaal.nodes.some(node => node.slug === value)
        );
      } else {
        return true;
      }
    });
  }
  //console.log('filteredProducts: ', filteredProducts);
  return filteredProducts;
};
