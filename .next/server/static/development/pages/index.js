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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Text =
/*#__PURE__*/
function () {
  function Text(canvas, text) {
    var fontSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;
    var fontFamily = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "Georgia";
    var fillStyleActive = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "#fff";
    var fillStyleUnactive = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "#ccc";
    var hz = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 5;

    _classCallCheck(this, Text);

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

  _createClass(Text, [{
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
      var data = Object.assign([], newData.data);

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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\010\\NextProjects\\Edel\\components\\Link.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var ActiveLink = function ActiveLink(_ref) {
  var router = _ref.router,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["router", "children"]);

  var child = react__WEBPACK_IMPORTED_MODULE_2__["Children"].only(children);
  var className = child.props.className || null;

  if (router.pathname === props.href && props.activeClassName) {
    className = "".concat(className !== null ? className : '', " ").concat(props.activeClassName).trim();
  }

  delete props.activeClassName;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(child, {
    className: className
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_0__["withRouter"])(ActiveLink));

/***/ }),

/***/ "./components/MainMenu.js":
/*!********************************!*\
  !*** ./components/MainMenu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _classes_Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/Text */ "./classes/Text.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Link */ "./components/Link.js");
var _jsxFileName = "C:\\Users\\010\\NextProjects\\Edel\\components\\MainMenu.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var MainMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(MainMenu, _Component);

  function MainMenu(props) {
    var _this;

    _classCallCheck(this, MainMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MainMenu).call(this, props));
    _this.state = {
      menuClass: 'menu'
    };
    _this.classToggle = _this.classToggle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.canvas = {
      home: react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef(),
      about: react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef(),
      contact: react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef(),
      tuto: react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef()
    };
    return _this;
  }

  _createClass(MainMenu, [{
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
        obj.push(new _classes_Text__WEBPACK_IMPORTED_MODULE_2__["default"](canvas, canvas.getAttribute('name'), 18, "Georgia", "#ffffff", "#aaaaaa", 4));
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

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("menu", {
        id: "mainMenu",
        style: this.state.menuClass === 'menu close' ? {
          left: 0
        } : null,
        className: "jsx-4267066156",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-4267066156" + " " + "design",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-4267066156",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-4267066156",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-4267066156" + " " + "design",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-4267066156",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-4267066156",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-4267066156" + " " + "design",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-4267066156",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-4267066156",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-4267066156" + " " + "design",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-4267066156",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-4267066156",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        name: "menu",
        onClick: function onClick(e) {
          _this3.classToggle("menu");
        },
        className: "jsx-4267066156" + " " + (this.state.menuClass || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-4267066156",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-4267066156",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-4267066156",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "static/logo.svg",
        className: "jsx-4267066156" + " " + "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
        className: "jsx-4267066156",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-4267066156",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-4267066156" + " " + (this.state.liClass || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
        activeClassName: "is-active",
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-4267066156",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4267066156" + " " + "arrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("canvas", {
        name: "HOME",
        ref: this.canvas.home,
        className: "jsx-4267066156",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-4267066156",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-4267066156",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-4267066156" + " " + (this.state.liClass || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
        activeClassName: "is-active",
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-4267066156",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4267066156" + " " + "arrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("canvas", {
        name: "ABOUT",
        ref: this.canvas.about,
        className: "jsx-4267066156",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-4267066156",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-4267066156",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-4267066156" + " " + (this.state.liClass || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
        activeClassName: "is-active",
        href: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-4267066156",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4267066156" + " " + "arrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("canvas", {
        name: "CONTACT",
        ref: this.canvas.contact,
        className: "jsx-4267066156",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-4267066156",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-4267066156",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-4267066156" + " " + (this.state.liClass || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
        activeClassName: "is-active",
        href: "/tutorials",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-4267066156",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4267066156" + " " + "arrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("canvas", {
        name: "TUTORIALS",
        ref: this.canvas.tuto,
        className: "jsx-4267066156",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-4267066156",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-4267066156",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
        className: "jsx-4267066156",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "Produced by Boussouf Nabil"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "4267066156",
        css: ".logo.jsx-4267066156{width:80%;max-width:250px;}#mainMenu.jsx-4267066156{position:relative;z-index:10000;height:100%;width:300px;margin:0;background-color:#000000;color:#f0f0f0;-webkit-transition:0.4s ease-in 0.3s;transition:0.4s ease-in 0.3s;left:0;box-sizing:border-box;}@media only screen and (max-width:600px){#mainMenu.jsx-4267066156 .design.jsx-4267066156 span.jsx-4267066156:before,#mainMenu.jsx-4267066156 .design.jsx-4267066156 span.jsx-4267066156:after,#mainMenu.jsx-4267066156 li.jsx-4267066156 a.jsx-4267066156 span.jsx-4267066156:before,#mainMenu.jsx-4267066156 li.jsx-4267066156 a.jsx-4267066156 span.jsx-4267066156:after{background-color:#fff;}#mainMenu.jsx-4267066156 .design.jsx-4267066156{position:absolute;}#mainMenu.jsx-4267066156 .design.jsx-4267066156:nth-child(1){top:5px;left:5px;}#mainMenu.jsx-4267066156 .design.jsx-4267066156:nth-child(1) span.jsx-4267066156:first-child.jsx-4267066156:before{content:\"\";width:25px;height:2px;position:absolute;left:100%;top:5px;}#mainMenu.jsx-4267066156 .design.jsx-4267066156:nth-child(1) span.jsx-4267066156:first-child.jsx-4267066156:after{content:\"\";width:2px;height:25px;position:absolute;top:5px;}#mainMenu.jsx-4267066156 .design.jsx-4267066156:nth-child(1) span.jsx-4267066156:last-child.jsx-4267066156:before{content:\"\";width:25px;height:2px;position:absolute;left:calc(100% + 5px);}#mainMenu.jsx-4267066156 .design.jsx-4267066156:nth-child(1) span.jsx-4267066156:last-child.jsx-4267066156:after{content:\"\";width:2px;height:25px;left:5px;position:absolute;}#mainMenu.jsx-4267066156 .design.jsx-4267066156:nth-child(2){bottom:5px;right:5px;}#mainMenu.jsx-4267066156 .design.jsx-4267066156:nth-child(2) span.jsx-4267066156:first-child.jsx-4267066156:before{content:\"\";width:25px;height:2px;position:absolute;right:100%;bottom:5px;}#mainMenu.jsx-4267066156 .design.jsx-4267066156:nth-child(2) span.jsx-4267066156:first-child.jsx-4267066156:after{content:\"\";width:2px;height:25px;position:absolute;bottom:5px;}#mainMenu.jsx-4267066156 .design.jsx-4267066156:nth-child(2) span.jsx-4267066156:last-child.jsx-4267066156:before{content:\"\";width:25px;height:2px;position:absolute;right:calc(100% + 5px);}#mainMenu.jsx-4267066156 .design.jsx-4267066156:nth-child(2) span.jsx-4267066156:last-child.jsx-4267066156:after{content:\"\";width:2px;height:25px;right:5px;bottom:100%;position:absolute;}#mainMenu.jsx-4267066156 .design.jsx-4267066156:nth-child(3){bottom:5px;left:5px;}#mainMenu.jsx-4267066156 .design.jsx-4267066156:nth-child(3) span.jsx-4267066156:first-child.jsx-4267066156:before{content:\"\";width:25px;height:2px;position:absolute;left:100%;bottom:5px;}#mainMenu.jsx-4267066156 .design.jsx-4267066156:nth-child(3) span.jsx-4267066156:first-child.jsx-4267066156:after{content:\"\";width:2px;height:25px;position:absolute;bottom:5px;}#mainMenu.jsx-4267066156 .design.jsx-4267066156:nth-child(3) span.jsx-4267066156:last-child.jsx-4267066156:before{content:\"\";width:25px;height:2px;position:absolute;left:calc(100% + 5px);}#mainMenu.jsx-4267066156 .design.jsx-4267066156:nth-child(3) span.jsx-4267066156:last-child.jsx-4267066156:after{content:\"\";width:2px;height:25px;left:5px;bottom:100%;position:absolute;}#mainMenu.jsx-4267066156 .design.jsx-4267066156:nth-child(4){top:5px;right:5px;}#mainMenu.jsx-4267066156 .design.jsx-4267066156:nth-child(4) span.jsx-4267066156:first-child.jsx-4267066156:before{content:\"\";width:25px;height:2px;position:absolute;right:100%;top:5px;}#mainMenu.jsx-4267066156 .design.jsx-4267066156:nth-child(4) span.jsx-4267066156:first-child.jsx-4267066156:after{content:\"\";width:2px;height:25px;position:absolute;top:5px;}#mainMenu.jsx-4267066156 .design.jsx-4267066156:nth-child(4) span.jsx-4267066156:last-child.jsx-4267066156:before{content:\"\";width:25px;height:2px;position:absolute;right:calc(100% + 5px);top:0px;}#mainMenu.jsx-4267066156 .design.jsx-4267066156:nth-child(4) span.jsx-4267066156:last-child.jsx-4267066156:after{content:\"\";width:2px;height:25px;right:5px;top:100%;position:absolute;}}#mainMenu.jsx-4267066156 h2.jsx-4267066156{margin-top:50px;}@media only screen and (max-width:600px){#mainMenu.jsx-4267066156 h2.jsx-4267066156{text-align:center;margin-bottom:40px;}}#mainMenu.jsx-4267066156 .menu.jsx-4267066156{display:none;width:40px;height:28px;position:fixed;top:20px;right:20px;cursor:pointer;}#mainMenu.jsx-4267066156 .menu.jsx-4267066156 span.jsx-4267066156{width:100%;height:2px;background-color:#ccc;position:absolute;-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-transition:0.6s ease-out;transition:0.6s ease-out;}#mainMenu.jsx-4267066156 .menu.jsx-4267066156 span.jsx-4267066156:first-child{top:8px;}#mainMenu.jsx-4267066156 .menu.jsx-4267066156 span.jsx-4267066156:first-child.jsx-4267066156:before{top:-8px;}#mainMenu.jsx-4267066156 .menu.jsx-4267066156 span.jsx-4267066156:last-child{top:16px;}#mainMenu.jsx-4267066156 .menu.jsx-4267066156 span.jsx-4267066156:last-child.jsx-4267066156:before{top:8px;}#mainMenu.jsx-4267066156 .menu.jsx-4267066156 span.jsx-4267066156:before{content:\"\";width:100%;height:2px;background-color:#ccc;position:absolute;top:10px;-webkit-transition:0.3s 0.3s linear;transition:0.3s 0.3s linear;}@media only screen and (max-width:600px){#mainMenu.jsx-4267066156 .menu.jsx-4267066156{display:block;}}#mainMenu.jsx-4267066156 .close.jsx-4267066156 span.jsx-4267066156{background-color:#fff;}#mainMenu.jsx-4267066156 .close.jsx-4267066156 span.jsx-4267066156:first-child{-webkit-transform:rotateZ(45deg);-ms-transform:rotateZ(45deg);transform:rotateZ(45deg);top:16px;}#mainMenu.jsx-4267066156 .close.jsx-4267066156 span.jsx-4267066156:last-child{-webkit-transform:rotateZ(-45deg);-ms-transform:rotateZ(-45deg);transform:rotateZ(-45deg);}#mainMenu.jsx-4267066156 .close.jsx-4267066156 span.jsx-4267066156:before{width:0;}@media only screen and (max-width:600px){#mainMenu.jsx-4267066156{left:-100vw;position:fixed;width:100vw;padding:0;min-width:infinite;}}@media only screen and (min-width:601px){#mainMenu.jsx-4267066156{left:0;position:relative;min-width:300px;}}@media only screen and (max-width:600px){#mainMenu.jsx-4267066156 h4.jsx-4267066156{padding:25px;text-align:center;}}#mainMenu.jsx-4267066156 h4.jsx-4267066156{padding:0;margin:0;}#mainMenu.jsx-4267066156 nav.jsx-4267066156{height:calc(100% - 200px);max-height:calc(100% - 200px);overflow:hidden;}#mainMenu.jsx-4267066156 ul.jsx-4267066156{color:#a2a2a2;font-weight:700;font-size:18px;font-family:none;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;height:100%;}@media only screen and (max-width:600px){#mainMenu.jsx-4267066156 ul.jsx-4267066156{padding:0;}}#mainMenu.jsx-4267066156 li.jsx-4267066156{margin:20px 0 20px 0;padding:20px 0 20px 0;position:relative;}@media only screen and (max-height:540px){#mainMenu.jsx-4267066156 li.jsx-4267066156{margin:10px 0 10px 0;padding:10px 0 10px 0;}}@media only screen and (max-height:435px){#mainMenu.jsx-4267066156 li.jsx-4267066156{margin:5px 0 5px 0;padding:5px 0 5px 0;}}@media only screen and (max-width:600px){#mainMenu.jsx-4267066156 li.jsx-4267066156{text-align:center;-webkit-transform:translate(-100%,0);-ms-transform:translate(-100%,0);transform:translate(-100%,0);}}#mainMenu.jsx-4267066156 li.jsx-4267066156:nth-child(1){-webkit-transition:0.4s ease-in 0.2s;transition:0.4s ease-in 0.2s;}#mainMenu.jsx-4267066156 li.jsx-4267066156:nth-child(2){-webkit-transition:0.4s ease-in 0.3s;transition:0.4s ease-in 0.3s;}#mainMenu.jsx-4267066156 li.jsx-4267066156:nth-child(3){-webkit-transition:0.4s ease-in 0.4s;transition:0.4s ease-in 0.4s;}#mainMenu.jsx-4267066156 li.jsx-4267066156:nth-child(4){-webkit-transition:0.4s ease-in 0.5s;transition:0.4s ease-in 0.5s;}#mainMenu.jsx-4267066156 .liTransition.jsx-4267066156{-webkit-transform:translate(0%,0);-ms-transform:translate(0%,0);transform:translate(0%,0);}#mainMenu.jsx-4267066156 li.jsx-4267066156 a.jsx-4267066156{color:#a2a2a2;padding:5px 0px 5px 0px;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;position:relative;}#mainMenu.jsx-4267066156 li.jsx-4267066156 a.jsx-4267066156:hover{color:#efefefef;border-bottom:2px #aaaaaa solid;}#mainMenu.jsx-4267066156 li.jsx-4267066156 a.jsx-4267066156 span.jsx-4267066156{display:none;}@media only screen and (max-width:600px){#mainMenu.jsx-4267066156 li.jsx-4267066156 a.jsx-4267066156{width:150px;}#mainMenu.jsx-4267066156 li.jsx-4267066156 a.jsx-4267066156 canvas.jsx-4267066156{margin:auto;}#mainMenu.jsx-4267066156 li.jsx-4267066156 a.jsx-4267066156 span.jsx-4267066156{display:block;position:absolute;}#mainMenu.jsx-4267066156 li.jsx-4267066156 a.jsx-4267066156 span.jsx-4267066156:nth-child(3){top:0;right:0;}#mainMenu.jsx-4267066156 li.jsx-4267066156 a.jsx-4267066156 span.jsx-4267066156:nth-child(3):before{content:\"\";width:15px;height:2px;position:absolute;right:100%;}#mainMenu.jsx-4267066156 li.jsx-4267066156 a.jsx-4267066156 span.jsx-4267066156:nth-child(3):after{content:\"\";width:2px;height:15px;position:absolute;}#mainMenu.jsx-4267066156 li.jsx-4267066156 a.jsx-4267066156 span.jsx-4267066156:nth-child(4){bottom:0;left:0;}#mainMenu.jsx-4267066156 li.jsx-4267066156 a.jsx-4267066156 span.jsx-4267066156:nth-child(4):before{content:\"\";width:15px;height:2px;position:absolute;}#mainMenu.jsx-4267066156 li.jsx-4267066156 a.jsx-4267066156 span.jsx-4267066156:nth-child(4):after{content:\"\";width:2px;height:15px;position:absolute;bottom:100%;}}#mainMenu.jsx-4267066156 .is-active.jsx-4267066156{color:#dcdcdc;}#mainMenu.jsx-4267066156 .is-active.jsx-4267066156 .arrow.jsx-4267066156{position:absolute;right:100%;border-top:10px transparent solid;border-bottom:10px transparent solid;border-right:10px transparent solid;border-left:15px #2d2222 solid;}@media only screen and (max-width:600px){#mainMenu.jsx-4267066156 .is-active.jsx-4267066156 .arrow.jsx-4267066156{display:none;}}#mainMenu.jsx-4267066156 .is-active.jsx-4267066156:hover{color:#dcdcdc;border-bottom:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcMDEwXFxOZXh0UHJvamVjdHNcXEVkZWxcXGNvbXBvbmVudHNcXE1haW5NZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdGb0IsQUFHeUIsQUFJVSxBQWNNLEFBR0osQUFHVixBQUlHLEFBU0EsQUFRQSxBQVFBLEFBUUEsQUFLQSxBQVNBLEFBUUEsQUFRQSxBQVNBLEFBS0EsQUFTQSxBQVFBLEFBUUEsQUFTSCxBQUtHLEFBU0EsQUFRQSxBQVNBLEFBVUcsQUFLSSxBQU1QLEFBVUYsQUFTSCxBQUlDLEFBSUEsQUFJRCxBQUlHLEFBV00sQUFLSyxBQUlHLEFBS0MsQUFJbEIsQUFLTSxBQVVMLEFBUU0sQUFLTCxBQUlnQixBQU1aLEFBVUYsQUFLUyxBQU1FLEFBTUYsQUFPRCxBQUtTLEFBR0EsQUFHQSxBQUdBLEFBR0YsQUFJYixBQU9FLEFBS0gsQUFLQyxBQUlBLEFBSUUsQUFLUixBQUtLLEFBUUEsQUFPRixBQUtFLEFBUUEsQUFVQyxBQUlJLEFBVUgsQUFLRCxNQTdESixDQTVHVSxDQXRQVCxBQW1IQyxBQXVFZCxBQVlBLEFBaUNBLENBekNBLEFBSUEsQUFvTFcsQ0E5WUssQUEyUkwsQUFvQlQsQ0FuUmEsQUFTRCxBQVFDLEFBUUQsQUFRQSxBQUtDLEFBU0QsQUFRQyxBQVFELEFBU0QsQUFLRSxBQVNELEFBUUMsQUFRRCxBQWNDLEFBU0QsQUFRQyxBQVNELEFBK0JELEFBeUJBLEFBNkpFLEFBUUQsQUFZQyxBQVFELENBdkpLLEFBeUdqQixBQUlBLENBbExXLEFBdUZTLEFBa0Z0QixBQTJFRSxDQXRNQSxBQXdEZ0IsQUF1RFEsQUF5QkosQUFNcEIsQUEwQ0YsQUFtQnFCLEVBcFFyQixBQStLa0MsQUE0Q2hDLENBdFhBLENBckJjLEFBaUJkLEFBdUhBLEFBNkNxQixBQThJVyxBQWtHckIsQ0E3SWIsQUFvQ3dCLENBM050QixDQS9EYyxBQWdCQSxBQVFkLEFBY2MsQUFnQkEsQUF1QkEsQUFnQkEsQUF1QkEsQUFpQkEsQUF5SVEsQUFNRSxBQThFVixBQW9CQSxDQTFZZCxBQVdhLEFBaUJBLEFBcUJBLEFBaUJBLEFBc0JBLEFBaUJBLEFBc0JBLEFBaUJBLEFBd0NTLEFBeUJYLEFBZWIsQUE4SWUsQUFvQkEsRUFwTkQsQ0ErRU0sQ0E5UXRCLEFBOFJrQyxDQTFCaEIsRUFxS29CLENBcEluQixDQWZmLENBbFJZLEFBaVhaLENBeFZvQixBQVNBLEFBUUEsQUFRVCxBQWFTLEFBU0EsQUFRQSxBQVFSLEFBY1EsQUFTQSxBQVFBLEFBUVQsQUFjUyxBQVNBLEFBUUEsQUFTUixBQXdEVSxBQTZKRixBQVFBLEFBWUEsQUFRQSxBQTRCdEIsR0F4UGlCLENBUGYsQ0FtS29CLENBdkZSLEFBMkRaLEVBakRBLENBeE5vQixBQTZFTixDQXZDQSxBQStFSCxBQXdJTyxBQU1sQixDQXJUWSxBQXFNTSxDQTRGRCxHQTZEbkIsQ0E3RnVCLEVBeE9ULEFBU0YsQUFRYyxBQXFCWCxBQVNBLEFBUVksQUFzQmIsQUFTQyxBQVFXLEFBc0JYLEFBU0gsQUFRZSxBQThCaEIsQUFnTUksQUFRYixBQWFBLEFBT2MsQ0FoUE0sRUF4Q0EsQ0F2Q0EsQUFzSUYsQ0E5TlQsQUF5Uk8sR0F2UGhCLEFBb0hBLENBcEdBLEFBMElXLENBbktELEFBNkVHLEFBeU1mLENBaFBlLEFBU2IsQUF1Q0EsQUE4QlUsQUF3RGMsQUE0RkwsQUEyRm5CLENBNkJBLEFBV3FDLEVBbmFaLENBb1UzQixBQUdBLEFBR0EsQUFHQSxFQTdFRSxDQXZPQSxDQW9IQSxBQTBCQSxDQXFCZSxDQXRGZixBQXlCQSxBQTBKRixDQWhQRSxBQXNCQSxBQXlCQSxBQThCQSxBQXdHUyxDQS9JVCxBQThFVSxRQUNWLEFBaUU0QixJQWxDOUIsQ0FpRFcsR0E3T0ssQUFrUGhCLEFBNkZBLE1BakdBLElBcUxzQyxJQWxhUCxhQThUN0IsbUJBcUcrQixJQS9FYixNQWpKTyxBQTJCM0IsU0FpRWMsR0FzRGQsU0FyREEsQUFvSUEsR0FuYVMsT0FDZSxzQkFDeEIsS0FpTUEiLCJmaWxlIjoiQzpcXFVzZXJzXFwwMTBcXE5leHRQcm9qZWN0c1xcRWRlbFxcY29tcG9uZW50c1xcTWFpbk1lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVGV4dCBmcm9tICcuLi9jbGFzc2VzL1RleHQnO1xyXG5pbXBvcnQgTGluayBmcm9tICcuL0xpbmsnXHJcblxyXG5jbGFzcyBNYWluTWVudSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbWVudUNsYXNzOiAnbWVudSdcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5jbGFzc1RvZ2dsZSA9IHRoaXMuY2xhc3NUb2dnbGUuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuY2FudmFzID0ge1xyXG4gICAgICBob21lOiBSZWFjdC5jcmVhdGVSZWYoKSxcclxuICAgICAgYWJvdXQ6IFJlYWN0LmNyZWF0ZVJlZigpLFxyXG4gICAgICBjb250YWN0OiBSZWFjdC5jcmVhdGVSZWYoKSxcclxuICAgICAgdHV0bzogUmVhY3QuY3JlYXRlUmVmKClcclxuICAgIH07XHJcbiAgfVxyXG5cclxuXHJcbiAgY2xhc3NUb2dnbGUodGFyZ2V0KXtcclxuICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKT0+e1xyXG4gICAgICBpZih0YXJnZXQgPT09IFwibWVudVwiKXtcclxuICAgICAgXHRpZihzdGF0ZS5tZW51Q2xhc3MgPT09ICdtZW51IGNsb3NlJyl7XHJcbiAgICAgIFx0XHRzZXRUaW1lb3V0KHRoaXMucHJvcHMudHJhbnNmb3JtYXRpb24sIDUwMCk7XHJcbiAgICAgIFx0fWVsc2V7XHJcbiAgICAgIFx0XHR0aGlzLnByb3BzLnRyYW5zZm9ybWF0aW9uKCk7XHJcbiAgICAgIFx0fVxyXG4gICAgICAgIHJldHVybiB7bWVudUNsYXNzOiBzdGF0ZS5tZW51Q2xhc3MgPT09ICdtZW51JyA/ICdtZW51IGNsb3NlJyA6ICdtZW51JywgbGlDbGFzczogc3RhdGUubWVudUNsYXNzID09PSAnbWVudScgPyBcImxpVHJhbnNpdGlvblwiIDogXCJcIn1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHZhciBvYmogPSBbXTtcclxuICAgIGZvcihsZXQgcmVmIGluIHRoaXMuY2FudmFzKXtcclxuICAgICAgdmFyIGNhbnZhcyA9IHRoaXMuY2FudmFzW3JlZl0uY3VycmVudDtcclxuICAgICAgb2JqLnB1c2gobmV3IFRleHQoY2FudmFzLCBjYW52YXMuZ2V0QXR0cmlidXRlKCduYW1lJyksIDE4LCBcIkdlb3JnaWFcIiwgXCIjZmZmZmZmXCIsIFwiI2FhYWFhYVwiLCA0KSkvKlwiIzNlM2UzZVwiLCBcIiM3ZTdlN2VcIiovXHJcbiAgICB9XHJcbiAgICBvYmouZm9yRWFjaCgob2JqZWN0KT0+e1xyXG4gICAgICBvYmplY3QuY2FudmFzLnBhcmVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBvYmouZm9yRWFjaCgobyk9PntcclxuICAgICAgICAgIGlmKG8udGV4dCAhPT0gb2JqZWN0LnRleHQpe1xyXG4gICAgICAgICAgICBvLmZpbGxTdHlsZSA9IFwiI2ZmZmZmZlwiIC8vXCIjN2U3ZTdlXCJcclxuICAgICAgICAgICAgby53cml0ZSgpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBvYmplY3QuZmlsbFN0eWxlID0gXCIjYWFhYWFhXCIgLy9cIiMzZTNlM2VcIlxyXG4gICAgICAgIG9iamVjdC53cml0ZSgpXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG1lbnUgaWQ9XCJtYWluTWVudVwiIHN0eWxlPXt0aGlzLnN0YXRlLm1lbnVDbGFzcyA9PT0gJ21lbnUgY2xvc2UnID8ge2xlZnQ6IDB9IDogbnVsbH0+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZXNpZ25cIj48c3Bhbj48L3NwYW4+PHNwYW4+PC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlc2lnblwiPjxzcGFuPjwvc3Bhbj48c3Bhbj48L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVzaWduXCI+PHNwYW4+PC9zcGFuPjxzcGFuPjwvc3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZXNpZ25cIj48c3Bhbj48L3NwYW4+PHNwYW4+PC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICAgIDxkaXYgbmFtZT1cIm1lbnVcIiBjbGFzc05hbWU9e3RoaXMuc3RhdGUubWVudUNsYXNzfSBvbkNsaWNrPXsoZSk9Pnt0aGlzLmNsYXNzVG9nZ2xlKFwibWVudVwiKX19PlxyXG4gICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGgyPjxpbWcgY2xhc3NOYW1lPVwibG9nb1wiIHNyYz1cInN0YXRpYy9sb2dvLnN2Z1wiIC8+PC9oMj5cclxuICAgICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmxpQ2xhc3N9PjxMaW5rIGFjdGl2ZUNsYXNzTmFtZT0naXMtYWN0aXZlJyBocmVmPScvJz5cclxuICAgICAgICAgICAgICAgICAgPGE+PGRpdiBjbGFzc05hbWU9XCJhcnJvd1wiPjwvZGl2PjxjYW52YXMgbmFtZT1cIkhPTUVcIiByZWY9e3RoaXMuY2FudmFzLmhvbWV9PjwvY2FudmFzPjxzcGFuPjwvc3Bhbj48c3Bhbj48L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3RoaXMuc3RhdGUubGlDbGFzc30+PExpbmsgYWN0aXZlQ2xhc3NOYW1lPSdpcy1hY3RpdmUnIGhyZWY9Jy9hYm91dCc+XHJcbiAgICAgICAgICAgICAgICAgIDxhPjxkaXYgY2xhc3NOYW1lPVwiYXJyb3dcIj48L2Rpdj48Y2FudmFzIG5hbWU9XCJBQk9VVFwiIHJlZj17dGhpcy5jYW52YXMuYWJvdXR9PjwvY2FudmFzPjxzcGFuPjwvc3Bhbj48c3Bhbj48L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3RoaXMuc3RhdGUubGlDbGFzc30+PExpbmsgYWN0aXZlQ2xhc3NOYW1lPSdpcy1hY3RpdmUnIGhyZWY9Jy9jb250YWN0Jz5cclxuICAgICAgICAgICAgICAgICAgPGE+PGRpdiBjbGFzc05hbWU9XCJhcnJvd1wiPjwvZGl2PjxjYW52YXMgbmFtZT1cIkNPTlRBQ1RcIiByZWY9e3RoaXMuY2FudmFzLmNvbnRhY3R9PjwvY2FudmFzPjxzcGFuPjwvc3Bhbj48c3Bhbj48L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3RoaXMuc3RhdGUubGlDbGFzc30+PExpbmsgYWN0aXZlQ2xhc3NOYW1lPSdpcy1hY3RpdmUnIGhyZWY9Jy90dXRvcmlhbHMnPlxyXG4gICAgICAgICAgICAgICAgICA8YT48ZGl2IGNsYXNzTmFtZT1cImFycm93XCI+PC9kaXY+PGNhbnZhcyBuYW1lPVwiVFVUT1JJQUxTXCIgcmVmPXt0aGlzLmNhbnZhcy50dXRvfT48L2NhbnZhcz48c3Bhbj48L3NwYW4+PHNwYW4+PC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgPGg0PlByb2R1Y2VkIGJ5IEJvdXNzb3VmIE5hYmlsPC9oND5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIC5sb2dve1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyNTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjbWFpbk1lbnUge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMTAwMDA7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwOy8qZmZmZmZmKi9cclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZjBmMGYwOy8qM2UzZTNlKi9cclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZS1pbiAwLjNzO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgLmRlc2lnbiBzcGFuOmJlZm9yZSwgI21haW5NZW51IC5kZXNpZ24gc3BhbjphZnRlciwgI21haW5NZW51IGxpIGEgc3BhbjpiZWZvcmUsICNtYWluTWVudSBsaSBhIHNwYW46YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOy8qIzk5OSovXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgLmRlc2lnbiB7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICNtYWluTWVudSAuZGVzaWduOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICBsZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgLmRlc2lnbjpudGgtY2hpbGQoMSkgc3BhbjpmaXJzdC1jaGlsZDpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgbGVmdDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IC5kZXNpZ246bnRoLWNoaWxkKDEpIHNwYW46Zmlyc3QtY2hpbGQ6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IC5kZXNpZ246bnRoLWNoaWxkKDEpIHNwYW46bGFzdC1jaGlsZDpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgbGVmdDogY2FsYygxMDAlICsgNXB4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgLmRlc2lnbjpudGgtY2hpbGQoMSkgc3BhbjpsYXN0LWNoaWxkOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICBsZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgLmRlc2lnbjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgICAgICBib3R0b206IDVweDtcclxuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgLmRlc2lnbjpudGgtY2hpbGQoMikgc3BhbjpmaXJzdC1jaGlsZDpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIGJvdHRvbTogNXB4OyAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICNtYWluTWVudSAuZGVzaWduOm50aC1jaGlsZCgyKSBzcGFuOmZpcnN0LWNoaWxkOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIGJvdHRvbTogNXB4OyAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgLmRlc2lnbjpudGgtY2hpbGQoMikgc3BhbjpsYXN0LWNoaWxkOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICByaWdodDogY2FsYygxMDAlICsgNXB4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgLmRlc2lnbjpudGgtY2hpbGQoMikgc3BhbjpsYXN0LWNoaWxkOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICByaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICBib3R0b206IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgLmRlc2lnbjpudGgtY2hpbGQoMykge1xyXG4gICAgICAgICAgICAgICAgICBib3R0b206IDVweDtcclxuICAgICAgICAgICAgICAgICAgbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICNtYWluTWVudSAuZGVzaWduOm50aC1jaGlsZCgzKSBzcGFuOmZpcnN0LWNoaWxkOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICBsZWZ0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICBib3R0b206IDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgLmRlc2lnbjpudGgtY2hpbGQoMykgc3BhbjpmaXJzdC1jaGlsZDphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICBib3R0b206IDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgLmRlc2lnbjpudGgtY2hpbGQoMykgc3BhbjpsYXN0LWNoaWxkOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICBsZWZ0OiBjYWxjKDEwMCUgKyA1cHgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICNtYWluTWVudSAuZGVzaWduOm50aC1jaGlsZCgzKSBzcGFuOmxhc3QtY2hpbGQ6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgYm90dG9tOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IC5kZXNpZ246bnRoLWNoaWxkKDQpIHtcclxuICAgICAgICAgICAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IC5kZXNpZ246bnRoLWNoaWxkKDQpIHNwYW46Zmlyc3QtY2hpbGQ6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICB0b3A6IDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgLmRlc2lnbjpudGgtY2hpbGQoNCkgc3BhbjpmaXJzdC1jaGlsZDphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICB0b3A6IDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgLmRlc2lnbjpudGgtY2hpbGQoNCkgc3BhbjpsYXN0LWNoaWxkOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICByaWdodDogY2FsYygxMDAlICsgNXB4KTtcclxuICAgICAgICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IC5kZXNpZ246bnRoLWNoaWxkKDQpIHNwYW46bGFzdC1jaGlsZDphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAjbWFpbk1lbnUgaDIge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgICAgICAgICNtYWluTWVudSBoMiB7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICNtYWluTWVudSAubWVudSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICNtYWluTWVudSAubWVudSBzcGFuIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC42cyBlYXNlLW91dDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICNtYWluTWVudSAubWVudSBzcGFuOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIHRvcDogOHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgI21haW5NZW51IC5tZW51IHNwYW46Zmlyc3QtY2hpbGQ6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIHRvcDogLThweDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICNtYWluTWVudSAubWVudSBzcGFuOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgdG9wOiAxNnB4O1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgI21haW5NZW51IC5tZW51IHNwYW46bGFzdC1jaGlsZDpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgdG9wOiA4cHg7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAjbWFpbk1lbnUgLm1lbnUgc3BhbjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcyAwLjNzIGxpbmVhcjtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgICAgICAgICNtYWluTWVudSAubWVudSB7XHJcbiAgICAgICAgICAgICAgICAgIFx0ZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAjbWFpbk1lbnUgLmNsb3NlIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICNtYWluTWVudSAuY2xvc2Ugc3BhbjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooNDVkZWcpO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAxNnB4O1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgI21haW5NZW51IC5jbG9zZSBzcGFuOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKC00NWRlZyk7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAjbWFpbk1lbnUgLmNsb3NlIHNwYW46YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IHtcclxuICAgICAgICAgICAgICAgICAgbGVmdDogLTEwMHZ3O1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiBpbmZpbml0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAxcHgpIHtcclxuICAgICAgICAgICAgICAgICNtYWluTWVudSB7XHJcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgICAgICAgICNtYWluTWVudSBoNCB7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI21haW5NZW51IGg0e1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI21haW5NZW51IG5hdiB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIwMHB4KTtcclxuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDIwMHB4KTtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAjbWFpbk1lbnUgdWwge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNhMmEyYTI7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IHVsIHtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICNtYWluTWVudSBsaSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMCAyMHB4IDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDAgMjBweCAwO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA1NDBweCkge1xyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IGxpIHtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgMTBweCAwO1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDAgMTBweCAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0MzVweCkge1xyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IGxpIHtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMCA1cHggMDtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDAgNXB4IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgbGkge1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI21haW5NZW51IGxpOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2UtaW4gMC4ycztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI21haW5NZW51IGxpOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2UtaW4gMC4zcztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI21haW5NZW51IGxpOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2UtaW4gMC40cztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI21haW5NZW51IGxpOm50aC1jaGlsZCg0KSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2UtaW4gMC41cztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI21haW5NZW51IC5saVRyYW5zaXRpb24ge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDApO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgI21haW5NZW51IGxpIGEge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNhMmEyYTI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMHB4IDVweCAwcHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICNtYWluTWVudSBsaSBhOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZWZlZmVmZWY7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggI2FhYWFhYSBzb2xpZDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICNtYWluTWVudSBsaSBhIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgICAgICAgICNtYWluTWVudSBsaSBhIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICNtYWluTWVudSBsaSBhIGNhbnZhcyB7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgbGkgYSBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAjbWFpbk1lbnUgbGkgYSBzcGFuOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IGxpIGEgc3BhbjpudGgtY2hpbGQoMyk6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICNtYWluTWVudSBsaSBhIHNwYW46bnRoLWNoaWxkKDMpOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IGxpIGEgc3BhbjpudGgtY2hpbGQoNCkge1xyXG4gICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgI21haW5NZW51IGxpIGEgc3BhbjpudGgtY2hpbGQoNCk6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICNtYWluTWVudSBsaSBhIHNwYW46bnRoLWNoaWxkKDQpOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIGJvdHRvbTogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAjbWFpbk1lbnUgLmlzLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2RjZGNkYztcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICNtYWluTWVudSAuaXMtYWN0aXZlIC5hcnJvdyB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDEwcHggdHJhbnNwYXJlbnQgc29saWQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxMHB4IHRyYW5zcGFyZW50IHNvbGlkO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxMHB4IHRyYW5zcGFyZW50IHNvbGlkO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDE1cHggIzJkMjIyMiBzb2xpZDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgICAgICAgICNtYWluTWVudSAuaXMtYWN0aXZlIC5hcnJvdyB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAjbWFpbk1lbnUgLmlzLWFjdGl2ZTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2RjZGNkYztcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9tZW51PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5NZW51OyJdfQ== */\n/*@ sourceURL=C:\\Users\\010\\NextProjects\\Edel\\components\\MainMenu.js */",
        __self: this
      }));
    }
  }]);

  return MainMenu;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _RouteProgress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RouteProgress */ "./components/RouteProgress.js");
/* harmony import */ var _MainMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MainMenu */ "./components/MainMenu.js");
/* harmony import */ var _StarsSand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StarsSand */ "./components/StarsSand.js");
/* harmony import */ var _OpeningAnimation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OpeningAnimation */ "./components/OpeningAnimation.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\010\\NextProjects\\Edel\\components\\MyLayout.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var Layout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout(props) {
    var _this;

    _classCallCheck(this, Layout);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Layout).call(this, props));
    _this.state = {
      style: {
        transform: "translate(0%, 0%) matrix(1, 0, 0, 1, 0, 0)",
        position: "relative"
      },
      backgroundPositionY: 0,
      oAni: _this.props.oAni
    };
    _this.transform = _this.transform.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Layout, [{
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

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, this.state.oAni ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_OpeningAnimation__WEBPACK_IMPORTED_MODULE_5__["default"], {
        aniEnd: function aniEnd() {
          _this2.setState({
            oAni: false
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_RouteProgress__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MainMenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
        transformation: this.transform,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "window",
        style: {
          transform: this.state.style.transform,
          position: this.state.style.position,
          backgroundPosition: "60% " + this.state.backgroundPositionY + "px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, this.props.children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_StarsSand__WEBPACK_IMPORTED_MODULE_4__["default"], {
        particlesAmount: 50,
        fillStyle: "#888888",
        background: "transparent",
        speed: 0,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1916456088",
        css: "body{margin:0;padding:0;font-family:\"-apple-system\",\"BlinkMacSystemFont\",\"Segoe UI\",\"Roboto\",\"Oxygen\",\"Ubuntu\",\"Cantarell\",\"Fira Sans\",\"Droid Sans\",\"Helvetica Neue\",\"sans-serif\";-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;width:100vw;height:100vh;overflow:hidden;}ul{list-style:none;}a{-webkit-text-decoration:none;text-decoration:none;}code{font-family:source-code-pro,Menlo,Monaco,Consolas,\"Courier New\",monospace;}body>div{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:#96999c;color:#dddddd;}#window{width:100%;height:100%;max-width:100%;max-height:100%;overflow:hidden;position:relative;box-sizing:border-box;-webkit-transition:0.5s ease-in;transition:0.5s ease-in;z-index:1;background-color:#040608;}#window>div:nth-child(1){width:100%;height:100%;overflow-y:scroll;overflow-x:hidden;position:relative;padding:30px;box-sizing:border-box;background-color:transparent;z-index:1;}@media only screen and (min-width:601px){#window>div:nth-child(1)::-webkit-scrollbar{width:0.8em;}#window>div:nth-child(1)::-webkit-scrollbar-track{background-color:#333333;}#window>div:nth-child(1)::-webkit-scrollbar-thumb{background-color:#ffffff;}#window>div:nth-child(1)::-webkit-scrollbar-track-piece{background-color:#333333;}#window{-webkit-transform:translate(0%,0%) matrix(1,0,0,1,0,0) !important;-ms-transform:translate(0%,0%) matrix(1,0,0,1,0,0) !important;transform:translate(0%,0%) matrix(1,0,0,1,0,0) !important;position:relative !important;}}#window>div:nth-child(2){width:100%;height:100%;position:absolute;left:0;top:0;background:url(/static/bg_mesh_black.png);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcMDEwXFxOZXh0UHJvamVjdHNcXEVkZWxcXGNvbXBvbmVudHNcXE15TGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdENkIsQUFHd0IsQUFVTyxBQUdLLEFBRzBELEFBR3BFLEFBT0EsQUFhQSxBQWFHLEFBR2EsQUFHQSxBQUdBLEFBR3VDLEFBS3ZELFNBcEVELEVBbUJFLEFBT0EsQUFhQSxBQThCQSxDQWpCWixJQTFDRixHQVRzSyxJQW1CdkosQUFPRSxBQWFHLEFBOEJBLEVBZmxCLEFBR0EsQUFHQSxhQWpDZ0IsR0FhRSxBQThCWCxPQUNELEVBM0ROLElBZ0JnQixBQTRDMEIsS0EvQnhCLFdBWkEsSUFkcEIsR0EyQmUsV0FaUyxFQWFBLE1BOEJ4QixDQXJEMkIsYUFXRCxFQWFLLFVBdkJmLGNBQ2hCLEtBdUJZLFVBRVosZUFmWSxPQS9CeUIsR0FnQ1YsVUE4Qk0sZUE1QmpDLE9BakNvQyxPQThEbEMsMkJBN0RZLFlBQ0MsYUFDRyxnQkFDbEIiLCJmaWxlIjoiQzpcXFVzZXJzXFwwMTBcXE5leHRQcm9qZWN0c1xcRWRlbFxcY29tcG9uZW50c1xcTXlMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUm91dGVQcm9ncmVzcyBmcm9tICcuL1JvdXRlUHJvZ3Jlc3MnXHJcbmltcG9ydCBNYWluTWVudSBmcm9tICcuL01haW5NZW51J1xyXG5pbXBvcnQgU3RhcnNTYW5kIGZyb20gJy4vU3RhcnNTYW5kJ1xyXG5pbXBvcnQgT3BlbmluZ0FuaW1hdGlvbiBmcm9tICcuL09wZW5pbmdBbmltYXRpb24nXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jbGFzcyBMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzdHlsZTp7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgwJSwgMCUpIG1hdHJpeCgxLCAwLCAwLCAxLCAwLCAwKVwiLFxyXG4gICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCJcclxuICAgICAgfSxcclxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uWTogMCxcclxuICAgICAgb0FuaTogdGhpcy5wcm9wcy5vQW5pXHJcbiAgICB9O1xyXG4gICAgdGhpcy50cmFuc2Zvcm0gPSB0aGlzLnRyYW5zZm9ybS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuICB0cmFuc2Zvcm0oKXtcclxuICAgIHRoaXMuc2V0U3RhdGUoKHByZXYpPT57XHJcbiAgICAgIHJldHVybiBwcmV2LnN0eWxlLnRyYW5zZm9ybSA9PT0gXCJ0cmFuc2xhdGUoMCUsIDAlKSBtYXRyaXgoMSwgMCwgMCwgMSwgMCwgMClcIiA/XHJcbiAgICAgICAge3N0eWxlOiB7dHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgyMCUsIDAlKSBtYXRyaXgoMC41LCAwLCAwLCAwLjUsIDAsIDApXCIsIHBvc2l0aW9uOiBcImZpeGVkXCJ9fVxyXG4gICAgICAgIDogXHJcbiAgICAgICAge3N0eWxlOiB7dHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgwJSwgMCUpIG1hdHJpeCgxLCAwLCAwLCAxLCAwLCAwKVwiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwifX0gIFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gICAgcmVuZGVyICgpe1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgIHt0aGlzLnN0YXRlLm9BbmkgPyA8T3BlbmluZ0FuaW1hdGlvbiBhbmlFbmQ9eygpPT57dGhpcy5zZXRTdGF0ZSh7b0FuaTogZmFsc2V9KX19IC8+IDogbnVsbH1cclxuICAgICAgICAgIDxSb3V0ZVByb2dyZXNzIC8+XHJcbiAgICAgICAgICA8TWFpbk1lbnUgdHJhbnNmb3JtYXRpb249e3RoaXMudHJhbnNmb3JtfSAvPlxyXG4gICAgICAgICAgPGRpdiBpZD1cIndpbmRvd1wiIHN0eWxlPXtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdGhpcy5zdGF0ZS5zdHlsZS50cmFuc2Zvcm0sXHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHRoaXMuc3RhdGUuc3R5bGUucG9zaXRpb24sXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcIjYwJSBcIit0aGlzLnN0YXRlLmJhY2tncm91bmRQb3NpdGlvblkrXCJweFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PjxTdGFyc1NhbmQgcGFydGljbGVzQW1vdW50PXs1MH0gZmlsbFN0eWxlPVwiIzg4ODg4OFwiIGJhY2tncm91bmQ9XCJ0cmFuc3BhcmVudFwiIHNwZWVkPXswfSAvPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7Lyo8U3RhcnNTYW5kIHBhcnRpY2xlc0Ftb3VudD17NTB9IGZpbGxTdHlsZT1cIiM0NDQ0NDRcIiBiYWNrZ3JvdW5kPVwiI2ZmZmZmZlwiIHNwZWVkPXsxfSAvPiM0NDg4ZmYgIzAwMDAwMCovfVxyXG4gICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgICAgICAgICAgYm9keXsgXHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiLWFwcGxlLXN5c3RlbVwiLCBcIkJsaW5rTWFjU3lzdGVtRm9udFwiLCBcIlNlZ29lIFVJXCIsIFwiUm9ib3RvXCIsIFwiT3h5Z2VuXCIsIFwiVWJ1bnR1XCIsIFwiQ2FudGFyZWxsXCIsIFwiRmlyYSBTYW5zXCIsIFwiRHJvaWQgU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIFwic2Fucy1zZXJpZlwiO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB1bHtcclxuICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29kZXtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogc291cmNlLWNvZGUtcHJvLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYm9keSA+IGRpdntcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTY5OTljO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZGRkZGRkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICN3aW5kb3cge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbjtcclxuICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNDA2MDg7Ly8xOTFhMWJcclxuICAgICAgICAgICAgICAvL2JhY2tncm91bmQ6IHVybCgvc3RhdGljL3Rlc3RkLnBuZykgNjAlIDAgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICN3aW5kb3cgPiBkaXY6bnRoLWNoaWxkKDEpe1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAvL2JhY2tncm91bmQ6IHVybCgvc3RhdGljL2NoZXJyeS1ibG9zc29tLXBldGFscy12YXJ0aWNhbC5wbmcpIDYwJSAwIG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KXtcclxuICAgICAgICAgICAgICAjd2luZG93ID4gZGl2Om50aC1jaGlsZCgxKTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDAuOGVtO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjd2luZG93ID4gZGl2Om50aC1jaGlsZCgxKTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2t7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjd2luZG93ID4gZGl2Om50aC1jaGlsZCgxKTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI3dpbmRvdyA+IGRpdjpudGgtY2hpbGQoMSk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLXBpZWNlIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICN3aW5kb3d7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpIG1hdHJpeCgxLCAwLCAwLCAxLCAwLCAwKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICN3aW5kb3cgPiBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL2JnX21lc2hfYmxhY2sucG5nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7Il19 */\n/*@ sourceURL=C:\\Users\\010\\NextProjects\\Edel\\components\\MyLayout.js */",
        __self: this
      }));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\010\\NextProjects\\Edel\\components\\OpeningAnimation.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var OpeningAnimation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(OpeningAnimation, _React$Component);

  function OpeningAnimation(props) {
    var _this;

    _classCallCheck(this, OpeningAnimation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OpeningAnimation).call(this, props));
    _this.state = {};
    _this.cancel = _this.cancel.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(OpeningAnimation, [{
    key: "cancel",
    value: function cancel() {
      this.props.aniEnd();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      setTimeout(this.cancel, 2500);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "wrapper",
        className: "jsx-3641025538",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3641025538",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3641025538",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3641025538",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3641025538",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3641025538",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "static/logo.svg",
        className: "jsx-3641025538",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3641025538",
        css: "img.jsx-3641025538{width:80%;max-width:400px;margin:auto;z-index:10000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-animation:fade-jsx-3641025538 0.1s linear 0.2s 5 forwards;animation:fade-jsx-3641025538 0.1s linear 0.2s 5 forwards;}#wrapper.jsx-3641025538{position:fixed;height:100vh;width:100vw;z-index:1000000000;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:#404040;}#wrapper.jsx-3641025538>div.jsx-3641025538{width:0%;height:100%;position:absolute;top:0;left:0;}#wrapper.jsx-3641025538>div.jsx-3641025538:nth-child(1){background-color:#353535;z-index:1;-webkit-animation:charge-jsx-3641025538 0.4s linear 1s forwards;animation:charge-jsx-3641025538 0.4s linear 1s forwards;}#wrapper.jsx-3641025538>div.jsx-3641025538:nth-child(2){background-color:#303030;z-index:2;-webkit-animation:charge-jsx-3641025538 0.4s linear 1.2s forwards;animation:charge-jsx-3641025538 0.4s linear 1.2s forwards;}#wrapper.jsx-3641025538>div.jsx-3641025538:nth-child(3){background-color:#252525;z-index:3;-webkit-animation:charge-jsx-3641025538 0.4s linear 1.4s forwards;animation:charge-jsx-3641025538 0.4s linear 1.4s forwards;}#wrapper.jsx-3641025538>div.jsx-3641025538:nth-child(4){background-color:#202020;z-index:4;-webkit-animation:charge-jsx-3641025538 0.4s linear 1.6s forwards;animation:charge-jsx-3641025538 0.4s linear 1.6s forwards;}#wrapper.jsx-3641025538>div.jsx-3641025538:nth-child(5){background-color:#151515;z-index:5;-webkit-animation:charge-jsx-3641025538 0.4s linear 1.8s forwards;animation:charge-jsx-3641025538 0.4s linear 1.8s forwards;}@-webkit-keyframes fade-jsx-3641025538{0%{opacity:0;}100%{opacity:1;}}@keyframes fade-jsx-3641025538{0%{opacity:0;}100%{opacity:1;}}@-webkit-keyframes charge-jsx-3641025538{0%{width:0%;}100%{width:100%;}}@keyframes charge-jsx-3641025538{0%{width:0%;}100%{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcMDEwXFxOZXh0UHJvamVjdHNcXEVkZWxcXGNvbXBvbmVudHNcXE9wZW5pbmdBbmltYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEJzQixBQUd5QixBQVFLLEFBUU4sQUFPZ0IsQUFLQSxBQUtBLEFBS0EsQUFLQSxBQU1YLEFBR0EsQUFLSCxBQUdFLFNBM0NELEFBeUNaLENBekRnQixBQWlEaEIsQUFHQSxDQVFBLElBcERhLE1BU0ssSUFNUixBQUtBLEFBS0EsQUFLQSxBQUtBLENBMUNFLEVBUUEsT0FlNkIsQUFLRSxBQUtBLEFBS0EsQUFLQSxHQTFDN0IsQ0FnQlIsQ0FSYSxLQVNiLE9BaEJXLEFBaUJuQixPQVRlLDBFQUNZLElBUmtCLGtCQXFCN0MsR0FaQSxDQWlCQSxBQUtBLEFBS0EsQUFLQSxzR0F4Q0EiLCJmaWxlIjoiQzpcXFVzZXJzXFwwMTBcXE5leHRQcm9qZWN0c1xcRWRlbFxcY29tcG9uZW50c1xcT3BlbmluZ0FuaW1hdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBPcGVuaW5nQW5pbWF0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgIFxyXG4gICAgfTtcclxuICAgIHRoaXMuY2FuY2VsID0gdGhpcy5jYW5jZWwuYmluZCh0aGlzKTtcclxuICB9XHJcbiAgY2FuY2VsKCl7XHJcbiAgICB0aGlzLnByb3BzLmFuaUVuZCgpO1xyXG4gIH1cclxuICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgc2V0VGltZW91dCh0aGlzLmNhbmNlbCwgMjUwMCk7XHJcbiAgfVxyXG5cclxuICAgIHJlbmRlciAoKXtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgIDxkaXY+PC9kaXY+XHJcblxyXG4gICAgICAgICAgXHJcblxyXG4gICAgICAgICAgPGltZyBzcmM9XCJzdGF0aWMvbG9nby5zdmdcIiAvPlxyXG5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgei1pbmRleDogMTAwMDA7XHJcbiAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlIDAuMXMgbGluZWFyIDAuMnMgNSBmb3J3YXJkcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjd3JhcHBlcntcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgICAgICAgei1pbmRleDogMTAwMDAwMDAwMDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0MDQwNDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3dyYXBwZXIgPiBkaXZ7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgIGxlZnQgMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjd3JhcHBlciA+IGRpdjpudGgtY2hpbGQoMSl7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM1MzUzNTtcclxuICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogY2hhcmdlIDAuNHMgbGluZWFyIDFzIGZvcndhcmRzOyAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3dyYXBwZXIgPiBkaXY6bnRoLWNoaWxkKDIpe1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XHJcbiAgICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgICBhbmltYXRpb246IGNoYXJnZSAwLjRzIGxpbmVhciAxLjJzIGZvcndhcmRzOyAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3dyYXBwZXIgPiBkaXY6bnRoLWNoaWxkKDMpe1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNTI1MjU7XHJcbiAgICAgICAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICAgICAgICBhbmltYXRpb246IGNoYXJnZSAwLjRzIGxpbmVhciAxLjRzIGZvcndhcmRzOyAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3dyYXBwZXIgPiBkaXY6bnRoLWNoaWxkKDQpe1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XHJcbiAgICAgICAgICAgICAgei1pbmRleDogNDtcclxuICAgICAgICAgICAgICBhbmltYXRpb246IGNoYXJnZSAwLjRzIGxpbmVhciAxLjZzIGZvcndhcmRzOyAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3dyYXBwZXIgPiBkaXY6bnRoLWNoaWxkKDUpe1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTE1MTU7XHJcbiAgICAgICAgICAgICAgei1pbmRleDogNTtcclxuICAgICAgICAgICAgICBhbmltYXRpb246IGNoYXJnZSAwLjRzIGxpbmVhciAxLjhzIGZvcndhcmRzOyAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlIHtcclxuICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAa2V5ZnJhbWVzIGNoYXJnZXtcclxuICAgICAgICAgICAgICAwJXtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAwJTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgMTAwJXtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcGVuaW5nQW5pbWF0aW9uOyJdfQ== */\n/*@ sourceURL=C:\\Users\\010\\NextProjects\\Edel\\components\\OpeningAnimation.js */",
        __self: this
      }));
    }
  }]);

  return OpeningAnimation;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\010\\NextProjects\\Edel\\components\\RouteProgress.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var RouteProgress =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RouteProgress, _React$Component);

  function RouteProgress(props) {
    var _this;

    _classCallCheck(this, RouteProgress);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RouteProgress).call(this, props));
    _this.state = {
      color: "#2299DD",
      showAfterMs: 100,
      width: 0,
      max_width: Math.round(Math.random() * (65 - 50) + 50)
    };
    _this.timer = null;
    _this.stimer = null;
    _this.ltimer = null;
    _this.do = false;
    _this.routeChangeStart = _this.routeChangeStart.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.routeChangeEnd = _this.routeChangeEnd.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.LoadingStart = _this.LoadingStart.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.LoadingEnd = _this.LoadingEnd.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(RouteProgress, [{
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
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on('routeChangeStart', this.routeChangeStart);
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on('routeChangeComplete', this.routeChangeEnd);
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on('routeChangeError', this.routeChangeEnd);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timer);
      clearTimeout(this.stimer);
      clearTimeout(this.ltimer);
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.off('routeChangeStart', this.routeChangeStart);
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.off('routeChangeComplete', this.routeChangeEnd);
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.off('routeChangeError', this.routeChangeEnd);
    }
  }, {
    key: "render",
    value: function render() {
      return this.state.width > 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "routerogress",
        className: "jsx-3989865005",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          width: this.state.width + "%"
        },
        className: "jsx-3989865005" + " " + "bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3989865005",
        css: "#routerogress.jsx-3989865005{pointer-events:none;position:fixed;top:0;left:0;width:100%;height:3px;z-index:1000000;background:azure;}.bar.jsx-3989865005{background:blue;position:absolute;top:0;left:0;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcMDEwXFxOZXh0UHJvamVjdHNcXEVkZWxcXGNvbXBvbmVudHNcXFJvdXRlUHJvZ3Jlc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUZrQixBQUdpQyxBQVVKLGdCQUNFLElBVkgsY0FXVCxDQVZBLEtBV0MsQ0FWQSxNQVdLLENBVkQsV0FDQSxBQVViLFdBVGtCLGdCQUNDLGlCQUNuQiIsImZpbGUiOiJDOlxcVXNlcnNcXDAxMFxcTmV4dFByb2plY3RzXFxFZGVsXFxjb21wb25lbnRzXFxSb3V0ZVByb2dyZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuXHJcbmNsYXNzIFJvdXRlUHJvZ3Jlc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgIFx0c3VwZXIocHJvcHMpO1xyXG4gICAgICBcdHRoaXMuc3RhdGUgPSB7XHJcbiAgICBcdFx0Y29sb3I6IFwiIzIyOTlERFwiLFxyXG4gICAgICAgIFx0c2hvd0FmdGVyTXM6IDEwMCxcclxuICAgICAgICBcdHdpZHRoOiAwLFxyXG4gICAgICAgIFx0bWF4X3dpZHRoOiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqKDY1IC0gNTApICsgNTApXHJcbiAgICBcdH07XHJcbiAgICBcdHRoaXMudGltZXIgPSBudWxsO1xyXG4gICAgXHR0aGlzLnN0aW1lciA9IG51bGw7XHJcbiAgICBcdHRoaXMubHRpbWVyID0gbnVsbDtcclxuICAgIFx0dGhpcy5kbyA9IGZhbHNlO1xyXG4gICAgXHR0aGlzLnJvdXRlQ2hhbmdlU3RhcnQgPSB0aGlzLnJvdXRlQ2hhbmdlU3RhcnQuYmluZCh0aGlzKTtcclxuICAgIFx0dGhpcy5yb3V0ZUNoYW5nZUVuZCA9IHRoaXMucm91dGVDaGFuZ2VFbmQuYmluZCh0aGlzKTtcclxuICAgIFx0dGhpcy5Mb2FkaW5nU3RhcnQgPSB0aGlzLkxvYWRpbmdTdGFydC5iaW5kKHRoaXMpO1xyXG4gICAgXHR0aGlzLkxvYWRpbmdFbmQgPSB0aGlzLkxvYWRpbmdFbmQuYmluZCh0aGlzKTtcclxuICBcdH1cclxuXHJcbiAgcm91dGVDaGFuZ2VTdGFydCgpIHtcclxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcclxuICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICBcdHRoaXMuc2V0U3RhdGUoe3dpZHRoOiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqMjArMTApLCBtYXhfd2lkdGg6IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSooNjUgLSA1MCkgKyA1MCl9KTtcclxuICAgIFx0dGhpcy5Mb2FkaW5nU3RhcnQoKTtcclxuICAgIFx0dGhpcy5kbyA9IHRydWU7XHJcbiAgICB9LCB0aGlzLnN0YXRlLnNob3dBZnRlck1zKTtcclxuXHJcbiAgICBjbGVhclRpbWVvdXQodGhpcy5zdGltZXIpO1xyXG4gICAgdGhpcy5zdGltZXIgPSBzZXRUaW1lb3V0KCgpPT57dGhpcy5zZXRTdGF0ZSh7d2lkdGg6IE1hdGgucmFuZG9tKCkqKDkwIC0gNzUpICsgNzV9KX0sIDE1MDAwKTtcclxuICB9XHJcblxyXG4gIHJvdXRlQ2hhbmdlRW5kKCkge1xyXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xyXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuc3RpbWVyKTtcclxuICAgIGNsZWFyVGltZW91dCh0aGlzLmx0aW1lcik7XHJcbiAgICBpZih0aGlzLmRvKXtcclxuICBcdFx0dGhpcy5Mb2FkaW5nRW5kKCk7XHJcbiAgXHRcdHRoaXMuZG8gPSBmYWxzZTtcclxuICBcdH1cclxuICB9XHJcblxyXG4gIExvYWRpbmdTdGFydCgpIHtcclxuICBcdHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+IHtcclxuICAgICAgIHJldHVybiB7d2lkdGg6IHByZXZTdGF0ZS53aWR0aCA8IHByZXZTdGF0ZS5tYXhfd2lkdGggPyAocHJldlN0YXRlLndpZHRoICsgTWF0aC5yYW5kb20oKSozKzEpIDogcHJldlN0YXRlLndpZHRofVxyXG4gICAgfSk7XHJcbiAgICBpZih0aGlzLnN0YXRlLndpZHRoIDwgdGhpcy5zdGF0ZS5tYXhfd2lkdGgpe1xyXG4gICAgXHR0aGlzLmx0aW1lciA9IHNldFRpbWVvdXQodGhpcy5Mb2FkaW5nU3RhcnQsIDgwMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBMb2FkaW5nRW5kKCkge1xyXG4gIFx0dGhpcy5zZXRTdGF0ZSh7d2lkdGg6IDEwMH0pO1xyXG4gIFx0c2V0VGltZW91dCgoKT0+e1xyXG4gIFx0XHR0aGlzLnNldFN0YXRlKHt3aWR0aDogMH0pXHJcbiAgXHR9LCA1MCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgdGhpcy5yb3V0ZUNoYW5nZVN0YXJ0KTtcclxuICAgIFJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCB0aGlzLnJvdXRlQ2hhbmdlRW5kKTtcclxuICAgIFJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlRXJyb3InLCB0aGlzLnJvdXRlQ2hhbmdlRW5kKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xyXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuc3RpbWVyKTtcclxuICAgIGNsZWFyVGltZW91dCh0aGlzLmx0aW1lcik7XHJcbiAgICBSb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VTdGFydCcsIHRoaXMucm91dGVDaGFuZ2VTdGFydCk7XHJcbiAgICBSb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VDb21wbGV0ZScsIHRoaXMucm91dGVDaGFuZ2VFbmQpO1xyXG4gICAgUm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlRXJyb3InLCB0aGlzLnJvdXRlQ2hhbmdlRW5kKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgXHR0aGlzLnN0YXRlLndpZHRoID4gMCA/XHJcbiAgICBcdDxkaXYgaWQ9XCJyb3V0ZXJvZ3Jlc3NcIj5cclxuICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJhclwiIHN0eWxlPXt7d2lkdGg6IHRoaXMuc3RhdGUud2lkdGgrXCIlXCJ9fT48L2Rpdj5cclxuICAgIFx0XHQ8c3R5bGUganN4PntgXHJcblx0XHQgICAgICAgICNyb3V0ZXJvZ3Jlc3Mge1xyXG5cdFx0ICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5cdFx0ICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdCAgICAgICAgICB0b3A6IDA7XHJcblx0XHQgICAgICAgICAgbGVmdDogMDtcclxuXHRcdCAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHRcdCAgICAgICAgICBoZWlnaHQ6IDNweDtcclxuXHRcdCAgICAgICAgICB6LWluZGV4OiAxMDAwMDAwO1xyXG5cdFx0ICAgICAgICAgIGJhY2tncm91bmQ6IGF6dXJlO1xyXG5cdFx0ICAgICAgICB9XHJcblx0XHQgICAgICAgIC5iYXIge1xyXG5cdFx0ICAgICAgICAgIGJhY2tncm91bmQ6IGJsdWU7XHJcblx0XHQgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0ICAgICAgICAgIHRvcDogMDtcclxuXHRcdCAgICAgICAgICBsZWZ0OiAwO1xyXG5cdFx0ICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuXHRcdCAgICAgICAgfVxyXG5cdCAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgXHQ8L2Rpdj5cclxuICAgIFx0OlxyXG4gICAgXHRudWxsXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm91dGVQcm9ncmVzczsiXX0= */\n/*@ sourceURL=C:\\Users\\010\\NextProjects\\Edel\\components\\RouteProgress.js */",
        __self: this
      })) : null;
    }
  }]);

  return RouteProgress;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\010\\NextProjects\\Edel\\components\\StarsSand.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var StarsSand =
