abstract class Item {
    mame: string ="";
    price: number = 0;

    abstract getTaxprice(): number ;
}

class Food extends Item{
    getTaxprice() : number {
        return this.price* 1.08;
    }
        
    }

class Stationary extends Item{
    getTaxprice() : number {
        return this.price* 1.1;
    }
}

const peach = new Food();
