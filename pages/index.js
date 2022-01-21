import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Pomerado Sunday 1/16/22 Song Lyrics</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Pomerado Song Lyrics" />
      </main>

      <Footer />
    </div>
  )
}
