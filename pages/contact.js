import React from 'react';
import Head from 'next/head';
import Layout from '../components/MyLayout';

class Contact extends React.Component {
  render() {
    return (
      <Layout
        oAni={this.props.oAni}
        toggleTheme={this.props.toggleTheme}
        theme={this.props.theme}
      >
        <Head>
          <title>CONTACT</title>
          <meta name="Description" content="Contact MarchWorks" />
        </Head>
        <div className="Contact">
          <section>
            <div>
              <h1>Hire me</h1>
            </div>
            <div>
              <a href="#">hire@marchworks.example</a>
            </div>
            <div>
              <p>
                Will contact you in the next 24h. Looking forward to working
                together
              </p>
            </div>
          </section>
          <style jsx>
            {`
            .Contact {
              width: 100%;
              box-sizing: border-box;
            }
            section {
              padding: 5% 0 5% 0;
            }
            div {
              padding: 6% 10% 6% 6%;
            }
            a,
            p {
              font-size: 1.2rem;
              color: silver;
              font-family: Source Sans Pro, sans-serif;
            }
            @media only screen and (max-width: 600px) {
              div {
                padding: 6% 1% 6% 0%;
              }
              .Contact {
                padding: 0 20px 0 20px;
              }
            }
          `}
          </style>
        </div>
      </Layout>
    );
  }
}

export default Contact;
