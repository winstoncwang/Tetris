/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css);\"]);\n// Module\nexports.push([module.i, \"* {\\n\\tmargin: 0 !important;\\n\\tpadding: 0 !important;\\n}\\n\\nbody {\\n\\theight: 100vh;\\n\\twidth: 100vw;\\n\\tdisplay: flex;\\n\\tjustify-content: center;\\n\\talign-items: center;\\n}\\n\\ndiv .left {\\n\\tdisplay: flex !important;\\n\\tjustify-content: center;\\n\\talign-items: center;\\n}\\n\\ndiv .right {\\n\\tdisplay: flex !important;\\n\\tjustify-content: center;\\n\\talign-items: center;\\n}\\n\\n.container {\\n\\theight: 90vh;\\n\\twidth: 53vw;\\n}\\n\\n.menu {\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n\\tjustify-content: center;\\n\\talign-items: center;\\n}\\n\\n/*button*/\\n.massive {\\n\\theight: 10vh !important;\\n\\twidth: 20vw !important;\\n\\tfont-size: 2.2rem !important;\\n}\\n\\n/*notice label*/\\n.notice {\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n\\tjustify-content: center;\\n\\talign-items: center;\\n\\tfont-size: 4rem !important;\\n\\tfont-weight: bolder;\\n\\tpadding: 4vh 1vw 4vh 1vw !important;\\n}\\n\\n.hidden {\\n\\tdisplay: none !important;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//css\n__webpack_require__(/*! ./css/index.css */ \"./src/css/index.css\");\n\n__webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/configs.js":
/*!************************!*\
  !*** ./src/configs.js ***!
  \************************/
/*! exports provided: TETROS, DIR, KEY, WELL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TETROS\", function() { return TETROS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DIR\", function() { return DIR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"KEY\", function() { return KEY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WELL\", function() { return WELL; });\nvar TETROS = {\n  i: {\n    blocks: ['0x0F00', '0x2222', '0x00F0', '0x4444'],\n    size: 4,\n    color: 'cyan'\n  },\n  j: {\n    blocks: ['0x8E00', '0x6440', '0x0E20', '0x44C0'],\n    size: 3,\n    color: 'blue'\n  },\n  l: {\n    blocks: ['0x2E00', '0x4460', '0x0E80', '0xC440'],\n    size: 3,\n    color: 'orange'\n  },\n  o: {\n    blocks: ['0xCC00', '0xCC00', '0xCC00', '0xCC00'],\n    size: 2,\n    color: 'yellow'\n  },\n  s: {\n    blocks: ['0x6C00', '0x4620', '0x06C0', '0x8C40'],\n    size: 3,\n    color: 'green'\n  },\n  t: {\n    blocks: ['0x4E00', '0x4640', '0x0E40', '0x4C40'],\n    size: 3,\n    color: 'purple'\n  },\n  z: {\n    blocks: ['0xC600', '0x2640', '0x0C60', '0x4C80'],\n    size: 3,\n    color: 'red'\n  }\n}; //direction using blocks arr\n\nvar DIR = {\n  UP: 0,\n  RIGHT: 1,\n  DOWN: 2,\n  LEFT: 3\n};\nvar KEY = {\n  UP: 38,\n  DOWN: 40,\n  LEFT: 37,\n  RIGHT: 39,\n  SPACE: 32\n}; //well config\n\nvar WELL = {\n  wx: 10,\n  wy: 20\n};\n\n\n//# sourceURL=webpack:///./src/configs.js?");

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/index.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/css/index.css?");

/***/ }),

