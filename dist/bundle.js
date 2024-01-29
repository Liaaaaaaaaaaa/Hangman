/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/*! normalize.scss v0.1.0 | MIT License | based on git.io/normalize */\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\nhtml {\n  font-family: sans-serif; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove default margin.\n */\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n/**\n * Correct \\`block\\` display not defined for any HTML5 element in IE 8/9.\n * Correct \\`block\\` display not defined for \\`details\\` or \\`summary\\` in IE 10/11\n * and Firefox.\n * Correct \\`block\\` display not defined for \\`main\\` in IE 11.\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n/**\n * 1. Correct \\`inline-block\\` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of \\`progress\\` in Chrome, Firefox, and Opera.\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying \\`audio\\` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address \\`[hidden]\\` styling not present in IE 8/9/10.\n * Hide the \\`template\\` element in IE 8/9/11, Safari, and Firefox < 22.\n */\n[hidden],\ntemplate {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n/**\n * Remove the gray background color from active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\na:active,\na:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to \\`bolder\\` in Firefox 4+, Safari, and Chrome.\n */\nb,\nstrong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address variable \\`h1\\` font-size and margin within \\`section\\` and \\`article\\`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent \\`sub\\` and \\`sup\\` affecting \\`line-height\\` in all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove border when inside \\`a\\` element in IE 8/9/10.\n */\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\npre {\n  overflow: auto;\n}\n\n/**\n * Address odd \\`em\\`-unit font size rendering in all browsers.\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of \\`select\\`, unless a \\`border\\` property is set.\n */\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit; /* 1 */\n  font: inherit; /* 2 */\n  margin: 0; /* 3 */\n}\n\n/**\n * Address \\`overflow\\` set to \\`hidden\\` in IE 8/9/10/11.\n */\nbutton {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent \\`text-transform\\` inheritance for \\`button\\` and \\`select\\`.\n * All other form control elements do not inherit \\`text-transform\\` values.\n * Correct \\`button\\` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct \\`select\\` style inheritance in Firefox.\n */\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native \\`audio\\`\n *    and \\`video\\` controls.\n * 2. Correct inability to style clickable \\`input\\` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    \\`input\\` and others.\n */\nbutton,\nhtml input[type=button],\ninput[type=reset],\ninput[type=submit] {\n  -webkit-appearance: button; /* 2 */\n  cursor: pointer; /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting \\`line-height\\` on \\`input\\` using \\`!important\\` in\n * the UA stylesheet.\n */\ninput {\n  line-height: normal;\n}\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to \\`content-box\\` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\ninput[type=checkbox],\ninput[type=radio] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * \\`font-size\\` values of the \\`input\\`, it causes the cursor style of the\n * decrement button to change from \\`default\\` to \\`text\\`.\n */\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address \\`appearance\\` set to \\`searchfield\\` in Safari and Chrome.\n * 2. Address \\`box-sizing\\` set to \\`border-box\\` in Safari and Chrome\n *    (include \\`-moz\\` to future-proof).\n */\ninput[type=search] {\n  -webkit-appearance: textfield; /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box; /* 2 */\n  box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and \\`textfield\\` appearance).\n */\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct \\`color\\` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\nlegend {\n  border: 0; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Don't inherit the \\`font-weight\\` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\noptgroup {\n  font-weight: bold;\n}\n\n/* Tables\n   ========================================================================== */\n/**\n * Remove most spacing between table cells.\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n}\n\nsection,\nmain,\nfooter,\nheader,\narticle {\n  display: block;\n}\n\n* {\n  box-sizing: border-box;\n}\n\np {\n  margin: 0;\n  padding: 0;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n  cursor: pointer;\n}\n\nul,\nli {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  display: flex;\n  position: relative;\n}\n\n.gallows__wrapper {\n  position: relative;\n  padding: 10vw 10vw 0 10vw;\n  width: 30vw;\n  height: 40vw;\n  border-bottom: 5px solid #000000;\n}\n\n.gallowers__roof {\n  border: 5px solid #000000;\n  width: 100%;\n  height: 10%;\n  border-bottom: #ffffff;\n}\n\n.gallowers__pillar {\n  border-left: 5px solid #000000;\n  height: 90%;\n}\n\n.human {\n  position: absolute;\n  width: 50%;\n  height: 50%;\n  top: 30%;\n  right: 8%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.human_color {\n  background: red;\n}\n\n.human__head {\n  width: 50%;\n  height: 30%;\n  border-radius: 50%;\n}\n\n.human__body {\n  width: 5%;\n  height: 40%;\n}\n\n.human__leftArm {\n  position: relative;\n  bottom: 30%;\n  right: 20%;\n  transform: rotate(30deg);\n  width: 40%;\n  height: 5%;\n}\n\n.human__rightArm {\n  position: relative;\n  bottom: 35%;\n  left: 20%;\n  transform: rotate(-30deg);\n  width: 40%;\n  height: 5%;\n}\n\n.human__leftLeg {\n  position: relative;\n  bottom: 10%;\n  right: 20%;\n  transform: rotate(-30deg);\n  width: 40%;\n  height: 5%;\n}\n\n.human__rightLeg {\n  position: relative;\n  bottom: 15%;\n  left: 20%;\n  transform: rotate(30deg);\n  width: 40%;\n  height: 5%;\n}\n\n.wordContainer {\n  width: 100vw;\n  height: 100vh;\n  padding: 5vw;\n}\n\n.describeWord {\n  width: 100%;\n  font-weight: 600;\n  font-size: 1.5vw;\n}\n\n.describeWord__wrapper {\n  width: 100%;\n  padding: 5% 5% 5% 0;\n  display: flex;\n  flex-direction: column;\n  gap: 3vh;\n}\n\n.word {\n  display: flex;\n  gap: 1vw;\n  justify-content: center;\n}\n.word__letter {\n  display: flex;\n  justify-content: center;\n  border-bottom: 2px solid #000;\n  color: white;\n  min-width: 1.5vw;\n}\n\n.hint {\n  text-align: center;\n}\n\n.guesses {\n  display: flex;\n  gap: 5%;\n  justify-content: center;\n}\n\n.guesses__digits {\n  display: flex;\n  color: red;\n}\n\n.keyboard {\n  font-weight: 600;\n  font-size: 2vw;\n}\n\n.keyboard__wrapper {\n  width: 60vw;\n  height: 20vw;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1vw;\n}\n\n.keyboard__button {\n  width: 9%;\n  background: yellow;\n  border-radius: 10%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n.modal {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  background: black;\n  display: none;\n  justify-content: center;\n  align-items: center;\n}\n\n.modal__wrapper {\n  width: 50vw;\n  height: 50vh;\n}\n\n.modal__content {\n  background: rgb(255, 255, 0);\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20%;\n  font-size: 2vw;\n  font-weight: 600;\n  padding: 5%;\n}\n\n.modal__title {\n  color: red;\n}\n\n.modal__secret-word {\n  border-bottom: 2px solid black;\n}\n\n.modal__button {\n  background: green;\n  width: 30%;\n  height: 15%;\n  border-radius: 90px;\n  border-color: green;\n}\n\n.active {\n  display: flex;\n}\n\n.button-no-active {\n  pointer-events: none;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://hangman/./src/styles/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://hangman/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://hangman/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/components/Gallows/gallows.html":
/*!*********************************************!*\
  !*** ./src/components/Gallows/gallows.html ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<section class=\\\"gallows\\\">\\r\\n  <div class=\\\"gallows__wrapper\\\">\\r\\n    <div class=\\\"gallowers__roof gallowers_line\\\"></div>\\r\\n    <div class=\\\"gallowers__pillar gallowers_line\\\"></div>\\r\\n    <div class=\\\"human\\\">\\r\\n      <div class=\\\"human__part human__head\\\"></div>\\r\\n      <div class=\\\"human__part  human__body\\\"></div>\\r\\n      <div class=\\\"human__part  human__leftArm\\\"></div>\\r\\n      <div class=\\\"human__part  human__rightArm\\\"></div>\\r\\n      <div class=\\\"human__part  human__leftLeg\\\"></div>\\r\\n      <div class=\\\"human__part  human__rightLeg\\\"></div>\\r\\n    </div>\\r\\n  </div>\\r\\n</section>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://hangman/./src/components/Gallows/gallows.html?");

/***/ }),

/***/ "./src/components/Modal/modal.html":
/*!*****************************************!*\
  !*** ./src/components/Modal/modal.html ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<section class=\\\"modal\\\">\\r\\n  <div class=\\\"modal__wrapper\\\">\\r\\n    <div class=\\\"modal__content\\\">\\r\\n      <p class=\\\"modal__title\\\">Congratulations!</p>\\r\\n      <p class=\\\"modal__text\\\">You win</p>\\r\\n      <p class=\\\"modal__secret-word\\\">Secret word: </p>\\r\\n      <button class=\\\"modal__button\\\">Play again</button>\\r\\n    </div>\\r\\n  </div>\\r\\n</section>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://hangman/./src/components/Modal/modal.html?");

/***/ }),

