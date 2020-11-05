class Product {
    // title= 'DEFAULT';
    // imageUrl;
    // description;
    // price;
//initializes the values in the class to the values created in the new object
   constructor(title, image, price, desc) {
    this.title = title;
    this.imageUrl = image;
    this.price= price;
    this.description= desc;
   } 
}
//logic to render each grouping of data (product class--groups the data)
class ProductItem {
    constructor (product) {
        this.product = product;
    }
    render () {
        const productElement = document.createElement('li');
        productElement.className = 'product-item';
        productElement.innerHTML = `
            <div>
            <img src = "${this.product.imageUrl}" alt = "${this.product.title}">
            <div class="product-item__content"> 
            <h2> ${this.product.title}</h2>
            <h3>\$${this.product.price}</h3>
            <p>${this.product.description}</p>
            <button> Add to Cart </button>
            </div>
            </div>
            `;
     return productElement;
    }
}

class ProductList {
    products = [
        new Product('Narwhal Pillow',
        'https://res-1.cloudinary.com/mp-assets/image/upload/c_pad,f_auto,q_auto,w_550/v1515689100/i-scream/content/images/0/0002723_blue-narwhal-scented-microbead-pillow.png',
        20, 
        'Unicorn of the Sea'),
        new Product ('Unicorn Floater', 
        'https://assets.ptimgs.com/ptimgs/rk/images/dp/wcm/202026/0013/img1c.jpg',
        25, 
        'Unicorn Floater'
        )
    ]
   constructor () {}

   render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className= 'product-list';
    for (const prod of this.products) {
        const productItem = new ProductItem(prod)
        const prodElement = productItem.render();
        prodList.append(prodElement);
    }
    renderHook.append(prodList);
 }  
}
const productList = new ProductList();
productList.render();