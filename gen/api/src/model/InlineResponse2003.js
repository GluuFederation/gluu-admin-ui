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
 * The InlineResponse2003 model module.
 * @module model/InlineResponse2003
 * @version 1.0.0
 */
class InlineResponse2003 {
    /**
     * Constructs a new <code>InlineResponse2003</code>.
     * SMTP configuration.
     * @alias module:model/InlineResponse2003
     */
    constructor() { 
        
        InlineResponse2003.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2003</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2003} obj Optional instance to populate.
     * @return {module:model/InlineResponse2003} The populated <code>InlineResponse2003</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2003();

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
InlineResponse2003.prototype['host'] = undefined;

/**
 * Port number of the SMTP server.
 * @member {Number} port
 */
InlineResponse2003.prototype['port'] = undefined;

/**
 * Boolean value with default value false. If true, SSL will be enabled.
 * @member {Boolean} requires-ssl
 */
InlineResponse2003.prototype['requires-ssl'] = undefined;

/**
 * Boolean value with default value false.
 * @member {Boolean} trust-host
 */
InlineResponse2003.prototype['trust-host'] = undefined;

/**
 * Name of the sender.
 * @member {String} from-name
 */
InlineResponse2003.prototype['from-name'] = undefined;

/**
 * Email Address of the Sender.
 * @member {String} from-email-address
 */
InlineResponse2003.prototype['from-email-address'] = undefined;

/**
 * Boolean value with default value false. It true it will enable sender authentication.
 * @member {Boolean} requires-authentication
 */
InlineResponse2003.prototype['requires-authentication'] = undefined;

/**
 * Username of the SMTP.
 * @member {String} user-name
 */
InlineResponse2003.prototype['user-name'] = undefined;

/**
 * Password for the SMTP.
 * @member {String} password
 */
InlineResponse2003.prototype['password'] = undefined;






export default InlineResponse2003;

