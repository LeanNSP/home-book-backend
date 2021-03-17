'use strict';

const Joi = require('joi');

exports.validateAddMessage = (req, res, next) => {
  const rules = Joi.object({
    name: Joi.string().required(),
    message: Joi.string().required(),
  });

  const result = rules.validate(req.body);

  if (result.error) {
    next(new Error());
  }

  next();
};
