webpackJsonp([1,4],{

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SharedService = (function () {
    function SharedService(_http) {
        this._http = _http;
        this.weatherURL1 = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22";
        this.weatherURL2 = "%2C%20";
        this.weatherURL3 = "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
        this.findMovieURL1 = "https://api.themoviedb.org/3/search/movie?api_key=0d6c3b37000d9f615c55834394f01261&query=";
        this.currencyURL = "http://api.fixer.io/latest?symbols=";
        this.totReqsMade = 0;
    }
    SharedService.prototype.findWeather = function (city, state) {
        this.totReqsMade = this.totReqsMade + 1;
        return this._http.get(this.weatherURL1 + city + this.weatherURL2 + state + this.weatherURL3)
            .map(function (response) {
            {
                return response.json();
            }
            ;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error.json()); });
    };
    SharedService.prototype.findMovie = function (movie) {
        this.totReqsMade = this.totReqsMade + 1;
        return this._http.get(this.findMovieURL1 + movie)
            .map(function (response) {
            {
                return response.json();
            }
            ;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error.json().error); });
    };
    SharedService.prototype.getCurrencyExchRate = function (currency) {
        this.totReqsMade = this.totReqsMade + 1;
        return this._http.get(this.currencyURL + currency)
            .map(function (response) {
            {
                return response.json();
            }
            ;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error.json()); });
    };
    SharedService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], SharedService);
    return SharedService;
    var _a;
}());
//# sourceMappingURL=D:/my-dream-app/src/shared.service.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service__ = __webpack_require__(150);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CurrencyComponent = (function () {
    function CurrencyComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.id_currency = "";
    }
    CurrencyComponent.prototype.ngOnInit = function () {
    };
    CurrencyComponent.prototype.callCurrencyService = function () {
        var _this = this;
        this._sharedService.getCurrencyExchRate(this.id_currency.toUpperCase())
            .subscribe(function (lstresult) {
            _this.base = lstresult.base;
            _this.dated = lstresult.date;
            _this.rate = lstresult.rates[_this.id_currency.toUpperCase()];
        }, function (error) {
            console.log("Error. The callCurrencyService result JSON value is as follows:");
            console.log(error);
        });
    };
    CurrencyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-currency',
            template: __webpack_require__(558),
            styles: []
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service__["a" /* SharedService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_service__["a" /* SharedService */]) === 'function' && _a) || Object])
    ], CurrencyComponent);
    return CurrencyComponent;
    var _a;
}());
//# sourceMappingURL=D:/my-dream-app/src/currency.component.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service__ = __webpack_require__(150);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MovieComponent = (function () {
    function MovieComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.id_movie = "";
        this.mv_Title = "";
        this.mv_Rated = "";
        this.mv_Released = "";
        this.mv_image = "";
        this.mv_Plot = "";
    }
    MovieComponent.prototype.ngOnInit = function () {
    };
    MovieComponent.prototype.callMovieService = function () {
        var _this = this;
        this._sharedService.findMovie(this.id_movie)
            .subscribe(function (lstresult) {
            _this.mv_Title = lstresult["results"][0]["title"];
            _this.mv_Rated = lstresult["results"][0]["vote_count"];
            _this.mv_Released = lstresult["results"][0]["release_date"];
            _this.mv_image = lstresult["results"][0]["poster_path"];
            _this.mv_Plot = lstresult["results"][0]["overview"];
            _this.count = lstresult["total_results"];
        }, function (error) {
            console.log("Error. The findMovie result JSON value is as follows:");
            console.log(error);
        });
    };
    MovieComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-movie',
            template: __webpack_require__(560),
            styles: []
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service__["a" /* SharedService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_service__["a" /* SharedService */]) === 'function' && _a) || Object])
    ], MovieComponent);
    return MovieComponent;
    var _a;
}());
//# sourceMappingURL=D:/my-dream-app/src/movie.component.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service__ = __webpack_require__(150);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WeatherComponent = (function () {
    function WeatherComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.id_city = "";
        this.id_state = "";
        this.op_city = "";
        this.op_region = "";
        this.op_country = "";
        this.op_date = "";
        this.op_text = "";
        this.op_temp = "";
    }
    WeatherComponent.prototype.ngOnInit = function () {
    };
    WeatherComponent.prototype.callWeatherService = function () {
        var _this = this;
        this._sharedService.findWeather(this.id_city, this.id_state)
            .subscribe(function (lstresult) {
            _this.op_city = lstresult["query"]["results"]["channel"]["location"]["city"];
            _this.op_region = lstresult["query"]["results"]["channel"]["location"]["region"];
            _this.op_country = lstresult["query"]["results"]["channel"]["location"]["country"];
            _this.op_date = lstresult["query"]["results"]["channel"]["item"]["condition"]["date"];
            _this.op_text = lstresult["query"]["results"]["channel"]["item"]["condition"]["text"];
            _this.op_temp = lstresult["query"]["results"]["channel"]["item"]["condition"]["temp"];
        }, function (error) {
            console.log("Error. The findWeather result JSON value is as follows:");
            console.log(error);
        });
    };
    WeatherComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-weather',
            template: __webpack_require__(561),
            styles: []
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service__["a" /* SharedService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_service__["a" /* SharedService */]) === 'function' && _a) || Object])
    ], WeatherComponent);
    return WeatherComponent;
    var _a;
}());
//# sourceMappingURL=D:/my-dream-app/src/weather.component.js.map

