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


import ApiClient from "../ApiClient";
import ErrorResponse from '../model/ErrorResponse';
import InlineResponse2006 from '../model/InlineResponse2006';
import InlineResponse2007 from '../model/InlineResponse2007';
import OpenIDConnectClientDetails from '../model/OpenIDConnectClientDetails';
import OpenIDConnectClientDetails1 from '../model/OpenIDConnectClientDetails1';
import OpenIDConnectClientDetails2 from '../model/OpenIDConnectClientDetails2';
import OpenIDConnectClientDetails3 from '../model/OpenIDConnectClientDetails3';
import PatchRequest from '../model/PatchRequest';

/**
* OAuthOpenIDConnectClients service.
* @module api/OAuthOpenIDConnectClientsApi
* @version 1.0.0
*/
export default class OAuthOpenIDConnectClientsApi {

    /**
    * Constructs a new OAuthOpenIDConnectClientsApi. 
    * @alias module:api/OAuthOpenIDConnectClientsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deleteOauthOpenidClientsByInum operation.
     * @callback module:api/OAuthOpenIDConnectClientsApi~deleteOauthOpenidClientsByInumCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete OpenId Connect client.
     * Delete OpenId Connect client.
     * @param {String} inum Client identifier
     * @param {module:api/OAuthOpenIDConnectClientsApi~deleteOauthOpenidClientsByInumCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteOauthOpenidClientsByInum(inum, callback) {
      let postBody = null;
      // verify the required parameter 'inum' is set
      if (inum === undefined || inum === null) {
        throw new Error("Missing the required parameter 'inum' when calling deleteOauthOpenidClientsByInum");
      }

      let pathParams = {
        'inum': inum
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['jans-auth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/jans-config-api/api/v1/openid/clients/{inum}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getOauthOpenidClients operation.
     * @callback module:api/OAuthOpenIDConnectClientsApi~getOauthOpenidClientsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse2006>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets list of OpenID Connect clients
     * Gets list of OpenID Connect clients
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Search size - max size of the results to return. (default to 50)
     * @param {String} opts.pattern Search pattern.
     * @param {module:api/OAuthOpenIDConnectClientsApi~getOauthOpenidClientsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse2006>}
     */
    getOauthOpenidClients(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'limit': opts['limit'],
        'pattern': opts['pattern']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['jans-auth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [InlineResponse2006];
      return this.apiClient.callApi(
        '/jans-config-api/api/v1/openid/clients', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getOauthOpenidClientsByInum operation.
     * @callback module:api/OAuthOpenIDConnectClientsApi~getOauthOpenidClientsByInumCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2006} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get OpenId Connect Client by Inum
     * Get OpenId Connect Client by Inum.
     * @param {String} inum Client identifier
     * @param {module:api/OAuthOpenIDConnectClientsApi~getOauthOpenidClientsByInumCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2006}
     */
    getOauthOpenidClientsByInum(inum, callback) {
      let postBody = null;
      // verify the required parameter 'inum' is set
      if (inum === undefined || inum === null) {
        throw new Error("Missing the required parameter 'inum' when calling getOauthOpenidClientsByInum");
      }

      let pathParams = {
        'inum': inum
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['jans-auth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2006;
      return this.apiClient.callApi(
        '/jans-config-api/api/v1/openid/clients/{inum}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the patchOauthOpenidClientsByInum operation.
     * @callback module:api/OAuthOpenIDConnectClientsApi~patchOauthOpenidClientsByInumCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2007} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update modified properties of OpenId Connect client by Inum.
     * Update modified properties of OpenId Connect client by Inum.
     * @param {String} inum Client identifier
     * @param {Object} opts Optional parameters
     * @param {module:model/PatchRequest} opts.patchRequest 
     * @param {module:api/OAuthOpenIDConnectClientsApi~patchOauthOpenidClientsByInumCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2007}
     */
    patchOauthOpenidClientsByInum(inum, opts, callback) {
      opts = opts || {};
      let postBody = opts['patchRequest'];
      // verify the required parameter 'inum' is set
      if (inum === undefined || inum === null) {
        throw new Error("Missing the required parameter 'inum' when calling patchOauthOpenidClientsByInum");
      }

      let pathParams = {
        'inum': inum
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['jans-auth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2007;
      return this.apiClient.callApi(
        '/jans-config-api/api/v1/openid/clients/{inum}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postOauthOpenidClients operation.
     * @callback module:api/OAuthOpenIDConnectClientsApi~postOauthOpenidClientsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OpenIDConnectClientDetails3} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create new OpenId connect client
     * Create new OpenId connect client
     * @param {Object} opts Optional parameters
     * @param {module:model/OpenIDConnectClientDetails2} opts.openIDConnectClientDetails2 
     * @param {module:api/OAuthOpenIDConnectClientsApi~postOauthOpenidClientsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OpenIDConnectClientDetails3}
     */
    postOauthOpenidClients(opts, callback) {
      opts = opts || {};
      let postBody = opts['openIDConnectClientDetails2'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['jans-auth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = OpenIDConnectClientDetails3;
      return this.apiClient.callApi(
        '/jans-config-api/api/v1/openid/clients', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the putOauthOpenidClients operation.
     * @callback module:api/OAuthOpenIDConnectClientsApi~putOauthOpenidClientsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OpenIDConnectClientDetails1} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update OpenId Connect client.
     * Update OpenId Connect client.
     * @param {Object} opts Optional parameters
     * @param {module:model/OpenIDConnectClientDetails} opts.openIDConnectClientDetails 
     * @param {module:api/OAuthOpenIDConnectClientsApi~putOauthOpenidClientsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OpenIDConnectClientDetails1}
     */
    putOauthOpenidClients(opts, callback) {
      opts = opts || {};
      let postBody = opts['openIDConnectClientDetails'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['jans-auth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = OpenIDConnectClientDetails1;
      return this.apiClient.callApi(
        '/jans-config-api/api/v1/openid/clients', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
