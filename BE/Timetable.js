
'use strict';
const _= require('lodash');
const { TotalHoursOfDay, TotalSchoolDaysInWeek } = require('./Time');
require('./logging/stackTraceInfo');
const logger = require('./logging/logger').logger;

class Timetable {

  //TODO find : double.maxValue
  constructor (Groups ,  rating = Number.MAX_VALUE){
    this.rating = rating;
    const TimeSlotsTimetable = Timetable.Create2DArray(TotalHoursOfDay);

    groups.forEach(group => { this.Add(group);});

  }


  /*
  * TODO: find out what is this extra constructor needed for
        public Timetable(Timetable instantiation, Group value) : this(instantiation.CoursesGroups)
        {
            this.Add(value);
        }
  *
  * */
  calcRate(constraints)
  {
    let timetableRate = 0;
    constraints.forEach (constraint => {

      //TODO: build constraint and update this
      timetableRate += constraint.RatePenalty * constraint.GetRateFactor(this);
    });
    this.rating = timetableRate;
    return this.rating; // update Rating and return it
  }


  Add(newGroup)
  {
    this.courseGroups.push( _.cloneDeep(newGroup));

    newGroup.Events.forEach(groupEvent => {
      for (let i = groupEvent.StartHour; i < groupEvent.EndHour; i++){
        const timeSlot = TimeSlotsTimetable[i][ parseInt(groupEvent.Day)];
        if (timeSlot === null)
        {
          TimeSlotsTimetable[i][ parseInt(groupEvent.Day)] = new TimeSlot(groupEvent);
        }
        else timeSlot.Events.push(groupEvent);
      }

    });

  }


  static Create2DArray(rows) {
    const arr = [];

    for (let i=0;i<rows;i++) {
      arr[i] = [];
    }

    return arr;
  }
}


module.exports = { Timetable };