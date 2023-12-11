export default class Order{
    constructor (orderId, totalAmount) {
        this.orderId = orderId
        this.items = []
        this.totalAmount = 0
    }
    createOrder(cart){
        this.items = [...cart.items]
        this.totalAmount = this.calculateTotalAmount()
        console.log('Order berhasil di buat')
    }

    displayOrderDetails() {
        if (this.items.length === 0) {
            console.log("No items in the order.");
        } else {
            console.log("Order Details:");
            this.items.forEach(item => {
                const { product, quantity } = item;
                console.log(`- Product: ${product.productName}, Quantity: ${quantity}`);
            });
            console.log(`Total Amount: ${this.totalAmount}`);
        }
    }

    calculateTotalAmount() {
        let total = 0;
        this.items.forEach(item => {
            const { product, quantity } = item;
            total += product.price * quantity;
        });
        return total;
    }
}