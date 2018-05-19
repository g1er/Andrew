class Products{
    constructor(private name){}

    get productName(){
        return this.name;
    }
    set productName(name){
        this.name = name;
    }
    public logProductName(){
        console.log("product:" + this.productName);
    }

}