function add1(a: number, b: number): number {
    return a + b;
}
console.log(add1(1,2));

const add2 = function(a: number, b: number): number{
    return a + b;
}
console.log(add2(1,2));

const add3 = (a: number, b: number): number => a + b;
console.log(add3(1,2));