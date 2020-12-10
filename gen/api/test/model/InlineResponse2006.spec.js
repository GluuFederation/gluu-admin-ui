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
    instance = new JansConfigApi.InlineResponse2006();
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

  describe('InlineResponse2006', function() {
    it('should create an instance of InlineResponse2006', function() {
      // uncomment below and update the code to test InlineResponse2006
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be.a(JansConfigApi.InlineResponse2006);
    });

    it('should have the property inum (base name: "inum")', function() {
      // uncomment below and update the code to test the property inum
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property displayName (base name: "display_Name")', function() {
      // uncomment below and update the code to test the property displayName
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property applicationType (base name: "application_type")', function() {
      // uncomment below and update the code to test the property applicationType
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property contacts (base name: "contacts")', function() {
      // uncomment below and update the code to test the property contacts
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property redirectUris (base name: "redirect_uris")', function() {
      // uncomment below and update the code to test the property redirectUris
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property postLogoutRedirectUris (base name: "post_logout_redirect_uris")', function() {
      // uncomment below and update the code to test the property postLogoutRedirectUris
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property scope (base name: "scope")', function() {
      // uncomment below and update the code to test the property scope
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property claims (base name: "claims")', function() {
      // uncomment below and update the code to test the property claims
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property clientSecret (base name: "client_secret")', function() {
      // uncomment below and update the code to test the property clientSecret
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property associatedPersons (base name: "associated_persons")', function() {
      // uncomment below and update the code to test the property associatedPersons
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property trustedClient (base name: "trusted_client")', function() {
      // uncomment below and update the code to test the property trustedClient
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property responseTypes (base name: "response_types")', function() {
      // uncomment below and update the code to test the property responseTypes
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property grantTypes (base name: "grant_types")', function() {
      // uncomment below and update the code to test the property grantTypes
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property logoUri (base name: "logo_uri")', function() {
      // uncomment below and update the code to test the property logoUri
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property clientUri (base name: "client_uri")', function() {
      // uncomment below and update the code to test the property clientUri
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property policyUri (base name: "policy_uri")', function() {
      // uncomment below and update the code to test the property policyUri
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property tosUri (base name: "tos_uri")', function() {
      // uncomment below and update the code to test the property tosUri
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property jwksUri (base name: "jwks_uri")', function() {
      // uncomment below and update the code to test the property jwksUri
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property jwks (base name: "jwks")', function() {
      // uncomment below and update the code to test the property jwks
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property sectorIdentifierUri (base name: "sector_identifier_uri")', function() {
      // uncomment below and update the code to test the property sectorIdentifierUri
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property subjectType (base name: "subject_type")', function() {
      // uncomment below and update the code to test the property subjectType
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property idTokenTokenBindingCnf (base name: "id_token_token_binding_cnf")', function() {
      // uncomment below and update the code to test the property idTokenTokenBindingCnf
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property rptAsJwt (base name: "rpt_as_jwt")', function() {
      // uncomment below and update the code to test the property rptAsJwt
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property accessTokenAsJwt (base name: "access_token_as_jwt")', function() {
      // uncomment below and update the code to test the property accessTokenAsJwt
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property accessTokenSigningAlg (base name: "access_token_signing_alg")', function() {
      // uncomment below and update the code to test the property accessTokenSigningAlg
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property idTokenSignedResponseAlg (base name: "id_token_signed_response_alg")', function() {
      // uncomment below and update the code to test the property idTokenSignedResponseAlg
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property idTokenEncryptedResponseAlg (base name: "id_token_encrypted_response_alg")', function() {
      // uncomment below and update the code to test the property idTokenEncryptedResponseAlg
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property idTokenEncryptedResponseEnc (base name: "id_token_encrypted_response_enc")', function() {
      // uncomment below and update the code to test the property idTokenEncryptedResponseEnc
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property userinfoSignedResponseAlg (base name: "userinfo_signed_response_alg")', function() {
      // uncomment below and update the code to test the property userinfoSignedResponseAlg
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property userinfoEncryptedResponseAlg (base name: "userinfo_encrypted_response_alg")', function() {
      // uncomment below and update the code to test the property userinfoEncryptedResponseAlg
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property userinfoEncryptedResponseEnc (base name: "userinfo_encrypted_response_enc")', function() {
      // uncomment below and update the code to test the property userinfoEncryptedResponseEnc
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property requestObjectSigningAlg (base name: "request_object_signing_alg")', function() {
      // uncomment below and update the code to test the property requestObjectSigningAlg
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property requestObjectEncryptionAlg (base name: "request_object_encryption_alg")', function() {
      // uncomment below and update the code to test the property requestObjectEncryptionAlg
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property requestObjectEncryptionEnc (base name: "request_object_encryption_enc")', function() {
      // uncomment below and update the code to test the property requestObjectEncryptionEnc
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property tokenEndpointAuthMethod (base name: "token_endpoint_auth_method")', function() {
      // uncomment below and update the code to test the property tokenEndpointAuthMethod
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property tokenEndpointAuthSigningAlg (base name: "token_endpoint_auth_signing_alg")', function() {
      // uncomment below and update the code to test the property tokenEndpointAuthSigningAlg
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property defaultMaxAge (base name: "default_max_age")', function() {
      // uncomment below and update the code to test the property defaultMaxAge
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property requireAuthTime (base name: "require_auth_time")', function() {
      // uncomment below and update the code to test the property requireAuthTime
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property claimsRedirectUri (base name: "claims_redirect_uri")', function() {
      // uncomment below and update the code to test the property claimsRedirectUri
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property logoutUri (base name: "logout_uri")', function() {
      // uncomment below and update the code to test the property logoutUri
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property logoutSessionRequired (base name: "logout_session_required")', function() {
      // uncomment below and update the code to test the property logoutSessionRequired
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property persistClientAuthorizations (base name: "persist_client_authorizations")', function() {
      // uncomment below and update the code to test the property persistClientAuthorizations
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property includeClaimsInIdToken (base name: "include_claims_in_id_token")', function() {
      // uncomment below and update the code to test the property includeClaimsInIdToken
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property refreshTokenLifetime (base name: "refresh_token_lifetime")', function() {
      // uncomment below and update the code to test the property refreshTokenLifetime
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property accessTokenLifetime (base name: "access_token_lifetime")', function() {
      // uncomment below and update the code to test the property accessTokenLifetime
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property defaultAcrValues (base name: "default_acr_values")', function() {
      // uncomment below and update the code to test the property defaultAcrValues
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property initiateLoginUri (base name: "initiate_login_uri")', function() {
      // uncomment below and update the code to test the property initiateLoginUri
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property exp (base name: "exp")', function() {
      // uncomment below and update the code to test the property exp
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property requestUris (base name: "request_uris")', function() {
      // uncomment below and update the code to test the property requestUris
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property authorizedOrigins (base name: "authorized_origins")', function() {
      // uncomment below and update the code to test the property authorizedOrigins
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property softwareId (base name: "software_id")', function() {
      // uncomment below and update the code to test the property softwareId
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property softwareVersion (base name: "software_version")', function() {
      // uncomment below and update the code to test the property softwareVersion
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property softwareStatement (base name: "software_statement")', function() {
      // uncomment below and update the code to test the property softwareStatement
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property disabled (base name: "disabled")', function() {
      // uncomment below and update the code to test the property disabled
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property jansId (base name: "jansId")', function() {
      // uncomment below and update the code to test the property jansId
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property deletable (base name: "deletable")', function() {
      // uncomment below and update the code to test the property deletable
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property clientAttributes (base name: "client_attributes")', function() {
      // uncomment below and update the code to test the property clientAttributes
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property backchannelAuthenticationRequestSigningAlg (base name: "backchannel_authentication_request_signing_alg")', function() {
      // uncomment below and update the code to test the property backchannelAuthenticationRequestSigningAlg
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property backchannelTokenDeliveryMode (base name: "backchannel_token_delivery_mode")', function() {
      // uncomment below and update the code to test the property backchannelTokenDeliveryMode
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property backchannelClientNotificationEndpoint (base name: "backchannel_client_notification_endpoint")', function() {
      // uncomment below and update the code to test the property backchannelClientNotificationEndpoint
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property backchannelUserCodeParameter (base name: "backchannel_user_code_parameter")', function() {
      // uncomment below and update the code to test the property backchannelUserCodeParameter
      //var instane = new JansConfigApi.InlineResponse2006();
      //expect(instance).to.be();
    });

  });

}));
