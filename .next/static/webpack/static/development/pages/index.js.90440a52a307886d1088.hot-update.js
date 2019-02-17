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
        alt: "",
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
      }, "HOME"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
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
      }, "ABOUT"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
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
      }, "CONTACT"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
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
      }, "TUTORIALS"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
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
      }, ".logo.jsx-2579752266{width:80%;max-width:250px;cursor:pointer;}#mainMenu.jsx-2579752266{position:relative;z-index:10000;height:100%;width:300px;margin:0;background-color:#000000;color:#f0f0f0;-webkit-transition:0.4s ease-in 0.3s;transition:0.4s ease-in 0.3s;left:0;box-sizing:border-box;}#mainMenu.jsx-2579752266 h2.jsx-2579752266{margin-top:50px;}#mainMenu.jsx-2579752266 .menu.jsx-2579752266{display:none;width:40px;height:28px;position:fixed;top:20px;right:20px;cursor:pointer;}#mainMenu.jsx-2579752266 .menu.jsx-2579752266 span.jsx-2579752266{width:100%;height:2px;background-color:#ccc;position:absolute;-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-transition:0.6s ease-out;transition:0.6s ease-out;}#mainMenu.jsx-2579752266 .menu.jsx-2579752266 span.jsx-2579752266:first-child{top:8px;}#mainMenu.jsx-2579752266 .menu.jsx-2579752266 span.jsx-2579752266:first-child.jsx-2579752266:before{top:-8px;}#mainMenu.jsx-2579752266 .menu.jsx-2579752266 span.jsx-2579752266:last-child{top:16px;}#mainMenu.jsx-2579752266 .menu.jsx-2579752266 span.jsx-2579752266:last-child.jsx-2579752266:before{top:8px;}#mainMenu.jsx-2579752266 .menu.jsx-2579752266 span.jsx-2579752266:before{content:\"\";width:100%;height:2px;background-color:#ccc;position:absolute;top:10px;-webkit-transition:0.3s 0.3s linear;transition:0.3s 0.3s linear;}#mainMenu.jsx-2579752266 .close.jsx-2579752266 span.jsx-2579752266{background-color:#fff;}#mainMenu.jsx-2579752266 .close.jsx-2579752266 span.jsx-2579752266:first-child{-webkit-transform:rotateZ(45deg);-ms-transform:rotateZ(45deg);transform:rotateZ(45deg);top:16px;}#mainMenu.jsx-2579752266 .close.jsx-2579752266 span.jsx-2579752266:last-child{-webkit-transform:rotateZ(-45deg);-ms-transform:rotateZ(-45deg);transform:rotateZ(-45deg);}#mainMenu.jsx-2579752266 .close.jsx-2579752266 span.jsx-2579752266:before{width:0;}#mainMenu.jsx-2579752266 .socialMedia.jsx-2579752266{padding:0;margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:absolute;width:100%;left:0;}#mainMenu.jsx-2579752266 .socialMedia.jsx-2579752266 a.jsx-2579752266{margin:0 10%;}@media only screen and (min-width:601px){#mainMenu.jsx-2579752266{left:0;position:relative;min-width:300px;}}#mainMenu.jsx-2579752266 nav.jsx-2579752266{height:calc(100% - 200px);max-height:calc(100% - 200px);overflow:hidden;}#mainMenu.jsx-2579752266 ul.jsx-2579752266{color:#a2a2a2;font-weight:700;font-size:18px;font-family:none;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;height:100%;}#mainMenu.jsx-2579752266 li.jsx-2579752266{margin:20px 0 20px 0;padding:20px 0 20px 0;position:relative;}@media only screen and (max-height:540px){#mainMenu.jsx-2579752266 li.jsx-2579752266{margin:10px 0 10px 0;padding:10px 0 10px 0;}}@media only screen and (max-height:435px){#mainMenu.jsx-2579752266 li.jsx-2579752266{margin:5px 0 5px 0;padding:5px 0 5px 0;}}@media only screen and (max-width:600px){#mainMenu.jsx-2579752266 li.jsx-2579752266{text-align:center;-webkit-transform:translate(-100%,0);-ms-transform:translate(-100%,0);transform:translate(-100%,0);}}#mainMenu.jsx-2579752266 li.jsx-2579752266:nth-child(1){-webkit-transition:0.4s ease-in 0.2s;transition:0.4s ease-in 0.2s;}#mainMenu.jsx-2579752266 li.jsx-2579752266:nth-child(2){-webkit-transition:0.4s ease-in 0.3s;transition:0.4s ease-in 0.3s;}#mainMenu.jsx-2579752266 li.jsx-2579752266:nth-child(3){-webkit-transition:0.4s ease-in 0.4s;transition:0.4s ease-in 0.4s;}#mainMenu.jsx-2579752266 li.jsx-2579752266:nth-child(4){-webkit-transition:0.4s ease-in 0.5s;transition:0.4s ease-in 0.5s;}#mainMenu.jsx-2579752266 .liTransition.jsx-2579752266{-webkit-transform:translate(0%,0);-ms-transform:translate(0%,0);transform:translate(0%,0);}#mainMenu.jsx-2579752266 li.jsx-2579752266 a.jsx-2579752266{color:#a2a2a2;padding:5px 0px 5px 0px;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;position:relative;}#mainMenu.jsx-2579752266 li.jsx-2579752266 a.jsx-2579752266:hover{color:#efefefef;border-bottom:2px #aaaaaa solid;}#mainMenu.jsx-2579752266 li.jsx-2579752266 a.jsx-2579752266 span.jsx-2579752266{display:none;}#mainMenu.jsx-2579752266 .is-active.jsx-2579752266{color:#dcdcdc;}#mainMenu.jsx-2579752266 .is-active.jsx-2579752266 .arrow.jsx-2579752266{position:absolute;right:100%;border-top:10px transparent solid;border-bottom:10px transparent solid;border-right:10px transparent solid;border-left:15px #2d2222 solid;}#mainMenu.jsx-2579752266 .is-active.jsx-2579752266:hover{color:#dcdcdc;border-bottom:none;}@media only screen and (max-width:600px){#mainMenu.jsx-2579752266 .design.jsx-2579752266 span.jsx-2579752266:before,#mainMenu.jsx-2579752266 .design.jsx-2579752266 span.jsx-2579752266:after,#mainMenu.jsx-2579752266 li.jsx-2579752266 a.jsx-2579752266 span.jsx-2579752266:before,#mainMenu.jsx-2579752266 li.jsx-2579752266 a.jsx-2579752266 span.jsx-2579752266:after{background-color:#fff;position:absolute;content:\"\";}#mainMenu.jsx-2579752266 .design.jsx-2579752266{position:absolute;}#mainMenu.jsx-2579752266 .design.jsx-2579752266:nth-child(1){top:5px;left:5px;}#mainMenu.jsx-2579752266 .design.jsx-2579752266:nth-child(1) span.jsx-2579752266:first-child.jsx-2579752266:before{width:25px;height:2px;left:100%;top:5px;}#mainMenu.jsx-2579752266 .design.jsx-2579752266:nth-child(1) span.jsx-2579752266:first-child.jsx-2579752266:after{width:2px;height:25px;top:5px;}#mainMenu.jsx-2579752266 .design.jsx-2579752266:nth-child(1) span.jsx-2579752266:last-child.jsx-2579752266:before{width:25px;height:2px;left:calc(100% + 5px);}#mainMenu.jsx-2579752266 .design.jsx-2579752266:nth-child(1) span.jsx-2579752266:last-child.jsx-2579752266:after{width:2px;height:25px;left:5px;}#mainMenu.jsx-2579752266 .design.jsx-2579752266:nth-child(2){bottom:5px;right:5px;}#mainMenu.jsx-2579752266 .design.jsx-2579752266:nth-child(2) span.jsx-2579752266:first-child.jsx-2579752266:before{width:25px;height:2px;right:100%;bottom:5px;}#mainMenu.jsx-2579752266 .design.jsx-2579752266:nth-child(2) span.jsx-2579752266:first-child.jsx-2579752266:after{width:2px;height:25px;bottom:5px;}#mainMenu.jsx-2579752266 .design.jsx-2579752266:nth-child(2) span.jsx-2579752266:last-child.jsx-2579752266:before{width:25px;height:2px;right:calc(100% + 5px);}#mainMenu.jsx-2579752266 .design.jsx-2579752266:nth-child(2) span.jsx-2579752266:last-child.jsx-2579752266:after{width:2px;height:25px;right:5px;bottom:100%;}#mainMenu.jsx-2579752266 .design.jsx-2579752266:nth-child(3){bottom:5px;left:5px;}#mainMenu.jsx-2579752266 .design.jsx-2579752266:nth-child(3) span.jsx-2579752266:first-child.jsx-2579752266:before{width:25px;height:2px;left:100%;bottom:5px;}#mainMenu.jsx-2579752266 .design.jsx-2579752266:nth-child(3) span.jsx-2579752266:first-child.jsx-2579752266:after{width:2px;height:25px;bottom:5px;}#mainMenu.jsx-2579752266 .design.jsx-2579752266:nth-child(3) span.jsx-2579752266:last-child.jsx-2579752266:before{width:25px;height:2px;left:calc(100% + 5px);}#mainMenu.jsx-2579752266 .design.jsx-2579752266:nth-child(3) span.jsx-2579752266:last-child.jsx-2579752266:after{width:2px;height:25px;left:5px;bottom:100%;}#mainMenu.jsx-2579752266 .design.jsx-2579752266:nth-child(4){top:5px;right:5px;}#mainMenu.jsx-2579752266 .design.jsx-2579752266:nth-child(4) span.jsx-2579752266:first-child.jsx-2579752266:before{width:25px;height:2px;right:100%;top:5px;}#mainMenu.jsx-2579752266 .design.jsx-2579752266:nth-child(4) span.jsx-2579752266:first-child.jsx-2579752266:after{width:2px;height:25px;top:5px;}#mainMenu.jsx-2579752266 .design.jsx-2579752266:nth-child(4) span.jsx-2579752266:last-child.jsx-2579752266:before{width:25px;height:2px;right:calc(100% + 5px);top:0px;}#mainMenu.jsx-2579752266 .design.jsx-2579752266:nth-child(4) span.jsx-2579752266:last-child.jsx-2579752266:after{width:2px;height:25px;right:5px;top:100%;}#mainMenu.jsx-2579752266 h2.jsx-2579752266{text-align:center;margin-bottom:40px;}#mainMenu.jsx-2579752266 .menu.jsx-2579752266{display:block;}#mainMenu.jsx-2579752266{left:-100vw;position:fixed;width:100vw;padding:0;min-width:infinite;}#mainMenu.jsx-2579752266 ul.jsx-2579752266{padding:0;}#mainMenu.jsx-2579752266 li.jsx-2579752266 a.jsx-2579752266{width:150px;}#mainMenu.jsx-2579752266 li.jsx-2579752266 a.jsx-2579752266 canvas.jsx-2579752266{margin:auto;}#mainMenu.jsx-2579752266 li.jsx-2579752266 a.jsx-2579752266 span.jsx-2579752266{display:block;position:absolute;}#mainMenu.jsx-2579752266 li.jsx-2579752266 a.jsx-2579752266 span.jsx-2579752266:nth-child(3){top:0;right:0;}#mainMenu.jsx-2579752266 li.jsx-2579752266 a.jsx-2579752266 span.jsx-2579752266:nth-child(3):before{content:\"\";width:15px;height:2px;position:absolute;right:100%;}#mainMenu.jsx-2579752266 li.jsx-2579752266 a.jsx-2579752266 span.jsx-2579752266:nth-child(3):after{content:\"\";width:2px;height:15px;position:absolute;}#mainMenu.jsx-2579752266 li.jsx-2579752266 a.jsx-2579752266 span.jsx-2579752266:nth-child(4){bottom:0;left:0;}#mainMenu.jsx-2579752266 li.jsx-2579752266 a.jsx-2579752266 span.jsx-2579752266:nth-child(4):before{content:\"\";width:15px;height:2px;position:absolute;}#mainMenu.jsx-2579752266 li.jsx-2579752266 a.jsx-2579752266 span.jsx-2579752266:nth-child(4):after{content:\"\";width:2px;height:15px;position:absolute;bottom:100%;}#mainMenu.jsx-2579752266 .is-active.jsx-2579752266 .arrow.jsx-2579752266{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcMDEwXFxOZXh0UHJvamVjdHNcXEVkZWxcXGNvbXBvbmVudHNcXE1haW5NZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdHb0IsQUFHeUIsQUFLVSxBQWFGLEFBSUgsQUFVRixBQVNILEFBSUMsQUFJQSxBQUlELEFBSUcsQUFVVyxBQUlHLEFBS0MsQUFJbEIsQUFJRSxBQVNHLEFBSUosQUFPaUIsQUFNWixBQVNPLEFBTUUsQUFNRixBQU1ELEFBS1MsQUFHQSxBQUdBLEFBR0EsQUFHRixBQUliLEFBT0UsQUFLSCxBQUlDLEFBSUksQUFTSixBQUtVLEFBS0osQUFHVixBQUlHLEFBT0QsQUFNQyxBQU1ELEFBTUMsQUFLQSxBQU9ELEFBTUMsQUFNRCxBQU9DLEFBS0EsQUFPRCxBQU1DLEFBTUQsQUFPRixBQUtHLEFBT0QsQUFNQyxBQU9ELEFBTVEsQUFJRixBQUdKLEFBT0YsQUFHRSxBQUdBLEFBR0UsQUFJUixBQUlLLEFBT0EsQUFNRixBQUlFLEFBT0EsQUFPRSxNQWxDTCxDQTVQVSxDQXhEdEIsQUFZQSxBQTJCQSxBQXdIYSxBQTJGQyxDQXRQZCxBQUlBLEFBNlRXLENBOVdLLEFBb0ZMLEFBK0hLLEFBWUEsQUFrQkEsQUFZQSxBQW1CQSxBQVlBLEFBbUJBLEFBYUEsQUFvQmQsQ0FoVFcsQUF5QkEsQUFtSkUsQUFhQSxBQVlELEFBS0MsQUFhQSxBQWFGLEFBS0UsQUFhQSxBQWtCQSxBQWFBLEFBNENBLEFBT0QsQUFVQyxBQU9ELENBaERLLEFBVWpCLEFBR0EsQ0FoVVcsQUF1RWIsQUE2RUEsQUFzTkUsQ0FsUmdCLEFBZ0RRLEFBZ0IxQixBQWFxQixBQTJJbkIsQUFtQm9CLEFBS3BCLEVBNVVGLEFBbUprQyxBQTBNaEMsQ0F0S0EsQ0FwTWMsQUFvSWtCLEFBeUNyQixBQW1CWCxBQStGQSxBQThCcUIsQ0E3T1IsQUE4Q1MsQ0FrSXRCLENBOUlzQixBQU1FLEFBeUd4QixBQW1JYyxBQWlCQSxDQXpWUSxBQXlCWCxBQVNiLEFBNkhzQixBQWFSLEFBT0YsQUFNYyxBQU1iLEFBV0UsQUFPQSxBQU1ZLEFBTWIsQUFZQSxBQU9DLEFBTVcsQUFNYixBQVlFLEFBT0gsQUFNZSxBQU9iLEFBcUNDLEFBaUJBLEVBNVZELENBMkVNLENBakdMLEFBdUdpQixDQWtPaEIsRUF2Sm9CLENBcEVuQixBQXNHZixBQTRGQSxDQWhGQSxBQTZEYyxDQXhSRixBQXdNRixBQWlESSxBQVlELEFBbURGLEFBNEJYLENBL1JzQixBQWlJeEIsQUFnRGUsQUFPYixBQStCQSxBQXdCVSxBQXlEVSxBQU9BLEFBVUEsQUFPQSxHQW5XTCxDQTJTZixDQXBLb0IsQ0EzQnBCLEFBdU1ZLENBMUlDLEFBY2IsQ0E3TUosQUFpR0ksQUF3TUEsQUFvQkEsRUF2TWtCLEFBTWxCLEFBOElBLEFBbUJBLENBeFJZLEFBMkJNLEFBeUxsQixBQWtCQSxBQW1CQSxBQXdCQSxDQXhLaUIsQUF5SWpCLEFBOERVLEdBakpaLENBc0t1QixFQW5UWixBQXlLVCxBQWtLYSxBQU9iLEFBV0EsQUFNYyxFQXBFZCxFQTVQa0IsQ0FwRFQsQUFpR08sSUEvRUwsQ0ErRmIsQ0F0RjBCLEFBOEVMLEFBb1BuQixDQWpMcUMsQUF5TXJDLEVBcFh5QixDQXFJM0IsQUFHQSxBQUdBLEFBR0EsRUFzTEUsR0FsVGUsQ0ErRWpCLENBN0NXLFNBQ21CLElBbEM5QixDQTJDVyxHQTdESyxBQWtFaEIsQUE4RUEsR0FwRXlCLEdBZHpCLElBNkdzQyxJQTFLUCxhQStIN0IsbUJBNEMrQixJQXRCYixNQTVITyxBQTJCM0IsU0FtRGMsR0ErQ2QsU0E5Q0EsQUFvRUEsR0EzS1MsT0FDZSxlQTBFSixPQXpFcEIsS0F1QkEsTUFtRGEsV0FDSixPQUNUIiwiZmlsZSI6IkM6XFxVc2Vyc1xcMDEwXFxOZXh0UHJvamVjdHNcXEVkZWxcXGNvbXBvbmVudHNcXE1haW5NZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRleHQgZnJvbSAnLi4vY2xhc3Nlcy9UZXh0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnLi9MaW5rJ1xyXG5cclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQgeyBmYVR3aXR0ZXIsIGZhR2l0aHViLCBmYVN0YWNrT3ZlcmZsb3cgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJ1xyXG5cclxuXHJcbmNsYXNzIE1haW5NZW51IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBtZW51Q2xhc3M6ICdtZW51J1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmNsYXNzVG9nZ2xlID0gdGhpcy5jbGFzc1RvZ2dsZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5jYW52YXMgPSB7XHJcbiAgICAgIGhvbWU6IFJlYWN0LmNyZWF0ZVJlZigpLFxyXG4gICAgICBhYm91dDogUmVhY3QuY3JlYXRlUmVmKCksXHJcbiAgICAgIGNvbnRhY3Q6IFJlYWN0LmNyZWF0ZVJlZigpLFxyXG4gICAgICB0dXRvOiBSZWFjdC5jcmVhdGVSZWYoKVxyXG4gICAgfTtcclxuICB9XHJcblxyXG5cclxuICBjbGFzc1RvZ2dsZSh0YXJnZXQpe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSgoc3RhdGUpPT57XHJcbiAgICAgIGlmKHRhcmdldCA9PT0gXCJtZW51XCIpe1xyXG4gICAgICBcdGlmKHN0YXRlLm1lbnVDbGFzcyA9PT0gJ21lbnUgY2xvc2UnKXtcclxuICAgICAgXHRcdHNldFRpbWVvdXQodGhpcy5wcm9wcy50cmFuc2Zvcm1hdGlvbiwgNTAwKTtcclxuICAgICAgXHR9ZWxzZXtcclxuICAgICAgXHRcdHRoaXMucHJvcHMudHJhbnNmb3JtYXRpb24oKTtcclxuICAgICAgXHR9XHJcbiAgICAgICAgcmV0dXJuIHttZW51Q2xhc3M6IHN0YXRlLm1lbnVDbGFzcyA9PT0gJ21lbnUnID8gJ21lbnUgY2xvc2UnIDogJ21lbnUnLCBsaUNsYXNzOiBzdGF0ZS5tZW51Q2xhc3MgPT09ICdtZW51JyA/IFwibGlUcmFuc2l0aW9uXCIgOiBcIlwifVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdmFyIG9iaiA9IFtdO1xyXG4gICAgZm9yKGxldCByZWYgaW4gdGhpcy5jYW52YXMpe1xyXG4gICAgICB2YXIgY2FudmFzID0gdGhpcy5jYW52YXNbcmVmXS5jdXJyZW50O1xyXG4gICAgICBvYmoucHVzaChuZXcgVGV4dChjYW52YXMsIGNhbnZhcy5nZXRBdHRyaWJ1dGUoJ25hbWUnKSwgMTgsIFwiR2VvcmdpYVwiLCBcIiNmZmZmZmZcIiwgXCIjYWFhYWFhXCIsIDQpKS8qXCIjM2UzZTNlXCIsIFwiIzdlN2U3ZVwiKi9cclxuICAgIH1cclxuICAgIG9iai5mb3JFYWNoKChvYmplY3QpPT57XHJcbiAgICAgIG9iamVjdC5jYW52YXMucGFyZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIG9iai5mb3JFYWNoKChvKT0+e1xyXG4gICAgICAgICAgaWYoby50ZXh0ICE9PSBvYmplY3QudGV4dCl7XHJcbiAgICAgICAgICAgIG8uZmlsbFN0eWxlID0gXCIjZmZmZmZmXCIgLy9cIiM3ZTdlN2VcIlxyXG4gICAgICAgICAgICBvLndyaXRlKClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIG9iamVjdC5maWxsU3R5bGUgPSBcIiNhYWFhYWFcIiAvL1wiIzNlM2UzZVwiXHJcbiAgICAgICAgb2JqZWN0LndyaXRlKClcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bWVudSBpZD1cIm1haW5NZW51XCIgc3R5bGU9e3RoaXMuc3RhdGUubWVudUNsYXNzID09PSAnbWVudSBjbG9zZScgPyB7bGVmdDogMH0gOiBudWxsfT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlc2lnblwiPjxzcGFuPjwvc3Bhbj48c3Bhbj48L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVzaWduXCI+PHNwYW4+PC9zcGFuPjxzcGFuPjwvc3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZXNpZ25cIj48c3Bhbj48L3NwYW4+PHNwYW4+PC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlc2lnblwiPjxzcGFuPjwvc3Bhbj48c3Bhbj48L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgPGRpdiBuYW1lPVwibWVudVwiIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5tZW51Q2xhc3N9IG9uQ2xpY2s9eyhlKT0+e3RoaXMuY2xhc3NUb2dnbGUoXCJtZW51XCIpfX0+XHJcbiAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aDI+PExpbmsgaHJlZj0nLyc+PGltZyBjbGFzc05hbWU9XCJsb2dvXCIgc3JjPVwiL3N0YXRpYy9sb2dvLnN2Z1wiIGFsdD1cIlwiIC8+PC9MaW5rPjwvaDI+XHJcbiAgICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5saUNsYXNzfT48TGluayBhY3RpdmVDbGFzc05hbWU9J2lzLWFjdGl2ZScgaHJlZj0nLyc+XHJcbiAgICAgICAgICAgICAgICAgIDxhPjxkaXYgY2xhc3NOYW1lPVwiYXJyb3dcIj48L2Rpdj48Y2FudmFzIG5hbWU9XCJIT01FXCIgcmVmPXt0aGlzLmNhbnZhcy5ob21lfT5IT01FPC9jYW52YXM+PHNwYW4+PC9zcGFuPjxzcGFuPjwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5saUNsYXNzfT48TGluayBhY3RpdmVDbGFzc05hbWU9J2lzLWFjdGl2ZScgaHJlZj0nL2Fib3V0Jz5cclxuICAgICAgICAgICAgICAgICAgPGE+PGRpdiBjbGFzc05hbWU9XCJhcnJvd1wiPjwvZGl2PjxjYW52YXMgbmFtZT1cIkFCT1VUXCIgcmVmPXt0aGlzLmNhbnZhcy5hYm91dH0+QUJPVVQ8L2NhbnZhcz48c3Bhbj48L3NwYW4+PHNwYW4+PC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmxpQ2xhc3N9PjxMaW5rIGFjdGl2ZUNsYXNzTmFtZT0naXMtYWN0aXZlJyBocmVmPScvY29udGFjdCc+XHJcbiAgICAgICAgICAgICAgICAgIDxhPjxkaXYgY2xhc3NOYW1lPVwiYXJyb3dcIj48L2Rpdj48Y2FudmFzIG5hbWU9XCJDT05UQUNUXCIgcmVmPXt0aGlzLmNhbnZhcy5jb250YWN0fT5DT05UQUNUPC9jYW52YXM+PHNwYW4+PC9zcGFuPjxzcGFuPjwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5saUNsYXNzfT48TGluayBhY3RpdmVDbGFzc05hbWU9J2lzLWFjdGl2ZScgaHJlZj0nL3R1dG9yaWFscyc+XHJcbiAgICAgICAgICAgICAgICAgIDxhPjxkaXYgY2xhc3NOYW1lPVwiYXJyb3dcIj48L2Rpdj48Y2FudmFzIG5hbWU9XCJUVVRPUklBTFNcIiByZWY9e3RoaXMuY2FudmFzLnR1dG99PlRVVE9SSUFMUzwvY2FudmFzPjxzcGFuPjwvc3Bhbj48c3Bhbj48L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbE1lZGlhXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbWFyY2h3b3Jrc1wiIHJlbD1cIm5vcmVmZXJyZXJcIiB0aXRsZT1cIkdpdGh1YlwiIHRhcmdldD1cIl9ibGFua1wiPjxGb250QXdlc29tZUljb24gaWNvbj17ZmFHaXRodWJ9IHNpemU9XCJsZ1wiIGNvbG9yPVwiI2ZmZlwiIC8+PC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9tYXJjaHdvcmtzXCIgcmVsPVwibm9yZWZlcnJlclwiIHRpdGxlPVwiVHdpdHRlclwiIHRhcmdldD1cIl9ibGFua1wiPjxGb250QXdlc29tZUljb24gaWNvbj17ZmFUd2l0dGVyfSBzaXplPVwibGdcIiBjb2xvcj1cIiNmZmZcIiAvPjwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vdXNlcnMvc3RvcnkvODYxOTk1OVwiIHJlbD1cIm5vcmVmZXJyZXJcIiB0aXRsZT1cIlN0YWNrIE92ZXJmbG93XCIgdGFyZ2V0PVwiX2JsYW5rXCI+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVN0YWNrT3ZlcmZsb3d9IHNpemU9XCJsZ1wiIGNvbG9yPVwiI2ZmZlwiIC8+PC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAubG9nb3tcclxuICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNtYWluTWVudSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDAwMDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7LypmZmZmZmYqL1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmMGYwZjA7LyozZTNlM2UqL1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC40cyBlYXNlLWluIDAuM3M7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICNtYWluTWVudSBoMiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgI21haW5NZW51IC5tZW51IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjhweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgIHRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgI21haW5NZW51IC5tZW51IHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjZzIGVhc2Utb3V0O1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgI21haW5NZW51IC5tZW51IHNwYW46Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgdG9wOiA4cHg7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAjbWFpbk1lbnUgLm1lbnUgc3BhbjpmaXJzdC1jaGlsZDpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtOHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgI21haW5NZW51IC5tZW51IHNwYW46bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDE2cHg7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAjbWFpbk1lbnUgLm1lbnUgc3BhbjpsYXN0LWNoaWxkOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDhweDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICNtYWluTWVudSAubWVudSBzcGFuOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIDAuM3MgbGluZWFyO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgI21haW5NZW51IC5jbG9zZSBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAjbWFpbk1lbnUgLmNsb3NlIHNwYW46Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDQ1ZGVnKTtcclxuICAgICAgICAgICAgICAgIHRvcDogMTZweDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICNtYWluTWVudSAuY2xvc2Ugc3BhbjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigtNDVkZWcpO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgI21haW5NZW51IC5jbG9zZSBzcGFuOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICNtYWluTWVudSAuc29jaWFsTWVkaWF7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjbWFpbk1lbnUgLnNvY2lhbE1lZGlhIGF7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTAlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KSB7XHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUge1xyXG4gICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAjbWFpbk1lbnUgbmF2IHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMjAwcHgpO1xyXG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMjAwcHgpO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICNtYWluTWVudSB1bCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2EyYTJhMjtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAjbWFpbk1lbnUgbGkge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDAgMjBweCAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAwIDIwcHggMDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNTQwcHgpIHtcclxuICAgICAgICAgICAgICAgICNtYWluTWVudSBsaSB7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwIDEwcHggMDtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwIDEwcHggMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDM1cHgpIHtcclxuICAgICAgICAgICAgICAgICNtYWluTWVudSBsaSB7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDAgNXB4IDA7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwIDVweCAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgbGkge1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI21haW5NZW51IGxpOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2UtaW4gMC4ycztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI21haW5NZW51IGxpOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2UtaW4gMC4zcztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI21haW5NZW51IGxpOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2UtaW4gMC40cztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI21haW5NZW51IGxpOm50aC1jaGlsZCg0KSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2UtaW4gMC41cztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI21haW5NZW51IC5saVRyYW5zaXRpb24ge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDApO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgI21haW5NZW51IGxpIGEge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNhMmEyYTI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMHB4IDVweCAwcHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICNtYWluTWVudSBsaSBhOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZWZlZmVmZWY7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggI2FhYWFhYSBzb2xpZDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICNtYWluTWVudSBsaSBhIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICNtYWluTWVudSAuaXMtYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZGNkY2RjO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgI21haW5NZW51IC5pcy1hY3RpdmUgLmFycm93IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMTBweCB0cmFuc3BhcmVudCBzb2xpZDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDEwcHggdHJhbnNwYXJlbnQgc29saWQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDEwcHggdHJhbnNwYXJlbnQgc29saWQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMTVweCAjMmQyMjIyIHNvbGlkO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgI21haW5NZW51IC5pcy1hY3RpdmU6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNkY2RjZGM7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgLmRlc2lnbiBzcGFuOmJlZm9yZSwgI21haW5NZW51IC5kZXNpZ24gc3BhbjphZnRlciwgI21haW5NZW51IGxpIGEgc3BhbjpiZWZvcmUsICNtYWluTWVudSBsaSBhIHNwYW46YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgLmRlc2lnbiB7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICNtYWluTWVudSAuZGVzaWduOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICBsZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgLmRlc2lnbjpudGgtY2hpbGQoMSkgc3BhbjpmaXJzdC1jaGlsZDpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIHRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICNtYWluTWVudSAuZGVzaWduOm50aC1jaGlsZCgxKSBzcGFuOmZpcnN0LWNoaWxkOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICB0b3A6IDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgLmRlc2lnbjpudGgtY2hpbGQoMSkgc3BhbjpsYXN0LWNoaWxkOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgICAgbGVmdDogY2FsYygxMDAlICsgNXB4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgLmRlc2lnbjpudGgtY2hpbGQoMSkgc3BhbjpsYXN0LWNoaWxkOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICBsZWZ0OiA1cHg7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IC5kZXNpZ246bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgICAgICAgYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IC5kZXNpZ246bnRoLWNoaWxkKDIpIHNwYW46Zmlyc3QtY2hpbGQ6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICByaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgYm90dG9tOiA1cHg7ICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IC5kZXNpZ246bnRoLWNoaWxkKDIpIHNwYW46Zmlyc3QtY2hpbGQ6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgIGJvdHRvbTogNXB4OyAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgLmRlc2lnbjpudGgtY2hpbGQoMikgc3BhbjpsYXN0LWNoaWxkOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgICAgcmlnaHQ6IGNhbGMoMTAwJSArIDVweCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IC5kZXNpZ246bnRoLWNoaWxkKDIpIHNwYW46bGFzdC1jaGlsZDphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgYm90dG9tOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICNtYWluTWVudSAuZGVzaWduOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgICAgICAgICAgICAgIGJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICAgICAgICBsZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IC5kZXNpZ246bnRoLWNoaWxkKDMpIHNwYW46Zmlyc3QtY2hpbGQ6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICBsZWZ0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICBib3R0b206IDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgLmRlc2lnbjpudGgtY2hpbGQoMykgc3BhbjpmaXJzdC1jaGlsZDphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IC5kZXNpZ246bnRoLWNoaWxkKDMpIHNwYW46bGFzdC1jaGlsZDpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IGNhbGMoMTAwJSArIDVweCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IC5kZXNpZ246bnRoLWNoaWxkKDMpIHNwYW46bGFzdC1jaGlsZDphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICBib3R0b206IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IC5kZXNpZ246bnRoLWNoaWxkKDQpIHtcclxuICAgICAgICAgICAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IC5kZXNpZ246bnRoLWNoaWxkKDQpIHNwYW46Zmlyc3QtY2hpbGQ6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICByaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IC5kZXNpZ246bnRoLWNoaWxkKDQpIHNwYW46Zmlyc3QtY2hpbGQ6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgIHRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICNtYWluTWVudSAuZGVzaWduOm50aC1jaGlsZCg0KSBzcGFuOmxhc3QtY2hpbGQ6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICByaWdodDogY2FsYygxMDAlICsgNXB4KTtcclxuICAgICAgICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IC5kZXNpZ246bnRoLWNoaWxkKDQpIHNwYW46bGFzdC1jaGlsZDphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IGgyIHtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IC5tZW51IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICNtYWluTWVudSB7XHJcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IC0xMDB2dztcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogaW5maW5pdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgdWwge1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IGxpIGEge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgbGkgYSBjYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgbGkgYSBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICNtYWluTWVudSBsaSBhIHNwYW46bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICNtYWluTWVudSBsaSBhIHNwYW46bnRoLWNoaWxkKDMpOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICByaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICNtYWluTWVudSBsaSBhIHNwYW46bnRoLWNoaWxkKDMpOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgbGkgYSBzcGFuOm50aC1jaGlsZCg0KSB7XHJcbiAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICNtYWluTWVudSBsaSBhIHNwYW46bnRoLWNoaWxkKDQpOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICNtYWluTWVudSBsaSBhIHNwYW46bnRoLWNoaWxkKDQpOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIGJvdHRvbTogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICNtYWluTWVudSAuaXMtYWN0aXZlIC5hcnJvdyB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L21lbnU+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbk1lbnU7Il19 */\n/*@ sourceURL=C:\\Users\\010\\NextProjects\\Edel\\components\\MainMenu.js */"));
    }
  }]);

  return MainMenu;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MainMenu);

/***/ })

})
//# sourceMappingURL=index.js.90440a52a307886d1088.hot-update.js.map