import React from 'react';
import Head from 'next/head';
import Layout from '../components/MyLayout';
import { Link } from '../routes';

class Tutorials extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout
        oAni={this.props.oAni}
        toggleTheme={this.props.toggleTheme}
        theme={this.props.theme}
      >
        <Head>
          <title>TUTORIALS</title>
          <meta name="Description" content="Tutorials" />
        </Head>
        <div className="Tutorials">
          <section>
            <div className="nav">
              <ul>
                <li>
                  <Link route="/tutorials/first">
                    <a>First Tutorial</a>
                  </Link>
                </li>
                <li>
                  <Link route="/tutorials/second">
                    <a>Second Tutorial</a>
                  </Link>
                </li>
              </ul>
            </div>
            <article>Under Development</article>
          </section>
          <style jsx>
            {`
            .Tutorials {
              width: 100%;
              height: 100%;
            }
            .nav {
              width: 200px;
              height: 100%;
              position: fixed;
              background-color: #ffffff1f;
            }
            .nav ul {
              padding: 0;
              margin: 30px 0 30px 0;
            }
            .nav ul li {
              margin: 20px 0 20px 0;
              font-size: 1.2rem;
              text-align: center;
            }
            .nav a {
              color: silver;
            }
            section {
              //padding: 5% 0 5% 0;
              display: flex;
              height: 100%;
            }
            article {
              text-align: center;
              margin: auto;
              font-size: 1.5rem;
            }
          `}
          </style>
        </div>
      </Layout>
    );
  }
}

export default Tutorials;
