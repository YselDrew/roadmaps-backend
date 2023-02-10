import express, { Router } from 'express';

import createRoadmap from '../controllers/roadmaps/createRoadmap';
import validateCreateRoadmap from '../middlewares/joi/validateCreateRoadmap';

export const router: Router = express.Router();

router
  .post(
    '/', 
    validateCreateRoadmap,
    createRoadmap,
  );
