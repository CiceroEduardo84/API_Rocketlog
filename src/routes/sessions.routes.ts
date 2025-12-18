import { SessionsController } from "@/controllers/sessionsController";
import { UsersControllers } from "@/controllers/usersController";
import { Router } from "express";

const sessionsRoutes = Router();

const sessionsController = new SessionsController();

sessionsRoutes.post("/", sessionsController.create);

export { sessionsRoutes };
