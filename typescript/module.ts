import BaseItem,{tax} from './item.js';

class Food extends BaseItem{
    getTaxprice() : number {
        return this.price* 1.08;
    }
}

const peach =new Food();
peach.price = 150;
console.log(peach.getTaxprice());
