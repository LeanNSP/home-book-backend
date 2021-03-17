'use strict';

const MessageModel = require('../models/message.model');

exports.addMessage = async (req, res, next) => {
  const { name, message } = req.body;

  try {
    const currentMessage = await MessageModel.create({ name, message });

    return res.status(201).json(currentMessage);
  } catch (error) {
    next(error);
  }
};

exports.getAllMessages = async (req, res, next) => {
  try {
    const messages = await MessageModel.find();

    return res.status(200).json(messages);
  } catch (error) {
    next(error);
  }
};
