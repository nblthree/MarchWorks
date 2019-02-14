webpackHotUpdate("static\\development\\pages\\tutorials.js",{

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
        className: "jsx-572356073"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-572356073"
      }, this.props.children), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-572356073"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_StarsSand__WEBPACK_IMPORTED_MODULE_10__["default"], {
        particlesAmount: 50,
        fillStyle: "#888888",
        background: "transparent",
        speed: 0
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "572356073"
      }, "body{margin:0;padding:0;font-family:\"-apple-system\",\"BlinkMacSystemFont\",\"Segoe UI\",\"Roboto\",\"Oxygen\",\"Ubuntu\",\"Cantarell\",\"Fira Sans\",\"Droid Sans\",\"Helvetica Neue\",\"sans-serif\";-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;width:100vw;height:100vh;overflow:hidden;}ul{list-style:none;}a{-webkit-text-decoration:none;text-decoration:none;}code{font-family:source-code-pro,Menlo,Monaco,Consolas,\"Courier New\",monospace;}body>div{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:#96999c;color:#dddddd;}#window{width:100%;height:100%;max-width:100%;max-height:100%;overflow:hidden;position:relative;box-sizing:border-box;-webkit-transition:0.5s ease-in;transition:0.5s ease-in;z-index:1;background-color:#040608;}#window>div:nth-child(1){width:100%;height:100%;overflow-x:hidden;position:relative;box-sizing:border-box;background-color:transparent;z-index:1;}@media only screen and (min-width:0px){#window>div:nth-child(1)::-webkit-scrollbar{width:2%;}#window>div:nth-child(1)::-webkit-scrollbar-track{background-color:#333333;}#window>div:nth-child(1)::-webkit-scrollbar-thumb{background-color:#ffffff;}#window>div:nth-child(1)::-webkit-scrollbar-track-piece{background-color:#333333;}#window{-webkit-transform:translate(0%,0%) matrix(1,0,0,1,0,0) !important;-ms-transform:translate(0%,0%) matrix(1,0,0,1,0,0) !important;transform:translate(0%,0%) matrix(1,0,0,1,0,0) !important;position:relative !important;}}#window>div:nth-child(2){width:100%;height:100%;position:absolute;left:0;top:0;background:url(/static/bg_mesh_black.png);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcMDEwXFxOZXh0UHJvamVjdHNcXEVkZWxcXGNvbXBvbmVudHNcXE15TGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdENkIsQUFHd0IsQUFVTyxBQUdLLEFBRzBELEFBR3BFLEFBT0EsQUFhQSxBQVlBLEFBR2dCLEFBR0EsQUFHQSxBQUd1QyxBQUt2RCxTQW5FRCxBQW1EVixFQWhDWSxBQU9BLEFBYUEsQUE2QkEsS0ExRGQsR0FUc0ssSUFtQnZKLEFBT0UsQUFjRyxBQTRCQSxFQWZsQixBQUdBLEFBR0EsYUFoQ2dCLEdBY0UsQUE0QlgsT0FDRCxFQTFETixJQWdCZ0IsQUEyQzBCLEtBN0JwQixXQWJKLElBZHBCLE9BNEIrQixPQWJQLFFBMEN4QixDQXBEMkIsYUFXRCxBQWFkLFVBRVosRUF6QmdCLGNBQ2hCLDhCQVVZLE9BL0J5QixHQWdDVixVQTZCTSxlQTNCakMsT0FqQ29DLE9BNkRsQywyQkE1RFksWUFDQyxhQUNHLGdCQUNsQiIsImZpbGUiOiJDOlxcVXNlcnNcXDAxMFxcTmV4dFByb2plY3RzXFxFZGVsXFxjb21wb25lbnRzXFxNeUxheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSb3V0ZVByb2dyZXNzIGZyb20gJy4vUm91dGVQcm9ncmVzcydcclxuaW1wb3J0IE1haW5NZW51IGZyb20gJy4vTWFpbk1lbnUnXHJcbmltcG9ydCBTdGFyc1NhbmQgZnJvbSAnLi9TdGFyc1NhbmQnXHJcbmltcG9ydCBPcGVuaW5nQW5pbWF0aW9uIGZyb20gJy4vT3BlbmluZ0FuaW1hdGlvbidcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHN0eWxlOntcclxuICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDAlLCAwJSkgbWF0cml4KDEsIDAsIDAsIDEsIDAsIDApXCIsXHJcbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIlxyXG4gICAgICB9LFxyXG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb25ZOiAwLFxyXG4gICAgICBvQW5pOiB0aGlzLnByb3BzLm9BbmlcclxuICAgIH07XHJcbiAgICB0aGlzLnRyYW5zZm9ybSA9IHRoaXMudHJhbnNmb3JtLmJpbmQodGhpcyk7XHJcbiAgfVxyXG4gIHRyYW5zZm9ybSgpe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSgocHJldik9PntcclxuICAgICAgcmV0dXJuIHByZXYuc3R5bGUudHJhbnNmb3JtID09PSBcInRyYW5zbGF0ZSgwJSwgMCUpIG1hdHJpeCgxLCAwLCAwLCAxLCAwLCAwKVwiID9cclxuICAgICAgICB7c3R5bGU6IHt0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDIwJSwgMCUpIG1hdHJpeCgwLjUsIDAsIDAsIDAuNSwgMCwgMClcIiwgcG9zaXRpb246IFwiZml4ZWRcIn19XHJcbiAgICAgICAgOiBcclxuICAgICAgICB7c3R5bGU6IHt0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDAlLCAwJSkgbWF0cml4KDEsIDAsIDAsIDEsIDAsIDApXCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCJ9fSAgXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgICByZW5kZXIgKCl7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAge3RoaXMuc3RhdGUub0FuaSA/IDxPcGVuaW5nQW5pbWF0aW9uIGFuaUVuZD17KCk9Pnt0aGlzLnNldFN0YXRlKHtvQW5pOiBmYWxzZX0pfX0gLz4gOiBudWxsfVxyXG4gICAgICAgICAgPFJvdXRlUHJvZ3Jlc3MgLz5cclxuICAgICAgICAgIDxNYWluTWVudSB0cmFuc2Zvcm1hdGlvbj17dGhpcy50cmFuc2Zvcm19IC8+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwid2luZG93XCIgc3R5bGU9e1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0aGlzLnN0YXRlLnN0eWxlLnRyYW5zZm9ybSxcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5zdGF0ZS5zdHlsZS5wb3NpdGlvbixcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiNjAlIFwiK3RoaXMuc3RhdGUuYmFja2dyb3VuZFBvc2l0aW9uWStcInB4XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+PFN0YXJzU2FuZCBwYXJ0aWNsZXNBbW91bnQ9ezUwfSBmaWxsU3R5bGU9XCIjODg4ODg4XCIgYmFja2dyb3VuZD1cInRyYW5zcGFyZW50XCIgc3BlZWQ9ezB9IC8+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKjxTdGFyc1NhbmQgcGFydGljbGVzQW1vdW50PXs1MH0gZmlsbFN0eWxlPVwiIzQ0NDQ0NFwiIGJhY2tncm91bmQ9XCIjZmZmZmZmXCIgc3BlZWQ9ezF9IC8+IzQ0ODhmZiAjMDAwMDAwKi99XHJcbiAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAgICAgICBib2R5eyBcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogXCItYXBwbGUtc3lzdGVtXCIsIFwiQmxpbmtNYWNTeXN0ZW1Gb250XCIsIFwiU2Vnb2UgVUlcIiwgXCJSb2JvdG9cIiwgXCJPeHlnZW5cIiwgXCJVYnVudHVcIiwgXCJDYW50YXJlbGxcIiwgXCJGaXJhIFNhbnNcIiwgXCJEcm9pZCBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJzYW5zLXNlcmlmXCI7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAgICAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHVse1xyXG4gICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb2Rle1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzb3VyY2UtY29kZS1wcm8sIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBib2R5ID4gZGl2e1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5Njk5OWM7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNkZGRkZGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3dpbmRvdyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluO1xyXG4gICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA0MDYwODsvLzE5MWExYlxyXG4gICAgICAgICAgICAgIC8vYmFja2dyb3VuZDogdXJsKC9zdGF0aWMvdGVzdGQucG5nKSA2MCUgMCBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3dpbmRvdyA+IGRpdjpudGgtY2hpbGQoMSl7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgIC8vb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgIC8vYmFja2dyb3VuZDogdXJsKC9zdGF0aWMvY2hlcnJ5LWJsb3Nzb20tcGV0YWxzLXZhcnRpY2FsLnBuZykgNjAlIDAgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHB4KXtcclxuICAgICAgICAgICAgICAjd2luZG93ID4gZGl2Om50aC1jaGlsZCgxKTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjd2luZG93ID4gZGl2Om50aC1jaGlsZCgxKTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2t7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjd2luZG93ID4gZGl2Om50aC1jaGlsZCgxKTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI3dpbmRvdyA+IGRpdjpudGgtY2hpbGQoMSk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLXBpZWNlIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICN3aW5kb3d7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpIG1hdHJpeCgxLCAwLCAwLCAxLCAwLCAwKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICN3aW5kb3cgPiBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL2JnX21lc2hfYmxhY2sucG5nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7Il19 */\n/*@ sourceURL=C:\\Users\\010\\NextProjects\\Edel\\components\\MyLayout.js */"));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=tutorials.js.b1590d582d31bda69f0a.hot-update.js.map