import { request } from "../utilities/api";

const eventsURL = "/api/events";

const getAllEvents = () => request("GET", eventsURL);
const getEventsByLocation = (location) =>
  request("GET", `/api/events/location/${location}`);
const getEventLocations = () => request("GET", `${eventsURL}/locations`);

export default {
  getAllEvents,
  getEventsByLocation,
  getEventLocations,
};
