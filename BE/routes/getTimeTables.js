'use strict';
require('../logging/stackTraceInfo');
const logger = require('../logging/logger').logger;
const location = `directory: ${__dirname}, file: ${ __filename}`; //for logging purposes



function getTimeTables(req,res) {

  const msg = `getTimeTables`;
  const locationMeta = `${location}, func: ${ __func},line:${ __line}`;
  logger.info(msg, { 'meta': `${locationMeta}` });

  res.status(200).json({ getTimeTables: 'getTimeTables' });
}

module.exports = {
  getTimeTables
};
