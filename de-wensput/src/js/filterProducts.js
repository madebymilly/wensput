export function filterProducts(products, answer = {}) {
  let filteredProducts = [];

  // If 'sort'
  if (answer.sort) {
    filteredProducts = products.slice().sort((a, b) => {
      const sortValue = answer.sort[0];

      const aHasSortValue = a.productTags.nodes.some(tag => tag.slug === sortValue);
      const bHasSortValue = b.productTags.nodes.some(tag => tag.slug === sortValue);

      if (aHasSortValue && !bHasSortValue) return -1;
      if (!aHasSortValue && bHasSortValue) return 1;

      return 0;
    });

    // Bij sort wil je waarschijnlijk sowieso al resultaten tonen
    return filteredProducts;
  }

  // If 'solo'
  if (answer.solo) {
    if (answer.solo === 'true') {
      filteredProducts = products.filter(product => {
        const tagFilter = product.productTags.nodes.some(node => node.slug === 'solo');
        const playersFilter = product.allPaMinAantalSpelers.nodes.some(node => parseInt(node.slug) === 1);
        return tagFilter || playersFilter;
      });
    } else {
      filteredProducts = products.filter(product => {
        const playersFilter = product.allPaMinAantalSpelers.nodes.some(node => parseInt(node.slug) >= 4);
        return playersFilter;
      });
    }
  }

  // If 'luck'
  else if (answer.luck) {
    if (answer.luck === 'true') {
      filteredProducts = products.filter(product => {
        const tagFilter = product.productTags.nodes.some(node => node.slug === 'dobbel');
        const catFilter = product.productCategories.nodes.some(node => node.slug === 'party');

        const nonTagFilter = !product.productTags.nodes.some(node => node.slug === 'kennis-taal');
        const nonCatFilter = !product.productCategories.nodes.some(node => node.slug === 'expert');

        return (nonTagFilter && tagFilter) || (nonCatFilter && catFilter);
      });
    } else {
      filteredProducts = products.filter(product => {
        const nonTagFilter = !product.productTags.nodes.some(node => node.slug === 'dobbel');
        const nonCatFilter = !product.productCategories.nodes.some(node => node.slug === 'party');

        const tagFilter = product.productTags.nodes.some(node => node.slug === 'kennis-taal');
        const catFilter = product.productCategories.nodes.some(node => node.slug === 'expert');

        return (nonTagFilter && tagFilter) || (nonCatFilter && catFilter);
      });
    }
  }

  // If 'attributes'
  else {
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

  // Normaal resultaat gevonden
  if (filteredProducts.length > 0) {
    console.log('filteredProducts:', filteredProducts);
    return filteredProducts;
  }

  // Fallback: geef het best matchende product terug
  const fallbackProducts = getBestMatchingProducts(products, answer, 1);

  console.log('fallbackProducts:', fallbackProducts);
  return fallbackProducts;
}

function getBestMatchingProducts(products, answer, limit = 1) {
  const scored = products.map(product => {
    let score = 0;

    if (answer.category) {
      answer.category.forEach(value => {
        if (product.productCategories.nodes.some(node => node.slug === value)) score += 3;
      });
    }

    if (answer.nonCategory) {
      answer.nonCategory.forEach(value => {
        if (!product.productCategories.nodes.some(node => node.slug === value)) score += 2;
      });
    }

    if (answer.tag) {
      answer.tag.forEach(value => {
        if (product.productTags.nodes.some(node => node.slug === value)) score += 3;
      });
    }

    if (answer.nonTag) {
      answer.nonTag.forEach(value => {
        if (!product.productTags.nodes.some(node => node.slug === value)) score += 2;
      });
    }

    if (answer.theme) {
      answer.theme.forEach(value => {
        if (product.allPaThema.nodes.some(node => node.slug === value)) score += 2;
      });
    }

    if (answer.nonTheme) {
      answer.nonTheme.forEach(value => {
        if (!product.allPaThema.nodes.some(node => node.slug === value)) score += 1;
      });
    }

    if (answer.space) {
      answer.space.forEach(value => {
        if (product.allPaBenodigdeSpeelruimte.nodes.some(node => node.slug === value)) score += 2;
      });
    }

    if (answer.nonSpace) {
      answer.nonSpace.forEach(value => {
        if (!product.allPaBenodigdeSpeelruimte.nodes.some(node => node.slug === value)) score += 1;
      });
    }

    if (answer.duration) {
      answer.duration.forEach(value => {
        if (product.allPaSpeelduur.nodes.some(node => node.slug === value)) score += 2;
      });
    }

    if (answer.language) {
      answer.language.forEach(value => {
        if (product.allPaTaal.nodes.some(node => node.slug === value)) score += 2;
      });
    }

    if (answer.solo === 'true') {
      if (product.productTags.nodes.some(node => node.slug === 'solo')) score += 3;
      if (product.allPaMinAantalSpelers.nodes.some(node => parseInt(node.slug) === 1)) score += 3;
    }

    if (answer.solo === 'false') {
      if (product.allPaMinAantalSpelers.nodes.some(node => parseInt(node.slug) >= 4)) score += 3;
    }

    if (answer.luck === 'true') {
      if (product.productTags.nodes.some(node => node.slug === 'dobbel')) score += 2;
      if (product.productCategories.nodes.some(node => node.slug === 'party')) score += 2;
    }

    if (answer.luck === 'false') {
      if (product.productTags.nodes.some(node => node.slug === 'kennis-taal')) score += 2;
      if (product.productCategories.nodes.some(node => node.slug === 'expert')) score += 2;
    }

    return { product, score };
  });

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.product);
}