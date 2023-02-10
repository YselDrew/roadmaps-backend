import { NextFunction, Request, Response } from 'express';

import createRoadmap from '../../services/roadmaps/createRoadmap';

export default async (req: Request, res: Response, next: NextFunction) => {
	const { body } = req;

	try {
		await createRoadmap(body);

		return res.status(201).json();
	} catch (error) {
		return next(error);
	}
};
