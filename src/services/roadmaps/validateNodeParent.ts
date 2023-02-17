import { NextFunction, Request, Response } from 'express';
import { Roadmap } from '../../entities/Roadmap';
import selectNodesByRoadmap from '../../repositories/roadmaps/selectNodesByRoadmap';
import selectRoadmap from '../../repositories/roadmaps/selectRoadmap';

export default async (req: Request, res: Response, next: NextFunction) => {
  const { body: { roadmapId } } = req;

  const essentialNode: Node = await selectNodesByRoadmap(roadmapId)
  // roadmap already has null node

  return next();
}
