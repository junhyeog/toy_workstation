webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Hands.js":
/*!*****************************!*\
  !*** ./components/Hands.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "C:\\Users\\User\\Downloads\\250gaza\\workstation\\components\\Hands.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Hands = function Hands(_ref) {
  var time = _ref.time,
      _ref$borderWidth = _ref.borderWidth,
      borderWidth = _ref$borderWidth === void 0 ? 10 : _ref$borderWidth;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(SecondHand, {
    borderWidth: borderWidth,
    rotation: time.getSeconds() * 6 + "deg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), __jsx(MinuteHand, {
    borderWidth: borderWidth,
    rotation: (time.getMinutes() + time.getSeconds() / 60) * 6 + "deg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx(HourHand, {
    borderWidth: borderWidth,
    rotation: (time.getHours() % 12 + time.getMinutes() / 60) * 30 + "deg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Hands);
var SecondHand = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Hands__SecondHand",
  componentId: "sc-16z571e-0"
})(["position:absolute;width:1px;height:", "px;background:#34cdab;border-radius:100px;top:10px;left:50%;transform:rotate(", ") translate3d(-50%,0,0);transform-origin:0px bottom;"], function (props) {
  return 150 - 10 - props.borderWidth;
}, function (props) {
  return props.rotation || "30deg";
});
var MinuteHand = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Hands__MinuteHand",
  componentId: "sc-16z571e-1"
})(["position:absolute;width:3px;height:", "px;background:#fff;border-radius:100px;top:50px;left:50%;transform:rotate(", ") translate3d(-50%,0,0);transform-origin:0px bottom;"], function (props) {
  return 150 - 50 - props.borderWidth;
}, function (props) {
  return props.rotation || "30deg";
});
var HourHand = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Hands__HourHand",
  componentId: "sc-16z571e-2"
})(["position:absolute;width:5px;height:", "px;background:#fff;border-radius:100px;top:70px;left:50%;transform:rotate(", ") translate3d(-50%,0,0);transform-origin:0px bottom;"], function (props) {
  return 150 - 70 - props.borderWidth;
}, function (props) {
  return props.rotation || "30deg";
});

/***/ })

})
//# sourceMappingURL=index.js.5fa4f8dc3f0626ded798.hot-update.js.map