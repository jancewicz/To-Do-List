/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `body {
    display: flex;
    flex-direction: column;
    margin: 0;
}

.full-page-container {
    margin: 0;
    width: 100%;
    height: 100vh;
}

.header {
    width: 100%;
    height: 10%;
    background-color: #EFBC9B;
    display: flex;
    justify-content: center;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    font-size: 50px;
    font-weight: bold;
    color: #483434;
}

.grid-container {
    width: 100%;
    height: 90%;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr 2.5fr;
    height: 90%;
}

.categories {
    list-style: none;
}


.grid-element-1 {
    background-color: #C2DEDC;
    grid-column: 1;
    grid-row: 1 / span 1;
    height: 100%;
    width: 100%;
    display: flex;
}

.checkbox-input-category+label {
    cursor: pointer;
}

.grid-element-1>form {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.grid-element-1>form>#project-input {
    width: 34em;
    height: 4em;
}

#submit-project {
    display: flex;
    justify-content: center;
}

#submit-project-button {
    width: 10em;
    height: 2em;
    background-color: #EDE4E0;
    border-radius: 4px;
}


#submit-project-button:hover {
    background-color: #F6F0EC;
}

.grid-element-2 {
    background-color: #D6DAC8;
    grid-column: 1;
    grid-row: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    overflow-x: hidden;
}

.project-list-element {
    width: 90%;
    height: 15%;
    background-color: #EAE0BB;
    z-index: 1;
    margin-top: 1em;
    border: 3px #86A789 solid;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.go-to-project {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 1em;
    cursor: pointer;
}

.go-to-project:hover {
    text-decoration: underline;
}

.delete-project {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.trashbin-icon:hover {
    transform: scale(1.2);
}

.grid-element-3 {
    background-color: #FBF3D5;
    grid-column: 2;
    grid-row: 1/3;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    overflow-x: hidden;
}

.project-overview {
    position: relative;
    margin-top: 1em;
    width: 80%;
    height: 20%;
    display: flex;
    flex-direction: row;
    cursor: pointer;
    scale: 1;
    border: 10px solid #86A789;
    /* */
    border-radius: 15px;


}

.project-data {
    width: 70%;
    height: 100%;
    overflow: scroll;
    overflow-x: hidden;
    display: flex;
    flex-direction: row;
}

.project-overview:hover {
    scale: 1.2;
    translate: 0px 1em;
    height: 30%;
    transition: scale 0.5s ease;
    margin-bottom: 2em;
}

.project-overview-active {
    position: relative;
    margin-top: 1em;
    width: 80%;
    background-color: floralwhite;
    display: flex;
    flex-direction: row;
    cursor: pointer;
    height: 30%;
    scale: 1.2;
    translate: 0px 1em;
    margin-bottom: 2em;
}

.input-to-insert-left {
    width: 60%;
    height: 100%;
    background-color: paleturquoise;
}

.input-to-insert-right {
    width: 40%;
    height: 100%;
    background-color: darksalmon;
}


input[type="date"] {
    background: transparent;
    color: white;
    border-radius: 4px;
}

.tasks {
    margin-top: 1em;
}

::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
    background: #888;
}

::-webkit-scrollbar-thumb:hover {
    background: #555;
}

.project-data-right-sector {
    width: 30%;
    height: 100%;
    background-color: greenyellow;
    display: flex;
    flex-direction: column;
}

.right-sector-upper {
    height: 80em;
    width: 100%;
    background-color: bisque;
    display: flex;
    align-items: center;
    justify-content: center;
}

.priority-dropdown {
    position: relative;
    margin: 0.5em;

}

.priority-dropdown * {
    box-sizing: border-box;
}

.dropdown-toggle-select {
    background: #2a2f3b;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #2a2f3b;
    border-radius: 1em;
    padding: 0.5em;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.dropdown-toggle-clicked {
    border: 2px #26489a solid;
    box-shadow: 0 0 0 0.1em #26489a;
}

.dropdown-toggle-select:hover {
    background: #323741;
}

.caret {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid #fff;
}

.caret-rotate {
    transform: rotate(180deg);
}

.dropdown-options {
    list-style: none;
    padding: 0.2em 0.5em;
    background: #323741;
    border: 1px solid #363a43;
    border-radius: 0.5em;
    color: #9fa5b5;
    position: absolute;
    top: 2em;
    left: 50%;
    width: 100%;
    transform: translateX(-50%);
    opacity: 0;
    display: none;
    transition: 0.2s;
    z-index: 1;

}

.dropdown-options li {
    padding: 0.5em 0.5em;
    margin: 0.2em 0;
    border-radius: 0.5em;
    cursor: pointer;
}

.dropdown-options li :hover {
    background: #2a2d35;
}

.active {
    background: #23242a;
}

.menu-open {
    display: block;
    opacity: 1;
}

.right-sector-lower {
    height: 500%;
    width: 100%;
    background-color: cornflowerblue;
    display: flex;
    align-items: center;
    justify-content: center;
}

.delete-tasks-overview:hover {
    transform: scale(1.4);
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 0;\r\n}\r\n\r\n.full-page-container {\r\n    margin: 0;\r\n    width: 100%;\r\n    height: 100vh;\r\n}\r\n\r\n.header {\r\n    width: 100%;\r\n    height: 10%;\r\n    background-color: #EFBC9B;\r\n    display: flex;\r\n    justify-content: center;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: flex-end;\r\n    font-size: 50px;\r\n    font-weight: bold;\r\n    color: #483434;\r\n}\r\n\r\n.grid-container {\r\n    width: 100%;\r\n    height: 90%;\r\n    display: grid;\r\n    grid-template-columns: 1fr 3fr;\r\n    grid-template-rows: 1fr 2.5fr;\r\n    height: 90%;\r\n}\r\n\r\n.categories {\r\n    list-style: none;\r\n}\r\n\r\n\r\n.grid-element-1 {\r\n    background-color: #C2DEDC;\r\n    grid-column: 1;\r\n    grid-row: 1 / span 1;\r\n    height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n}\r\n\r\n.checkbox-input-category+label {\r\n    cursor: pointer;\r\n}\r\n\r\n.grid-element-1>form {\r\n    height: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n}\r\n\r\n.grid-element-1>form>#project-input {\r\n    width: 34em;\r\n    height: 4em;\r\n}\r\n\r\n#submit-project {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n#submit-project-button {\r\n    width: 10em;\r\n    height: 2em;\r\n    background-color: #EDE4E0;\r\n    border-radius: 4px;\r\n}\r\n\r\n\r\n#submit-project-button:hover {\r\n    background-color: #F6F0EC;\r\n}\r\n\r\n.grid-element-2 {\r\n    background-color: #D6DAC8;\r\n    grid-column: 1;\r\n    grid-row: 2;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    overflow: scroll;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.project-list-element {\r\n    width: 90%;\r\n    height: 15%;\r\n    background-color: #EAE0BB;\r\n    z-index: 1;\r\n    margin-top: 1em;\r\n    border: 3px #86A789 solid;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.go-to-project {\r\n    width: 80%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    padding-left: 1em;\r\n    cursor: pointer;\r\n}\r\n\r\n.go-to-project:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n.delete-project {\r\n    width: 20%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.trashbin-icon:hover {\r\n    transform: scale(1.2);\r\n}\r\n\r\n.grid-element-3 {\r\n    background-color: #FBF3D5;\r\n    grid-column: 2;\r\n    grid-row: 1/3;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    overflow: scroll;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.project-overview {\r\n    position: relative;\r\n    margin-top: 1em;\r\n    width: 80%;\r\n    height: 20%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    cursor: pointer;\r\n    scale: 1;\r\n    border: 10px solid #86A789;\r\n    /* */\r\n    border-radius: 15px;\r\n\r\n\r\n}\r\n\r\n.project-data {\r\n    width: 70%;\r\n    height: 100%;\r\n    overflow: scroll;\r\n    overflow-x: hidden;\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.project-overview:hover {\r\n    scale: 1.2;\r\n    translate: 0px 1em;\r\n    height: 30%;\r\n    transition: scale 0.5s ease;\r\n    margin-bottom: 2em;\r\n}\r\n\r\n.project-overview-active {\r\n    position: relative;\r\n    margin-top: 1em;\r\n    width: 80%;\r\n    background-color: floralwhite;\r\n    display: flex;\r\n    flex-direction: row;\r\n    cursor: pointer;\r\n    height: 30%;\r\n    scale: 1.2;\r\n    translate: 0px 1em;\r\n    margin-bottom: 2em;\r\n}\r\n\r\n.input-to-insert-left {\r\n    width: 60%;\r\n    height: 100%;\r\n    background-color: paleturquoise;\r\n}\r\n\r\n.input-to-insert-right {\r\n    width: 40%;\r\n    height: 100%;\r\n    background-color: darksalmon;\r\n}\r\n\r\n\r\ninput[type=\"date\"] {\r\n    background: transparent;\r\n    color: white;\r\n    border-radius: 4px;\r\n}\r\n\r\n.tasks {\r\n    margin-top: 1em;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    width: 10px;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n    background: #f1f1f1;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    background: #888;\r\n}\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n    background: #555;\r\n}\r\n\r\n.project-data-right-sector {\r\n    width: 30%;\r\n    height: 100%;\r\n    background-color: greenyellow;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.right-sector-upper {\r\n    height: 80em;\r\n    width: 100%;\r\n    background-color: bisque;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.priority-dropdown {\r\n    position: relative;\r\n    margin: 0.5em;\r\n\r\n}\r\n\r\n.priority-dropdown * {\r\n    box-sizing: border-box;\r\n}\r\n\r\n.dropdown-toggle-select {\r\n    background: #2a2f3b;\r\n    color: #fff;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    border: 1px solid #2a2f3b;\r\n    border-radius: 1em;\r\n    padding: 0.5em;\r\n    cursor: pointer;\r\n    transition: background-color 0.3s ease;\r\n}\r\n\r\n.dropdown-toggle-clicked {\r\n    border: 2px #26489a solid;\r\n    box-shadow: 0 0 0 0.1em #26489a;\r\n}\r\n\r\n.dropdown-toggle-select:hover {\r\n    background: #323741;\r\n}\r\n\r\n.caret {\r\n    width: 0;\r\n    height: 0;\r\n    border-left: 5px solid transparent;\r\n    border-right: 5px solid transparent;\r\n    border-top: 6px solid #fff;\r\n}\r\n\r\n.caret-rotate {\r\n    transform: rotate(180deg);\r\n}\r\n\r\n.dropdown-options {\r\n    list-style: none;\r\n    padding: 0.2em 0.5em;\r\n    background: #323741;\r\n    border: 1px solid #363a43;\r\n    border-radius: 0.5em;\r\n    color: #9fa5b5;\r\n    position: absolute;\r\n    top: 2em;\r\n    left: 50%;\r\n    width: 100%;\r\n    transform: translateX(-50%);\r\n    opacity: 0;\r\n    display: none;\r\n    transition: 0.2s;\r\n    z-index: 1;\r\n\r\n}\r\n\r\n.dropdown-options li {\r\n    padding: 0.5em 0.5em;\r\n    margin: 0.2em 0;\r\n    border-radius: 0.5em;\r\n    cursor: pointer;\r\n}\r\n\r\n.dropdown-options li :hover {\r\n    background: #2a2d35;\r\n}\r\n\r\n.active {\r\n    background: #23242a;\r\n}\r\n\r\n.menu-open {\r\n    display: block;\r\n    opacity: 1;\r\n}\r\n\r\n.right-sector-lower {\r\n    height: 500%;\r\n    width: 100%;\r\n    background-color: cornflowerblue;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.delete-tasks-overview:hover {\r\n    transform: scale(1.4);\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/classes/project.ts":
/*!********************************!*\
  !*** ./src/classes/project.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Category: () => (/* binding */ Category),
/* harmony export */   Project: () => (/* binding */ Project)
/* harmony export */ });
class Project {
    constructor(name, category = Category.GENERAL, createdAt) {
        this.name = name;
        this.category = category;
        this.createdAt = new Date();
    }
}
var Category;
(function (Category) {
    Category["GENERAL"] = "general";
    Category["WORK"] = "work";
    Category["SPORT"] = "sport";
    Category["LEISURE"] = "leisure";
})(Category || (Category = {}));
;


/***/ }),

/***/ "./src/functionality/convertToActive.ts":
/*!**********************************************!*\
  !*** ./src/functionality/convertToActive.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toggleProjectState: () => (/* binding */ toggleProjectState)
/* harmony export */ });
/* harmony import */ var _render_functions_renderNewProjectOverview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render-functions/renderNewProjectOverview */ "./src/render-functions/renderNewProjectOverview.ts");

const toggleProjectState = () => {
    _render_functions_renderNewProjectOverview__WEBPACK_IMPORTED_MODULE_0__.overviewsContainer.addEventListener("click", (event) => {
        const target = event.target;
        if (target.className === "project-overview") {
            const projectsList = [...document.querySelectorAll(".project-overview")];
            const projectIndex = projectsList.indexOf(target);
            if (projectIndex !== -1) {
                const overviewList = document.querySelectorAll(".project-overview");
                overviewList.forEach((overview) => {
                    overview.addEventListener("click", () => {
                        overview.classList.toggle("project-overview-active");
                    });
                });
                console.log(`BE`);
            }
        }
    });
};
document.addEventListener("click", (event) => {
    const activeProjectElements = document.querySelectorAll(".project-overview-active");
    activeProjectElements.forEach((activeProject) => {
        if (!activeProject.contains(event.target)) {
            activeProject.classList.remove("project-overview-active");
            activeProject.classList.add("project-overview");
        }
    });
});


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectCategory: () => (/* binding */ selectCategory)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _classes_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/project */ "./src/classes/project.ts");
/* harmony import */ var _render_functions_renderNewProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render-functions/renderNewProject */ "./src/render-functions/renderNewProject.ts");
/* harmony import */ var _render_functions_renderNewProjectOverview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render-functions/renderNewProjectOverview */ "./src/render-functions/renderNewProjectOverview.ts");




const submitFormButton = document.getElementById("submit-project-button");
const projectOverviewList = document.querySelectorAll(".project-overview");
const categories = [
    _classes_project__WEBPACK_IMPORTED_MODULE_1__.Category.GENERAL,
    _classes_project__WEBPACK_IMPORTED_MODULE_1__.Category.WORK,
    _classes_project__WEBPACK_IMPORTED_MODULE_1__.Category.SPORT,
    _classes_project__WEBPACK_IMPORTED_MODULE_1__.Category.LEISURE
];
const selectCategory = () => {
    let selectedCategory = _classes_project__WEBPACK_IMPORTED_MODULE_1__.Category.GENERAL;
    const categoryCheckboxElement = document.querySelector(".checkbox-input-category");
    switch (categoryCheckboxElement.value) {
        case "general":
            selectedCategory = _classes_project__WEBPACK_IMPORTED_MODULE_1__.Category.GENERAL;
            break;
        case "work":
            selectedCategory = _classes_project__WEBPACK_IMPORTED_MODULE_1__.Category.WORK;
            break;
        case "leisure":
            selectedCategory = _classes_project__WEBPACK_IMPORTED_MODULE_1__.Category.LEISURE;
            break;
        case "sport":
            selectedCategory = _classes_project__WEBPACK_IMPORTED_MODULE_1__.Category.SPORT;
            break;
    }
    return selectedCategory;
};
if (submitFormButton) {
    submitFormButton.addEventListener("click", (event) => {
        event.preventDefault();
        (0,_render_functions_renderNewProject__WEBPACK_IMPORTED_MODULE_2__.renderNewProject)();
    });
}
;
(0,_render_functions_renderNewProject__WEBPACK_IMPORTED_MODULE_2__.removeProjectFromContainer)();
(0,_render_functions_renderNewProjectOverview__WEBPACK_IMPORTED_MODULE_3__.renderNewProjectOverview)();


/***/ }),

/***/ "./src/render-functions/renderDropDown.ts":
/*!************************************************!*\
  !*** ./src/render-functions/renderDropDown.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dropdownFunctionality: () => (/* binding */ dropdownFunctionality),
/* harmony export */   renderDropDown: () => (/* binding */ renderDropDown)
/* harmony export */ });
/* harmony import */ var _renderNewProjectOverview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderNewProjectOverview */ "./src/render-functions/renderNewProjectOverview.ts");

const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');
const renderDropDown = () => {
    const dropdownContainer = document.createElement("div");
    dropdownContainer.classList.add("priority-dropdown");
    const buttonDropdownElement = document.createElement("button");
    buttonDropdownElement.classList.add("dropdown-toggle-select");
    const selectedDiv = document.createElement("div");
    selectedDiv.classList.add("selected");
    selectedDiv.innerText = "";
    const caret = document.createElement("div");
    caret.classList.add("caret");
    buttonDropdownElement.appendChild(selectedDiv);
    buttonDropdownElement.appendChild(caret);
    const optionsListContainer = document.createElement("ul");
    optionsListContainer.classList.add("dropdown-options");
    for (let i = 0; i < 3; i++) {
        const dropdownListOption = document.createElement("li");
        dropdownListOption.setAttribute("id", `"dropdown-option-${i + 1}"`);
        dropdownListOption.innerText = `${i + 1}`;
        optionsListContainer.appendChild(dropdownListOption);
    }
    ;
    dropdownContainer.appendChild(buttonDropdownElement);
    dropdownContainer.appendChild(optionsListContainer);
    return dropdownContainer;
};
const dropdownFunctionality = () => {
    _renderNewProjectOverview__WEBPACK_IMPORTED_MODULE_0__.overviewsContainer.addEventListener("click", (event) => {
        const target = event.target;
        if (target.closest(".priority-dropdown")) {
            const dropdownContainer = target.closest(".priority-dropdown");
            if (dropdownContainer) {
                const dropdownButton = dropdownContainer.querySelector(".dropdown-toggle-select");
                const menu = dropdownContainer.querySelector(".dropdown-options");
                const caret = dropdownContainer.querySelector(".caret");
                dropdownButton.classList.toggle("dropdown-toggle-clicked");
                menu.classList.toggle("menu-open");
                caret.classList.toggle("caret-rotate");
            }
        }
        if (target.tagName === "LI" && target.closest(".dropdown-options")) {
            const option = target;
            const dropdownContainer = option.closest(".priority-dropdown");
            if (dropdownContainer) {
                const dropdownButton = dropdownContainer.querySelector(".dropdown-toggle-select");
                const menu = dropdownContainer.querySelector(".dropdown-options");
                const options = dropdownContainer.querySelectorAll(".dropdown-options li");
                applyPriorityToProject();
                dropdownButton.classList.remove("dropdown-toggle-clicked");
                menu.classList.remove("menu-open");
                options.forEach((opt) => {
                    opt.classList.remove("active");
                });
                option.classList.add("active");
            }
        }
    });
    document.addEventListener("click", (event) => {
        const target = event.target;
        const dropdownContainers = document.querySelectorAll(".priority-dropdown");
        dropdownContainers.forEach((dropdownContainer) => {
            const dropdownButton = dropdownContainer.querySelector(".dropdown-toggle-select");
            const menu = dropdownContainer.querySelector(".dropdown-options");
            if (!dropdownContainer.contains(target)) {
                dropdownButton.classList.remove("dropdown-toggle-clicked");
                menu.classList.remove("menu-open");
            }
        });
    });
};
const applyPriorityToProject = () => {
    const priorityDropdowns = document.querySelectorAll('.priority-dropdown');
    _renderNewProjectOverview__WEBPACK_IMPORTED_MODULE_0__.overviewsContainer.addEventListener("click", (event) => {
        priorityDropdowns.forEach((dropdown) => {
            if (dropdown.contains(event.target)) {
                if (event.target.classList.contains('dropdown-options')) {
                    const selectedOption = event.target.textContent;
                    dropdown.querySelector('.selected').textContent = selectedOption;
                }
            }
        });
    });
};


/***/ }),

/***/ "./src/render-functions/renderNewProject.ts":
/*!**************************************************!*\
  !*** ./src/render-functions/renderNewProject.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeProjectFromContainer: () => (/* binding */ removeProjectFromContainer),
/* harmony export */   renderNewProject: () => (/* binding */ renderNewProject),
/* harmony export */   rendertrashBinIcon: () => (/* binding */ rendertrashBinIcon)
/* harmony export */ });
/* harmony import */ var _classes_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/project */ "./src/classes/project.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");


let projects = [];
let projectId = 1;
const rendertrashBinIcon = () => {
    const trashbinIcon = document.createElement("img");
    trashbinIcon.setAttribute("src", "images/trashbin.svg");
    trashbinIcon.classList.add("trashbin-icon");
    trashbinIcon.setAttribute("alt", "trashbin-icon");
    trashbinIcon.setAttribute("id", `delete-${projectId}`);
    return trashbinIcon;
};
const renderNewProject = () => {
    const selectedCategory = (0,___WEBPACK_IMPORTED_MODULE_0__.selectCategory)();
    const projectsOverview = document.querySelector(".grid-element-2");
    const projectNameInput = document.querySelector("#project-input");
    let newProject = new _classes_project__WEBPACK_IMPORTED_MODULE_1__.Project(projectNameInput.value, selectedCategory, new Date());
    const newProjectELement = document.createElement("div");
    newProjectELement.classList.add("project-list-element");
    newProjectELement.id = `project-${projectId}`;
    const newProjectDescription = document.createElement("div");
    newProjectDescription.classList.add("go-to-project");
    newProjectDescription.innerText = newProject.name;
    const trashbinDiv = document.createElement("div");
    trashbinDiv.classList.add("delete-project");
    const trashbinIcon = rendertrashBinIcon();
    trashbinDiv.appendChild(trashbinIcon);
    newProjectELement.appendChild(newProjectDescription);
    newProjectELement.appendChild(trashbinDiv);
    projectsOverview.appendChild(newProjectELement);
    projects.push(newProject);
    console.log(newProject);
    console.log(projects);
    projectId++;
    projectNameInput.value = "";
};
const removeProjectFromContainer = () => {
    const projectsContainerElement = document.querySelector(".grid-element-2");
    projectsContainerElement.addEventListener("click", (event) => {
        var _a, _b;
        const target = event.target;
        if (target.tagName === "IMG" && target.closest(".delete-project")) {
            const trashbins = [...document.querySelectorAll(".delete-project img")];
            const trashbinIndex = trashbins.indexOf(target);
            if (trashbinIndex !== -1) {
                (_b = (_a = trashbins[trashbinIndex].parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.remove();
            }
            projects = projects.filter((el, index) => {
                return index !== trashbinIndex;
            });
            console.log(projects);
        }
    });
};


/***/ }),

/***/ "./src/render-functions/renderNewProjectOverview.ts":
/*!**********************************************************!*\
  !*** ./src/render-functions/renderNewProjectOverview.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   overviewsContainer: () => (/* binding */ overviewsContainer),
/* harmony export */   renderDataInputContainerLeftSide: () => (/* binding */ renderDataInputContainerLeftSide),
/* harmony export */   renderDataInputContainerMiddleSide: () => (/* binding */ renderDataInputContainerMiddleSide),
/* harmony export */   renderDataInputContainerRightSide: () => (/* binding */ renderDataInputContainerRightSide),
/* harmony export */   renderNewOverview: () => (/* binding */ renderNewOverview),
/* harmony export */   renderNewProjectOverview: () => (/* binding */ renderNewProjectOverview)
/* harmony export */ });
/* harmony import */ var _renderDropDown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderDropDown */ "./src/render-functions/renderDropDown.ts");
/* harmony import */ var _functionality_convertToActive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functionality/convertToActive */ "./src/functionality/convertToActive.ts");


const overviewsContainer = document.querySelector(".grid-element-3");
const projectsContainerElement = document.querySelector(".grid-element-2");
const renderNewProjectOverview = () => {
    projectsContainerElement.addEventListener("click", (event) => {
        const target = event.target;
        if (target.className === "go-to-project") {
            const projectNameElements = [...document.querySelectorAll(".go-to-project")];
            const projectIndex = projectNameElements.indexOf(target);
            // more code after render functions is done
            console.log(`Clicking on ${projectNameElements[projectIndex].textContent}`);
            renderNewOverview(projectNameElements, projectIndex);
        }
    });
};
const renderNewOverview = (projectNameElements, projectIndex) => {
    const projectOverviewContainer = document.createElement("div");
    projectOverviewContainer.classList.add("project-overview");
    const projectDataContainer = document.createElement("div");
    ;
    projectDataContainer.classList.add("project-data");
    const dataInputContainer = renderDataInputContainerLeftSide(projectNameElements, projectIndex);
    const middleSideInputContainer = renderDataInputContainerMiddleSide();
    const rightSideInputContainer = renderDataInputContainerRightSide();
    projectDataContainer.appendChild(dataInputContainer);
    projectDataContainer.appendChild(middleSideInputContainer);
    projectOverviewContainer.appendChild(projectDataContainer);
    projectOverviewContainer.appendChild(rightSideInputContainer);
    overviewsContainer.appendChild(projectOverviewContainer);
};
const renderDataInputContainerLeftSide = (projectNameElements, projectIndex) => {
    let dataInputContainer = document.createElement("div");
    dataInputContainer.classList.add("input-to-insert-left");
    const projectName = document.createElement("p");
    projectName.classList.add("project-overview-name");
    projectName.innerText = projectNameElements[projectIndex].textContent;
    const taskListContainerElement = document.createElement("div");
    taskListContainerElement.classList.add("tasks-input");
    const formContainerELement = document.createElement("form");
    formContainerELement.classList.add("enter-new-task");
    const newTaskInputElement = document.createElement("input");
    newTaskInputElement.setAttribute("type", "text");
    newTaskInputElement.setAttribute("id", "new-task");
    newTaskInputElement.setAttribute("name", "new-task");
    newTaskInputElement.classList.add("get-new-task");
    const addNewTaskButtonElement = document.createElement("button");
    addNewTaskButtonElement.setAttribute("type", "submit");
    addNewTaskButtonElement.classList.add("add-task-button");
    addNewTaskButtonElement.textContent = "Add new task";
    formContainerELement.appendChild(newTaskInputElement);
    formContainerELement.appendChild(addNewTaskButtonElement);
    const taskUListElement = document.createElement("ul");
    taskUListElement.classList.add("tasks");
    taskListContainerElement.appendChild(formContainerELement);
    taskListContainerElement.appendChild(taskUListElement);
    dataInputContainer.appendChild(projectName);
    dataInputContainer.appendChild(taskListContainerElement);
    (() => {
        overviewsContainer.addEventListener("click", (event) => {
            const target = event.target;
            event.preventDefault();
            if (target.className === "add-task-button" && target.closest(".enter-new-task")) {
                const newTaskButtons = [...document.querySelectorAll(".add-task-button")];
                const indexOfNewTaskButton = newTaskButtons.indexOf(target);
                if (indexOfNewTaskButton !== -1) {
                    const newTaskListElement = document.createElement("li");
                    const inputValue = newTaskInputElement.value;
                    newTaskListElement.innerText = inputValue;
                    taskUListElement.appendChild(newTaskListElement);
                    newTaskInputElement.value = "";
                }
            }
        });
    })();
    return dataInputContainer;
};
const renderDataInputContainerMiddleSide = () => {
    const rightSector = document.createElement("div");
    rightSector.classList.add("input-to-insert-right");
    const dueToDateLabel = document.createElement("label");
    dueToDateLabel.setAttribute("for", "date-due-to");
    dueToDateLabel.innerText = "Project has to be done due to: ";
    const dueToDateInput = document.createElement("input");
    dueToDateInput.classList.add("due-to-input");
    dueToDateInput.setAttribute("type", "date");
    dueToDateInput.setAttribute("id", "date-due-to");
    const chosenDateContainer = document.createElement("div");
    chosenDateContainer.classList.add("show-date");
    chosenDateContainer.innerText = "D A T E";
    rightSector.appendChild(dueToDateLabel);
    rightSector.appendChild(dueToDateInput);
    rightSector.appendChild(chosenDateContainer);
    return rightSector;
};
const renderDataInputContainerRightSide = () => {
    const rightSectorContainerElement = document.createElement("div");
    rightSectorContainerElement.classList.add("project-data-right-sector");
    const rightSectorUpperPartContainer = document.createElement("div");
    rightSectorUpperPartContainer.classList.add("right-sector-upper");
    const priorityDataContainer = document.createElement("div");
    priorityDataContainer.classList.add("priority");
    priorityDataContainer.innerText = "1"; // hardcoded change later
    const newDropdown = (0,_renderDropDown__WEBPACK_IMPORTED_MODULE_0__.renderDropDown)();
    rightSectorUpperPartContainer.appendChild(newDropdown);
    rightSectorUpperPartContainer.appendChild(priorityDataContainer);
    (0,_renderDropDown__WEBPACK_IMPORTED_MODULE_0__.dropdownFunctionality)();
    const rightSectorLowerPartContainer = document.createElement("div");
    rightSectorLowerPartContainer.classList.add("right-sector-lower");
    const trashBinIcon = document.createElement("img");
    trashBinIcon.classList.add("delete-tasks-overview");
    trashBinIcon.setAttribute("src", "images/trashbin.svg");
    rightSectorLowerPartContainer.appendChild(trashBinIcon);
    rightSectorContainerElement.appendChild(rightSectorUpperPartContainer);
    rightSectorContainerElement.appendChild(rightSectorLowerPartContainer);
    (() => {
        overviewsContainer.addEventListener("click", (event) => {
            var _a, _b, _c;
            const target = event.target;
            if (target.className === "delete-tasks-overview" && target.closest(".right-sector-lower")) {
                const trashbinIcons = [...document.querySelectorAll(".delete-tasks-overview")];
                const indexOfTrashbinIcon = trashbinIcons.indexOf(target);
                if (indexOfTrashbinIcon !== -1) {
                    (_c = (_b = (_a = trashbinIcons[indexOfTrashbinIcon].parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement) === null || _c === void 0 ? void 0 : _c.remove();
                }
            }
        });
    })();
    return rightSectorContainerElement;
};
(0,_functionality_convertToActive__WEBPACK_IMPORTED_MODULE_1__.toggleProjectState)();


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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map