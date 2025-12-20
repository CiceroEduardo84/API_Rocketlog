import { DeliveriesControllers } from "@/controllers/deliveriesControllers";
import { ensureAuthenticated } from "@/middlewares/ensureAuthenticated";
import { verifyUserAuthorization } from "@/middlewares/verifyUserauthorization";
import { Router } from "express";

const deliveriesRoutes = Router();

const deliveriesControllers = new DeliveriesControllers();

deliveriesRoutes.use(ensureAuthenticated, verifyUserAuthorization(["sale"]));
deliveriesRoutes.post("/", deliveriesControllers.create);

export { deliveriesRoutes };
