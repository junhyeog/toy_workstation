webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/clock.js":
/*!*****************************!*\
  !*** ./components/clock.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _useClock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useClock */ "./components/useClock.js");
/* harmony import */ var _Hands__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Hands */ "./components/Hands.js");
var _jsxFileName = "C:\\Users\\User\\Downloads\\250gaza\\workstation\\components\\clock.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var marks = Array(12).fill();
var smallMarks = Array(60).fill();

var Clock = function Clock() {
  var time = Object(_useClock__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, marks.map(function (mark, idx) {
    return __jsx(Mark, {
      key: idx,
      rotation: idx * 30 + "deg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    });
  }), smallMarks.map(function (mark, idx) {
    return __jsx(SmallMark, {
      key: idx,
      rotation: idx * 6 + "deg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    });
  }), __jsx(_Hands__WEBPACK_IMPORTED_MODULE_3__["default"], {
    time: time,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Clock);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "clock__Container",
  componentId: "sc-76svq3-0"
})(["position:absolute;top:calc(56px + 15%);left:50%;width:40%;height:40%;"]);
var Mark = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "clock__Mark",
  componentId: "sc-76svq3-1"
})(["position:absolute;width:2px;height:20px;background:#fff;border-radius:100px;top:10px;transform:rotate(", ") translate3d(-50%,0,0);transform-origin:0px 130px;"], function (props) {
  return props.rotation || "0deg";
});
var SmallMark = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "clock__SmallMark",
  componentId: "sc-76svq3-2"
})(["position:absolute;width:0.5px;height:10px;background:#fff;opacity:0.5;border-radius:100px;top:10px;transform:rotate(", ") translate3d(-50%,0,0);transform-origin:0px 130px;"], function (props) {
  return props.rotation || "0deg";
});

/***/ })

})
//# sourceMappingURL=index.js.302ac160f06eec435344.hot-update.js.map