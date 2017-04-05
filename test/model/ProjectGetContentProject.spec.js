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
    instance = new TcProjectService.ProjectGetContentProject();
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

  describe('ProjectGetContentProject', function() {
    it('should create an instance of ProjectGetContentProject', function() {
      // uncomment below and update the code to test ProjectGetContentProject
      //var instane = new TcProjectService.ProjectGetContentProject();
      //expect(instance).to.be.a(TcProjectService.ProjectGetContentProject);
    });

    it('should have the property projectId (base name: "projectId")', function() {
      // uncomment below and update the code to test the property projectId
      //var instane = new TcProjectService.ProjectGetContentProject();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new TcProjectService.ProjectGetContentProject();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new TcProjectService.ProjectGetContentProject();
      //expect(instance).to.be();
    });

    it('should have the property projectStatusId (base name: "projectStatusId")', function() {
      // uncomment below and update the code to test the property projectStatusId
      //var instane = new TcProjectService.ProjectGetContentProject();
      //expect(instance).to.be();
    });

    it('should have the property forumCategoryId (base name: "forumCategoryId")', function() {
      // uncomment below and update the code to test the property forumCategoryId
      //var instane = new TcProjectService.ProjectGetContentProject();
      //expect(instance).to.be();
    });

    it('should have the property creationDate (base name: "creationDate")', function() {
      // uncomment below and update the code to test the property creationDate
      //var instane = new TcProjectService.ProjectGetContentProject();
      //expect(instance).to.be();
    });

    it('should have the property completionDate (base name: "completionDate")', function() {
      // uncomment below and update the code to test the property completionDate
      //var instane = new TcProjectService.ProjectGetContentProject();
      //expect(instance).to.be();
    });

    it('should have the property projectType (base name: "projectType")', function() {
      // uncomment below and update the code to test the property projectType
      //var instane = new TcProjectService.ProjectGetContentProject();
      //expect(instance).to.be();
    });

    it('should have the property projectCategory (base name: "projectCategory")', function() {
      // uncomment below and update the code to test the property projectCategory
      //var instane = new TcProjectService.ProjectGetContentProject();
      //expect(instance).to.be();
    });

    it('should have the property fixedBugContestFee (base name: "fixedBugContestFee")', function() {
      // uncomment below and update the code to test the property fixedBugContestFee
      //var instane = new TcProjectService.ProjectGetContentProject();
      //expect(instance).to.be();
    });

    it('should have the property percentageBugContestFee (base name: "percentageBugContestFee")', function() {
      // uncomment below and update the code to test the property percentageBugContestFee
      //var instane = new TcProjectService.ProjectGetContentProject();
      //expect(instance).to.be();
    });

    it('should have the property projectBillingAccountId (base name: "projectBillingAccountId")', function() {
      // uncomment below and update the code to test the property projectBillingAccountId
      //var instane = new TcProjectService.ProjectGetContentProject();
      //expect(instance).to.be();
    });

    it('should have the property projectAnswers (base name: "projectAnswers")', function() {
      // uncomment below and update the code to test the property projectAnswers
      //var instane = new TcProjectService.ProjectGetContentProject();
      //expect(instance).to.be();
    });

  });

}));