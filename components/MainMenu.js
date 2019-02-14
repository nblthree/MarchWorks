import React, { Component } from 'react';
import Text from '../classes/Text';
import Link from './Link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons'


class MainMenu extends Component {
  constructor(props){
    super(props);
    this.state = {
      menuClass: 'menu'
    };

    this.classToggle = this.classToggle.bind(this);
    this.canvas = {
      home: React.createRef(),
      about: React.createRef(),
      contact: React.createRef(),
      tuto: React.createRef()
    };
  }


  classToggle(target){
    this.setState((state)=>{
      if(target === "menu"){
      	if(state.menuClass === 'menu close'){
      		setTimeout(this.props.transformation, 500);
      	}else{
      		this.props.transformation();
      	}
        return {menuClass: state.menuClass === 'menu' ? 'menu close' : 'menu', liClass: state.menuClass === 'menu' ? "liTransition" : ""}
      }
    })
  }


  componentDidMount() {
    var obj = [];
    for(let ref in this.canvas){
      var canvas = this.canvas[ref].current;
      obj.push(new Text(canvas, canvas.getAttribute('name'), 18, "Georgia", "#ffffff", "#aaaaaa", 4))/*"#3e3e3e", "#7e7e7e"*/
    }
    obj.forEach((object)=>{
      object.canvas.parentElement.addEventListener('click', function() {
        obj.forEach((o)=>{
          if(o.text !== object.text){
            o.fillStyle = "#ffffff" //"#7e7e7e"
            o.write()
          }
        })
        object.fillStyle = "#aaaaaa" //"#3e3e3e"
        object.write()
      })
    })
  }


