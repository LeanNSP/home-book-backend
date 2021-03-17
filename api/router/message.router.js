'use strict';

const { Router } = require('express');

const { addMessage, getAllMessages } = require('../controllers/message.controller');
const { validateAddMessage } = require('../validators/message.validator');

const messageRouter = Router();

messageRouter.post('/', validateAddMessage, addMessage);
messageRouter.get('/', getAllMessages);

module.exports = messageRouter;
