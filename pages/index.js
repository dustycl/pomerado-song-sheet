import Head from 'next/head'
import Footer from '@components/Footer'
import Image from 'next/image'
import qrCode from '../public/images/qr-code.png'
import { getSongData } from '../lib/songs'


export async function getStaticProps() {
  // Get latest service
  // Map songs to songList
  
  const songList = ["be-with-me-lord", "theres-not-a-friend", "blessed-assurance"];

  const songsData = await Promise.all(songList.map(async song => {
    return await getSongData(song);
  }));

  return {
    props: {
      songsData
    }
  }
}

const SongList = ({ songsData }) => {
  const list = songsData.map(song => {
    return (
      <li key={song.title}>
        <h2>{song.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: song.contentHtml }} />
      </li>
    )
  });

  return <ul>{list}</ul>
}

export default function Home({ songsData }) {
  return (
    <div>
      <Head>
        <title>Pomerado Sunday 1/16/22 Song Lyrics</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>Pomerado Song Lyrics<br /><small>Sunday 1/23</small></h1>
      </header>
      
      <div   className="container">
        <main>
          <SongList songsData={songsData} />
        </main>
        <aside>
          <Image src={qrCode} alt="qr code for link to lyrics" />
        </aside>
      </div>
      <Footer />
    </div>
  )
}
