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
    instance = new JansConfigApi.OAuthScopesApi();
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

  describe('OAuthScopesApi', function() {
    describe('deleteOauthScopesById', function() {
      it('should call deleteOauthScopesById successfully', function(done) {
        //uncomment below and update the code to test deleteOauthScopesById
        //instance.deleteOauthScopesById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOauthScopes', function() {
      it('should call getOauthScopes successfully', function(done) {
        //uncomment below and update the code to test getOauthScopes
        //instance.getOauthScopes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOauthScopesByInum', function() {
      it('should call getOauthScopesByInum successfully', function(done) {
        //uncomment below and update the code to test getOauthScopesByInum
        //instance.getOauthScopesByInum(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchOauthScopesById', function() {
      it('should call patchOauthScopesById successfully', function(done) {
        //uncomment below and update the code to test patchOauthScopesById
        //instance.patchOauthScopesById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postOauthScopes', function() {
      it('should call postOauthScopes successfully', function(done) {
        //uncomment below and update the code to test postOauthScopes
        //instance.postOauthScopes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putOauthScopes', function() {
      it('should call putOauthScopes successfully', function(done) {
        //uncomment below and update the code to test putOauthScopes
        //instance.putOauthScopes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
