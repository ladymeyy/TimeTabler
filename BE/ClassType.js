
'use strict';
const _= require('lodash');
require('./logging/stackTraceInfo');
const logger = require('./logging/logger').logger;




class ClassType {
  /**
   *
   * @param Type :string  Lecture|Tutorial|Lab
   * @param Groups: list of Group objects
   * @param IsMandatory: string
   */
  constructor (Type, Groups, IsMandatory = false ){

    this.type = Type;
    this.isMandatory = IsMandatory ;
    this.groups = _.cloneDeep(Groups);
  }

  logClassType()
  {
    //may need to log with loop for each group?
    logger.debug(` type: ${this.type},  isMandatory: ${this.isMandatory},  groups: ${JSON.stringify(this.groups)}`);
  }

}


module.exports = { ClassType };