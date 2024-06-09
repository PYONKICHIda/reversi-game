"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Food {
    constructor() {
        this.name = "";
        this.price = 0;
    }
    getTaxprice() {
        return this.price * 1.08;
    }
}
