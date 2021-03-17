'use strict';

module.exports = app => {
  app.use('/message', require('./message.router'));
};
