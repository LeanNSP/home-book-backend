'use strict';

const express = require('express');
const colors = require('colors');

const { NODE_ENV, PORT } = require('./config/env.keys');

const app = express();

// Body parser
app.use(express.urlencoded());
app.use(express.json());

const server = app.listen(PORT || 3300, () => {
  console.log(`Server started in ${NODE_ENV} mode on port: ${PORT}`.black.bgWhite.bold);
});

process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  server.close(() => process.exit(1));
});
