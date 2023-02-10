import { NextFunction, Request, Response } from 'express';
import {ValidationResult} from 'joi';

import { IValidationErrorResponse } from '../../interfaces/joi/validationErrorResponse';
import formatErrors from '../../libs/joi/formatErrors';
import createRoadmapBody from '../../libs/joi/schemas/createRoadmapBody';

export default async (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;

  // TODO: check how types work for schema
  const { error }: ValidationResult<any> = createRoadmapBody.validate(body);

  if (error) {
    const errors: IValidationErrorResponse[] = formatErrors(error);
    return res.status(400).json(errors);
  }

  return next();
};
