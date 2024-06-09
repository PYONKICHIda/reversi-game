export const tax: number = 1.1
export default abstract class Item {
    name: string ="";
    price: number = 0;

    abstract getTaxprice(): number ;
}
