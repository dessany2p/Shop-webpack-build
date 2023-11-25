var cart;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
/* Обнуление */
*,
*::before,
::after {
  padding: 0;
  margin: 0;
  bottom: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

ul,
ol,
li {
  list-style: none;
}

img {
  vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: inherit;
  font-size: inherit;
}

.wrapper {
  min-height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

._container {
  max-width: 1920px;
  padding: 0 15px;
  margin: 0 auto;
  box-sizing: content-box;
}

.header {
  flex-direction: row;
  margin: 0 auto;
  font-family: PlusJakartaSans, serif;
  font-weight: 800;
  width: 100%;
  padding: 0 15px;
}
.header__logo {
  display: flex;
  align-items: center;
}
@media (max-width: 560px) {
  .header__logo {
    flex-direction: column;
  }
}
.header__container {
  display: flex;
  position: relative;
  min-height: 104px;
  align-items: center;
}
.header__icon {
  max-height: 70px;
  object-fit: cover;
}
.header__text {
  padding-left: 20px;
  color: black;
}
.header__menu {
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 15px;
  padding: 5px 0;
  overflow-wrap: break-word;
}

.menu__list {
  display: flex;
  justify-content: space-around;
  padding: 0;
  width: 100%;
}
@media (max-width: 460px) {
  .menu__list {
    flex-direction: column;
  }
}
.menu__list a {
  color: inherit;
}
.menu__item {
  padding: 7px 10px;
  transition: all ease-in 0.3s;
}
@media (max-width: 460px) {
  .menu__item {
    padding: 3px;
    margin: 0;
  }
}
.menu__item:hover {
  padding: 7px 10px;
  background-color: #f8e6ed;
  outline: 3px solid #7E9BBD;
  transition: all ease-in 0.3s;
}
@media (max-width: 460px) {
  .menu__item:hover {
    padding: 3px 3px;
  }
}
.menu__item:not(:last-child) {
  margin: 0 15px;
}
@media (max-width: 460px) {
  .menu__item:not(:last-child) {
    margin: 0;
  }
}

.pink {
  color: #7E9BBD;
}

.main__content {
  font-weight: 900;
}

.text__content {
  display: flex;
  padding: 20px 0 0 0;
}
@media (max-width: 560px) {
  .text__content {
    display: block;
  }
}

.content__block {
  font-size: 48px;
  line-height: 1;
}
@media (max-width: 560px) {
  .content__block {
    float: left;
    font-size: 40px;
    margin-right: 10px;
  }
}
.content__item {
  font-size: 18px;
  padding: 10px 20px;
  font-weight: normal;
}
@media (max-width: 560px) {
  .content__item {
    padding: 5px 0;
  }
}

.content__cards {
  display: flex;
  height: auto;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
}

.card__item {
  border: 5px solid #7E9BBD;
  width: 260px;
  margin: 30px 5px;
  background-color: #EAEFF2;
}
.card__wrap-img {
  margin: 0 auto;
  padding: 15px;
  max-width: 100%;
  height: 260px;
}
.card__image {
  max-height: auto;
  max-width: 100%;
  object-fit: cover;
}
.card__title {
  display: flex;
  justify-content: center;
  margin: 20px;
  font-size: 22px;
  font-family: PlusJakartaSans, serif;
  font-weight: 600;
}

.card__price {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.btn__buy {
  margin: 5px;
  padding: 3px 5px;
  height: 30px;
}

.added {
  background-color: greenyellow;
  border: 1px solid grey;
  border-radius: 3px;
  margin: 5px;
}

.wrapper {
  min-height: 300px;
  max-width: 1440px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
}

._box {
  max-width: 1110px;
  padding: 0 15px;
  margin: 0 auto;
  box-sizing: content-box;
}

.return__shop {
  float: right;
  margin-right: 10px;
  background-color: #fff;
  border: none;
  padding: 15px 15px;
  transition: all ease-in 0.3s;
  font-family: PlusJakartaSans, serif;
  font-weight: 800;
}

.return__shop:hover {
  background-color: #f8e6ed;
  outline: 3px solid #7E9BBD;
  transition: all ease-in 0.3s;
}

.menu__link {
  color: black;
}

.cart__container {
  width: 100%;
  position: relative;
  margin-top: 70px;
  font-family: PlusJakartaSans;
  font-weight: 700;
  line-height: 36px;
  text-align: center;
}
@media (max-width: 560px) {
  .cart__container {
    line-height: 20px;
    margin-top: 30px;
  }
}

.cart__title {
  margin-left: 120px;
  font-size: 28px;
}
@media (max-width: 560px) {
  .cart__title {
    font-size: 20px;
    margin-left: 10%;
  }
}

.cart__categories {
  display: flex;
  align-items: center;
  width: 1110px;
  height: 60px;
  text-transform: uppercase;
  background-color: #EAEFF2;
  margin-top: 30px;
  max-width: 100%;
}
@media (max-width: 460px) {
  .cart__categories {
    max-height: 40px;
    margin-bottom: 10px;
  }
}

.categories__name {
  font-size: 13px;
  margin: 0 auto;
  line-height: 120%;
  letter-spacing: 2px;
  display: flex;
  max-width: 30%;
}
@media (max-width: 760px) {
  .categories__name {
    font-size: 11px;
    letter-spacing: 1px;
  }
}
@media (max-width: 560px) {
  .categories__name {
    max-width: 10%;
    margin-top: 0;
  }
}
@media (max-width: 460px) {
  .categories__name {
    font-size: 8px;
  }
}

.categories__name:first-child {
  margin-left: 165px;
}
@media (max-width: 760px) {
  .categories__name:first-child {
    margin-left: 110px;
  }
}
@media (max-width: 560px) {
  .categories__name:first-child {
    margin-left: 10%;
  }
}

.categories__name:nth-child(3) {
  margin-right: 18%;
}
@media (max-width: 760px) {
  .categories__name:nth-child(3) {
    margin-right: 8%;
  }
}
@media (max-width: 560px) {
  .categories__name:nth-child(3) {
    margin-right: 15%;
  }
}

.categories__item {
  display: flex;
  position: relative;
}

.sum {
  display: flex;
  float: right;
  margin: 30px;
  font-family: PlusJakartaSans, serif;
  font-weight: normal;
  font-size: 24px;
}
@media (max-width: 560px) {
  .sum {
    margin: 15px 30px 0 0;
    font-size: 20px;
  }
}

.price__product {
  padding: 0 0 15px;
}

.btn__buy {
  margin: 0 0 15px;
}

.categories__image {
  margin: 0 30px;
  padding: 10px;
  height: auto;
  max-width: 100px;
}
@media (max-width: 760px) {
  .categories__image {
    margin: 0 5px;
  }
}
@media (max-width: 560px) {
  .categories__image {
    margin: 0;
    width: 12%;
  }
}
@media (max-width: 560px) {
  .categories__image {
    padding-left: 0;
  }
}

.categories__name-item {
  display: flex;
  align-items: center;
}
@media (max-width: 760px) {
  .categories__name-item {
    font-size: 14px;
    line-height: 1.3;
  }
}
@media (max-width: 560px) {
  .categories__name-item {
    font-size: 13px;
    line-height: 1.2;
    justify-content: center;
  }
}
@media (max-width: 460px) {
  .categories__name-item {
    font-size: 11px;
    line-height: 1;
    margin-left: 3%;
  }
}

.counter {
  display: inline-flex;
  align-items: center;
  column-gap: 7px;
  position: absolute;
  left: 45%;
  top: 0;
}
@media (max-width: 990px) {
  .counter {
    left: 50%;
  }
}
@media (max-width: 760px) {
  .counter {
    left: 55%;
  }
}
@media (max-width: 560px) {
  .counter {
    column-gap: 0px;
    left: 42%;
  }
}
.counter__input {
  flex: 0 0 30px;
}
.counter__input input {
  width: 30px;
  text-align: center;
  font-size: large;
  font-weight: bold;
  background-color: #EAEFF2;
  border-radius: 3px;
}
@media (max-width: 560px) {
  .counter__input input {
    flex: none;
    width: 20px;
    font-weight: normal;
    font-size: 14px;
  }
}
@media (max-width: 460px) {
  .counter__input input {
    width: 20px;
    height: 20px;
  }
}
@media (max-width: 360px) {
  .counter__input input {
    width: 25px;
    height: 20px;
  }
}
.counter__buttons-container {
  display: flex;
  flex-direction: column-reverse;
}
@media (max-width: 560px) {
  .counter__buttons-container {
    flex-direction: row;
  }
}
.counter__button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px;
  border: none;
  cursor: pointer;
  background: #fff;
  color: #ffa703;
  font-size: 20px;
  line-height: 80%;
}
@media (max-width: 560px) {
  .counter__button {
    padding: 0 1px;
    margin: 0 auto;
  }
}
.counter .button__minus.disabled {
  color: #7E9BBD;
}

.categories__price {
  display: flex;
  align-items: center;
  margin-left: 240px;
  font-size: 18px;
  max-width: 25%;
}

.price__item {
  cursor: default;
  position: absolute;
  right: 18%;
  top: 30px;
}
@media (max-width: 760px) {
  .price__item {
    right: 8%;
    font-size: 14px;
  }
}
@media (max-width: 560px) {
  .price__item {
    top: 30%;
    font-size: 15px;
  }
}
@media (max-width: 460px) {
  .price__item {
    top: 25%;
    right: 11%;
  }
}

.categories__close {
  position: absolute;
  right: 3%;
  top: 32px;
  font-weight: 600;
  font-size: 22px;
  color: #7E9BBD;
  cursor: pointer;
}
@media (max-width: 760px) {
  .categories__close {
    top: 5%;
    right: 4%;
  }
}
@media (max-width: 560px) {
  .categories__close {
    font-size: 16px;
  }
}

.btnBuy__conteyner {
  display: flex;
  justify-content: flex-end;
  max-width: 1110px;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
}

#myBtn {
  margin: 5px;
  padding: 3px 5px;
  height: 30px;
  background-color: greenyellow;
  border: 1px solid grey;
  border-radius: 3px;
  display: block;
}

.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.9);
}

