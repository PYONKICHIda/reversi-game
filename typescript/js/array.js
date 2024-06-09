"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prefecture = [
    '北海道',
    '青森県',
    '岩手県',
    '宮城県',
    '秋田県'
];
//for (let i=0; i<prefecture.length; i++){
//  console.log(prefecture[i]);
//}
for (let name of prefecture) {
    console.log(name);
}
console.table(prefecture);
