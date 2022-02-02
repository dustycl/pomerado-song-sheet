import { getSortedServicesData } from "../lib/services"

export async function getStaticProps() {
    const servicesData = await getSortedServicesData();

    return {
        props: {
            servicesData
        }
    }
}

const SongList = ({ songs }) => {
    const songList = songs.map(({song}) => {
        return <li key={song}>{song}</li>
    })
    return <ul>{songList}</ul>
}

const ServiceList = ({ servicesData }) => {
    const serviceList = servicesData.map(({ id, title, songs }) => {
        return (
            <li key={id}>
                {title}
                <br />
                {songs && <SongList songs={songs} />}
            </li>
        )
    })
    return<ul>{serviceList}</ul>
}

export default function Services({ servicesData }) {
     // Check if servicesData is null
    if (servicesData) {
        return (
            <div className="container">
                <h1>Services</h1>
                <ServiceList servicesData={servicesData} />
            </div>
        )
    }
    else{
        return (
            <div className="container">
                <h1>Services</h1>
                <p>It looks like you don't have any services yet</p>
            </div>
        )
    }
    
}