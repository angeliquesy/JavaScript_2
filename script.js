const goods = [
  { key: 1, title: 'Briefcase', img: 'gallery/small/1.jpg', price: 150 },
  { key: 2, title: 'Backpack', img: 'gallery/small/2.jpg', price: 50 },
  { key: 3, title: 'Bag', img: 'gallery/small/3.jpg', price: 350 },
  { key: 4, title: 'Purce', img: 'gallery/small/4.jpg', price: 250 },
];

const renderGoodsItem = (img, title, price, key) => {
  return `<div class="goods-item"><img src="${img}"><h3>${title}</h3><p class="price">$${price}</p><button class="buttons" id="buy-${key}">Add to cart</button></div>`;
};

const renderGoodsList = (list) => {
  let goodsList = list.map(item => renderGoodsItem(item.img, item.title, item.price, item.key));
  document.querySelector('.goods-list').innerHTML = goodsList.join(''); //преобразует массив в строку без разделителя
}

renderGoodsList(goods);

//второе задание не понимаю. здесь же и так стрелочные функции, куда еще больше упрощать