/***/ "./src/components/WordContainer/DescribeWord/describeWord.html":
/*!*********************************************************************!*\
  !*** ./src/components/WordContainer/DescribeWord/describeWord.html ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<div class=\\\"describeWord\\\">\\r\\n  <div class=\\\"describeWord__wrapper\\\">\\r\\n    <ul class=\\\"word\\\">\\r\\n      <li class=\\\"word__letter\\\">r</li>\\r\\n      <li class=\\\"word__letter\\\">a</li>\\r\\n      <li class=\\\"word__letter\\\">i</li>\\r\\n      <li class=\\\"word__letter\\\">n</li>\\r\\n      <li class=\\\"word__letter\\\">b</li>\\r\\n      <li class=\\\"word__letter\\\">o</li>\\r\\n      <li class=\\\"word__letter\\\">w</li>\\r\\n    </ul>\\r\\n    <div class=\\\"hint\\\">I am purple, yellow, red, and green the King cannot reach me and neither can the Queen. I show my colors after the rain and only when the sun comes out again.</div>\\r\\n    <div class=\\\"guesses\\\">\\r\\n      <p class=\\\"guesses__text\\\"> incorrect guesses </p>\\r\\n      <ul class=\\\"guesses__digits\\\">\\r\\n        <li class = \\\"guesses__digit\\\">0</li>\\r\\n        <li>/</li>\\r\\n        <li>6</li>\\r\\n      </ul>\\r\\n    </div>\\r\\n  </div>\\r\\n</div>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://hangman/./src/components/WordContainer/DescribeWord/describeWord.html?");

/***/ }),

