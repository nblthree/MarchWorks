import React from 'react';
import Head from 'next/head';
import Layout from '../components/MyLayout';

class About extends React.Component {
  render() {
    return (
      <Layout
        oAni={this.props.oAni}
        toggleTheme={this.props.toggleTheme}
        theme={this.props.theme}
      >
        <Head>
          <title>ABOUT</title>
          <meta name="Description" content="About BOUSSOUF NABIL" />
        </Head>
        <div className="About">
          <section className="intro">
            <div>
              <h2>Web Developer & Designer</h2>
            </div>
            <div>
              <h3>The Story</h3>
              <article>
                Senior bachelor's degree student specialized in Mathematics.
                Started web development in 2016. Having a strong grip over the
                way of design and coding after 3 years in the field. By doing
                the whole process of production alone, it is possible to provide
                detailed interactive and high quality products.
              </article>
            </div>
            <div>
              <h3>Skills & Programming Languages</h3>
              <article>
                <ul>
                  <li>HTML5</li>
                  <li>CSS3 / SASS / SCSS</li>
                  <li>JavaScript / Next.js / React.js / Node.js / Redux</li>
                  <li>PHP / WordPress</li>
                  <li>MySQL / Mongoose DB</li>
                  <li>Git / GitHub</li>
                  <li>Zeit now</li>
                  <li>Photoshop / Illustrator</li>
                  <li>Responsive Design</li>
                </ul>
                <ul>
                  <li>C</li>
                  <li>C#</li>
                  <li>Python</li>
                  <li>Java</li>
                </ul>
              </article>
            </div>
          </section>
          <style jsx>
            {`
            .intro div {
              padding: 3% 10% 3% 10%;
            }
            .intro div:first-child h2 {
              margin: 0;
            }
            .intro div h3 {
              color: #2f4f4fdb;
            }
            .intro ul {
              padding: 0;
            }
            .intro ul li {
              margin: 10px 0 10px 0;
            }
            .intro article {
              padding: 1% 0% 1% 5%;
              font-size: 1.15rem;
              font-family: Source Sans Pro, sans-serif;
            }
            .intro {
              width: 80%;
              max-width: 850px;
              margin-top: 20px;
            }
            @media only screen and (max-width: 600px) {
              .intro {
                width: 100%;
              }
              .intro div {
                padding: 3% 1% 3% 0%;
              }
              .intro div:nth-child(2) {
                padding: 5% 0% 5% 0%;
              }
              .About {
                padding: 0 20px 0 20px;
              }
            }
            .About {
              width: 100%;
              height: 1000px;
              box-sizing: border-box;
            }
          `}
          </style>
        </div>
      </Layout>
    );
  }
}

export default About;
