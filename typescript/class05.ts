interface Item{
    name: string;
    price: number;
    getTaxprice(): number;
}

class Food implements Item {
    name: string = "";
    price: number= 0;
    getTaxprice() : number {
        return this.price* 1.08;
    }
}
