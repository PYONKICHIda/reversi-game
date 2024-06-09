"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getDice(min = 1, max = 6) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(getDice(10, 15));
console.log(getDice());
