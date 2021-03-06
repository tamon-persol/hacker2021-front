import React from 'react';
import Document, { Head, NextScript, Main } from 'next/document';

export default class extends Document {
  render(): JSX.Element {
    return (
      <html lang="ja">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
