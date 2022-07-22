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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n\\nh1{\\n    font-size: 50px;\\n    text-align: center;\\n    text-decoration: underline;\\n    color: midnightblue;\\n}\\n\\n\\np2{\\n    font-size:20px;\\n    text-decoration: underline;\\n    color: darkblue;\\n}\\n\\n\\nbutton {\\n    background-color: darkblue;\\n    border: 2px  solid black;\\n    color: white;\\n    padding: 2px 15px;\\n    text-align: center;\\n    display: inline-block;\\n    font-size: 16px;\\n    position: relative;\\n    right: -20px;\\n    border-radius: 8px;\\n    transition-duration: 0.05s;\\n}\\n\\nbutton:active {\\n    box-shadow: 0 5px #666;\\n    transform: translateY(4px);\\n}\\n\\nbutton:hover{\\n    background-color: darkcyan;\\n}\\n\\nbutton:focus{\\n    background-color: mediumaquamarine;\\n}\\n\\nbody{\\n    background-color: cornsilk;\\n}\\n\\nli{\\n    font-size: 20px;\\n}\\n\\n\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://first-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://first-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://first-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://first-project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://first-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://first-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://first-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://first-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://first-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://first-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/graphen.js":
/*!************************!*\
  !*** ./src/graphen.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"graph1\": () => (/* binding */ graph1),\n/* harmony export */   \"graph2\": () => (/* binding */ graph2),\n/* harmony export */   \"graph3\": () => (/* binding */ graph3),\n/* harmony export */   \"graph4\": () => (/* binding */ graph4)\n/* harmony export */ });\n/* harmony import */ var _requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./requests */ \"./src/requests.js\");\n\n\n\n\n\n//\n//--------------  Funktionen für 1. Graphen\n//\n\n\nfunction graph1() {\n    google.charts.load('current', {\n        packages: [\"corechart\", \"line\"]\n    });\n    google.charts.setOnLoadCallback(drawChart);\n}\n\n\n\nasync function drawChart() {\n\n    let data = google.visualization.arrayToDataTable([\n        [\"Year\", \"Produktion\", \"Verbrauch\"],\n        [0, 0, 0],\n\n    ]);\n\n    // create options object with titles, colors, etc.\n    let options = {\n        title: \"Aktuelle Solardaten\",\n        hAxis: {\n            title: \"Time\"\n        },\n        vAxis: {\n            title: \"Watt\"\n        }\n    };\n    // draw chart on load\n    let chart = new google.visualization.LineChart(\n        document.getElementById(\"myChart\")\n    );\n    chart.draw(data, options);\n\n    // interval for adding new data every 250ms\n    let index = 0;\n    let counter =0;\n    setInterval(async function () {\n\n        const json = await (0,_requests__WEBPACK_IMPORTED_MODULE_0__.getWerte)();\n        //console.log(json)\n        const wert1=json.inputVoltage*json.inputAmpere\n        const wert2=json.batteryVoltage*json.outputAmpere\n        //console.log(\"p: \", wert1)\n        counter++;\n        if(counter===400){\n            graph1();\n        }\n\n        data.addRow([index, wert1, wert2]);\n        chart.draw(data, options);\n        index++;\n    }, 5000);\n\n\n\n}\n\n\n\n\n\n\n//\n//--------------  Funktionen für 2. Graphen\n//\n\n\n\nfunction graph2() {\n    google.charts.load('current', {\n        packages: [\"corechart\", \"line\"]\n    });\n    google.charts.setOnLoadCallback(batteryChart);\n}\n\nasync function batteryChart() {\n\n    let data = google.visualization.arrayToDataTable([\n        [\"Year\", \"Batteriespannung\"],\n        [0, 0],\n\n    ]);\n\n  //\n  // ------- Options\n    let options = {\n        title: \" \",\n        hAxis: {\n            title: \"Time\"\n        },\n        vAxis: {\n            title: \"Volt\",\n            viewWindowMode:'explicit',\n            viewWindow: {\n                max:15,\n                min:10\n            }\n        }\n    };\n    // draw chart on load\n    let chart = new google.visualization.LineChart(\n        document.getElementById(\"myChart2\")\n    );\n    chart.draw(data, options);\n\n    // interval for adding new data every 250ms\n    let index = 0;\n    let counter=0;\n    setInterval(async function () {\n        const json = await (0,_requests__WEBPACK_IMPORTED_MODULE_0__.getWerte)();\n        const wert=json.batteryVoltage;\n\n        counter++;\n        if (counter === 400) {\n            graph2();\n        }\n        data.addRow([index, wert]);\n        chart.draw(data, options);\n        index++;\n    }, 5000);\n}\n\n\n\n\n\n\n\n\n//\n//--------------  Funktionen für 3. Graphen\n//\n\nconst btn = document.getElementById(\"wahl\")\nbtn.onclick=()=>{\n\n\n    graph3();\n}\n\nfunction graph3() {\n\n    google.charts.load('current', {\n        packages: [\"corechart\", \"line\"]\n    });\n    google.charts.setOnLoadCallback(oldValues);\n}\n\nasync function oldValues() {\n\n    const myJson = await (0,_requests__WEBPACK_IMPORTED_MODULE_0__.fetchWithSeconds)(document.getElementById('zeitraum').selectedOptions[0].value)\n\n\n    let data = google.visualization.arrayToDataTable([\n        [\"Year\", \"Produktion\", \"Verbrauch\"],\n        [0, 0, 0],\n\n    ]);\n\n    //\n    // ------- Options\n    let options = {\n        title: \"Zeitraum\",\n        hAxis: {\n            title: \"Time\"\n        },\n        vAxis: {\n            title: \"Watt\"\n        }\n    };\n    // draw chart on load\n    let chart = new google.visualization.LineChart(\n        document.getElementById(\"myChart3\")\n    );\n    chart.draw(data, options);\n\n    // interval for adding new data\n    let index = 0;\n\n    for(let wert of myJson){\n        data.addRow([index, wert.inputVoltage * wert.inputAmpere, wert.batteryVoltage * wert.outputAmpere])\n        chart.draw(data, options)\n        index++;\n    }\n}\n\nconst button = document.getElementById(\"datumswahl\")\nbutton.onclick = () => {\n    graph4();\n\n}\n\nfunction graph4() {\n\n    google.charts.load('current', {\n        packages: [\"corechart\", \"line\"]\n    });\n    google.charts.setOnLoadCallback(WerteAbDatum);\n}\n\nasync function WerteAbDatum() {\n\n    console.log(\"auswahl: \", document.getElementById('start').value)\n    const datum=new Date(document.getElementById('start').value);\n    const aktuell= new Date();\n    const jahrUnterschied=365*(aktuell.getFullYear()-datum.getFullYear());\n    const monatUnterschied=30*(aktuell.getMonth()-datum.getMonth());\n    const tagUnterschied=aktuell.getDay()-datum.getDay();\n    const taganzahl=jahrUnterschied+monatUnterschied+tagUnterschied;\n    console.log(\"unterschied: \", taganzahl);\n\n    const response = await fetch(\"/api/data/get/tage/\" + taganzahl, {\n        method: 'GET',\n        headers: {\n            'Conent-Type': 'application/json'\n\n        }\n    });\n    const myJson = await response.json()\n    console.log(\"wert von datum: \", myJson)\n\n    let data = google.visualization.arrayToDataTable([\n        [\"Year\", \"Produktion\", \"Verbrauch\"],\n        [0, 0, 0],\n\n    ]);\n\n    let options = {\n        title: \"Zeitraum\",\n        hAxis: {\n            title: \"Time\"\n        },\n        vAxis: {\n            title: \"Watt\"\n        }\n    };\n\n    let chart = new google.visualization.LineChart(\n        document.getElementById(\"myChart4\")\n    );\n    chart.draw(data, options);\n\n    let index = 0;\n\n    for(let wert of myJson){\n        data.addRow([index, wert.inputVoltage * wert.inputAmpere, wert.batteryVoltage * wert.outputAmpere])\n        chart.draw(data, options)\n        index++;\n    }\n\n}\n\n\n//# sourceURL=webpack://first-project/./src/graphen.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _graphen_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graphen */ \"./src/graphen.js\");\n/* harmony import */ var _requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./requests */ \"./src/requests.js\");\n\n\n\n\n\n\n\n//\n//------- Aufruf der ersten zwei Graphen\n//\n\n\nwindow.onload = function () {\n  console.log(\"Hello World!\")\n\n  Datum();\n  latestData()\n  whanzeigen()\n  ;(0,_graphen_js__WEBPACK_IMPORTED_MODULE_1__.graph1)();\n  (0,_graphen_js__WEBPACK_IMPORTED_MODULE_1__.graph2)();\n}\n\nwindow.latestData = async () => {\n  const node = document.getElementById(\"AP\")\n  const node1 = document.getElementById(\"AV\")\n  const node2 = document.getElementById(\"BV\")\n\n  try{\n  const myJson = await (0,_requests__WEBPACK_IMPORTED_MODULE_2__.fetchLatest)();\n  node.innerText =\"Aktuelle Produktion: \" + myJson.inputVoltage * myJson.inputAmpere + \"W\"\n  node1.innerText =\"Aktueller Verbrauch: \" + myJson.batteryVoltage * myJson.outputAmpere + \"W\"\n  node2.innerText =\"Batteriespannung: \" + myJson.batteryVoltage + \"V\"\n\n}catch{\n  console.log(\"Keine Daten vorhanden!\")\n    node.innerText =\"Aktuelle Produktion: Keine Daten vorhanden\"\n    node1.innerText =\"Aktueller Verbrauch: Keine Daten vorhanden\"\n    node2.innerText =\"Batteriespannung: Keine Daten vorhanden\"\n\n\n}\n}\n\nasync function whanzeigen(){\n  const whV = document.getElementById(\"whV\")\n  const whP = document.getElementById(\"whP\")\n  try {\n    const myJson = await (0,_requests__WEBPACK_IMPORTED_MODULE_2__.fetchWh)();\n    whV.innerText = \"Gesamte Produktion: \" + myJson.wh_production + \"Wh\"\n    whP.innerText = \"Gesamter Verbrauch: \" + myJson.wh_verbrauch + \"Wh\"\n  }catch {\n    whV.innerText = \"Gesamte Produktion: Keine Daten vorhanden\"\n    whP.innerText = \"Gesamter Verbrauch: Keine Daten vorhanden\"\n  }\n}\n\nsetInterval(whanzeigen, 60000)\nsetInterval(latestData , 10000 );\n\n/*window.getWerte1 = async () => {\n\n  try{\n    const myJson=await getWerte()\n    return myJson\n  }catch{\n    console.log(\"Keime Daten da!\")\n  }\n\n}\n\n */\n\n\n\n//\n//------------ Funktionen für einzelde Werte\n//\n\n\nwindow.getProduktion = async () =>{\n\n  try {\n    const myJson = await (0,_requests__WEBPACK_IMPORTED_MODULE_2__.fetchLatest)()\n      return myJson.inputVoltage * myJson.inputAmpere\n  }catch{\n    console.log(\"Keine Daten vorhanden!\")\n  }\n}\n\nwindow.getBatteryVoltage = async () =>{\n  try {\n  const myJson = await (0,_requests__WEBPACK_IMPORTED_MODULE_2__.fetchLatest)()\n  return myJson.batteryVoltage\n  }catch{\n    console.log(\"Keine Daten vorhanden!\")\n  }\n}\n\n  //Produktion: myJson.inputVoltage * myJson.inputAmpere\n  //myJson.batteryVoltage\n  //Verbrauch: myJson.batteryVoltage * myJson.outputAmpere\n\n  //return myJson;\nwindow.getVerbrauch = async () =>{\n  try {\n  const myJson = await (0,_requests__WEBPACK_IMPORTED_MODULE_2__.fetchLatest)()\n  return myJson.batteryVoltage * myJson.outputAmpere\n  }catch{\n    console.log(\"Keine Daten vorhanden!\")\n  }\n}\n\n\n\n\n\nasync function Datum() {\n\n  const heute = new Date();\n  let month = \"\" + (heute.getMonth() + 1);\n  let day = \"\" + heute.getDate();\n  let year = heute.getFullYear();\n  if (month.length < 2) month = \"0\" + month;\n  if (day.length < 2) day = \"0\" + day;\n  let aktuell = [year, month, day-1].join(\"-\");\n\n\n  const dateControl = document.getElementById(\"start\");\n  dateControl.value = aktuell;\n  dateControl.max = aktuell;\n\n\n  const myJson = await (0,_requests__WEBPACK_IMPORTED_MODULE_2__.fetchDate)();\n\n  const min = new Date(myJson.dateTime);\n\n  let month1 = \"\" + (min.getMonth() + 1);\n  let day1 = \"\" + min.getDate();\n  let year1 = min.getFullYear();\n  if (month1.length < 2) month1 = \"0\" + month1;\n  if (day1.length < 2) day1 = \"0\" + day1;\n  dateControl.min = [year1, month1, day1].join(\"-\");\n\n}\n\n\n\n\n//# sourceURL=webpack://first-project/./src/index.js?");

