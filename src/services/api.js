export async function getCategories() {
  // implement here
  fetch('https://api.mercadolibre.com/sites/MLB/categories')
  .then(response => response.json())
  
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // implement here
}
