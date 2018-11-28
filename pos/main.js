(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".frame {\n  height: 100%;\n}\n\n.list {\n  height: 100%;\n  width: calc(100% - 300px);\n  display: block;\n  padding: 10px;\n}\n\n.checkout {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  padding: 10px;\n  background-color: #fff;\n  color: grey;\n  width: 300px;\n  box-shadow: -1px 1px 7px 0px rgba(0, 0, 0, 0.65);\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"frame\">\n  <app-product-list [products]=\"products\" class=\"list\"></app-product-list>\n  <app-checkout class=\"checkout\"></app-checkout>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _products_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.const */ "./src/app/products.const.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.products = _products_const__WEBPACK_IMPORTED_MODULE_1__["PRODUCTS"];
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./src/app/components/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components__WEBPACK_IMPORTED_MODULE_3__["ProductListComponent"],
                _components__WEBPACK_IMPORTED_MODULE_3__["CheckoutComponent"],
                _components__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [
                _services__WEBPACK_IMPORTED_MODULE_4__["WebsocketService"],
                _services__WEBPACK_IMPORTED_MODULE_4__["CheckoutService"],
                _services__WEBPACK_IMPORTED_MODULE_4__["StatusService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/checkout/checkout.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/checkout/checkout.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item {\n  border: 1px solid grey;\n  border-radius: 3px;\n  margin-bottom: 7px;\n  padding: 7px;\n  cursor: pointer;\n  width: 100%;\n  text-align: left;\n}\n\n.item:hover {\n  background-color: brown;\n  color: white;\n}\n\n.item-name {\n  float: left;\n  width: 150px;\n}\n\n.item-amount {\n  float: left;\n}\n\n.item-total {\n  float: right;\n}\n\n.charge, .new {\n  font-weight: 200;\n  width: 100%;\n  padding: 15px 10px;\n  background-color: #3295fb;\n  color: white;\n  font-size: 20px;\n  border: none;\n  cursor: pointer;\n}\n\n.charge:hover, .new:hover {\n  background-color: #2a639e;\n}\n\n.charge {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.heading {\n  margin-top: 0;\n  font-weight: 200;\n}\n\n.success-message {\n  width: 100%;\n  text-align: center;\n  box-sizing: border-box;\n  padding: 20px;\n  border: 1px solid #005000;\n  border-radius: 5px;\n  color: #005000;\n  background-color: #93ef75;\n}\n"

/***/ }),

/***/ "./src/app/components/checkout/checkout.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/checkout/checkout.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"items\">\n  <h1 class=\"heading\">Current purchase</h1>\n  <hr />\n  <button *ngFor=\"let item of cartItems\"\n          [disabled]=\"status !== 'ready'\"\n          class=\"item clearfix\"\n          (click)=\"removeItem(item.id)\">\n    <div class=\"item-name\">{{item.name}}</div>\n    <div class=\"item-amount\"> x {{item.items}}</div>\n    <div class=\"item-total\">{{item.total | currency: '$'}}</div>\n  </button>\n\n  <div *ngIf=\"(!cartItems || cartItems.length === 0) && status !== 'success'\">\n    No items added\n  </div>\n\n  <div *ngIf=\"status === 'success'\" class=\"success-message\">\n    Purchase successful\n  </div>\n\n\n</div>\n\n<div class=\"total\">\n  <button *ngIf=\"total > 0 && status !== 'success'\" (click)=\"charge()\" class=\"charge\" [disabled]=\"status !== 'ready'\">\n    Charge {{total | currency: '$'}}\n  </button>\n\n  <button class=\"charge\" *ngIf=\"status === 'success'\" (click)=\"new()\">\n    New\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/checkout/checkout.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/checkout/checkout.component.ts ***!
  \***********************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");
/* harmony import */ var src_app_products_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/products.const */ "./src/app/products.const.ts");
/* harmony import */ var src_app_status_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/status.const */ "./src/app/status.const.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(checkoutService, websocketService, statusService) {
        this.checkoutService = checkoutService;
        this.websocketService = websocketService;
        this.statusService = statusService;
        this.statuses = src_app_status_const__WEBPACK_IMPORTED_MODULE_4__["STATUSES"];
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkoutService.checkout.subscribe(function (items) { return _this.updateTotalAndCartItems(items); });
        this.websocketService.socket.pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["retry"])(3)).subscribe(function () { return _this.socketSuccess(); }, function () { return _this.socketError(); }, function () { return console.log('connection completed'); });
        this.statusService.status.subscribe(function (status) { return _this.updateStatus(status); });
    };
    CheckoutComponent.prototype.updateTotalAndCartItems = function (items) {
        this.cartItems = this.updateCheckout(items);
        this.total = this.getTotal(this.cartItems);
    };
    CheckoutComponent.prototype.socketSuccess = function () {
        this.statusService.setStatus(this.statuses.SUCCESS);
        this.checkoutService.clearCart();
    };
    CheckoutComponent.prototype.socketError = function () {
        this.statusService.setStatus(this.statuses.ERROR);
    };
    CheckoutComponent.prototype.updateStatus = function (status) {
        this.status = status;
    };
    CheckoutComponent.prototype.updateCheckout = function (items) {
        return items.map(function (item) {
            var info = src_app_products_const__WEBPACK_IMPORTED_MODULE_3__["PRODUCTS"].find(function (el) { return item.id === el.id; });
            var total = Math.round(100 * info.price * item.items) / 100;
            return Object.assign({}, item, { total: total }, info);
        });
    };
    CheckoutComponent.prototype.getTotal = function (items) {
        return items.reduce(function (total, item) {
            return Math.round(100 * (total + item.total)) / 100;
        }, 0);
    };
    CheckoutComponent.prototype.removeItem = function (id) {
        this.checkoutService.removeFromCart(id);
    };
    CheckoutComponent.prototype.charge = function () {
        this.statusService.setStatus(this.statuses.PENDING);
        this.websocketService.send({ event: 'purchase', amount: this.total });
    };
    CheckoutComponent.prototype.new = function () {
        this.statusService.setStatus(this.statuses.READY);
    };
    CheckoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! ./checkout.component.html */ "./src/app/components/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.css */ "./src/app/components/checkout/checkout.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services__WEBPACK_IMPORTED_MODULE_2__["CheckoutService"],
            src_app_services__WEBPACK_IMPORTED_MODULE_2__["WebsocketService"],
            src_app_services__WEBPACK_IMPORTED_MODULE_2__["StatusService"]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/components/index.ts":
