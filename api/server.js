'use strict';

const express = require('express');
const logger = require('morgan');
require('colors');

// Security
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const cors = require('cors');

const { NODE_ENV, PORT, CORS_URL } = require('./config/env.keys');

const connectMongoDB = require('./config/mongoDB');

const router = require('./router');

const errorHandler = require('./middleware/errorHandler');

// create server
const app = express();

// connection to database
connectMongoDB();

// In development mode writes a log to the console
if (NODE_ENV === 'development') {
  app.use(logger('dev'));
}

// Body parser
app.use(express.urlencoded());
app.use(express.json());

// ---- sequrity ----
app.use(mongoSanitize());

app.use(helmet());

// Used to limit repeated requests
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

app.use(hpp());

app.use(cors({ origin: `${CORS_URL}:${PORT}` }));
// ---- -------- ----

// Router
router(app);

// error handler
app.use(errorHandler);

const server = app.listen(PORT || 3300, () => {
  console.log(`Server started in ${NODE_ENV} mode on port: ${PORT}`.black.bgWhite.bold);
});

process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  server.close(() => process.exit(1));
});
