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
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_9___default.a, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("title", null, "HOME"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("meta", {
        name: "Description",
        content: "Produced By The Web Developer BOUSSOUF NABIL"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-2533546093" + " " + "Home"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "welcome",
        className: "jsx-2533546093"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "jsx-2533546093"
      }, mot, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        id: "typer",
        className: "jsx-2533546093"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: "jsx-2533546093" + " " + "intro"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-2533546093"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "jsx-2533546093"
      }, "Boussouf Nabil")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-2533546093"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        className: "jsx-2533546093"
      }, "Dev Story"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("article", {
        className: "jsx-2533546093"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-2533546093"
      }, "Born in 1998, living in Meknes Morocco, freelance developer. SPA, SSR development with JavaScript, have a way with design and 2D animation."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Link__WEBPACK_IMPORTED_MODULE_10__["default"], {
        href: "/about"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "jsx-2533546093"
      }, "Learn more."))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2533546093"
      }, ".intro.jsx-2533546093 div.jsx-2533546093{padding:3% 10% 3% 10%;}.intro.jsx-2533546093 div.jsx-2533546093:first-child h2.jsx-2533546093{margin:0;}.intro.jsx-2533546093 div.jsx-2533546093:nth-child(2) h3.jsx-2533546093{color:#2f4f4fdb;}.intro.jsx-2533546093{width:80%;max-width:850px;}.intro.jsx-2533546093 article.jsx-2533546093{padding:1% 0% 1% 5%;font-size:1.15rem;font-family:Source Sans Pro,sans-serif;}@media only screen and (max-width:600px){.intro.jsx-2533546093{width:100%;}.intro.jsx-2533546093 div.jsx-2533546093{padding:3% 1% 3% 0%;}.Home.jsx-2533546093{padding:0 20px 0 20px;}}.Home.jsx-2533546093{width:100%;height:1000px;box-sizing:border-box;}#welcome.jsx-2533546093{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:233px;}#welcome.jsx-2533546093 h2.jsx-2533546093{margin:80px auto;text-align:center;font-size:3rem;font-weight:400;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}#welcome.jsx-2533546093 #typer.jsx-2533546093{width:2px;background-color:#666666;display:block;opacity:0;-webkit-animation:fade-jsx-2533546093 0.4s linear 0s infinite forwards;animation:fade-jsx-2533546093 0.4s linear 0s infinite forwards;}@-webkit-keyframes fade-jsx-2533546093{0%{opacity:0;}50%{opacity:1;}100%{opacity:0;}}@keyframes fade-jsx-2533546093{0%{opacity:0;}50%{opacity:1;}100%{opacity:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcMDEwXFxOZXh0UHJvamVjdHNcXEVkZWxcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRTRCLEFBRytDLEFBR2IsQUFHTyxBQUdOLEFBSVUsQUFNTCxBQUdTLEFBR0UsQUFJZixBQU1FLEFBS0ksQUFRUCxBQVNJLEFBR0EsQUFHQSxTQTNEbEIsQ0FNb0IsQUF1Q1MsQUFTekIsQUFHQSxBQUdBLENBNUNBLEFBVWMsS0F2QmxCLENBa0NzQixHQTNCQSxBQVNsQixFQXRCSixBQXlCSSxHQUtzQixDQXBCMUIsU0ErQm1CLEFBUUQsR0FuQzBCLFNBaUI1QyxFQW1CYyxDQVJNLFNBU2dDLE9BUm5DLFFBUkEsR0FwQmpCLFVBcUJBLHFEQVFBLHFEQVFBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcMDEwXFxOZXh0UHJvamVjdHNcXEVkZWxcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJy4uL2NvbXBvbmVudHMvTGluaydcclxuXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIFxyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgd29yZHM6IFsnV2VsY29tZScsICdCaWVudmVudScsICfjgojjgYbjgZPjgZ0nLCAnV2lsbGtvbW1lbicsICdIb8WfZ2VsZGluaXonXSxcclxuICAgICAgd29yZDogMCxcclxuICAgICAgbGV0dGVyOiAwLFxyXG4gICAgICBmb3J3YXJkczogdHJ1ZVxyXG4gICAgICAgIH07XHJcbiAgICB0aGlzLnRpbWVyID0gbnVsbDtcclxuICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICB0aGlzLmFuaW1hdGUoKTtcclxuICB9XHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcclxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcclxuICB9XHJcbiAgYW5pbWF0ZSgpe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSgocHJldik9PntcclxuICAgICAgaWYocHJldi5sZXR0ZXI9PT1wcmV2LndvcmRzW3ByZXYud29yZF0ubGVuZ3RoLTEgJiYgcHJldi5mb3J3YXJkcyl7XHJcbiAgICAgICAgcmV0dXJuIHtmb3J3YXJkczogZmFsc2V9XHJcbiAgICAgIH1cclxuICAgICAgaWYocHJldi5sZXR0ZXIgPT09IDAgJiYgIXByZXYuZm9yd2FyZHMpe1xyXG4gICAgICAgIHJldHVybiB7d29yZDogcHJldi53b3JkPT09cHJldi53b3Jkcy5sZW5ndGgtMSA/IDAgOiBwcmV2LndvcmQrMSwgZm9yd2FyZHM6IHRydWV9XHJcbiAgICAgIH1cclxuICAgICAgaWYocHJldi5mb3J3YXJkcyl7XHJcbiAgICAgICAgcmV0dXJuIHtsZXR0ZXI6IHByZXYubGV0dGVyKzF9XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiB7bGV0dGVyOiBwcmV2LmxldHRlci0xfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KHRoaXMuYW5pbWF0ZSwgdGhpcy5zdGF0ZS5sZXR0ZXI9PT10aGlzLnN0YXRlLndvcmRzW3RoaXMuc3RhdGUud29yZF0ubGVuZ3RoLTEgJiYgdGhpcy5zdGF0ZS5mb3J3YXJkcyA/IDMwMDAgOiAyMDApO1xyXG4gIH1cclxuXHJcbiAgICByZW5kZXIgKCl7XHJcbiAgICAgICAgdmFyIG1vdCA9IHRoaXMuc3RhdGUud29yZHNbdGhpcy5zdGF0ZS53b3JkXS5zbGljZSgwLCB0aGlzLnN0YXRlLmxldHRlcisxKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPExheW91dCBvQW5pPXt0aGlzLnByb3BzLm9Bbml9PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgPHRpdGxlPkhPTUU8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiRGVzY3JpcHRpb25cIiBjb250ZW50PVwiUHJvZHVjZWQgQnkgVGhlIFdlYiBEZXZlbG9wZXIgQk9VU1NPVUYgTkFCSUxcIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cIkhvbWVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ3ZWxjb21lXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMj57bW90fTxzcGFuIGlkPVwidHlwZXJcIj48L3NwYW4+PC9oMj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaW50cm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+Qm91c3NvdWYgTmFiaWw8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5EZXYgU3Rvcnk8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkJvcm4gaW4gMTk5OCwgbGl2aW5nIGluIE1la25lcyBNb3JvY2NvLCBmcmVlbGFuY2UgZGV2ZWxvcGVyLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU1BBLCBTU1IgZGV2ZWxvcG1lbnQgd2l0aCBKYXZhU2NyaXB0LCBoYXZlIGEgd2F5IHdpdGggZGVzaWduIGFuZCAyRCBhbmltYXRpb24uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPjxhPkxlYXJuIG1vcmUuPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgIC5pbnRybyBkaXZ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMlIDEwJSAzJSAxMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5pbnRybyBkaXY6Zmlyc3QtY2hpbGQgaDJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmludHJvIGRpdjpudGgtY2hpbGQoMikgaDN7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMmY0ZjRmZGI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5pbnRyb3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA4NTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmludHJvIGFydGljbGV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDElIDAlIDElIDUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMTVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBTb3VyY2UgU2FucyBQcm8sIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW50cm97XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW50cm8gZGl2e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMyUgMSUgMyUgMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkhvbWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4IDAgMjBweDsgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuSG9tZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICN3ZWxjb21lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMzNweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICN3ZWxjb21lIGgyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA4MHB4IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI3dlbGNvbWUgI3R5cGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjY2NjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZSAwLjRzIGxpbmVhciAwcyBpbmZpbml0ZSBmb3J3YXJkcztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgNTAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXX0= */\n/*@ sourceURL=C:\\Users\\010\\NextProjects\\Edel\\pages\\index.js */")));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.bc687b75b4980c60a95d.hot-update.js.map