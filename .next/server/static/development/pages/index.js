module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./classes/Text.js":
/*!*************************!*\
  !*** ./classes/Text.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");




var Text =
/*#__PURE__*/
function () {
  function Text(canvas, text) {
    var fontSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;
    var fontFamily = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "Georgia";
    var fillStyleActive = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "#fff";
    var fillStyleUnactive = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "#ccc";
    var hz = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 5;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Text);

    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.text = text;
    this.fontSize = fontSize;
    this.fontFamily = fontFamily;
    this.fillStyleActive = fillStyleActive;
    this.fillStyleUnactive = fillStyleUnactive;
    this.fillStyle = fillStyleActive;
    this.font = this.fontSize + "px " + this.fontFamily;
    this.hz = hz;
    this.ctx.font = this.font;
    this.ctx.fillStyle = this.fillStyle;
    this.canvas.width = this.ctx.measureText(this.text).width;
    this.canvas.height = this.fontSize;
    this.write();
    this.startAnimation();
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Text, [{
    key: "write",
    value: function write() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.font = this.font;
      this.ctx.fillStyle = this.fillStyle;
      this.ctx.fillText(this.text, 0, this.fontSize * 3 / 4 + 2);
      this.data = this.getPixels();
      this.ctx.putImageData(this.data, 0, 0);
    }
  }, {
    key: "reWrite",
    value: function reWrite() {
      this.ctx.putImageData(this.data, 0, 0);
      setTimeout(this.startAnimation.bind(this), Math.floor(Math.random() * (1000 - 400) + 400));
    }
  }, {
    key: "animate",
    value: function animate() {
      var shift = Math.floor(Math.random(10 - 3) + 3),
          pos = Math.random().toFixed(1);

      if (pos < 0.1) {
        pos = 0.1;
      } else if (pos > 0.7) {
        pos = 0.7;
      }

      var newData = this.getPixels(pos);

      var data = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()([], newData.data);

      if (Math.random() < 0.5) {
        for (var i = 0; i < data.length; i++) {
          newData.data[i] = data[i - 4 * shift < 0 ? data.length + (i - 4 * shift) : i - 4 * shift];
        }
      } else {
        for (var _i = 0; _i < data.length; _i++) {
          newData.data[_i] = data[_i + 4 * shift < data.length ? _i + 4 * shift : _i + 4 * shift - data.length];
        }
      }

      this.ctx.putImageData(newData, 0, 0);
    }
  }, {
    key: "startAnimation",
    value: function startAnimation() {
      if (!this.canvas.parentElement.className.includes('is-active')) {
        this.fillStyle = this.fillStyleUnactive;
        this.write();

        for (var i = 0; i < this.hz; i++) {
          this.animate();
        }
      } else {
        this.fillStyle = this.fillStyleActive;
        this.write();
      }

      setTimeout(this.reWrite.bind(this), 100);
    }
  }, {
    key: "getPixels",
    value: function getPixels() {
      var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      return this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height * o);
    }
  }]);

  return Text;
}();

/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./components/Link.js":
/*!****************************!*\
  !*** ./components/Link.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);






var ActiveLink = function ActiveLink(_ref) {
  var router = _ref.router,
      children = _ref.children,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["router", "children"]);

  var child = react__WEBPACK_IMPORTED_MODULE_4__["Children"].only(children);
  var className = child.props.className || null;

  if (router.pathname === props.href && props.activeClassName) {
    className = "".concat(className !== null ? className : '', " ").concat(props.activeClassName).trim();
  }

  delete props.activeClassName;
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    prefetch: true
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.cloneElement(child, {
    className: className
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(ActiveLink));

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _classes_Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../classes/Text */ "./classes/Text.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Link */ "./components/Link.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_11__);













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

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
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

/***/ }),

