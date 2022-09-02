const Joi = require("joi");
module.exports = function (user) {
  const JoiSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().min(5).max(50).required(),
    password: Joi.string().required(),
    mobile: Joi.number().required(),
  }).options({ abortEarly: false });

  return JoiSchema.validate(user);
};
