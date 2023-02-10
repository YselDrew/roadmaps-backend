import Joi from 'joi';

export default Joi.object({
  id: Joi.number().min(1).max(2147483647).required(),
});
