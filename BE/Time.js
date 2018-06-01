'use strict';
const _= require('lodash');
require('./logging/stackTraceInfo');
const logger = require('./logging/logger').logger;


const TotalHoursOfDay = 14;
const TotalSchoolDaysInWeek = 6;

class Time {

  constructor ( Hour,  Minute,  HourOfDay)
  {
    this.hour = Hour;
    this.minute  = Minute;
    this.hourOfDay = HourOfDay;
  }



  logTime()
  {
    logger.debug(` hour: ${this.hour},  minute: ${this.minute},  hourOfDay: ${this.hourOfDay}`);
  }

  //TODO: find out what this function is for
  // static  IndexHourToString( i,  getEndTime = false)
  // {
  //   return TimeFactory.FromIndex(i, getEndTime).ToString();
  // }



}


module.exports = { Time , TotalHoursOfDay, TotalSchoolDaysInWeek };