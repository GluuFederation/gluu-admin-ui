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
 * The AppConfigurationClientAuthenticationFilters model module.
 * @module model/AppConfigurationClientAuthenticationFilters
 * @version 1.0.0
 */
class AppConfigurationClientAuthenticationFilters {
    /**
     * Constructs a new <code>AppConfigurationClientAuthenticationFilters</code>.
     * @alias module:model/AppConfigurationClientAuthenticationFilters
     */
    constructor() { 
        
        AppConfigurationClientAuthenticationFilters.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AppConfigurationClientAuthenticationFilters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AppConfigurationClientAuthenticationFilters} obj Optional instance to populate.
     * @return {module:model/AppConfigurationClientAuthenticationFilters} The populated <code>AppConfigurationClientAuthenticationFilters</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AppConfigurationClientAuthenticationFilters();

            if (data.hasOwnProperty('filter')) {
                obj['filter'] = ApiClient.convertToType(data['filter'], 'String');
            }
            if (data.hasOwnProperty('bind')) {
                obj['bind'] = ApiClient.convertToType(data['bind'], 'Boolean');
            }
            if (data.hasOwnProperty('bind-password-attribute')) {
                obj['bind-password-attribute'] = ApiClient.convertToType(data['bind-password-attribute'], 'String');
            }
            if (data.hasOwnProperty('base-dn')) {
                obj['base-dn'] = ApiClient.convertToType(data['base-dn'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} filter
 */
AppConfigurationClientAuthenticationFilters.prototype['filter'] = undefined;

/**
 * @member {Boolean} bind
 * @default false
 */
AppConfigurationClientAuthenticationFilters.prototype['bind'] = false;

/**
 * @member {String} bind-password-attribute
 */
AppConfigurationClientAuthenticationFilters.prototype['bind-password-attribute'] = undefined;

/**
 * @member {String} base-dn
 */
AppConfigurationClientAuthenticationFilters.prototype['base-dn'] = undefined;






export default AppConfigurationClientAuthenticationFilters;

