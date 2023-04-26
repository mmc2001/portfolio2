import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
        <Head>
          <meta name="description" content="Frontend Portfolio" />
          <link rel="icon" sizez="32x32" href="/img/logo1.png" />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
  )
}
