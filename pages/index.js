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
        <div>
          <h2>A Faithful Witness</h2>

          <section>
            <p>Amazing grace how sweet the sound</p>
            <p>I once was lost but now I′m found</p>
            <p>I once was blind but now I see</p>
            <p>I've got to share what you′ve done for me</p>
            <p>Turned my darkness in to light</p>
            <p>You turned my blindness in to sight</p>
            <p>I can't help speaking to the world</p>
            <p>Of what I've seen and heard</p>
          </section>

          <section>
            <p>A faithful witness is what You′re seeking</p>
            <p>I can't help speaking what You′ve done for me</p>
            <p>Of all You gave me</p>
            <p>Of how You saved me</p>
            <p>A faithful witness I will be</p>
          </section>

          <section>
          <p>My hope is built on nothing less</p>
            <p>Than Jesus′ blood and righteousness</p>
            <p>On Christ the solid rock I stand</p>
            <p>All other ground is sinking sand</p>
            <p>I′ll live my life so others know</p>
            <p>The choices that I make will show</p>
            <p>That I've been giv′n eternal life</p>
            <p>It's worth all sacrifice</p>
          </section>

          <section>
            <p>I took my savior's hand</p>
            <p>He showed He had a plan</p>
            <p>To snatch me from the flame</p>
            <p>And give me a new name</p>
            <p>Though I'd been trapped in sin</p>
            <p>My life begun again</p>
            <p>Now that I′ve been set free</p>
            <p>He′s calling me to be</p>
          </section>
        </div>

        <div>
          <h2>Encourage My Soul</h2>

          <section>
            <p>Encourage my soul and let us journey on</p>
            <p>For the night is dark, and I am far from home</p>
            <p>Thanks be to God, the morning light appears</p>
            <p>The storm is passing over,</p>
            <p>The storm is passing over,</p>
            <p>The storm is passing over, Hallelu!</p>
          </section>

          <section>
            <p>Hallelujah, Hallelujah, Hallelujah</p>
            <p>The storm is passing over,</p>
            <p>The storm is passing over,</p>
            <p>The storm is passing over, Hallelu!</p>
          </section>
        </div>



        <div>
          <h2>It Is Well With My Soul</h2>

          <section>
            <p>When peace like a river attendeth my way</p>
            <p>When sorrows like sea billows roll</p>
            <p>Whatever my lot, Thou hast taught me to say</p>
            <p>It is well, it is well with my soul</p>
          </section>

          <section>
            <p>It is well (it is well)</p>
            <p>With my soul (with my soul)</p>
            <p>It is well, it is well with my soul</p>
          </section>

          <section>
            <p>Though Satan should buffet, though trials should come</p>
            <p>Let this blest assurance control</p>
            <p>That Christ has regarded my helpless estate</p>
            <p>And has shed His own blood for my soul</p>
          </section>

          <section>
            <p>My sin, oh the bliss of this glorious thought</p>
            <p>My sin, not in part, but the whole</p>
            <p>Is nailed to the cross, and I bear it no more</p>
            <p>Praise the Lord, praise the Lord, O my soul</p>
          </section>

          <section>
            <p>And Lord, haste the day when my faith shall be sight</p>
            <p>The clouds be rolled back as a scroll</p>
            <p>The trump shall resound, and the Lord shall descend</p>
            <p>Even so, it is well with my soul</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
