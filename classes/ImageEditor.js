class ImageEditor {
  constructor(canvas, src, maxWidth, maxHeight, filter = 'grayscale', args) {
    this.maxWidth = maxWidth;
    this.maxHeight = maxHeight;
    this.src = src;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.data = [];
    this.filter = filter;
    this.args = typeof args === 'string'
      ? args.toLowerCase()
      : typeof args === 'object' || typeof args === 'function'
        ? false
        : args;
    this.originalData = null;
    this.load();

    this.drawOver = this.drawOver.bind(this);
  }

  async load() {
    this.img = await this.addImageProcess(this.src);
    this.onload();
  }

  addImageProcess(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.addEventListener('load', () => resolve(img));
      img.addEventListener('error', reject);
      img.src = src;
    });
  }

  onload(maxw = 0, maxh = 0) {
    if (maxh !== 0 && maxw !== 0) {
      this.maxWidth = maxw;
      this.maxHeight = maxh;
    }

    if (this.img.naturalWidth > this.maxWidth) {
      this.img.height = (this.img.height * this.maxWidth) / this.img.width;
      this.img.width = this.maxWidth;
    }

    if (this.img.height > this.maxHeight) {
      this.img.width = (this.img.width * this.maxHeight) / this.img.height;
      this.img.height = this.maxHeight;
    }

    if (this.filter === 'sobel') {
      this.data = this.sobel();
      this.ctx.putImageData(this.data, 0, 0);
    } else {
      const st = ['reverseRGB'];
      const args = st.includes(this.filter)
        ? ['rg', 'gr', 'rb', 'br', 'bg', 'gb'].includes(this.args)
          ? this.args
          : 'rb'
        : 100;
      this.data = this.filterImage(this.filter, args);
      this.ctx.putImageData(this.data, 0, 0);
    }

    this.drawOver();
  }

  getPixels() {
    this.canvas.width = this.img.width;
    this.canvas.height = this.img.height;
    this.ctx.drawImage(this.img, 0, 0, this.canvas.width, this.canvas.height);
    this.originalData = this.ctx.getImageData(
      0,
      0,
      this.canvas.width,
      this.canvas.height,
    );
    return this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
  }

  filterImage(filter, var_args) {
    const args = [this.getPixels()];
    for (let i = 1; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    return this[filter].apply(null, args);
  }

  grayscale(pixels, args) {
    const d = pixels.data;
    for (let i = 0; i < d.length; i += 4) {
      const r = d[i];
      const g = d[i + 1];
      const b = d[i + 2];
      const v = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      d[i] = d[i + 1] = d[i + 2] = v;
    }

    return pixels;
  }

  drawOver() {
    const num = 1;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.putImageData(this.data, 0, 0);
    this.ctx.strokeStyle = '#999';
    for (let i = 0; i < num; i++) {
      this.ctx.beginPath();
      const pos = {
        x: this.canvas.width * Math.random(),
        y: this.canvas.height * Math.random(),
      };
      this.ctx.moveTo(pos.x, pos.y);
      this.ctx.lineTo(pos.x + Math.random() * (50 - 10) + 10, pos.y);
      this.ctx.stroke();
    }

    requestAnimationFrame(this.drawOver);
  }

  threshold(pixels, threshold = 100) {
    const d = pixels.data;
    for (let i = 0; i < d.length; i += 4) {
      const r = d[i];
      const g = d[i + 1];
      const b = d[i + 2];
      const v = 0.2126 * r + 0.7152 * g + 0.0722 * b >= threshold ? 255 : 0;
      d[i] = d[i + 1] = d[i + 2] = v;
    }

    return pixels;
  }

  reverse(pixels, threshold) {
    const d = pixels.data;
    for (let i = 0; i < d.length; i += 4) {
      d[i] = 255 - d[i];
      d[i + 1] = 255 - d[i + 1];
      d[i + 2] = 255 - d[i + 2];
    }

    return pixels;
  }

  reverseRGB(pixels, rgb = 'rb') {
    const d = pixels.data;
    if (rgb === 'rg' || rgb === 'gr') {
      for (let i = 0; i < d.length - 4; i += 4) {
        var e = d[i];
        d[i] = d[i + 1];
        d[i + 1] = e;
      }
    } else if (rgb === 'rb' || rgb === 'br') {
      for (let i = 0; i < d.length - 4; i += 4) {
        var e = d[i];
        d[i] = d[i + 2];
        d[i + 2] = e;
      }
    } else if (rgb === 'gb' || rgb === 'bg') {
      for (let i = 0; i < d.length - 4; i += 4) {
        var e = d[i + 1];
        d[i + 1] = d[i + 2];
        d[i + 2] = e;
      }
    }

    return pixels;
  }

  sobel() {
    const grayscale = this.filterImage('reverseRGB', 'rb');
    // Note that ImageData values are clamped between 0 and 255, so we need
    // to use a Float32Array for the gradient values because they
    // range between -255 and 255.

    const vertical = this.convolute(grayscale, [
      0,
      0,
      0,
      0,
      Math.random() + 1,
      0,
      0,
      0,
      0,
    ]);
    const horizontal = this.convolute(grayscale, [
      0,
      0,
      0,
      0,
      Math.random() + 1,
      0,
      0,
      0,
      0,
    ]);
    const final_image = this.ctx.createImageData(
      vertical.width,
      vertical.height,
    );
    for (let i = 0; i < final_image.data.length; i += 4) {
      // make the vertical gradient red
      const v = Math.abs(vertical.data[i]);
      final_image.data[i] = v;
      // make the horizontal gradient green
      const h = Math.abs(horizontal.data[i]);
      final_image.data[i + 1] = h;
      // and mix in some blue for aesthetics
      final_image.data[i + 2] = (v + h) / 2;
      final_image.data[i + 3] = 255; // opaque alpha
    }

    return final_image;
  }

  convolute(pixels, weights, opaque) {
    const side = Math.round(Math.sqrt(weights.length));
    const halfSide = Math.floor(side / 2);
    const src = pixels.data;
    const sw = pixels.width;
    const sh = pixels.height;
    // pad output by the convolution matrix
    const w = sw;
    const h = sh;
    const output = this.ctx.createImageData(w, h);
    const dst = output.data;
    // go through the destination image pixels
    const alphaFac = opaque ? 1 : 0;
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const sy = y;
        const sx = x;
        const dstOff = (y * w + x) * 4;
        // calculate the weighed sum of the source image pixels that
        // fall under the convolution matrix
        let r = 0;
        let g = 0;
        let b = 0;
        let a = 0;
        for (let cy = 0; cy < side; cy++) {
          for (let cx = 0; cx < side; cx++) {
            const scy = sy + cy - halfSide;
            const scx = sx + cx - halfSide;
            if (scy >= 0 && scy < sh && scx >= 0 && scx < sw) {
              const srcOff = (scy * sw + scx) * 4;
              const wt = weights[cy * side + cx];
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
}

export default ImageEditor;