/***/ "./src/components/WordContainer/Keyboard/keyboard.html":
/*!*************************************************************!*\
  !*** ./src/components/WordContainer/Keyboard/keyboard.html ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<ul class=\\\"keyboard\\\">\\r\\n  <ul class=\\\"keyboard__wrapper\\\">\\r\\n    <li class=\\\"keyboard__button\\\"> A </li>\\r\\n    <li class=\\\"keyboard__button\\\"> B </li>\\r\\n    <li class=\\\"keyboard__button\\\"> C </li>\\r\\n    <li class=\\\"keyboard__button\\\"> D </li>\\r\\n    <li class=\\\"keyboard__button\\\"> E </li>\\r\\n    <li class=\\\"keyboard__button\\\"> F</li>\\r\\n    <li class=\\\"keyboard__button\\\"> G </li>\\r\\n    <li class=\\\"keyboard__button\\\"> H </li>\\r\\n    <li class=\\\"keyboard__button\\\"> I </li>\\r\\n\\r\\n    <li class=\\\"keyboard__button\\\"> J </li>\\r\\n    <li class=\\\"keyboard__button\\\"> K </li>\\r\\n    <li class=\\\"keyboard__button\\\"> L </li>\\r\\n    <li class=\\\"keyboard__button\\\"> M </li>\\r\\n    <li class=\\\"keyboard__button\\\"> N </li>\\r\\n    <li class=\\\"keyboard__button\\\"> O</li>\\r\\n    <li class=\\\"keyboard__button\\\"> P </li>\\r\\n    <li class=\\\"keyboard__button\\\"> Q </li>\\r\\n    <li class=\\\"keyboard__button\\\"> R </li>\\r\\n\\r\\n    <li class=\\\"keyboard__button\\\"> S </li>\\r\\n    <li class=\\\"keyboard__button\\\"> T </li>\\r\\n    <li class=\\\"keyboard__button\\\"> U </li>\\r\\n    <li class=\\\"keyboard__button\\\"> V </li>\\r\\n    <li class=\\\"keyboard__button\\\"> W </li>\\r\\n    <li class=\\\"keyboard__button\\\"> X </li>\\r\\n    <li class=\\\"keyboard__button\\\"> Y </li>\\r\\n    <li class=\\\"keyboard__button\\\"> Z </li>\\r\\n  </ul>\\r\\n  </div>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://hangman/./src/components/WordContainer/Keyboard/keyboard.html?");

/***/ }),

