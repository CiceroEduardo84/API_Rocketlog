import { prisma } from "@/database/prisma";
import { Request, Response } from "express";
import { z } from "zod";

class DeliveriesControllers {
  async create(request: Request, response: Response) {
    const bodySchema = z.object({
      user_id: z.string(),
      description: z.string(),
    });

    const { user_id, description } = bodySchema.parse(request.body);

    await prisma.delivery.create({
      data: {
        userID: user_id,
        description,
      },
    });

    return response.status(201).json();
  }

  async index(request: Request, response: Response) {
    const deliveries = await prisma.delivery.findMany({
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });

    return response.json(deliveries);
  }
}

export { DeliveriesControllers };
