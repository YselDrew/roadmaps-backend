import Joi from 'joi';

export default Joi.object({
	name: Joi.string().trim().alphanum().min(2).max(100).required(),
	description: Joi.string().trim().min(1).max(500).required(),
});