/***/ }),

/***/ 377:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 377;


/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(500);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=D:/my-dream-app/src/main.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app Works!!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(557),
            styles: [__webpack_require__(556)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/my-dream-app/src/app.component.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_component__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__weather_weather_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__currency_currency_component__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__movie_movie_component__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_service__ = __webpack_require__(150);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_6__weather_weather_component__["a" /* WeatherComponent */],
                __WEBPACK_IMPORTED_MODULE_7__currency_currency_component__["a" /* CurrencyComponent */],
                __WEBPACK_IMPORTED_MODULE_8__movie_movie_component__["a" /* MovieComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routing__["a" /* CONST_ROUTING */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__shared_service__["a" /* SharedService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/my-dream-app/src/app.module.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__currency_currency_component__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__weather_weather_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__movie_movie_component__ = __webpack_require__(333);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONST_ROUTING; });




var MAINMENU_ROUTES = [
    //full : makes sure the path is absolute path
    { path: '', redirectTo: '/weather', pathMatch: 'full' },
    { path: 'weather', component: __WEBPACK_IMPORTED_MODULE_2__weather_weather_component__["a" /* WeatherComponent */] },
    { path: 'movie', component: __WEBPACK_IMPORTED_MODULE_3__movie_movie_component__["a" /* MovieComponent */] },
    { path: 'currency', component: __WEBPACK_IMPORTED_MODULE_1__currency_currency_component__["a" /* CurrencyComponent */] }
];
var CONST_ROUTING = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(MAINMENU_ROUTES);
//# sourceMappingURL=D:/my-dream-app/src/app.routing.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-menu',
            template: __webpack_require__(559),
            styles: []
        }), 
        __metadata('design:paramtypes', [])
    ], MenuComponent);
    return MenuComponent;
}());
//# sourceMappingURL=D:/my-dream-app/src/menu.component.js.map

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/my-dream-app/src/environment.js.map

/***/ }),

/***/ 556:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 557:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>MY OWN SPA</title>\n</head>\n<body>\n  <div class=\"container\">\n    <app-menu></app-menu>\n    <hr>\n    <router-outlet></router-outlet>\n   </div>\n</body>\n</html>"

/***/ }),

