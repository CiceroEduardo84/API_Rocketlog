import { appError } from "@/utils/appError";
import { Request, Response, NextFunction } from "express";

export function errorHandling(
  error: any,
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (error instanceof appError) {
    return response.status(error.statuscode).json({ message: error.message });
  }

  return response.status(500).json({ message: error.message });
}
