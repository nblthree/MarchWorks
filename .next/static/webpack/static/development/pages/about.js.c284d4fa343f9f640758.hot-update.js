webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./components/OpeningAnimation.js":
/*!****************************************!*\
  !*** ./components/OpeningAnimation.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);









var OpeningAnimation =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(OpeningAnimation, _React$Component);

  function OpeningAnimation(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, OpeningAnimation);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(OpeningAnimation).call(this, props));
    _this.state = {};
    _this.cancel = _this.cancel.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.wrapper = react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(OpeningAnimation, [{
    key: "cancel",
    value: function cancel() {
      this.props.aniEnd();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var wrapper = this.wrapper.current;
      setTimeout(function () {
        var fin = 0;

        for (var k = 0; k < wrapper.children.length; k++) {
          wrapper.children[k].style.animationPlayState = "running";
          wrapper.children[k].addEventListener("animationend", function () {
            fin++;

            if (fin >= wrapper.children.length) {
              setTimeout(_this2.cancel, 500);
            }
          });
        }
      }, 1000);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "wrapper",
        ref: this.wrapper,
        className: "jsx-4243685452"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-4243685452"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-4243685452"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-4243685452"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-4243685452"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-4243685452"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "/static/logo.svg",
        alt: "",
        className: "jsx-4243685452"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "4243685452"
      }, "img.jsx-4243685452{width:80%;max-width:400px;margin:auto;z-index:10000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-animation:fade-jsx-4243685452 0.1s linear 0.2s 5 forwards paused;animation:fade-jsx-4243685452 0.1s linear 0.2s 5 forwards paused;}#wrapper.jsx-4243685452{position:fixed;height:100vh;width:100vw;z-index:1000000000;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}#wrapper.jsx-4243685452>div.jsx-4243685452{width:0%;height:100%;position:absolute;top:0;left:0;}#wrapper.jsx-4243685452>div.jsx-4243685452:nth-child(1){background-color:#353535;z-index:1;-webkit-animation:charge-jsx-4243685452 0.4s linear 1s forwards paused;animation:charge-jsx-4243685452 0.4s linear 1s forwards paused;}#wrapper.jsx-4243685452>div.jsx-4243685452:nth-child(2){background-color:#303030;z-index:2;-webkit-animation:charge-jsx-4243685452 0.4s linear 1.2s forwards paused;animation:charge-jsx-4243685452 0.4s linear 1.2s forwards paused;}#wrapper.jsx-4243685452>div.jsx-4243685452:nth-child(3){background-color:#252525;z-index:3;-webkit-animation:charge-jsx-4243685452 0.4s linear 1.4s forwards paused;animation:charge-jsx-4243685452 0.4s linear 1.4s forwards paused;}#wrapper.jsx-4243685452>div.jsx-4243685452:nth-child(4){background-color:#202020;z-index:4;-webkit-animation:charge-jsx-4243685452 0.4s linear 1.6s forwards paused;animation:charge-jsx-4243685452 0.4s linear 1.6s forwards paused;}#wrapper.jsx-4243685452>div.jsx-4243685452:nth-child(5){background-color:#151515;z-index:5;-webkit-animation:charge-jsx-4243685452 0.4s linear 1.8s forwards paused;animation:charge-jsx-4243685452 0.4s linear 1.8s forwards paused;}@-webkit-keyframes fade-jsx-4243685452{0%{opacity:0;}100%{opacity:1;}}@keyframes fade-jsx-4243685452{0%{opacity:0;}100%{opacity:1;}}@-webkit-keyframes charge-jsx-4243685452{0%{width:0%;}100%{width:100%;}}@keyframes charge-jsx-4243685452{0%{width:0%;}100%{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcMDEwXFxOZXh0UHJvamVjdHNcXEVkZWxcXGNvbXBvbmVudHNcXE9wZW5pbmdBbmltYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNENzQixBQUd5QixBQVFLLEFBUU4sQUFPZ0IsQUFLQSxBQUtBLEFBS0EsQUFLQSxBQU1YLEFBR0EsQUFLSCxBQUdFLFNBM0NELEFBeUNaLENBekRnQixBQWlEaEIsQUFHQSxDQVFBLElBcERhLE1BU0ssSUFNUixBQUtBLEFBS0EsQUFLQSxBQUtBLENBMUNFLEVBUUEsT0Flb0MsQUFLRSxBQUtBLEFBS0EsQUFLQSxHQTFDcEMsQ0FnQlIsQ0FSYSxLQVNiLE9BaEJXLEFBaUJuQixPQVRlLDBFQUVmLElBVG9ELGdDQXFCcEQsSUFLQSxBQUtBLEFBS0EsQUFLQSxzR0F4Q0EiLCJmaWxlIjoiQzpcXFVzZXJzXFwwMTBcXE5leHRQcm9qZWN0c1xcRWRlbFxcY29tcG9uZW50c1xcT3BlbmluZ0FuaW1hdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBPcGVuaW5nQW5pbWF0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgIFxyXG4gICAgfTtcclxuICAgIHRoaXMuY2FuY2VsID0gdGhpcy5jYW5jZWwuYmluZCh0aGlzKTtcclxuICAgIHRoaXMud3JhcHBlciA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gIH1cclxuICBjYW5jZWwoKXtcclxuICAgIHRoaXMucHJvcHMuYW5pRW5kKCk7XHJcbiAgfVxyXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgXHR2YXIgd3JhcHBlciA9IHRoaXMud3JhcHBlci5jdXJyZW50O1xyXG4gIFx0c2V0VGltZW91dCgoKT0+e1xyXG4gIFx0XHR2YXIgZmluID0gMDtcclxuICBcdFx0Zm9yKGxldCBrPTA7IGs8d3JhcHBlci5jaGlsZHJlbi5sZW5ndGg7IGsrKyl7XHJcbiAgXHRcdFx0d3JhcHBlci5jaGlsZHJlbltrXS5zdHlsZS5hbmltYXRpb25QbGF5U3RhdGUgPSBcInJ1bm5pbmdcIjtcclxuICBcdFx0XHR3cmFwcGVyLmNoaWxkcmVuW2tdLmFkZEV2ZW50TGlzdGVuZXIoIFwiYW5pbWF0aW9uZW5kXCIsICgpPT57XHJcbiAgXHRcdFx0XHRmaW4rKztcclxuICBcdFx0XHRcdGlmKGZpbiA+PSB3cmFwcGVyLmNoaWxkcmVuLmxlbmd0aCl7XHJcbiAgXHRcdFx0XHRcdHNldFRpbWVvdXQodGhpcy5jYW5jZWwsIDUwMCk7XHJcbiAgXHRcdFx0XHR9XHJcbiAgXHRcdFx0fSlcclxuICBcdFx0fVxyXG4gIFx0fSwgMTAwMClcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgICByZW5kZXIgKCl7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cIndyYXBwZXJcIiByZWY9e3RoaXMud3JhcHBlcn0+XHJcbiAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgPGRpdj48L2Rpdj5cclxuXHJcbiAgICAgICAgICBcclxuXHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvbG9nby5zdmdcIiBhbHQ9XCJcIiAvPlxyXG5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgei1pbmRleDogMTAwMDA7XHJcbiAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlIDAuMXMgbGluZWFyIDAuMnMgNSBmb3J3YXJkcyBwYXVzZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3dyYXBwZXJ7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgICAgICAgIHotaW5kZXg6IDEwMDAwMDAwMDA7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6ICM0MDQwNDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3dyYXBwZXIgPiBkaXZ7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgIGxlZnQgMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjd3JhcHBlciA+IGRpdjpudGgtY2hpbGQoMSl7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM1MzUzNTtcclxuICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogY2hhcmdlIDAuNHMgbGluZWFyIDFzIGZvcndhcmRzIHBhdXNlZDsgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICN3cmFwcGVyID4gZGl2Om50aC1jaGlsZCgyKXtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwO1xyXG4gICAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiBjaGFyZ2UgMC40cyBsaW5lYXIgMS4ycyBmb3J3YXJkcyBwYXVzZWQ7ICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjd3JhcHBlciA+IGRpdjpudGgtY2hpbGQoMyl7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI1MjUyNTtcclxuICAgICAgICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogY2hhcmdlIDAuNHMgbGluZWFyIDEuNHMgZm9yd2FyZHMgcGF1c2VkOyAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3dyYXBwZXIgPiBkaXY6bnRoLWNoaWxkKDQpe1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XHJcbiAgICAgICAgICAgICAgei1pbmRleDogNDtcclxuICAgICAgICAgICAgICBhbmltYXRpb246IGNoYXJnZSAwLjRzIGxpbmVhciAxLjZzIGZvcndhcmRzIHBhdXNlZDsgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICN3cmFwcGVyID4gZGl2Om50aC1jaGlsZCg1KXtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUxNTE1O1xyXG4gICAgICAgICAgICAgIHotaW5kZXg6IDU7XHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiBjaGFyZ2UgMC40cyBsaW5lYXIgMS44cyBmb3J3YXJkcyBwYXVzZWQ7ICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGUge1xyXG4gICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBrZXlmcmFtZXMgY2hhcmdle1xyXG4gICAgICAgICAgICAgIDAle1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDAlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAxMDAle1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9wZW5pbmdBbmltYXRpb247Il19 */\n/*@ sourceURL=C:\\Users\\010\\NextProjects\\Edel\\components\\OpeningAnimation.js */"));
    }
  }]);

  return OpeningAnimation;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (OpeningAnimation);

/***/ })

})
//# sourceMappingURL=about.js.c284d4fa343f9f640758.hot-update.js.map