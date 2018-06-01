'use strict';
const _= require('lodash');
require('./logging/stackTraceInfo');
const logger = require('./logging/logger').logger;


class TimeSlot{

  /**
   * gets a list of groupEvents
   * @param groupEvent
   */
  constructor ( groupEvent)
  {
    this.events = _.cloneDeep(groupEvent);
  }

  logTimeSlot()
  {
    logger.debug(`${JSON.stringify(this.events)}`);
  }

}



module.exports = { TimeSlot};