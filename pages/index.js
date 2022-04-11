import Head from 'next/head'
import Footer from '@components/Footer'
import Image from 'next/image'
import qrCode from '../public/images/qr-code.png'
import { getSongData } from '../lib/songs'
import { attributes, react as HomeConent } from '../content/home.md'


export async function getStaticProps() {
  // Get latest service
  // Map songs to songList
  
  const songList = ["all-to-jesus-i-surrender", "when-i-survey-the-wondrous-cross", "our-god-he-is-alive", "stand-in-awe"];

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
  const { date, songs } = attributes;

  return (
    <div>
      <Head>
        <title>Pomerado Sunday 4/10/22 Song Lyrics</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>

      <header>
        <h1>Pomerado Service<br /><small>Sunday April 10th</small></h1>
      </header>
      
      <div className="container">
        <main>
          {/*<SongList songsData={songsData} />*/}
          <ul>
            {songs.map((song, k) => (
              <li key={k}>
                {song}
              </li>
            ))}
          </ul>
        </main>
        <aside>
          <Image src={qrCode} alt="qr code for link to lyrics" />
        </aside>
      </div>
      <Footer />
    </div>
  )
}
