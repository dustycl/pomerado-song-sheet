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
        return <li>{song}</li>
    })
    return <ul>{songList}</ul>
}

const ServiceList = ({ servicesData }) => {
    const serviceList = servicesData.map(({ id, date, songs }) => {
        return (
            <li key={id}>
                {date}
                <br />
                <SongList songs={songs} />
            </li>
        )
    })
    return<ul>{serviceList}</ul>
}

export default function Services({ servicesData }) {
    return (
        <div className="container">
            <h1>Services</h1>
            <ServiceList servicesData={servicesData} />
        </div>
    )
}