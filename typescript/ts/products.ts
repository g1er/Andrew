class Products{
    constructor(private name: string){}

    get productName(): string{
        return this.name;
    }
    set productName(name: string){
        this.name = name;
    }
    public logProductName(): any{
        console.log("product:" + this.productName);
    }
    static productType: string = "fruit";
    static logProductType(): any{
        console.log("Current product type: " + this.productType);
    }
}
let prodType = Products.logProductType();