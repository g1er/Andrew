// function greeter(person) {
//     return "Hello, " + person;
// }
// var user = "Jane User";
// document.body.innerHTML = greeter(user);
// setTimeout(function () {
//     document.body.innerHTML = greeter(user);
// }, 1000);
// var Main = /** @class */ (function () {
//     function Main() {
//     }
//     Main.prototype.popUp = function () {
//         alert("Hello, World!");
//     };
//     return Main;
// }());
// var main = new Main();
// main.popUp();

var Products = /** @class */ (function () {
    function Products(name) {
        this.name = name;
    }
    Object.defineProperty(Products.prototype, "productName", {
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: true,
        configurable: true
    });
    Products.prototype.logProductName = function () {
        console.log("product:" + this.productName);
    };
    return Products;
}());
///<reference path="product-class.ts" />
var product = new Products("Car");
product.logProductName();
//# sourceMappingURL=app.js.map