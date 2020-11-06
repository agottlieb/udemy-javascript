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

class ShoppingCart {
    items = [];

    get totalAmount() {
      const sum = this.items.reduce((prevValue, curItem) => {
        return prevValue + curItem.price
      }, 0);
      return sum;
    }

    addProduct(product) {
        this.items.push(product)
        this.totalOutput.innerHTML = `<h2> Total: \$${this.totalAmount} </h2>`;
    }

    render() {
        const cartEl = document.createElement('section');
        cartEl.innerHTML =`
        <h2> Total: \$${0} </h2>
        <button>Act Now!</button>
        `;
        cartEl.className='cart';
        this.totalOutput = cartEl.querySelector('h2');
        return cartEl;
    }
}

//logic to render each grouping of data (product class--groups the data)
class ProductItem {
    constructor(product) {
      this.product = product; //adds the product property to newly created objects
    }
  
    addToCart() {
      App.addProductToCart(this.product);
    }
  
    render() {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
          <div>
            <img src="${this.product.imageUrl}" alt="${this.product.title}" >
            <div class="product-item__content">
              <h2>${this.product.title}</h2>
              <h3>\$${this.product.price}</h3>
              <p>${this.product.description}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        `;
      const addCartButton = prodEl.querySelector('button');
      addCartButton.addEventListener('click', this.addToCart.bind(this)); //first this- refers to productItem, second this binds object when cart is rendered
      return prodEl;
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
   constructor () {} //can have a constructor without arguments just to initialize a case of that object

   render() {
    const prodList = document.createElement('ul');
    prodList.className= 'product-list';
    for (const prod of this.products) {
        const productItem = new ProductItem(prod)
        const prodElement = productItem.render();
        prodList.append(prodElement);
    }
    return prodList;
 }  
}

class Shop {
 render () {
    const renderHook = document.getElementById('app');
    this.cart = new ShoppingCart();
    const cartEl = this.cart.render();
    const productList = new ProductList();
    const prodListEl = productList.render();
    renderHook.append(cartEl);
    renderHook.append(prodListEl);
    }
}

//static class acts on the class and not an object, glues together other properties
class App {
  static cart;

  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();