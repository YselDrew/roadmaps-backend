import { Request, Response, NextFunction } from 'express';

import createRoadmap from '../../services/roadmaps/createRoadmap';

export default async (req: Request, res: Response, next: NextFunction) => {
	const { body } = req;

	await createRoadmap(body);

	return res.json({
		status: 'created'
	});
};
