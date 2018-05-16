function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane User";
document.body.innerHTML = greeter(user);
setTimeout(function () {
    document.body.innerHTML = greeter(user);
}, 1000);
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.popUp = function () {
        alert("Hello, World!");
    };
    return Main;
}());
var main = new Main();
main.popUp();
///<reference path="product-class.ts" />
var product = new Products("Car");
product.logProductName();
var Cars;
(function (Cars) {
    Cars[Cars["Jaguar"] = 0] = "Jaguar";
    Cars[Cars["Audi"] = 1] = "Audi";
    Cars[Cars["Wolksvagen"] = 2] = "Wolksvagen";
    Cars[Cars["Lada"] = 3] = "Lada";
    Cars[Cars["Mini"] = 4] = "Mini";
})(Cars || (Cars = {}));
;
var carType = Cars.Wolksvagen;
console.log(carType);
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
//# sourceMappingURL=app.js.map