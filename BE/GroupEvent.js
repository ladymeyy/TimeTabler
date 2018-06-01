'use strict';
const _= require('lodash');
require('./logging/stackTraceInfo');
const logger = require('./logging/logger').logger;



class GroupEvent {

  /**
   *
   * @param Day: dayOfweek?
   * @param StartHour:  Time object
   * @param EndHour:  Time object
   * @param Room: string
   */
  constructor ( Day ,  StartHour,  EndHour,  Room)
  {
    this.day = Day;
    this.startHour = StartHour;
    this.endHour = EndHour;
    this.room = Room;
  }


  // TODO compare function might be needed

  /*        public int CompareTo(GroupEvent other)
        {
            if (other == null)
            {
                return 1;
            }

            var returnValue = this.Day.CompareTo(other.Day);
            if (returnValue == 0)
            {
                // if same day, decide by start hour
                returnValue = this.StartHour.CompareTo(other.StartHour);
            }

            return returnValue;
        }*/


   logGroupEvent()
  {
    logger.debug(` day: ${this.day},  startHour: ${this.startHour},  endHour: ${this.endHour}, room: ${this.room}`);
  }
}



module.exports = { GroupEvent };