.modal-content {
  position: relative;
  background-color: #fefefe;
  margin: 10% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 30%;
}

.close {
  position: absolute;
  top: -5px;
  right: 3px;
  color: #aaa;
  /* float: right; */
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.header-content {
  margin: 0;
  padding-bottom: 20px;
}

#addBtn {
  background-color: rgba(127, 255, 212, 0.5);
  font-size: 18px;
  border: 1px solid rgba(0, 0, 0, 0.9);
  border-radius: 10px;
  margin: 2px 20px;
  cursor: pointer;
  transition: 0.3s;
  padding: 5px;
}

#addBtn:hover {
  background-color: rgba(17, 255, 0, 0.9);
  opacity: 0.9;
  transition: all ease 0.4s;
}

#deleteBtn {
  background-color: rgba(127, 255, 212, 0.5);
  font-size: 18px;
  border: 1px solid rgba(0, 0, 0, 0.9);
  border-radius: 10px;
  margin: 2px 20px;
  cursor: pointer;
  transition: 0.3s;
  padding: 5px;
}

#deleteBtn:hover {
  background-color: rgba(255, 0, 0, 0.9);
  opacity: 0.9;
  transition: all ease 0.4s;
}`, "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/scss/_shop.scss","webpack://./src/scss/_cart.scss"],"names":[],"mappings":"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","sourcesContent":["@charset \"UTF-8\";\n/* Обнуление */\n*,\n*::before,\n::after {\n  padding: 0;\n  margin: 0;\n  bottom: 0;\n  box-sizing: border-box;\n}\n\na {\n  text-decoration: none;\n}\n\nul,\nol,\nli {\n  list-style: none;\n}\n\nimg {\n  vertical-align: top;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: inherit;\n  font-size: inherit;\n}\n\n.wrapper {\n  min-height: 100%;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n}\n\n._container {\n  max-width: 1920px;\n  padding: 0 15px;\n  margin: 0 auto;\n  box-sizing: content-box;\n}\n\n.header {\n  flex-direction: row;\n  margin: 0 auto;\n  font-family: PlusJakartaSans, serif;\n  font-weight: 800;\n  width: 100%;\n  padding: 0 15px;\n}\n.header__logo {\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 560px) {\n  .header__logo {\n    flex-direction: column;\n  }\n}\n.header__container {\n  display: flex;\n  position: relative;\n  min-height: 104px;\n  align-items: center;\n}\n.header__icon {\n  max-height: 70px;\n  object-fit: cover;\n}\n.header__text {\n  padding-left: 20px;\n  color: black;\n}\n.header__menu {\n  display: flex;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  right: 15px;\n  padding: 5px 0;\n  overflow-wrap: break-word;\n}\n\n.menu__list {\n  display: flex;\n  justify-content: space-around;\n  padding: 0;\n  width: 100%;\n}\n@media (max-width: 460px) {\n  .menu__list {\n    flex-direction: column;\n  }\n}\n.menu__list a {\n  color: inherit;\n}\n.menu__item {\n  padding: 7px 10px;\n  transition: all ease-in 0.3s;\n}\n@media (max-width: 460px) {\n  .menu__item {\n    padding: 3px;\n    margin: 0;\n  }\n}\n.menu__item:hover {\n  padding: 7px 10px;\n  background-color: #f8e6ed;\n  outline: 3px solid #7E9BBD;\n  transition: all ease-in 0.3s;\n}\n@media (max-width: 460px) {\n  .menu__item:hover {\n    padding: 3px 3px;\n  }\n}\n.menu__item:not(:last-child) {\n  margin: 0 15px;\n}\n@media (max-width: 460px) {\n  .menu__item:not(:last-child) {\n    margin: 0;\n  }\n}\n\n.pink {\n  color: #7E9BBD;\n}\n\n.main__content {\n  font-weight: 900;\n}\n\n.text__content {\n  display: flex;\n  padding: 20px 0 0 0;\n}\n@media (max-width: 560px) {\n  .text__content {\n    display: block;\n  }\n}\n\n.content__block {\n  font-size: 48px;\n  line-height: 1;\n}\n@media (max-width: 560px) {\n  .content__block {\n    float: left;\n    font-size: 40px;\n    margin-right: 10px;\n  }\n}\n.content__item {\n  font-size: 18px;\n  padding: 10px 20px;\n  font-weight: normal;\n}\n@media (max-width: 560px) {\n  .content__item {\n    padding: 5px 0;\n  }\n}\n\n.content__cards {\n  display: flex;\n  height: auto;\n  width: 100%;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  margin: 0 auto;\n}\n\n.card__item {\n  border: 5px solid #7E9BBD;\n  width: 260px;\n  margin: 30px 5px;\n  background-color: #EAEFF2;\n}\n.card__wrap-img {\n  margin: 0 auto;\n  padding: 15px;\n  max-width: 100%;\n  height: 260px;\n}\n.card__image {\n  max-height: auto;\n  max-width: 100%;\n  object-fit: cover;\n}\n.card__title {\n  display: flex;\n  justify-content: center;\n  margin: 20px;\n  font-size: 22px;\n  font-family: PlusJakartaSans, serif;\n  font-weight: 600;\n}\n\n.card__price {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.btn__buy {\n  margin: 5px;\n  padding: 3px 5px;\n  height: 30px;\n}\n\n.added {\n  background-color: greenyellow;\n  border: 1px solid grey;\n  border-radius: 3px;\n  margin: 5px;\n}\n\n.wrapper {\n  min-height: 300px;\n  max-width: 1440px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  padding: 0 10px;\n}\n\n._box {\n  max-width: 1110px;\n  padding: 0 15px;\n  margin: 0 auto;\n  box-sizing: content-box;\n}\n\n.return__shop {\n  float: right;\n  margin-right: 10px;\n  background-color: #fff;\n  border: none;\n  padding: 15px 15px;\n  transition: all ease-in 0.3s;\n  font-family: PlusJakartaSans, serif;\n  font-weight: 800;\n}\n\n.return__shop:hover {\n  background-color: #f8e6ed;\n  outline: 3px solid #7E9BBD;\n  transition: all ease-in 0.3s;\n}\n\n.menu__link {\n  color: black;\n}\n\n.cart__container {\n  width: 100%;\n  position: relative;\n  margin-top: 70px;\n  font-family: PlusJakartaSans;\n  font-weight: 700;\n  line-height: 36px;\n  text-align: center;\n}\n@media (max-width: 560px) {\n  .cart__container {\n    line-height: 20px;\n    margin-top: 30px;\n  }\n}\n\n.cart__title {\n  margin-left: 120px;\n  font-size: 28px;\n}\n@media (max-width: 560px) {\n  .cart__title {\n    font-size: 20px;\n    margin-left: 10%;\n  }\n}\n\n.cart__categories {\n  display: flex;\n  align-items: center;\n  width: 1110px;\n  height: 60px;\n  text-transform: uppercase;\n  background-color: #EAEFF2;\n  margin-top: 30px;\n  max-width: 100%;\n}\n@media (max-width: 460px) {\n  .cart__categories {\n    max-height: 40px;\n    margin-bottom: 10px;\n  }\n}\n\n.categories__name {\n  font-size: 13px;\n  margin: 0 auto;\n  line-height: 120%;\n  letter-spacing: 2px;\n  display: flex;\n  max-width: 30%;\n}\n@media (max-width: 760px) {\n  .categories__name {\n    font-size: 11px;\n    letter-spacing: 1px;\n  }\n}\n@media (max-width: 560px) {\n  .categories__name {\n    max-width: 10%;\n    margin-top: 0;\n  }\n}\n@media (max-width: 460px) {\n  .categories__name {\n    font-size: 8px;\n  }\n}\n\n.categories__name:first-child {\n  margin-left: 165px;\n}\n@media (max-width: 760px) {\n  .categories__name:first-child {\n    margin-left: 110px;\n  }\n}\n@media (max-width: 560px) {\n  .categories__name:first-child {\n    margin-left: 10%;\n  }\n}\n\n.categories__name:nth-child(3) {\n  margin-right: 18%;\n}\n@media (max-width: 760px) {\n  .categories__name:nth-child(3) {\n    margin-right: 8%;\n  }\n}\n@media (max-width: 560px) {\n  .categories__name:nth-child(3) {\n    margin-right: 15%;\n  }\n}\n\n.categories__item {\n  display: flex;\n  position: relative;\n}\n\n.sum {\n  display: flex;\n  float: right;\n  margin: 30px;\n  font-family: PlusJakartaSans, serif;\n  font-weight: normal;\n  font-size: 24px;\n}\n@media (max-width: 560px) {\n  .sum {\n    margin: 15px 30px 0 0;\n    font-size: 20px;\n  }\n}\n\n.price__product {\n  padding: 0 0 15px;\n}\n\n.btn__buy {\n  margin: 0 0 15px;\n}\n\n.categories__image {\n  margin: 0 30px;\n  padding: 10px;\n  height: auto;\n  max-width: 100px;\n}\n@media (max-width: 760px) {\n  .categories__image {\n    margin: 0 5px;\n  }\n}\n@media (max-width: 560px) {\n  .categories__image {\n    margin: 0;\n    width: 12%;\n  }\n}\n@media (max-width: 560px) {\n  .categories__image {\n    padding-left: 0;\n  }\n}\n\n.categories__name-item {\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 760px) {\n  .categories__name-item {\n    font-size: 14px;\n    line-height: 1.3;\n  }\n}\n@media (max-width: 560px) {\n  .categories__name-item {\n    font-size: 13px;\n    line-height: 1.2;\n    justify-content: center;\n  }\n}\n@media (max-width: 460px) {\n  .categories__name-item {\n    font-size: 11px;\n    line-height: 1;\n    margin-left: 3%;\n  }\n}\n\n.counter {\n  display: inline-flex;\n  align-items: center;\n  column-gap: 7px;\n  position: absolute;\n  left: 45%;\n  top: 0;\n}\n@media (max-width: 990px) {\n  .counter {\n    left: 50%;\n  }\n}\n@media (max-width: 760px) {\n  .counter {\n    left: 55%;\n  }\n}\n@media (max-width: 560px) {\n  .counter {\n    column-gap: 0px;\n    left: 42%;\n  }\n}\n.counter__input {\n  flex: 0 0 30px;\n}\n.counter__input input {\n  width: 30px;\n  text-align: center;\n  font-size: large;\n  font-weight: bold;\n  background-color: #EAEFF2;\n  border-radius: 3px;\n}\n@media (max-width: 560px) {\n  .counter__input input {\n    flex: none;\n    width: 20px;\n    font-weight: normal;\n    font-size: 14px;\n  }\n}\n@media (max-width: 460px) {\n  .counter__input input {\n    width: 20px;\n    height: 20px;\n  }\n}\n@media (max-width: 360px) {\n  .counter__input input {\n    width: 25px;\n    height: 20px;\n  }\n}\n.counter__buttons-container {\n  display: flex;\n  flex-direction: column-reverse;\n}\n@media (max-width: 560px) {\n  .counter__buttons-container {\n    flex-direction: row;\n  }\n}\n.counter__button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 2px;\n  border: none;\n  cursor: pointer;\n  background: #fff;\n  color: #ffa703;\n  font-size: 20px;\n  line-height: 80%;\n}\n@media (max-width: 560px) {\n  .counter__button {\n    padding: 0 1px;\n    margin: 0 auto;\n  }\n}\n.counter .button__minus.disabled {\n  color: #7E9BBD;\n}\n\n.categories__price {\n  display: flex;\n  align-items: center;\n  margin-left: 240px;\n  font-size: 18px;\n  max-width: 25%;\n}\n\n.price__item {\n  cursor: default;\n  position: absolute;\n  right: 18%;\n  top: 30px;\n}\n@media (max-width: 760px) {\n  .price__item {\n    right: 8%;\n    font-size: 14px;\n  }\n}\n@media (max-width: 560px) {\n  .price__item {\n    top: 30%;\n    font-size: 15px;\n  }\n}\n@media (max-width: 460px) {\n  .price__item {\n    top: 25%;\n    right: 11%;\n  }\n}\n\n.categories__close {\n  position: absolute;\n  right: 3%;\n  top: 32px;\n  font-weight: 600;\n  font-size: 22px;\n  color: #7E9BBD;\n  cursor: pointer;\n}\n@media (max-width: 760px) {\n  .categories__close {\n    top: 5%;\n    right: 4%;\n  }\n}\n@media (max-width: 560px) {\n  .categories__close {\n    font-size: 16px;\n  }\n}\n\n.btnBuy__conteyner {\n  display: flex;\n  justify-content: flex-end;\n  max-width: 1110px;\n  margin: 0 auto;\n  overflow: hidden;\n  display: flex;\n}\n\n#myBtn {\n  margin: 5px;\n  padding: 3px 5px;\n  height: 30px;\n  background-color: greenyellow;\n  border: 1px solid grey;\n  border-radius: 3px;\n  display: block;\n}\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.9);\n}\n\n.modal-content {\n  position: relative;\n  background-color: #fefefe;\n  margin: 10% auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 30%;\n}\n\n.close {\n  position: absolute;\n  top: -5px;\n  right: 3px;\n  color: #aaa;\n  /* float: right; */\n  font-size: 28px;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.header-content {\n  margin: 0;\n  padding-bottom: 20px;\n}\n\n#addBtn {\n  background-color: rgba(127, 255, 212, 0.5);\n  font-size: 18px;\n  border: 1px solid rgba(0, 0, 0, 0.9);\n  border-radius: 10px;\n  margin: 2px 20px;\n  cursor: pointer;\n  transition: 0.3s;\n  padding: 5px;\n}\n\n#addBtn:hover {\n  background-color: rgba(17, 255, 0, 0.9);\n  opacity: 0.9;\n  transition: all ease 0.4s;\n}\n\n#deleteBtn {\n  background-color: rgba(127, 255, 212, 0.5);\n  font-size: 18px;\n  border: 1px solid rgba(0, 0, 0, 0.9);\n  border-radius: 10px;\n  margin: 2px 20px;\n  cursor: pointer;\n  transition: 0.3s;\n  padding: 5px;\n}\n\n#deleteBtn:hover {\n  background-color: rgba(255, 0, 0, 0.9);\n  opacity: 0.9;\n  transition: all ease 0.4s;\n}","/* Обнуление */\r\n*,\r\n*::before,\r\n::after {\r\n   padding: 0;\r\n   margin: 0;\r\n   bottom: 0;\r\n   box-sizing: border-box;\r\n}\r\n\r\na {\r\n   text-decoration: none;\r\n}\r\n\r\nul,\r\nol,\r\nli {\r\n   list-style: none;\r\n}\r\n\r\nimg {\r\n   vertical-align: top;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n   font-weight: inherit;\r\n   font-size: inherit;\r\n}\r\n\r\n.wrapper {\r\n   min-height: 100%;\r\n   overflow: hidden;\r\n   display: flex;\r\n   flex-direction: column;\r\n   margin: 0 auto;\r\n}\r\n\r\n._container {\r\n   max-width: 1920px;\r\n   padding: 0 15px;\r\n   margin: 0 auto;\r\n   box-sizing: content-box;\r\n}\r\n\r\n.header {\r\n   flex-direction: row;\r\n   margin: 0 auto;\r\n   font-family: PlusJakartaSans, serif;\r\n   font-weight: 800;\r\n   width: 100%;\r\n   padding: 0 15px;\r\n   // .header_logo\r\n   &__logo {\r\n      display: flex;\r\n      align-items: center;\r\n      @media (max-width:560px) {\r\n         flex-direction: column;\r\n      }\r\n   }\r\n   // .header__container\r\n   &__container {\r\n      display: flex;\r\n      position: relative;\r\n      min-height: 104px;\r\n      align-items: center;\r\n   }\r\n\r\n   // .header__icon\r\n   &__icon {\r\n      max-height: 70px;\r\n      object-fit: cover;\r\n   }\r\n\r\n   // .header__text\r\n   &__text {\r\n      padding-left: 20px;\r\n      color: black;\r\n   }\r\n\r\n   // .header__menu\r\n   &__menu {\r\n      display: flex;\r\n      align-items: center;\r\n      position: absolute;\r\n      top: 0;\r\n      right: 15px;\r\n      padding: 5px 0;\r\n      overflow-wrap: break-word;\r\n   }\r\n}\r\n\r\n\r\n.menu {\r\n   \r\n   \r\n   // .menu__list\r\n\r\n   &__list {\r\n      display: flex;\r\n      justify-content: space-around;\r\n      padding: 0;\r\n      width: 100%;\r\n      @media (max-width: 460px) {\r\n         flex-direction: column;\r\n      }\r\n\r\n      a {\r\n         color: inherit;\r\n      }\r\n   }\r\n\r\n   // .menu__item\r\n      &__item {\r\n         padding: 7px 10px;\r\n         transition: all ease-in 0.3s;\r\n         @media (max-width: 460px) {\r\n               padding: 3px;\r\n               margin: 0;\r\n            }\r\n      }\r\n      &__item:hover {\r\n         padding: 7px 10px;\r\n         background-color: #f8e6ed;\r\n         outline: 3px solid #7E9BBD;\r\n         transition: all ease-in 0.3s;\r\n         @media (max-width: 460px) {\r\n               padding: 3px 3px;\r\n            }\r\n      }\r\n\r\n   &__item:not(:last-child) {\r\n      margin: 0 15px;\r\n      @media (max-width: 460px) {\r\n            margin: 0;\r\n         }\r\n   }\r\n\r\n   // .menu__shop\r\n   // &__link {}\r\n}\r\n\r\n.pink {\r\n   color: #7E9BBD;\r\n}\r\n\r\n.main {\r\n   // .main__content\r\n   &__content {\r\n      font-weight: 900;\r\n   }\r\n}\r\n\r\n.text {\r\n\r\n   // .text__content\r\n   &__content {\r\n      display: flex;\r\n      padding: 20px 0 0 0;\r\n      @media (max-width: 560px) {\r\n            display: block;\r\n         }\r\n   }\r\n}\r\n\r\n\r\n.content {\r\n\r\n   // .content__block\r\n   &__block {\r\n      font-size: 48px;\r\n      line-height: 1;\r\n      @media (max-width: 560px) {\r\n         float: left;\r\n         font-size: 40px;\r\n         margin-right: 10px;\r\n      }\r\n   }\r\n\r\n   // .content__header\r\n   // &__header {}\r\n\r\n   // .content__item\r\n   &__item {\r\n      font-size: 18px;\r\n      padding: 10px 20px;\r\n      font-weight: normal;\r\n      @media (max-width: 560px) {\r\n            padding: 5px 0;\r\n         }\r\n   }\r\n}\r\n\r\n.content__cards {\r\n      display: flex;\r\n      height: auto;\r\n      width: 100%;\r\n      justify-content: space-between;\r\n      flex-wrap: wrap;\r\n      margin: 0 auto;\r\n}\r\n\r\n\r\n\r\n.card {\r\n\r\n   // .card__item\r\n\r\n   &__item {\r\n      border: 5px solid #7E9BBD;\r\n      width: 260px;\r\n      margin: 30px 5px;\r\n      background-color: #EAEFF2;\r\n   } \r\n\r\n   &__wrap-img {\r\n      margin: 0 auto;\r\n      padding: 15px;\r\n      max-width: 100%;\r\n      height: 260px;\r\n      \r\n   }\r\n   // &__wrap-title {}\r\n   // .card__image\r\n\r\n   &__image {\r\n      max-height: auto;\r\n      max-width: 100%;\r\n      object-fit: cover;\r\n   }\r\n\r\n   // .card__title\r\n\r\n   &__title {\r\n      display: flex;\r\n      justify-content: center;\r\n      margin: 20px;\r\n      font-size: 22px;\r\n      font-family: PlusJakartaSans, serif;\r\n      font-weight: 600;\r\n   }\r\n}\r\n\r\n.card {\r\n\r\n   // .card__price\r\n\r\n   &__price {\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: space-around\r\n   }\r\n}\r\n\r\n.price {\r\n\r\n   // .price__product\r\n\r\n   &__product {}\r\n}\r\n\r\n.btn {\r\n\r\n   // .btn__buy\r\n\r\n   &__buy {\r\n      margin: 5px;\r\n      padding: 3px 5px;\r\n      height: 30px\r\n   }\r\n}\r\n\r\n.added {\r\n   background-color: greenyellow;\r\n   border: 1px solid grey;\r\n   border-radius: 3px;\r\n   margin: 5px;\r\n}\r\n\r\n// .input_right>input[type=text] {\r\n//    background-color: #EAEFF2;\r\n//    width: 20px;\r\n   \r\n// }\r\n\r\n\r\n// .counter-shop {\r\n//    display: inline-flex;\r\n//    align-items: center;\r\n//    column-gap: 7px;\r\n//    position: relative;\r\n// }\r\n\r\n// .input_right {\r\n//    flex: 0 0 30px;\r\n//    text-align: center;\r\n//    margin: -15% 0;\r\n//    width: 20px;\r\n// }\r\n\r\n\r\n",".wrapper {\r\n   min-height: 300px;\r\n   max-width: 1440px;\r\n   overflow: hidden;\r\n   display: flex;\r\n   flex-direction: column;\r\n   padding: 0 10px;\r\n}\r\n\r\n._box {\r\n   max-width: 1110px;\r\n   padding: 0 15px;\r\n   margin: 0 auto;\r\n   box-sizing: content-box;\r\n}\r\n\r\n.return__shop {\r\n   float: right;\r\n   margin-right: 10px;\r\n   background-color: #fff;\r\n   border: none;\r\n\r\n   padding: 15px 15px;\r\n   transition: all ease-in 0.3s;\r\n   font-family: PlusJakartaSans, serif;\r\n   font-weight: 800;\r\n}\r\n\r\n.return__shop:hover {\r\n   background-color: #f8e6ed;\r\n   outline: 3px solid #7E9BBD;\r\n   transition: all ease-in 0.3s;\r\n}\r\n\r\n.menu__link {\r\n   color: black;\r\n}\r\n\r\n.cart__container {\r\n   width: 100%;\r\n   position: relative;\r\n   margin-top: 70px;\r\n   font-family: PlusJakartaSans;\r\n   font-weight: 700;\r\n   line-height: 36px;\r\n   text-align: center;\r\n\r\n      @media (max-width:560px) {\r\n            line-height: 20px;\r\n            margin-top: 30px;\r\n      }\r\n}\r\n\r\n.cart__title {\r\n   margin-left: 120px;\r\n   font-size: 28px;\r\n   @media (max-width:560px) {\r\n      font-size: 20px;\r\n      margin-left: 10%;\r\n   }\r\n}\r\n\r\n.cart__categories {\r\n      display: flex;\r\n      align-items: center;\r\n      width: 1110px;\r\n      height: 60px;\r\n      text-transform: uppercase;\r\n      background-color: #EAEFF2;\r\n      margin-top: 30px;\r\n      max-width: 100%;\r\n\r\n      @media (max-width:460px) {\r\n            max-height: 40px;\r\n            margin-bottom: 10px;\r\n         }\r\n   }\r\n\r\n.categories__name {\r\n   font-size: 13px;\r\n   margin: 0 auto;\r\n   line-height: 120%;\r\n   letter-spacing: 2px;\r\n   display: flex;\r\n   max-width: 30%;\r\n\r\n      @media (max-width:760px) {\r\n         font-size: 11px;\r\n         letter-spacing: 1px;\r\n      }\r\n         @media (max-width: 560px) {\r\n            max-width: 10%;\r\n            margin-top: 0;\r\n         }\r\n            @media (max-width:460px) {\r\n               font-size: 8px;\r\n            }\r\n}\r\n\r\n.categories__name:first-child {\r\n   margin-left: 165px;\r\n   @media (max-width:760px) {\r\n      margin-left: 110px;\r\n   }\r\n      @media (max-width: 560px) {\r\n         margin-left: 10%;\r\n      }\r\n}\r\n\r\n.categories__name:nth-child(3) {\r\n   margin-right: 18%;\r\n   @media (max-width: 760px) {\r\n      margin-right: 8%;\r\n   }\r\n      @media (max-width: 560px) {\r\n         margin-right: 15%;\r\n      }\r\n}\r\n\r\n.categories__item {\r\n   display: flex;\r\n   position: relative;\r\n}\r\n\r\n.sum {\r\n   display: flex;\r\n   float: right;\r\n   margin: 30px;\r\n   font-family: PlusJakartaSans, serif;\r\n   font-weight: normal;\r\n   font-size: 24px;\r\n   @media (max-width: 560px) {\r\n         margin: 15px 30px 0 0;\r\n         font-size: 20px;\r\n      }\r\n}\r\n\r\n.price__product {\r\n   padding:  0 0 15px\r\n}\r\n.btn__buy {\r\n   margin: 0 0 15px;\r\n}\r\n.categories__image {\r\n   margin: 0 30px;\r\n   padding: 10px;\r\n   height: auto;\r\n   max-width: 100px;\r\n\r\n   @media (max-width: 760px) {\r\n      margin: 0 5px;\r\n   }\r\n      @media (max-width: 560px) {\r\n         margin: 0;\r\n         width: 12%;\r\n      }\r\n         @media (max-width: 560px) {\r\n            padding-left: 0;\r\n         }\r\n}\r\n\r\n.categories__name-item {\r\n   display: flex;\r\n   align-items: center;\r\n\r\n   @media (max-width: 760px) {\r\n         font-size: 14px;\r\n         line-height: 1.3;\r\n   }\r\n      @media (max-width: 560px) {\r\n         font-size: 13px;\r\n         line-height: 1.2;\r\n         justify-content: center;;\r\n      }\r\n         @media (max-width:460px) {\r\n            font-size: 11px;\r\n            line-height: 1;\r\n            margin-left: 3%;\r\n         }\r\n}\r\n\r\n\r\n\r\n.counter {\r\n   display: inline-flex;\r\n   align-items: center;\r\n   column-gap: 7px;\r\n   position: absolute;\r\n   left: 45%;\r\n   top: 0;\r\n\r\n   @media (max-width: 990px) {\r\n      left: 50%;\r\n   }\r\n      @media (max-width: 760px) {\r\n         left: 55%;\r\n      }\r\n         @media (max-width: 560px) {\r\n            column-gap: 0px;\r\n            left: 42%;\r\n         }\r\n         // @media (max-width: 360px) {\r\n         //    left: 45%;\r\n         // }\r\n\r\n   &__input {\r\n      flex: 0 0 30px;\r\n      input {\r\n      width: 30px;\r\n      text-align: center;\r\n      font-size: large;\r\n      font-weight: bold;\r\n      background-color: #EAEFF2;\r\n      border-radius: 3px;\r\n\r\n         @media (max-width: 560px) {\r\n               flex: none;\r\n               width: 20px;\r\n               font-weight: normal;\r\n               font-size: 14px;\r\n         }\r\n            @media (max-width:460px) {\r\n               width: 20px;\r\n               height: 20px;\r\n            }\r\n         @media (max-width:360px) {\r\n         width: 25px;\r\n         height: 20px;\r\n         }\r\n      }\r\n   }\r\n   // .counter__buttons-container\r\n\r\n   &__buttons-container {\r\n      display: flex;\r\n      flex-direction: column-reverse;\r\n      @media (max-width: 560px) {\r\n            flex-direction: row;\r\n         }\r\n   }\r\n   // .counter__button\r\n   &__button {\r\n\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      margin: 2px;\r\n      border: none;\r\n      cursor: pointer;\r\n      background: #fff;\r\n      color: #ffa703;\r\n      font-size: 20px;\r\n      line-height: 80%;\r\n\r\n         @media (max-width: 560px) {\r\n               padding: 0 1px;\r\n               margin: 0 auto;\r\n         }\r\n   }\r\n\r\n\r\n   .button {\r\n      // .button__minus\r\n      &__minus {\r\n         &.disabled {\r\n            color: #7E9BBD;\r\n         }\r\n      }\r\n      // .button__plus\r\n      // &__plus {}\r\n   }\r\n}\r\n\r\n.categories__price {\r\n   display: flex;\r\n   align-items: center;\r\n   margin-left: 240px;\r\n   font-size: 18px;\r\n   max-width: 25%;\r\n}\r\n\r\n.price__item {\r\n   cursor: default;\r\n   position: absolute;\r\n   right: 18%;\r\n   top: 30px;\r\n      @media (max-width: 760px) {\r\n         right: 8%;\r\n         font-size: 14px;\r\n      }\r\n         @media (max-width: 560px) {\r\n            top: 30%;\r\n            font-size: 15px;\r\n         }\r\n            @media (max-width:460px) {\r\n                  top: 25%;\r\n                  right: 11%;\r\n            }\r\n}\r\n\r\n.categories__close {\r\n   position: absolute;\r\n   right: 3%;\r\n   top: 32px;\r\n   font-weight: 600;\r\n   font-size: 22px;\r\n   color: #7E9BBD;\r\n   cursor: pointer;\r\n   \r\n      @media (max-width: 760px) {\r\n            top: 5%;\r\n            right: 4%;\r\n      }\r\n         @media (max-width: 560px) {\r\n            font-size: 16px;\r\n         }\r\n}\r\n\r\n.btnBuy__conteyner{\r\n   display: flex;\r\n   justify-content: flex-end;\r\n   max-width: 1110px;\r\n   margin: 0 auto;\r\n      overflow: hidden;\r\n      display: flex;\r\n}\r\n\r\n#myBtn{\r\n   margin: 5px;\r\n   padding: 3px 5px;\r\n   height: 30px;\r\n   background-color: greenyellow;\r\n   border: 1px solid grey;\r\n   border-radius: 3px;\r\n   display: block;\r\n}\r\n\r\n.modal {\r\n   display: none;\r\n   position: fixed;\r\n   z-index: 1;\r\n   left: 0;\r\n   top: 0;\r\n   width: 100%;\r\n   height: 100%;\r\n   overflow: auto;\r\n   background-color: rgba(0, 0, 0, 0.9);\r\n}\r\n\r\n.modal-content {\r\n   position: relative;\r\n   background-color: #fefefe;\r\n   margin: 10% auto;\r\n   padding: 20px;\r\n   border: 1px solid #888;\r\n   width: 30%;\r\n}\r\n\r\n.close {\r\n   position: absolute;\r\n   top: -5px;\r\n   right: 3px;\r\n   color: #aaa;\r\n   /* float: right; */\r\n   font-size: 28px;\r\n   font-weight: bold;\r\n   cursor: pointer;\r\n}\r\n\r\n.header-content {\r\n   margin: 0;\r\n   padding-bottom: 20px;\r\n}\r\n\r\n#addBtn {\r\n   background-color: rgba(127, 255, 212, 0.5);\r\n   font-size: 18px;\r\n   border: 1px solid rgba(0, 0, 0, 0.9);\r\n   border-radius: 10px;\r\n   margin: 2px 20px;\r\n   cursor: pointer;\r\n   transition: .3s;\r\n   // height: 25px;\r\n   padding: 5px;\r\n}\r\n\r\n#addBtn:hover {\r\n   background-color: rgba(17, 255, 0, 0.9);\r\n   opacity: 0.9;\r\n   transition: all ease 0.4s;\r\n}\r\n\r\n#deleteBtn {\r\n   background-color: rgba(127, 255, 212, 0.5);\r\n   font-size: 18px;\r\n   border: 1px solid rgba(0, 0, 0, 0.9);\r\n   border-radius: 10px;\r\n   margin: 2px 20px;\r\n   cursor: pointer;\r\n   transition: .3s;\r\n   // height: 25px;\r\n   padding: 5px;\r\n}\r\n\r\n#deleteBtn:hover {\r\n   background-color: rgba(255, 0, 0, 0.9);\r\n   opacity: 0.9;\r\n   transition: all ease 0.4s;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/cart.js":
/*!*********************!*\
  !*** ./src/cart.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ b)
/* harmony export */ });
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _helpersJS___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpersJS/Модальное окошко */ "./src/helpersJS/Модальное окошко.js");
/* harmony import */ var _helpersJS_helperCart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpersJS/helperCart */ "./src/helpersJS/helperCart.js");
// cart.html = Корзина

// Импорт стилей и вспомогательных функций.






let b = JSON.parse(localStorage.getItem('cart'));

// const cartStorage = JSON.parse(localStorage.getItem('cart') || '[]')
// const newCard = document.querySelector('.add__cards')


// Подсчет стоимости всех товаров.
function totalCount() {
   let sum = 0;
   const totalAll = document.querySelector(".sum");
   const valueCartsCount = getCartsContents()

   for (let item of valueCartsCount) {
      sum += (Number(item.cartPrice.slice(0, length - 5)) * item.cartCount)
   }
   totalAll.textContent = `${sum} руб.`
}
// totalCount()


function countClicks() {
   let counters = document.querySelectorAll('[data-counter]');
   counters.forEach(counter => {
      counter.addEventListener('click', e => {
         const target = e.target;
         let value = parseInt(target.closest('.counter').querySelector('input').value);
         let c;
         if (target.closest('.counter__button')) {
            for (let item of b) {
               let trueItemId = (item.currentId === target.parentNode.parentNode.parentNode.dataset.id);
               let currId = target.parentNode.parentNode.parentNode.dataset.id;
               let costPrice = target.parentNode.parentNode.parentNode.children[3].children[0];
               if (target.classList.contains('button__plus')) {

                  if (trueItemId) {
                     if (item.cartCount <= 0 || item.cartCount > 1) {
                        target.closest('.counter').querySelector('.button__minus').classList.remove('disabled');
                        value += 1;
                        item.cartCount += 1;

                        target.closest('.counter').querySelector('input').value = value;
                        c = Number(item.cartPrice.slice(0, length - 5)) * item.cartCount;

                        costPrice.innerHTML = `${c} руб.`;

                        changedItemLocalStorage(currId, item.cartCount)
                        totalCount(c)
                     }
                     else {
                        value++;
                        item.cartCount++
                        target.closest('.counter').querySelector('input').value = value;
                        c = Number(item.cartPrice.slice(0, length - 5)) * item.cartCount;

                        costPrice.innerHTML = `${c} руб.`;

                        changedItemLocalStorage(currId, item.cartCount)
                        totalCount(c)
                     }
                  }
               }
               if (target.classList.contains('button__minus')) {
                  if (trueItemId) {
                     if (item.cartCount <= 0) {
                        target.closest('.counter').querySelector('.button__minus').classList.add('disabled');
                        value = 0;
                        item.cartCount = 0;
                        c = Number(item.cartPrice.slice(0, length - 5)) * item.cartCount;
                        changedItemLocalStorage(currId, item.cartCount)
                        totalCount(c)
                     } else {
                        value--;
                        item.cartCount--
                        target.closest('.counter').querySelector('input').value = value;
                        c = Number(item.cartPrice.slice(0, length - 5)) * item.cartCount;

                        costPrice.innerHTML = `${c} руб.`;

                        changedItemLocalStorage(currId, item.cartCount)
                        totalCount(c)
                     }
                  }
               }
            }
         }
      })
   })
}

// 1__. Изменение item'а в localStorage по id'шнику. Ф-ция должна принимать id-шник item'а и его значение, ничего не возвращает
const changedItemLocalStorage = (id, value = 1) => {
   let getIdItem = JSON.parse(localStorage.getItem('cart') || []);
   let necessaryItems = [];

   // логика
   for (let item of getIdItem) {
      if (item['currentId'] === id && !necessaryItems.includes(item)) {
         item.cartCount = value;
         necessaryItems.push(item);
      } else if (item['currentId'] !== id) {
         necessaryItems.push(item)
      }
      localStorage.setItem('cart', JSON.stringify([...necessaryItems]))
   }
}
// changedItemLocalStorage('product2')


//2__. Получение значения item'а из localStorage. Ф-ция должна принимать его id'шник и возвращать весь item

function getItemLocalStorage(id) {
   // Получаем содержимое хранилища в переменную или пустой массив, если хранилище пустое (чтобы не получить андефн)
   let getIdItem = getCartsContents();
   let necessaryItems = [];
   // логика:
   // Проходимся по элементам массива в цикле и находим заданный ID.
   for (let item of getIdItem) {
      if (item['currentId'] === id) {
         // возвращаем нужным ID из хранилища в массив.
         // return item
         necessaryItems.push(item)
      }
      // проверка что приходит в neccesaryItems;
      // return necessaryItems;
   }
}
// __2. tests getItemLocalStorage(id)
// getItemLocalStorage('product2')
// addItemInLocalStorage(getItemLocalStorage('product2'))

// 3__. Получение всей корзины из localStorage(распаршенной с помощью JSON.parse), ф - ция ничего не принимает, возвращает массив item'ов
function getCartsContents() {
   return JSON.parse(localStorage.getItem('cart') || '[]');
}
// __3. tests getCartsContents()

// 4. Добавление item'а в localStorage. Функция принимает весь item, возвращает его id'шник
function addItemInLocalStorage(item) {
   // логика
   // просто добавляем элемент в хранилище.
   let neccesaryItems = getCartsContents();
   if (neccesaryItems.includes(item)) {
      item.cartCount++;
      neccesaryItems.push(item)
   } else {
      neccesaryItemsItems.push(item)
   }
   localStorage.setItem('cart', JSON.stringify([...neccesaryItems]))
   // Возвращаем ID.
   return console.log(item['currentId'])
}


// 5. Удаление item'а из localStorage. Ф-ция принимает его id'шник, ничего не возвращает.
function deleteItemInLocalStorage(id) {
   let basket = getCartsContents();
   let necessaryItems = [];
   for (let item of basket) {
      if (item['currentId'] !== id) {
         necessaryItems.push(item);
      }
      localStorage.setItem('cart', JSON.stringify([...necessaryItems]))
      ;(0,_helpersJS___WEBPACK_IMPORTED_MODULE_1__.showBtnBuy)()
   }
}
// __5 tests 
// deleteItemInLocalStorage('product1')
window.deleteItemInLocalStorage = deleteItemInLocalStorage

// 6. Рендер item'а в корзине. Ф-ция принимает весь item и рендерит его в корзине. Если item уже "нарисован" в корзине, сначала удаляет его и потом заново его "рисует".
function getLocaleStorageAndCreateItem(localStorageArr, containerCard, collectionCarts) {
   localStorageArr.forEach((element, index) => {
      let { currentId, cartTitle, cartPrice, cartCount, cartImg } = element

      function createDivItem(item) {
         const div = document.createElement('categories__item')
         let a = cartPrice.slice(0, length - 5) * cartCount;

         div.innerHTML = `
               <div class="categories__item" data-id='${currentId}'>
                  <img src=${cartImg} alt="" class="categories__image">
                  <span class="categories__name-item">${cartTitle}</span>
                  <div class="counter" data-counter>
                     <div class="counter__input">
                        <input type="text" disabled value="${cartCount}">
                     </div>
                     <div class="counter__buttons-container">
                        <button class="counter__button button__minus">⮟</button>
                        <button class="counter__button button__plus">⮝</button>
                     </div>
                  </div>
                  <div class="categories__price">
                     <span class="price__item">${a} руб.</span>
                  </div>
                  <span class="categories__close">X</span>
               `
         containerCard.appendChild(div);
      }

      if (collectionCarts.length === 0) {
         createDivItem(element)
         for (let item of collectionCarts) {
            if (item.currentId !== currentId) {
               createDivItem(element);
            } else {
               item.parentElement.remove()
               createDivItem(element)
            }
         }
      }
   })
}

function createItemInBasket(item) {
   const localStorageArr = getCartsContents();
   const containerCard = document.querySelector('.add__cards');
   const collectionCarts = document.querySelectorAll('.categories__item');
   getLocaleStorageAndCreateItem(localStorageArr, containerCard, collectionCarts)
   ;(0,_helpersJS___WEBPACK_IMPORTED_MODULE_1__.showBtnBuy)()
}
createItemInBasket()
// Запускаем счетчики после рендера корзинки

countClicks()
totalCount()
;(0,_helpersJS___WEBPACK_IMPORTED_MODULE_1__.showBtnBuy)()



// Ф-я удаляющая ноду по нажатию на крестик
function checkClose() {
   let elems = document.querySelectorAll('.categories__close');
   elems.forEach((elem, index) => {
      elem.addEventListener('click', (e) => {
         let currentBtn = elem.parentElement.dataset.id;
         let currentElem = elems[index].parentElement.dataset.id;
         if (currentBtn === currentElem) {
            for (let item of b) {
               if (item.currentId === currentBtn) {
                  (0,_helpersJS_helperCart__WEBPACK_IMPORTED_MODULE_2__.deleteNodeAndItem)(item, elem)
               }
            }
         }
         totalCount()
      })
   })
}
checkClose();

/***/ }),

/***/ "./src/helpersJS/helperCart.js":
/*!*************************************!*\
  !*** ./src/helpersJS/helperCart.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   btnSend: () => (/* binding */ btnSend),
/* harmony export */   deleteNodeAndItem: () => (/* binding */ deleteNodeAndItem),
/* harmony export */   requestURL: () => (/* binding */ requestURL),
/* harmony export */   sendRequest: () => (/* binding */ sendRequest),
/* harmony export */   showPhrase: () => (/* binding */ showPhrase)
/* harmony export */ });
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cart */ "./src/cart.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Модальное окошко */ "./src/helpersJS/Модальное окошко.js");



function deleteNodeAndItem(item, elem) {
   deleteItemInLocalStorage(item.currentId)
   elem.parentElement.remove()
}

const requestURL = 'https://jsonplaceholder.typicode.com/users';

function sendRequest(method, url, body = null) {
   const headers = {
      'Content-Type': 'application/json'
   }
   return fetch(url, {
      method: method,
      body: JSON.stringify(body),
      headers: headers
   })
      .then(response => {
         if (response.ok) {
            return response.json();
         }
         throw new Error('Что-то пошло не так... Повторите попытку позднее.');
      })
}



const btnSend = document.getElementById('addBtn');

btnSend.addEventListener('click', (e) => {
   let body = {}
   if (e) {
      body = _cart__WEBPACK_IMPORTED_MODULE_0__.b;
      return sendRequest('POST', requestURL, body)

         .then(date => {
            showPhrase('Ваш заказ успешно оформлен!'),
               (0,___WEBPACK_IMPORTED_MODULE_1__.clearKeyCartInLocalStorage)(),
               (0,___WEBPACK_IMPORTED_MODULE_1__.hideModal)(),
               (0,___WEBPACK_IMPORTED_MODULE_1__.removeBtnBuy)()
         })

         .catch(err => {
            showPhrase('Что-то пошло не так... Повторите попытку позднее.'),
               (0,___WEBPACK_IMPORTED_MODULE_1__.removeBtnBuy)()
         })
   }
})

function showPhrase(phrase) {
   document.body.querySelector('.successful__order').innerHTML = phrase;
}


/***/ }),

/***/ "./src/helpersJS/Модальное окошко.js":
/*!*******************************************!*\
  !*** ./src/helpersJS/Модальное окошко.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   btn: () => (/* binding */ btn),
/* harmony export */   checkBasket: () => (/* binding */ checkBasket),
/* harmony export */   clearKeyCartInLocalStorage: () => (/* binding */ clearKeyCartInLocalStorage),
/* harmony export */   deleteBtn: () => (/* binding */ deleteBtn),
/* harmony export */   hideModal: () => (/* binding */ hideModal),
/* harmony export */   modal: () => (/* binding */ modal),
/* harmony export */   openModal: () => (/* binding */ openModal),
/* harmony export */   removeBtnBuy: () => (/* binding */ removeBtnBuy),
/* harmony export */   showBtnBuy: () => (/* binding */ showBtnBuy),
/* harmony export */   span: () => (/* binding */ span)
/* harmony export */ });
// Переменные для работы модального окна

let modal = document.getElementById('myModal');
let btn = document.getElementById('myBtn');
let span = document.getElementsByClassName('close')[0];
let deleteBtn = document.getElementById('deleteBtn');

// Скрыть модалку
function hideModal() {
   modal.style.display = 'none';
}

// Удалить кнопку с модалкой
function removeBtnBuy() {
   document.getElementById('myBtn').remove()
}

// Вспомогательная ф-я для обнуления хранилище после оформления заказа.
function clearKeyCartInLocalStorage() {
   localStorage.setItem('cart', '[]')
}

// Вспомогательная ф-я для проверки корзины
function checkBasket() {
   return JSON.parse(localStorage.getItem('cart' || 0));
}

// Динамический генератор текста кнопки.
function showBtnBuy() {
   let a = checkBasket()
   if (a.length !== 0) {
      document.querySelector('.btn-buy').innerHTML = 'Купить'
   } else {
      document.querySelector('.btn-buy').innerHTML = 'Корзина пуста, выбери товары на странице Shop'
   }
}

// Открыть модалку
function openModal() {
   let a = checkBasket()
   if (a.length !== 0) {
      modal.style.display = 'block'
   }
}

// Обработчики на кнопки и оверлей

btn.addEventListener('click', (e) => {
   if (e) {
      openModal()
   }
})

deleteBtn.onclick = function () {
   modal.style.display = 'none'
}

span.onclick = function () {
   modal.style.display = 'none'
}

window.onclick = function (e) {
   if (e.target === modal) {
      modal.style.display = 'none'
   }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/cart.js");
/******/ 	cart = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=cart.e69bb9c545f3a3dcdc1a.js.map