/***/ "./components/OpeningAnimation.js":
/*!****************************************!*\
  !*** ./components/OpeningAnimation.js ***!
  \****************************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);









var OpeningAnimation =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(OpeningAnimation, _React$Component);

  function OpeningAnimation(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, OpeningAnimation);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(OpeningAnimation).call(this, props));
    _this.state = {};
    _this.cancel = _this.cancel.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.wrapper = react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(OpeningAnimation, [{
    key: "cancel",
    value: function cancel() {
      this.props.aniEnd();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var wrapper = this.wrapper.current;
      setTimeout(function () {
        var fin = 0;

        for (var k = 0; k < wrapper.children.length; k++) {
          wrapper.children[k].style.animationPlayState = "running";
          wrapper.children[k].addEventListener("animationend", function () {
            fin++;

            if (fin >= wrapper.children.length) {
              setTimeout(_this2.cancel, 500);
            }
          });
        }
      }, 1000);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "wrapper",
        ref: this.wrapper,
        className: "jsx-845344108"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-845344108"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-845344108"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-845344108"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-845344108"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-845344108"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "/static/logo.svg",
        className: "jsx-845344108"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "845344108"
      }, "img.jsx-845344108{width:80%;max-width:400px;margin:auto;z-index:10000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-animation:fade-jsx-845344108 0.1s linear 0.2s 5 forwards paused;animation:fade-jsx-845344108 0.1s linear 0.2s 5 forwards paused;}#wrapper.jsx-845344108{position:fixed;height:100vh;width:100vw;z-index:1000000000;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:#404040;}#wrapper.jsx-845344108>div.jsx-845344108{width:0%;height:100%;position:absolute;top:0;left:0;}#wrapper.jsx-845344108>div.jsx-845344108:nth-child(1){background-color:#353535;z-index:1;-webkit-animation:charge-jsx-845344108 0.4s linear 1s forwards paused;animation:charge-jsx-845344108 0.4s linear 1s forwards paused;}#wrapper.jsx-845344108>div.jsx-845344108:nth-child(2){background-color:#303030;z-index:2;-webkit-animation:charge-jsx-845344108 0.4s linear 1.2s forwards paused;animation:charge-jsx-845344108 0.4s linear 1.2s forwards paused;}#wrapper.jsx-845344108>div.jsx-845344108:nth-child(3){background-color:#252525;z-index:3;-webkit-animation:charge-jsx-845344108 0.4s linear 1.4s forwards paused;animation:charge-jsx-845344108 0.4s linear 1.4s forwards paused;}#wrapper.jsx-845344108>div.jsx-845344108:nth-child(4){background-color:#202020;z-index:4;-webkit-animation:charge-jsx-845344108 0.4s linear 1.6s forwards paused;animation:charge-jsx-845344108 0.4s linear 1.6s forwards paused;}#wrapper.jsx-845344108>div.jsx-845344108:nth-child(5){background-color:#151515;z-index:5;-webkit-animation:charge-jsx-845344108 0.4s linear 1.8s forwards paused;animation:charge-jsx-845344108 0.4s linear 1.8s forwards paused;}@-webkit-keyframes fade-jsx-845344108{0%{opacity:0;}100%{opacity:1;}}@keyframes fade-jsx-845344108{0%{opacity:0;}100%{opacity:1;}}@-webkit-keyframes charge-jsx-845344108{0%{width:0%;}100%{width:100%;}}@keyframes charge-jsx-845344108{0%{width:0%;}100%{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcMDEwXFxOZXh0UHJvamVjdHNcXEVkZWxcXGNvbXBvbmVudHNcXE9wZW5pbmdBbmltYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNENzQixBQUd5QixBQVFLLEFBUU4sQUFPZ0IsQUFLQSxBQUtBLEFBS0EsQUFLQSxBQU1YLEFBR0EsQUFLSCxBQUdFLFNBM0NELEFBeUNaLENBekRnQixBQWlEaEIsQUFHQSxDQVFBLElBcERhLE1BU0ssSUFNUixBQUtBLEFBS0EsQUFLQSxBQUtBLENBMUNFLEVBUUEsT0Flb0MsQUFLRSxBQUtBLEFBS0EsQUFLQSxHQTFDcEMsQ0FnQlIsQ0FSYSxLQVNiLE9BaEJXLEFBaUJuQixPQVRlLDBFQUNZLElBUnlCLHFCQVNwRCxTQVlBLElBS0EsQUFLQSxBQUtBLEFBS0Esc0dBeENBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcMDEwXFxOZXh0UHJvamVjdHNcXEVkZWxcXGNvbXBvbmVudHNcXE9wZW5pbmdBbmltYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgT3BlbmluZ0FuaW1hdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICBcclxuICAgIH07XHJcbiAgICB0aGlzLmNhbmNlbCA9IHRoaXMuY2FuY2VsLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLndyYXBwZXIgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICB9XHJcbiAgY2FuY2VsKCl7XHJcbiAgICB0aGlzLnByb3BzLmFuaUVuZCgpO1xyXG4gIH1cclxuICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gIFx0dmFyIHdyYXBwZXIgPSB0aGlzLndyYXBwZXIuY3VycmVudDtcclxuICBcdHNldFRpbWVvdXQoKCk9PntcclxuICBcdFx0dmFyIGZpbiA9IDA7XHJcbiAgXHRcdGZvcihsZXQgaz0wOyBrPHdyYXBwZXIuY2hpbGRyZW4ubGVuZ3RoOyBrKyspe1xyXG4gIFx0XHRcdHdyYXBwZXIuY2hpbGRyZW5ba10uc3R5bGUuYW5pbWF0aW9uUGxheVN0YXRlID0gXCJydW5uaW5nXCI7XHJcbiAgXHRcdFx0d3JhcHBlci5jaGlsZHJlbltrXS5hZGRFdmVudExpc3RlbmVyKCBcImFuaW1hdGlvbmVuZFwiLCAoKT0+e1xyXG4gIFx0XHRcdFx0ZmluKys7XHJcbiAgXHRcdFx0XHRpZihmaW4gPj0gd3JhcHBlci5jaGlsZHJlbi5sZW5ndGgpe1xyXG4gIFx0XHRcdFx0XHRzZXRUaW1lb3V0KHRoaXMuY2FuY2VsLCA1MDApO1xyXG4gIFx0XHRcdFx0fVxyXG4gIFx0XHRcdH0pXHJcbiAgXHRcdH1cclxuICBcdH0sIDEwMDApXHJcbiAgICBcclxuICB9XHJcblxyXG4gICAgcmVuZGVyICgpe1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJ3cmFwcGVyXCIgcmVmPXt0aGlzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgIDxkaXY+PC9kaXY+XHJcblxyXG4gICAgICAgICAgXHJcblxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2xvZ28uc3ZnXCIgLz5cclxuXHJcbiAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgIHotaW5kZXg6IDEwMDAwO1xyXG4gICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZSAwLjFzIGxpbmVhciAwLjJzIDUgZm9yd2FyZHMgcGF1c2VkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICN3cmFwcGVye1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgICB6LWluZGV4OiAxMDAwMDAwMDAwO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQwNDA0MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjd3JhcHBlciA+IGRpdntcclxuICAgICAgICAgICAgICB3aWR0aDogMCU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgbGVmdCAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICN3cmFwcGVyID4gZGl2Om50aC1jaGlsZCgxKXtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzNTM1O1xyXG4gICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiBjaGFyZ2UgMC40cyBsaW5lYXIgMXMgZm9yd2FyZHMgcGF1c2VkOyAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3dyYXBwZXIgPiBkaXY6bnRoLWNoaWxkKDIpe1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XHJcbiAgICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgICBhbmltYXRpb246IGNoYXJnZSAwLjRzIGxpbmVhciAxLjJzIGZvcndhcmRzIHBhdXNlZDsgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICN3cmFwcGVyID4gZGl2Om50aC1jaGlsZCgzKXtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyNTI1O1xyXG4gICAgICAgICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiBjaGFyZ2UgMC40cyBsaW5lYXIgMS40cyBmb3J3YXJkcyBwYXVzZWQ7ICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjd3JhcHBlciA+IGRpdjpudGgtY2hpbGQoNCl7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcclxuICAgICAgICAgICAgICB6LWluZGV4OiA0O1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogY2hhcmdlIDAuNHMgbGluZWFyIDEuNnMgZm9yd2FyZHMgcGF1c2VkOyAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3dyYXBwZXIgPiBkaXY6bnRoLWNoaWxkKDUpe1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTE1MTU7XHJcbiAgICAgICAgICAgICAgei1pbmRleDogNTtcclxuICAgICAgICAgICAgICBhbmltYXRpb246IGNoYXJnZSAwLjRzIGxpbmVhciAxLjhzIGZvcndhcmRzIHBhdXNlZDsgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZSB7XHJcbiAgICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQGtleWZyYW1lcyBjaGFyZ2V7XHJcbiAgICAgICAgICAgICAgMCV7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMCU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDEwMCV7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3BlbmluZ0FuaW1hdGlvbjsiXX0= */\n/*@ sourceURL=C:\\Users\\010\\NextProjects\\Edel\\components\\OpeningAnimation.js */"));
    }
  }]);

  return OpeningAnimation;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (OpeningAnimation);

