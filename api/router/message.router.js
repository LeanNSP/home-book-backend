'use strict';

const { Router } = require('express');

const messageRouter = Router();

messageRouter.post('/');
messageRouter.get('/');

module.exports = messageRouter;
