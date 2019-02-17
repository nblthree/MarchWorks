webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./classes/ImageEditor.js":
/*!********************************!*\
  !*** ./classes/ImageEditor.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");







var ImageEditor =
/*#__PURE__*/
function () {
  function ImageEditor(canvas, src, maxWidth, maxHeight) {
    var filter = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'grayscale';
    var args = arguments.length > 5 ? arguments[5] : undefined;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, ImageEditor);

    this.maxWidth = maxWidth;
    this.maxHeight = maxHeight;
    this.src = src;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.data = [];
    this.filter = filter;
    this.args = typeof args === 'string' ? args.toLowerCase() : Object(_babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__["default"])(args) === 'object' || typeof args === 'function' ? false : args;
    this.originalData = null;
    this.load();
    this.drawOver = this.drawOver.bind(this);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(ImageEditor, [{
    key: "load",
    value: function () {
      var _load = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.addImageProcess(this.src);

              case 2:
                this.img = _context.sent;
                this.onload();

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function load() {
        return _load.apply(this, arguments);
      }

      return load;
    }()
  }, {
    key: "addImageProcess",
    value: function addImageProcess(src) {
      return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
        var img = new Image();

        img.onload = function () {
          return resolve(img);
        };

        img.onerror = reject;
        img.src = src;
      });
    }
  }, {
    key: "onload",
    value: function onload() {
      var maxw = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var maxh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (maxh !== 0 && maxw !== 0) {
        this.maxWidth = maxw;
        this.maxHeight = maxh;
      }

      if (this.img.naturalWidth > this.maxWidth) {
        this.img.height = this.img.height * this.maxWidth / this.img.width;
        this.img.width = this.maxWidth;
      }

      if (this.img.height > this.maxHeight) {
        this.img.width = this.img.width * this.maxHeight / this.img.height;
        this.img.height = this.maxHeight;
      }

      if (this.filter === 'sobel') {
        this.data = this.sobel();
        this.ctx.putImageData(this.data, 0, 0);
      } else {
        var st = ['reverseRGB'];
        var args = st.includes(this.filter) ? ['rg', 'gr', 'rb', 'br', 'bg', 'gb'].includes(this.args) ? this.args : 'rb' : 100;
        this.data = this.filterImage(this.filter, args);
        this.ctx.putImageData(this.data, 0, 0);
      }

      this.drawOver();
    }
  }, {
    key: "getPixels",
    value: function getPixels() {
      this.canvas.width = this.img.width;
      this.canvas.height = this.img.height;
      this.ctx.drawImage(this.img, 0, 0, this.canvas.width, this.canvas.height);
      this.originalData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
      return this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
    }
  }, {
    key: "filterImage",
    value: function filterImage(filter, var_args) {
      var args = [this.getPixels()];

      for (var i = 1; i < arguments.length; i++) {
        args.push(arguments[i]);
      }

      return this[filter].apply(null, args);
    }
  }, {
    key: "grayscale",
    value: function grayscale(pixels, args) {
      var d = pixels.data;

      for (var i = 0; i < d.length; i += 4) {
        var r = d[i];
        var g = d[i + 1];
        var b = d[i + 2];
        var v = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        d[i] = d[i + 1] = d[i + 2] = v;
      }

      return pixels;
    }
  }, {
    key: "drawOver",
    value: function drawOver() {
      var num = 1;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.putImageData(this.data, 0, 0);
      this.ctx.strokeStyle = "#999";

      for (var i = 0; i < num; i++) {
        this.ctx.beginPath();
        var pos = {
          x: this.canvas.width * Math.random(),
          y: this.canvas.height * Math.random()
        };
        this.ctx.moveTo(pos.x, pos.y);
        this.ctx.lineTo(pos.x + Math.random() * (50 - 10) + 10, pos.y);
        this.ctx.stroke();
      }

      requestAnimationFrame(this.drawOver);
    }
  }, {
    key: "threshold",
    value: function threshold(pixels) {
      var _threshold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

      var d = pixels.data;

      for (var i = 0; i < d.length; i += 4) {
        var r = d[i];
        var g = d[i + 1];
        var b = d[i + 2];
        var v = 0.2126 * r + 0.7152 * g + 0.0722 * b >= _threshold ? 255 : 0;
        d[i] = d[i + 1] = d[i + 2] = v;
      }

      return pixels;
    }
  }, {
    key: "reverse",
    value: function reverse(pixels, threshold) {
      var d = pixels.data;

      for (var i = 0; i < d.length; i += 4) {
        d[i] = 255 - d[i];
        d[i + 1] = 255 - d[i + 1];
        d[i + 2] = 255 - d[i + 2];
      }

      return pixels;
    }
  }, {
    key: "reverseRGB",
    value: function reverseRGB(pixels) {
      var rgb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rb';
      var d = pixels.data;

      if (rgb === 'rg' || rgb === 'gr') {
        for (var i = 0; i < d.length; i += 4) {
          var e = d[i];
          d[i] = d[i + 1];
          d[i + 1] = e;
        }
      } else if (rgb === 'rb' || rgb === 'br') {
        for (var i = 0; i < d.length; i += 4) {
          var e = d[i];
          d[i] = d[i + 2];
          d[i + 2] = e;
        }
      } else if (rgb === 'gb' || rgb === 'bg') {
        for (var i = 0; i < d.length; i += 4) {
          var e = d[i + 1];
          d[i + 1] = d[i + 2];
          d[i + 2] = e;
        }
      }

      return pixels;
    }
  }, {
    key: "sobel",
    value: function sobel() {
      var grayscale = this.filterImage("reverseRGB", 'rb'); // Note that ImageData values are clamped between 0 and 255, so we need
      // to use a Float32Array for the gradient values because they
      // range between -255 and 255.

      var vertical = this.convolute(grayscale, [0, 0, 0, 0, Math.random() + 1, 0, 0, 0, 0]);
      var horizontal = this.convolute(grayscale, [0, 0, 0, 0, Math.random() + 1, 0, 0, 0, 0]);
      var final_image = this.ctx.createImageData(vertical.width, vertical.height);

      for (var i = 0; i < final_image.data.length; i += 4) {
        // make the vertical gradient red
        var v = Math.abs(vertical.data[i]);
        final_image.data[i] = v; // make the horizontal gradient green

        var h = Math.abs(horizontal.data[i]);
        final_image.data[i + 1] = h; // and mix in some blue for aesthetics

        final_image.data[i + 2] = (v + h) / 2;
        final_image.data[i + 3] = 255; // opaque alpha
      }

      return final_image;
    }
  }, {
    key: "convolute",
    value: function convolute(pixels, weights, opaque) {
      var side = Math.round(Math.sqrt(weights.length));
      var halfSide = Math.floor(side / 2);
      var src = pixels.data;
      var sw = pixels.width;
      var sh = pixels.height; // pad output by the convolution matrix

      var w = sw;
      var h = sh;
      var output = this.ctx.createImageData(w, h);
      var dst = output.data; // go through the destination image pixels

      var alphaFac = opaque ? 1 : 0;

      for (var y = 0; y < h; y++) {
        for (var x = 0; x < w; x++) {
          var sy = y;
          var sx = x;
          var dstOff = (y * w + x) * 4; // calculate the weighed sum of the source image pixels that
          // fall under the convolution matrix

          var r = 0,
              g = 0,
              b = 0,
              a = 0;

          for (var cy = 0; cy < side; cy++) {
            for (var cx = 0; cx < side; cx++) {
              var scy = sy + cy - halfSide;
              var scx = sx + cx - halfSide;

              if (scy >= 0 && scy < sh && scx >= 0 && scx < sw) {
                var srcOff = (scy * sw + scx) * 4;
                var wt = weights[cy * side + cx];
                r += src[srcOff] * wt;
                g += src[srcOff + 1] * wt;
                b += src[srcOff + 2] * wt;
                a += src[srcOff + 3] * wt;
              }
            }
          }

          dst[dstOff] = r;
          dst[dstOff + 1] = g;
          dst[dstOff + 2] = b;
          dst[dstOff + 3] = a + alphaFac * (255 - a);
        }
      }

      return output;
    }
  }]);

  return ImageEditor;
}();

/* harmony default export */ __webpack_exports__["default"] = (ImageEditor);

/***/ })

})
//# sourceMappingURL=about.js.7fe7e6512f443f3057ef.hot-update.js.map