/***/ }),

/***/ "./components/RouteProgress.js":
/*!*************************************!*\
  !*** ./components/RouteProgress.js ***!
  \*************************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);










var RouteProgress =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RouteProgress, _React$Component);

  function RouteProgress(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RouteProgress);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(RouteProgress).call(this, props));
    _this.state = {
      color: "#2299DD",
      showAfterMs: 300,
      width: 0,
      max_width: Math.round(Math.random() * (65 - 50) + 50)
    };
    _this.timer = null;
    _this.stimer = null;
    _this.ltimer = null;
    _this.do = false;
    _this.routeChangeStart = _this.routeChangeStart.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.routeChangeEnd = _this.routeChangeEnd.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.LoadingStart = _this.LoadingStart.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.LoadingEnd = _this.LoadingEnd.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(RouteProgress, [{
    key: "routeChangeStart",
    value: function routeChangeStart() {
      var _this2 = this;

      clearTimeout(this.timer);
      this.timer = setTimeout(function () {
        _this2.setState({
          width: Math.round(Math.random() * 20 + 10),
          max_width: Math.round(Math.random() * (65 - 50) + 50)
        });

        _this2.LoadingStart();

        _this2.do = true;
      }, this.state.showAfterMs);
      clearTimeout(this.stimer);
      this.stimer = setTimeout(function () {
        _this2.setState({
          width: Math.random() * (90 - 75) + 75
        });
      }, 15000);
    }
  }, {
    key: "routeChangeEnd",
    value: function routeChangeEnd() {
      clearTimeout(this.timer);
      clearTimeout(this.stimer);
      clearTimeout(this.ltimer);

      if (this.do) {
        this.LoadingEnd();
        this.do = false;
      }
    }
  }, {
    key: "LoadingStart",
    value: function LoadingStart() {
      this.setState(function (prevState) {
        return {
          width: prevState.width < prevState.max_width ? prevState.width + Math.random() * 3 + 1 : prevState.width
        };
      });

      if (this.state.width < this.state.max_width) {
        this.ltimer = setTimeout(this.LoadingStart, 800);
      }
    }
  }, {
    key: "LoadingEnd",
    value: function LoadingEnd() {
      var _this3 = this;

      this.setState({
        width: 100
      });
      setTimeout(function () {
        _this3.setState({
          width: 0
        });
      }, 50);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      next_router__WEBPACK_IMPORTED_MODULE_8___default.a.events.on('routeChangeStart', this.routeChangeStart);
      next_router__WEBPACK_IMPORTED_MODULE_8___default.a.events.on('routeChangeComplete', this.routeChangeEnd);
      next_router__WEBPACK_IMPORTED_MODULE_8___default.a.events.on('routeChangeError', this.routeChangeEnd);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timer);
      clearTimeout(this.stimer);
      clearTimeout(this.ltimer);
      next_router__WEBPACK_IMPORTED_MODULE_8___default.a.events.off('routeChangeStart', this.routeChangeStart);
      next_router__WEBPACK_IMPORTED_MODULE_8___default.a.events.off('routeChangeComplete', this.routeChangeEnd);
      next_router__WEBPACK_IMPORTED_MODULE_8___default.a.events.off('routeChangeError', this.routeChangeEnd);
    }
  }, {
    key: "render",
    value: function render() {
      return this.state.width > 0 ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "routerogress",
        className: "jsx-282090724"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          width: this.state.width + "%"
        },
        className: "jsx-282090724" + " " + "bar"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "282090724"
      }, "#routerogress.jsx-282090724{pointer-events:none;position:fixed;top:0;left:0;width:100%;height:1px;z-index:1000000;background:azure;}.bar.jsx-282090724{background:blue;position:absolute;top:0;left:0;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcMDEwXFxOZXh0UHJvamVjdHNcXEVkZWxcXGNvbXBvbmVudHNcXFJvdXRlUHJvZ3Jlc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUZrQixBQUdpQyxBQVVKLGdCQUNFLElBVkgsY0FXVCxDQVZBLEtBV0MsQ0FWQSxNQVdLLENBVkQsV0FDQSxBQVViLFdBVGtCLGdCQUNDLGlCQUNuQiIsImZpbGUiOiJDOlxcVXNlcnNcXDAxMFxcTmV4dFByb2plY3RzXFxFZGVsXFxjb21wb25lbnRzXFxSb3V0ZVByb2dyZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuXHJcbmNsYXNzIFJvdXRlUHJvZ3Jlc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgIFx0c3VwZXIocHJvcHMpO1xyXG4gICAgICBcdHRoaXMuc3RhdGUgPSB7XHJcbiAgICBcdFx0Y29sb3I6IFwiIzIyOTlERFwiLFxyXG4gICAgICAgIFx0c2hvd0FmdGVyTXM6IDMwMCxcclxuICAgICAgICBcdHdpZHRoOiAwLFxyXG4gICAgICAgIFx0bWF4X3dpZHRoOiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqKDY1IC0gNTApICsgNTApXHJcbiAgICBcdH07XHJcbiAgICBcdHRoaXMudGltZXIgPSBudWxsO1xyXG4gICAgXHR0aGlzLnN0aW1lciA9IG51bGw7XHJcbiAgICBcdHRoaXMubHRpbWVyID0gbnVsbDtcclxuICAgIFx0dGhpcy5kbyA9IGZhbHNlO1xyXG4gICAgXHR0aGlzLnJvdXRlQ2hhbmdlU3RhcnQgPSB0aGlzLnJvdXRlQ2hhbmdlU3RhcnQuYmluZCh0aGlzKTtcclxuICAgIFx0dGhpcy5yb3V0ZUNoYW5nZUVuZCA9IHRoaXMucm91dGVDaGFuZ2VFbmQuYmluZCh0aGlzKTtcclxuICAgIFx0dGhpcy5Mb2FkaW5nU3RhcnQgPSB0aGlzLkxvYWRpbmdTdGFydC5iaW5kKHRoaXMpO1xyXG4gICAgXHR0aGlzLkxvYWRpbmdFbmQgPSB0aGlzLkxvYWRpbmdFbmQuYmluZCh0aGlzKTtcclxuICBcdH1cclxuXHJcbiAgcm91dGVDaGFuZ2VTdGFydCgpIHtcclxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcclxuICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICBcdHRoaXMuc2V0U3RhdGUoe3dpZHRoOiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqMjArMTApLCBtYXhfd2lkdGg6IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSooNjUgLSA1MCkgKyA1MCl9KTtcclxuICAgIFx0dGhpcy5Mb2FkaW5nU3RhcnQoKTtcclxuICAgIFx0dGhpcy5kbyA9IHRydWU7XHJcbiAgICB9LCB0aGlzLnN0YXRlLnNob3dBZnRlck1zKTtcclxuXHJcbiAgICBjbGVhclRpbWVvdXQodGhpcy5zdGltZXIpO1xyXG4gICAgdGhpcy5zdGltZXIgPSBzZXRUaW1lb3V0KCgpPT57dGhpcy5zZXRTdGF0ZSh7d2lkdGg6IE1hdGgucmFuZG9tKCkqKDkwIC0gNzUpICsgNzV9KX0sIDE1MDAwKTtcclxuICB9XHJcblxyXG4gIHJvdXRlQ2hhbmdlRW5kKCkge1xyXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xyXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuc3RpbWVyKTtcclxuICAgIGNsZWFyVGltZW91dCh0aGlzLmx0aW1lcik7XHJcbiAgICBpZih0aGlzLmRvKXtcclxuICBcdFx0dGhpcy5Mb2FkaW5nRW5kKCk7XHJcbiAgXHRcdHRoaXMuZG8gPSBmYWxzZTtcclxuICBcdH1cclxuICB9XHJcblxyXG4gIExvYWRpbmdTdGFydCgpIHtcclxuICBcdHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+IHtcclxuICAgICAgIHJldHVybiB7d2lkdGg6IHByZXZTdGF0ZS53aWR0aCA8IHByZXZTdGF0ZS5tYXhfd2lkdGggPyAocHJldlN0YXRlLndpZHRoICsgTWF0aC5yYW5kb20oKSozKzEpIDogcHJldlN0YXRlLndpZHRofVxyXG4gICAgfSk7XHJcbiAgICBpZih0aGlzLnN0YXRlLndpZHRoIDwgdGhpcy5zdGF0ZS5tYXhfd2lkdGgpe1xyXG4gICAgXHR0aGlzLmx0aW1lciA9IHNldFRpbWVvdXQodGhpcy5Mb2FkaW5nU3RhcnQsIDgwMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBMb2FkaW5nRW5kKCkge1xyXG4gIFx0dGhpcy5zZXRTdGF0ZSh7d2lkdGg6IDEwMH0pO1xyXG4gIFx0c2V0VGltZW91dCgoKT0+e1xyXG4gIFx0XHR0aGlzLnNldFN0YXRlKHt3aWR0aDogMH0pXHJcbiAgXHR9LCA1MCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgdGhpcy5yb3V0ZUNoYW5nZVN0YXJ0KTtcclxuICAgIFJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCB0aGlzLnJvdXRlQ2hhbmdlRW5kKTtcclxuICAgIFJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlRXJyb3InLCB0aGlzLnJvdXRlQ2hhbmdlRW5kKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xyXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuc3RpbWVyKTtcclxuICAgIGNsZWFyVGltZW91dCh0aGlzLmx0aW1lcik7XHJcbiAgICBSb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VTdGFydCcsIHRoaXMucm91dGVDaGFuZ2VTdGFydCk7XHJcbiAgICBSb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VDb21wbGV0ZScsIHRoaXMucm91dGVDaGFuZ2VFbmQpO1xyXG4gICAgUm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlRXJyb3InLCB0aGlzLnJvdXRlQ2hhbmdlRW5kKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgXHR0aGlzLnN0YXRlLndpZHRoID4gMCA/XHJcbiAgICBcdDxkaXYgaWQ9XCJyb3V0ZXJvZ3Jlc3NcIj5cclxuICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJhclwiIHN0eWxlPXt7d2lkdGg6IHRoaXMuc3RhdGUud2lkdGgrXCIlXCJ9fT48L2Rpdj5cclxuICAgIFx0XHQ8c3R5bGUganN4PntgXHJcblx0XHQgICAgICAgICNyb3V0ZXJvZ3Jlc3Mge1xyXG5cdFx0ICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5cdFx0ICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdCAgICAgICAgICB0b3A6IDA7XHJcblx0XHQgICAgICAgICAgbGVmdDogMDtcclxuXHRcdCAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHRcdCAgICAgICAgICBoZWlnaHQ6IDFweDtcclxuXHRcdCAgICAgICAgICB6LWluZGV4OiAxMDAwMDAwO1xyXG5cdFx0ICAgICAgICAgIGJhY2tncm91bmQ6IGF6dXJlO1xyXG5cdFx0ICAgICAgICB9XHJcblx0XHQgICAgICAgIC5iYXIge1xyXG5cdFx0ICAgICAgICAgIGJhY2tncm91bmQ6IGJsdWU7XHJcblx0XHQgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0ICAgICAgICAgIHRvcDogMDtcclxuXHRcdCAgICAgICAgICBsZWZ0OiAwO1xyXG5cdFx0ICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuXHRcdCAgICAgICAgfVxyXG5cdCAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgXHQ8L2Rpdj5cclxuICAgIFx0OlxyXG4gICAgXHRudWxsXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm91dGVQcm9ncmVzczsiXX0= */\n/*@ sourceURL=C:\\Users\\010\\NextProjects\\Edel\\components\\RouteProgress.js */")) : null;
    }
  }]);

  return RouteProgress;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (RouteProgress);