/***/ "./src/drawer.js":
/*!***********************!*\
  !*** ./src/drawer.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Drawer; });\n/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configs */ \"./src/configs.js\");\n\nfunction Drawer(canvas, ctx, canvasNext, ctxNext) {\n  this.canvas = canvas;\n  this.ctx = ctx;\n  this.nextCanvas = canvasNext;\n  this.ctxNext = ctxNext;\n  this.cx = 4;\n  this.cy = 4;\n  this.wx = 10;\n  this.wy = 20;\n}\n\nDrawer.prototype.drawNext = function (next, callbacks) {\n  var _this = this;\n\n  this.next = next;\n  this.callbacks = callbacks;\n  this.pcx = this.nextCanvas.width / this.cx;\n  this.pcy = this.nextCanvas.height / this.cy;\n  this.paddingX = this.next.blockType === 'i' ? 0 : this.next.blockType === 'o' ? 1 : 0.5;\n  this.paddingY = this.next.blockType === 'i' ? 0.5 : 1;\n  this.ctxNext.clearRect(0, 0, this.nextCanvas.width, this.nextCanvas.height);\n  this.ctxNext.fillStyle = 'lightgrey';\n  this.ctxNext.fillRect(0, 0, this.nextCanvas.width, this.nextCanvas.height);\n  this.ctxNext.strokeRect(0, 0, this.nextCanvas.width, this.nextCanvas.height);\n  this.callbacks.eachPixel(this.paddingX, this.paddingY, this.next, function (x, y, color) {\n    _this.ctxNext.fillStyle = color;\n\n    _this.ctxNext.fillRect(x * _this.pcx, y * _this.pcy, _this.pcx, _this.pcy);\n\n    _this.ctxNext.strokeRect(x * _this.pcx, y * _this.pcy, _this.pcx, _this.pcy);\n  });\n};\n\nDrawer.prototype.drawWell = function (getPieceArr, px, py) {\n  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n  this.ctx.fillStyle = 'lightgrey';\n  this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height); //draw the existing pieceArr\n\n  for (var x = 0; x < this.wx; x++) {\n    for (var y = this.wy; y >= 0; y--) {\n      if (getPieceArr(x, y)) {\n        this.drawPixel(x, y, _configs__WEBPACK_IMPORTED_MODULE_0__[\"TETROS\"][getPieceArr(x, y)].color, px, py, this.ctx);\n      }\n    }\n  }\n\n  this.ctx.strokeRect(0, 0, this.canvas.width, this.canvas.height);\n};\n\nDrawer.prototype.drawPiece = function (current) {\n  this.callbacks.eachPixel(current.x, current.y, current, this.drawPixel);\n};\n\nDrawer.prototype.drawPixel = function (x, y, color, px, py, ctx) {\n  ctx.fillStyle = color;\n  ctx.fillRect(x * px, y * py, px, py);\n  ctx.strokeRect(x * px, y * py, px, py);\n};\n\n//# sourceURL=webpack:///./src/drawer.js?");

/***/ }),

