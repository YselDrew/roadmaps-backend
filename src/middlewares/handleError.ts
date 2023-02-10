import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes/build/cjs/status-codes';

export default (err: any, _req: Request, res: Response, _next: NextFunction) => {
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: err });
};
