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
      this.canvasObject = new _classes_ImageEditor__WEBPACK_IMPORTED_MODULE_11__["default"](this.canvas.current, "/static/mySelfLarg.jpg", this.section.current.offsetWidth < 600 ? this.section.current.offsetWidth : 600, 800, 'sobel', 'rg');
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
      this.canvasObject.onload(this.section.current.offsetWidth, 400);
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
      }, ".intro.jsx-4217018475 div.jsx-4217018475{padding:3% 10% 3% 10%;}.intro.jsx-4217018475 div.jsx-4217018475:first-child h2.jsx-4217018475{margin:0;}.intro.jsx-4217018475 div.jsx-4217018475 h3.jsx-4217018475{color:#2f4f4fdb;}.intro.jsx-4217018475 ul.jsx-4217018475{padding:0;}.intro.jsx-4217018475 ul.jsx-4217018475 li.jsx-4217018475{margin:10px 0 10px 0;}.intro.jsx-4217018475 article.jsx-4217018475{padding:1% 0% 1% 5%;font-size:1.15rem;font-family:Source Sans Pro,sans-serif;}.intro.jsx-4217018475{width:80%;max-width:850px;margin-top:20px;}@media only screen and (max-width:600px){.intro.jsx-4217018475{width:100%;}.intro.jsx-4217018475 div.jsx-4217018475{padding:3% 1% 3% 0%;}.intro.jsx-4217018475 div.jsx-4217018475:nth-child(2){padding:5% 0% 5% 0%;}.About.jsx-4217018475{padding:0 20px 0 20px;}}.About.jsx-4217018475{width:100%;height:1000px;box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcMDEwXFxOZXh0UHJvamVjdHNcXEVkZWxcXHBhZ2VzXFxhYm91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RTRCLEFBRytDLEFBR2IsQUFHTyxBQUdOLEFBR1csQUFHRCxBQUtWLEFBTUssQUFHUyxBQUdBLEFBR0UsQUFJZixTQW5DZixDQU1BLEFBV29CLENBTWhCLEFBYWMsS0FqQ2xCLElBU3NCLEFBY2xCLEFBR0EsQ0FwQkosQ0FaQSxBQW1DSSxHQUtzQixDQW5CTixZQUx3QixJQU01QyxLQW1CQSw4QkF4QkEiLCJmaWxlIjoiQzpcXFVzZXJzXFwwMTBcXE5leHRQcm9qZWN0c1xcRWRlbFxccGFnZXNcXGFib3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IExpbmsgZnJvbSAnLi4vY29tcG9uZW50cy9MaW5rJztcclxuaW1wb3J0IEltYWdlRWRpdG9yIGZyb20gJy4uL2NsYXNzZXMvSW1hZ2VFZGl0b3InO1xyXG5cclxuY2xhc3MgQWJvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgICAgICB0aGlzLnNlY3Rpb24gPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgICAgICB0aGlzLnJlc2l6ZSA9IHRoaXMucmVzaXplLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuY2FudmFzT2JqZWN0ID0gbnVsbDtcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgdGhpcy5jYW52YXNPYmplY3QgPSBuZXcgSW1hZ2VFZGl0b3IodGhpcy5jYW52YXMuY3VycmVudCwgXCIvc3RhdGljL215U2VsZkxhcmcuanBnXCIsIHRoaXMuc2VjdGlvbi5jdXJyZW50Lm9mZnNldFdpZHRoIDwgNjAwID8gdGhpcy5zZWN0aW9uLmN1cnJlbnQub2Zmc2V0V2lkdGggOiA2MDAsIDgwMCwgJ3NvYmVsJywgJ3JnJyk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplKTtcclxuICAgIH1cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplKTtcclxuICAgIH1cclxuICAgIHJlc2l6ZSgpe1xyXG4gICAgICAgIHRoaXMuY2FudmFzT2JqZWN0Lm9ubG9hZCh0aGlzLnNlY3Rpb24uY3VycmVudC5vZmZzZXRXaWR0aCwgNDAwKTtcclxuICAgIH1cclxuICAgIHJlbmRlciAoKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPExheW91dCBvQW5pPXt0aGlzLnByb3BzLm9Bbml9PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgPHRpdGxlPkFCT1VUPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJBYm91dFwiPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaW50cm9cIiByZWY9e3RoaXMuc2VjdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPldlYiBEZXZlbG9wZXIgJiBEZXNpZ25lcjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGNhbnZhcyByZWY9e3RoaXMuY2FudmFzfT48L2NhbnZhcz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+VGhlIFN0b3J5PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFydGljbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZW5pb3IgYmFjaGVsb3IncyBkZWdyZWUgc3R1ZGVudCBzcGVjaWFsaXplZCBpbiBNYXRoZW1hdGljcy4gU3RhcnRlZCB3ZWIgZGV2ZWxvcG1lbnQgaW4gMjAxNi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhhdmluZyBhIHN0cm9uZyBncmlwIG92ZXIgdGhlIHdheSBvZiBkZXNpZ24gYW5kIGNvZGluZyBhZnRlciAzIHllYXJzIGluIHRoZSBmaWVsZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJ5IGRvaW5nIHRoZSB3aG9sZSBwcm9jZXNzIG9mIHByb2R1Y3Rpb24gYWxvbmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdCBpcyBwb3NzaWJsZSB0byBwcm92aWRlIGRldGFpbGVkIGludGVyYWN0aXZlIGFuZCBoaWdoIHF1YWxpdHkgcHJvZHVjdHMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+U2tpbGxzICYgUHJvZ3JhbW1pbmcgTGFuZ3VhZ2VzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFydGljbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkhUTUw1PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q1NTMyAvIFNBU1MgLyBTQ1NTPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+SmF2YVNjcmlwdCAvIE5leHQuanMgLyBSZWFjdC5qcyAvIE5vZGUuanMgLyBSZWR1eDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlBIUCAvIFdvcmRQcmVzczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPk15U1FMIC8gTW9uZ29vc2UgREI8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5HaXQgLyBHaXRIdWI8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5aZWl0IG5vdzwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlBob3Rvc2hvcCAvIElsbHVzdHJhdG9yPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+UmVzcG9uc2l2ZSBEZXNpZ248L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QzwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkMjPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+UHl0aG9uPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+SmF2YTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgLmludHJvIGRpdntcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMyUgMTAlIDMlIDEwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmludHJvIGRpdjpmaXJzdC1jaGlsZCBoMntcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaW50cm8gZGl2IGgze1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzJmNGY0ZmRiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaW50cm8gdWx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5pbnRybyB1bCBsaXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgMTBweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaW50cm8gYXJ0aWNsZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMSUgMCUgMSUgNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFNvdXJjZSBTYW5zIFBybywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmludHJve1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDg1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmludHJve1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmludHJvIGRpdntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMlIDElIDMlIDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbnRybyBkaXY6bnRoLWNoaWxkKDIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNSUgMCUgNSUgMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkFib3V0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMjBweCAwIDIwcHg7ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkFib3V0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7Il19 */\n/*@ sourceURL=C:\\Users\\010\\NextProjects\\Edel\\pages\\about.js */")));
    }
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ })

})
//# sourceMappingURL=about.js.7f7da5256b625d76b720.hot-update.js.map