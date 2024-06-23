import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <script
            src='https://kit.fontawesome.com/433667d0d8.js'
            crossOrigin='anonymous'
          />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
        </Head>
        <body style={{ background: '#fff' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
