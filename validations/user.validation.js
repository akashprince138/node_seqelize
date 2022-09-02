const Joi = require("joi");
module.exports = function (user) {
  const JoiSchema = Joi.object({
    email: Joi.string().email().min(5).max(50).required(),
    password: Joi.string().required(),
  }).options({ abortEarly: false });

  return JoiSchema.validate(user);
};
