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
    define(['ApiClient', 'model/BillingAccountPostResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BillingAccountPostResult'));
  } else {
    // Browser globals (root is window)
    if (!root.TcProjectService) {
      root.TcProjectService = {};
    }
    root.TcProjectService.BillingAccountPostResponse = factory(root.TcProjectService.ApiClient, root.TcProjectService.BillingAccountPostResult);
  }
}(this, function(ApiClient, BillingAccountPostResult) {
  'use strict';




  /**
   * The BillingAccountPostResponse model module.
   * @module model/BillingAccountPostResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>BillingAccountPostResponse</code>.
   * @alias module:model/BillingAccountPostResponse
   * @class
   * @param id {String} 
   * @param version {String} 
   * @param result {module:model/BillingAccountPostResult} 
   */
  var exports = function(id, version, result) {
    var _this = this;

    _this['id'] = id;
    _this['version'] = version;
    _this['result'] = result;
  };

  /**
   * Constructs a <code>BillingAccountPostResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BillingAccountPostResponse} obj Optional instance to populate.
   * @return {module:model/BillingAccountPostResponse} The populated <code>BillingAccountPostResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'String');
      }
      if (data.hasOwnProperty('result')) {
        obj['result'] = BillingAccountPostResult.constructFromObject(data['result']);
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} version
   */
  exports.prototype['version'] = undefined;
  /**
   * @member {module:model/BillingAccountPostResult} result
   */
  exports.prototype['result'] = undefined;



  return exports;
}));

