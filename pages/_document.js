import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="theme-color" content="#111"/>
          <meta name="background-color" content="#404040"/>
          <link rel="icon" type="image/x-icon" href="/static/favicons/favicon.ico" />
          <link href="https://fonts.googleapis.com/css?family=Oswald:300|Source+Sans+Pro:700" rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}