class Item {
    name: string = "";
    price: number = 0;

    getTaxprice(): number {
        return this.price * 1.1;
    }
}

class Food extends Item {
    limit_date: number = 0;

    getTaxprice(): number {
        return this.price * 1.08;
    }
}

const pencil = new Item();
pencil.name = "鉛筆";
pencil.price = 80;
console.log(pencil.getTaxprice());

const peach = new Food();
peach.name = "もも";
peach.limit_date = 10;
peach.price = 150;
console.log(peach.getTaxprice());