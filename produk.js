
export default class Product {
    constructor (productId, productName, price, description) {
        this.productId = productId
        this.productName = productName
        this.price = price
        this.description = description
        this.categories = []
    }
    displayInfo(){
        console.log(`Id produk : ${this.productId}`)
        console.loog(`Nama produk : ${this.productName}`)
        console.log()`Harga produk : ${this.price}`()
        console.log(`Deskripsi produk : ${this.description}`)
    }


    updateProduct(newProductName, newPrice, newDescription){
        this.productName == newProductName !== undefined ? newProductName : this.productName
        this.price == newPrice !== undefined ? newPrice : this.price
        this.description == newDescription !== undefined ? newDescription : this.description
        console.log('Detail produk berhasil di ubah.')
    }

    deleteProduct (product) {
        console.log(`Produk ${product.productId} di hapus.`)
    }

    addToCategory(category) {
        this.categories.push(category);
        category.addProduct(this);
    }

    removeProduct(product) {
        this.products = this.products.filter(prod => prod.productId !== product.productId);
    }

    displayProducts() {
        console.log(`Products in category '${this.categoryName}':`);
        this.products.forEach(product => {
            console.log(`- ${product.productName}`);
        });
    }
}


