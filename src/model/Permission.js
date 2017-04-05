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
    define(['ApiClient', 'model/PermissionPermissionType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PermissionPermissionType'));
  } else {
    // Browser globals (root is window)
    if (!root.TcProjectService) {
      root.TcProjectService = {};
    }
    root.TcProjectService.Permission = factory(root.TcProjectService.ApiClient, root.TcProjectService.PermissionPermissionType);
  }
}(this, function(ApiClient, PermissionPermissionType) {
  'use strict';




  /**
   * The Permission model module.
   * @module model/Permission
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Permission</code>.
   * @alias module:model/Permission
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>Permission</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Permission} obj Optional instance to populate.
   * @return {module:model/Permission} The populated <code>Permission</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('permissionId')) {
        obj['permissionId'] = ApiClient.convertToType(data['permissionId'], 'Number');
      }
      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'Number');
      }
      if (data.hasOwnProperty('userHandle')) {
        obj['userHandle'] = ApiClient.convertToType(data['userHandle'], 'String');
      }
      if (data.hasOwnProperty('resourceId')) {
        obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
      }
      if (data.hasOwnProperty('resourceName')) {
        obj['resourceName'] = ApiClient.convertToType(data['resourceName'], 'String');
      }
      if (data.hasOwnProperty('studio')) {
        obj['studio'] = ApiClient.convertToType(data['studio'], 'Boolean');
      }
      if (data.hasOwnProperty('permissionType')) {
        obj['permissionType'] = PermissionPermissionType.constructFromObject(data['permissionType']);
      }
    }
    return obj;
  }

  /**
   * @member {Number} permissionId
   */
  exports.prototype['permissionId'] = undefined;
  /**
   * @member {Number} userId
   */
  exports.prototype['userId'] = undefined;
  /**
   * @member {String} userHandle
   */
  exports.prototype['userHandle'] = undefined;
  /**
   * @member {Number} resourceId
   */
  exports.prototype['resourceId'] = undefined;
  /**
   * @member {String} resourceName
   */
  exports.prototype['resourceName'] = undefined;
  /**
   * @member {Boolean} studio
   */
  exports.prototype['studio'] = undefined;
  /**
   * @member {module:model/PermissionPermissionType} permissionType
   */
  exports.prototype['permissionType'] = undefined;



  return exports;
}));


