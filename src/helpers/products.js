export const getProductThumbnail = images => {
  if (!images || !images.length) {
    return "";
  }
  return images[0].thumb;
};

export const getProductById = (products = [], id) => {
  return products.find(({ id: productId }) => {
    return productId === +id;
  });
};
