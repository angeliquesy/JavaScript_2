class GoodsItem {
    
  constructor(key, title, img, price) {
    this.key = key;
    this.title = title;
    this.img = img;
    this.price = price;
  }
    
  render() {
    return `<div class="goods-item"><img src="${this.img}"><h3>${this.title}</h3><p class="price">$${this.price}</p><button class="buttons" id="buy-${this.key}">Add to cart</button></div>`;
};
  
}

class GoodsList {
    
  constructor() {
    this.goods = [];
  }
    
  fetchGoods() {
    this.goods = [
      { key: 1, title: 'Briefcase', img: 'gallery/small/1.jpg', price: 150 },
      { key: 2, title: 'Backpack', img: 'gallery/small/2.jpg', price: 50 },
      { key: 3, title: 'Bag', img: 'gallery/small/3.jpg', price: 350 },
      { key: 4, title: 'Purce', img: 'gallery/small/4.jpg', price: 250 },
    ];
  }
    
  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.key, good.title, good.img, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }
    
  sum() { //подсчет суммы товаров. -----------ЗАДАНИЕ 2-------------
      let sum = 0;
      for(let i=0;i<this.goods.length;i++) {
      sum += parseInt(this.goods[i].price);
      }
      console.log(`Сумма всех товаров: ${sum}`);
  }
}

//-------------ЗАДАНИЕ 1---------------
//класс корзина

class Cart {
    constructor() {
    }
    
    render() { //html таблица или дивы
    }
    
    countTotalPrice() { //подсчет итоговой цены
    }
}
    
//класс товар в корзине

class CartItem {
    constructor(GoodsItem) { 
    }
    
    render(key, title, quantity, price){
    }
    
    addItemToCart(GoodsItem) { //добавить в корзину
    }
    
    removeItemFromCart(GoodsItem) { //удалить из корзины
    }
    
    countTotal(GoodsItem){ //стоимость кол-во товара * цена
    } 
}



const list = new GoodsList();
list.fetchGoods();
list.render();
list.sum();


window.onload = function() { //только с таймаутом получилось убрать ненужную анимацию :(
    setTimeout(f, 100);
    function f(){
    document.getElementsByClassName("preload")[0].classList.remove("preload");
    }
}