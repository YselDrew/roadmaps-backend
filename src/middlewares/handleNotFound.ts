import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export default (_req: Request, res: Response) => {
	return res.status(StatusCodes.NOT_FOUND).json({ message: 'Resource not found' });
};
