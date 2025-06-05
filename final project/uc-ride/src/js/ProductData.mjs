export default class ProductData {
    constructor(url) {
        this.url = url;
    }

    async getAllProducts() {
        const response = await fetch(this.url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    }
}