/***/ }),

/***/ "./components/StarsSand.js":
/*!*********************************!*\
  !*** ./components/StarsSand.js ***!
  \*********************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);









var StarsSand =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(StarsSand, _React$Component);

  function StarsSand(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StarsSand);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(StarsSand).call(this, props));
    _this.state = {};
    _this.canvasRef = react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();
    _this.animation = _this.animation.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.resize = _this.resize.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.particlesSize = 1;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(StarsSand, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.canvas = this.canvasRef.current;
      this.canvas.width = this.canvas.offsetWidth;
      this.canvas.height = this.canvas.offsetHeight;
      this.ctx = this.canvas.getContext('2d');
      this.ctx.fillStyle = this.props.fillStyle;
      this.particles();
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
      this.canvas.width = this.canvas.offsetWidth;
      this.canvas.height = this.canvas.offsetHeight;
      this.ctx.fillStyle = this.props.fillStyle;
      this.collection = [];

      for (var i = 0; i < this.props.particlesAmount; i++) {
        this.collection[i] = {
          x: this.canvas.width * Math.random(),
          y: this.canvas.height * Math.random(),
          vx: Math.random() + this.props.speed,
          vy: -(Math.random() + this.props.speed)
        };
      }
    }
  }, {
    key: "particles",
    value: function particles() {
      this.collection = [];

      for (var i = 0; i < this.props.particlesAmount; i++) {
        this.collection[i] = {
          x: this.canvas.width * Math.random(),
          y: this.canvas.height * Math.random(),
          vx: Math.random() + this.props.speed,
          vy: -(Math.random() + this.props.speed)
        };
      }

      this.animation();
    }
  }, {
    key: "draw",
    value: function draw() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      for (var i = 0; i < this.collection.length; i++) {
        this.ctx.beginPath();
        this.ctx.arc(this.collection[i].x, this.collection[i].y, this.particlesSize, 0, Math.PI * 2);
        this.ctx.closePath();
        this.ctx.fill();
        this.collection[i].x += this.collection[i].vx;
        this.collection[i].y += this.collection[i].vy;

        if (this.collection[i].x > this.canvas.width) {
          this.collection[i].x = -4;
          this.collection[i].y = this.canvas.height * Math.random();
        }

        if (this.collection[i].y < 0) {
          this.collection[i].x = this.canvas.width * Math.random();
          this.collection[i].y = this.canvas.height + 4;
        }
      }
    }
  }, {
    key: "animation",
    value: function animation() {
      requestAnimationFrame(this.animation);
      this.draw();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3282957836", [this.props.background]]])
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("canvas", {
        ref: this.canvasRef,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["3282957836", [this.props.background]]])
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3282957836",
        dynamic: [this.props.background]
      }, "div.__jsx-style-dynamic-selector{position:fixed;height:100vh;width:100vw;top:0;left:0;background:".concat(this.props.background, ";}canvas.__jsx-style-dynamic-selector{height:100%;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcMDEwXFxOZXh0UHJvamVjdHNcXEVkZWxcXGNvbXBvbmVudHNcXFN0YXJzU2FuZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRnNCLEFBRzhCLEFBUUgsWUFDRCxHQVJFLFFBU2YsS0FSYyxZQUNOLE1BQ0MsT0FDaUMsd0NBQzFDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcMDEwXFxOZXh0UHJvamVjdHNcXEVkZWxcXGNvbXBvbmVudHNcXFN0YXJzU2FuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBTdGFyc1NhbmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5jYW52YXNSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIHRoaXMuYW5pbWF0aW9uID0gdGhpcy5hbmltYXRpb24uYmluZCh0aGlzKTtcclxuICAgIHRoaXMucmVzaXplID0gdGhpcy5yZXNpemUuYmluZCh0aGlzKTtcclxuICAgIHRoaXMucGFydGljbGVzU2l6ZSA9IDE7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgdGhpcy5jYW52YXMgPSB0aGlzLmNhbnZhc1JlZi5jdXJyZW50O1xyXG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLmNhbnZhcy5vZmZzZXRXaWR0aDtcclxuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuY2FudmFzLm9mZnNldEhlaWdodDtcclxuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMucHJvcHMuZmlsbFN0eWxlO1xyXG4gICAgdGhpcy5wYXJ0aWNsZXMoKTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemUpO1xyXG4gIH1cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplKTtcclxuICB9XHJcblxyXG4gIHJlc2l6ZSgpe1xyXG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLmNhbnZhcy5vZmZzZXRXaWR0aDtcclxuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuY2FudmFzLm9mZnNldEhlaWdodDtcclxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMucHJvcHMuZmlsbFN0eWxlO1xyXG4gICAgdGhpcy5jb2xsZWN0aW9uID0gW107XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJvcHMucGFydGljbGVzQW1vdW50OyBpKyspIHtcclxuICAgICAgdGhpcy5jb2xsZWN0aW9uW2ldID0ge1xyXG4gICAgICAgIHg6IHRoaXMuY2FudmFzLndpZHRoICogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgKiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgIHZ4OiBNYXRoLnJhbmRvbSgpK3RoaXMucHJvcHMuc3BlZWQsXHJcbiAgICAgICAgdnk6IC0oTWF0aC5yYW5kb20oKSt0aGlzLnByb3BzLnNwZWVkKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBhcnRpY2xlcygpe1xyXG4gICAgdGhpcy5jb2xsZWN0aW9uID0gW107XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJvcHMucGFydGljbGVzQW1vdW50OyBpKyspIHtcclxuICAgICAgdGhpcy5jb2xsZWN0aW9uW2ldID0ge1xyXG4gICAgICAgIHg6IHRoaXMuY2FudmFzLndpZHRoICogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgKiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgIHZ4OiBNYXRoLnJhbmRvbSgpK3RoaXMucHJvcHMuc3BlZWQsXHJcbiAgICAgICAgdnk6IC0oTWF0aC5yYW5kb20oKSt0aGlzLnByb3BzLnNwZWVkKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmFuaW1hdGlvbigpO1xyXG4gIH1cclxuICBkcmF3KCl7XHJcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29sbGVjdGlvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgdGhpcy5jdHguYXJjKHRoaXMuY29sbGVjdGlvbltpXS54LCB0aGlzLmNvbGxlY3Rpb25baV0ueSwgdGhpcy5wYXJ0aWNsZXNTaXplLCAwLCBNYXRoLlBJKjIpO1xyXG4gICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcclxuICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgICB0aGlzLmNvbGxlY3Rpb25baV0ueCArPSB0aGlzLmNvbGxlY3Rpb25baV0udng7XHJcbiAgICAgIHRoaXMuY29sbGVjdGlvbltpXS55ICs9IHRoaXMuY29sbGVjdGlvbltpXS52eTtcclxuICAgICAgaWYodGhpcy5jb2xsZWN0aW9uW2ldLnggPiB0aGlzLmNhbnZhcy53aWR0aCl7XHJcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uW2ldLnggPSAtNDtcclxuICAgICAgICB0aGlzLmNvbGxlY3Rpb25baV0ueSA9IHRoaXMuY2FudmFzLmhlaWdodCAqIE1hdGgucmFuZG9tKCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYodGhpcy5jb2xsZWN0aW9uW2ldLnkgPCAwKXtcclxuICAgICAgICB0aGlzLmNvbGxlY3Rpb25baV0ueCA9IHRoaXMuY2FudmFzLndpZHRoICogTWF0aC5yYW5kb20oKTtcclxuICAgICAgICB0aGlzLmNvbGxlY3Rpb25baV0ueSA9IHRoaXMuY2FudmFzLmhlaWdodCs0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFuaW1hdGlvbigpe1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uKTtcclxuICAgIHRoaXMuZHJhdygpO1xyXG4gIH1cclxuICAgIHJlbmRlciAoKXtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGNhbnZhcyByZWY9e3RoaXMuY2FudmFzUmVmfT48L2NhbnZhcz5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgZGl2e1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoaXMucHJvcHMuYmFja2dyb3VuZH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FudmFze1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGFyc1NhbmQ7Il19 */\n/*@ sourceURL=C:\\Users\\010\\NextProjects\\Edel\\components\\StarsSand.js */")));
    }
  }]);

  return StarsSand;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (StarsSand);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "core-js/library/fn/reflect/construct");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/construct.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/construct.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Reflect$construct = __webpack_require__(/*! ../core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
  if (_Reflect$construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_Reflect$construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = _Reflect$construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__(/*! react-is */ "react-is");
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true
};

