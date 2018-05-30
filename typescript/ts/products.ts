class Products{
    constructor(private name: string){}

    get productName(){
        return this.name;
    }
    set productName(name){
        this.name = name;
    }
    public logProductName(): any{
        console.log("product:" + this.productName);
    }

}