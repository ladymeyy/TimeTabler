'use strict';
const _= require('lodash');
require('./logging/stackTraceInfo');
const logger = require('./logging/logger').logger;


class Group {

  /**
   *
   * @param  Id: string
   * @param Lecturer: string
   * @param Events : GroupEvent[]
   */
  constructor ( Id,  Lecturer,  Events)
  {
    this.id = Id;
    this.lecturer = Lecturer;
    this.events = Events;
  }

  logGroup()
  {
    logger.debug(` id: ${this.id},  lecturer: ${this.lecturer}, events: ${JSON.stringify(this.events)}`);
  }

}



module.exports = { Group };