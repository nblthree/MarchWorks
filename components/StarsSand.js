import React from 'react';

class StarsSand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.canvasRef = React.createRef();
    this.animation = this.animation.bind(this);
    this.resize = this.resize.bind(this);
    this.particlesSize = 1;
  }

  componentDidMount() {
    this.canvas = this.canvasRef.current;
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.fillStyle = this.props.fillStyle;
    this.particles();

    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize() {
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
    this.ctx.fillStyle = this.props.fillStyle;
    this.collection = [];
    for (let i = 0; i < this.props.particlesAmount; i++) {
      this.collection[i] = {
        x: this.canvas.width * Math.random(),
        y: this.canvas.height * Math.random(),
        vx: Math.random() + this.props.speed,
        vy: -(Math.random() + this.props.speed),
      };
    }
  }

  particles() {
    this.collection = [];
    for (let i = 0; i < this.props.particlesAmount; i++) {
      this.collection[i] = {
        x: this.canvas.width * Math.random(),
        y: this.canvas.height * Math.random(),
        vx: Math.random() + this.props.speed,
        vy: -(Math.random() + this.props.speed),
      };
    }

    this.animation();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (let i = 0; i < this.collection.length; i++) {
      this.ctx.beginPath();
      this.ctx.arc(
        this.collection[i].x,
        this.collection[i].y,
        this.particlesSize,
        0,
        Math.PI * 2,
      );
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

  animation() {
    requestAnimationFrame(this.animation);
    this.draw();
  }

  render() {
    return (
      <div>
        <canvas ref={this.canvasRef} />
        <style jsx>
          {`
          div {
            position: fixed;
            height: 100vh;
            width: 100vw;
            top: 0;
            left: 0;
            background: ${this.props.background};
          }
          canvas {
            height: 100%;
            width: 100%;
          }
        `}
        </style>
      </div>
    );
  }
}

export default StarsSand;
