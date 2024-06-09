class Item {
    // プロパティ
    private _name: string = ''
    private _stock: number = 0;

    constructor(name: string, stock: number) {
        this.name = name;
        this.stock = stock;
    }
    set name(value: string){
        this._name = value;
    }

    get name(): string{
        return this._name;
    }

    set stock(value: number){
        if(value >= 0) {
            this._stock =value;
        }
        this._stock = value;
    }
    get stock():number {
        return this._stock;
    }


    //メソッド
    buy(count: number): boolean {
        if(count <= this.stock){
            this.stock -= count;
            return true;
        }else{
            return false;
        }
    }
}

let peach: Item = new Item("もも",5);


let grapes: Item = new Item("ぶどう",3);





