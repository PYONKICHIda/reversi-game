"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    constructor() {
        this.mame = "";
        this.price = 0;
    }
}
class Food extends Item {
    getTaxprice() {
        return this.price * 1.08;
    }
}
class Stationary extends Item {
    getTaxprice() {
        return this.price * 1.1;
    }
}
const peach = new Food();