  render() {
    return (
        <menu id="mainMenu" style={this.state.menuClass === 'menu close' ? {left: 0} : null}>
          <span className="design"><span></span><span></span></span>
          <span className="design"><span></span><span></span></span>
          <span className="design"><span></span><span></span></span>
          <span className="design"><span></span><span></span></span>
          <div name="menu" className={this.state.menuClass} onClick={(e)=>{this.classToggle("menu")}}>
            <span></span>
            <span></span>
          </div>
          <h2><Link href='/'><img className="logo" src="/static/logo.svg" /></Link></h2>
          <nav>
            <ul>
              <li className={this.state.liClass}><Link activeClassName='is-active' href='/'>
                  <a><div className="arrow"></div><canvas name="HOME" ref={this.canvas.home}></canvas><span></span><span></span></a>
              </Link></li>
              
              <li className={this.state.liClass}><Link activeClassName='is-active' href='/about'>
                  <a><div className="arrow"></div><canvas name="ABOUT" ref={this.canvas.about}></canvas><span></span><span></span></a>
              </Link></li>
              
              <li className={this.state.liClass}><Link activeClassName='is-active' href='/contact'>
                  <a><div className="arrow"></div><canvas name="CONTACT" ref={this.canvas.contact}></canvas><span></span><span></span></a>
              </Link></li>
              
              <li className={this.state.liClass}><Link activeClassName='is-active' href='/tutorials'>
                  <a><div className="arrow"></div><canvas name="TUTORIALS" ref={this.canvas.tuto}></canvas><span></span><span></span></a>
              </Link></li>
            </ul>
          </nav>
          <div className="socialMedia">
            <a href="https://github.com/marchworks" title="Github" target="_blank"><FontAwesomeIcon icon={faGithub} size="lg" color="#fff" /></a>
            <a href="https://twitter.com/marchworks" title="Twitter" target="_blank"><FontAwesomeIcon icon={faTwitter} size="lg" color="#fff" /></a>
            <a href="https://stackoverflow.com/users/story/8619959" title="Stack Overflow" target="_blank"><FontAwesomeIcon icon={faStackOverflow} size="lg" color="#fff" /></a>
          </div>
        <style jsx>{`
            .logo{
              width: 80%;
              max-width: 250px;
              cursor: pointer;
            }
            #mainMenu {
                position: relative;
                z-index: 10000;
                height: 100%;
                width: 300px;
                margin: 0;
                background-color: #000000;/*ffffff*/
                color: #f0f0f0;/*3e3e3e*/
                transition: 0.4s ease-in 0.3s;
                left: 0;
                box-sizing: border-box;
              }

              @media only screen and (max-width: 600px) {
                #mainMenu .design span:before, #mainMenu .design span:after, #mainMenu li a span:before, #mainMenu li a span:after {
                  background-color: #fff;/*#999*/
                }
                #mainMenu .design {
                  position: absolute;
                }
                #mainMenu .design:nth-child(1) {
                  top: 5px;
                  left: 5px;
                }
                #mainMenu .design:nth-child(1) span:first-child:before {
                  content: "";
                  width: 25px;
                  height: 2px;
                  position: absolute;
                  left: 100%;
                  top: 5px;
                }

                #mainMenu .design:nth-child(1) span:first-child:after {
                  content: "";
                  width: 2px;
                  height: 25px;
                  position: absolute;
                  top: 5px;
                }

                #mainMenu .design:nth-child(1) span:last-child:before {
                  content: "";
                  width: 25px;
                  height: 2px;
                  position: absolute;
                  left: calc(100% + 5px);
                }

                #mainMenu .design:nth-child(1) span:last-child:after {
                  content: "";
                  width: 2px;
                  height: 25px;
                  left: 5px;
                  position: absolute;                  
                }

                #mainMenu .design:nth-child(2) {
                  bottom: 5px;
                  right: 5px;
                }

                #mainMenu .design:nth-child(2) span:first-child:before {
                  content: "";
                  width: 25px;
                  height: 2px;
                  position: absolute;
                  right: 100%;
                  bottom: 5px;      
                }

                #mainMenu .design:nth-child(2) span:first-child:after {
                  content: "";
                  width: 2px;
                  height: 25px;
                  position: absolute;
                  bottom: 5px;             
                }

                #mainMenu .design:nth-child(2) span:last-child:before {
                  content: "";
                  width: 25px;
                  height: 2px;
                  position: absolute;
                  right: calc(100% + 5px);
                }

                #mainMenu .design:nth-child(2) span:last-child:after {
                  content: "";
                  width: 2px;
                  height: 25px;
                  right: 5px;
                  bottom: 100%;
                  position: absolute;
                }

                #mainMenu .design:nth-child(3) {
                  bottom: 5px;
                  left: 5px;
                }

                #mainMenu .design:nth-child(3) span:first-child:before {
                  content: "";
                  width: 25px;
                  height: 2px;
                  position: absolute;
                  left: 100%;
                  bottom: 5px;
                }

                #mainMenu .design:nth-child(3) span:first-child:after {
                  content: "";
                  width: 2px;
                  height: 25px;
                  position: absolute;
                  bottom: 5px;
                }

                #mainMenu .design:nth-child(3) span:last-child:before {
                  content: "";
                  width: 25px;
                  height: 2px;
                  position: absolute;
                  left: calc(100% + 5px);
                }

                #mainMenu .design:nth-child(3) span:last-child:after {
                  content: "";
                  width: 2px;
                  height: 25px;
                  left: 5px;
                  bottom: 100%;
                  position: absolute;
                }

                #mainMenu .design:nth-child(4) {
                  top: 5px;
                  right: 5px;
                }

                #mainMenu .design:nth-child(4) span:first-child:before {
                  content: "";
                  width: 25px;
                  height: 2px;
                  position: absolute;
                  right: 100%;
                  top: 5px;
                }

                #mainMenu .design:nth-child(4) span:first-child:after {
                  content: "";
                  width: 2px;
                  height: 25px;
                  position: absolute;
                  top: 5px;
                }

                #mainMenu .design:nth-child(4) span:last-child:before {
                  content: "";
                  width: 25px;
                  height: 2px;
                  position: absolute;
                  right: calc(100% + 5px);
                  top: 0px;
                }

                #mainMenu .design:nth-child(4) span:last-child:after {
                  content: "";
                  width: 2px;
                  height: 25px;
                  right: 5px;
                  top: 100%;
                  position: absolute;
                }
              }

              #mainMenu h2 {
                margin-top: 50px;
              }

              @media only screen and (max-width: 600px) {
                #mainMenu h2 {
                  text-align: center;
                  margin-bottom: 40px;
                }
              }

              #mainMenu .menu {
                display: none;
                width: 40px;
                height: 28px;
                position: fixed;
                top: 20px;
                right: 20px;
                cursor: pointer;
              }

              #mainMenu .menu span {
                width: 100%;
                height: 2px;
                background-color: #ccc;
                position: absolute;
                transform-origin: center;
                transition: 0.6s ease-out;
              }

              #mainMenu .menu span:first-child {
                top: 8px;
              }

              #mainMenu .menu span:first-child:before {
                top: -8px;
              }

              #mainMenu .menu span:last-child {
                top: 16px;
              }

              #mainMenu .menu span:last-child:before {
                top: 8px;
              }

              #mainMenu .menu span:before {
                content: "";
                width: 100%;
                height: 2px;
                background-color: #ccc;
                position: absolute;
                top: 10px;
                transition: 0.3s 0.3s linear;
              }

              @media only screen and (max-width: 600px) {
                #mainMenu .menu {
                  	display: block;
                }
              }

              #mainMenu .close span {
                background-color: #fff;
              }

              #mainMenu .close span:first-child {
                transform: rotateZ(45deg);
                top: 16px;
              }

              #mainMenu .close span:last-child {
                transform: rotateZ(-45deg);
              }

              #mainMenu .close span:before {
                width: 0;
              }

              @media only screen and (max-width: 600px) {
                #mainMenu {
                  left: -100vw;
                  position: fixed;
                  width: 100vw;
                  padding: 0;
                  min-width: infinite;
                }
              }

              #mainMenu .socialMedia{
                padding: 0;
                margin: 0;
                display: flex;
                justify-content: center;
                position: absolute;
                width: 100%;
                left: 0;
              }
              #mainMenu .socialMedia a{
                margin: 0 10%;
              }
              @media only screen and (min-width: 601px) {
                #mainMenu {
                  left: 0;
                  position: relative;
                  min-width: 300px;
                }
              }

              #mainMenu nav {
                height: calc(100% - 200px);
                max-height: calc(100% - 200px);
                overflow: hidden;
              }

              #mainMenu ul {
                color: #a2a2a2;
                font-weight: 700;
                font-size: 18px;
                font-family: none;
                letter-spacing: 2px;
                height: 100%;
              }

              @media only screen and (max-width: 600px) {
                #mainMenu ul {
                  padding: 0;
                }
              }

              #mainMenu li {
                margin: 20px 0 20px 0;
                padding: 20px 0 20px 0;
                position: relative;
              }
              @media only screen and (max-height: 540px) {
                #mainMenu li {
                  margin: 10px 0 10px 0;
                  padding: 10px 0 10px 0;
                }
              }
              @media only screen and (max-height: 435px) {
                #mainMenu li {
                  margin: 5px 0 5px 0;
                  padding: 5px 0 5px 0;
                }
              }

              @media only screen and (max-width: 600px) {
                #mainMenu li {
                  text-align: center;
                  transform: translate(-100%, 0);
                }
              }
              #mainMenu li:nth-child(1) {
                transition: 0.4s ease-in 0.2s;
              }
              #mainMenu li:nth-child(2) {
                transition: 0.4s ease-in 0.3s;
              }
              #mainMenu li:nth-child(3) {
                transition: 0.4s ease-in 0.4s;
              }
              #mainMenu li:nth-child(4) {
                transition: 0.4s ease-in 0.5s;
              }
              #mainMenu .liTransition {
                transform: translate(0%, 0);
              }

              #mainMenu li a {
                color: #a2a2a2;
                padding: 5px 0px 5px 0px;
                display: inline-flex;
                position: relative;
              }

              #mainMenu li a:hover {
                color: #efefefef;
                border-bottom: 2px #aaaaaa solid;
              }

              #mainMenu li a span {
                display: none;
              }

              @media only screen and (max-width: 600px) {
                #mainMenu li a {
                  width: 150px;
                }

                #mainMenu li a canvas {
                  margin: auto;
                }

                #mainMenu li a span {
                  display: block;
                  position: absolute;
                }

                #mainMenu li a span:nth-child(3) {
                  top: 0;
                  right: 0;
                }

                #mainMenu li a span:nth-child(3):before {
                  content: "";
                  width: 15px;
                  height: 2px;
                  position: absolute;
                  right: 100%;
                }

                #mainMenu li a span:nth-child(3):after {
                  content: "";
                  width: 2px;
                  height: 15px;
                  position: absolute;
                }

                #mainMenu li a span:nth-child(4) {
                  bottom: 0;
                  left: 0;
                }

                #mainMenu li a span:nth-child(4):before {
                  content: "";
                  width: 15px;
                  height: 2px;
                  position: absolute;
                  
                }

                #mainMenu li a span:nth-child(4):after {
                  content: "";
                  width: 2px;
                  height: 15px;
                  position: absolute;
                  bottom: 100%;
                  
                }
              }

              #mainMenu .is-active {
                color: #dcdcdc;
              }

              #mainMenu .is-active .arrow {
                position: absolute;
                right: 100%;
                border-top: 10px transparent solid;
                border-bottom: 10px transparent solid;
                border-right: 10px transparent solid;
                border-left: 15px #2d2222 solid;
              }

              @media only screen and (max-width: 600px) {
                #mainMenu .is-active .arrow {
                  display: none;
                }
              }

              #mainMenu .is-active:hover {
                color: #dcdcdc;
                border-bottom: none;
              }    
        `}</style>
        </menu>
    );
  }
}

export default MainMenu;