function getDice(min:number = 1,max:number = 6):number{
    return Math.floor(Math.random() * (max-min+1) + min);
}




console.log(getDice(10,15));
console.log(getDice());