/***/ "./src/components/WordContainer/wordContainer.html":
/*!*********************************************************!*\
  !*** ./src/components/WordContainer/wordContainer.html ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<section class=\\\"wordContainer\\\">\\r\\n<div class=\\\"wordContainer__wrapper\\\"></div>\\r\\n\\r\\n</section>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://hangman/./src/components/WordContainer/wordContainer.html?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images_hangman.png */ \"./src/assets/images_hangman.png\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"en\\\">\\r\\n<head>\\r\\n  <meta charset=\\\"UTF-8\\\">\\r\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\r\\n  <link rel=\\\"shortcut icon\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" type=\\\"image/x-icon\\\">\\r\\n  <title>Hangman</title>\\r\\n</head>\\r\\n<body>\\r\\n  \\r\\n</body>\\r\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://hangman/./src/index.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n\n  // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n  url = String(url.__esModule ? url.default : url);\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://hangman/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://hangman/./src/styles/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://hangman/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://hangman/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://hangman/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://hangman/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://hangman/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://hangman/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/Modal/modal.js":
/*!***************************************!*\
  !*** ./src/components/Modal/modal.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modal_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.html */ \"./src/components/Modal/modal.html\");\n/* harmony import */ var _utils_htmltoElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/htmltoElement */ \"./src/utils/htmltoElement.js\");\n\r\n\r\n\r\n\r\n\r\nlet modal = (0,_utils_htmltoElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_modal_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://hangman/./src/components/Modal/modal.js?");

/***/ }),

/***/ "./src/components/WordContainer/DescribeWord/describeWord.js":
/*!*******************************************************************!*\
  !*** ./src/components/WordContainer/DescribeWord/describeWord.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _describeWord_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./describeWord.html */ \"./src/components/WordContainer/DescribeWord/describeWord.html\");\n/* harmony import */ var _utils_htmltoElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/htmltoElement */ \"./src/utils/htmltoElement.js\");\n/* harmony import */ var _riddles_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./riddles.json */ \"./src/components/WordContainer/DescribeWord/riddles.json\");\n\r\n\r\n\r\n\r\nlet describeWord = (0,_utils_htmltoElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_describeWord_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (describeWord);\n\n//# sourceURL=webpack://hangman/./src/components/WordContainer/DescribeWord/describeWord.js?");

/***/ }),

/***/ "./src/components/WordContainer/Keyboard/keyboard.js":
/*!***********************************************************!*\
  !*** ./src/components/WordContainer/Keyboard/keyboard.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _keyboard_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyboard.html */ \"./src/components/WordContainer/Keyboard/keyboard.html\");\n/* harmony import */ var _utils_htmltoElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/htmltoElement */ \"./src/utils/htmltoElement.js\");\n\r\n\r\n\r\nlet keyboard = (0,_utils_htmltoElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_keyboard_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keyboard);\n\n//# sourceURL=webpack://hangman/./src/components/WordContainer/Keyboard/keyboard.js?");

/***/ }),

