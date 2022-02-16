const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';



class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];//массив товаров из JSON документа сюда будет вставляться

        this._getProducts()
            .then(data => { //data - объект js
                this.goods = data;
                this.render()
            });
    }

    _getProducts() {

        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });

    }
    calcSum() {
        return this.allProducts.reduce((accum, item) => accum += item.price, 0);
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            //            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }

    }
}


class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }
    render() {
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
    }
}

class Cart {
    constructor(container = '.cart-item') {
        this.container = container;
        this.goods = [];

        this._clickOnCart()
        this._getBasketItem()
            .then(data => {
                this.goods = data.contents;
                this.render()
            });
    }


    _clickOnCart() {
        document.querySelector('.btn-cart').addEventListener('click', () => {
            document.querySelector(this.container).classList.toggle('invisible');
        })
    }

    _getBasketItem() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }



    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const cartItem = new CartItem();

            block.insertAdjacentHTML('beforeend', cartItem.render(product));
        }


    }

}

class CartItem {
    render() {
        return `<div class="cart-item" data-id="${product.id_product}">
                <div class="product-bio">

                <img src="${product.img}" alt="Some img">

                <div class = "product-description">
                    <p class = "pruduct-title"> ${product.product_name}</p>
                    <p class="product-quantity"> Quantity: ${product.quantity}</p>
                    <p class = "product-price">${product.price}</p>
                </div>
                </div>
                `
    }
}

let list = new ProductsList();
let cart = new Cart();
console.log(list.allProducts);

