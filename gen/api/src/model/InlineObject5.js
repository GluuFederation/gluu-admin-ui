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
 * The InlineObject5 model module.
 * @module model/InlineObject5
 * @version 1.0.0
 */
class InlineObject5 {
    /**
     * Constructs a new <code>InlineObject5</code>.
     * SMTP configuration.
     * @alias module:model/InlineObject5
     */
    constructor() { 
        
        InlineObject5.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject5</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject5} obj Optional instance to populate.
     * @return {module:model/InlineObject5} The populated <code>InlineObject5</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject5();

            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'Number');
            }
            if (data.hasOwnProperty('requires-ssl')) {
                obj['requires-ssl'] = ApiClient.convertToType(data['requires-ssl'], 'Boolean');
            }
            if (data.hasOwnProperty('trust-host')) {
                obj['trust-host'] = ApiClient.convertToType(data['trust-host'], 'Boolean');
            }
            if (data.hasOwnProperty('from-name')) {
                obj['from-name'] = ApiClient.convertToType(data['from-name'], 'String');
            }
            if (data.hasOwnProperty('from-email-address')) {
                obj['from-email-address'] = ApiClient.convertToType(data['from-email-address'], 'String');
            }
            if (data.hasOwnProperty('requires-authentication')) {
                obj['requires-authentication'] = ApiClient.convertToType(data['requires-authentication'], 'Boolean');
            }
            if (data.hasOwnProperty('user-name')) {
                obj['user-name'] = ApiClient.convertToType(data['user-name'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Hostname of the SMTP server.
 * @member {String} host
 */
InlineObject5.prototype['host'] = undefined;

/**
 * Port number of the SMTP server.
 * @member {Number} port
 */
InlineObject5.prototype['port'] = undefined;

/**
 * Boolean value with default value false. If true, SSL will be enabled.
 * @member {Boolean} requires-ssl
 */
InlineObject5.prototype['requires-ssl'] = undefined;

/**
 * Boolean value with default value false.
 * @member {Boolean} trust-host
 */
InlineObject5.prototype['trust-host'] = undefined;

/**
 * Name of the sender.
 * @member {String} from-name
 */
InlineObject5.prototype['from-name'] = undefined;

/**
 * Email Address of the Sender.
 * @member {String} from-email-address
 */
InlineObject5.prototype['from-email-address'] = undefined;

/**
 * Boolean value with default value false. It true it will enable sender authentication.
 * @member {Boolean} requires-authentication
 */
InlineObject5.prototype['requires-authentication'] = undefined;

/**
 * Username of the SMTP.
 * @member {String} user-name
 */
InlineObject5.prototype['user-name'] = undefined;

/**
 * Password for the SMTP.
 * @member {String} password
 */
InlineObject5.prototype['password'] = undefined;






export default InlineObject5;

