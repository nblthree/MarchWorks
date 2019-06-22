import React from 'react';
import Head from 'next/head';
import Layout from '../../components/MyLayout';


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
          <title>Blog</title>
          <meta name="Description" content="Blog" />
        </Head>
        <div className="Blog">
          <section>
            <article>Under Development</article>
          </section>
          <style jsx>
            {`
            .Blog {
              width: 100%;
              height: 100%;
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
