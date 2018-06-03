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

}