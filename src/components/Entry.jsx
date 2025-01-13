import marker from "../images/marker.png";

export default function Entry(props){
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img 
                  className="main-image"
                  src={props.entry.img.src}
                  alt={props.entry.img.alt}
                />
            </div>
            <div className="info-container">
                <img 
                className="marker" 
                src={marker} 
                alt="map marker icon" />
                <span className="country" >{props.entry.country}</span>
                <a href={props.entry.googleMapsLink} target="_blank">View on Google Maps</a>
                <h2 className="entrty-title">{props.entry.title}</h2>
                <p className="entrty-dates">{props.entry.dates}</p>
                <p className="entrty-text">{props.entry.text}</p>

            </div>
        </article>
    )
}