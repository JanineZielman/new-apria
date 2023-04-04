import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script src="planck.min.js"></script>
          <script src="d3.min.js"></script>
          <script src="balancetext.min.js"></script>
          <link rel="stylesheet" href="https://use.typekit.net/iiw5mea.css"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="java.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
