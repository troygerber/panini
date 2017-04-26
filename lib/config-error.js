'use strict';

const chalk = require('chalk');
const prettyPrint = require('pretty-print');

/**
 * Log an error related to a misconfigured Panini instance.
 * @param {String} err - Error description.
 * @param {Object} options - Options object that was passed to Panini.
 */
module.exports = (err, options) => {
  console.log(chalk.red.bold('There\'s an issue with how Panini is configured.'));
  console.log(err + '\n');
  console.log('This is what the Panini configuration looks like:');
  console.log(prettyPrint({
    leftPadding: 2,
    rightPadding: 3
  }, options));
};
