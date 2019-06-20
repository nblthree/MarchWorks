import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import RouteProgress from './RouteProgress';
import MainMenu from './MainMenu';
import StarsSand from './StarsSand';
import OpeningAnimation from './OpeningAnimation';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        transform: 'translate(0%, 0%) matrix(1, 0, 0, 1, 0, 0)',
        position: 'relative',
      },
      backgroundPositionY: 0,
      oAni: this.props.oAni,
    };
    this.transform = this.transform.bind(this);
  }

  transform() {
    this.setState(prev => (prev.style.transform
        === 'translate(0%, 0%) matrix(1, 0, 0, 1, 0, 0)'
      ? {
        style: {
          transform: 'translate(20%, 0%) matrix(0.5, 0, 0, 0.5, 0, 0)',
          position: 'fixed',
        },
      }
      : {
        style: {
          transform: 'translate(0%, 0%) matrix(1, 0, 0, 1, 0, 0)',
          position: 'relative',
        },
      }));
  }

  render() {
    return (
      <>
        {this.state.oAni ? (
          <OpeningAnimation
            aniEnd={() => {
              this.setState({ oAni: false });
            }}
          />
        ) : null}
        <RouteProgress />
        <MainMenu transformation={this.transform} theme={this.props.theme} />
        <div
          id="window"
          style={{
            transform: this.state.style.transform,
            position: this.state.style.position,
            backgroundPosition: `60% ${this.state.backgroundPositionY}px`,
          }}
        >
          <div>{this.props.children}</div>
          <div>
            <StarsSand
              particlesAmount={50}
              fillStyle="#888888"
              background="transparent"
              speed={0}
            />
          </div>
          <div
            id="toggleTheme"
            onClick={() => {
              this.props.toggleTheme();
            }}
          >
            <FontAwesomeIcon
              icon={faMoon}
              size="lg"
              color={this.props.theme === 'light' ? '#000' : '#fff'}
            />
          </div>
        </div>
        {/* <StarsSand particlesAmount={50} fillStyle="#444444" background="#ffffff" speed={1} />#4488ff #000000 */}
        <style global jsx>
          {`
          body {
            margin: 0;
            padding: 0;
            font-family: '-apple-system', 'BlinkMacSystemFont', 'Segoe UI',
              'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
              'Droid Sans', 'Helvetica Neue', 'sans-serif';
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
          }
          ul {
            list-style: none;
          }
          a {
            text-decoration: none;
          }
          code {
            font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
              monospace;
          }
          body > div {
            width: 100%;
            height: 100%;
            display: flex;
            background-color: #96999c;
            color: var(--color);
          }
          #window {
            width: 100%;
            height: 100%;
            max-width: 100%;
            max-height: 100%;
            overflow: hidden;
            position: relative;
            box-sizing: border-box;
            transition: 0.5s ease-in, background-color 0.4s ease-in 0.3s;
            z-index: 1;
            background-color: var(--window-bg);
            //background: url(/static/testd.png) 60% 0 no-repeat;
          }
          #window > div:nth-child(1) {
            width: 100%;
            height: 100%;
            //overflow-y: scroll;
            overflow-x: hidden;
            position: relative;
            box-sizing: border-box;
            background-color: transparent;
            z-index: 1;
            //background: url(/static/cherry-blossom-petals-vartical.png) 60% 0 no-repeat;
          }
          @media only screen and (min-width: 601px) {
            #window > div:nth-child(1)::-webkit-scrollbar {
              width: 0.8em;
            }
            #window > div:nth-child(1)::-webkit-scrollbar-track {
              background-color: var(--scrollbar-track-bg);
            }
            #window > div:nth-child(1)::-webkit-scrollbar-thumb {
              background-color: var(--scrollbar-thumb-bg);
            }
            #window > div:nth-child(1)::-webkit-scrollbar-track-piece {
              background-color: var(--scrollbar-track-bg);
            }
            #window {
              transform: translate(0%, 0%) matrix(1, 0, 0, 1, 0, 0) !important;
              position: relative !important;
            }
          }
          @media only screen and (max-width: 600px) {
            #window > div:nth-child(1)::-webkit-scrollbar {
              width: 0em;
            }
          }
          #window > div:nth-child(2) {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            background: var(--bg-mesh);
          }
          #toggleTheme {
            position: fixed;
            bottom: 15px;
            right: 25px;
            cursor: pointer;
            z-index: 10000;
          }
        `}
        </style>
      </>
    );
  }
}

export default Layout;
