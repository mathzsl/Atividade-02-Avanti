import { Router } from "express";
import { eventsRoutes } from "./event.routes";

const routes = Router();

routes.use("/events", eventsRoutes);

export { routes };
