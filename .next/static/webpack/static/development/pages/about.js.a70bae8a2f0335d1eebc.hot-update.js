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
        className: "jsx-845344108"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-845344108"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-845344108"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-845344108"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-845344108"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-845344108"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "/static/logo.svg",
        alt: "",
        className: "jsx-845344108"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "845344108"
      }, "img.jsx-845344108{width:80%;max-width:400px;margin:auto;z-index:10000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-animation:fade-jsx-845344108 0.1s linear 0.2s 5 forwards paused;animation:fade-jsx-845344108 0.1s linear 0.2s 5 forwards paused;}#wrapper.jsx-845344108{position:fixed;height:100vh;width:100vw;z-index:1000000000;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:#404040;}#wrapper.jsx-845344108>div.jsx-845344108{width:0%;height:100%;position:absolute;top:0;left:0;}#wrapper.jsx-845344108>div.jsx-845344108:nth-child(1){background-color:#353535;z-index:1;-webkit-animation:charge-jsx-845344108 0.4s linear 1s forwards paused;animation:charge-jsx-845344108 0.4s linear 1s forwards paused;}#wrapper.jsx-845344108>div.jsx-845344108:nth-child(2){background-color:#303030;z-index:2;-webkit-animation:charge-jsx-845344108 0.4s linear 1.2s forwards paused;animation:charge-jsx-845344108 0.4s linear 1.2s forwards paused;}#wrapper.jsx-845344108>div.jsx-845344108:nth-child(3){background-color:#252525;z-index:3;-webkit-animation:charge-jsx-845344108 0.4s linear 1.4s forwards paused;animation:charge-jsx-845344108 0.4s linear 1.4s forwards paused;}#wrapper.jsx-845344108>div.jsx-845344108:nth-child(4){background-color:#202020;z-index:4;-webkit-animation:charge-jsx-845344108 0.4s linear 1.6s forwards paused;animation:charge-jsx-845344108 0.4s linear 1.6s forwards paused;}#wrapper.jsx-845344108>div.jsx-845344108:nth-child(5){background-color:#151515;z-index:5;-webkit-animation:charge-jsx-845344108 0.4s linear 1.8s forwards paused;animation:charge-jsx-845344108 0.4s linear 1.8s forwards paused;}@-webkit-keyframes fade-jsx-845344108{0%{opacity:0;}100%{opacity:1;}}@keyframes fade-jsx-845344108{0%{opacity:0;}100%{opacity:1;}}@-webkit-keyframes charge-jsx-845344108{0%{width:0%;}100%{width:100%;}}@keyframes charge-jsx-845344108{0%{width:0%;}100%{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcMDEwXFxOZXh0UHJvamVjdHNcXEVkZWxcXGNvbXBvbmVudHNcXE9wZW5pbmdBbmltYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNENzQixBQUd5QixBQVFLLEFBUU4sQUFPZ0IsQUFLQSxBQUtBLEFBS0EsQUFLQSxBQU1YLEFBR0EsQUFLSCxBQUdFLFNBM0NELEFBeUNaLENBekRnQixBQWlEaEIsQUFHQSxDQVFBLElBcERhLE1BU0ssSUFNUixBQUtBLEFBS0EsQUFLQSxBQUtBLENBMUNFLEVBUUEsT0Flb0MsQUFLRSxBQUtBLEFBS0EsQUFLQSxHQTFDcEMsQ0FnQlIsQ0FSYSxLQVNiLE9BaEJXLEFBaUJuQixPQVRlLDBFQUNZLElBUnlCLHFCQVNwRCxTQVlBLElBS0EsQUFLQSxBQUtBLEFBS0Esc0dBeENBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcMDEwXFxOZXh0UHJvamVjdHNcXEVkZWxcXGNvbXBvbmVudHNcXE9wZW5pbmdBbmltYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgT3BlbmluZ0FuaW1hdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICBcclxuICAgIH07XHJcbiAgICB0aGlzLmNhbmNlbCA9IHRoaXMuY2FuY2VsLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLndyYXBwZXIgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICB9XHJcbiAgY2FuY2VsKCl7XHJcbiAgICB0aGlzLnByb3BzLmFuaUVuZCgpO1xyXG4gIH1cclxuICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gIFx0dmFyIHdyYXBwZXIgPSB0aGlzLndyYXBwZXIuY3VycmVudDtcclxuICBcdHNldFRpbWVvdXQoKCk9PntcclxuICBcdFx0dmFyIGZpbiA9IDA7XHJcbiAgXHRcdGZvcihsZXQgaz0wOyBrPHdyYXBwZXIuY2hpbGRyZW4ubGVuZ3RoOyBrKyspe1xyXG4gIFx0XHRcdHdyYXBwZXIuY2hpbGRyZW5ba10uc3R5bGUuYW5pbWF0aW9uUGxheVN0YXRlID0gXCJydW5uaW5nXCI7XHJcbiAgXHRcdFx0d3JhcHBlci5jaGlsZHJlbltrXS5hZGRFdmVudExpc3RlbmVyKCBcImFuaW1hdGlvbmVuZFwiLCAoKT0+e1xyXG4gIFx0XHRcdFx0ZmluKys7XHJcbiAgXHRcdFx0XHRpZihmaW4gPj0gd3JhcHBlci5jaGlsZHJlbi5sZW5ndGgpe1xyXG4gIFx0XHRcdFx0XHRzZXRUaW1lb3V0KHRoaXMuY2FuY2VsLCA1MDApO1xyXG4gIFx0XHRcdFx0fVxyXG4gIFx0XHRcdH0pXHJcbiAgXHRcdH1cclxuICBcdH0sIDEwMDApXHJcbiAgICBcclxuICB9XHJcblxyXG4gICAgcmVuZGVyICgpe1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJ3cmFwcGVyXCIgcmVmPXt0aGlzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgIDxkaXY+PC9kaXY+XHJcblxyXG4gICAgICAgICAgXHJcblxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2xvZ28uc3ZnXCIgYWx0PVwiXCIgLz5cclxuXHJcbiAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgIHotaW5kZXg6IDEwMDAwO1xyXG4gICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZSAwLjFzIGxpbmVhciAwLjJzIDUgZm9yd2FyZHMgcGF1c2VkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICN3cmFwcGVye1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgICB6LWluZGV4OiAxMDAwMDAwMDAwO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQwNDA0MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjd3JhcHBlciA+IGRpdntcclxuICAgICAgICAgICAgICB3aWR0aDogMCU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgbGVmdCAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICN3cmFwcGVyID4gZGl2Om50aC1jaGlsZCgxKXtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzNTM1O1xyXG4gICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiBjaGFyZ2UgMC40cyBsaW5lYXIgMXMgZm9yd2FyZHMgcGF1c2VkOyAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3dyYXBwZXIgPiBkaXY6bnRoLWNoaWxkKDIpe1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XHJcbiAgICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgICBhbmltYXRpb246IGNoYXJnZSAwLjRzIGxpbmVhciAxLjJzIGZvcndhcmRzIHBhdXNlZDsgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICN3cmFwcGVyID4gZGl2Om50aC1jaGlsZCgzKXtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyNTI1O1xyXG4gICAgICAgICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiBjaGFyZ2UgMC40cyBsaW5lYXIgMS40cyBmb3J3YXJkcyBwYXVzZWQ7ICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjd3JhcHBlciA+IGRpdjpudGgtY2hpbGQoNCl7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcclxuICAgICAgICAgICAgICB6LWluZGV4OiA0O1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogY2hhcmdlIDAuNHMgbGluZWFyIDEuNnMgZm9yd2FyZHMgcGF1c2VkOyAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3dyYXBwZXIgPiBkaXY6bnRoLWNoaWxkKDUpe1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTE1MTU7XHJcbiAgICAgICAgICAgICAgei1pbmRleDogNTtcclxuICAgICAgICAgICAgICBhbmltYXRpb246IGNoYXJnZSAwLjRzIGxpbmVhciAxLjhzIGZvcndhcmRzIHBhdXNlZDsgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZSB7XHJcbiAgICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQGtleWZyYW1lcyBjaGFyZ2V7XHJcbiAgICAgICAgICAgICAgMCV7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMCU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDEwMCV7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3BlbmluZ0FuaW1hdGlvbjsiXX0= */\n/*@ sourceURL=C:\\Users\\010\\NextProjects\\Edel\\components\\OpeningAnimation.js */"));
    }
  }]);

  return OpeningAnimation;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (OpeningAnimation);

/***/ })

})
//# sourceMappingURL=about.js.a70bae8a2f0335d1eebc.hot-update.js.map