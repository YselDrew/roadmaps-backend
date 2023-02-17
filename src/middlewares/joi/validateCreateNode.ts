import { NextFunction, Request, Response } from 'express';
import { Schema, ValidationResult } from 'joi';

import { IValidationErrorResponse } from '../../interfaces/joi/validationErrorResponse';
import formatErrors from '../../libs/joi/formatErrors';
import createNodeBody from '../../libs/joi/schemas/roadmaps/createNodeBody';

export default (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;

  const { error }: ValidationResult<Schema> = createNodeBody.validate(body);

  if (error) {
    const errors: IValidationErrorResponse[] = formatErrors(error);
    return res.status(400).json(errors);
  }

  return next();
};
