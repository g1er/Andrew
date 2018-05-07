function greeter(person) {
    return "Hello, " + person;
}

let user = "Jane User";

document.body.innerHTML = greeter(user);
setTimeout(function(){
    document.body.innerHTML = greeter(user);
}, 1000);

class Main {
    constructor(){}
    popUp(){
        alert("Hello, World!");
    }
}
let main = new Main();
main.popUp();

///<reference path="product-class.ts" />
var product = new Products("Car");
product.logProductName();