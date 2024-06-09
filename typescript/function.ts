
function getDice(): number{
    return Math.floor(Math.random() *6 + 1);
}

function sayHello(){
    console.log("こんにちは");
}
sayHello();

console.log(getDice());
console.log(getDice());
console.log(getDice());