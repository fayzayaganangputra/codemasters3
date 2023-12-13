export default class Category {
    constructor(categoryId, categoryName){
        this.categoryId = categoryId
        this.categoryName = categoryName
        this.products = [];
    }
    
    displayInfo(){
        console.log(`Id Kategori : ${this.categoryId}`)
        console.log(`Nama Kategori : ${this.categoryName} `)
    }

    addProduct(product) {
        this.products.push(product);
    }

    updateCategory(newCategoryName){
        this.categoryName == this.categoryName !== undefined ? newCategoryName : this.categoryName
    }


    displayProducts() {
        console.log(`Products in category '${this.categoryName}':`);
        this.products.forEach(product => {
            console.log(`- ${product.productName}`);
        });
        }
    }

