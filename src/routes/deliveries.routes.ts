import { DeliveriesControllers } from "@/controllers/deliveriesControllers";
import { DeliveriesStatusControllers } from "@/controllers/deliveriesStatusControllers";
import { ensureAuthenticated } from "@/middlewares/ensureAuthenticated";
import { verifyUserAuthorization } from "@/middlewares/verifyUserAuthorization";
import { Router } from "express";

const deliveriesRoutes = Router();

const deliveriesControllers = new DeliveriesControllers();
const deliveriesStatusControllers = new DeliveriesStatusControllers();

deliveriesRoutes.use(ensureAuthenticated, verifyUserAuthorization(["sale"]));
deliveriesRoutes.post("/", deliveriesControllers.create);
deliveriesRoutes.get("/", deliveriesControllers.index);

deliveriesRoutes.patch("/:id/status", deliveriesStatusControllers.update);

export { deliveriesRoutes };
