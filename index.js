// Product class
class Product {
    constructor(productId, productName, price, description) {
      this.productId = productId;
      this.productName = productName;
      this.price = price;
      this.description = description;
      this.categories = []; // Array untuk menyimpan kategori
    }
  
    displayInfo() {
      console.log(`Product ID: ${this.productId}`);
      console.log(`Name: ${this.productName}`);
      console.log(`Price: $${this.price}`);
      console.log(`Description: ${this.description}`);
    }
  
    updateProduct(newProductName, newPrice, newDescription) {
      this.productName = newProductName;
      this.price = newPrice;
      this.description = newDescription;
    }
  
    addCategory(category) {
      this.categories.push(category);
      category.addProduct(this); // Menambahkan produk ke kategori
    }
  }
  
  // Category class
  class Category {
    constructor(categoryId, categoryName) {
      this.categoryId = categoryId;
      this.categoryName = categoryName;
      this.productsList = []; // Array untuk menyimpan produk
    }
  
    displayInfo() {
      console.log(`Category ID: ${this.categoryId}`);
      console.log(`Name: ${this.categoryName}`);
    }
  
    updateCategory(newCategoryName) {
      this.categoryName = newCategoryName;
    }
  
    products() {
      this.productsList.forEach(product => {
        console.log(`Product Name: ${product.productName}`);
      });
    }
  
    addProduct(product) {
      this.productsList.push(product);
    }
  }
  
  // Cart class
  class Cart {
    constructor(cartId) {
      this.cartId = cartId;
      this.items = []; // Array untuk menyimpan produk dan jumlah
    }
  
    addItem(product, quantity) {
      this.items.push({ product, quantity });
    }
  
    removeItem(product) {
      const index = this.items.findIndex(item => item.product === product);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    }
  
    viewCart() {
      this.items.forEach(item => {
        console.log(`Product: ${item.product.productName}, Quantity: ${item.quantity}`);
      });
      const totalAmount = this.items.reduce((total, item) => {
        return total + item.product.price * item.quantity;
      }, 0);
      console.log(`Total Amount: $${totalAmount}`);
    }
  }
  
  // Order class
  class Order {
    constructor(orderId) {
      this.orderId = orderId;
      this.items = []; // Array untuk menyimpan produk dan jumlah
      this.totalAmount = 0;
    }
  
    createOrder(cart) {
      this.items = cart.items;
      this.totalAmount = cart.items.reduce((total, item) => {
        return total + item.product.price * item.quantity;
      }, 0);
    }
  
    displayOrderDetails() {
      this.items.forEach(item => {
        console.log(`Product: ${item.product.productName}, Quantity: ${item.quantity}`);
      });
      console.log(`Total Amount: $${this.totalAmount}`);
    }
  }
  
  
  
  // Membuat produk
  const product1 = new Product(1, 'Laptop', 1200, 'High-performance laptop');
  const product2 = new Product(2, 'Smartphone', 800, 'Latest smartphone model');
  
  // Membuat kategori
  const category1 = new Category(101, 'Electronics');
  const category2 = new Category(102, 'Gadgets');
  
  // Menambahkan produk ke kategori
  product1.addCategory(category1);
  product1.addCategory(category2);
  product2.addCategory(category1);
  
  // Membuat keranjang dan menambahkan item
  const cart = new Cart(1);
  cart.addItem(product1, 2);
  cart.addItem(product2, 1);
  
  // Membuat pesanan dari keranjang
  const order = new Order(1);
  order.createOrder(cart);
  
  // Menampilkan detail keranjang dan pesanan
  console.log('Cart Details:');
  cart.viewCart();
  console.log('Order Details:');
  order.displayOrderDetails();
 
  