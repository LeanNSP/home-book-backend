'use strict';

const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const MessageSchema = new Schema({
  name: { type: String, required: true },
  message: { type: String, required: true },
});

const MessageModel = mongoose.model('Message', MessageSchema);

module.exports = MessageModel;
