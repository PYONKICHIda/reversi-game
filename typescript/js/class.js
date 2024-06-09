"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    constructor(name, stock) {
        // プロパティ
        this._name = '';
        this._stock = 0;
        this.name = name;
        this.stock = stock;
    }
    set name(value) {
        this._name = value;
    }
    get name() {
        return this._name;
    }
    set stock(value) {
        if (value >= 0) {
            this._stock = value;
        }
        this._stock = value;
    }
    get stock() {
        return this._stock;
    }
    //メソッド
    buy(count) {
        if (count <= this.stock) {
            this.stock -= count;
            return true;
        }
        else {
            return false;
        }
    }
}
let peach = new Item("もも", 5);
let grapes = new Item("ぶどう", 3);
