import express, { Express, Request, Response } from 'express';

import { router as roadmaps } from './roadmaps';

export const routes = (app: Express) => {
	app
		.use('/health', (_req: Request, res: Response) => {
			res.json({ status: 'OK' });
		})
		.use(express.json())
		.use('/roadmaps', roadmaps);
};