/*!*************************************!*\
  !*** ./src/app/components/index.ts ***!
  \*************************************/
/*! exports provided: CheckoutComponent, ProductListComponent, ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/components/checkout/checkout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_0__["CheckoutComponent"]; });

/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/components/product-list/product-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__["ProductListComponent"]; });

/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product/product.component */ "./src/app/components/product/product.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return _product_product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"]; });






/***/ }),

/***/ "./src/app/components/product-list/product-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/product-list/product-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/product-list/product-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/product-list/product-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"products\">\n  <div *ngFor=\"let product of products\">\n    <app-product [product]=\"product\"></app-product>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/product-list/product-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/product-list/product-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductListComponent = /** @class */ (function () {
    function ProductListComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ProductListComponent.prototype, "products", void 0);
    ProductListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/components/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/components/product-list/product-list.component.css")]
        })
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/components/product/product.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/product/product.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product {\n  border: 1px solid #b2b2b2;\n  background-color: white;\n  border-radius: 3px;\n  padding: 5px;\n  float: left;\n  margin: 5px;\n  min-width: 205px;\n}\n\n.product.disabled {\n  opacity: 0.5;\n}\n\n.product.active:hover {\n  background-color: #2a639e;\n  color: white;\n  cursor: pointer;\n}\n\n.image-wrapper {\n  text-align: center;\n  padding: 20px;\n  height: 100px;\n}\n\n.image-wrapper img {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.summary-wrapper {\n  position: relative;\n  text-align: left;\n}\n\n.name {\n  font-size: 20px;\n  font-weight: 100;\n}\n\n.price {\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    font-weight: 500;\n    font-size: 20px;\n}\n"

/***/ }),

/***/ "./src/app/components/product/product.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/product/product.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"product\" (click)=\"addToCart()\" [disabled]=\"status !== statuses.READY\"\n        [ngClass]=\"{'disabled': status !== statuses.READY, 'active': status === statuses.READY}\">\n  <div class=\"image-wrapper\">\n      <img [src]=\"product?.image\" />\n  </div>\n  <div class=\"summary-wrapper\">\n      <div class=\"name\">{{product?.name}}</div>\n      <div class=\"price\">{{product?.price | currency: '$'}}</div>\n  </div>\n</button>\n"

/***/ }),

/***/ "./src/app/components/product/product.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/product/product.component.ts ***!
  \*********************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");
