import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import EventsAPI from "../services/eventsapi";

const Events = () => {
  const [events, setEvents] = useState([]);
  const { country } = useParams();

  const fetchEvents = async (location = null) => {
    try {
      const data = location
        ? await EventsAPI.getEventsByLocation(location)
        : await EventsAPI.getAllEvents();
      setEvents(data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents(country);
  }, [country]);

  return (
    <main>
      {/* Event listing */}
      {events && events.length > 0 ? (
        <div className="card-container">
          {events.map((event) => (
            <Card key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <h3>{"No events found 😔"}</h3>
      )}
    </main>
  );
};

export default Events;
