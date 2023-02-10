import { NextFunction, Request, Response } from "express";
import getRoadmap from "../../services/roadmaps/getRoadmap";

export default async (req: Request, res: Response, next: NextFunction) => {
  const { params: { id } } = req;
  const roadmapId = Number(id);

  try {
    const data = await getRoadmap(roadmapId)

    return res.status(200).json({ data });
  } catch (error) {
    return next(error);
  }
}
