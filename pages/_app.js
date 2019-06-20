import React from "react";
import App, { Container } from "next/app";
import cookies from 'next-cookies';

export default class MyApp extends App {

	static async getInitialProps ({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
		return {
			pageProps: {
        ...pageProps,
				oAni: ctx.req ? true : false,
        query: ctx.query
			},
      cookies: cookies(ctx)
		}
  }

  constructor(props) {
    super(props);

    this.state = {
      theme: this.props.cookies.theme || 'dark',
    };
    this.toggleTheme = this.toggleTheme.bind(this)
  }

  toggleTheme() {
    // Update the component state
    this.setState(state => ({
      theme: state.theme === 'light' ? 'dark' : 'light',
    }), () => {
      // Update the cookie
      const { theme } = this.state;
      document.cookie = `theme=${theme}; path=/`;
    });
  }

  render() {
    const { Component, pageProps } = this.props;
    const { theme } = this.state;
    return (
      <Container>
        <Component {...pageProps} theme={ theme } toggleTheme={this.toggleTheme} />
        <style jsx global>
          {`
            :root {
              --color: ${theme === 'light' ? '#333333' : '#dddddd'};
              --bg-mesh: ${theme === 'light' ? 'url(/static/bg_mesh_white.png)' : 'url(/static/bg_mesh_black.png)'};
              --window-bg: ${theme === 'light' ? '#ffffff' : '#040608'};
              --menu-bg: ${theme === 'light' ? '#ffffff' : '#000000'};
              --menu-color: ${theme === 'light' ? '#0f0f0f' : '#f0f0f0'};
              --scrollbar-track-bg: ${theme === 'light' ? '#ffffff' : '#333333'};
              --scrollbar-thumb-bg: ${theme === 'light' ? '#333333' : '#ffffff'};
              --gray: ${theme === 'light' ? '#7f7f7f' : '#666'};
              --light-gray: ${theme === 'light' ? '#f0f0f0' : '#333'};
              --lighter-gray: ${theme === 'light' ? '#fafafa' : '#222'};
              --red: #FF3B30;
              --small-shadow: rgba(0, 0, 0, 0.05) 0px 5px 50px;
              --big-shadow: 0 30px 100px 5px ${theme === 'light' ? 'var(--light-gray)' : '#000'};
            }
          `}
        </style>
      </Container>
    );
  }
}