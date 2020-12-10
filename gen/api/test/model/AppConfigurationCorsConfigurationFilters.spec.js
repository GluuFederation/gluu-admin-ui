/**
 * jans-config-api
 * jans-config-api - Authorization services
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: xxx@gluu.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.JansConfigApi);
  }
}(this, function(expect, JansConfigApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new JansConfigApi.AppConfigurationCorsConfigurationFilters();
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

  describe('AppConfigurationCorsConfigurationFilters', function() {
    it('should create an instance of AppConfigurationCorsConfigurationFilters', function() {
      // uncomment below and update the code to test AppConfigurationCorsConfigurationFilters
      //var instane = new JansConfigApi.AppConfigurationCorsConfigurationFilters();
      //expect(instance).to.be.a(JansConfigApi.AppConfigurationCorsConfigurationFilters);
    });

    it('should have the property filterName (base name: "filterName")', function() {
      // uncomment below and update the code to test the property filterName
      //var instane = new JansConfigApi.AppConfigurationCorsConfigurationFilters();
      //expect(instance).to.be();
    });

    it('should have the property corsEnabled (base name: "corsEnabled")', function() {
      // uncomment below and update the code to test the property corsEnabled
      //var instane = new JansConfigApi.AppConfigurationCorsConfigurationFilters();
      //expect(instance).to.be();
    });

    it('should have the property corsAllowedOrigins (base name: "corsAllowedOrigins")', function() {
      // uncomment below and update the code to test the property corsAllowedOrigins
      //var instane = new JansConfigApi.AppConfigurationCorsConfigurationFilters();
      //expect(instance).to.be();
    });

    it('should have the property corsAllowedMethods (base name: "corsAllowedMethods")', function() {
      // uncomment below and update the code to test the property corsAllowedMethods
      //var instane = new JansConfigApi.AppConfigurationCorsConfigurationFilters();
      //expect(instance).to.be();
    });

    it('should have the property corsAllowedHeaders (base name: "corsAllowedHeaders")', function() {
      // uncomment below and update the code to test the property corsAllowedHeaders
      //var instane = new JansConfigApi.AppConfigurationCorsConfigurationFilters();
      //expect(instance).to.be();
    });

    it('should have the property corsExposedHeaders (base name: "corsExposedHeaders")', function() {
      // uncomment below and update the code to test the property corsExposedHeaders
      //var instane = new JansConfigApi.AppConfigurationCorsConfigurationFilters();
      //expect(instance).to.be();
    });

    it('should have the property corsSupportCredentials (base name: "corsSupportCredentials")', function() {
      // uncomment below and update the code to test the property corsSupportCredentials
      //var instane = new JansConfigApi.AppConfigurationCorsConfigurationFilters();
      //expect(instance).to.be();
    });

    it('should have the property corsLoggingEnabled (base name: "corsLoggingEnabled")', function() {
      // uncomment below and update the code to test the property corsLoggingEnabled
      //var instane = new JansConfigApi.AppConfigurationCorsConfigurationFilters();
      //expect(instance).to.be();
    });

    it('should have the property corsPreflightMaxAge (base name: "corsPreflightMaxAge")', function() {
      // uncomment below and update the code to test the property corsPreflightMaxAge
      //var instane = new JansConfigApi.AppConfigurationCorsConfigurationFilters();
      //expect(instance).to.be();
    });

    it('should have the property corsRequestDecorate (base name: "corsRequestDecorate")', function() {
      // uncomment below and update the code to test the property corsRequestDecorate
      //var instane = new JansConfigApi.AppConfigurationCorsConfigurationFilters();
      //expect(instance).to.be();
    });

  });

}));
