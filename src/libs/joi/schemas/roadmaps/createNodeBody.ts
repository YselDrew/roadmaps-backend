import Joi from 'joi';

export default Joi.object({
  name: Joi.string().trim().alphanum().min(2).max(100).required(),
  roadmapId: Joi.number().min(1).max(2147483647).required(),
  parentNodeId: Joi.number().min(1).max(2147483647).required().allow(null),
  noteId: Joi.number().min(1).max(2147483647).optional(),
});
