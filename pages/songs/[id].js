import Link from 'next/link';
import { getAllSongIds, getSongData } from "../../lib/songs";

export async function getStaticPaths() {
    const paths = getAllSongIds();
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const songData = await getSongData(params.id);

    return {
        props: {
            songData
        }
    }
}

export default function Song({ songData }) {
    return (
        <div>
            <Link href='/songs'><a>&#8592; back</a></Link>
            <div className = "container">
                <h1>{songData.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: songData.contentHtml }} />
            </div>
        </div>
    )
}