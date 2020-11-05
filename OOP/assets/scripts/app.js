const productList = {
    products: [
        {title: 'Narwhal Pillow', 
        imageURL:'https://res-1.cloudinary.com/mp-assets/image/upload/c_pad,f_auto,q_auto,w_550/v1515689100/i-scream/content/images/0/0002723_blue-narwhal-scented-microbead-pillow.png' ,
        price: 20, 
        description: 'Unicorn of the Sea'
        } ,
        {title: 'Unicorn Floater', 
        imageURL:'https://assets.ptimgs.com/ptimgs/rk/images/dp/wcm/202026/0013/img1c.jpg',
        price: 25, 
        description: 'Unicorn Floater'
        }
    
    
    ],
render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className= 'product-list';
    for (const prod of this.products) {
        productElement = document.createElement('li');
        productElement.className = 'product-item';
        productElement.innerHTML = `
            <div>
            <img src = "${prod.imageURL}" alt = "${prod.title}">
            <div class="product-item__content"> 
            <h2> ${prod.title}</h2>
            <h3>\$${prod.price}</h3>
            <p>${prod.description}</p>
            <button> Add to Cart </button>
            </div>
            </div>
        `
        prodList.append(productElement);
    }
    renderHook.append(prodList);
}

};

productList.render();