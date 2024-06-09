"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    constructor() {
        this.name = "";
        this.price = 0;
    }
    getTaxprice() {
        return this.price * 1.1;
    }
}
class Food extends Item {
    constructor() {
        super(...arguments);
        this.limit_date = 0;
    }
    getTaxprice() {
        return this.price * 1.08;
    }
}
const pencil = new Item();
pencil.name = "鉛筆";
pencil.price = 80;
console.log(pencil.getTaxprice());
const peach = new Food();
peach.name = "もも";
peach.limit_date = 10;
peach.price = 150;
console.log(peach.getTaxprice());
