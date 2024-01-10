export default function Card(props) {
    const pinUrl = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.clipartmax.com%2Fpng%2Fmiddle%2F5-51101_icon-map-pin-google-maps-icons-png.png&f=1&nofb=1&ipt=d0270c9c2951c1021ae8271b84006307fd21a03bd31f4be3333bc7e026dd6e29&ipo=images"
    return (
        <div className="card">

            <img src={`${props.img}`} alt="cardImage" className="card-image" />
            <div className="cardStats">
                <section className="location-stats">
                    <img src={`${pinUrl}`} alt="" className="pin" />
                    <p className="location">{props.location.toUpperCase()}</p>
                    <p className="google-address"><a href={`${props.googleMapsUrl}`}>View on Google Maps</a></p>
                </section>
                <h1 className="title">{props.title}</h1>
                <p className="duration">{`${props.startDate} - ${props.endDate}`}</p>
                <p className="description">{props.description}</p>

            </div>
        </div>



    )
}