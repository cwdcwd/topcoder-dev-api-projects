/**
 * tc-project-service
 * Services that provide access and interaction with user projects.
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ProjectQuestionOption'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ProjectQuestionOption'));
  } else {
    // Browser globals (root is window)
    if (!root.TcProjectService) {
      root.TcProjectService = {};
    }
    root.TcProjectService.OptionalAnswer = factory(root.TcProjectService.ApiClient, root.TcProjectService.ProjectQuestionOption);
  }
}(this, function(ApiClient, ProjectQuestionOption) {
  'use strict';




  /**
   * The OptionalAnswer model module.
   * @module model/OptionalAnswer
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>OptionalAnswer</code>.
   * @alias module:model/OptionalAnswer
   * @class
   * @param id {Number} 
   * @param answerHtmlValue {String} 
   */
  var exports = function(id, answerHtmlValue) {
    var _this = this;

    _this['id'] = id;


    _this['answerHtmlValue'] = answerHtmlValue;
  };

  /**
   * Constructs a <code>OptionalAnswer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OptionalAnswer} obj Optional instance to populate.
   * @return {module:model/OptionalAnswer} The populated <code>OptionalAnswer</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('projectQuestionOption')) {
        obj['projectQuestionOption'] = ProjectQuestionOption.constructFromObject(data['projectQuestionOption']);
      }
      if (data.hasOwnProperty('projectAnswer')) {
        obj['projectAnswer'] = ApiClient.convertToType(data['projectAnswer'], 'String');
      }
      if (data.hasOwnProperty('answerHtmlValue')) {
        obj['answerHtmlValue'] = ApiClient.convertToType(data['answerHtmlValue'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/ProjectQuestionOption} projectQuestionOption
   */
  exports.prototype['projectQuestionOption'] = undefined;
  /**
   * @member {String} projectAnswer
   */
  exports.prototype['projectAnswer'] = undefined;
  /**
   * @member {String} answerHtmlValue
   */
  exports.prototype['answerHtmlValue'] = undefined;



  return exports;
}));


