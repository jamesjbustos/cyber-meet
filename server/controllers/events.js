import { pool } from "../config/database.js";

const getEvents = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM events ORDER BY id ASC");
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getEventsByLocation = async (req, res) => {
  try {
    const location = req.params.location;
    const selectQuery =
      "SELECT * FROM events WHERE location = $1 ORDER BY id ASC";
    const results = await pool.query(selectQuery, [location]);
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getEventLocations = async (req, res) => {
  try {
    const results = await pool.query("SELECT DISTINCT location FROM events");
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default {
  getEvents,
  getEventsByLocation,
  getEventLocations,
};
