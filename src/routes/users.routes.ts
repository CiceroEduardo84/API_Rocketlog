import { UsersControllers } from "@/controllers/usersController";
import { Router } from "express";

const usersRoutes = Router();

const usersControllers = new UsersControllers();

usersRoutes.post("/", usersControllers.create);

export { usersRoutes };
