webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/MainMenu.js":
/*!********************************!*\
  !*** ./components/MainMenu.js ***!
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
/* harmony import */ var _classes_Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../classes/Text */ "./classes/Text.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Link */ "./components/Link.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");













var MainMenu =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MainMenu, _Component);

  function MainMenu(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MainMenu);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MainMenu).call(this, props));
    _this.state = {
      menuClass: 'menu'
    };
    _this.classToggle = _this.classToggle.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.canvas = {
      home: react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef(),
      about: react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef(),
      contact: react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef(),
      tuto: react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef()
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MainMenu, [{
    key: "classToggle",
    value: function classToggle(target) {
      var _this2 = this;

      this.setState(function (state) {
        if (target === "menu") {
          if (state.menuClass === 'menu close') {
            setTimeout(_this2.props.transformation, 500);
          } else {
            _this2.props.transformation();
          }

          return {
            menuClass: state.menuClass === 'menu' ? 'menu close' : 'menu',
            liClass: state.menuClass === 'menu' ? "liTransition" : ""
          };
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var obj = [];

      for (var ref in this.canvas) {
        var canvas = this.canvas[ref].current;
        obj.push(new _classes_Text__WEBPACK_IMPORTED_MODULE_8__["default"](canvas, canvas.getAttribute('name'), 18, "Georgia", "#ffffff", "#aaaaaa", 4));
        /*"#3e3e3e", "#7e7e7e"*/
      }

      obj.forEach(function (object) {
        object.canvas.parentElement.addEventListener('click', function () {
          obj.forEach(function (o) {
            if (o.text !== object.text) {
              o.fillStyle = "#ffffff"; //"#7e7e7e"

              o.write();
            }
          });
          object.fillStyle = "#aaaaaa"; //"#3e3e3e"

          object.write();
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("menu", {
        id: "mainMenu",
        style: this.state.menuClass === 'menu close' ? {
          left: 0
        } : null,
        className: "jsx-2579752266"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-2579752266" + " " + "design"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-2579752266"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-2579752266"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-2579752266" + " " + "design"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-2579752266"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-2579752266"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-2579752266" + " " + "design"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-2579752266"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-2579752266"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-2579752266" + " " + "design"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-2579752266"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-2579752266"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        name: "menu",
        onClick: function onClick(e) {
          _this3.classToggle("menu");
        },
        className: "jsx-2579752266" + " " + (this.state.menuClass || "")
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-2579752266"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-2579752266"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "jsx-2579752266"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "/static/logo.svg",
        className: "jsx-2579752266" + " " + "logo"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("nav", {
        className: "jsx-2579752266"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "jsx-2579752266"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-2579752266" + " " + (this.state.liClass || "")
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
        activeClassName: "is-active",
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "jsx-2579752266"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-2579752266" + " " + "arrow"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("canvas", {
        name: "HOME",
        ref: this.canvas.home,
        className: "jsx-2579752266"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-2579752266"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-2579752266"
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-2579752266" + " " + (this.state.liClass || "")
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
        activeClassName: "is-active",
        href: "/about"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "jsx-2579752266"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-2579752266" + " " + "arrow"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("canvas", {
        name: "ABOUT",
        ref: this.canvas.about,
        className: "jsx-2579752266"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-2579752266"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-2579752266"
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-2579752266" + " " + (this.state.liClass || "")
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
        activeClassName: "is-active",
        href: "/contact"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "jsx-2579752266"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-2579752266" + " " + "arrow"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("canvas", {
        name: "CONTACT",
        ref: this.canvas.contact,
        className: "jsx-2579752266"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-2579752266"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-2579752266"
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-2579752266" + " " + (this.state.liClass || "")
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
        activeClassName: "is-active",
        href: "/tutorials"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "jsx-2579752266"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-2579752266" + " " + "arrow"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("canvas", {
        name: "TUTORIALS",
        ref: this.canvas.tuto,
        className: "jsx-2579752266"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-2579752266"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-2579752266"
      })))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-2579752266" + " " + "socialMedia"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "https://github.com/marchworks",
        rel: "noreferrer",
        title: "Github",
        target: "_blank",
        className: "jsx-2579752266"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faGithub"],
        size: "lg",
        color: "#fff"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "https://twitter.com/marchworks",
        rel: "noreferrer",
        title: "Twitter",
        target: "_blank",
        className: "jsx-2579752266"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faTwitter"],
        size: "lg",
        color: "#fff"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "https://stackoverflow.com/users/story/8619959",
        rel: "noreferrer",
        title: "Stack Overflow",
        target: "_blank",
        className: "jsx-2579752266"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faStackOverflow"],
        size: "lg",
        color: "#fff"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2579752266"
      }, ".logo.jsx-2579752266{width:80%;max-width:250px;cursor:pointer;}#mainMenu.jsx-2579752266{position:relative;z-index:10000;height:100%;width:300px;margin:0;background-color:#000000;color:#f0f0f0;-webkit-transition:0.4s ease-in 0.3s;transition:0.4s ease-in 0.3s;left:0;box-sizing:border-box;}#mainMenu.jsx-2579752266 h2.jsx-2579752266{margin-top:50px;}#mainMenu.jsx-2579752266 .menu.jsx-2579752266{display:none;width:40px;height:28px;position:fixed;top:20px;right:20px;cursor:pointer;}#mainMenu.jsx-2579752266 .menu.jsx-2579752266 span.jsx-2579752266{width:100%;height:2px;background-color:#ccc;position:absolute;-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-transition:0.6s ease-out;transition:0.6s ease-out;}#mainMenu.jsx-2579752266 .menu.jsx-2579752266 span.jsx-2579752266:first-child{top:8px;}#mainMenu.jsx-2579752266 .menu.jsx-2579752266 span.jsx-2579752266:first-child.jsx-2579752266:before{top:-8px;}#mainMenu.jsx-2579752266 .menu.jsx-2579752266 span.jsx-2579752266:last-child{top:16px;}#mainMenu.jsx-2579752266 .menu.jsx-2579752266 span.jsx-2579752266:last-child.jsx-2579752266:before{top:8px;}#mainMenu.jsx-2579752266 .menu.jsx-2579752266 span.jsx-2579752266:before{content:\"\";width:100%;height:2px;background-color:#ccc;position:absolute;top:10px;-webkit-transition:0.3s 0.3s linear;transition:0.3s 0.3s linear;}#mainMenu.jsx-2579752266 .close.jsx-2579752266 span.jsx-2579752266{background-color:#fff;}#mainMenu.jsx-2579752266 .close.jsx-2579752266 span.jsx-2579752266:first-child{-webkit-transform:rotateZ(45deg);-ms-transform:rotateZ(45deg);transform:rotateZ(45deg);top:16px;}#mainMenu.jsx-2579752266 .close.jsx-2579752266 span.jsx-2579752266:last-child{-webkit-transform:rotateZ(-45deg);-ms-transform:rotateZ(-45deg);transform:rotateZ(-45deg);}#mainMenu.jsx-2579752266 .close.jsx-2579752266 span.jsx-2579752266:before{width:0;}#mainMenu.jsx-2579752266 .socialMedia.jsx-2579752266{padding:0;margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:absolute;width:100%;left:0;}#mainMenu.jsx-2579752266 .socialMedia.jsx-2579752266 a.jsx-2579752266{margin:0 10%;}@media only screen and (min-width:601px){#mainMenu.jsx-2579752266{left:0;position:relative;min-width:300px;}}#mainMenu.jsx-2579752266 nav.jsx-2579752266{height:calc(100% - 200px);max-height:calc(100% - 200px);overflow:hidden;}#mainMenu.jsx-2579752266 ul.jsx-2579752266{color:#a2a2a2;font-weight:700;font-size:18px;font-family:none;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;height:100%;}#mainMenu.jsx-2579752266 li.jsx-2579752266{margin:20px 0 20px 0;padding:20px 0 20px 0;position:relative;}@media only screen and (max-height:540px){#mainMenu.jsx-2579752266 li.jsx-2579752266{margin:10px 0 10px 0;padding:10px 0 10px 0;}}@media only screen and (max-height:435px){#mainMenu.jsx-2579752266 li.jsx-2579752266{margin:5px 0 5px 0;padding:5px 0 5px 0;}}@media only screen and (max-width:600px){#mainMenu.jsx-2579752266 li.jsx-2579752266{text-align:center;-webkit-transform:translate(-100%,0);-ms-transform:translate(-100%,0);transform:translate(-100%,0);}}#mainMenu.jsx-2579752266 li.jsx-2579752266:nth-child(1){-webkit-transition:0.4s ease-in 0.2s;transition:0.4s ease-in 0.2s;}#mainMenu.jsx-2579752266 li.jsx-2579752266:nth-child(2){-webkit-transition:0.4s ease-in 0.3s;transition:0.4s ease-in 0.3s;}#mainMenu.jsx-2579752266 li.jsx-2579752266:nth-child(3){-webkit-transition:0.4s ease-in 0.4s;transition:0.4s ease-in 0.4s;}#mainMenu.jsx-2579752266 li.jsx-2579752266:nth-child(4){-webkit-transition:0.4s ease-in 0.5s;transition:0.4s ease-in 0.5s;}#mainMenu.jsx-2579752266 .liTransition.jsx-2579752266{-webkit-transform:translate(0%,0);-ms-transform:translate(0%,0);transform:translate(0%,0);}#mainMenu.jsx-2579752266 li.jsx-2579752266 a.jsx-2579752266{color:#a2a2a2;padding:5px 0px 5px 0px;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;position:relative;}#mainMenu.jsx-2579752266 li.jsx-2579752266 a.jsx-2579752266:hover{color:#efefefef;border-bottom:2px #aaaaaa solid;}#mainMenu.jsx-2579752266 li.jsx-2579752266 a.jsx-2579752266 span.jsx-2579752266{display:none;}#mainMenu.jsx-2579752266 .is-active.jsx-2579752266{color:#dcdcdc;}#mainMenu.jsx-2579752266 .is-active.jsx-2579752266 .arrow.jsx-2579752266{position:absolute;right:100%;border-top:10px transparent solid;border-bottom:10px transparent solid;border-right:10px transparent solid;border-left:15px #2d2222 solid;}#mainMenu.jsx-2579752266 .is-active.jsx-2579752266:hover{color:#dcdcdc;border-bottom:none;}@media only screen and (max-width:600px){#mainMenu.jsx-2579752266 .design.jsx-2579752266 span.jsx-2579752266:before,#mainMenu.jsx-2579752266 .design.jsx-2579752266 span.jsx-2579752266:after,#mainMenu.jsx-2579752266 li.jsx-2579752266 a.jsx-2579752266 span.jsx-2579752266:before,#mainMenu.jsx-2579752266 li.jsx-2579752266 a.jsx-2579752266 span.jsx-2579752266:after{background-color:#fff;position:absolute;content:\"\";}#mainMenu.jsx-2579752266 .design.jsx-2579752266{position:absolute;}#mainMenu.jsx-2579752266 .design.jsx-2579752266:nth-child(1){top:5px;left:5px;}#mainMenu.jsx-2579752266 .design.jsx-2579752266:nth-child(1) span.jsx-2579752266:first-child.jsx-2579752266:before{width:25px;height:2px;left:100%;top:5px;}#mainMenu.jsx-2579752266 .design.jsx-2579752266:nth-child(1) span.jsx-2579752266:first-child.jsx-2579752266:after{width:2px;height:25px;top:5px;}#mainMenu.jsx-2579752266 .design.jsx-2579752266:nth-child(1) span.jsx-2579752266:last-child.jsx-2579752266:before{width:25px;height:2px;left:calc(100% + 5px);}#mainMenu.jsx-2579752266 .design.jsx-2579752266:nth-child(1) span.jsx-2579752266:last-child.jsx-2579752266:after{width:2px;height:25px;left:5px;}#mainMenu.jsx-2579752266 .design.jsx-2579752266:nth-child(2){bottom:5px;right:5px;}#mainMenu.jsx-2579752266 .design.jsx-2579752266:nth-child(2) span.jsx-2579752266:first-child.jsx-2579752266:before{width:25px;height:2px;right:100%;bottom:5px;}#mainMenu.jsx-2579752266 .design.jsx-2579752266:nth-child(2) span.jsx-2579752266:first-child.jsx-2579752266:after{width:2px;height:25px;bottom:5px;}#mainMenu.jsx-2579752266 .design.jsx-2579752266:nth-child(2) span.jsx-2579752266:last-child.jsx-2579752266:before{width:25px;height:2px;right:calc(100% + 5px);}#mainMenu.jsx-2579752266 .design.jsx-2579752266:nth-child(2) span.jsx-2579752266:last-child.jsx-2579752266:after{width:2px;height:25px;right:5px;bottom:100%;}#mainMenu.jsx-2579752266 .design.jsx-2579752266:nth-child(3){bottom:5px;left:5px;}#mainMenu.jsx-2579752266 .design.jsx-2579752266:nth-child(3) span.jsx-2579752266:first-child.jsx-2579752266:before{width:25px;height:2px;left:100%;bottom:5px;}#mainMenu.jsx-2579752266 .design.jsx-2579752266:nth-child(3) span.jsx-2579752266:first-child.jsx-2579752266:after{width:2px;height:25px;bottom:5px;}#mainMenu.jsx-2579752266 .design.jsx-2579752266:nth-child(3) span.jsx-2579752266:last-child.jsx-2579752266:before{width:25px;height:2px;left:calc(100% + 5px);}#mainMenu.jsx-2579752266 .design.jsx-2579752266:nth-child(3) span.jsx-2579752266:last-child.jsx-2579752266:after{width:2px;height:25px;left:5px;bottom:100%;}#mainMenu.jsx-2579752266 .design.jsx-2579752266:nth-child(4){top:5px;right:5px;}#mainMenu.jsx-2579752266 .design.jsx-2579752266:nth-child(4) span.jsx-2579752266:first-child.jsx-2579752266:before{width:25px;height:2px;right:100%;top:5px;}#mainMenu.jsx-2579752266 .design.jsx-2579752266:nth-child(4) span.jsx-2579752266:first-child.jsx-2579752266:after{width:2px;height:25px;top:5px;}#mainMenu.jsx-2579752266 .design.jsx-2579752266:nth-child(4) span.jsx-2579752266:last-child.jsx-2579752266:before{width:25px;height:2px;right:calc(100% + 5px);top:0px;}#mainMenu.jsx-2579752266 .design.jsx-2579752266:nth-child(4) span.jsx-2579752266:last-child.jsx-2579752266:after{width:2px;height:25px;right:5px;top:100%;}#mainMenu.jsx-2579752266 h2.jsx-2579752266{text-align:center;margin-bottom:40px;}#mainMenu.jsx-2579752266 .menu.jsx-2579752266{display:block;}#mainMenu.jsx-2579752266{left:-100vw;position:fixed;width:100vw;padding:0;min-width:infinite;}#mainMenu.jsx-2579752266 ul.jsx-2579752266{padding:0;}#mainMenu.jsx-2579752266 li.jsx-2579752266 a.jsx-2579752266{width:150px;}#mainMenu.jsx-2579752266 li.jsx-2579752266 a.jsx-2579752266 canvas.jsx-2579752266{margin:auto;}#mainMenu.jsx-2579752266 li.jsx-2579752266 a.jsx-2579752266 span.jsx-2579752266{display:block;position:absolute;}#mainMenu.jsx-2579752266 li.jsx-2579752266 a.jsx-2579752266 span.jsx-2579752266:nth-child(3){top:0;right:0;}#mainMenu.jsx-2579752266 li.jsx-2579752266 a.jsx-2579752266 span.jsx-2579752266:nth-child(3):before{content:\"\";width:15px;height:2px;position:absolute;right:100%;}#mainMenu.jsx-2579752266 li.jsx-2579752266 a.jsx-2579752266 span.jsx-2579752266:nth-child(3):after{content:\"\";width:2px;height:15px;position:absolute;}#mainMenu.jsx-2579752266 li.jsx-2579752266 a.jsx-2579752266 span.jsx-2579752266:nth-child(4){bottom:0;left:0;}#mainMenu.jsx-2579752266 li.jsx-2579752266 a.jsx-2579752266 span.jsx-2579752266:nth-child(4):before{content:\"\";width:15px;height:2px;position:absolute;}#mainMenu.jsx-2579752266 li.jsx-2579752266 a.jsx-2579752266 span.jsx-2579752266:nth-child(4):after{content:\"\";width:2px;height:15px;position:absolute;bottom:100%;}#mainMenu.jsx-2579752266 .is-active.jsx-2579752266 .arrow.jsx-2579752266{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcMDEwXFxOZXh0UHJvamVjdHNcXEVkZWxcXGNvbXBvbmVudHNcXE1haW5NZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdHb0IsQUFHeUIsQUFLVSxBQWFGLEFBSUgsQUFVRixBQVNILEFBSUMsQUFJQSxBQUlELEFBSUcsQUFVVyxBQUlHLEFBS0MsQUFJbEIsQUFJRSxBQVNHLEFBSUosQUFPaUIsQUFNWixBQVNPLEFBTUUsQUFNRixBQU1ELEFBS1MsQUFHQSxBQUdBLEFBR0EsQUFHRixBQUliLEFBT0UsQUFLSCxBQUlDLEFBSUksQUFTSixBQUtVLEFBS0osQUFHVixBQUlHLEFBT0QsQUFNQyxBQU1ELEFBTUMsQUFLQSxBQU9ELEFBTUMsQUFNRCxBQU9DLEFBS0EsQUFPRCxBQU1DLEFBTUQsQUFPRixBQUtHLEFBT0QsQUFNQyxBQU9ELEFBTVEsQUFJRixBQUdKLEFBT0YsQUFHRSxBQUdBLEFBR0UsQUFJUixBQUlLLEFBT0EsQUFNRixBQUlFLEFBT0EsQUFPRSxNQWxDTCxDQTVQVSxDQXhEdEIsQUFZQSxBQTJCQSxBQXdIYSxBQTJGQyxDQXRQZCxBQUlBLEFBNlRXLENBOVdLLEFBb0ZMLEFBK0hLLEFBWUEsQUFrQkEsQUFZQSxBQW1CQSxBQVlBLEFBbUJBLEFBYUEsQUFvQmQsQ0FoVFcsQUF5QkEsQUFtSkUsQUFhQSxBQVlELEFBS0MsQUFhQSxBQWFGLEFBS0UsQUFhQSxBQWtCQSxBQWFBLEFBNENBLEFBT0QsQUFVQyxBQU9ELENBaERLLEFBVWpCLEFBR0EsQ0FoVVcsQUF1RWIsQUE2RUEsQUFzTkUsQ0FsUmdCLEFBZ0RRLEFBZ0IxQixBQWFxQixBQTJJbkIsQUFtQm9CLEFBS3BCLEVBNVVGLEFBbUprQyxBQTBNaEMsQ0F0S0EsQ0FwTWMsQUFvSWtCLEFBeUNyQixBQW1CWCxBQStGQSxBQThCcUIsQ0E3T1IsQUE4Q1MsQ0FrSXRCLENBOUlzQixBQU1FLEFBeUd4QixBQW1JYyxBQWlCQSxDQXpWUSxBQXlCWCxBQVNiLEFBNkhzQixBQWFSLEFBT0YsQUFNYyxBQU1iLEFBV0UsQUFPQSxBQU1ZLEFBTWIsQUFZQSxBQU9DLEFBTVcsQUFNYixBQVlFLEFBT0gsQUFNZSxBQU9iLEFBcUNDLEFBaUJBLEVBNVZELENBMkVNLENBakdMLEFBdUdpQixDQWtPaEIsRUF2Sm9CLENBcEVuQixBQXNHZixBQTRGQSxDQWhGQSxBQTZEYyxDQXhSRixBQXdNRixBQWlESSxBQVlELEFBbURGLEFBNEJYLENBL1JzQixBQWlJeEIsQUFnRGUsQUFPYixBQStCQSxBQXdCVSxBQXlEVSxBQU9BLEFBVUEsQUFPQSxHQW5XTCxDQTJTZixDQXBLb0IsQ0EzQnBCLEFBdU1ZLENBMUlDLEFBY2IsQ0E3TUosQUFpR0ksQUF3TUEsQUFvQkEsRUF2TWtCLEFBTWxCLEFBOElBLEFBbUJBLENBeFJZLEFBMkJNLEFBeUxsQixBQWtCQSxBQW1CQSxBQXdCQSxDQXhLaUIsQUF5SWpCLEFBOERVLEdBakpaLENBc0t1QixFQW5UWixBQXlLVCxBQWtLYSxBQU9iLEFBV0EsQUFNYyxFQXBFZCxFQTVQa0IsQ0FwRFQsQUFpR08sSUEvRUwsQ0ErRmIsQ0F0RjBCLEFBOEVMLEFBb1BuQixDQWpMcUMsQUF5TXJDLEVBcFh5QixDQXFJM0IsQUFHQSxBQUdBLEFBR0EsRUFzTEUsR0FsVGUsQ0ErRWpCLENBN0NXLFNBQ21CLElBbEM5QixDQTJDVyxHQTdESyxBQWtFaEIsQUE4RUEsR0FwRXlCLEdBZHpCLElBNkdzQyxJQTFLUCxhQStIN0IsbUJBNEMrQixJQXRCYixNQTVITyxBQTJCM0IsU0FtRGMsR0ErQ2QsU0E5Q0EsQUFvRUEsR0EzS1MsT0FDZSxlQTBFSixPQXpFcEIsS0F1QkEsTUFtRGEsV0FDSixPQUNUIiwiZmlsZSI6IkM6XFxVc2Vyc1xcMDEwXFxOZXh0UHJvamVjdHNcXEVkZWxcXGNvbXBvbmVudHNcXE1haW5NZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRleHQgZnJvbSAnLi4vY2xhc3Nlcy9UZXh0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnLi9MaW5rJ1xyXG5cclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQgeyBmYVR3aXR0ZXIsIGZhR2l0aHViLCBmYVN0YWNrT3ZlcmZsb3cgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJ1xyXG5cclxuXHJcbmNsYXNzIE1haW5NZW51IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBtZW51Q2xhc3M6ICdtZW51J1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmNsYXNzVG9nZ2xlID0gdGhpcy5jbGFzc1RvZ2dsZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5jYW52YXMgPSB7XHJcbiAgICAgIGhvbWU6IFJlYWN0LmNyZWF0ZVJlZigpLFxyXG4gICAgICBhYm91dDogUmVhY3QuY3JlYXRlUmVmKCksXHJcbiAgICAgIGNvbnRhY3Q6IFJlYWN0LmNyZWF0ZVJlZigpLFxyXG4gICAgICB0dXRvOiBSZWFjdC5jcmVhdGVSZWYoKVxyXG4gICAgfTtcclxuICB9XHJcblxyXG5cclxuICBjbGFzc1RvZ2dsZSh0YXJnZXQpe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSgoc3RhdGUpPT57XHJcbiAgICAgIGlmKHRhcmdldCA9PT0gXCJtZW51XCIpe1xyXG4gICAgICBcdGlmKHN0YXRlLm1lbnVDbGFzcyA9PT0gJ21lbnUgY2xvc2UnKXtcclxuICAgICAgXHRcdHNldFRpbWVvdXQodGhpcy5wcm9wcy50cmFuc2Zvcm1hdGlvbiwgNTAwKTtcclxuICAgICAgXHR9ZWxzZXtcclxuICAgICAgXHRcdHRoaXMucHJvcHMudHJhbnNmb3JtYXRpb24oKTtcclxuICAgICAgXHR9XHJcbiAgICAgICAgcmV0dXJuIHttZW51Q2xhc3M6IHN0YXRlLm1lbnVDbGFzcyA9PT0gJ21lbnUnID8gJ21lbnUgY2xvc2UnIDogJ21lbnUnLCBsaUNsYXNzOiBzdGF0ZS5tZW51Q2xhc3MgPT09ICdtZW51JyA/IFwibGlUcmFuc2l0aW9uXCIgOiBcIlwifVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdmFyIG9iaiA9IFtdO1xyXG4gICAgZm9yKGxldCByZWYgaW4gdGhpcy5jYW52YXMpe1xyXG4gICAgICB2YXIgY2FudmFzID0gdGhpcy5jYW52YXNbcmVmXS5jdXJyZW50O1xyXG4gICAgICBvYmoucHVzaChuZXcgVGV4dChjYW52YXMsIGNhbnZhcy5nZXRBdHRyaWJ1dGUoJ25hbWUnKSwgMTgsIFwiR2VvcmdpYVwiLCBcIiNmZmZmZmZcIiwgXCIjYWFhYWFhXCIsIDQpKS8qXCIjM2UzZTNlXCIsIFwiIzdlN2U3ZVwiKi9cclxuICAgIH1cclxuICAgIG9iai5mb3JFYWNoKChvYmplY3QpPT57XHJcbiAgICAgIG9iamVjdC5jYW52YXMucGFyZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIG9iai5mb3JFYWNoKChvKT0+e1xyXG4gICAgICAgICAgaWYoby50ZXh0ICE9PSBvYmplY3QudGV4dCl7XHJcbiAgICAgICAgICAgIG8uZmlsbFN0eWxlID0gXCIjZmZmZmZmXCIgLy9cIiM3ZTdlN2VcIlxyXG4gICAgICAgICAgICBvLndyaXRlKClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIG9iamVjdC5maWxsU3R5bGUgPSBcIiNhYWFhYWFcIiAvL1wiIzNlM2UzZVwiXHJcbiAgICAgICAgb2JqZWN0LndyaXRlKClcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bWVudSBpZD1cIm1haW5NZW51XCIgc3R5bGU9e3RoaXMuc3RhdGUubWVudUNsYXNzID09PSAnbWVudSBjbG9zZScgPyB7bGVmdDogMH0gOiBudWxsfT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlc2lnblwiPjxzcGFuPjwvc3Bhbj48c3Bhbj48L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVzaWduXCI+PHNwYW4+PC9zcGFuPjxzcGFuPjwvc3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZXNpZ25cIj48c3Bhbj48L3NwYW4+PHNwYW4+PC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlc2lnblwiPjxzcGFuPjwvc3Bhbj48c3Bhbj48L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgPGRpdiBuYW1lPVwibWVudVwiIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5tZW51Q2xhc3N9IG9uQ2xpY2s9eyhlKT0+e3RoaXMuY2xhc3NUb2dnbGUoXCJtZW51XCIpfX0+XHJcbiAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aDI+PExpbmsgaHJlZj0nLyc+PGltZyBjbGFzc05hbWU9XCJsb2dvXCIgc3JjPVwiL3N0YXRpYy9sb2dvLnN2Z1wiIC8+PC9MaW5rPjwvaDI+XHJcbiAgICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5saUNsYXNzfT48TGluayBhY3RpdmVDbGFzc05hbWU9J2lzLWFjdGl2ZScgaHJlZj0nLyc+XHJcbiAgICAgICAgICAgICAgICAgIDxhPjxkaXYgY2xhc3NOYW1lPVwiYXJyb3dcIj48L2Rpdj48Y2FudmFzIG5hbWU9XCJIT01FXCIgcmVmPXt0aGlzLmNhbnZhcy5ob21lfT48L2NhbnZhcz48c3Bhbj48L3NwYW4+PHNwYW4+PC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmxpQ2xhc3N9PjxMaW5rIGFjdGl2ZUNsYXNzTmFtZT0naXMtYWN0aXZlJyBocmVmPScvYWJvdXQnPlxyXG4gICAgICAgICAgICAgICAgICA8YT48ZGl2IGNsYXNzTmFtZT1cImFycm93XCI+PC9kaXY+PGNhbnZhcyBuYW1lPVwiQUJPVVRcIiByZWY9e3RoaXMuY2FudmFzLmFib3V0fT48L2NhbnZhcz48c3Bhbj48L3NwYW4+PHNwYW4+PC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmxpQ2xhc3N9PjxMaW5rIGFjdGl2ZUNsYXNzTmFtZT0naXMtYWN0aXZlJyBocmVmPScvY29udGFjdCc+XHJcbiAgICAgICAgICAgICAgICAgIDxhPjxkaXYgY2xhc3NOYW1lPVwiYXJyb3dcIj48L2Rpdj48Y2FudmFzIG5hbWU9XCJDT05UQUNUXCIgcmVmPXt0aGlzLmNhbnZhcy5jb250YWN0fT48L2NhbnZhcz48c3Bhbj48L3NwYW4+PHNwYW4+PC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmxpQ2xhc3N9PjxMaW5rIGFjdGl2ZUNsYXNzTmFtZT0naXMtYWN0aXZlJyBocmVmPScvdHV0b3JpYWxzJz5cclxuICAgICAgICAgICAgICAgICAgPGE+PGRpdiBjbGFzc05hbWU9XCJhcnJvd1wiPjwvZGl2PjxjYW52YXMgbmFtZT1cIlRVVE9SSUFMU1wiIHJlZj17dGhpcy5jYW52YXMudHV0b30+PC9jYW52YXM+PHNwYW4+PC9zcGFuPjxzcGFuPjwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsTWVkaWFcIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9tYXJjaHdvcmtzXCIgcmVsPVwibm9yZWZlcnJlclwiIHRpdGxlPVwiR2l0aHViXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUdpdGh1Yn0gc2l6ZT1cImxnXCIgY29sb3I9XCIjZmZmXCIgLz48L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL21hcmNod29ya3NcIiByZWw9XCJub3JlZmVycmVyXCIgdGl0bGU9XCJUd2l0dGVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVR3aXR0ZXJ9IHNpemU9XCJsZ1wiIGNvbG9yPVwiI2ZmZlwiIC8+PC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS91c2Vycy9zdG9yeS84NjE5OTU5XCIgcmVsPVwibm9yZWZlcnJlclwiIHRpdGxlPVwiU3RhY2sgT3ZlcmZsb3dcIiB0YXJnZXQ9XCJfYmxhbmtcIj48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU3RhY2tPdmVyZmxvd30gc2l6ZT1cImxnXCIgY29sb3I9XCIjZmZmXCIgLz48L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIC5sb2dve1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyNTBweDtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI21haW5NZW51IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDAwO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDsvKmZmZmZmZiovXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2YwZjBmMDsvKjNlM2UzZSovXHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2UtaW4gMC4zcztcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgI21haW5NZW51IGgyIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAjbWFpbk1lbnUgLm1lbnUge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAjbWFpbk1lbnUgLm1lbnUgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNnMgZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAjbWFpbk1lbnUgLm1lbnUgc3BhbjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDhweDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICNtYWluTWVudSAubWVudSBzcGFuOmZpcnN0LWNoaWxkOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IC04cHg7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAjbWFpbk1lbnUgLm1lbnUgc3BhbjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIHRvcDogMTZweDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICNtYWluTWVudSAubWVudSBzcGFuOmxhc3QtY2hpbGQ6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIHRvcDogOHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgI21haW5NZW51IC5tZW51IHNwYW46YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3MgMC4zcyBsaW5lYXI7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAjbWFpbk1lbnUgLmNsb3NlIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICNtYWluTWVudSAuY2xvc2Ugc3BhbjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooNDVkZWcpO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAxNnB4O1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgI21haW5NZW51IC5jbG9zZSBzcGFuOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKC00NWRlZyk7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAjbWFpbk1lbnUgLmNsb3NlIHNwYW46YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgI21haW5NZW51IC5zb2NpYWxNZWRpYXtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICNtYWluTWVudSAuc29jaWFsTWVkaWEgYXtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxMCU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAxcHgpIHtcclxuICAgICAgICAgICAgICAgICNtYWluTWVudSB7XHJcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICNtYWluTWVudSBuYXYge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMDBweCk7XHJcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMDBweCk7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgI21haW5NZW51IHVsIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjYTJhMmEyO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICNtYWluTWVudSBsaSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMCAyMHB4IDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDAgMjBweCAwO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA1NDBweCkge1xyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IGxpIHtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgMTBweCAwO1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDAgMTBweCAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0MzVweCkge1xyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IGxpIHtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMCA1cHggMDtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDAgNXB4IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgICAgICAgICNtYWluTWVudSBsaSB7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjbWFpbk1lbnUgbGk6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZS1pbiAwLjJzO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjbWFpbk1lbnUgbGk6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZS1pbiAwLjNzO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjbWFpbk1lbnUgbGk6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZS1pbiAwLjRzO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjbWFpbk1lbnUgbGk6bnRoLWNoaWxkKDQpIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZS1pbiAwLjVzO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjbWFpbk1lbnUgLmxpVHJhbnNpdGlvbiB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCk7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAjbWFpbk1lbnUgbGkgYSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2EyYTJhMjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwcHggNXB4IDBweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgI21haW5NZW51IGxpIGE6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNlZmVmZWZlZjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCAjYWFhYWFhIHNvbGlkO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgI21haW5NZW51IGxpIGEgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgI21haW5NZW51IC5pcy1hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNkY2RjZGM7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAjbWFpbk1lbnUgLmlzLWFjdGl2ZSAuYXJyb3cge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxMHB4IHRyYW5zcGFyZW50IHNvbGlkO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMTBweCB0cmFuc3BhcmVudCBzb2xpZDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMTBweCB0cmFuc3BhcmVudCBzb2xpZDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxNXB4ICMyZDIyMjIgc29saWQ7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAjbWFpbk1lbnUgLmlzLWFjdGl2ZTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2RjZGNkYztcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgICAgICAgICNtYWluTWVudSAuZGVzaWduIHNwYW46YmVmb3JlLCAjbWFpbk1lbnUgLmRlc2lnbiBzcGFuOmFmdGVyLCAjbWFpbk1lbnUgbGkgYSBzcGFuOmJlZm9yZSwgI21haW5NZW51IGxpIGEgc3BhbjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICNtYWluTWVudSAuZGVzaWduIHtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IC5kZXNpZ246bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICNtYWluTWVudSAuZGVzaWduOm50aC1jaGlsZCgxKSBzcGFuOmZpcnN0LWNoaWxkOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgICAgbGVmdDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IC5kZXNpZ246bnRoLWNoaWxkKDEpIHNwYW46Zmlyc3QtY2hpbGQ6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgIHRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICNtYWluTWVudSAuZGVzaWduOm50aC1jaGlsZCgxKSBzcGFuOmxhc3QtY2hpbGQ6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICBsZWZ0OiBjYWxjKDEwMCUgKyA1cHgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICNtYWluTWVudSAuZGVzaWduOm50aC1jaGlsZCgxKSBzcGFuOmxhc3QtY2hpbGQ6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDVweDsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgLmRlc2lnbjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgICAgICBib3R0b206IDVweDtcclxuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgLmRlc2lnbjpudGgtY2hpbGQoMikgc3BhbjpmaXJzdC1jaGlsZDpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICBib3R0b206IDVweDsgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgLmRlc2lnbjpudGgtY2hpbGQoMikgc3BhbjpmaXJzdC1jaGlsZDphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgYm90dG9tOiA1cHg7ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICNtYWluTWVudSAuZGVzaWduOm50aC1jaGlsZCgyKSBzcGFuOmxhc3QtY2hpbGQ6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICByaWdodDogY2FsYygxMDAlICsgNXB4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgLmRlc2lnbjpudGgtY2hpbGQoMikgc3BhbjpsYXN0LWNoaWxkOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICByaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICBib3R0b206IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IC5kZXNpZ246bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICAgICAgICAgICAgYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgLmRlc2lnbjpudGgtY2hpbGQoMykgc3BhbjpmaXJzdC1jaGlsZDpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIGJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICNtYWluTWVudSAuZGVzaWduOm50aC1jaGlsZCgzKSBzcGFuOmZpcnN0LWNoaWxkOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICBib3R0b206IDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgLmRlc2lnbjpudGgtY2hpbGQoMykgc3BhbjpsYXN0LWNoaWxkOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgICAgbGVmdDogY2FsYygxMDAlICsgNXB4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgLmRlc2lnbjpudGgtY2hpbGQoMykgc3BhbjpsYXN0LWNoaWxkOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICBsZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgIGJvdHRvbTogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgLmRlc2lnbjpudGgtY2hpbGQoNCkge1xyXG4gICAgICAgICAgICAgICAgICB0b3A6IDVweDtcclxuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgLmRlc2lnbjpudGgtY2hpbGQoNCkgc3BhbjpmaXJzdC1jaGlsZDpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICB0b3A6IDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgLmRlc2lnbjpudGgtY2hpbGQoNCkgc3BhbjpmaXJzdC1jaGlsZDphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IC5kZXNpZ246bnRoLWNoaWxkKDQpIHNwYW46bGFzdC1jaGlsZDpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiBjYWxjKDEwMCUgKyA1cHgpO1xyXG4gICAgICAgICAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgLmRlc2lnbjpudGgtY2hpbGQoNCkgc3BhbjpsYXN0LWNoaWxkOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICByaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICB0b3A6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgaDIge1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgLm1lbnUge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IHtcclxuICAgICAgICAgICAgICAgICAgbGVmdDogLTEwMHZ3O1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiBpbmZpbml0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICNtYWluTWVudSB1bCB7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgbGkgYSB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICNtYWluTWVudSBsaSBhIGNhbnZhcyB7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICNtYWluTWVudSBsaSBhIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IGxpIGEgc3BhbjpudGgtY2hpbGQoMykge1xyXG4gICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IGxpIGEgc3BhbjpudGgtY2hpbGQoMyk6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IGxpIGEgc3BhbjpudGgtY2hpbGQoMyk6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICNtYWluTWVudSBsaSBhIHNwYW46bnRoLWNoaWxkKDQpIHtcclxuICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IGxpIGEgc3BhbjpudGgtY2hpbGQoNCk6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IGxpIGEgc3BhbjpudGgtY2hpbGQoNCk6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgYm90dG9tOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IC5pcy1hY3RpdmUgLmFycm93IHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvbWVudT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluTWVudTsiXX0= */\n/*@ sourceURL=C:\\Users\\010\\NextProjects\\Edel\\components\\MainMenu.js */"));
    }
  }]);

  return MainMenu;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MainMenu);

/***/ })

})
//# sourceMappingURL=index.js.003ec013a1f5a7be94c7.hot-update.js.map