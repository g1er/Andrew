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
//# sourceMappingURL=product-class.js.map