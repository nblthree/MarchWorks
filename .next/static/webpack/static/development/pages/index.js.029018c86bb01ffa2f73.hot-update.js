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
        className: "jsx-1421104395"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-1421104395" + " " + "design"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-1421104395"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-1421104395"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-1421104395" + " " + "design"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-1421104395"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-1421104395"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-1421104395" + " " + "design"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-1421104395"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-1421104395"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-1421104395" + " " + "design"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-1421104395"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-1421104395"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        name: "menu",
        onClick: function onClick(e) {
          _this3.classToggle("menu");
        },
        className: "jsx-1421104395" + " " + (this.state.menuClass || "")
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-1421104395"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-1421104395"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "jsx-1421104395"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "/static/logo.svg",
        className: "jsx-1421104395" + " " + "logo"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("nav", {
        className: "jsx-1421104395"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "jsx-1421104395"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-1421104395" + " " + (this.state.liClass || "")
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
        activeClassName: "is-active",
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "jsx-1421104395"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-1421104395" + " " + "arrow"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("canvas", {
        name: "HOME",
        ref: this.canvas.home,
        className: "jsx-1421104395"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-1421104395"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-1421104395"
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-1421104395" + " " + (this.state.liClass || "")
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
        activeClassName: "is-active",
        href: "/about"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "jsx-1421104395"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-1421104395" + " " + "arrow"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("canvas", {
        name: "ABOUT",
        ref: this.canvas.about,
        className: "jsx-1421104395"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-1421104395"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-1421104395"
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-1421104395" + " " + (this.state.liClass || "")
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
        activeClassName: "is-active",
        href: "/contact"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "jsx-1421104395"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-1421104395" + " " + "arrow"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("canvas", {
        name: "CONTACT",
        ref: this.canvas.contact,
        className: "jsx-1421104395"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-1421104395"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-1421104395"
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-1421104395" + " " + (this.state.liClass || "")
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
        activeClassName: "is-active",
        href: "/tutorials"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "jsx-1421104395"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-1421104395" + " " + "arrow"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("canvas", {
        name: "TUTORIALS",
        ref: this.canvas.tuto,
        className: "jsx-1421104395"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-1421104395"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-1421104395"
      })))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-1421104395" + " " + "socialMedia"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "https://github.com/marchworks",
        rel: "noreferrer",
        title: "Github",
        target: "_blank",
        className: "jsx-1421104395"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faGithub"],
        size: "lg",
        color: "#fff"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "https://twitter.com/marchworks",
        rel: "noreferrer",
        title: "Twitter",
        target: "_blank",
        className: "jsx-1421104395"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faTwitter"],
        size: "lg",
        color: "#fff"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "https://stackoverflow.com/users/story/8619959",
        rel: "noreferrer",
        title: "Stack Overflow",
        target: "_blank",
        className: "jsx-1421104395"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faStackOverflow"],
        size: "lg",
        color: "#fff"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1421104395"
      }, ".logo.jsx-1421104395{width:80%;max-width:250px;cursor:pointer;}#mainMenu.jsx-1421104395{position:relative;z-index:10000;height:100%;width:300px;margin:0;background-color:#000000;color:#f0f0f0;-webkit-transition:0.4s ease-in 0.3s;transition:0.4s ease-in 0.3s;left:0;box-sizing:border-box;}@media only screen and (max-width:600px){#mainMenu.jsx-1421104395 .design.jsx-1421104395 span.jsx-1421104395:before,#mainMenu.jsx-1421104395 .design.jsx-1421104395 span.jsx-1421104395:after,#mainMenu.jsx-1421104395 li.jsx-1421104395 a.jsx-1421104395 span.jsx-1421104395:before,#mainMenu.jsx-1421104395 li.jsx-1421104395 a.jsx-1421104395 span.jsx-1421104395:after{background-color:#fff;position:absolute;content:\"\";}#mainMenu.jsx-1421104395 .design.jsx-1421104395{position:absolute;}#mainMenu.jsx-1421104395 .design.jsx-1421104395:nth-child(1){top:5px;left:5px;}#mainMenu.jsx-1421104395 .design.jsx-1421104395:nth-child(1) span.jsx-1421104395:first-child.jsx-1421104395:before{width:25px;height:2px;left:100%;top:5px;}#mainMenu.jsx-1421104395 .design.jsx-1421104395:nth-child(1) span.jsx-1421104395:first-child.jsx-1421104395:after{width:2px;height:25px;top:5px;}#mainMenu.jsx-1421104395 .design.jsx-1421104395:nth-child(1) span.jsx-1421104395:last-child.jsx-1421104395:before{width:25px;height:2px;left:calc(100% + 5px);}#mainMenu.jsx-1421104395 .design.jsx-1421104395:nth-child(1) span.jsx-1421104395:last-child.jsx-1421104395:after{width:2px;height:25px;left:5px;}#mainMenu.jsx-1421104395 .design.jsx-1421104395:nth-child(2){bottom:5px;right:5px;}#mainMenu.jsx-1421104395 .design.jsx-1421104395:nth-child(2) span.jsx-1421104395:first-child.jsx-1421104395:before{width:25px;height:2px;right:100%;bottom:5px;}#mainMenu.jsx-1421104395 .design.jsx-1421104395:nth-child(2) span.jsx-1421104395:first-child.jsx-1421104395:after{width:2px;height:25px;bottom:5px;}#mainMenu.jsx-1421104395 .design.jsx-1421104395:nth-child(2) span.jsx-1421104395:last-child.jsx-1421104395:before{width:25px;height:2px;right:calc(100% + 5px);}#mainMenu.jsx-1421104395 .design.jsx-1421104395:nth-child(2) span.jsx-1421104395:last-child.jsx-1421104395:after{width:2px;height:25px;right:5px;bottom:100%;}#mainMenu.jsx-1421104395 .design.jsx-1421104395:nth-child(3){bottom:5px;left:5px;}#mainMenu.jsx-1421104395 .design.jsx-1421104395:nth-child(3) span.jsx-1421104395:first-child.jsx-1421104395:before{width:25px;height:2px;left:100%;bottom:5px;}#mainMenu.jsx-1421104395 .design.jsx-1421104395:nth-child(3) span.jsx-1421104395:first-child.jsx-1421104395:after{width:2px;height:25px;bottom:5px;}#mainMenu.jsx-1421104395 .design.jsx-1421104395:nth-child(3) span.jsx-1421104395:last-child.jsx-1421104395:before{width:25px;height:2px;left:calc(100% + 5px);}#mainMenu.jsx-1421104395 .design.jsx-1421104395:nth-child(3) span.jsx-1421104395:last-child.jsx-1421104395:after{width:2px;height:25px;left:5px;bottom:100%;}#mainMenu.jsx-1421104395 .design.jsx-1421104395:nth-child(4){top:5px;right:5px;}#mainMenu.jsx-1421104395 .design.jsx-1421104395:nth-child(4) span.jsx-1421104395:first-child.jsx-1421104395:before{width:25px;height:2px;right:100%;top:5px;}#mainMenu.jsx-1421104395 .design.jsx-1421104395:nth-child(4) span.jsx-1421104395:first-child.jsx-1421104395:after{width:2px;height:25px;top:5px;}#mainMenu.jsx-1421104395 .design.jsx-1421104395:nth-child(4) span.jsx-1421104395:last-child.jsx-1421104395:before{width:25px;height:2px;right:calc(100% + 5px);top:0px;}#mainMenu.jsx-1421104395 .design.jsx-1421104395:nth-child(4) span.jsx-1421104395:last-child.jsx-1421104395:after{width:2px;height:25px;right:5px;top:100%;}}#mainMenu.jsx-1421104395 h2.jsx-1421104395{margin-top:50px;}@media only screen and (max-width:600px){#mainMenu.jsx-1421104395 h2.jsx-1421104395{text-align:center;margin-bottom:40px;}}#mainMenu.jsx-1421104395 .menu.jsx-1421104395{display:none;width:40px;height:28px;position:fixed;top:20px;right:20px;cursor:pointer;}#mainMenu.jsx-1421104395 .menu.jsx-1421104395 span.jsx-1421104395{width:100%;height:2px;background-color:#ccc;position:absolute;-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-transition:0.6s ease-out;transition:0.6s ease-out;}#mainMenu.jsx-1421104395 .menu.jsx-1421104395 span.jsx-1421104395:first-child{top:8px;}#mainMenu.jsx-1421104395 .menu.jsx-1421104395 span.jsx-1421104395:first-child.jsx-1421104395:before{top:-8px;}#mainMenu.jsx-1421104395 .menu.jsx-1421104395 span.jsx-1421104395:last-child{top:16px;}#mainMenu.jsx-1421104395 .menu.jsx-1421104395 span.jsx-1421104395:last-child.jsx-1421104395:before{top:8px;}#mainMenu.jsx-1421104395 .menu.jsx-1421104395 span.jsx-1421104395:before{content:\"\";width:100%;height:2px;background-color:#ccc;position:absolute;top:10px;-webkit-transition:0.3s 0.3s linear;transition:0.3s 0.3s linear;}@media only screen and (max-width:600px){#mainMenu.jsx-1421104395 .menu.jsx-1421104395{display:block;}}#mainMenu.jsx-1421104395 .close.jsx-1421104395 span.jsx-1421104395{background-color:#fff;}#mainMenu.jsx-1421104395 .close.jsx-1421104395 span.jsx-1421104395:first-child{-webkit-transform:rotateZ(45deg);-ms-transform:rotateZ(45deg);transform:rotateZ(45deg);top:16px;}#mainMenu.jsx-1421104395 .close.jsx-1421104395 span.jsx-1421104395:last-child{-webkit-transform:rotateZ(-45deg);-ms-transform:rotateZ(-45deg);transform:rotateZ(-45deg);}#mainMenu.jsx-1421104395 .close.jsx-1421104395 span.jsx-1421104395:before{width:0;}@media only screen and (max-width:600px){#mainMenu.jsx-1421104395{left:-100vw;position:fixed;width:100vw;padding:0;min-width:infinite;}}#mainMenu.jsx-1421104395 .socialMedia.jsx-1421104395{padding:0;margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:absolute;width:100%;left:0;}#mainMenu.jsx-1421104395 .socialMedia.jsx-1421104395 a.jsx-1421104395{margin:0 10%;}@media only screen and (min-width:601px){#mainMenu.jsx-1421104395{left:0;position:relative;min-width:300px;}}#mainMenu.jsx-1421104395 nav.jsx-1421104395{height:calc(100% - 200px);max-height:calc(100% - 200px);overflow:hidden;}#mainMenu.jsx-1421104395 ul.jsx-1421104395{color:#a2a2a2;font-weight:700;font-size:18px;font-family:none;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;height:100%;}@media only screen and (max-width:600px){#mainMenu.jsx-1421104395 ul.jsx-1421104395{padding:0;}}#mainMenu.jsx-1421104395 li.jsx-1421104395{margin:20px 0 20px 0;padding:20px 0 20px 0;position:relative;}@media only screen and (max-height:540px){#mainMenu.jsx-1421104395 li.jsx-1421104395{margin:10px 0 10px 0;padding:10px 0 10px 0;}}@media only screen and (max-height:435px){#mainMenu.jsx-1421104395 li.jsx-1421104395{margin:5px 0 5px 0;padding:5px 0 5px 0;}}@media only screen and (max-width:600px){#mainMenu.jsx-1421104395 li.jsx-1421104395{text-align:center;-webkit-transform:translate(-100%,0);-ms-transform:translate(-100%,0);transform:translate(-100%,0);}}#mainMenu.jsx-1421104395 li.jsx-1421104395:nth-child(1){-webkit-transition:0.4s ease-in 0.2s;transition:0.4s ease-in 0.2s;}#mainMenu.jsx-1421104395 li.jsx-1421104395:nth-child(2){-webkit-transition:0.4s ease-in 0.3s;transition:0.4s ease-in 0.3s;}#mainMenu.jsx-1421104395 li.jsx-1421104395:nth-child(3){-webkit-transition:0.4s ease-in 0.4s;transition:0.4s ease-in 0.4s;}#mainMenu.jsx-1421104395 li.jsx-1421104395:nth-child(4){-webkit-transition:0.4s ease-in 0.5s;transition:0.4s ease-in 0.5s;}#mainMenu.jsx-1421104395 .liTransition.jsx-1421104395{-webkit-transform:translate(0%,0);-ms-transform:translate(0%,0);transform:translate(0%,0);}#mainMenu.jsx-1421104395 li.jsx-1421104395 a.jsx-1421104395{color:#a2a2a2;padding:5px 0px 5px 0px;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;position:relative;}#mainMenu.jsx-1421104395 li.jsx-1421104395 a.jsx-1421104395:hover{color:#efefefef;border-bottom:2px #aaaaaa solid;}#mainMenu.jsx-1421104395 li.jsx-1421104395 a.jsx-1421104395 span.jsx-1421104395{display:none;}@media only screen and (max-width:600px){#mainMenu.jsx-1421104395 li.jsx-1421104395 a.jsx-1421104395{width:150px;}#mainMenu.jsx-1421104395 li.jsx-1421104395 a.jsx-1421104395 canvas.jsx-1421104395{margin:auto;}#mainMenu.jsx-1421104395 li.jsx-1421104395 a.jsx-1421104395 span.jsx-1421104395{display:block;position:absolute;}#mainMenu.jsx-1421104395 li.jsx-1421104395 a.jsx-1421104395 span.jsx-1421104395:nth-child(3){top:0;right:0;}#mainMenu.jsx-1421104395 li.jsx-1421104395 a.jsx-1421104395 span.jsx-1421104395:nth-child(3):before{content:\"\";width:15px;height:2px;position:absolute;right:100%;}#mainMenu.jsx-1421104395 li.jsx-1421104395 a.jsx-1421104395 span.jsx-1421104395:nth-child(3):after{content:\"\";width:2px;height:15px;position:absolute;}#mainMenu.jsx-1421104395 li.jsx-1421104395 a.jsx-1421104395 span.jsx-1421104395:nth-child(4){bottom:0;left:0;}#mainMenu.jsx-1421104395 li.jsx-1421104395 a.jsx-1421104395 span.jsx-1421104395:nth-child(4):before{content:\"\";width:15px;height:2px;position:absolute;}#mainMenu.jsx-1421104395 li.jsx-1421104395 a.jsx-1421104395 span.jsx-1421104395:nth-child(4):after{content:\"\";width:2px;height:15px;position:absolute;bottom:100%;}}#mainMenu.jsx-1421104395 .is-active.jsx-1421104395{color:#dcdcdc;}#mainMenu.jsx-1421104395 .is-active.jsx-1421104395 .arrow.jsx-1421104395{position:absolute;right:100%;border-top:10px transparent solid;border-bottom:10px transparent solid;border-right:10px transparent solid;border-left:15px #2d2222 solid;}@media only screen and (max-width:600px){#mainMenu.jsx-1421104395 .is-active.jsx-1421104395 .arrow.jsx-1421104395{display:none;}}#mainMenu.jsx-1421104395 .is-active.jsx-1421104395:hover{color:#dcdcdc;border-bottom:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcMDEwXFxOZXh0UHJvamVjdHNcXEVkZWxcXGNvbXBvbmVudHNcXE1haW5NZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdHb0IsQUFHeUIsQUFLVSxBQWNNLEFBS0osQUFHVixBQUlHLEFBT0QsQUFNQyxBQU1ELEFBTUMsQUFLQSxBQU9ELEFBTUMsQUFNRCxBQU9DLEFBS0EsQUFPRCxBQU1DLEFBTUQsQUFPRixBQUtHLEFBT0QsQUFNQyxBQU9ELEFBUUksQUFLSSxBQU1QLEFBVUYsQUFTSCxBQUlDLEFBSUEsQUFJRCxBQUlHLEFBV00sQUFLSyxBQUlHLEFBS0MsQUFJbEIsQUFLTSxBQVNKLEFBU0csQUFJSixBQU9pQixBQU1aLEFBVUYsQUFLUyxBQU1FLEFBTUYsQUFPRCxBQUtTLEFBR0EsQUFHQSxBQUdBLEFBR0YsQUFJYixBQU9FLEFBS0gsQUFLQyxBQUlBLEFBSUUsQUFLUixBQUtLLEFBUUEsQUFPRixBQUtFLEFBUUEsQUFVQyxBQUlJLEFBVUgsQUFLRCxNQTdESixDQWxHVSxDQWxPVCxBQTJGQyxBQStEZCxBQVlBLEFBaUNBLENBekNBLEFBSUEsQUFzTFcsQ0FuWEssQUFzQ0EsQUFZQSxBQWtCQSxBQVlBLEFBbUJBLEFBWUEsQUFtQkEsQUFhQSxBQWlHTCxBQW9DVCxDQXJQYSxBQWFBLEFBWUQsQUFLQyxBQWFBLEFBYUYsQUFLRSxBQWFBLEFBa0JBLEFBYUEsQUFvQ0YsQUF5QkEsQUErSkUsQUFRRCxBQVlDLEFBUUQsQ0F6SkssQUEyR2pCLEFBSUEsQ0FwTFcsQUF1RmIsQUFvRkEsQUEyRUUsQ0F4TUEsQUEwRGdCLEFBdURRLEFBeUJKLEFBTXBCLEFBMENGLEFBbUJxQixFQXRRckIsQUFpTGtDLEFBNENoQyxDQXhWQSxDQXZCYyxBQW1CZCxBQStGQSxBQXFDcUIsQUFnSlcsQUFrR3JCLENBN0pFLEFBb0RTLENBN010QixDQS9CQSxBQWdPc0IsQUFNRSxBQThFVixBQW9CQSxDQTlXTSxBQWFSLEFBT0YsQUFNYyxBQU1iLEFBV0UsQUFPQSxBQU1ZLEFBTWIsQUFZQSxBQU9DLEFBTVcsQUFNYixBQVlFLEFBT0gsQUFNZSxBQU9iLEFBNkJVLEFBeUJYLEFBZWIsQUFnSmUsQUFvQkEsRUF0TkQsQ0EyRk0sQ0E3UEwsQUFtUWlCLENBNUJoQixFQXVLb0IsQ0F2V2xDLEFBNEZBLEFBdUllLENBdk5mLEFBNkRjLENBM0dGLEFBMkJGLEFBaURJLEFBWUQsQUFtREYsQUEwTVgsQ0E1UmEsQUFPYixBQStCQSxBQXdCVSxBQTBFWSxBQStKRixBQVFBLEFBWUEsQUFRQSxBQTRCdEIsR0ExUGlCLENBUGYsQ0FxS29CLENBekZSLEFBNkRaLENBbFJhLEFBY2IsQ0FoQ0osQUE0SEksQUFvQkEsQUE2R0EsRUFoS0EsQUFtQkEsQUF3S2tCLEFBTWxCLENBelJZLEFBdUNaLEFBa0JBLEFBbUJBLEFBd0JBLEFBbUVrQixDQWxHbEIsQUE4RFUsQUFrSU8sR0E2RG5CLENBL0Z1QixFQXJOckIsQUFnSlMsQUFrTUksQUFRYixBQWFBLEFBT2MsRUF4UGQsRUE2RGtCLENBaE1ULEFBNlBPLElBL0ZMLENBcUhiLENBNUcwQixBQThGTCxBQTJGbkIsQ0E2QkEsQUFXcUMsRUF2WVosQ0F3UzNCLEFBR0EsQUFHQSxBQUdBLEVBL0VFLEdBcEVlLENBK0ZqQixDQTdEVyxTQUNtQixJQWxDOUIsQ0FpRFcsR0EvTUssQUFvTmhCLEFBK0ZBLEdBM0V5QixHQXhCekIsSUF1THNDLElBdFlQLGFBa1M3QixtQkFxRytCLElBL0ViLE1BbkpPLEFBMkIzQixTQW1FYyxHQXNEZCxTQXJEQSxBQW9JQSxHQXZZUyxPQUNlLGVBc09KLE9Bck9wQixLQW1LQSxNQW1FYSxXQUNKLE9BQ1QiLCJmaWxlIjoiQzpcXFVzZXJzXFwwMTBcXE5leHRQcm9qZWN0c1xcRWRlbFxcY29tcG9uZW50c1xcTWFpbk1lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVGV4dCBmcm9tICcuLi9jbGFzc2VzL1RleHQnO1xyXG5pbXBvcnQgTGluayBmcm9tICcuL0xpbmsnXHJcblxyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7IGZhVHdpdHRlciwgZmFHaXRodWIsIGZhU3RhY2tPdmVyZmxvdyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnXHJcblxyXG5cclxuY2xhc3MgTWFpbk1lbnUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIG1lbnVDbGFzczogJ21lbnUnXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuY2xhc3NUb2dnbGUgPSB0aGlzLmNsYXNzVG9nZ2xlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmNhbnZhcyA9IHtcclxuICAgICAgaG9tZTogUmVhY3QuY3JlYXRlUmVmKCksXHJcbiAgICAgIGFib3V0OiBSZWFjdC5jcmVhdGVSZWYoKSxcclxuICAgICAgY29udGFjdDogUmVhY3QuY3JlYXRlUmVmKCksXHJcbiAgICAgIHR1dG86IFJlYWN0LmNyZWF0ZVJlZigpXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcblxyXG4gIGNsYXNzVG9nZ2xlKHRhcmdldCl7XHJcbiAgICB0aGlzLnNldFN0YXRlKChzdGF0ZSk9PntcclxuICAgICAgaWYodGFyZ2V0ID09PSBcIm1lbnVcIil7XHJcbiAgICAgIFx0aWYoc3RhdGUubWVudUNsYXNzID09PSAnbWVudSBjbG9zZScpe1xyXG4gICAgICBcdFx0c2V0VGltZW91dCh0aGlzLnByb3BzLnRyYW5zZm9ybWF0aW9uLCA1MDApO1xyXG4gICAgICBcdH1lbHNle1xyXG4gICAgICBcdFx0dGhpcy5wcm9wcy50cmFuc2Zvcm1hdGlvbigpO1xyXG4gICAgICBcdH1cclxuICAgICAgICByZXR1cm4ge21lbnVDbGFzczogc3RhdGUubWVudUNsYXNzID09PSAnbWVudScgPyAnbWVudSBjbG9zZScgOiAnbWVudScsIGxpQ2xhc3M6IHN0YXRlLm1lbnVDbGFzcyA9PT0gJ21lbnUnID8gXCJsaVRyYW5zaXRpb25cIiA6IFwiXCJ9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB2YXIgb2JqID0gW107XHJcbiAgICBmb3IobGV0IHJlZiBpbiB0aGlzLmNhbnZhcyl7XHJcbiAgICAgIHZhciBjYW52YXMgPSB0aGlzLmNhbnZhc1tyZWZdLmN1cnJlbnQ7XHJcbiAgICAgIG9iai5wdXNoKG5ldyBUZXh0KGNhbnZhcywgY2FudmFzLmdldEF0dHJpYnV0ZSgnbmFtZScpLCAxOCwgXCJHZW9yZ2lhXCIsIFwiI2ZmZmZmZlwiLCBcIiNhYWFhYWFcIiwgNCkpLypcIiMzZTNlM2VcIiwgXCIjN2U3ZTdlXCIqL1xyXG4gICAgfVxyXG4gICAgb2JqLmZvckVhY2goKG9iamVjdCk9PntcclxuICAgICAgb2JqZWN0LmNhbnZhcy5wYXJlbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgb2JqLmZvckVhY2goKG8pPT57XHJcbiAgICAgICAgICBpZihvLnRleHQgIT09IG9iamVjdC50ZXh0KXtcclxuICAgICAgICAgICAgby5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIiAvL1wiIzdlN2U3ZVwiXHJcbiAgICAgICAgICAgIG8ud3JpdGUoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgb2JqZWN0LmZpbGxTdHlsZSA9IFwiI2FhYWFhYVwiIC8vXCIjM2UzZTNlXCJcclxuICAgICAgICBvYmplY3Qud3JpdGUoKVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxtZW51IGlkPVwibWFpbk1lbnVcIiBzdHlsZT17dGhpcy5zdGF0ZS5tZW51Q2xhc3MgPT09ICdtZW51IGNsb3NlJyA/IHtsZWZ0OiAwfSA6IG51bGx9PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVzaWduXCI+PHNwYW4+PC9zcGFuPjxzcGFuPjwvc3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZXNpZ25cIj48c3Bhbj48L3NwYW4+PHNwYW4+PC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlc2lnblwiPjxzcGFuPjwvc3Bhbj48c3Bhbj48L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVzaWduXCI+PHNwYW4+PC9zcGFuPjxzcGFuPjwvc3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICA8ZGl2IG5hbWU9XCJtZW51XCIgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLm1lbnVDbGFzc30gb25DbGljaz17KGUpPT57dGhpcy5jbGFzc1RvZ2dsZShcIm1lbnVcIil9fT5cclxuICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxoMj48TGluayBocmVmPScvJz48aW1nIGNsYXNzTmFtZT1cImxvZ29cIiBzcmM9XCIvc3RhdGljL2xvZ28uc3ZnXCIgLz48L0xpbms+PC9oMj5cclxuICAgICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmxpQ2xhc3N9PjxMaW5rIGFjdGl2ZUNsYXNzTmFtZT0naXMtYWN0aXZlJyBocmVmPScvJz5cclxuICAgICAgICAgICAgICAgICAgPGE+PGRpdiBjbGFzc05hbWU9XCJhcnJvd1wiPjwvZGl2PjxjYW52YXMgbmFtZT1cIkhPTUVcIiByZWY9e3RoaXMuY2FudmFzLmhvbWV9PjwvY2FudmFzPjxzcGFuPjwvc3Bhbj48c3Bhbj48L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3RoaXMuc3RhdGUubGlDbGFzc30+PExpbmsgYWN0aXZlQ2xhc3NOYW1lPSdpcy1hY3RpdmUnIGhyZWY9Jy9hYm91dCc+XHJcbiAgICAgICAgICAgICAgICAgIDxhPjxkaXYgY2xhc3NOYW1lPVwiYXJyb3dcIj48L2Rpdj48Y2FudmFzIG5hbWU9XCJBQk9VVFwiIHJlZj17dGhpcy5jYW52YXMuYWJvdXR9PjwvY2FudmFzPjxzcGFuPjwvc3Bhbj48c3Bhbj48L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3RoaXMuc3RhdGUubGlDbGFzc30+PExpbmsgYWN0aXZlQ2xhc3NOYW1lPSdpcy1hY3RpdmUnIGhyZWY9Jy9jb250YWN0Jz5cclxuICAgICAgICAgICAgICAgICAgPGE+PGRpdiBjbGFzc05hbWU9XCJhcnJvd1wiPjwvZGl2PjxjYW52YXMgbmFtZT1cIkNPTlRBQ1RcIiByZWY9e3RoaXMuY2FudmFzLmNvbnRhY3R9PjwvY2FudmFzPjxzcGFuPjwvc3Bhbj48c3Bhbj48L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3RoaXMuc3RhdGUubGlDbGFzc30+PExpbmsgYWN0aXZlQ2xhc3NOYW1lPSdpcy1hY3RpdmUnIGhyZWY9Jy90dXRvcmlhbHMnPlxyXG4gICAgICAgICAgICAgICAgICA8YT48ZGl2IGNsYXNzTmFtZT1cImFycm93XCI+PC9kaXY+PGNhbnZhcyBuYW1lPVwiVFVUT1JJQUxTXCIgcmVmPXt0aGlzLmNhbnZhcy50dXRvfT48L2NhbnZhcz48c3Bhbj48L3NwYW4+PHNwYW4+PC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWxNZWRpYVwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL21hcmNod29ya3NcIiByZWw9XCJub3JlZmVycmVyXCIgdGl0bGU9XCJHaXRodWJcIiB0YXJnZXQ9XCJfYmxhbmtcIj48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhR2l0aHVifSBzaXplPVwibGdcIiBjb2xvcj1cIiNmZmZcIiAvPjwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vbWFyY2h3b3Jrc1wiIHJlbD1cIm5vcmVmZXJyZXJcIiB0aXRsZT1cIlR3aXR0ZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVHdpdHRlcn0gc2l6ZT1cImxnXCIgY29sb3I9XCIjZmZmXCIgLz48L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3VzZXJzL3N0b3J5Lzg2MTk5NTlcIiByZWw9XCJub3JlZmVycmVyXCIgdGl0bGU9XCJTdGFjayBPdmVyZmxvd1wiIHRhcmdldD1cIl9ibGFua1wiPjxGb250QXdlc29tZUljb24gaWNvbj17ZmFTdGFja092ZXJmbG93fSBzaXplPVwibGdcIiBjb2xvcj1cIiNmZmZcIiAvPjwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmxvZ297XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjbWFpbk1lbnUge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMTAwMDA7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwOy8qZmZmZmZmKi9cclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZjBmMGYwOy8qM2UzZTNlKi9cclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZS1pbiAwLjNzO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgLmRlc2lnbiBzcGFuOmJlZm9yZSwgI21haW5NZW51IC5kZXNpZ24gc3BhbjphZnRlciwgI21haW5NZW51IGxpIGEgc3BhbjpiZWZvcmUsICNtYWluTWVudSBsaSBhIHNwYW46YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgLmRlc2lnbiB7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICNtYWluTWVudSAuZGVzaWduOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICBsZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgLmRlc2lnbjpudGgtY2hpbGQoMSkgc3BhbjpmaXJzdC1jaGlsZDpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIHRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICNtYWluTWVudSAuZGVzaWduOm50aC1jaGlsZCgxKSBzcGFuOmZpcnN0LWNoaWxkOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICB0b3A6IDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgLmRlc2lnbjpudGgtY2hpbGQoMSkgc3BhbjpsYXN0LWNoaWxkOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgICAgbGVmdDogY2FsYygxMDAlICsgNXB4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgLmRlc2lnbjpudGgtY2hpbGQoMSkgc3BhbjpsYXN0LWNoaWxkOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICBsZWZ0OiA1cHg7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IC5kZXNpZ246bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgICAgICAgYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IC5kZXNpZ246bnRoLWNoaWxkKDIpIHNwYW46Zmlyc3QtY2hpbGQ6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICByaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgYm90dG9tOiA1cHg7ICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IC5kZXNpZ246bnRoLWNoaWxkKDIpIHNwYW46Zmlyc3QtY2hpbGQ6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgIGJvdHRvbTogNXB4OyAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgLmRlc2lnbjpudGgtY2hpbGQoMikgc3BhbjpsYXN0LWNoaWxkOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgICAgcmlnaHQ6IGNhbGMoMTAwJSArIDVweCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IC5kZXNpZ246bnRoLWNoaWxkKDIpIHNwYW46bGFzdC1jaGlsZDphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgYm90dG9tOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICNtYWluTWVudSAuZGVzaWduOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgICAgICAgICAgICAgIGJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICAgICAgICBsZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IC5kZXNpZ246bnRoLWNoaWxkKDMpIHNwYW46Zmlyc3QtY2hpbGQ6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICBsZWZ0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICBib3R0b206IDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgLmRlc2lnbjpudGgtY2hpbGQoMykgc3BhbjpmaXJzdC1jaGlsZDphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IC5kZXNpZ246bnRoLWNoaWxkKDMpIHNwYW46bGFzdC1jaGlsZDpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IGNhbGMoMTAwJSArIDVweCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IC5kZXNpZ246bnRoLWNoaWxkKDMpIHNwYW46bGFzdC1jaGlsZDphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICBib3R0b206IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IC5kZXNpZ246bnRoLWNoaWxkKDQpIHtcclxuICAgICAgICAgICAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IC5kZXNpZ246bnRoLWNoaWxkKDQpIHNwYW46Zmlyc3QtY2hpbGQ6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICByaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IC5kZXNpZ246bnRoLWNoaWxkKDQpIHNwYW46Zmlyc3QtY2hpbGQ6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgIHRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICNtYWluTWVudSAuZGVzaWduOm50aC1jaGlsZCg0KSBzcGFuOmxhc3QtY2hpbGQ6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICByaWdodDogY2FsYygxMDAlICsgNXB4KTtcclxuICAgICAgICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IC5kZXNpZ246bnRoLWNoaWxkKDQpIHNwYW46bGFzdC1jaGlsZDphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgI21haW5NZW51IGgyIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgaDIge1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAjbWFpbk1lbnUgLm1lbnUge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAjbWFpbk1lbnUgLm1lbnUgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNnMgZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAjbWFpbk1lbnUgLm1lbnUgc3BhbjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDhweDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICNtYWluTWVudSAubWVudSBzcGFuOmZpcnN0LWNoaWxkOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IC04cHg7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAjbWFpbk1lbnUgLm1lbnUgc3BhbjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIHRvcDogMTZweDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICNtYWluTWVudSAubWVudSBzcGFuOmxhc3QtY2hpbGQ6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIHRvcDogOHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgI21haW5NZW51IC5tZW51IHNwYW46YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3MgMC4zcyBsaW5lYXI7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgLm1lbnUge1xyXG4gICAgICAgICAgICAgICAgICBcdGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgI21haW5NZW51IC5jbG9zZSBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAjbWFpbk1lbnUgLmNsb3NlIHNwYW46Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDQ1ZGVnKTtcclxuICAgICAgICAgICAgICAgIHRvcDogMTZweDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICNtYWluTWVudSAuY2xvc2Ugc3BhbjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigtNDVkZWcpO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgI21haW5NZW51IC5jbG9zZSBzcGFuOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgICAgICAgICNtYWluTWVudSB7XHJcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IC0xMDB2dztcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogaW5maW5pdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAjbWFpbk1lbnUgLnNvY2lhbE1lZGlhe1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI21haW5NZW51IC5zb2NpYWxNZWRpYSBhe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDEwJTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDFweCkge1xyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IHtcclxuICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgI21haW5NZW51IG5hdiB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIwMHB4KTtcclxuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDIwMHB4KTtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAjbWFpbk1lbnUgdWwge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNhMmEyYTI7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IHVsIHtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICNtYWluTWVudSBsaSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMCAyMHB4IDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDAgMjBweCAwO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA1NDBweCkge1xyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IGxpIHtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgMTBweCAwO1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDAgMTBweCAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0MzVweCkge1xyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IGxpIHtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMCA1cHggMDtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDAgNXB4IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgbGkge1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI21haW5NZW51IGxpOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2UtaW4gMC4ycztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI21haW5NZW51IGxpOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2UtaW4gMC4zcztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI21haW5NZW51IGxpOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2UtaW4gMC40cztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI21haW5NZW51IGxpOm50aC1jaGlsZCg0KSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2UtaW4gMC41cztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI21haW5NZW51IC5saVRyYW5zaXRpb24ge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDApO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgI21haW5NZW51IGxpIGEge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNhMmEyYTI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMHB4IDVweCAwcHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICNtYWluTWVudSBsaSBhOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZWZlZmVmZWY7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggI2FhYWFhYSBzb2xpZDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICNtYWluTWVudSBsaSBhIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgICAgICAgICNtYWluTWVudSBsaSBhIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICNtYWluTWVudSBsaSBhIGNhbnZhcyB7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgbGkgYSBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgbGkgYSBzcGFuOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IGxpIGEgc3BhbjpudGgtY2hpbGQoMyk6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICNtYWluTWVudSBsaSBhIHNwYW46bnRoLWNoaWxkKDMpOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IGxpIGEgc3BhbjpudGgtY2hpbGQoNCkge1xyXG4gICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IGxpIGEgc3BhbjpudGgtY2hpbGQoNCk6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICNtYWluTWVudSBsaSBhIHNwYW46bnRoLWNoaWxkKDQpOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIGJvdHRvbTogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAjbWFpbk1lbnUgLmlzLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2RjZGNkYztcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICNtYWluTWVudSAuaXMtYWN0aXZlIC5hcnJvdyB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDEwcHggdHJhbnNwYXJlbnQgc29saWQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxMHB4IHRyYW5zcGFyZW50IHNvbGlkO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxMHB4IHRyYW5zcGFyZW50IHNvbGlkO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDE1cHggIzJkMjIyMiBzb2xpZDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgICAgICAgICNtYWluTWVudSAuaXMtYWN0aXZlIC5hcnJvdyB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAjbWFpbk1lbnUgLmlzLWFjdGl2ZTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2RjZGNkYztcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9tZW51PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5NZW51OyJdfQ== */\n/*@ sourceURL=C:\\Users\\010\\NextProjects\\Edel\\components\\MainMenu.js */"));
    }
  }]);

  return MainMenu;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MainMenu);

/***/ })

})
//# sourceMappingURL=index.js.029018c86bb01ffa2f73.hot-update.js.map