var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = TYPE_STATICS[targetComponent['$$typeof']] || REACT_STATICS;
        var sourceStatics = TYPE_STATICS[sourceComponent['$$typeof']] || REACT_STATICS;

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "./node_modules/next/router.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatUrl) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatUrl(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: href && (0, _typeof2.default)(href) === 'object' ? url_1.format(href) : href,
        as: asHref && (0, _typeof2.default)(asHref) === 'object' ? url_1.format(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
        props.href = router_1.Router._rewriteUrlForNextExport(props.href);
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/construct */ "./node_modules/@babel/runtime-corejs2/helpers/construct.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* global window */

var router_1 = __importDefault(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

var SingletonRouter = {
  router: null,
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (typeof window !== 'undefined') {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the SingletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(SingletonRouter, 'events', {
  get: function get() {
    return router_1.default.events;
  }
});
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(SingletonRouter, field, {
    get: function get() {
      throwIfNoRouter();
      return SingletonRouter.router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  SingletonRouter[field] = function () {
    var _SingletonRouter$rout;

    throwIfNoRouter();
    return (_SingletonRouter$rout = SingletonRouter.router)[field].apply(_SingletonRouter$rout, arguments);
  };
});
routerEvents.forEach(function (event) {
  SingletonRouter.ready(function () {
    router_1.default.events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));

      if (SingletonRouter[eventField]) {
        try {
          SingletonRouter[eventField].apply(SingletonRouter, arguments);
        } catch (err) {
          console.error("Error when running the Router event: ".concat(eventField));
          console.error("".concat(err.message, "\n").concat(err.stack));
        }
      }
    });
  });
});

function throwIfNoRouter() {
  if (!SingletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }
} // Export the SingletonRouter and this is the public API.


exports.default = SingletonRouter; // Reexport the withRoute HOC

var with_router_1 = __webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js");

exports.withRouter = with_router_1.default; // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.

exports.createRouter = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  SingletonRouter.router = (0, _construct2.default)(router_1.default, args);
  SingletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  SingletonRouter.readyCallbacks = [];
  return SingletonRouter.router;
}; // Export the actual Router class, which is usually used inside the server


