import Head from 'next/head'
import Layout from '../components/commons/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Encoding/Decoding</title>
        <meta name="description" content="인코딩(encoding)과 디코딩(decoding) 개념을 이해하고 사용할 수 있습니다." />
        <meta name="keywords" content="encode decode 인코딩 디코딩 urlencoding" />
        <meta name="author" content="hanpy" />
        <meta name="og:site_name" content="hanpy 인코딩/디코딩" />
        <meta name="og:title" content="Encoding/Decoding 이해하기" />
        <meta name="og:description" content="인코딩(encoding)과 디코딩(decoding) 개념을 이해하고 사용할 수 있습니다." />
        <meta name="og:type" content="website" />
        {/* <meta name="og:url" content="https://www.hanpy.com/encoding" />
        <meta
          name="og:image"
          content="https://www.hanpy.com/encoding/thumbnail.png"
        /> */}

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
