import Link from 'next/link';
import { getSortedSongsData } from '../lib/songs';

export async function getStaticProps() {
  const allSongsData = getSortedSongsData();
  return {
    props: {
      allSongsData
    }
  }
}

export default function Songs({ allSongsData }) {
    return (
        <div className="container">
            <main>
                <section>
                    <h1>Songs</h1>
                    <ul>
                        {allSongsData.map(({ id, title }) => (
                            <li key={id}>
                                <Link href={`./songs/${id}`}>
                                    <a>{title}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </div>
    )
}
    