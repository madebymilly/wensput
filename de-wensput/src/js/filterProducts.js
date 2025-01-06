import { shuffle } from '../js/helpers'

export function filterProducts(products, answers) {
  console.log('answers: ', answers);
  console.log('products: ', products);

  // answers: { category: [], nonCategory: [], tag: [], nonTag: [], sort: [], minPlayers: int }

  let filteredProducts = products.filter(product => {

    // TODO: Checken of audio file beschikbaar is!!! TODO!
    const audioFile = true;

    // 'category'
    // Als category bestaat in answers:
    // Check dan of een enkele waarde uit die array bestaat in de product array:
    let categoryFilter = true
    categoryFilter = answers.category && answers.category.some(
      value => product.productCategories.nodes.some(node => node.slug === value)
    );

    // 'nonCategory'
    // Als nonCategory bestaat in answers:
    // Check dan of een enkele waarde uit die array bestaat in de product array:
    const nonCategoryFilter = answers.nonCategory && answers.nonCategory.some(
      value => !product.productCategories.nodes.some(node => node.slug === value)
    );

    // 'tag'
    // Als tag bestaat in answers:
    // Check dan of een enkele waarde uit die array bestaat in de product array:
    let tagFilter = true
    tagFilter = answers.tag && answers.tag.some(
      value => product.productTags.nodes.some(node => node.slug === value)
    );

    // 'nonTag'
    // Als nonTag bestaat in answers:
    // Check dan of een enkele waarde uit die array bestaat in de product array:
    const nonTagFilter = answers.nonTag && answers.nonTag.every(
      value => !product.productTags.nodes.some(node => node.slug === value)
    );

    // 'minPlayers'
    let playersFilter = true;
    if (answers.players) {
      playersFilter = answers.players && product.allPaMinAantalSpelers.nodes.some(node => parseInt(node.slug) <= answers.players);
    }

    // Test in console:
    console.log(
      product.name,
      ' categoryFilter: ', categoryFilter,
      ' nonCategoryFilter: ', nonCategoryFilter,
      ' tagFilter: ', tagFilter,
      ' nonTagFilter: ', nonTagFilter,
      ' minPlayersFilter: ', playersFilter
    );

    // Return product if it meets all the filters:
    return audioFile && (categoryFilter || nonCategoryFilter) && (tagFilter || nonTagFilter) && playersFilter;

    // const ageFilter = answers.age && product.allPaLeeftijd.nodes.find(
    //   node => parseInt(node.slug) >= answers.age
    // );
    // const playersFilter = answers.players && product.allPaMinAantalSpelers.nodes.find(node => parseInt(node.slug) >= answers.players);
    // const categoryFilter = answers.category && product.productCategories.nodes.some(
    //   node => node.slug === answers.category
    // ); // TODO: zijn er meer vragen met category?
    // const themaFilter = answers.theme && product.allPaThema.nodes.some(node => node.slug === answers.theme);
    // const tagFilter = answers.tag && product.productTags.nodes.some(node => node.slug === answers.tag);
    // const durationFilter = answers.duration.some(item =>
    //   product.allPaSpeelduur.nodes.some(obj => obj.name === item)
    // );

  });

  shuffle(filteredProducts);

  if (!answers.sort) return filteredProducts;

  // 'sort'
  // Als sort bestaat in answers:
  // Per sortValue in answers.sort, sorteer de producten:
  answers.sort.forEach(sortValue => {
    filteredProducts.sort((a, b) => {
      // console.log('sortValue: ', sortValue);

      // Check if the sortValue is in the product array:
      const aHasSortValue = a.productTags.nodes.some(tag => tag.slug === sortValue);
      const bHasSortValue = b.productTags.nodes.some(tag => tag.slug === sortValue);

      // Sort
      if (aHasSortValue && !bHasSortValue) return -1;
      if (!aHasSortValue && bHasSortValue) return 1;

      // Otherwise, keep original order
      return 0;
    });
  });

  console.log('sorted & filtered: ', filteredProducts);

  return filteredProducts;
}
