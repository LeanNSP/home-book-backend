'use strict';

const { Router } = require('express');

const { addMessage, getAllMessages } = require('../controllers/message.controller');

const messageRouter = Router();

messageRouter.post('/', addMessage);
messageRouter.get('/', getAllMessages);

module.exports = messageRouter;