/***/ "./src/evtQueue.js":
/*!*************************!*\
  !*** ./src/evtQueue.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EvtQueue; });\n/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configs */ \"./src/configs.js\");\n\nfunction EvtQueue() {\n  this.DIR = _configs__WEBPACK_IMPORTED_MODULE_0__[\"DIR\"];\n  this.KEY = _configs__WEBPACK_IMPORTED_MODULE_0__[\"KEY\"];\n  this.wx = _configs__WEBPACK_IMPORTED_MODULE_0__[\"WELL\"].wx;\n  this.wy = _configs__WEBPACK_IMPORTED_MODULE_0__[\"WELL\"].wy;\n}\n\nEvtQueue.prototype.clearEvtQueue = function (queueArr) {\n  queueArr.length = 0;\n};\n\nEvtQueue.prototype.keyQueue = function (e, queueArr, noticeScreen) {\n  switch (e.keyCode) {\n    case this.KEY.UP:\n      queueArr.push(this.KEY.UP);\n      break;\n\n    case this.KEY.DOWN:\n      queueArr.push(this.KEY.DOWN);\n      break;\n\n    case this.KEY.LEFT:\n      queueArr.push(this.KEY.LEFT);\n      break;\n\n    case this.KEY.RIGHT:\n      queueArr.push(this.KEY.RIGHT);\n      break;\n\n    case this.KEY.SPACE:\n      noticeScreen('play');\n      break;\n  }\n};\n\nEvtQueue.prototype.handler = function (actionQueue, current, callbacks) {\n  this.current = current;\n  this.callbacks = callbacks;\n\n  switch (actionQueue) {\n    case this.KEY.UP:\n      this.move(this.KEY.UP);\n      break;\n\n    case this.KEY.DOWN:\n      this.move(this.KEY.DOWN);\n      break;\n\n    case this.KEY.LEFT:\n      this.move(this.KEY.LEFT);\n      break;\n\n    case this.KEY.RIGHT:\n      this.move(this.KEY.RIGHT);\n      break;\n  }\n};\n\nEvtQueue.prototype.move = function (dir) {\n  var prevX = this.current.x;\n  var prevY = this.current.y;\n\n  switch (dir) {\n    case this.KEY.UP:\n      if (this.current.x > -1 && this.current.x < _configs__WEBPACK_IMPORTED_MODULE_0__[\"WELL\"].wx - _configs__WEBPACK_IMPORTED_MODULE_0__[\"TETROS\"][this.current.blockType].size + 1) {\n        this.rotate(this.current);\n      }\n\n      break;\n\n    case this.KEY.DOWN:\n      this.current.y += 1;\n      break;\n\n    case this.KEY.LEFT:\n      this.current.x -= 1;\n      break;\n\n    case this.KEY.RIGHT:\n      this.current.x += 1;\n      break;\n  } //if didnt find a valid space\n\n\n  if (!this.validSpace()) {\n    this.current.x = prevX;\n    this.current.y = prevY;\n    return false;\n  } else {\n    return true;\n  }\n};\n\nEvtQueue.prototype.rotate = function (_ref) {\n  var dir = _ref.dir;\n\n  switch (dir) {\n    case this.DIR.UP:\n      this.current.dir = this.DIR.RIGHT;\n      break;\n\n    case this.DIR.RIGHT:\n      this.current.dir = this.DIR.DOWN;\n      break;\n\n    case this.DIR.DOWN:\n      this.current.dir = this.DIR.LEFT;\n      break;\n\n    case this.DIR.LEFT:\n      this.current.dir = this.DIR.UP;\n      break;\n  }\n};\n\nEvtQueue.prototype.validSpace = function () {\n  var _this = this;\n\n  var result = true;\n  this.callbacks.eachPixel(this.current.x, this.current.y, this.current, function (x, y) {\n    if (x < 0 || x >= _this.wx || y < 0 || y >= _this.wy || _this.callbacks.getPieceArr(x, y)) {\n      result = false;\n    }\n  });\n  return result;\n};\n\n//# sourceURL=webpack:///./src/evtQueue.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configs */ \"./src/configs.js\");\n/* harmony import */ var _tetromino__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tetromino */ \"./src/tetromino.js\");\n/* harmony import */ var _drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drawer */ \"./src/drawer.js\");\n/* harmony import */ var _evtQueue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./evtQueue */ \"./src/evtQueue.js\");\n/* harmony import */ var _lastRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lastRow */ \"./src/lastRow.js\");\n/* harmony import */ var _scoreCount__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scoreCount */ \"./src/scoreCount.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\n\nvar Tetris = /*#__PURE__*/function () {\n  function Tetris(canvas, body, next) {\n    var _this = this;\n\n    _classCallCheck(this, Tetris);\n\n    this.setPieceArr = function (x, y) {\n      var blockType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _this.current.blockType;\n      _this.pieceArr[x][y] = blockType;\n    };\n\n    this.getPieceArr = function (x, y) {\n      return _this.pieceArr[x][y];\n    };\n\n    this.run = function () {\n      if (!_this.gameRunning) {\n        _this.frameId = window.requestAnimationFrame(_this.gameLoop);\n        _this.gameRunning = true;\n\n        _this.setCurrentPiece();\n\n        _this.setNextPiece();\n      }\n    };\n\n    this.gameLoop = function (timestamp) {\n      _this.now = timestamp; //calculate the timeStamp\n      //console.log(parseFloat(1 / this.dt).toFixed(1));\n\n      _this.dt = Math.min(1, (_this.now - _this.last) / 1000); //update canvas\n\n      _this.update(_this.dt); //draw canvas\n\n\n      if (_this.gameRunning) {\n        _this.draw();\n\n        _this.last = _this.now;\n        _this.frameId = window.requestAnimationFrame(_this.gameLoop);\n      }\n    };\n\n    this.draw = function () {\n      //init block pixel\n      _this.px = _this.canvas.width / _this.wx;\n      _this.py = _this.canvas.height / _this.wy;\n\n      _this.drawer.drawWell(_this.getPieceArr, _this.px, _this.py);\n\n      _this.drawer.drawNext(_this.next, {\n        eachPixel: _this.eachPixel\n      });\n\n      _this.drawer.drawPiece(_this.current);\n    };\n\n    this.eachPixel = function (x, y, currentPiece, callback) {\n      var blockType = currentPiece.blockType,\n          dir = currentPiece.dir; //increment through the bits\n\n      var row = 0;\n      var col = 0;\n      var _this$TETROS$blockTyp = _this.TETROS[blockType],\n          color = _this$TETROS$blockTyp.color,\n          blocks = _this$TETROS$blockTyp.blocks;\n\n      for (var bit = 0x8000; bit > 0; bit = bit >> 1) {\n        //draw piece\n        //bit by bit comparison of 2^16(0x8000) and block orientation hex\n        if (blocks[dir] & bit) {\n          //draw the pixels\n          callback(x + col, y + row, color, _this.px, _this.py, _this.ctx);\n        }\n\n        col++;\n\n        if (col == 4) {\n          col = 0;\n          row++;\n        }\n      }\n    };\n\n    this.noticeScreen = function (status) {\n      switch (status) {\n        case 'play':\n          _this.body.querySelector('.menu').classList.add('hidden');\n\n          _this.body.querySelector('#game').classList.remove('hidden');\n\n          _this.run();\n\n          break;\n\n        case 'replay':\n          _this.body.querySelector('#gameover').innerHTML = \"<p>Well Done!!</p> <h1>You finished stage \".concat(_this.stageNumber - 1, \"</h1>\");\n\n          _this.body.querySelector('#game').classList.add('hidden');\n\n          _this.body.querySelector('.menu').classList.remove('hidden');\n\n          _this.body.querySelector('#play').classList.add('hidden');\n\n          _this.body.querySelector('p.notice').classList.remove('hidden');\n\n          _this.body.querySelector('button#replay').classList.remove('hidden');\n\n          break;\n      }\n    };\n\n    this.resize = function () {\n      _this.canvas.width = _this.body.querySelector('.container').clientWidth / 2;\n      _this.canvas.height = _this.body.querySelector('.container').clientHeight;\n\n      _this.draw();\n    };\n\n    this.canvas = canvas;\n    this.canvasNext = next;\n    this.body = body; //init value\n\n    this.TETROS = _configs__WEBPACK_IMPORTED_MODULE_0__[\"TETROS\"];\n    this.DIR = _configs__WEBPACK_IMPORTED_MODULE_0__[\"DIR\"];\n    this.KEY = _configs__WEBPACK_IMPORTED_MODULE_0__[\"KEY\"]; //canvas var\n\n    this.ctx = this.canvas.getContext('2d');\n    this.ctxNext = this.canvasNext.getContext('2d');\n    this.canvas.width = this.body.querySelector('.container').clientWidth / 2;\n    this.canvas.height = this.body.querySelector('.container').clientHeight; //rendering timeStamp variable\n\n    this.last = 0;\n    this.now = 0;\n    this.dt = 0;\n    this.step = 1;\n    this.t = 0; //score\n\n    this.scoreBoard = this.body.querySelector('#score');\n    this.stageLevel = this.body.querySelector('#stage');\n    this.totalScore = 0;\n    this.scoreDisplay = 0;\n    this.stageNumber = 1;\n    this.scoreBoard.innerHTML = \"Score: \".concat(this.totalScore);\n    this.stageLevel.innerHTML = \"Stage \".concat(this.stageNumber); //well dimension\n\n    this.wx = _configs__WEBPACK_IMPORTED_MODULE_0__[\"WELL\"].wx;\n    this.wy = _configs__WEBPACK_IMPORTED_MODULE_0__[\"WELL\"].wy; //EventQueue\n\n    this.queueArr = []; //currentPiece\n\n    this.current;\n    this.next; //piece array\n\n    this.pieceArr = Array(this.wx).fill().map(function () {\n      return Array(_this.wy).fill(null);\n    }); //game progression: true=>playing, false=>stopped\n\n    this.gameRunning = false; //create instances\n\n    this.tetromino = new _tetromino__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.drawer = new _drawer__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.canvas, this.ctx, this.canvasNext, this.ctxNext, this.next);\n    this.evtQueue = new _evtQueue__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n    this.lastRow = new _lastRow__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n    this.scoreCount = new _scoreCount__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this.totalScore); //handleEvent\n\n    this.body.addEventListener('keydown', function (e) {\n      _this.evtQueue.keyQueue(e, _this.queueArr, _this.noticeScreen);\n    });\n    this.body.querySelector('#play').addEventListener('click', function () {\n      _this.noticeScreen('play');\n    });\n    this.body.querySelector('#replay').addEventListener('click', function () {\n      _this.noticeScreen('play');\n    });\n    window.addEventListener('resize', this.resize);\n  }\n\n  _createClass(Tetris, [{\n    key: \"setCurrentPiece\",\n    value: function setCurrentPiece() {\n      var rndType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.tetromino.randomBlock();\n      this.current = rndType;\n    }\n  }, {\n    key: \"setNextPiece\",\n    value: function setNextPiece() {\n      var rndType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.tetromino.randomBlock();\n      this.next = rndType;\n    }\n  }, {\n    key: \"update\",\n    //-------------------\n    //     Rendering\n    //-------------------\n    value: function update(dt) {\n      //handle user input, making changes to current x,y position of the piece\n      this.evtQueue.handler(this.queueArr.shift(), this.current, {\n        eachPixel: this.eachPixel,\n        getPieceArr: this.getPieceArr\n      }); //update visual display of the score with increment of 1\n\n      if (this.scoreDisplay < this.totalScore) {\n        this.scoreDisplay += 1;\n        this.scoreBoard.innerHTML = \"Score: \".concat(this.scoreDisplay);\n        this.stageLevel.innerHTML = \"Stage \".concat(this.stageNumber);\n      } //make the piece drop after certain time has passed\n\n\n      this.t += dt; //console.log(this.t);\n\n      if (this.t > this.step) {\n        this.t -= this.step; ///console.log('---------------DROP-----------------');\n\n        this.drop();\n      }\n    }\n  }, {\n    key: \"drop\",\n    //auto drop piece down and check for collision if occupied spave\n    value: function drop() {\n      //evtQueue. down\n      //console.log(this.evtQueue.move(this.KEY.DOWN));\n      if (!this.evtQueue.move(this.KEY.DOWN)) {\n        //check if the top piece has no space to evtQueue. and is on the top\n        //hence game over\n        if (this.current.y < 1) {\n          this.reset();\n        }\n\n        if (this.gameRunning) {\n          this.droppedPiece(); //set the piece arr index\n\n          this.scoreFlag = this.lastRow.eachRow({\n            getPieceArr: this.getPieceArr,\n            setPieceArr: this.setPieceArr\n          }); //search for a complete line and reevtQueue.\n\n          if (this.scoreFlag) {\n            this.scoreCount.setScore();\n            this.totalScore = this.scoreCount.getScore();\n\n            if (this.totalScore > 1 && this.totalScore % 20 === 0) {\n              this.increaseLevel();\n              console.log(this.step, 'level up');\n            }\n          } //advance stage\n\n\n          this.setCurrentPiece(this.next); //set current piece to next piece\n\n          this.setNextPiece(); //get random piece\n\n          this.evtQueue.clearEvtQueue(this.queueArr); //clear all remaining event queue\n        }\n      }\n    } //save the dropped pieces into piece arr\n\n  }, {\n    key: \"droppedPiece\",\n    value: function droppedPiece() {\n      var _this2 = this;\n\n      this.eachPixel(this.current.x, this.current.y, this.current, function (x, y) {\n        _this2.setPieceArr(x, y);\n      });\n    } //-------------------\n    //     startMenu\n    //-------------------\n\n  }, {\n    key: \"reset\",\n    value: function reset() {\n      //alert('game over');\n      this.scoreCount.setScore(0);\n      this.noticeScreen('replay');\n      window.cancelAnimationFrame(this.frameId);\n      this.gameRunning = false;\n      this.pieceArr.forEach(function (row) {\n        return row.forEach(function (pixel, index) {\n          if (pixel) {\n            row[index] = null;\n          }\n        });\n      });\n    }\n  }, {\n    key: \"increaseLevel\",\n    value: function increaseLevel() {\n      if (this.step > 0.7) {\n        this.step = this.step - 0.1;\n      } else if (this.step <= 0.7 && this.step > 0.4) {\n        this.step = this.step - 0.05;\n      } else if (this.step <= 0.4 && this.step > 0.1) {\n        this.step = this.step - 0.02;\n      }\n\n      this.step = Math.round(this.step * 100) / 100;\n      this.stageNumber = this.stageNumber + 1;\n    }\n  }]);\n\n  return Tetris;\n}();\n\nvar next = document.querySelector('#next');\nvar canvas = document.querySelector('#canvas');\nvar body = document.querySelector('body');\nnew Tetris(canvas, body, next);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/lastRow.js":
