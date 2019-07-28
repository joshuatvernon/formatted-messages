#!/usr/bin/env node

/**
 * Listens for uncaught exceptions and prints the error to the console and exits
 */
const uncaughtExceptionListener = () => {
  process.on('uncaughtException', error => {
    // eslint-disable-next-line no-console
    console.error('Uncaught Exception thrown\n', error);
    process.exit(1);
  });
};

/**
 * Listens for unhandled rejections and prints the error to the console and exits
 */
const unhandledRejectionListener = () => {
  process.on('unhandledRejection', (reason, p) => {
    // eslint-disable-next-line no-console
    console.error('Unhandled Rejection at promise\n', p, reason);
    process.exit(1);
  });
};

module.exports = {
  uncaughtExceptionListener,
  unhandledRejectionListener,
};
