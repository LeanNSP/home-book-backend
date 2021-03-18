'use strict';

const Joi = require('joi');

const ErrorResponse = require('../utils/errorResponse');

exports.validateAddMessage = (req, res, next) => {
  const rules = Joi.object({
    name: Joi.string().min(2).max(20).required(),
    message: Joi.string().min(3).max(450).required(),
  });

  const result = rules.validate(req.body);

  if (result.error) {
    next(new ErrorResponse('Invalid name or message', 401));
  }

  next();
};
