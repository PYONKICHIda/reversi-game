"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tax = 1.1;
let add_tax = (price) => {
    return Math.floor(price * tax);
};
console.log(tax);
console.log(add_tax(100));
