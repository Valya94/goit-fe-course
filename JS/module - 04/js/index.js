'use strict';

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

function Cashier(name = 'manager', products = {}) {
  this.name = name;
  this.products = products;

  this.totalPrice = 0;
  this.changeAmount = 0;
  this.customerMoney = 0;

  this.countTotalPrice = function(order) {
    const keys = Object.keys(order);
    for (let key of keys) {
      this.totalPrice += this.products[key] * order[key];
    }
  };

  this.getCustomerMoney = function() {
    do {
      this.customerMoney = prompt(
        `${'Oбщая сумма покупки составляет:'} ${this.totalPrice}`,
      );

      if (this.customerMoney === null) {
        return null;
      }

      if (this.customerMoney === '') {
        alert('Вы ничего не ввели, введите сумму!');
      }

      if (Number.isNaN(Number(this.customerMoney))) {
        alert('Вы ввели не число! Пробуйте ещё раз!');
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
      alert('Нам очень жаль, что-то пошло не так, попробуйте ещё');
      return; 
    }

    this.countChange();
    alert(`Спасибо за покупку! Ваша сдача: ${this.changeAmount}`);
    this.reset();
  };
}

const cashier = new Cashier('Mango', products);

const order = {
  bread: 2,
  milk: 2,
  apples: 1,
  cheese: 1,
};

cashier.serve(order);