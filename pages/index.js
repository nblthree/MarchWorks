import React from 'react'
import Head from 'next/head'

class Index extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      words: ['Welcome', 'Bienvenu', 'ようこそ', 'Willkommen', 'Hoşgeldiniz'],
      word: 0,
      letter: 0,
      forwards: true
    }
    this.timer = null
    this.animate = this.animate.bind(this)
  }

  componentDidMount () {
    this.animate()
  }

  componentWillUnmount () {
    clearTimeout(this.timer)
  }

  animate () {
    this.setState(prev => {
      if (prev.letter === prev.words[prev.word].length - 1 && prev.forwards) {
        return { forwards: false }
      }

      if (prev.letter === 0 && !prev.forwards) {
        return {
          word: prev.word === prev.words.length - 1 ? 0 : prev.word + 1,
          forwards: true
        }
      }

      if (prev.forwards) {
        return { letter: prev.letter + 1 }
      }

      return { letter: prev.letter - 1 }
    })
    this.timer = setTimeout(
      this.animate,
      this.state.letter === this.state.words[this.state.word].length - 1 &&
        this.state.forwards
        ? 3000
        : 200
    )
  }

  render () {
    const mot = this.state.words[this.state.word].slice(
      0,
      this.state.letter + 1
    )
    return (
      <>
        <Head>
          <title>HOME</title>
          <meta name='Description' content='Produced By MarchWorks' />
        </Head>
        <div className='Home'>
          <div id='welcome'>
            <h2>
              {mot}
              <span id='typer' />
            </h2>
          </div>
          <section className='intro'>
            <div>
              <h2>Projects</h2>
            </div>
            <div className='projects'>
              <div className='project'>
                <div
                  className='p-img'
                  style={{ backgroundImage: "url('/static/img/AniTV.jpg')" }}
                />
                <h3>AniTV</h3>
                <p>
                  Download and watch your preferred seasonal anime and get
                  notified whenever a new episode is available
                </p>
                <div className='download'>
                  <a href='https://github.com/MarchWorks/AniTV/releases/latest/download/windows.x64.zip'>
                    <button>Download For Windows x64</button>
                  </a>
                </div>
              </div>
              <div className='project'>
                <div
                  className='p-img'
                  style={{
                    backgroundImage:
                      "url('/static/img/Ani-desktop-wallpaper.jpg')"
                  }}
                />
                <h3>Ani desktop wallpaper</h3>
                <p>
                  Set a new anime wallpaper in a chosen interval with chosen
                  tags
                </p>
                <div className='download'>
                  <a href='https://github.com/MarchWorks/Ani-desktop-wallpaper/releases/latest/download/windows.x64.zip'>
                    <button>Download For Windows x64</button>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <style jsx>
            {`
              .download {
                display: flex;
                justify-content: flex-end;
              }
              .download button {
                height: 30px;
                width: 200px;
                background: white;
                outline: none;
                border: 0;
                color: #333;
                font-weight: 600;
                cursor: pointer;
              }
              .download a {
                margin-top: 40px;
              }
              .project {
                position: relative;
                margin-top: 50px;
              }
              .p-img {
                position: absolute;
                width: 100%;
                height: 100%;
                background-size: 100% 100%;
                background-repeat: no-repeat;
                background-position: center;
                z-index: -1;
                box-sizing: border-box;
                top: 0;
                left: 0;
                filter: blur(16px);
              }
              .intro > div,
              .intro > div > div {
                padding: 3% 10% 3% 10%;
              }
              .intro .projects > div {
                padding: 3% 10% 3% 5%;
              }
              .intro > div:first-child h2 {
                margin: 0;
              }
              .project h3 {
                color: #fff;
                padding-left: 2%;
              }
              .intro {
                width: 80%;
                max-width: 850px;
              }
              .project p {
                padding: 1% 0% 1% 5%;
                font-size: 1.15rem;
                font-family: Source Sans Pro, sans-serif;
              }
              @media only screen and (max-width: 600px) {
                .intro {
                  width: 100%;
                }
                .intro div {
                  padding: 3% 1% 3% 0%;
                }
                .Home {
                  padding: 0 20px 0 20px;
                }
              }
              .Home {
                width: 100%;
                height: 1000px;
                box-sizing: border-box;
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
            `}
          </style>
        </div>
      </>
    )
  }
}

export default Index
