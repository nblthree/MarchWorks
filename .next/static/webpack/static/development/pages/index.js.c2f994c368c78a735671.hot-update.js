webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next-server/head */ "./node_modules/next-server/head.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Link */ "./components/Link.js");












var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _React$Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).call(this, props));
    _this.state = {
      words: ['Welcome', 'Bienvenu', 'ようこそ', 'Willkommen', 'Hoşgeldiniz'],
      word: 0,
      letter: 0,
      forwards: true
    };
    _this.timer = null;
    _this.animate = _this.animate.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.animate();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timer);
    }
  }, {
    key: "animate",
    value: function animate() {
      this.setState(function (prev) {
        if (prev.letter === prev.words[prev.word].length - 1 && prev.forwards) {
          return {
            forwards: false
          };
        }

        if (prev.letter === 0 && !prev.forwards) {
          return {
            word: prev.word === prev.words.length - 1 ? 0 : prev.word + 1,
            forwards: true
          };
        }

        if (prev.forwards) {
          return {
            letter: prev.letter + 1
          };
        } else {
          return {
            letter: prev.letter - 1
          };
        }
      });
      this.timer = setTimeout(this.animate, this.state.letter === this.state.words[this.state.word].length - 1 && this.state.forwards ? 3000 : 200);
    }
  }, {
    key: "render",
    value: function render() {
      var mot = this.state.words[this.state.word].slice(0, this.state.letter + 1);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_MyLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        oAni: this.props.oAni
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_9___default.a, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("title", null, "HOME")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-1017753639" + " " + "Home"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "welcome",
        className: "jsx-1017753639"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "jsx-1017753639"
      }, mot, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        id: "typer",
        className: "jsx-1017753639"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: "jsx-1017753639" + " " + "intro"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-1017753639"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "jsx-1017753639"
      }, "Boussouf Nabil")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-1017753639"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        className: "jsx-1017753639"
      }, "Dev Story"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("article", {
        className: "jsx-1017753639"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-1017753639"
      }, "Born in 1998, living in Meknes Morocco, freelance developer. SPA, SSR development with JavaScript, have a way with design and 2D animation."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Link__WEBPACK_IMPORTED_MODULE_10__["default"], {
        href: "/about"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "jsx-1017753639"
      }, "Learn more."))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1017753639"
      }, ".intro.jsx-1017753639 div.jsx-1017753639{padding:3% 10% 3% 10%;}.intro.jsx-1017753639 div.jsx-1017753639:first-child h2.jsx-1017753639{margin:0;}.intro.jsx-1017753639 div.jsx-1017753639:nth-child(2) h3.jsx-1017753639{color:#2f4f4fdb;}.intro.jsx-1017753639{width:80%;max-width:850px;}.intro.jsx-1017753639 article.jsx-1017753639{padding:1% 0% 1% 5%;font-size:1.15rem;font-family:Source Sans Pro,sans-serif;}@media only screen and (max-width:600px){.intro.jsx-1017753639{width:100%;}.intro.jsx-1017753639 div.jsx-1017753639{padding:3% 1% 3% 0%;}.Home.jsx-1017753639{padding:0 20px 0 20px;}}.Home.jsx-1017753639{width:100%;height:1000px;}#welcome.jsx-1017753639{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:233px;}#welcome.jsx-1017753639 h2.jsx-1017753639{margin:80px auto;text-align:center;font-size:3rem;font-weight:400;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}#welcome.jsx-1017753639 #typer.jsx-1017753639{width:2px;background-color:#666666;display:block;opacity:0;-webkit-animation:fade-jsx-1017753639 0.4s linear 0s infinite forwards;animation:fade-jsx-1017753639 0.4s linear 0s infinite forwards;}@-webkit-keyframes fade-jsx-1017753639{0%{opacity:0;}50%{opacity:1;}100%{opacity:0;}}@keyframes fade-jsx-1017753639{0%{opacity:0;}50%{opacity:1;}100%{opacity:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcMDEwXFxOZXh0UHJvamVjdHNcXEVkZWxcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRTRCLEFBRytDLEFBR2IsQUFHTyxBQUdOLEFBSVUsQUFNTCxBQUdTLEFBR0UsQUFJZixBQUtFLEFBS0ksQUFRUCxBQVNJLEFBR0EsQUFHQSxTQTFEbEIsQ0FNb0IsQUFzQ1MsQUFTekIsQUFHQSxBQUdBLENBM0NBLEFBVWMsS0F2QmxCLENBaUNzQixHQTFCQSxBQVNsQixFQXRCSixBQXlCSSxHQUtKLENBcEJBLFNBOEJtQixBQVFELEdBbEMwQixXQW1DOUIsQ0FSTSxTQVNnQyxPQVJuQyxRQVJBLEdBbkJqQixVQW9CQSxxREFRQSxxREFRQSIsImZpbGUiOiJDOlxcVXNlcnNcXDAxMFxcTmV4dFByb2plY3RzXFxFZGVsXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTGluayBmcm9tICcuLi9jb21wb25lbnRzL0xpbmsnXHJcblxyXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHdvcmRzOiBbJ1dlbGNvbWUnLCAnQmllbnZlbnUnLCAn44KI44GG44GT44GdJywgJ1dpbGxrb21tZW4nLCAnSG/Fn2dlbGRpbml6J10sXHJcbiAgICAgIHdvcmQ6IDAsXHJcbiAgICAgIGxldHRlcjogMCxcclxuICAgICAgZm9yd2FyZHM6IHRydWVcclxuICAgICAgICB9O1xyXG4gICAgdGhpcy50aW1lciA9IG51bGw7XHJcbiAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcclxuICAgIH1cclxuICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgdGhpcy5hbmltYXRlKCk7XHJcbiAgfVxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XHJcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XHJcbiAgfVxyXG4gIGFuaW1hdGUoKXtcclxuICAgIHRoaXMuc2V0U3RhdGUoKHByZXYpPT57XHJcbiAgICAgIGlmKHByZXYubGV0dGVyPT09cHJldi53b3Jkc1twcmV2LndvcmRdLmxlbmd0aC0xICYmIHByZXYuZm9yd2FyZHMpe1xyXG4gICAgICAgIHJldHVybiB7Zm9yd2FyZHM6IGZhbHNlfVxyXG4gICAgICB9XHJcbiAgICAgIGlmKHByZXYubGV0dGVyID09PSAwICYmICFwcmV2LmZvcndhcmRzKXtcclxuICAgICAgICByZXR1cm4ge3dvcmQ6IHByZXYud29yZD09PXByZXYud29yZHMubGVuZ3RoLTEgPyAwIDogcHJldi53b3JkKzEsIGZvcndhcmRzOiB0cnVlfVxyXG4gICAgICB9XHJcbiAgICAgIGlmKHByZXYuZm9yd2FyZHMpe1xyXG4gICAgICAgIHJldHVybiB7bGV0dGVyOiBwcmV2LmxldHRlcisxfVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4ge2xldHRlcjogcHJldi5sZXR0ZXItMX1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dCh0aGlzLmFuaW1hdGUsIHRoaXMuc3RhdGUubGV0dGVyPT09dGhpcy5zdGF0ZS53b3Jkc1t0aGlzLnN0YXRlLndvcmRdLmxlbmd0aC0xICYmIHRoaXMuc3RhdGUuZm9yd2FyZHMgPyAzMDAwIDogMjAwKTtcclxuICB9XHJcblxyXG4gICAgcmVuZGVyICgpe1xyXG4gICAgICAgIHZhciBtb3QgPSB0aGlzLnN0YXRlLndvcmRzW3RoaXMuc3RhdGUud29yZF0uc2xpY2UoMCwgdGhpcy5zdGF0ZS5sZXR0ZXIrMSk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxMYXlvdXQgb0FuaT17dGhpcy5wcm9wcy5vQW5pfT5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgIDx0aXRsZT5IT01FPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJIb21lXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwid2VsY29tZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDI+e21vdH08c3BhbiBpZD1cInR5cGVyXCI+PC9zcGFuPjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImludHJvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkJvdXNzb3VmIE5hYmlsPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+RGV2IFN0b3J5PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFydGljbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Cb3JuIGluIDE5OTgsIGxpdmluZyBpbiBNZWtuZXMgTW9yb2NjbywgZnJlZWxhbmNlIGRldmVsb3Blci5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNQQSwgU1NSIGRldmVsb3BtZW50IHdpdGggSmF2YVNjcmlwdCwgaGF2ZSBhIHdheSB3aXRoIGRlc2lnbiBhbmQgMkQgYW5pbWF0aW9uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj48YT5MZWFybiBtb3JlLjwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAuaW50cm8gZGl2e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzJSAxMCUgMyUgMTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaW50cm8gZGl2OmZpcnN0LWNoaWxkIGgye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5pbnRybyBkaXY6bnRoLWNoaWxkKDIpIGgze1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzJmNGY0ZmRiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaW50cm97XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogODUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5pbnRybyBhcnRpY2xle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxJSAwJSAxJSA1JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjE1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogU291cmNlIFNhbnMgUHJvLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmludHJve1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmludHJvIGRpdntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMlIDElIDMlIDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5Ib21lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMjBweCAwIDIwcHg7ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkhvbWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjd2VsY29tZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjMzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjd2VsY29tZSBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogODBweCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICN3ZWxjb21lICN0eXBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjY2NjY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGZhZGUgMC40cyBsaW5lYXIgMHMgaW5maW5pdGUgZm9yd2FyZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDUwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il19 */\n/*@ sourceURL=C:\\Users\\010\\NextProjects\\Edel\\pages\\index.js */")));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.c2f994c368c78a735671.hot-update.js.map