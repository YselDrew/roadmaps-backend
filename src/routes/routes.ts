import express, { Express, Request, Response } from 'express';

import handleError from '../middlewares/handleError';
import handleNotFound from '../middlewares/handleNotFound';

import { router as roadmaps } from './roadmaps';

export default (app: Express) => {
  app
    .use('/health', (_req: Request, res: Response) => {
      res.json({ status: 'OK' });
    })
    .use(express.json())
    .use('/roadmaps', roadmaps)
    .use(handleError)
    .use(handleNotFound);
};
