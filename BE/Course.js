'use strict';
const _= require('lodash');
require('./logging/stackTraceInfo');
const logger = require('./logging/logger').logger;



class Course{

  /**
   *
   * @param Id
   * @param Name
   * @param MainLecturer
   * @param AcademicPoints
   * @param Classes: list of classType objects
   * */
  constructor( Id,  Name,  MainLecturer,  AcademicPoints,  Classes = null)
  {
    this.id= Id;
    this.name = Name;
    this.mainLecturer = MainLecturer;
    this.academicPoints = AcademicPoints;
    this.classes =  _.cloneDeep(Classes);
  }

  logCourse()
  {
    //may need to log with loop for each group?
    logger.debug(` id: ${this.id},  name: ${this.name},  mainLecturer: ${this.mainLecturer}, classes:  ${JSON.stringify(this.classes)}`);
  }

}



module.exports = { Course };
