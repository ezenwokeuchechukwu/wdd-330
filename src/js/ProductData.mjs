export default class ProductData {
  constructor(filePath) {
    this.filePath = filePath;
  }

  async getData(category) {
    const response = await fetch(this.filePath);
    const data = await response.json();

    if (category) {
      return data.filter(product => product.category === category);
    }

    return data;
  }
}
