import Joi, { ValidationError as InputError } from 'joi';
import { ValidationError } from '../utils/errorHandler';
import { anyObject } from '../@types';

export const handleValidationError = (error: InputError) => {
	const { details } = error;
	const errorMessage = details[0].message;
	throw new ValidationError(errorMessage);
};

export const validateTodoInput = (data: anyObject) => {
	const schema = Joi.object({
		title: Joi.string().min(4).max(50).required()
	});

	return schema.validate(data);
};
