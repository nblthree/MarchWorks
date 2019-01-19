import App, { Container } from "next/app";
import React from "react";


export default class MyApp extends App {

	static async getInitialProps ({ctx}) {
		return {
			pageProps: {
				oAni: ctx.req ? true : false
			}
		}
  	}

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}