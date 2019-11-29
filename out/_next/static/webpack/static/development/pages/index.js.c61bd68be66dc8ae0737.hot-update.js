webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/toDo.js":
/*!****************************!*\
  !*** ./components/toDo.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _jsxFileName = "C:\\Users\\User\\Downloads\\250gaza\\workstation\\components\\toDo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var todos = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([]);
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    todos[1](JSON.parse(localStorage.getItem('todos')));
    console.log(todos[0]);
  }, []);
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    localStorage.setItem('todos', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(todos[0]));
  });
  return __jsx(Background, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "\uD560 \uC77C \uBAA9\uB85D", __jsx("span", {
    className: "todo-num",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, todos[0].length)), __jsx(ListContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, todos[0].map(function (todo, idx) {
    return __jsx("li", {
      key: idx,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, todo, __jsx("button", {
      onClick: function onClick() {
        var array = todos[0];
        todos[1]([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(array.slice(0, idx)), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(array.slice(idx + 1, todos.lenght))));
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }));
  })), __jsx(FormContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("input", {
    style: {
      display: "none"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx("input", {
    autoComplete: "off",
    placeholder: "Don't feed me...",
    onKeyPress: function onKeyPress(e) {
      if (event.keyCode == 13 && e.target.value != "") {
        todos[1]([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(todos[0]), [e.target.value]));
        e.target.value = "";
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })));
});
var FormContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "toDo__FormContainer",
  componentId: "omvpyj-0"
})(["padding:0 15px;border-top:1px solid rgba(0,0,0,0.1);background:#fafafa;box-sizing:border-box;width:100%;height:46px;input{outline:none;border:0;width:100%;height:100%;background:transparent;padding-inline-start:15px;word-spacing:normal;text-transform:none;text-indent:0px;text-shadow:none;display:inline-block;text-align:start;cursor:text;font-size:15px;color:#878481;}"]);
var ListContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].ul.withConfig({
  displayName: "toDo__ListContainer",
  componentId: "omvpyj-1"
})(["position:relative;height:265px;box-sizing:border-box;margin-inline-end:6px;padding-inline-end:7px;padding-inline-start:13px;margin-block-start:15px;padding-block-end:10px;overflow:auto;li{height:28px;position:relative;padding-inline-start:26px;list-style:none;display:list-item;font:400 20px;color:#878481;margin-bottom:5px;button{position:absolute;top:0;right:0;width:28px;height:50%;border:0;background:url(static/delete.png);background-repeat:no-repeat;background-position:center;background-size:contain;font-size:0;cursor:pointer;}}"]);
var Header = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "toDo__Header",
  componentId: "omvpyj-2"
})(["display:flex;background:transparent;align-items:center;justify-content:flex-start;border:0;padding:0 28px;margin:0;font-size:14px;color:#121212;font-weight:bold;line-height:1;margin-block-start:30px;position:relative;text-align:left;box-sizing:border-box;span{font-size:13px;font-weight:normal;padding-left:5px;opacity:0.5;float:right;line-height:1;color:#121212;text-align:left;}"]);
var Background = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "toDo__Background",
  componentId: "omvpyj-3"
})(["display:block;position:absolute;width:40%;right:5%;top:calc(56px + 15%);border-radius:4px;background-color:#ffffff;box-shadow:2px 3px 2px rgba(0,0,0,0.2);z-index:3;transform-origin:right bottom;overflow:hidden;"]);

/***/ })

})
//# sourceMappingURL=index.js.c61bd68be66dc8ae0737.hot-update.js.map