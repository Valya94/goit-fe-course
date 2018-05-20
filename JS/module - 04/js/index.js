'use strict';

function Cashier(name, products) {
  this.name = name;
  this.products = products;
  this.totalPrice = 0;
  this.changeAmount = 0;
  this.customerMoney = 0;

  this.countTotalPrice = function(order) {
    const keys = Object.keys(order);
    for (let key of keys) {
      order[key];
      this.totalPrice += this.products[key] * order[key];
    }
    return this.totalPrice;
  };

  this.getCustomerMoney = function() {
    do {
      this.customerMoney = prompt(
        `Сумма к оплате: ${this.totalPrice}. Кассир: ${this.name}. `,
      );

      if (this.customerMoney === null) {
        return null;
      }

      if (Number.isNaN(Number(this.customerMoney))) {
        alert('Введите сумму!');
      }

      if (Number(this.customerMoney) < this.totalPrice) {
        alert('Недостаточно денег!');
      }

      if (this.totalPrice <= Number(this.customerMoney)) {
        this.customerMoney = Number(this.customerMoney);
        break;
      }
    } while (true);
  };

  this.countChange = function() {
    this.changeAmount = this.customerMoney - this.totalPrice;
  };

  this.reset = function() {
    if (this.totalPrice > 0) {
      this.totalPrice = 0;
    }
    if (this.customerMoney > 0) {
      this.customerMoney = 0;
    }
    if (this.changeAmount > 0) {
      this.changeAmount = 0;
    }
  };

  this.serve = function(order) {
    this.countTotalPrice(order);
    this.getCustomerMoney();
    if (this.customerMoney === null) {
      return alert('Очень жаль, что-то пошло не так. Попробуйте еще раз!');
    }

    this.countChange();
    alert(`Спасибо за покупку, ваша сдача ${this.changeAmount}.`);
    this.reset();
  };
}
const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  pork: 80,
  cheese: 60,
  tea: 20,
  candy: 25,
};

const orderMango = {
  bread: 2,
  milk: 2,
  apples: 1,
  cheese: 1,
};


const cashierMango = new Cashier('Mango', products);
cashierMango.serve(orderMango);
