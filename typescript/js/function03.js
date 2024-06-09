"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getRandomChar(...chars) {
    const index = Math.floor(Math.random() * chars.length + 1);
    return chars[index];
}
console.log(getRandomChar("1", "a", "A", "B", "C"));
