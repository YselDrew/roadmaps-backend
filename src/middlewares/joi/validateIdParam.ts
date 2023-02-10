import { NextFunction, Request, Response } from 'express';
import { Schema, ValidationResult } from 'joi';

import { IValidationErrorResponse } from '../../interfaces/joi/validationErrorResponse';
import formatErrors from '../../libs/joi/formatErrors';
import idParam from '../../libs/joi/schemas/idParam';

export default (req: Request, res: Response, next: NextFunction) => {
  const { params } = req;

  const { error }: ValidationResult<Schema> = idParam.validate(params);

  if (error) {
    const errors: IValidationErrorResponse[] = formatErrors(error);
    return res.status(400).json(errors);
  }

  return next();
};
