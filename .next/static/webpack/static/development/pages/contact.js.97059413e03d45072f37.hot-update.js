webpackHotUpdate("static\\development\\pages\\contact.js",{

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
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
/* harmony import */ var _RouteProgress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./RouteProgress */ "./components/RouteProgress.js");
/* harmony import */ var _MainMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MainMenu */ "./components/MainMenu.js");
/* harmony import */ var _StarsSand__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./StarsSand */ "./components/StarsSand.js");
/* harmony import */ var _OpeningAnimation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./OpeningAnimation */ "./components/OpeningAnimation.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);














var Layout =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Layout, _React$Component);

  function Layout(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Layout);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Layout).call(this, props));
    _this.state = {
      style: {
        transform: "translate(0%, 0%) matrix(1, 0, 0, 1, 0, 0)",
        position: "relative"
      },
      backgroundPositionY: 0,
      oAni: _this.props.oAni
    };
    _this.transform = _this.transform.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Layout, [{
    key: "transform",
    value: function transform() {
      this.setState(function (prev) {
        return prev.style.transform === "translate(0%, 0%) matrix(1, 0, 0, 1, 0, 0)" ? {
          style: {
            transform: "translate(20%, 0%) matrix(0.5, 0, 0, 0.5, 0, 0)",
            position: "fixed"
          }
        } : {
          style: {
            transform: "translate(0%, 0%) matrix(1, 0, 0, 1, 0, 0)",
            position: "relative"
          }
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, this.state.oAni ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_OpeningAnimation__WEBPACK_IMPORTED_MODULE_11__["default"], {
        aniEnd: function aniEnd() {
          _this2.setState({
            oAni: false
          });
        }
      }) : null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_RouteProgress__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_MainMenu__WEBPACK_IMPORTED_MODULE_9__["default"], {
        transformation: this.transform
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "window",
        style: {
          transform: this.state.style.transform,
          position: this.state.style.position,
          backgroundPosition: "60% " + this.state.backgroundPositionY + "px"
        },
        className: "jsx-1581827920"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-1581827920"
      }, this.props.children), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-1581827920"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_StarsSand__WEBPACK_IMPORTED_MODULE_10__["default"], {
        particlesAmount: 50,
        fillStyle: "#888888",
        background: "transparent",
        speed: 0
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1581827920"
      }, "body{margin:0;padding:0;font-family:\"-apple-system\",\"BlinkMacSystemFont\",\"Segoe UI\",\"Roboto\",\"Oxygen\",\"Ubuntu\",\"Cantarell\",\"Fira Sans\",\"Droid Sans\",\"Helvetica Neue\",\"sans-serif\";-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;width:100vw;height:100vh;overflow:hidden;}ul{list-style:none;}a{-webkit-text-decoration:none;text-decoration:none;}code{font-family:source-code-pro,Menlo,Monaco,Consolas,\"Courier New\",monospace;}body>div{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:#96999c;color:#dddddd;}#window{width:100%;height:100%;max-width:100%;max-height:100%;overflow:hidden;position:relative;box-sizing:border-box;-webkit-transition:0.5s ease-in;transition:0.5s ease-in;z-index:1;background-color:#040608;}#window>div:nth-child(1){width:100%;height:100%;overflow-x:hidden;position:relative;box-sizing:border-box;background-color:transparent;z-index:1;}@media only screen and (min-width:0px){#window>div:nth-child(1)::-webkit-scrollbar{width:0.5%;}#window>div:nth-child(1)::-webkit-scrollbar-track{background-color:#333333;}#window>div:nth-child(1)::-webkit-scrollbar-thumb{background-color:#ffffff;}#window>div:nth-child(1)::-webkit-scrollbar-track-piece{background-color:#333333;}#window{-webkit-transform:translate(0%,0%) matrix(1,0,0,1,0,0) !important;-ms-transform:translate(0%,0%) matrix(1,0,0,1,0,0) !important;transform:translate(0%,0%) matrix(1,0,0,1,0,0) !important;position:relative !important;}}#window>div:nth-child(2){width:100%;height:100%;position:absolute;left:0;top:0;background:url(/static/bg_mesh_black.png);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcMDEwXFxOZXh0UHJvamVjdHNcXEVkZWxcXGNvbXBvbmVudHNcXE15TGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdENkIsQUFHd0IsQUFVTyxBQUdLLEFBRzBELEFBR3BFLEFBT0EsQUFhQSxBQVlFLEFBR2MsQUFHQSxBQUdBLEFBR3VDLEFBS3ZELFNBbkVELEVBbUJFLEFBT0EsQUFhQSxBQVlaLEFBaUJZLEtBMURkLEdBVHNLLElBbUJ2SixBQU9FLEFBY0csQUE0QkEsRUFmbEIsQUFHQSxBQUdBLGFBaENnQixHQWNFLEFBNEJYLE9BQ0QsRUExRE4sSUFnQmdCLEFBMkMwQixLQTdCcEIsV0FiSixJQWRwQixPQTRCK0IsT0FiUCxRQTBDeEIsQ0FwRDJCLGFBV0QsQUFhZCxVQUVaLEVBekJnQixjQUNoQiw4QkFVWSxPQS9CeUIsR0FnQ1YsVUE2Qk0sZUEzQmpDLE9BakNvQyxPQTZEbEMsMkJBNURZLFlBQ0MsYUFDRyxnQkFDbEIiLCJmaWxlIjoiQzpcXFVzZXJzXFwwMTBcXE5leHRQcm9qZWN0c1xcRWRlbFxcY29tcG9uZW50c1xcTXlMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUm91dGVQcm9ncmVzcyBmcm9tICcuL1JvdXRlUHJvZ3Jlc3MnXHJcbmltcG9ydCBNYWluTWVudSBmcm9tICcuL01haW5NZW51J1xyXG5pbXBvcnQgU3RhcnNTYW5kIGZyb20gJy4vU3RhcnNTYW5kJ1xyXG5pbXBvcnQgT3BlbmluZ0FuaW1hdGlvbiBmcm9tICcuL09wZW5pbmdBbmltYXRpb24nXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jbGFzcyBMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzdHlsZTp7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgwJSwgMCUpIG1hdHJpeCgxLCAwLCAwLCAxLCAwLCAwKVwiLFxyXG4gICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCJcclxuICAgICAgfSxcclxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uWTogMCxcclxuICAgICAgb0FuaTogdGhpcy5wcm9wcy5vQW5pXHJcbiAgICB9O1xyXG4gICAgdGhpcy50cmFuc2Zvcm0gPSB0aGlzLnRyYW5zZm9ybS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuICB0cmFuc2Zvcm0oKXtcclxuICAgIHRoaXMuc2V0U3RhdGUoKHByZXYpPT57XHJcbiAgICAgIHJldHVybiBwcmV2LnN0eWxlLnRyYW5zZm9ybSA9PT0gXCJ0cmFuc2xhdGUoMCUsIDAlKSBtYXRyaXgoMSwgMCwgMCwgMSwgMCwgMClcIiA/XHJcbiAgICAgICAge3N0eWxlOiB7dHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgyMCUsIDAlKSBtYXRyaXgoMC41LCAwLCAwLCAwLjUsIDAsIDApXCIsIHBvc2l0aW9uOiBcImZpeGVkXCJ9fVxyXG4gICAgICAgIDogXHJcbiAgICAgICAge3N0eWxlOiB7dHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgwJSwgMCUpIG1hdHJpeCgxLCAwLCAwLCAxLCAwLCAwKVwiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwifX0gIFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gICAgcmVuZGVyICgpe1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgIHt0aGlzLnN0YXRlLm9BbmkgPyA8T3BlbmluZ0FuaW1hdGlvbiBhbmlFbmQ9eygpPT57dGhpcy5zZXRTdGF0ZSh7b0FuaTogZmFsc2V9KX19IC8+IDogbnVsbH1cclxuICAgICAgICAgIDxSb3V0ZVByb2dyZXNzIC8+XHJcbiAgICAgICAgICA8TWFpbk1lbnUgdHJhbnNmb3JtYXRpb249e3RoaXMudHJhbnNmb3JtfSAvPlxyXG4gICAgICAgICAgPGRpdiBpZD1cIndpbmRvd1wiIHN0eWxlPXtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdGhpcy5zdGF0ZS5zdHlsZS50cmFuc2Zvcm0sXHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHRoaXMuc3RhdGUuc3R5bGUucG9zaXRpb24sXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcIjYwJSBcIit0aGlzLnN0YXRlLmJhY2tncm91bmRQb3NpdGlvblkrXCJweFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PjxTdGFyc1NhbmQgcGFydGljbGVzQW1vdW50PXs1MH0gZmlsbFN0eWxlPVwiIzg4ODg4OFwiIGJhY2tncm91bmQ9XCJ0cmFuc3BhcmVudFwiIHNwZWVkPXswfSAvPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7Lyo8U3RhcnNTYW5kIHBhcnRpY2xlc0Ftb3VudD17NTB9IGZpbGxTdHlsZT1cIiM0NDQ0NDRcIiBiYWNrZ3JvdW5kPVwiI2ZmZmZmZlwiIHNwZWVkPXsxfSAvPiM0NDg4ZmYgIzAwMDAwMCovfVxyXG4gICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgICAgICAgICAgYm9keXsgXHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiLWFwcGxlLXN5c3RlbVwiLCBcIkJsaW5rTWFjU3lzdGVtRm9udFwiLCBcIlNlZ29lIFVJXCIsIFwiUm9ib3RvXCIsIFwiT3h5Z2VuXCIsIFwiVWJ1bnR1XCIsIFwiQ2FudGFyZWxsXCIsIFwiRmlyYSBTYW5zXCIsIFwiRHJvaWQgU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIFwic2Fucy1zZXJpZlwiO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB1bHtcclxuICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29kZXtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogc291cmNlLWNvZGUtcHJvLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYm9keSA+IGRpdntcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTY5OTljO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZGRkZGRkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICN3aW5kb3cge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbjtcclxuICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNDA2MDg7Ly8xOTFhMWJcclxuICAgICAgICAgICAgICAvL2JhY2tncm91bmQ6IHVybCgvc3RhdGljL3Rlc3RkLnBuZykgNjAlIDAgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICN3aW5kb3cgPiBkaXY6bnRoLWNoaWxkKDEpe1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAvL292ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAvL2JhY2tncm91bmQ6IHVybCgvc3RhdGljL2NoZXJyeS1ibG9zc29tLXBldGFscy12YXJ0aWNhbC5wbmcpIDYwJSAwIG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDBweCl7XHJcbiAgICAgICAgICAgICAgI3dpbmRvdyA+IGRpdjpudGgtY2hpbGQoMSk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAwLjUlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjd2luZG93ID4gZGl2Om50aC1jaGlsZCgxKTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2t7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjd2luZG93ID4gZGl2Om50aC1jaGlsZCgxKTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI3dpbmRvdyA+IGRpdjpudGgtY2hpbGQoMSk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLXBpZWNlIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICN3aW5kb3d7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpIG1hdHJpeCgxLCAwLCAwLCAxLCAwLCAwKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICN3aW5kb3cgPiBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL2JnX21lc2hfYmxhY2sucG5nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7Il19 */\n/*@ sourceURL=C:\\Users\\010\\NextProjects\\Edel\\components\\MyLayout.js */"));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=contact.js.97059413e03d45072f37.hot-update.js.map