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
    root.TcProjectService.CopilotRequestBody = factory(root.TcProjectService.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CopilotRequestBody model module.
   * @module model/CopilotRequestBody
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CopilotRequestBody</code>.
   * @alias module:model/CopilotRequestBody
   * @class
   * @param copilotUserId {Number} 
   */
  var exports = function(copilotUserId) {
    var _this = this;

    _this['copilotUserId'] = copilotUserId;
  };

  /**
   * Constructs a <code>CopilotRequestBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CopilotRequestBody} obj Optional instance to populate.
   * @return {module:model/CopilotRequestBody} The populated <code>CopilotRequestBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('copilotUserId')) {
        obj['copilotUserId'] = ApiClient.convertToType(data['copilotUserId'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} copilotUserId
   */
  exports.prototype['copilotUserId'] = undefined;



  return exports;
}));

