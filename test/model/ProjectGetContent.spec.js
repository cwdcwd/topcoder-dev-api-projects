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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TcProjectService);
  }
}(this, function(expect, TcProjectService) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TcProjectService.ProjectGetContent();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ProjectGetContent', function() {
    it('should create an instance of ProjectGetContent', function() {
      // uncomment below and update the code to test ProjectGetContent
      //var instane = new TcProjectService.ProjectGetContent();
      //expect(instance).to.be.a(TcProjectService.ProjectGetContent);
    });

    it('should have the property project (base name: "project")', function() {
      // uncomment below and update the code to test the property project
      //var instane = new TcProjectService.ProjectGetContent();
      //expect(instance).to.be();
    });

    it('should have the property permissionInfo (base name: "permissionInfo")', function() {
      // uncomment below and update the code to test the property permissionInfo
      //var instane = new TcProjectService.ProjectGetContent();
      //expect(instance).to.be();
    });

    it('should have the property svn (base name: "svn")', function() {
      // uncomment below and update the code to test the property svn
      //var instane = new TcProjectService.ProjectGetContent();
      //expect(instance).to.be();
    });

    it('should have the property jira (base name: "jira")', function() {
      // uncomment below and update the code to test the property jira
      //var instane = new TcProjectService.ProjectGetContent();
      //expect(instance).to.be();
    });

    it('should have the property totalBudget (base name: "totalBudget")', function() {
      // uncomment below and update the code to test the property totalBudget
      //var instane = new TcProjectService.ProjectGetContent();
      //expect(instance).to.be();
    });

    it('should have the property actualCost (base name: "actualCost")', function() {
      // uncomment below and update the code to test the property actualCost
      //var instane = new TcProjectService.ProjectGetContent();
      //expect(instance).to.be();
    });

    it('should have the property projectedCost (base name: "projectedCost")', function() {
      // uncomment below and update the code to test the property projectedCost
      //var instane = new TcProjectService.ProjectGetContent();
      //expect(instance).to.be();
    });

    it('should have the property plannedDuration (base name: "plannedDuration")', function() {
      // uncomment below and update the code to test the property plannedDuration
      //var instane = new TcProjectService.ProjectGetContent();
      //expect(instance).to.be();
    });

    it('should have the property actualDuration (base name: "actualDuration")', function() {
      // uncomment below and update the code to test the property actualDuration
      //var instane = new TcProjectService.ProjectGetContent();
      //expect(instance).to.be();
    });

    it('should have the property projectedDuration (base name: "projectedDuration")', function() {
      // uncomment below and update the code to test the property projectedDuration
      //var instane = new TcProjectService.ProjectGetContent();
      //expect(instance).to.be();
    });

    it('should have the property billingAccountIds (base name: "billingAccountIds")', function() {
      // uncomment below and update the code to test the property billingAccountIds
      //var instane = new TcProjectService.ProjectGetContent();
      //expect(instance).to.be();
    });

    it('should have the property clientManagers (base name: "clientManagers")', function() {
      // uncomment below and update the code to test the property clientManagers
      //var instane = new TcProjectService.ProjectGetContent();
      //expect(instance).to.be();
    });

    it('should have the property topcoderManagers (base name: "topcoderManagers")', function() {
      // uncomment below and update the code to test the property topcoderManagers
      //var instane = new TcProjectService.ProjectGetContent();
      //expect(instance).to.be();
    });

    it('should have the property accountManagers (base name: "accountManagers")', function() {
      // uncomment below and update the code to test the property accountManagers
      //var instane = new TcProjectService.ProjectGetContent();
      //expect(instance).to.be();
    });

    it('should have the property appirioManager (base name: "appirioManager")', function() {
      // uncomment below and update the code to test the property appirioManager
      //var instane = new TcProjectService.ProjectGetContent();
      //expect(instance).to.be();
    });

    it('should have the property projectResourceEmails (base name: "projectResourceEmails")', function() {
      // uncomment below and update the code to test the property projectResourceEmails
      //var instane = new TcProjectService.ProjectGetContent();
      //expect(instance).to.be();
    });

    it('should have the property clientManagersHandles (base name: "clientManagersHandles")', function() {
      // uncomment below and update the code to test the property clientManagersHandles
      //var instane = new TcProjectService.ProjectGetContent();
      //expect(instance).to.be();
    });

    it('should have the property topcoderManagersHandles (base name: "topcoderManagersHandles")', function() {
      // uncomment below and update the code to test the property topcoderManagersHandles
      //var instane = new TcProjectService.ProjectGetContent();
      //expect(instance).to.be();
    });

    it('should have the property accountManagersHandles (base name: "accountManagersHandles")', function() {
      // uncomment below and update the code to test the property accountManagersHandles
      //var instane = new TcProjectService.ProjectGetContent();
      //expect(instance).to.be();
    });

    it('should have the property copilotHandles (base name: "copilotHandles")', function() {
      // uncomment below and update the code to test the property copilotHandles
      //var instane = new TcProjectService.ProjectGetContent();
      //expect(instance).to.be();
    });

    it('should have the property businessImpactRating (base name: "businessImpactRating")', function() {
      // uncomment below and update the code to test the property businessImpactRating
      //var instane = new TcProjectService.ProjectGetContent();
      //expect(instance).to.be();
    });

    it('should have the property riskLevelRating (base name: "riskLevelRating")', function() {
      // uncomment below and update the code to test the property riskLevelRating
      //var instane = new TcProjectService.ProjectGetContent();
      //expect(instance).to.be();
    });

    it('should have the property costRating (base name: "costRating")', function() {
      // uncomment below and update the code to test the property costRating
      //var instane = new TcProjectService.ProjectGetContent();
      //expect(instance).to.be();
    });

    it('should have the property difficultyRating (base name: "difficultyRating")', function() {
      // uncomment below and update the code to test the property difficultyRating
      //var instane = new TcProjectService.ProjectGetContent();
      //expect(instance).to.be();
    });

    it('should have the property roiRating (base name: "roiRating")', function() {
      // uncomment below and update the code to test the property roiRating
      //var instane = new TcProjectService.ProjectGetContent();
      //expect(instance).to.be();
    });

    it('should have the property additionalProjectInfo (base name: "additionalProjectInfo")', function() {
      // uncomment below and update the code to test the property additionalProjectInfo
      //var instane = new TcProjectService.ProjectGetContent();
      //expect(instance).to.be();
    });

    it('should have the property canAccessPermissionEdit (base name: "canAccessPermissionEdit")', function() {
      // uncomment below and update the code to test the property canAccessPermissionEdit
      //var instane = new TcProjectService.ProjectGetContent();
      //expect(instance).to.be();
    });

    it('should have the property statusLabel (base name: "statusLabel")', function() {
      // uncomment below and update the code to test the property statusLabel
      //var instane = new TcProjectService.ProjectGetContent();
      //expect(instance).to.be();
    });

  });

}));
