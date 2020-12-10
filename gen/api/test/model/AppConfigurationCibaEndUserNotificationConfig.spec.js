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
    instance = new JansConfigApi.AppConfigurationCibaEndUserNotificationConfig();
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

  describe('AppConfigurationCibaEndUserNotificationConfig', function() {
    it('should create an instance of AppConfigurationCibaEndUserNotificationConfig', function() {
      // uncomment below and update the code to test AppConfigurationCibaEndUserNotificationConfig
      //var instane = new JansConfigApi.AppConfigurationCibaEndUserNotificationConfig();
      //expect(instance).to.be.a(JansConfigApi.AppConfigurationCibaEndUserNotificationConfig);
    });

    it('should have the property apiKey (base name: "apiKey")', function() {
      // uncomment below and update the code to test the property apiKey
      //var instane = new JansConfigApi.AppConfigurationCibaEndUserNotificationConfig();
      //expect(instance).to.be();
    });

    it('should have the property authDomain (base name: "authDomain")', function() {
      // uncomment below and update the code to test the property authDomain
      //var instane = new JansConfigApi.AppConfigurationCibaEndUserNotificationConfig();
      //expect(instance).to.be();
    });

    it('should have the property databaseURL (base name: "databaseURL")', function() {
      // uncomment below and update the code to test the property databaseURL
      //var instane = new JansConfigApi.AppConfigurationCibaEndUserNotificationConfig();
      //expect(instance).to.be();
    });

    it('should have the property projectId (base name: "projectId")', function() {
      // uncomment below and update the code to test the property projectId
      //var instane = new JansConfigApi.AppConfigurationCibaEndUserNotificationConfig();
      //expect(instance).to.be();
    });

    it('should have the property storageBucket (base name: "storageBucket")', function() {
      // uncomment below and update the code to test the property storageBucket
      //var instane = new JansConfigApi.AppConfigurationCibaEndUserNotificationConfig();
      //expect(instance).to.be();
    });

    it('should have the property messagingSenderId (base name: "messagingSenderId")', function() {
      // uncomment below and update the code to test the property messagingSenderId
      //var instane = new JansConfigApi.AppConfigurationCibaEndUserNotificationConfig();
      //expect(instance).to.be();
    });

    it('should have the property appId (base name: "appId")', function() {
      // uncomment below and update the code to test the property appId
      //var instane = new JansConfigApi.AppConfigurationCibaEndUserNotificationConfig();
      //expect(instance).to.be();
    });

    it('should have the property notificationUrl (base name: "notificationUrl")', function() {
      // uncomment below and update the code to test the property notificationUrl
      //var instane = new JansConfigApi.AppConfigurationCibaEndUserNotificationConfig();
      //expect(instance).to.be();
    });

    it('should have the property notificationKey (base name: "notificationKey")', function() {
      // uncomment below and update the code to test the property notificationKey
      //var instane = new JansConfigApi.AppConfigurationCibaEndUserNotificationConfig();
      //expect(instance).to.be();
    });

    it('should have the property publicVapidKey (base name: "publicVapidKey")', function() {
      // uncomment below and update the code to test the property publicVapidKey
      //var instane = new JansConfigApi.AppConfigurationCibaEndUserNotificationConfig();
      //expect(instance).to.be();
    });

  });

}));
