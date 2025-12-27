import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "@/utils/appError";
import { authConfig } from "@/config/auth";

interface TokenPayLoad {
  role: string;
  sub: string;
}

function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new AppError("JWT token not found", 401);
    }

    const [, token] = authHeader.split(" ");

    const { role, sub: user_id } = jwt.verify(
      token,
      authConfig.jwt.secret
    ) as TokenPayLoad;

    request.user = {
      id: user_id,
      role,
    };

    return next();
  } catch {
    throw new AppError("Invalid JWT token", 401);
  }
}

export { ensureAuthenticated };
