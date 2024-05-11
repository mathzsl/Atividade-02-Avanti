import e, { Router } from "express";

import { FindAllEventController } from "../modules/events/usecases/findAllEvents/find-all-event.controller";
import { GetEventByIdController } from "../modules/events/usecases/getEventById/get-event-by-id.controller"; 
import { CreateEventController } from "../modules/events/usecases/createEvent/create-event.controller";
import { DeleteEventController } from "../modules/events/usecases/deleteEvent/delete-event.controller";
import { UpdateEventController } from "../modules/events/usecases/updateEvent/update-event.controller";

const findAllEventsController = new FindAllEventController()
const getEventByIdController = new GetEventByIdController()
const createEventController = new CreateEventController();
const deleteEventController = new DeleteEventController();
const updateEventController = new UpdateEventController();

const eventsRoutes = Router();

eventsRoutes.get("/", findAllEventsController.handle)
eventsRoutes.get("/:id", getEventByIdController.handle)
eventsRoutes.post("/", createEventController.handle);
eventsRoutes.post("/:id", updateEventController.handle)
eventsRoutes.delete("/:id", deleteEventController.handle)


export { eventsRoutes };