/* harmony import */ var src_app_status_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/status.const */ "./src/app/status.const.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductComponent = /** @class */ (function () {
    function ProductComponent(checkoutService, statusService) {
        this.checkoutService = checkoutService;
        this.statusService = statusService;
        this.statuses = src_app_status_const__WEBPACK_IMPORTED_MODULE_2__["STATUSES"];
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.statusService.status.subscribe(function (status) {
            _this.status = status;
        });
    };
    ProductComponent.prototype.addToCart = function () {
        this.checkoutService.addToCart(this.product.id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductComponent.prototype, "product", void 0);
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/components/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/components/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services__WEBPACK_IMPORTED_MODULE_1__["CheckoutService"],
            src_app_services__WEBPACK_IMPORTED_MODULE_1__["StatusService"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/products.const.ts":
/*!***********************************!*\
  !*** ./src/app/products.const.ts ***!
  \***********************************/
/*! exports provided: PRODUCTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCTS", function() { return PRODUCTS; });
var PRODUCTS = [
    { id: '1', name: 'Avocado', image: 'assets/avocado.png', price: 5.4 },
    { id: '2', name: 'Chocolate', image: 'assets/chocolate-strawberry.png', price: 6.4 },
    { id: '3', name: 'Frosted', image: 'assets/frosted-coffee.png', price: 4.5 },
    { id: '4', name: 'Green Apple', image: 'assets/green-apple.png', price: 5.8 },
    { id: '5', name: 'Kiwi banana', image: 'assets/kiwi-banana.png', price: 6.7 },
    { id: '6', name: 'Mango banana', image: 'assets/mango-banana.png', price: 4.9 },
    { id: '7', name: 'Melon mint', image: 'assets/melon-mint.png', price: 8.6 },
    { id: '8', name: 'Orange carrot', image: 'assets/orange-carrot.png', price: 12.01 },
    { id: '9', name: 'Raspberry', image: 'assets/rapsberry-banana.png', price: 10.2 },
    { id: '10', name: 'Strawberry', image: 'assets/strawberry.png', price: 11.4 },
    { id: '11', name: 'Vanilla', image: 'assets/vanilla.png', price: 8.3 },
    { id: '12', name: 'Watermelon', image: 'assets/watermelon.png', price: 4.3 }
];


/***/ }),

/***/ "./src/app/services/checkout.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/checkout.service.ts ***!
  \**********************************************/
/*! exports provided: CheckoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutService", function() { return CheckoutService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckoutService = /** @class */ (function () {
    function CheckoutService() {
        this.cart = [];
        this.checkout = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    CheckoutService.prototype.addToCart = function (id) {
        var index = this.cart.findIndex(function (el) { return el.id === id; });
        if (index > -1) {
            this.cart[index].items++;
        }
        else {
            this.cart.push({ id: id, items: 1 });
        }
        this.checkout.next(this.cart);
    };
    CheckoutService.prototype.removeFromCart = function (productId) {
        var index = this.cart.findIndex(function (el) { return el.id === productId; });
        if (index > -1) {
            if (this.cart[index].items > 1) {
                this.cart[index].items--;
            }
            else {
                this.cart.splice(index, 1);
            }
            this.checkout.next(this.cart);
        }
    };
    CheckoutService.prototype.clearCart = function () {
        this.cart = [];
        this.checkout.next(this.cart);
    };
    CheckoutService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CheckoutService);
    return CheckoutService;
}());



/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: CheckoutService, WebsocketService, StatusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checkout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkout.service */ "./src/app/services/checkout.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckoutService", function() { return _checkout_service__WEBPACK_IMPORTED_MODULE_0__["CheckoutService"]; });

/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./websocket.service */ "./src/app/services/websocket.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebsocketService", function() { return _websocket_service__WEBPACK_IMPORTED_MODULE_1__["WebsocketService"]; });

/* harmony import */ var _status_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./status.service */ "./src/app/services/status.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatusService", function() { return _status_service__WEBPACK_IMPORTED_MODULE_2__["StatusService"]; });






/***/ }),

/***/ "./src/app/services/status.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/status.service.ts ***!
  \********************************************/
/*! exports provided: StatusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusService", function() { return StatusService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StatusService = /** @class */ (function () {
    function StatusService() {
        this.status = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('ready');
    }
    StatusService.prototype.setStatus = function (status) {
        this.status.next(status);
    };
    StatusService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], StatusService);
    return StatusService;
}());



/***/ }),

/***/ "./src/app/services/websocket.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/websocket.service.ts ***!
  \***********************************************/
/*! exports provided: WebsocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketService", function() { return WebsocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_websocket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/websocket */ "./node_modules/rxjs/_esm5/webSocket/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WebsocketService = /** @class */ (function () {
    function WebsocketService() {
        var _this = this;
        this.send = function (message) {
            _this.socket.next(message);
        };
        this.socket = Object(rxjs_websocket__WEBPACK_IMPORTED_MODULE_1__["webSocket"])('ws://echo.websocket.org/');
    }
    WebsocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], WebsocketService);
    return WebsocketService;
}());



/***/ }),

/***/ "./src/app/status.const.ts":
/*!*********************************!*\
  !*** ./src/app/status.const.ts ***!
  \*********************************/
/*! exports provided: STATUSES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUSES", function() { return STATUSES; });
var STATUSES = {
    READY: 'ready',
    PENDING: 'pending',
    SUCCESS: 'success',
    ERROR: 'error'
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/m041404/development/pos/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map