exports.Router = router_1.default; // This function is used to create the `withRouter` router instance

function makePublicRouterInstance(router) {
  var instance = {};

  for (var _i = 0; _i < urlPropertyFields.length; _i++) {
    var property = urlPropertyFields[_i];

    if ((0, _typeof2.default)(router[property]) === 'object') {
      instance[property] = (0, _assign.default)({}, router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = router_1.default.events;
  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get: function get() {
        return router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return router[field].apply(router, arguments);
    };
  });
  return instance;
}

exports.makePublicRouterInstance = makePublicRouterInstance;

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var hoist_non_react_statics_1 = __importDefault(__webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function withRouter(ComposedComponent) {
  var displayName = utils_1.getDisplayName(ComposedComponent);

  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react_1$Component) {
    (0, _inherits2.default)(WithRouteWrapper, _react_1$Component);

    function WithRouteWrapper() {
      (0, _classCallCheck2.default)(this, WithRouteWrapper);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithRouteWrapper).apply(this, arguments));
    }

    (0, _createClass2.default)(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return react_1.default.createElement(ComposedComponent, (0, _assign.default)({
          router: this.context.router
        }, this.props));
      }
    }]);
    return WithRouteWrapper;
  }(react_1.Component);

  WithRouteWrapper.contextTypes = {
    router: prop_types_1.default.object
  };
  WithRouteWrapper.displayName = "withRouter(".concat(displayName, ")");
  return hoist_non_react_statics_1.default(WithRouteWrapper, ComposedComponent);
}

