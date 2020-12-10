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
    instance = new JansConfigApi.DefaultAuthenticationMethodApi();
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

  describe('DefaultAuthenticationMethodApi', function() {
    describe('getAcrs', function() {
      it('should call getAcrs successfully', function(done) {
        //uncomment below and update the code to test getAcrs
        //instance.getAcrs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putAcrs', function() {
      it('should call putAcrs successfully', function(done) {
        //uncomment below and update the code to test putAcrs
        //instance.putAcrs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
