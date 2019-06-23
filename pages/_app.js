import React from 'react';
import App, { Container } from 'next/app';
import cookies from 'next-cookies';
import Layout from '../components/MyLayout';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {
      pageProps: {
        ...pageProps,
        oAni: Boolean(ctx.req),
        query: ctx.query
      },
      cookies: cookies(ctx)
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      theme: this.props.cookies.theme || 'dark'
    };
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    // Update the component state
    this.setState(
      state => ({
        theme: state.theme === 'light' ? 'dark' : 'light'
      }),
      () => {
        // Update the cookie
        const { theme } = this.state;
        document.cookie = `theme=${theme}; path=/`;
      }
    );
  }

  render() {
    const { Component, pageProps } = this.props;
    const { theme } = this.state;
    return (
      <Container>
        <Layout
          oAni={this.props.pageProps.oAni}
          toggleTheme={this.toggleTheme}
          theme={this.state.theme}
        >
          <Component {...pageProps} />
        </Layout>
        <style jsx global>
          {`
            :root {
              --color: ${theme === 'light' ? '#333333' : '#dddddd'};
              --bg-mesh: ${theme === 'light'
                ? 'url(/static/bg_mesh_white.png)'
                : 'url(/static/bg_mesh_black.png)'};
              --window-bg: ${theme === 'light' ? '#ffffff' : '#040608'};
              --menu-bg: ${theme === 'light' ? '#ffffff' : '#000000'};
              --menu-color: ${theme === 'light' ? '#0f0f0f' : '#f0f0f0'};
              --scrollbar-track-bg: ${theme === 'light' ? '#ffffff' : '#333333'};
              --scrollbar-thumb-bg: ${theme === 'light' ? '#333333' : '#ffffff'};
              --bg: ${theme === 'light' ? '#666' : '#96999c'};
              --br-color: ${theme === 'light' ? '#666' : '#7a7a7a'};
              --post-bg: ${theme === 'light' ? '#fff' : '#242424'};
            }
          `}
        </style>
      </Container>
    );
  }
}