/*#__PURE__*/
function (_React$Component) {
  _inherits(StarsSand, _React$Component);

  function StarsSand(props) {
    var _this;

    _classCallCheck(this, StarsSand);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StarsSand).call(this, props));
    _this.state = {};
    _this.canvasRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    _this.animation = _this.animation.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.resize = _this.resize.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.particlesSize = 1;
    return _this;
  }

  _createClass(StarsSand, [{
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
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3282957836", [this.props.background]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("canvas", {
        ref: this.canvasRef,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3282957836", [this.props.background]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3282957836",
        css: "div.__jsx-style-dynamic-selector{position:fixed;height:100vh;width:100vw;top:0;left:0;background:".concat(this.props.background, ";}canvas.__jsx-style-dynamic-selector{height:100%;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcMDEwXFxOZXh0UHJvamVjdHNcXEVkZWxcXGNvbXBvbmVudHNcXFN0YXJzU2FuZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRnNCLEFBRzhCLEFBUUgsWUFDRCxHQVJFLFFBU2YsS0FSYyxZQUNOLE1BQ0MsT0FDaUMsd0NBQzFDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcMDEwXFxOZXh0UHJvamVjdHNcXEVkZWxcXGNvbXBvbmVudHNcXFN0YXJzU2FuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBTdGFyc1NhbmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5jYW52YXNSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIHRoaXMuYW5pbWF0aW9uID0gdGhpcy5hbmltYXRpb24uYmluZCh0aGlzKTtcclxuICAgIHRoaXMucmVzaXplID0gdGhpcy5yZXNpemUuYmluZCh0aGlzKTtcclxuICAgIHRoaXMucGFydGljbGVzU2l6ZSA9IDE7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgdGhpcy5jYW52YXMgPSB0aGlzLmNhbnZhc1JlZi5jdXJyZW50O1xyXG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLmNhbnZhcy5vZmZzZXRXaWR0aDtcclxuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuY2FudmFzLm9mZnNldEhlaWdodDtcclxuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMucHJvcHMuZmlsbFN0eWxlO1xyXG4gICAgdGhpcy5wYXJ0aWNsZXMoKTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemUpO1xyXG4gIH1cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplKTtcclxuICB9XHJcblxyXG4gIHJlc2l6ZSgpe1xyXG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLmNhbnZhcy5vZmZzZXRXaWR0aDtcclxuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuY2FudmFzLm9mZnNldEhlaWdodDtcclxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMucHJvcHMuZmlsbFN0eWxlO1xyXG4gICAgdGhpcy5jb2xsZWN0aW9uID0gW107XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJvcHMucGFydGljbGVzQW1vdW50OyBpKyspIHtcclxuICAgICAgdGhpcy5jb2xsZWN0aW9uW2ldID0ge1xyXG4gICAgICAgIHg6IHRoaXMuY2FudmFzLndpZHRoICogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgKiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgIHZ4OiBNYXRoLnJhbmRvbSgpK3RoaXMucHJvcHMuc3BlZWQsXHJcbiAgICAgICAgdnk6IC0oTWF0aC5yYW5kb20oKSt0aGlzLnByb3BzLnNwZWVkKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBhcnRpY2xlcygpe1xyXG4gICAgdGhpcy5jb2xsZWN0aW9uID0gW107XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJvcHMucGFydGljbGVzQW1vdW50OyBpKyspIHtcclxuICAgICAgdGhpcy5jb2xsZWN0aW9uW2ldID0ge1xyXG4gICAgICAgIHg6IHRoaXMuY2FudmFzLndpZHRoICogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgKiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgIHZ4OiBNYXRoLnJhbmRvbSgpK3RoaXMucHJvcHMuc3BlZWQsXHJcbiAgICAgICAgdnk6IC0oTWF0aC5yYW5kb20oKSt0aGlzLnByb3BzLnNwZWVkKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmFuaW1hdGlvbigpO1xyXG4gIH1cclxuICBkcmF3KCl7XHJcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29sbGVjdGlvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgdGhpcy5jdHguYXJjKHRoaXMuY29sbGVjdGlvbltpXS54LCB0aGlzLmNvbGxlY3Rpb25baV0ueSwgdGhpcy5wYXJ0aWNsZXNTaXplLCAwLCBNYXRoLlBJKjIpO1xyXG4gICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcclxuICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgICB0aGlzLmNvbGxlY3Rpb25baV0ueCArPSB0aGlzLmNvbGxlY3Rpb25baV0udng7XHJcbiAgICAgIHRoaXMuY29sbGVjdGlvbltpXS55ICs9IHRoaXMuY29sbGVjdGlvbltpXS52eTtcclxuICAgICAgaWYodGhpcy5jb2xsZWN0aW9uW2ldLnggPiB0aGlzLmNhbnZhcy53aWR0aCl7XHJcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uW2ldLnggPSAtNDtcclxuICAgICAgICB0aGlzLmNvbGxlY3Rpb25baV0ueSA9IHRoaXMuY2FudmFzLmhlaWdodCAqIE1hdGgucmFuZG9tKCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYodGhpcy5jb2xsZWN0aW9uW2ldLnkgPCAwKXtcclxuICAgICAgICB0aGlzLmNvbGxlY3Rpb25baV0ueCA9IHRoaXMuY2FudmFzLndpZHRoICogTWF0aC5yYW5kb20oKTtcclxuICAgICAgICB0aGlzLmNvbGxlY3Rpb25baV0ueSA9IHRoaXMuY2FudmFzLmhlaWdodCs0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFuaW1hdGlvbigpe1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uKTtcclxuICAgIHRoaXMuZHJhdygpO1xyXG4gIH1cclxuICAgIHJlbmRlciAoKXtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGNhbnZhcyByZWY9e3RoaXMuY2FudmFzUmVmfT48L2NhbnZhcz5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgZGl2e1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoaXMucHJvcHMuYmFja2dyb3VuZH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FudmFze1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGFyc1NhbmQ7Il19 */\n/*@ sourceURL=C:\\Users\\010\\NextProjects\\Edel\\components\\StarsSand.js */"),
        dynamic: [this.props.background],
        __self: this
      }));
    }
  }]);

  return StarsSand;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (StarsSand);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Link */ "./components/Link.js");
