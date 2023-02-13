import express, { Router } from 'express';

import createRoadmap from '../controllers/roadmaps/createRoadmap';
import getAllRoadmaps from '../controllers/roadmaps/getAllRoadmaps';
import validateIdParam from '../middlewares/joi/validateIdParam';
import validateCreateRoadmap from '../middlewares/joi/validateCreateRoadmap';
import getRoadmap from '../controllers/roadmaps/getRoadmap';
import createNode from '../controllers/roadmaps/createNode';


export const router: Router = express.Router();

router.post(
  '/', 
  validateCreateRoadmap,
  createRoadmap
);

router.post(
  '/:id/nodes',
  createNode,
)

router.get(
  '/',
  getAllRoadmaps,
)

router.get(
  '/:id',
  validateIdParam,
  getRoadmap,
)
