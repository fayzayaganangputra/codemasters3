
import Product from './Product';
import Category from './Category';
import Cart from './Cart';
import Order from './Order';

// Test your classes here

// Example usage:

const laptop = new Product(1, 'Laptop', 999, 'Powerful laptop');
const smartphone = new Product(2, 'Smartphone', 599, 'Latest smartphone');

const electronicsCategory = new Category(101, 'Electronics');
laptop.addToCategory(electronicsCategory);
smartphone.addToCategory(electronicsCategory);

electronicsCategory.displayProducts();

const cart = new Cart(1);
cart.addItem(laptop, 2);
cart.addItem(smartphone, 1);
cart.viewCart();

const order = new Order(1);
order.createOrder(cart);
order.displayOrderDetails();