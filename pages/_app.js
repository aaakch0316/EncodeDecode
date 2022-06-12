import Head from 'next/head'
import Layout from '../components/commons/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Encoding/Decoding</title>
        <meta name="description" content="인코딩(encoding)과 디코딩(decoding) 개념을 이해하고 적용하는 app" />
        <meta name="" content="" />
        <meta name="" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
