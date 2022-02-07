const products = [
    { id: 1, title: 'Notebook', price: 2000, img: 'notebook' },
    { id: 2, title: 'Mouse', price: 20, img: 'mouse' },
    { id: 3, title: 'Keyboard', price: 200, img: 'keyboard' },
    { id: 4, title: 'Gamepad', price: 50, img: 'gamepad' },
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (item) => {
    return `<div class="product-item">
                <h3>${item.title}</h3>
                <img class = "img-item" src = "img/${item.img}.jpg">
                <p>${item.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    document.querySelector('.products').innerHTML = list.map(item => renderProduct(item)).join(' ');


};

renderPage(products);