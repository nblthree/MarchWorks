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
        className: "jsx-179904327"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-179904327"
      }, this.props.children), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-179904327"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_StarsSand__WEBPACK_IMPORTED_MODULE_10__["default"], {
        particlesAmount: 50,
        fillStyle: "#888888",
        background: "transparent",
        speed: 0
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "179904327"
      }, "body{margin:0;padding:0;font-family:\"-apple-system\",\"BlinkMacSystemFont\",\"Segoe UI\",\"Roboto\",\"Oxygen\",\"Ubuntu\",\"Cantarell\",\"Fira Sans\",\"Droid Sans\",\"Helvetica Neue\",\"sans-serif\";-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;width:100vw;height:100vh;overflow:hidden;}ul{list-style:none;}a{-webkit-text-decoration:none;text-decoration:none;}code{font-family:source-code-pro,Menlo,Monaco,Consolas,\"Courier New\",monospace;}body>div{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:#96999c;color:#dddddd;}#window{width:100%;height:100%;max-width:100%;max-height:100%;overflow:hidden;position:relative;box-sizing:border-box;-webkit-transition:0.5s ease-in;transition:0.5s ease-in;z-index:1;background-color:#040608;}#window>div:nth-child(1){width:100%;height:100%;overflow-x:hidden;position:relative;box-sizing:border-box;background-color:transparent;z-index:1;}@media only screen and (min-width:601px){#window>div:nth-child(1)::-webkit-scrollbar{width:0.8em;}#window>div:nth-child(1)::-webkit-scrollbar-track{background-color:#333333;}#window>div:nth-child(1)::-webkit-scrollbar-thumb{background-color:#ffffff;}#window>div:nth-child(1)::-webkit-scrollbar-track-piece{background-color:#333333;}#window{-webkit-transform:translate(0%,0%) matrix(1,0,0,1,0,0) !important;-ms-transform:translate(0%,0%) matrix(1,0,0,1,0,0) !important;transform:translate(0%,0%) matrix(1,0,0,1,0,0) !important;position:relative !important;}}#window>div:nth-child(2){width:100%;height:100%;position:absolute;left:0;top:0;background:url(/static/bg_mesh_black.png);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcMDEwXFxOZXh0UHJvamVjdHNcXEVkZWxcXGNvbXBvbmVudHNcXE15TGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdENkIsQUFHd0IsQUFVTyxBQUdLLEFBRzBELEFBR3BFLEFBT0EsQUFhQSxBQVlHLEFBR2EsQUFHQSxBQUdBLEFBR3VDLEFBS3ZELFNBbkVELEVBbUJFLEFBT0EsQUFhQSxBQTZCQSxDQWpCWixJQXpDRixHQVRzSyxJQW1CdkosQUFPRSxBQWNHLEFBNEJBLEVBZmxCLEFBR0EsQUFHQSxhQWhDZ0IsR0FjRSxBQTRCWCxPQUNELEVBMUROLElBZ0JnQixBQTJDMEIsS0E3QnBCLFdBYkosSUFkcEIsT0E0QitCLE9BYlAsUUEwQ3hCLENBcEQyQixhQVdELEFBYWQsVUFFWixFQXpCZ0IsY0FDaEIsOEJBVVksT0EvQnlCLEdBZ0NWLFVBNkJNLGVBM0JqQyxPQWpDb0MsT0E2RGxDLDJCQTVEWSxZQUNDLGFBQ0csZ0JBQ2xCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcMDEwXFxOZXh0UHJvamVjdHNcXEVkZWxcXGNvbXBvbmVudHNcXE15TGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJvdXRlUHJvZ3Jlc3MgZnJvbSAnLi9Sb3V0ZVByb2dyZXNzJ1xyXG5pbXBvcnQgTWFpbk1lbnUgZnJvbSAnLi9NYWluTWVudSdcclxuaW1wb3J0IFN0YXJzU2FuZCBmcm9tICcuL1N0YXJzU2FuZCdcclxuaW1wb3J0IE9wZW5pbmdBbmltYXRpb24gZnJvbSAnLi9PcGVuaW5nQW5pbWF0aW9uJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc3R5bGU6e1xyXG4gICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoMCUsIDAlKSBtYXRyaXgoMSwgMCwgMCwgMSwgMCwgMClcIixcclxuICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvblk6IDAsXHJcbiAgICAgIG9Bbmk6IHRoaXMucHJvcHMub0FuaVxyXG4gICAgfTtcclxuICAgIHRoaXMudHJhbnNmb3JtID0gdGhpcy50cmFuc2Zvcm0uYmluZCh0aGlzKTtcclxuICB9XHJcbiAgdHJhbnNmb3JtKCl7XHJcbiAgICB0aGlzLnNldFN0YXRlKChwcmV2KT0+e1xyXG4gICAgICByZXR1cm4gcHJldi5zdHlsZS50cmFuc2Zvcm0gPT09IFwidHJhbnNsYXRlKDAlLCAwJSkgbWF0cml4KDEsIDAsIDAsIDEsIDAsIDApXCIgP1xyXG4gICAgICAgIHtzdHlsZToge3RyYW5zZm9ybTogXCJ0cmFuc2xhdGUoMjAlLCAwJSkgbWF0cml4KDAuNSwgMCwgMCwgMC41LCAwLCAwKVwiLCBwb3NpdGlvbjogXCJmaXhlZFwifX1cclxuICAgICAgICA6IFxyXG4gICAgICAgIHtzdHlsZToge3RyYW5zZm9ybTogXCJ0cmFuc2xhdGUoMCUsIDAlKSBtYXRyaXgoMSwgMCwgMCwgMSwgMCwgMClcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIn19ICBcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAgIHJlbmRlciAoKXtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICB7dGhpcy5zdGF0ZS5vQW5pID8gPE9wZW5pbmdBbmltYXRpb24gYW5pRW5kPXsoKT0+e3RoaXMuc2V0U3RhdGUoe29Bbmk6IGZhbHNlfSl9fSAvPiA6IG51bGx9XHJcbiAgICAgICAgICA8Um91dGVQcm9ncmVzcyAvPlxyXG4gICAgICAgICAgPE1haW5NZW51IHRyYW5zZm9ybWF0aW9uPXt0aGlzLnRyYW5zZm9ybX0gLz5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJ3aW5kb3dcIiBzdHlsZT17XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRoaXMuc3RhdGUuc3R5bGUudHJhbnNmb3JtLFxyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLnN0YXRlLnN0eWxlLnBvc2l0aW9uLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCI2MCUgXCIrdGhpcy5zdGF0ZS5iYWNrZ3JvdW5kUG9zaXRpb25ZK1wicHhcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj48U3RhcnNTYW5kIHBhcnRpY2xlc0Ftb3VudD17NTB9IGZpbGxTdHlsZT1cIiM4ODg4ODhcIiBiYWNrZ3JvdW5kPVwidHJhbnNwYXJlbnRcIiBzcGVlZD17MH0gLz48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qPFN0YXJzU2FuZCBwYXJ0aWNsZXNBbW91bnQ9ezUwfSBmaWxsU3R5bGU9XCIjNDQ0NDQ0XCIgYmFja2dyb3VuZD1cIiNmZmZmZmZcIiBzcGVlZD17MX0gLz4jNDQ4OGZmICMwMDAwMDAqL31cclxuICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgICAgICAgIGJvZHl7IFxyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIi1hcHBsZS1zeXN0ZW1cIiwgXCJCbGlua01hY1N5c3RlbUZvbnRcIiwgXCJTZWdvZSBVSVwiLCBcIlJvYm90b1wiLCBcIk94eWdlblwiLCBcIlVidW50dVwiLCBcIkNhbnRhcmVsbFwiLCBcIkZpcmEgU2Fuc1wiLCBcIkRyb2lkIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBcInNhbnMtc2VyaWZcIjtcclxuICAgICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgICAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdWx7XHJcbiAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvZGV7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHNvdXJjZS1jb2RlLXBybywgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJvZHkgPiBkaXZ7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk2OTk5YztcclxuICAgICAgICAgICAgICBjb2xvcjogI2RkZGRkZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjd2luZG93IHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW47XHJcbiAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQwNjA4Oy8vMTkxYTFiXHJcbiAgICAgICAgICAgICAgLy9iYWNrZ3JvdW5kOiB1cmwoL3N0YXRpYy90ZXN0ZC5wbmcpIDYwJSAwIG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjd2luZG93ID4gZGl2Om50aC1jaGlsZCgxKXtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgLy9vdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgLy9iYWNrZ3JvdW5kOiB1cmwoL3N0YXRpYy9jaGVycnktYmxvc3NvbS1wZXRhbHMtdmFydGljYWwucG5nKSA2MCUgMCBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDFweCl7XHJcbiAgICAgICAgICAgICAgI3dpbmRvdyA+IGRpdjpudGgtY2hpbGQoMSk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAwLjhlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI3dpbmRvdyA+IGRpdjpudGgtY2hpbGQoMSk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNre1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI3dpbmRvdyA+IGRpdjpudGgtY2hpbGQoMSk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICN3aW5kb3cgPiBkaXY6bnRoLWNoaWxkKDEpOjotd2Via2l0LXNjcm9sbGJhci10cmFjay1waWVjZSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjd2luZG93e1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKSBtYXRyaXgoMSwgMCwgMCwgMSwgMCwgMCkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjd2luZG93ID4gZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL3N0YXRpYy9iZ19tZXNoX2JsYWNrLnBuZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyJdfQ== */\n/*@ sourceURL=C:\\Users\\010\\NextProjects\\Edel\\components\\MyLayout.js */"));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=contact.js.773cfdb8454345736630.hot-update.js.map