/***/ }),

/***/ "./src/requests.js":
/*!*************************!*\
  !*** ./src/requests.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchDate\": () => (/* binding */ fetchDate),\n/* harmony export */   \"fetchLatest\": () => (/* binding */ fetchLatest),\n/* harmony export */   \"fetchWh\": () => (/* binding */ fetchWh),\n/* harmony export */   \"fetchWithSeconds\": () => (/* binding */ fetchWithSeconds),\n/* harmony export */   \"getWerte\": () => (/* binding */ getWerte)\n/* harmony export */ });\n\n\nasync function fetchLatest(){\n    const response = await fetch(\"/api/data/get/latest\", {\n        method: 'GET',\n        headers: {\n            'Conent-Type': 'application/json'\n\n        }\n    });\n    return await response.json();\n}\n\nasync function getWerte() {\n    const response = await fetch(\"/api/data/get/latest\", {\n        method: 'GET',\n\n        headers: {\n            'Conent-Type': 'application/json'\n\n        }\n    });\n    return await response.json()\n}\n\nasync  function fetchWithSeconds(seconds){\n    const response = await fetch(\"/api/data/get/\" + seconds, {\n        method: 'GET',\n        headers: {\n            'Conent-Type': 'application/json'\n\n        }\n    });\n    return await response.json()\n}\n\nasync function fetchWh(){\n    const response = await fetch(\"/api/data/get/Wh\", {\n        method: 'GET',\n        headers: {\n            'Conent-Type': 'application/json'\n\n        }\n    });\n    return await response.json();\n}\n\nasync function fetchDate(){\n    const response = await fetch(\"/api/data/get/oldestDate\", {\n        method: 'GET',\n        headers: {\n            'Conent-Type': 'application/json'\n\n        }\n    });\n    return await response.json()\n\n}\n\n\n\n\n\n\n//# sourceURL=webpack://first-project/./src/requests.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;