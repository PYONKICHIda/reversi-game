"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const item_js_1 = __importDefault(require("./item.js"));
class Food extends item_js_1.default {
    getTaxprice() {
        return this.price * 1.08;
    }
}
const peach = new Food();
peach.price = 150;
console.log(peach.getTaxprice());
