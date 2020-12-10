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
 * The InlineObject model module.
 * @module model/InlineObject
 * @version 1.0.0
 */
class InlineObject {
    /**
     * Constructs a new <code>InlineObject</code>.
     * Memcached cache configuration.
     * @alias module:model/InlineObject
     * @param servers {String} Server details separated by spaces.
     * @param maxOperationQueueLength {Number} Maximum operation Queue Length.
     * @param bufferSize {Number} Buffer Size.
     * @param defaultPutExpiration {Number} Expiration timeout value.
     * @param memcachedConnectionFactoryType {module:model/InlineObject.MemcachedConnectionFactoryTypeEnum} The MemcachedConnectionFactoryType Type.
     */
    constructor(servers, maxOperationQueueLength, bufferSize, defaultPutExpiration, memcachedConnectionFactoryType) { 
        
        InlineObject.initialize(this, servers, maxOperationQueueLength, bufferSize, defaultPutExpiration, memcachedConnectionFactoryType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, servers, maxOperationQueueLength, bufferSize, defaultPutExpiration, memcachedConnectionFactoryType) { 
        obj['servers'] = servers;
        obj['maxOperationQueueLength'] = maxOperationQueueLength;
        obj['bufferSize'] = bufferSize;
        obj['defaultPutExpiration'] = defaultPutExpiration;
        obj['memcachedConnectionFactoryType'] = memcachedConnectionFactoryType;
    }

    /**
     * Constructs a <code>InlineObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject} obj Optional instance to populate.
     * @return {module:model/InlineObject} The populated <code>InlineObject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject();

            if (data.hasOwnProperty('servers')) {
                obj['servers'] = ApiClient.convertToType(data['servers'], 'String');
            }
            if (data.hasOwnProperty('maxOperationQueueLength')) {
                obj['maxOperationQueueLength'] = ApiClient.convertToType(data['maxOperationQueueLength'], 'Number');
            }
            if (data.hasOwnProperty('bufferSize')) {
                obj['bufferSize'] = ApiClient.convertToType(data['bufferSize'], 'Number');
            }
            if (data.hasOwnProperty('defaultPutExpiration')) {
                obj['defaultPutExpiration'] = ApiClient.convertToType(data['defaultPutExpiration'], 'Number');
            }
            if (data.hasOwnProperty('memcachedConnectionFactoryType')) {
                obj['memcachedConnectionFactoryType'] = ApiClient.convertToType(data['memcachedConnectionFactoryType'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Server details separated by spaces.
 * @member {String} servers
 */
InlineObject.prototype['servers'] = undefined;

/**
 * Maximum operation Queue Length.
 * @member {Number} maxOperationQueueLength
 * @default 99999999
 */
InlineObject.prototype['maxOperationQueueLength'] = 99999999;

/**
 * Buffer Size.
 * @member {Number} bufferSize
 * @default 32768
 */
InlineObject.prototype['bufferSize'] = 32768;

/**
 * Expiration timeout value.
 * @member {Number} defaultPutExpiration
 * @default 60
 */
InlineObject.prototype['defaultPutExpiration'] = 60;

/**
 * The MemcachedConnectionFactoryType Type.
 * @member {module:model/InlineObject.MemcachedConnectionFactoryTypeEnum} memcachedConnectionFactoryType
 */
InlineObject.prototype['memcachedConnectionFactoryType'] = undefined;





/**
 * Allowed values for the <code>memcachedConnectionFactoryType</code> property.
 * @enum {String}
 * @readonly
 */
InlineObject['MemcachedConnectionFactoryTypeEnum'] = {

    /**
     * value: "DEFAULT"
     * @const
     */
    "DEFAULT": "DEFAULT",

    /**
     * value: "BINARY"
     * @const
     */
    "BINARY": "BINARY"
};



export default InlineObject;

