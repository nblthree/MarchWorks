import React from 'react';
import Layout from '../components/MyLayout';
import Head from 'next/head';
import Link from '../components/Link'

class Index extends React.Component {
    
	constructor(props){
        super(props);
        this.state = {
      words: ['Welcome', 'Bienvenu', 'ようこそ', 'Willkommen', 'Hoşgeldiniz'],
      word: 0,
      letter: 0,
      forwards: true
        };
    this.timer = null;
    this.animate = this.animate.bind(this);
    }
  componentDidMount(){
    this.animate();
  }
  componentWillUnmount(){
    clearTimeout(this.timer);
  }
  animate(){
    this.setState((prev)=>{
      if(prev.letter===prev.words[prev.word].length-1 && prev.forwards){
        return {forwards: false}
      }
      if(prev.letter === 0 && !prev.forwards){
        return {word: prev.word===prev.words.length-1 ? 0 : prev.word+1, forwards: true}
      }
      if(prev.forwards){
        return {letter: prev.letter+1}
      }else{
        return {letter: prev.letter-1}
      }
    });
    this.timer = setTimeout(this.animate, this.state.letter===this.state.words[this.state.word].length-1 && this.state.forwards ? 3000 : 200);
  }

    render (){
        var mot = this.state.words[this.state.word].slice(0, this.state.letter+1);
        return (
          <Layout oAni={this.props.oAni}>
            <Head>
               <title>HOME</title>
            </Head>
        	<div className="Home">
                <div id="welcome">
                  <h2>{mot}<span id="typer"></span></h2>
                </div>
                <section className="intro">
                    <div>
                        <h2>Boussouf Nabil</h2>
                    </div>
                    <div>
                        <h3>Dev Story</h3>
                        <article>
                            <p>Born in 1998, living in Meknes Morocco, freelance developer.
                            SPA, SSR development with JavaScript, have a way with design and 2D animation.</p>
                            <Link href="/about"><a>Learn more.</a></Link>
                        </article>
                    </div>
                </section>
                <style jsx>{`
                    .intro div{
                        padding: 3% 10% 3% 10%;
                    }
                    .intro div:first-child h2{
                        margin: 0;
                    }
                    .intro div:nth-child(2) h3{
                        color: #2f4f4fdb;
                    }
                    .intro{
                        width: 80%;
                        max-width: 850px;
                    }
                    .intro article{
                        padding: 1% 0% 1% 5%;
                        font-size: 1.15rem;
                        font-family: Source Sans Pro, sans-serif;
                    }
                    @media only screen and (max-width: 600px){
                        .intro{
                            width: 100%;
                        }
                        .intro div{
                            padding: 3% 1% 3% 0%;
                        }
                    }
                    .Home {
                        width: 100%;
                        height: 1000px;
                    }

                    #welcome {
                        display: flex;
                        height: 233px;
                    }

                    #welcome h2 {
                        margin: 80px auto;
                        text-align: center;
                        font-size: 3rem;
                        font-weight: 400;
                        display: flex;
                    }

                    #welcome #typer {
                        width: 2px;
                        background-color: #666666;
                        display: block;
                        opacity: 0;
                        animation: fade 0.4s linear 0s infinite forwards;
                    }

                    @keyframes fade {
                        0% {
                            opacity: 0;
                        }
                        50% {
                            opacity: 1;
                        }
                        100% {
                            opacity: 0;
                        }
                    }
                `}</style>
            </div>
          </Layout>
        );
    }
}


export default Index;