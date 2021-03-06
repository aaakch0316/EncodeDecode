import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="/">Hanpy</a>
        </h1>

        <p className={styles.description}>
          Get started by click{' '}
          <code className={styles.code}>encode/decode</code>
        </p>

        <div className={styles.grid}>
          <a href="/urlencode" className={styles.card}>
            <h2>URL Encoder &rarr;</h2>
            <p>Use the online tool to encode a URL string of text.</p>
          </a>

          <a href="/urldecode" className={styles.card}>
            <h2>URL Decoder &rarr;</h2>
            <p>Use the online tool to decoder a URL string of text.</p>
          </a>

          <a href="/base64encode" className={styles.card}>
            <h2>BASE64 Encoder &rarr;</h2>
            <p>Use the online tool to encode a string of text.</p>
          </a>

          <a href="/base64decode" className={styles.card}>
            <h2>BASE64 Decoder &rarr;</h2>
            <p>Use the online tool to decoder a string of text.</p>
          </a>

          {/* <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a> */}
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{'             '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
