import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const Card = ({ event }) => {
  return (
    <article className="card">
      <img src={event.image_url} alt={`${event.name} image`} />
      <h1>{event.name}</h1>
      <p className="event-type">{event.type}</p>
      <p className="event-topics">{event.topics}</p>
      <p className="event-date">{event.date}</p>
      <p className="event-address">{event.address}</p>
      <a
        href={event.event_url}
        target="_blank"
        rel="noopener noreferrer"
        className="event-link"
      >
        Event Link{" "}
        <ArrowOutwardIcon className="event-link-icon" fontSize="small" />
      </a>
    </article>
  );
};

export default Card;