/***/ 558:
/***/ (function(module, exports) {

module.exports = "<h2>Currency Exchange Rates</h2>\n<div class=\"col-md-8 col-md-offset-2\">\n <div class=\"form-group\">\n  <input type=\"text\" [(ngModel)]=\"id_currency\" (change)=\"callCurrencyService()\" class=\"form-control\" placeholder=\"Enter Currency Symbol. Example: GBP(,AUD,INR)...\">\n  <br><br>\n  <h3>Rate Details</h3>\n  <br>\n  <p class=\"well lead\">Exchange rate relative to  : {{ this.base }} </p>\n  <p class=\"well lead\">Exchange rate on : {{ this.dated }} </p>\n  <p class=\"well lead\">Exchange rate from {{ id_currency }} is  : {{ this.rate }} </p>\n  <p class=\"text-info\">Total # of all the service requests including Weather, Movie, and Currency is :\n    <span class=\"badge\">{{this._sharedService.totReqsMade}}</span>\n  </p>\n </div>\n</div>"

/***/ }),

/***/ 559:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n   <ul class=\"nav nav-pills\">\n    <li routerLinkActive=\"active\"> <a [routerLink]=\"['/weather']\" >Weather</a></li>\n    <li routerLinkActive=\"active\"> <a [routerLink]=\"['/movie']\" >Movie Details</a></li>\n    <li routerLinkActive=\"active\"> <a [routerLink]=\"['/currency']\" >Currency Rates</a></li>\n   </ul>\n </div>\n</div>"

/***/ }),

/***/ 560:
/***/ (function(module, exports) {

module.exports = "<h2>Open Movie Database</h2>\n<div class=\"col-md-8 col-md-offset-2\">\n <div class=\"form-group\">\n  <input type=\"text\" required [(ngModel)]=\"id_movie\" (change)=\"callMovieService()\" class=\"form-control\" placeholder=\"Enter Movie name ...\">\n  <br><br>\n  <h3>Movie Details</h3>\n  <br>\n \n  <img  class=\"pull-right\" data-src=\"https://image.tmdb.org/t/p/w185_and_h278_bestv2/{{this.mv_image}}\" />\n  \n  <p class=\"well lead col-md-6\">\n      <i> Title :</i> {{ this.mv_Title }} <br>\n      <i> Plot :</i> {{ this.mv_Plot }} <br>\n      \n      <i> Votes :</i> {{ this.mv_Rated }} <br>\n      <i> Release Date :</i> {{ this.mv_Released }} <br>\n      <i> Count</i> : {{ this.count }}\n  </p>\n  <p class=\"text-info col-md-12\">Total # of all the service requests including Weather, Movie, and Currency is :\n      <span class=\"badge\">{{this._sharedService.totReqsMade}}</span>\n  </p>\n </div>\n</div>"

/***/ }),

/***/ 561:
/***/ (function(module, exports) {

module.exports = "<h2>Yahoo! Weather </h2>\n<div class=\"col-md-8 col-md-offset-2\">\n <div class=\"form-group\">\n  <input type=\"text\" [(ngModel)]=\"id_city\" class=\"form-control\" placeholder=\"Enter City name ...\"><br>\n  <input type=\"text\" [(ngModel)]=\"id_state\" class=\"form-control\" placeholder=\"Enter State. Example CA for California ...\"><br>\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"callWeatherService()\">Submit</button>\n  <br><br><br>\n  <br>\n  <p class=\"well lead\">\n    <i>City, State, Country :</i> {{ this.op_city }} {{ this.op_region }} {{ this.op_country }} <br>\n    <i>Current Condition :</i> {{ this.op_text }} <br>\n    <i>Current Temperature :</i> {{ this.op_temp }} <br>\n  </p>\n  <p class=\"text-info\">Total # of all the service requests including Weather, Movie, and Currency is :\n    <span class=\"badge\">{{this._sharedService.totReqsMade}}</span>\n  </p>\n </div>\n</div>"

/***/ }),

/***/ 834:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(378);


/***/ })

},[834]);
//# sourceMappingURL=main.bundle.map