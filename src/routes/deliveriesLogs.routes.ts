import { DeliveryLogsControllers } from "@/controllers/deliveryLogsControllers";
import { ensureAuthenticated } from "@/middlewares/ensureAuthenticated";
import { verifyUserAuthorization } from "@/middlewares/verifyUserAuthorization";
import { Router } from "express";

const deliveryLogsRoutes = Router();
const deliveryLogsControllers = new DeliveryLogsControllers();

deliveryLogsRoutes.post(
  "/",
  ensureAuthenticated,
  verifyUserAuthorization(["sale"]),
  deliveryLogsControllers.create
);

deliveryLogsRoutes.get(
  "/:delivery_id/show",
  ensureAuthenticated,
  verifyUserAuthorization(["sale", "customer"]),
  deliveryLogsControllers.show
);

export { deliveryLogsRoutes };
