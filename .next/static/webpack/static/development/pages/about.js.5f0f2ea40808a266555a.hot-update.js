webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
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
/* harmony import */ var _classes_ImageEditor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../classes/ImageEditor */ "./classes/ImageEditor.js");













var About =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(About, _React$Component);

  function About(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, About);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(About).call(this, props));
    _this.canvas = react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();
    _this.section = react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();
    _this.resize = _this.resize.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.canvasObject = null;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(About, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.canvasObject = new _classes_ImageEditor__WEBPACK_IMPORTED_MODULE_11__["default"](this.canvas.current, "/static/mySelfLarg.jpg", this.section.current.offsetWidth < 600 ? this.section.current.offsetWidth : 600, 800, 'sobel', 'rg'); //this.canvasObject = new Fontain(this.canvas.current, "/static/tester.jpg");

      window.addEventListener('resize', this.resize);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.resize);
    }
  }, {
    key: "resize",
    value: function resize() {
      this.canvasObject.onload(this.section.current.offsetWidth, this.section.current.offsetWidth < 600 ? this.section.current.offsetWidth : 600, 800);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_MyLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        oAni: this.props.oAni
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_9___default.a, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("title", null, "ABOUT")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-4217018475" + " " + "About"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        ref: this.section,
        className: "jsx-4217018475" + " " + "intro"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-4217018475"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "jsx-4217018475"
      }, "Web Developer & Designer")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-4217018475"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("canvas", {
        ref: this.canvas,
        className: "jsx-4217018475"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-4217018475"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        className: "jsx-4217018475"
      }, "The Story"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("article", {
        className: "jsx-4217018475"
      }, "Senior bachelor's degree student specialized in Mathematics. Started web development in 2016. Having a strong grip over the way of design and coding after 3 years in the field. By doing the whole process of production alone, it is possible to provide detailed interactive and high quality products.")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-4217018475"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        className: "jsx-4217018475"
      }, "Skills & Programming Languages"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("article", {
        className: "jsx-4217018475"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "jsx-4217018475"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-4217018475"
      }, "HTML5"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-4217018475"
      }, "CSS3 / SASS / SCSS"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-4217018475"
      }, "JavaScript / Next.js / React.js / Node.js / Redux"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-4217018475"
      }, "PHP / WordPress"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-4217018475"
      }, "MySQL / Mongoose DB"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-4217018475"
      }, "Git / GitHub"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-4217018475"
      }, "Zeit now"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-4217018475"
      }, "Photoshop / Illustrator"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-4217018475"
      }, "Responsive Design")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "jsx-4217018475"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-4217018475"
      }, "C"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-4217018475"
      }, "C#"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-4217018475"
      }, "Python"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-4217018475"
      }, "Java"))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "4217018475"
      }, ".intro.jsx-4217018475 div.jsx-4217018475{padding:3% 10% 3% 10%;}.intro.jsx-4217018475 div.jsx-4217018475:first-child h2.jsx-4217018475{margin:0;}.intro.jsx-4217018475 div.jsx-4217018475 h3.jsx-4217018475{color:#2f4f4fdb;}.intro.jsx-4217018475 ul.jsx-4217018475{padding:0;}.intro.jsx-4217018475 ul.jsx-4217018475 li.jsx-4217018475{margin:10px 0 10px 0;}.intro.jsx-4217018475 article.jsx-4217018475{padding:1% 0% 1% 5%;font-size:1.15rem;font-family:Source Sans Pro,sans-serif;}.intro.jsx-4217018475{width:80%;max-width:850px;margin-top:20px;}@media only screen and (max-width:600px){.intro.jsx-4217018475{width:100%;}.intro.jsx-4217018475 div.jsx-4217018475{padding:3% 1% 3% 0%;}.intro.jsx-4217018475 div.jsx-4217018475:nth-child(2){padding:5% 0% 5% 0%;}.About.jsx-4217018475{padding:0 20px 0 20px;}}.About.jsx-4217018475{width:100%;height:1000px;box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcMDEwXFxOZXh0UHJvamVjdHNcXEVkZWxcXHBhZ2VzXFxhYm91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RTRCLEFBRytDLEFBR2IsQUFHTyxBQUdOLEFBR1csQUFHRCxBQUtWLEFBTUssQUFHUyxBQUdBLEFBR0UsQUFJZixTQW5DZixDQU1BLEFBV29CLENBTWhCLEFBYWMsS0FqQ2xCLElBU3NCLEFBY2xCLEFBR0EsQ0FwQkosQ0FaQSxBQW1DSSxHQUtzQixDQW5CTixZQUx3QixJQU01QyxLQW1CQSw4QkF4QkEiLCJmaWxlIjoiQzpcXFVzZXJzXFwwMTBcXE5leHRQcm9qZWN0c1xcRWRlbFxccGFnZXNcXGFib3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IExpbmsgZnJvbSAnLi4vY29tcG9uZW50cy9MaW5rJztcclxuaW1wb3J0IEltYWdlRWRpdG9yIGZyb20gJy4uL2NsYXNzZXMvSW1hZ2VFZGl0b3InO1xyXG5cclxuY2xhc3MgQWJvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgICAgICB0aGlzLnNlY3Rpb24gPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgICAgICB0aGlzLnJlc2l6ZSA9IHRoaXMucmVzaXplLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuY2FudmFzT2JqZWN0ID0gbnVsbDtcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgdGhpcy5jYW52YXNPYmplY3QgPSBuZXcgSW1hZ2VFZGl0b3IodGhpcy5jYW52YXMuY3VycmVudCwgXCIvc3RhdGljL215U2VsZkxhcmcuanBnXCIsIHRoaXMuc2VjdGlvbi5jdXJyZW50Lm9mZnNldFdpZHRoIDwgNjAwID8gdGhpcy5zZWN0aW9uLmN1cnJlbnQub2Zmc2V0V2lkdGggOiA2MDAsIDgwMCwgJ3NvYmVsJywgJ3JnJyk7XHJcbiAgICAgICAgLy90aGlzLmNhbnZhc09iamVjdCA9IG5ldyBGb250YWluKHRoaXMuY2FudmFzLmN1cnJlbnQsIFwiL3N0YXRpYy90ZXN0ZXIuanBnXCIpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZSk7XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZSk7XHJcbiAgICB9XHJcbiAgICByZXNpemUoKXtcclxuICAgICAgICB0aGlzLmNhbnZhc09iamVjdC5vbmxvYWQodGhpcy5zZWN0aW9uLmN1cnJlbnQub2Zmc2V0V2lkdGgsIHRoaXMuc2VjdGlvbi5jdXJyZW50Lm9mZnNldFdpZHRoIDwgNjAwID8gdGhpcy5zZWN0aW9uLmN1cnJlbnQub2Zmc2V0V2lkdGggOiA2MDAsIDgwMCk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIgKCl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxMYXlvdXQgb0FuaT17dGhpcy5wcm9wcy5vQW5pfT5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgIDx0aXRsZT5BQk9VVDwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiQWJvdXRcIj5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImludHJvXCIgcmVmPXt0aGlzLnNlY3Rpb259PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5XZWIgRGV2ZWxvcGVyICYgRGVzaWduZXI8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxjYW52YXMgcmVmPXt0aGlzLmNhbnZhc30+PC9jYW52YXM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlRoZSBTdG9yeTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VuaW9yIGJhY2hlbG9yJ3MgZGVncmVlIHN0dWRlbnQgc3BlY2lhbGl6ZWQgaW4gTWF0aGVtYXRpY3MuIFN0YXJ0ZWQgd2ViIGRldmVsb3BtZW50IGluIDIwMTYuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIYXZpbmcgYSBzdHJvbmcgZ3JpcCBvdmVyIHRoZSB3YXkgb2YgZGVzaWduIGFuZCBjb2RpbmcgYWZ0ZXIgMyB5ZWFycyBpbiB0aGUgZmllbGQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCeSBkb2luZyB0aGUgd2hvbGUgcHJvY2VzcyBvZiBwcm9kdWN0aW9uIGFsb25lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXQgaXMgcG9zc2libGUgdG8gcHJvdmlkZSBkZXRhaWxlZCBpbnRlcmFjdGl2ZSBhbmQgaGlnaCBxdWFsaXR5IHByb2R1Y3RzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlNraWxscyAmIFByb2dyYW1taW5nIExhbmd1YWdlczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5IVE1MNTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNTUzMgLyBTQVNTIC8gU0NTUzwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkphdmFTY3JpcHQgLyBOZXh0LmpzIC8gUmVhY3QuanMgLyBOb2RlLmpzIC8gUmVkdXg8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5QSFAgLyBXb3JkUHJlc3M8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5NeVNRTCAvIE1vbmdvb3NlIERCPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+R2l0IC8gR2l0SHViPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+WmVpdCBub3c8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5QaG90b3Nob3AgLyBJbGx1c3RyYXRvcjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlJlc3BvbnNpdmUgRGVzaWduPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5DIzwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlB5dGhvbjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkphdmE8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgIC5pbnRybyBkaXZ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMlIDEwJSAzJSAxMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5pbnRybyBkaXY6Zmlyc3QtY2hpbGQgaDJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmludHJvIGRpdiBoM3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyZjRmNGZkYjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmludHJvIHVse1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaW50cm8gdWwgbGl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwIDEwcHggMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmludHJvIGFydGljbGV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDElIDAlIDElIDUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMTVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBTb3VyY2UgU2FucyBQcm8sIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5pbnRyb3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA4NTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbnRyb3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbnRybyBkaXZ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzJSAxJSAzJSAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW50cm8gZGl2Om50aC1jaGlsZCgyKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDUlIDAlIDUlIDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5BYm91dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHggMCAyMHB4OyAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5BYm91dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0OyJdfQ== */\n/*@ sourceURL=C:\\Users\\010\\NextProjects\\Edel\\pages\\about.js */")));
    }
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ })

})
//# sourceMappingURL=about.js.5f0f2ea40808a266555a.hot-update.js.map