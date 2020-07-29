export async function getCategories() {
  return fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((categorias) => categorias.json())
    .then((data) => data)
    .catch((erro) => erro);
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // implement here
}