/***/ "./src/components/WordContainer/wordContainer.js":
/*!*******************************************************!*\
  !*** ./src/components/WordContainer/wordContainer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _wordContainer_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wordContainer.html */ \"./src/components/WordContainer/wordContainer.html\");\n/* harmony import */ var _utils_htmltoElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/htmltoElement */ \"./src/utils/htmltoElement.js\");\n/* harmony import */ var _WordContainer_Keyboard_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../WordContainer/Keyboard/keyboard */ \"./src/components/WordContainer/Keyboard/keyboard.js\");\n/* harmony import */ var _WordContainer_DescribeWord_describeWord__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../WordContainer/DescribeWord/describeWord */ \"./src/components/WordContainer/DescribeWord/describeWord.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet wordContainer = (0,_utils_htmltoElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_wordContainer_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\nwordContainer.append(_WordContainer_DescribeWord_describeWord__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\r\nwordContainer.append(_WordContainer_Keyboard_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wordContainer);\r\n\n\n//# sourceURL=webpack://hangman/./src/components/WordContainer/wordContainer.js?");

/***/ }),

/***/ "./src/components/gallows/gallows.js":
/*!*******************************************!*\
  !*** ./src/components/gallows/gallows.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Gallows_gallows_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Gallows/gallows.html */ \"./src/components/Gallows/gallows.html\");\n/* harmony import */ var _utils_htmltoElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/htmltoElement */ \"./src/utils/htmltoElement.js\");\n\r\n// import '../Gallows/_gallows.scss';\r\n\r\n\r\n\r\nlet gallows = (0,_utils_htmltoElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_Gallows_gallows_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gallows);\n\n//# sourceURL=webpack://hangman/./src/components/gallows/gallows.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _components_WordContainer_DescribeWord_riddles_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/WordContainer/DescribeWord/riddles.json */ \"./src/components/WordContainer/DescribeWord/riddles.json\");\n/* harmony import */ var _components_gallows_gallows_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/gallows/gallows.js */ \"./src/components/gallows/gallows.js\");\n/* harmony import */ var _components_WordContainer_wordContainer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/WordContainer/wordContainer.js */ \"./src/components/WordContainer/wordContainer.js\");\n/* harmony import */ var _components_Modal_modal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Modal/modal.js */ \"./src/components/Modal/modal.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst body = document.querySelector('body');\r\nbody.append(_components_gallows_gallows_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\r\nbody.append(_components_WordContainer_wordContainer_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\r\nbody.append(_components_Modal_modal_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\r\n\r\n\r\n//--keyboard ------------\r\nconst keyboardContainer = _components_WordContainer_wordContainer_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].querySelector(\".keyboard__wrapper\");\r\nconst keyboardButtons = document.querySelectorAll('.keyboard__button');\r\n\r\n//-----Guesses-------------------\r\nlet counterGuesses = 0;\r\nlet counterRightLetters = 0;\r\n\r\n//--gallows ------------------\r\nconst humanParts = _components_gallows_gallows_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].querySelectorAll(\".human__part\");\r\n\r\n//-----Word---------\r\nlet numberWord = 0;\r\n// let wordNode = document.querySelector('.word');\r\nconst describeWordWrapper = document.querySelector('.describeWord__wrapper');\r\n\r\n//---digit------\r\nlet digitGuesses = _components_WordContainer_wordContainer_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].querySelector(\".guesses__digit\");\r\n\r\n\r\n//----Modal ------------------\r\nconst modalWindow = document.querySelector('.modal');\r\nconst modalTitle = document.querySelector('.modal__title');\r\nconst modalText = document.querySelector('.modal__text');\r\n\r\n//-------Play-again--------\r\nconst modalButton = document.querySelector('.modal__button');\r\n\r\n//---Local-storage--------------\r\nwindow.addEventListener(\"beforeunload\", function () {\r\n  localStorage.setItem(\"numberWord\", numberWord);\r\n  document.querySelector('.word').remove();\r\n});\r\n\r\n\r\n\r\n\r\nfunction putKeyboard(e) {\r\n  console.log(numberWord);\r\n\r\n  if ((e.target.className === \"keyboard__button\" || e.key)) {\r\n    console.log(e);\r\n\r\n    let putLetter;\r\n    let activeButton;\r\n\r\n    if (e.target.className === \"keyboard__button\") {\r\n      putLetter = e.target.innerText.toLowerCase();\r\n      activeButton = e.target;\r\n    } else {\r\n      putLetter = e.key.toUpperCase();\r\n      let buttonVirtual = Array.from(keyboardButtons).filter(e => e.outerText === putLetter);\r\n      activeButton = buttonVirtual[0];\r\n      putLetter = e.key;\r\n\r\n    }\r\n\r\n\r\n    let massiveLettersWord = _components_WordContainer_wordContainer_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].querySelectorAll(\".word__letter\");\r\n    let indexLetter = Array.from(massiveLettersWord).map(e => e.textContent).indexOf(putLetter);\r\n    let doubleIndexLetter = Array.from(massiveLettersWord).map(e => e.textContent).lastIndexOf(putLetter);\r\n\r\n\r\n    let modalSecretWord = document.querySelector('.modal__secret-word');\r\n    let wholeWord = Array.from(massiveLettersWord).map(e => e.outerText).join('');\r\n    if (activeButton.style.background === \"grey\") {\r\n      return\r\n    }\r\n    if (indexLetter === doubleIndexLetter) {\r\n      if ((massiveLettersWord[indexLetter])) {\r\n        massiveLettersWord[indexLetter].style.color = \"black\";\r\n        massiveLettersWord[indexLetter].style.borderBottom = \"none\";\r\n        counterRightLetters += 1;\r\n      } else {\r\n        humanParts[counterGuesses].style.background = \"red\"\r\n        counterGuesses += 1;\r\n        digitGuesses.textContent = counterGuesses;\r\n      }\r\n    }\r\n\r\n    if (!(indexLetter === doubleIndexLetter)) {\r\n      massiveLettersWord[indexLetter].style.color = \"black\";\r\n      massiveLettersWord[doubleIndexLetter].style.color = \"black\";\r\n      massiveLettersWord[indexLetter].style.borderBottom = \"none\";\r\n      massiveLettersWord[doubleIndexLetter].style.borderBottom = \"none\";\r\n      counterRightLetters += 2;\r\n    }\r\n\r\n    activeButton.style.background = \"grey\";\r\n    activeButton.classList.toggle('button-no-active');\r\n    modalSecretWord.textContent = `Secret word: ${wholeWord}`;\r\n\r\n\r\n    if ((counterGuesses === 6) || (counterRightLetters === massiveLettersWord.length)) {\r\n      openModal();\r\n      counterRightLetters = 0;\r\n    }\r\n  }\r\n\r\n}\r\n\r\n\r\nfunction openModal() {\r\n  if (counterGuesses === 6) {\r\n    modalTitle.textContent = \"No congratulations!\";\r\n    modalText.textContent = \"You lost\";\r\n  } else {\r\n    modalTitle.textContent = \"Congratulations!\";\r\n    modalText.textContent = \"You won. Good job\";\r\n  }\r\n  let wordNode = document.querySelector('.word');\r\n  wordNode.remove();\r\n  modalWindow.classList.toggle('active');\r\n\r\n}\r\n\r\nkeyboardContainer.addEventListener(\"click\", putKeyboard);\r\n\r\n\r\ndocument.addEventListener(\"keydown\", putKeyboard);\r\n\r\n\r\n\r\n\r\n\r\nfunction addNewWord(numberWord) {\r\n  // numberWord = localStorage.getItem(\"numberWord\");\r\n  console.log(numberWord);\r\n  document.querySelector(\".hint\").textContent = _components_WordContainer_DescribeWord_riddles_json__WEBPACK_IMPORTED_MODULE_2__[numberWord].description;\r\n  let newWord = _components_WordContainer_DescribeWord_riddles_json__WEBPACK_IMPORTED_MODULE_2__[numberWord].answer;\r\n  createNewWord();\r\n\r\n  function createNewWord() {\r\n    let ulNewWord = document.createElement('ul');\r\n    ulNewWord.classList.add('word');\r\n    let massiveNewWord = newWord.split('');\r\n\r\n    for (let i = 0; i < newWord.length; i++) {\r\n      let liNewWord = document.createElement('li');\r\n      liNewWord.classList.add('word__letter');\r\n      liNewWord.textContent = massiveNewWord[i];\r\n      ulNewWord.append(liNewWord);\r\n    }\r\n    describeWordWrapper.prepend(ulNewWord);\r\n\r\n  }\r\n\r\n}\r\n\r\n// ------Play--- again ------------------\r\nfunction playAgain() {\r\n  // numberWord = localStorage.getItem(\"numberWord\");\r\n  counterGuesses = 0;\r\n  digitGuesses.textContent = counterGuesses;\r\n  humanParts.forEach(e => { e.style.background = \"white\" });\r\n  keyboardButtons.forEach(e => e.style.background = \"yellow\");\r\n  keyboardButtons.forEach(e => e.classList.remove('button-no-active'));\r\n\r\n  numberWord += 1;\r\n  addNewWord(numberWord);\r\n\r\n  modalWindow.classList.toggle('active');\r\n\r\n}\r\n\r\n\r\nmodalButton.addEventListener(\"click\", playAgain);\n\n//# sourceURL=webpack://hangman/./src/main.js?");

