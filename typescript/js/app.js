// 4. execise with enum
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
carType = Cars.Lada;
console.log(carType);
// 1. first execise with greeter
function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane User";
if (document.body) {
    document.body.innerHTML = greeter(user);
}
setTimeout(function () {
    document.body.innerHTML = greeter(user);
}, 1000);
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
    Products.onlineBot = "@freshproducts";
    return Products;
}());
var bot = Products.onlineBot;
console.log("Add our tg-channel " + bot + " to be in touch with our updates!");
///<reference path="products.ts" />
// 3. execise with Products class make a call to class in other file
var product = new Products("Car");
product.logProductName();
// 2. execise with classes (renamed Main to TestClass):
var TestClass = /** @class */ (function () {
    function TestClass() {
    }
    TestClass.prototype.popUp = function () {
        alert("Hello, World!");
    };
    return TestClass;
}());
var main = new TestClass();
main.popUp();
//# sourceMappingURL=app.js.map