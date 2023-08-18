import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

const globalStyles = `
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
`;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <style type="text/css">{globalStyles}</style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