exports.default = withRouter;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/router */ "./node_modules/next/dist/client/router.js")


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next-server/head */ "next-server/head");
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
        content: "Produced By BOUSSOUF NABIL"
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
      }, ".intro.jsx-2533546093 div.jsx-2533546093{padding:3% 10% 3% 10%;}.intro.jsx-2533546093 div.jsx-2533546093:first-child h2.jsx-2533546093{margin:0;}.intro.jsx-2533546093 div.jsx-2533546093:nth-child(2) h3.jsx-2533546093{color:#2f4f4fdb;}.intro.jsx-2533546093{width:80%;max-width:850px;}.intro.jsx-2533546093 article.jsx-2533546093{padding:1% 0% 1% 5%;font-size:1.15rem;font-family:Source Sans Pro,sans-serif;}@media only screen and (max-width:600px){.intro.jsx-2533546093{width:100%;}.intro.jsx-2533546093 div.jsx-2533546093{padding:3% 1% 3% 0%;}.Home.jsx-2533546093{padding:0 20px 0 20px;}}.Home.jsx-2533546093{width:100%;height:1000px;box-sizing:border-box;}#welcome.jsx-2533546093{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:233px;}#welcome.jsx-2533546093 h2.jsx-2533546093{margin:80px auto;text-align:center;font-size:3rem;font-weight:400;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}#welcome.jsx-2533546093 #typer.jsx-2533546093{width:2px;background-color:#666666;display:block;opacity:0;-webkit-animation:fade-jsx-2533546093 0.4s linear 0s infinite forwards;animation:fade-jsx-2533546093 0.4s linear 0s infinite forwards;}@-webkit-keyframes fade-jsx-2533546093{0%{opacity:0;}50%{opacity:1;}100%{opacity:0;}}@keyframes fade-jsx-2533546093{0%{opacity:0;}50%{opacity:1;}100%{opacity:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcMDEwXFxOZXh0UHJvamVjdHNcXEVkZWxcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRTRCLEFBRytDLEFBR2IsQUFHTyxBQUdOLEFBSVUsQUFNTCxBQUdTLEFBR0UsQUFJZixBQU1FLEFBS0ksQUFRUCxBQVNJLEFBR0EsQUFHQSxTQTNEbEIsQ0FNb0IsQUF1Q1MsQUFTekIsQUFHQSxBQUdBLENBNUNBLEFBVWMsS0F2QmxCLENBa0NzQixHQTNCQSxBQVNsQixFQXRCSixBQXlCSSxHQUtzQixDQXBCMUIsU0ErQm1CLEFBUUQsR0FuQzBCLFNBaUI1QyxFQW1CYyxDQVJNLFNBU2dDLE9BUm5DLFFBUkEsR0FwQmpCLFVBcUJBLHFEQVFBLHFEQVFBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcMDEwXFxOZXh0UHJvamVjdHNcXEVkZWxcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJy4uL2NvbXBvbmVudHMvTGluaydcclxuXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIFxyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgd29yZHM6IFsnV2VsY29tZScsICdCaWVudmVudScsICfjgojjgYbjgZPjgZ0nLCAnV2lsbGtvbW1lbicsICdIb8WfZ2VsZGluaXonXSxcclxuICAgICAgd29yZDogMCxcclxuICAgICAgbGV0dGVyOiAwLFxyXG4gICAgICBmb3J3YXJkczogdHJ1ZVxyXG4gICAgICAgIH07XHJcbiAgICB0aGlzLnRpbWVyID0gbnVsbDtcclxuICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICB0aGlzLmFuaW1hdGUoKTtcclxuICB9XHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcclxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcclxuICB9XHJcbiAgYW5pbWF0ZSgpe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSgocHJldik9PntcclxuICAgICAgaWYocHJldi5sZXR0ZXI9PT1wcmV2LndvcmRzW3ByZXYud29yZF0ubGVuZ3RoLTEgJiYgcHJldi5mb3J3YXJkcyl7XHJcbiAgICAgICAgcmV0dXJuIHtmb3J3YXJkczogZmFsc2V9XHJcbiAgICAgIH1cclxuICAgICAgaWYocHJldi5sZXR0ZXIgPT09IDAgJiYgIXByZXYuZm9yd2FyZHMpe1xyXG4gICAgICAgIHJldHVybiB7d29yZDogcHJldi53b3JkPT09cHJldi53b3Jkcy5sZW5ndGgtMSA/IDAgOiBwcmV2LndvcmQrMSwgZm9yd2FyZHM6IHRydWV9XHJcbiAgICAgIH1cclxuICAgICAgaWYocHJldi5mb3J3YXJkcyl7XHJcbiAgICAgICAgcmV0dXJuIHtsZXR0ZXI6IHByZXYubGV0dGVyKzF9XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiB7bGV0dGVyOiBwcmV2LmxldHRlci0xfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KHRoaXMuYW5pbWF0ZSwgdGhpcy5zdGF0ZS5sZXR0ZXI9PT10aGlzLnN0YXRlLndvcmRzW3RoaXMuc3RhdGUud29yZF0ubGVuZ3RoLTEgJiYgdGhpcy5zdGF0ZS5mb3J3YXJkcyA/IDMwMDAgOiAyMDApO1xyXG4gIH1cclxuXHJcbiAgICByZW5kZXIgKCl7XHJcbiAgICAgICAgdmFyIG1vdCA9IHRoaXMuc3RhdGUud29yZHNbdGhpcy5zdGF0ZS53b3JkXS5zbGljZSgwLCB0aGlzLnN0YXRlLmxldHRlcisxKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPExheW91dCBvQW5pPXt0aGlzLnByb3BzLm9Bbml9PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgPHRpdGxlPkhPTUU8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiRGVzY3JpcHRpb25cIiBjb250ZW50PVwiUHJvZHVjZWQgQnkgQk9VU1NPVUYgTkFCSUxcIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cIkhvbWVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ3ZWxjb21lXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMj57bW90fTxzcGFuIGlkPVwidHlwZXJcIj48L3NwYW4+PC9oMj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaW50cm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+Qm91c3NvdWYgTmFiaWw8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5EZXYgU3Rvcnk8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkJvcm4gaW4gMTk5OCwgbGl2aW5nIGluIE1la25lcyBNb3JvY2NvLCBmcmVlbGFuY2UgZGV2ZWxvcGVyLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU1BBLCBTU1IgZGV2ZWxvcG1lbnQgd2l0aCBKYXZhU2NyaXB0LCBoYXZlIGEgd2F5IHdpdGggZGVzaWduIGFuZCAyRCBhbmltYXRpb24uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPjxhPkxlYXJuIG1vcmUuPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgIC5pbnRybyBkaXZ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMlIDEwJSAzJSAxMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5pbnRybyBkaXY6Zmlyc3QtY2hpbGQgaDJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmludHJvIGRpdjpudGgtY2hpbGQoMikgaDN7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMmY0ZjRmZGI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5pbnRyb3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA4NTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmludHJvIGFydGljbGV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDElIDAlIDElIDUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMTVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBTb3VyY2UgU2FucyBQcm8sIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW50cm97XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW50cm8gZGl2e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMyUgMSUgMyUgMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLkhvbWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4IDAgMjBweDsgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuSG9tZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICN3ZWxjb21lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMzNweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICN3ZWxjb21lIGgyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA4MHB4IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgI3dlbGNvbWUgI3R5cGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjY2NjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZSAwLjRzIGxpbmVhciAwcyBpbmZpbml0ZSBmb3J3YXJkcztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgNTAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXX0= */\n/*@ sourceURL=C:\\Users\\010\\NextProjects\\Edel\\pages\\index.js */")));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\010\NextProjects\Edel\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "@fortawesome/free-brands-svg-icons":
/*!*****************************************************!*\
  !*** external "@fortawesome/free-brands-svg-icons" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/reflect/construct":
/*!*******************************************************!*\
  !*** external "core-js/library/fn/reflect/construct" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next-server/head":
/*!***********************************!*\
  !*** external "next-server/head" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map