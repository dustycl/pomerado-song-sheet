import Head from 'next/head'
import Footer from '@components/Footer'
import Image from 'next/image'
import qrCode from '../public/images/qr-code.png'


export default function Home() {
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
          <section>
            <h2>Heavenly Sunlight</h2>
            <p>
              Walking in sunlight all of my journey<br />
              Over the mountains through the deep vale<br />
              Jesus has said 'I'll never forsake thee'<br />
              Promise divine that never can fail
            </p>

            <p>
              Heavenly sunlight! Heavenly sunlight!<br />
              Flooding my soul with glory divine;<br />
              Hallelujah! I am rejoicing,<br />
              Singing His praises, Jesus is mine!
            </p>

            <p>
              Shadows around me, shadows above me<br />
              Never conceal my Savior and Guide;<br />
              He is the light, in Him is no darkness,<br />
              Ever I’m walking close to His side.
            </p>

            <p>
              In the bright sunlight, ever rejoicing,<br />
              Pressing my way to mansions above;<br />
              Singing His praises, gladly I’m walking,<br />
              Walking in sunlight, sunlight of love.
            </p>
          </section>

          <section>
            <h2>Broken Vessels</h2>
              <p>VERSE 1</p>
              <p>
                All these pieces<br />
                Broken and scattered<br />
                In mercy gathered<br />
                Mended and whole<br />
                Empty handed<br />
                But not forsaken<br />
                I’ve been set free<br />
                I’ve been set free
              </p>

              <p>PRE-CHORUS</p>
              <p>
                Amazing grace<br />
                How sweet the sound<br />
                That saved a wretch like me<br />
                I once was lost<br />
                But now I am found<br />
                Was blind but now I see
              </p>

              <p>CHORUS</p>
              <p>
                Oh I can see You now<br />
                Oh I can see the love in Your eyes<br />
                Laying Yourself down<br />
                Raising up the broken to life
              </p>

              <p>VERSE 2</p>
              <p>
                You take our failure<br />
                You take our weakness<br />
                You set Your treasure<br />
                In jars of clay<br />
                So take this heart Lord<br />
                I’ll be Your vessel<br />
                The world to see Your life in me
              </p>
          </section>

          <section>
            <h2>Lord God Almighty</h2>

            <p>
              Lord God almighty (Lord God almighty)<br />
              Gonna sing sing sing for you (gonna sing sing sing for you)<br />
              Lord God almighty (Lord God almighty)<br />
              Gonna sing sing sing for you (gonna sing sing sing for you)
            </p>

            <p>
              Gonna work and pray and sing every day for you<br />
              Gonna work and pray and sing every day for you
            </p>
          </section>
        </main>
        <aside>
          <Image src={qrCode} alt="qr code for link to lyrics" />
        </aside>
      </div>
      <Footer />
    </div>
  )
}
