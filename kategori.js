export default class Category {
    constructor(categoryId, categoryName){
        this.categoryId = categoryId
        this.categoryName = categoryName
    }
    
    displayInfo(){
        console.log(`Id Kategori : ${this.categoryId}`)
        console.log(`Nama Kategori : ${this.categoryName} `)
    }

    static createCategory(CategoryId, CategoryName) {
        return new Category (categoryId, categoryName)
    }

    updateCategory(newCategoryName){
        this.categoryName == this.categoryName !== undefined ? newCategoryName : this.categoryName
    }

    static deleteCategory(category){
        console.log(`Kategori ${category.categoryId} di hapus`)
    }

    products(){
        if (this.productList.length === 0) {
            console.log('Tidak ada produk di dalam kategori')
        } else {
            console.log(`Kategori produk '${this.categoryName}' : `)
            this.productList.forEach (product => {
              console.log(`- ${product.productName}`)  
            })
        }
    }


addProduct(product) {
    this.productList.push(product)
 }
}