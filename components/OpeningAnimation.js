import React from 'react';

class OpeningAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
    this.cancel = this.cancel.bind(this);
  }
  cancel(){
    this.props.aniEnd();
  }
  componentDidMount(){
    setTimeout(this.cancel, 2500);
  }

    render (){
      return (
        <div id="wrapper">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>

          

          <img src="static/logo.svg" />

          <style jsx>{`
            img{
              width: 80%;
              max-width: 400px;
              margin: auto;
              z-index: 10000;
              user-select: none;
              animation: fade 0.1s linear 0.2s 5 forwards;
            }
            #wrapper{
              position: fixed;
              height: 100vh;
              width: 100vw;
              z-index: 1000000000;
              display: flex;
              background-color: #404040;
            }
            #wrapper > div{
              width: 0%;
              height: 100%;
              position: absolute;
              top: 0;
              left 0;
            }
            #wrapper > div:nth-child(1){
              background-color: #353535;
              z-index: 1;
              animation: charge 0.4s linear 1s forwards;  
            }
            #wrapper > div:nth-child(2){
              background-color: #303030;
              z-index: 2;
              animation: charge 0.4s linear 1.2s forwards;  
            }
            #wrapper > div:nth-child(3){
              background-color: #252525;
              z-index: 3;
              animation: charge 0.4s linear 1.4s forwards;  
            }
            #wrapper > div:nth-child(4){
              background-color: #202020;
              z-index: 4;
              animation: charge 0.4s linear 1.6s forwards;  
            }
            #wrapper > div:nth-child(5){
              background-color: #151515;
              z-index: 5;
              animation: charge 0.4s linear 1.8s forwards;  
            }
            @keyframes fade {
              0% {
                  opacity: 0;
              }
              100% {
                  opacity: 1;
              }
            }
            @keyframes charge{
              0%{
                width: 0%;
              }
              100%{
                width: 100%;
              }
            }
          `}</style>
        </div>
      );
    }
}

export default OpeningAnimation;