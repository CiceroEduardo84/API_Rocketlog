import { Request, Response } from "express";

class DeliveriesControllers {
  create(request: Request, response: Response) {
    return response.json({ message: "OK" });
  }
}

export { DeliveriesControllers };
