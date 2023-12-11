
import product from './produk.js'

export default class Cart {
    constructor (cartId){
        this.cartId = cartId
        this.items = []
    }

    addItem(product, quantity) {
        const itemIndex = this.items.findIndex(item => item.product.ProductId === product.productId)

        if (itemIndex !== -1) {
            this.items[itemIndex].quantity += quantity
        } else{ 
            this.items.push({product, quantity})
        }

        console.log(`${quantity} ${product.productName}(s) di tambahkan ke dalam keranjang `)
    }

    removeItem(product) {
        const itemIndex = this.items.findIndex(item => item.product.productId === product.productId)

        if (itemIndex !== -1) {
            this.items.splice(itemIndex, 1)
            console.log (`${product.productName} removed from the cart.`)
        } else {
            console.log(`${product.productName} is not in the cart.`)
        }
    }

    viewCart() {
        if (this.items.length === 0) {
            console.log('Cart is empty')
        } else {
            console.log('Cart Contents :')
            let totalItems = 0
            let totalPrice = 0

            this.items.forEach(item => {
                const {product, quantity} = item
                const itemTotalPrice = product.price * quantity
                console.log(`-${product.productName}: Quantity - ${quantity}, Total Price - ${itemTotalPrice}`)

                totalItems += quantity
                totalPrice += itemTotalPrice
            })

            console.log(`Total Items : ${totalItems}`)
            console.log(`Total Price: ${totalPrice}`)
        }
    }
}