/*!************************!*\
  !*** ./src/lastRow.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LastRow; });\n/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configs */ \"./src/configs.js\");\n\nfunction LastRow() {\n  this.wx = _configs__WEBPACK_IMPORTED_MODULE_0__[\"WELL\"].wx;\n  this.wy = _configs__WEBPACK_IMPORTED_MODULE_0__[\"WELL\"].wy;\n}\n\nLastRow.prototype.eachRow = function (callbacks) {\n  this.callbacks = callbacks;\n  var completeRow = true;\n  var y; //scan the arr from wy to y\n\n  for (y = this.wy; y >= 0; y--) {\n    for (var x = 0; x < this.wx; x++) {\n      if (!this.callbacks.getPieceArr(x, y)) {\n        completeRow = false;\n        break;\n      }\n\n      completeRow = true;\n    }\n\n    if (completeRow) {\n      this.removeLine(y);\n      y++;\n      return true;\n    }\n  }\n};\n\nLastRow.prototype.removeLine = function (y) {\n  //add score\n  for (var row = y; row >= 0; row--) {\n    for (var x = 0; x < this.wx; x++) {\n      this.callbacks.setPieceArr(x, row, row == 0 ? null : this.callbacks.getPieceArr(x, row - 1) //set the row to previous row and top row to null\n      );\n    }\n  }\n};\n\n//# sourceURL=webpack:///./src/lastRow.js?");

