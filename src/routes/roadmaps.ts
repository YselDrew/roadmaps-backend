import express, { Router } from 'express';

import createRoadmap from '../controllers/roadmaps/createRoadmap';
import getAllRoadmaps from '../controllers/roadmaps/getAllRoadmaps';
import validateIdParam from '../middlewares/joi/validateIdParam';
import validateCreateRoadmap from '../middlewares/joi/validateCreateRoadmap';
import getRoadmap from '../controllers/roadmaps/getRoadmap';
import createNode from '../controllers/roadmaps/createNode';
import validateCreateNode from '../middlewares/joi/validateCreateNode';
import validateIfRoadmapExists from '../services/roadmaps/validateIfRoadmapExists';

export const router: Router = express.Router();

router.post(
  '/', 
  validateCreateRoadmap,
  createRoadmap
);

router.post(
  '/:id/nodes',
  validateCreateNode,
  validateIfRoadmapExists,
  // check if node is basic (allowed to have null parent)
  createNode,
);

router.get(
  '/',
  getAllRoadmaps,
);

router.get(
  '/:id',
  validateIdParam,
  getRoadmap,
);
