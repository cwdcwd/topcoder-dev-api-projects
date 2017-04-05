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
    instance = new TcProjectService.ProjectQuestion();
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

  describe('ProjectQuestion', function() {
    it('should create an instance of ProjectQuestion', function() {
      // uncomment below and update the code to test ProjectQuestion
      //var instane = new TcProjectService.ProjectQuestion();
      //expect(instance).to.be.a(TcProjectService.ProjectQuestion);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new TcProjectService.ProjectQuestion();
      //expect(instance).to.be();
    });

    it('should have the property questionText (base name: "questionText")', function() {
      // uncomment below and update the code to test the property questionText
      //var instane = new TcProjectService.ProjectQuestion();
      //expect(instance).to.be();
    });

    it('should have the property questionOptions (base name: "questionOptions")', function() {
      // uncomment below and update the code to test the property questionOptions
      //var instane = new TcProjectService.ProjectQuestion();
      //expect(instance).to.be();
    });

    it('should have the property answerHtmlId (base name: "answerHtmlId")', function() {
      // uncomment below and update the code to test the property answerHtmlId
      //var instane = new TcProjectService.ProjectQuestion();
      //expect(instance).to.be();
    });

    it('should have the property directProjectType (base name: "directProjectType")', function() {
      // uncomment below and update the code to test the property directProjectType
      //var instane = new TcProjectService.ProjectQuestion();
      //expect(instance).to.be();
    });

    it('should have the property multipleAnswersHtmlXpath (base name: "multipleAnswersHtmlXpath")', function() {
      // uncomment below and update the code to test the property multipleAnswersHtmlXpath
      //var instane = new TcProjectService.ProjectQuestion();
      //expect(instance).to.be();
    });

  });

}));
