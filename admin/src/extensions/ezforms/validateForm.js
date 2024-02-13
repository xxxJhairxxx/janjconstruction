const Joi = require("joi");

const schema = Joi.object({
  name: Joi.string().min(3).max(30).allow(null, ""),
  email: Joi.string()
    .required()
    .pattern(
      new RegExp(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      )
    )
    .messages({
      "string.pattern.base": "Invalid Email",
    }),
  phone: Joi.string().allow(null, ""),
  services: Joi.string().allow(null, ""),
  message: Joi.string().allow(null, ""),
});

module.exports = { schema };
