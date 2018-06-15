class Products{
    constructor(private name: string){}

    get productName(): string{
        return this.name;
    }
    set productName(name: string){
        this.name = name;
    }
    public logProductName(){
        console.log("product:" + this.productName);
    }
    static onlineBot: string = "@freshproducts";
}
let bot = Products.onlineBot;
console.log("Add our tg-channel " + bot + " to be in touch with our updates!");
