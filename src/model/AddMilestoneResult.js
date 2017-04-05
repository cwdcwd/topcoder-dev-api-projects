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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.TcProjectService) {
      root.TcProjectService = {};
    }
    root.TcProjectService.AddMilestoneResult = factory(root.TcProjectService.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AddMilestoneResult model module.
   * @module model/AddMilestoneResult
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>AddMilestoneResult</code>.
   * @alias module:model/AddMilestoneResult
   * @class
   * @param success {Boolean} 
   * @param status {Number} 
   * @param metadata {Object} 
   * @param content {Number} 
   */
  var exports = function(success, status, metadata, content) {
    var _this = this;

    _this['success'] = success;
    _this['status'] = status;
    _this['metadata'] = metadata;
    _this['content'] = content;
  };

  /**
   * Constructs a <code>AddMilestoneResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AddMilestoneResult} obj Optional instance to populate.
   * @return {module:model/AddMilestoneResult} The populated <code>AddMilestoneResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('success')) {
        obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Number');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} success
   */
  exports.prototype['success'] = undefined;
  /**
   * @member {Number} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Object} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * @member {Number} content
   */
  exports.prototype['content'] = undefined;



  return exports;
}));


