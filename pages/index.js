import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { getSortedSongsData } from '../lib/songs'

export async function getStaticProps() {
  const allSongsData = getSortedSongsData();
  return {
    props: {
      allSongsData
    }
  }
}

export default function Home({ allSongsData }) {
  return (
    <div className="container">
      <Head>
        <title>Pomerado Sunday 1/16/22 Song Lyrics</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Pomerado Song Lyrics" />

        <section>
          <h2>Songs</h2>
          <ul>
            {allSongsData.map(({ id, title }) => (
              <li key={id}>
                {title}
                <br />
                {id}
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  )
}
