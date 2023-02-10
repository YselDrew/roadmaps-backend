import { ValidationError, Context } from 'joi';

import { IValidationErrorResponse } from '../../interfaces/joi/validationErrorResponse';

export default (error: ValidationError): IValidationErrorResponse[] => {
	const { details } = error;

	return details.map(({ message, context }) => {
		const { key } = context as Context;

		return { field: key, message };
	});
};
