import express from "express";

import EventsController from "../controllers/events.js";

const router = express.Router();

router.get("/", EventsController.getEvents);
router.get("/location/:location", EventsController.getEventsByLocation);
router.get("/locations", EventsController.getEventLocations);

export default router;