var _jsxFileName = "C:\\Users\\010\\NextProjects\\Edel\\pages\\index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));
    _this.state = {
      words: ['Welcome', 'Bienvenu', 'ようこそ', 'Willkommen', 'Hoşgeldiniz'],
      word: 0,
      letter: 0,
      forwards: true
    };
    _this.timer = null;
    _this.animate = _this.animate.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Index, [{
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
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MyLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
        oAni: this.props.oAni,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "HOME")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2752042228" + " " + "Home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "welcome",
        className: "jsx-2752042228",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-2752042228",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, mot, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        id: "typer",
        className: "jsx-2752042228",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "jsx-2752042228" + " " + "intro",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2752042228",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-2752042228",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Boussouf Nabil")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2752042228",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-2752042228",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Dev Story"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
        className: "jsx-2752042228",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-2752042228",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "Born in 1998, living in Meknes Morocco, freelance developer. SPA, SSR development with JavaScript, have a way with design and 2D animation."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-2752042228",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "Learn more."))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2752042228",
        css: ".intro.jsx-2752042228 div.jsx-2752042228{padding:3% 10% 3% 10%;}.intro.jsx-2752042228 div.jsx-2752042228:first-child h2.jsx-2752042228{margin:0;}.intro.jsx-2752042228 div.jsx-2752042228:nth-child(2) h3.jsx-2752042228{color:#2f4f4fdb;}.intro.jsx-2752042228{width:80%;max-width:850px;}.intro.jsx-2752042228 article.jsx-2752042228{padding:1% 0% 1% 5%;font-size:1.15rem;font-family:Source Sans Pro,sans-serif;}@media only screen and (max-width:600px){.intro.jsx-2752042228{width:100%;}.intro.jsx-2752042228 div.jsx-2752042228{padding:3% 1% 3% 0%;}}.Home.jsx-2752042228{width:100%;height:1000px;}#welcome.jsx-2752042228{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:233px;}#welcome.jsx-2752042228 h2.jsx-2752042228{margin:80px auto;text-align:center;font-size:3rem;font-weight:400;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}#welcome.jsx-2752042228 #typer.jsx-2752042228{width:2px;background-color:#666666;display:block;opacity:0;-webkit-animation:fade-jsx-2752042228 0.4s linear 0s infinite forwards;animation:fade-jsx-2752042228 0.4s linear 0s infinite forwards;}@-webkit-keyframes fade-jsx-2752042228{0%{opacity:0;}50%{opacity:1;}100%{opacity:0;}}@keyframes fade-jsx-2752042228{0%{opacity:0;}50%{opacity:1;}100%{opacity:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcMDEwXFxOZXh0UHJvamVjdHNcXEVkZWxcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRTRCLEFBRytDLEFBR2IsQUFHTyxBQUdOLEFBSVUsQUFNTCxBQUdTLEFBSWIsQUFLRSxBQUtJLEFBUVAsQUFTSSxBQUdBLEFBR0EsU0F2RGxCLENBTW9CLEFBbUNTLEFBU3pCLEFBR0EsQUFHQSxDQXhDQSxBQU9jLEtBcEJsQixDQThCc0IsR0F2QkEsQUFTbEIsRUF0QkosR0EyQkEsQ0FqQkEsU0EyQm1CLEFBUUQsR0EvQjBCLFdBZ0M5QixDQVJNLFNBU2dDLE9BUm5DLFFBUkEsR0FoQmpCLFVBaUJBLHFEQVFBLHFEQVFBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcMDEwXFxOZXh0UHJvamVjdHNcXEVkZWxcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJy4uL2NvbXBvbmVudHMvTGluaydcclxuXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIFxyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgd29yZHM6IFsnV2VsY29tZScsICdCaWVudmVudScsICfjgojjgYbjgZPjgZ0nLCAnV2lsbGtvbW1lbicsICdIb8WfZ2VsZGluaXonXSxcclxuICAgICAgd29yZDogMCxcclxuICAgICAgbGV0dGVyOiAwLFxyXG4gICAgICBmb3J3YXJkczogdHJ1ZVxyXG4gICAgICAgIH07XHJcbiAgICB0aGlzLnRpbWVyID0gbnVsbDtcclxuICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICB0aGlzLmFuaW1hdGUoKTtcclxuICB9XHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcclxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcclxuICB9XHJcbiAgYW5pbWF0ZSgpe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSgocHJldik9PntcclxuICAgICAgaWYocHJldi5sZXR0ZXI9PT1wcmV2LndvcmRzW3ByZXYud29yZF0ubGVuZ3RoLTEgJiYgcHJldi5mb3J3YXJkcyl7XHJcbiAgICAgICAgcmV0dXJuIHtmb3J3YXJkczogZmFsc2V9XHJcbiAgICAgIH1cclxuICAgICAgaWYocHJldi5sZXR0ZXIgPT09IDAgJiYgIXByZXYuZm9yd2FyZHMpe1xyXG4gICAgICAgIHJldHVybiB7d29yZDogcHJldi53b3JkPT09cHJldi53b3Jkcy5sZW5ndGgtMSA/IDAgOiBwcmV2LndvcmQrMSwgZm9yd2FyZHM6IHRydWV9XHJcbiAgICAgIH1cclxuICAgICAgaWYocHJldi5mb3J3YXJkcyl7XHJcbiAgICAgICAgcmV0dXJuIHtsZXR0ZXI6IHByZXYubGV0dGVyKzF9XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiB7bGV0dGVyOiBwcmV2LmxldHRlci0xfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KHRoaXMuYW5pbWF0ZSwgdGhpcy5zdGF0ZS5sZXR0ZXI9PT10aGlzLnN0YXRlLndvcmRzW3RoaXMuc3RhdGUud29yZF0ubGVuZ3RoLTEgJiYgdGhpcy5zdGF0ZS5mb3J3YXJkcyA/IDMwMDAgOiAyMDApO1xyXG4gIH1cclxuXHJcbiAgICByZW5kZXIgKCl7XHJcbiAgICAgICAgdmFyIG1vdCA9IHRoaXMuc3RhdGUud29yZHNbdGhpcy5zdGF0ZS53b3JkXS5zbGljZSgwLCB0aGlzLnN0YXRlLmxldHRlcisxKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPExheW91dCBvQW5pPXt0aGlzLnByb3BzLm9Bbml9PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgPHRpdGxlPkhPTUU8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cIkhvbWVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ3ZWxjb21lXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMj57bW90fTxzcGFuIGlkPVwidHlwZXJcIj48L3NwYW4+PC9oMj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaW50cm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+Qm91c3NvdWYgTmFiaWw8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5EZXYgU3Rvcnk8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkJvcm4gaW4gMTk5OCwgbGl2aW5nIGluIE1la25lcyBNb3JvY2NvLCBmcmVlbGFuY2UgZGV2ZWxvcGVyLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU1BBLCBTU1IgZGV2ZWxvcG1lbnQgd2l0aCBKYXZhU2NyaXB0LCBoYXZlIGEgd2F5IHdpdGggZGVzaWduIGFuZCAyRCBhbmltYXRpb24uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPjxhPkxlYXJuIG1vcmUuPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgIC5pbnRybyBkaXZ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMlIDEwJSAzJSAxMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5pbnRybyBkaXY6Zmlyc3QtY2hpbGQgaDJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmludHJvIGRpdjpudGgtY2hpbGQoMikgaDN7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMmY0ZjRmZGI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5pbnRyb3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA4NTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmludHJvIGFydGljbGV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDElIDAlIDElIDUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMTVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBTb3VyY2UgU2FucyBQcm8sIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW50cm97XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW50cm8gZGl2e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMyUgMSUgMyUgMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkhvbWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjd2VsY29tZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjMzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAjd2VsY29tZSBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogODBweCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICN3ZWxjb21lICN0eXBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjY2NjY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGZhZGUgMC40cyBsaW5lYXIgMHMgaW5maW5pdGUgZm9yd2FyZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDUwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il19 */\n/*@ sourceURL=C:\\Users\\010\\NextProjects\\Edel\\pages\\index.js */",
        __self: this
      })));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map