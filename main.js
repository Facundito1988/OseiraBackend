class ProductManager {
  constructor(products = []) {
    this.products = products;
    this.currentId = 1;
  }

  addProduct(product) {
    if (!this.isValidProduct(product)) {
      console.log("Error: Producto inválido. Todos los campos son obligatorios y el código debe ser único.");
      return;
    }

    product.id = this.currentId;
    this.products.push(product);
    this.currentId++;
    console.log(`El producto "${product.title}" ha sido agregado con el ID ${product.id}.`);
  }

  isValidProduct(product) {
    const { title, description, price, thumbnail, code, stock } = product;
    return title && description && price && thumbnail && code && stock && !this.products.some(p => p.code === code);
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find(product => product.id === id);
    if (product) {
      return product;
    } else {
      console.log("Error: Producto no encontrado.");
    }
  }
}

// Ejemplo de uso:

const manager = new ProductManager();

const product1 = {
  title: "Camiseta",
  description: "Una camiseta de algodón de alta calidad",
  price: 19.99,
  thumbnail: "ruta/de/imagen.jpg",
  code: "P001",
  stock: 10
};

const product2 = {
  title: "Pantalón",
  description: "Un pantalón cómodo y elegante",
  price: 39.99,
  thumbnail: "ruta/de/imagen2.jpg",
  code: "P002",
  stock: 5
};

manager.addProduct(product1);
manager.addProduct(product2);

console.log(manager.getProducts());
console.log(manager.getProductById(1));
console.log(manager.getProductById(3)); // Producto no encontrado.
