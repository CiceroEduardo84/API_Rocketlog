import { UsersControllers } from "@/controllers/usersControllers";
import { Router } from "express";

const usersRoutes = Router();

const usersControllers = new UsersControllers();

usersRoutes.get("/", usersControllers.create);

export { usersRoutes };
