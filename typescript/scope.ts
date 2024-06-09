const tax: number = 1.1;
let add_tax = (price: number) => {
    return Math.floor(price * tax);
}

console.log(tax);
console.log(add_tax(100));