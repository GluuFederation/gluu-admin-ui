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

import ApiClient from '../ApiClient';

/**
 * The InlineObject6 model module.
 * @module model/InlineObject6
 * @version 1.0.0
 */
class InlineObject6 {
    /**
     * Constructs a new <code>InlineObject6</code>.
     * Sector Identifier Details.
     * @alias module:model/InlineObject6
     */
    constructor() { 
        
        InlineObject6.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject6</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject6} obj Optional instance to populate.
     * @return {module:model/InlineObject6} The populated <code>InlineObject6</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject6();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('redirect_uris')) {
                obj['redirect_uris'] = ApiClient.convertToType(data['redirect_uris'], ['String']);
            }
            if (data.hasOwnProperty('client_id')) {
                obj['client_id'] = ApiClient.convertToType(data['client_id'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * XRI i-number. Sector Identifier to uniquely identify the sector.
 * @member {String} id
 */
InlineObject6.prototype['id'] = undefined;

/**
 * A human-readable string describing the sector.
 * @member {String} description
 */
InlineObject6.prototype['description'] = undefined;

/**
 * Redirection URI values used by the Client. One of these registered Redirection URI values must exactly match the redirect_uri parameter value used in each Authorization Request
 * @member {Array.<String>} redirect_uris
 */
InlineObject6.prototype['redirect_uris'] = undefined;

/**
 * List of OAuth 2.0 Client Identifier valid at the Authorization Server.
 * @member {Array.<String>} client_id
 */
InlineObject6.prototype['client_id'] = undefined;






export default InlineObject6;

