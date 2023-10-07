import { pool } from "../config/database.js";
import "../config/dotenv.js";
import events from "../data/events.js";

const createEventsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS events;
    CREATE TABLE IF NOT EXISTS events (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      type VARCHAR(255) NOT NULL,
      topics VARCHAR(255) NOT NULL,
      date VARCHAR(255) NOT NULL,  -- consider using DATE type if needed
      location VARCHAR(255) NOT NULL,
      event_url VARCHAR(255) NOT NULL,
      image_url VARCHAR(255) NOT NULL
    )
  `;

  try {
    await pool.query(createTableQuery);
    console.log("🎉 events table created successfully");
  } catch (err) {
    console.error("⚠️ error creating events table", err);
  }
};

const seedEventsTable = async () => {
  await createEventsTable();

  events.forEach((event) => {
    const insertQuery = {
      text: "INSERT INTO events (name, type, topics, date, location, event_url, image_url) VALUES ($1, $2, $3, $4, $5, $6, $7)",
    };

    const values = [
      event.name,
      event.type,
      event.topics,
      event.date,
      event.location,
      event.event_url,
      event.image_url,
    ];

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error(`⚠️ error inserting event: ${event.name}`, err);
        return;
      }
      console.log(`✅ ${event.name} added successfully`);
    });
  });
};

seedEventsTable();
