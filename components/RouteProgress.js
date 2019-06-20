import React from 'react';
import Router from 'next/router';

class RouteProgress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '#2299DD',
      showAfterMs: 300,
      width: 0,
      max_width: Math.round(Math.random() * (65 - 50) + 50),
    };
    this.timer = null;
    this.stimer = null;
    this.ltimer = null;
    this.do = false;
    this.routeChangeStart = this.routeChangeStart.bind(this);
    this.routeChangeEnd = this.routeChangeEnd.bind(this);
    this.loadingStart = this.loadingStart.bind(this);
    this.loadingEnd = this.loadingEnd.bind(this);
  }

  routeChangeStart() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.setState({
        width: Math.round(Math.random() * 20 + 10),
        max_width: Math.round(Math.random() * (65 - 50) + 50),
      });
      this.loadingStart();
      this.do = true;
    }, this.state.showAfterMs);

    clearTimeout(this.stimer);
    this.stimer = setTimeout(() => {
      this.setState({ width: Math.random() * (90 - 75) + 75 });
    }, 15000);
  }

  routeChangeEnd() {
    clearTimeout(this.timer);
    clearTimeout(this.stimer);
    clearTimeout(this.ltimer);
    if (this.do) {
      this.loadingEnd();
      this.do = false;
    }
  }

  loadingStart() {
    this.setState(prevState => ({
      width:
          prevState.width < prevState.max_width
            ? prevState.width + Math.random() * 3 + 1
            : prevState.width,
    }));
    if (this.state.width < this.state.max_width) {
      this.ltimer = setTimeout(this.loadingStart, 800);
    }
  }

  loadingEnd() {
    this.setState({ width: 100 });
    setTimeout(() => {
      this.setState({ width: 0 });
    }, 50);
  }

  componentDidMount() {
    Router.events.on('routeChangeStart', this.routeChangeStart);
    Router.events.on('routeChangeComplete', this.routeChangeEnd);
    Router.events.on('routeChangeError', this.routeChangeEnd);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    clearTimeout(this.stimer);
    clearTimeout(this.ltimer);
    Router.events.off('routeChangeStart', this.routeChangeStart);
    Router.events.off('routeChangeComplete', this.routeChangeEnd);
    Router.events.off('routeChangeError', this.routeChangeEnd);
  }

  render() {
    return this.state.width > 0 ? (
      <div id="routerogress">
        <div className="bar" style={{ width: `${this.state.width}%` }} />
        <style jsx>
          {`
          #routerogress {
            pointer-events: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 1px;
            z-index: 1000000;
            background: azure;
          }
          .bar {
            background: blue;
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
          }
        `}
        </style>
      </div>
    ) : null;
  }
}

export default RouteProgress;
