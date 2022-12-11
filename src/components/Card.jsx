import './Card.css'

// title: "Mount Fuji",
// location: "Japan",
// googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
// startDate: "12 Jan, 2021",
// endDate: "24 Jan, 2021",
// description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
// imageUrl: "https://source.unsplash.com/WLxQvbMyfas"

function Card(props) {
  return (
    <div className="card">
      <div className="card__img">
        <img src={props.imageUrl} width="125px" height="168px" alt="" />
      </div>
      <div className="card__description">
        <p className="card__place">
          <img src="./images/mark.svg" width="7" height="10" alt="" />
          <span className="card__country"> {props.location}</span>
          <a className="card__link" href={props.googleMapsUrl}> View on Google Maps</a>
        </p>
        <h2 className="card__title">{props.title}</h2>
        <p className="card__time">{props.startDate} - {props.endDate}</p>
        <p className="card__text">{props.description}</p>
      </div>
    </div>
  )
}

export default Card