/***/ }),

/***/ "./src/scoreCount.js":
/*!***************************!*\
  !*** ./src/scoreCount.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ScoreCount; });\nfunction ScoreCount(totalScore) {\n  this.totalScore = totalScore;\n  console.log(this.totalScore);\n}\n\nScoreCount.prototype.getScore = function () {\n  return this.totalScore;\n};\n\nScoreCount.prototype.setScore = function () {\n  var increment = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;\n  this.totalScore += increment;\n};\n\n//# sourceURL=webpack:///./src/scoreCount.js?");

/***/ }),

/***/ "./src/tetromino.js":
/*!**************************!*\
  !*** ./src/tetromino.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Tetromino; });\n/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configs */ \"./src/configs.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\nvar Tetromino = function Tetromino() {\n  var _this = this;\n\n  _classCallCheck(this, Tetromino);\n\n  this.randomBlock = function () {\n    while (true) {\n      //roll multiple times to prevent flood/drought\n      for (var roll = 0; roll < 6; ++roll) {\n        _this.i = Math.floor(Math.random() * 35);\n        _this.piece = _this.bag[_this.i];\n\n        if (_this.history.includes(_this.piece) === false || roll === 5) {\n          break;\n        }\n\n        if (_this.order.length) {\n          _this.bag[_this.i] = _this.order[0];\n        }\n      } //update piece order by remoing the piece in order if piece found\n      //order[0] replaces the index of chosen piece, this prevents drought\n      //pushes the new piece at the back of the order arr\n\n\n      if (_this.order.includes(_this.piece)) {\n        //order include the chosen piece, remove it\n        _this.order.splice(_this.order.indexOf(_this.piece), 1);\n      }\n\n      _this.order.push(_this.piece); //order[0] is used to overwrite bag[i] to make the piece more likely\n      //to be picked\n\n\n      _this.bag[_this.i] = _this.order[0]; //update history with the newly picked piece\n\n      _this.history.shift();\n\n      _this.history[3] = _this.piece; // console.log('bag:', this.bag);\n      // console.log('order:', this.order);\n      // console.log('history:', this.history);\n      // console.log('piece:', [ this.piece ], 'i:', this.i);\n      // console.log('-------------------------------------');\n\n      return {\n        blockType: _this.piece,\n        x: Math.floor(Math.random() * (_this.wx - _this.TETROS[_this.piece].size)),\n        y: -1,\n        dir: _this.DIR.UP\n      };\n    }\n  };\n\n  this.TETROS = _configs__WEBPACK_IMPORTED_MODULE_0__[\"TETROS\"];\n  this.wx = _configs__WEBPACK_IMPORTED_MODULE_0__[\"WELL\"].wx;\n  this.DIR = _configs__WEBPACK_IMPORTED_MODULE_0__[\"DIR\"];\n  this.tetroSet = ['i', 'j', 'l', 'o', 's', 't', 'z'];\n  this.order = []; //35 piece 5 bag system\n\n  this.bag = this.tetroSet.concat(this.tetroSet, this.tetroSet, this.tetroSet, this.tetroSet); //first piece possibility\n\n  this.firstPiece = ['i', 'j', 'l', 't'][Math.floor(Math.random() * 4)]; // first piece should try to avoid s,z,o piece as much as possible\n\n  this.history = ['s', 'z', 'o', this.firstPiece];\n} //-------------------\n//     Pick random block\n//-------------------\n;\n\n\n\n//# sourceURL=webpack:///./src/tetromino.js?");

/***/ })

/******/ });