import express, { Router } from 'express';

import createRoadmap from '../controllers/roadmaps/createRoadmap';

export const router: Router = express.Router();

router
	.post('/', createRoadmap);