/***/ }),

/***/ "./src/utils/htmltoElement.js":
/*!************************************!*\
  !*** ./src/utils/htmltoElement.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(htmlString) {\r\n  const template = document.createElement('template');\r\n  template.innerHTML = htmlString;\r\n  return template.content.firstChild\r\n}\r\n\r\n\n\n//# sourceURL=webpack://hangman/./src/utils/htmltoElement.js?");

/***/ }),

/***/ "./src/assets/images_hangman.png":
/*!***************************************!*\
  !*** ./src/assets/images_hangman.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dd51f3a3b72473230ace.png\";\n\n//# sourceURL=webpack://hangman/./src/assets/images_hangman.png?");

/***/ }),

/***/ "./src/components/WordContainer/DescribeWord/riddles.json":
/*!****************************************************************!*\
  !*** ./src/components/WordContainer/DescribeWord/riddles.json ***!
  \****************************************************************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('[{\"number\":\"1\",\"description\":\"I am purple, yellow, red, and green the King cannot reach me and neither can the Queen. I show my colors after the rain and only when the sun comes out again. \",\"answer\":\"rainbow\"},{\"number\":\"2\",\"description\":\"It is blue and green, and red, It bounces higher than my head, It does not want to stop at all. What is it? It is my…\",\"answer\":\"ball\"},{\"number\":\"3\",\"description\":\"Clean, but not water, White, but not snow, Sweet, but not ice-cream, What is it?\",\"answer\":\"sugar\"},{\"number\":\"4\",\"description\":\"I am always hungry, I must always be fed, The finger I touch, Will soon turn red.\",\"answer\":\"fire\"},{\"number\":\"5\",\"description\":\"I am round like an apple Flat as a chip I have eyes But I can’t see one bit.\",\"answer\":\"button\"},{\"number\":\"6\",\"description\":\"What has a head like a cat, Feet like a cat, A tail like a cat,But isn\\'t a cat? \",\"answer\":\"kitten\"},{\"number\":\"7\",\"description\":\"Always runs but never walks, Often murmurs, never talks,Has a bed but never sleeps,Has a mouth but never eats?\",\"answer\":\"river\"},{\"number\":\"8\",\"description\":\"I’m lighter than a feather, yet the strongest man can’t hold me for more than 5 minutes. \",\"answer\":\"breath\"},{\"number\":\"9\",\"description\":\"What gets wetter and wetter the more it dries? \",\"answer\":\"towel\"},{\"number\":\"10\",\"description\":\"AI fly, yet I have no wings. I cry, yet I have no eyes. Darkness follows me. Lower light I never see.\",\"answer\":\"cloud\"}]');\n\n//# sourceURL=webpack://hangman/./src/components/WordContainer/DescribeWord/riddles.json?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;