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
    root.TcProjectService.CopilotPostContent = factory(root.TcProjectService.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CopilotPostContent model module.
   * @module model/CopilotPostContent
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CopilotPostContent</code>.
   * @alias module:model/CopilotPostContent
   * @class
   * @param copilotProjectId {Number} 
   */
  var exports = function(copilotProjectId) {
    var _this = this;

    _this['copilotProjectId'] = copilotProjectId;
  };

  /**
   * Constructs a <code>CopilotPostContent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CopilotPostContent} obj Optional instance to populate.
   * @return {module:model/CopilotPostContent} The populated <code>CopilotPostContent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('copilotProjectId')) {
        obj['copilotProjectId'] = ApiClient.convertToType(data['copilotProjectId'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} copilotProjectId
   */
  exports.prototype['copilotProjectId'] = undefined;



  return exports;
}));


