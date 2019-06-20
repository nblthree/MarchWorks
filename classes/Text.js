class Text {
  constructor(canvas, text, fontSize=20, fontFamily="Georgia", fillStyleActive="#fff", fillStyleUnactive="#ccc", hz=5) {
    this.canvas = canvas
    this.ctx = this.canvas.getContext('2d')
    this.text = text
    this.fontSize = fontSize
    this.fontFamily = fontFamily
    this.fillStyleActive = fillStyleActive
    this.fillStyleUnactive = fillStyleUnactive 
    this.fillStyle = fillStyleActive
    this.font = this.fontSize + "px " + this.fontFamily
    this.hz = hz

    this.ctx.font = this.font
    this.ctx.fillStyle = this.fillStyle
    this.canvas.width = this.ctx.measureText(this.text).width
    this.canvas.height = this.fontSize

    this.write()
    this.startAnimation()
  }
  write(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.ctx.font = this.font
    this.ctx.fillStyle = this.fillStyle
    this.ctx.fillText(this.text, 0, this.fontSize*3/4+2);

    this.data = this.getPixels();
    this.ctx.putImageData(this.data, 0, 0);

  }

  reWrite(){
    this.ctx.putImageData(this.data, 0, 0);
    setTimeout(this.startAnimation.bind(this), Math.floor(Math.random()*(1000 - 400) + 400))
  }

  animate(){
    var shift = Math.floor(Math.random(10 - 3) + 3), pos = Math.random().toFixed(1);
    if(pos < 0.1){
      pos = 0.1;
    }else if(pos > 0.7){
      pos = 0.7;
    }
    var newData = this.getPixels(pos);
    const data = Object.assign([], newData.data);
    if(Math.random() < 0.5){
      for (let i=0; i<data.length; i++) {
        newData.data[i] = data[i-4*shift<0 ? data.length+(i-4*shift) : i-4*shift];
      }
    }else{
      for (let i=0; i<data.length; i++) {
        newData.data[i] = data[i+4*shift<data.length ? i+4*shift : (i+4*shift) - data.length];
      }
    }
    this.ctx.putImageData(newData, 0, 0);
  }

  startAnimation(){
    if(!this.canvas.parentElement.className.includes('is-active')){
      this.fillStyle = this.fillStyleUnactive
      this.write()
      for (let i = 0; i < this.hz; i++) {
        this.animate()
      }
    }else{
      this.fillStyle = this.fillStyleActive
      this.write()
    }
    setTimeout(this.reWrite.bind(this), 100)
  }

  getPixels(o=1) {
    return this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height*o);
  }

  setColors(c1, c2){
    this.fillStyleActive = c1
    this.fillStyleUnactive = c2 
    this.fillStyle = this.fillStyleActive
    this.ctx.fillStyle = this.fillStyle
  }
}

export default Text;