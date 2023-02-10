import { NextFunction, Request, Response } from "express";
import getAllRoadmaps from "../../services/roadmaps/getAllRoadmaps";

export default async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await getAllRoadmaps();

    return res.status(200).json({ data })
  } catch(error) {
    return next(error);
  }
}