'use strict';

const { NODE_ENV } = require('../config/env.keys');

const errorHandler = (err, req, res, next) => {
  if (NODE_ENV === 'development') {
    console.log(err);
  }

  const code = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  return res.status(code).json({ error: message });
};

module.exports = errorHandler;
