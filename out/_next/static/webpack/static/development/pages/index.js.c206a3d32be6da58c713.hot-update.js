webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ "./components/index.js");
var _jsxFileName = "C:\\Users\\User\\Downloads\\250gaza\\workstation\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];




var Index = function Index() {
  function getRandomInt(max) {
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - 1)) + 1; //최댓값은 제외, 최솟값은 포함
  }

  var imgUrl = "\"/static/backimg/backimg(".concat(getRandomInt(28), ").jpg\"");
  console.log(imgUrl);
  return __jsx(Background, {
    imgUrl: imgUrl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["SearchBar"], {
    top: "10%",
    left: "5%",
    domain: "naver",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["SearchBar"], {
    top: "10%",
    right: "5%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["ToDo"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["Clock"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);
var Background = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__Background",
  componentId: "v8m6c-0"
})(["display:flex;justify-content:center;flex-direction:column;width:100vw;height:100vh;object-fit:cover;border:0;background-image:url(", ");background-size:cover;position:relative;"], function (props) {
  return props.imgUrl;
});

/***/ })

})
//# sourceMappingURL=index.js.c206a3d32be6da58c713.hot-update.js.map