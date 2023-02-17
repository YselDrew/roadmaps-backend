import { NextFunction, Request, Response } from 'express';
import { Roadmap } from '../../entities/Roadmap';
import selectRoadmap from '../../repositories/roadmaps/selectRoadmap';

export default async (req: Request, res: Response, next: NextFunction) => {
  const { body: { roadmapId } } = req;

  const roadmap: Roadmap = await selectRoadmap(roadmapId);
  if (!roadmap) return res.status(400); // TODO: figure out error handling

  return next();
}
