# jans_config_api

JansConfigApi - JavaScript client for jans_config_api
jans-config-api - Authorization services
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install jans_config_api --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your jans_config_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var JansConfigApi = require('jans_config_api');

var defaultClient = JansConfigApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: jans-auth
var jans-auth = defaultClient.authentications['jans-auth'];
jans-auth.accessToken = "YOUR ACCESS TOKEN"

var api = new JansConfigApi.AttributeApi()
var inum = "inum_example"; // {String} Attribute ID.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteAttributesByInum(inum, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://jans.io*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*JansConfigApi.AttributeApi* | [**deleteAttributesByInum**](docs/AttributeApi.md#deleteAttributesByInum) | **DELETE** /jans-config-api/api/v1/attributes/{inum} | Deletes an attribute based on inum.
*JansConfigApi.AttributeApi* | [**getAttributes**](docs/AttributeApi.md#getAttributes) | **GET** /jans-config-api/api/v1/attributes | Gets a list of Gluu attributes.
*JansConfigApi.AttributeApi* | [**getAttributesByInum**](docs/AttributeApi.md#getAttributesByInum) | **GET** /jans-config-api/api/v1/attributes/{inum} | Gets an attribute based on inum.
*JansConfigApi.AttributeApi* | [**patchAttributesByInum**](docs/AttributeApi.md#patchAttributesByInum) | **PATCH** /jans-config-api/api/v1/attributes/{inum} | Partially modify a GluuAttribute.
*JansConfigApi.AttributeApi* | [**postAttributes**](docs/AttributeApi.md#postAttributes) | **POST** /jans-config-api/api/v1/attributes | Adds a new attribute.
*JansConfigApi.AttributeApi* | [**putAttributes**](docs/AttributeApi.md#putAttributes) | **PUT** /jans-config-api/api/v1/attributes | Updates an existing attribute.
*JansConfigApi.CacheConfigurationApi* | [**getConfigCache**](docs/CacheConfigurationApi.md#getConfigCache) | **GET** /jans-config-api/api/v1/config/cache | Returns cache configuration.
*JansConfigApi.CacheConfigurationApi* | [**patchConfigCache**](docs/CacheConfigurationApi.md#patchConfigCache) | **PATCH** /jans-config-api/api/v1/config/cache | Partially modifies cache configuration.
*JansConfigApi.CacheConfigurationInMemoryApi* | [**getConfigCacheInMemory**](docs/CacheConfigurationInMemoryApi.md#getConfigCacheInMemory) | **GET** /jans-config-api/api/v1/config/cache/in-memory | Returns in-Memory cache configuration.
*JansConfigApi.CacheConfigurationInMemoryApi* | [**putConfigCacheInMemory**](docs/CacheConfigurationInMemoryApi.md#putConfigCacheInMemory) | **PUT** /jans-config-api/api/v1/config/cache/in-memory | Updates in-Memory cache configuration.
*JansConfigApi.CacheConfigurationMemcachedApi* | [**getConfigCacheMemcached**](docs/CacheConfigurationMemcachedApi.md#getConfigCacheMemcached) | **GET** /jans-config-api/api/v1/config/cache/memcached | Returns Memcached cache configuration.
*JansConfigApi.CacheConfigurationMemcachedApi* | [**putConfigCacheMemcached**](docs/CacheConfigurationMemcachedApi.md#putConfigCacheMemcached) | **PUT** /jans-config-api/api/v1/config/cache/memcached | Updates Memcached cache configuration.
*JansConfigApi.CacheConfigurationNativePersistenceApi* | [**getConfigCacheNativePersistence**](docs/CacheConfigurationNativePersistenceApi.md#getConfigCacheNativePersistence) | **GET** /jans-config-api/api/v1/config/cache/native-persistence | Returns native persistence cache configuration.
*JansConfigApi.CacheConfigurationNativePersistenceApi* | [**putConfigCacheNativePersistence**](docs/CacheConfigurationNativePersistenceApi.md#putConfigCacheNativePersistence) | **PUT** /jans-config-api/api/v1/config/cache/native-persistence | Updates native persistence cache configuration.
*JansConfigApi.CacheConfigurationRedisApi* | [**getConfigCacheRedis**](docs/CacheConfigurationRedisApi.md#getConfigCacheRedis) | **GET** /jans-config-api/api/v1/config/cache/redis | Returns Redis cache configuration.
*JansConfigApi.CacheConfigurationRedisApi* | [**putConfigCacheRedis**](docs/CacheConfigurationRedisApi.md#putConfigCacheRedis) | **PUT** /jans-config-api/api/v1/config/cache/redis | Updates Redis cache configuration.
*JansConfigApi.ConfigurationFido2Api* | [**getPropertiesFido2**](docs/ConfigurationFido2Api.md#getPropertiesFido2) | **GET** /jans-config-api/api/v1/fido2/config | Gets Jans Authorization Server Fido2 configuration properties.
*JansConfigApi.ConfigurationFido2Api* | [**putPropertiesFido2**](docs/ConfigurationFido2Api.md#putPropertiesFido2) | **PUT** /jans-config-api/api/v1/fido2/config | Updates Fido2 configuration properties.
*JansConfigApi.ConfigurationJWKJSONWebKeyJWKApi* | [**getConfigJwks**](docs/ConfigurationJWKJSONWebKeyJWKApi.md#getConfigJwks) | **GET** /jans-config-api/api/v1/config/jwks | Gets list of JSON Web Key (JWK) used by server.
*JansConfigApi.ConfigurationJWKJSONWebKeyJWKApi* | [**patchConfigJwks**](docs/ConfigurationJWKJSONWebKeyJWKApi.md#patchConfigJwks) | **PATCH** /jans-config-api/api/v1/config/jwks | Patch JWKS
*JansConfigApi.ConfigurationJWKJSONWebKeyJWKApi* | [**putConfigJwks**](docs/ConfigurationJWKJSONWebKeyJWKApi.md#putConfigJwks) | **PUT** /jans-config-api/api/v1/config/jwks | Puts/replaces JWKS
*JansConfigApi.ConfigurationLoggingApi* | [**getConfigLogging**](docs/ConfigurationLoggingApi.md#getConfigLogging) | **GET** /jans-config-api/api/v1/logging | Returns Jans Authorization Server logging settings.
*JansConfigApi.ConfigurationLoggingApi* | [**putConfigLogging**](docs/ConfigurationLoggingApi.md#putConfigLogging) | **PUT** /jans-config-api/api/v1/logging | Updates Jans Authorization Server logging settings.
*JansConfigApi.ConfigurationPropertiesApi* | [**getProperties**](docs/ConfigurationPropertiesApi.md#getProperties) | **GET** /jans-config-api/api/v1/jans-auth-server/config | Gets all Jans authorization server configuration properties.
*JansConfigApi.ConfigurationPropertiesApi* | [**patchProperties**](docs/ConfigurationPropertiesApi.md#patchProperties) | **PATCH** /jans-config-api/api/v1/jans-auth-server/config | Partially modifies Jans authorization server Application configuration properties.
*JansConfigApi.ConfigurationSMTPApi* | [**deleteConfigSmtp**](docs/ConfigurationSMTPApi.md#deleteConfigSmtp) | **DELETE** /jans-config-api/api/v1/config/smtp | Deletes SMTP server configuration.
*JansConfigApi.ConfigurationSMTPApi* | [**getConfigSmtp**](docs/ConfigurationSMTPApi.md#getConfigSmtp) | **GET** /jans-config-api/api/v1/config/smtp | Returns SMTP server configuration.
*JansConfigApi.ConfigurationSMTPApi* | [**postConfigSmtp**](docs/ConfigurationSMTPApi.md#postConfigSmtp) | **POST** /jans-config-api/api/v1/config/smtp | Adds SMTP server configuration.
*JansConfigApi.ConfigurationSMTPApi* | [**putConfigSmtp**](docs/ConfigurationSMTPApi.md#putConfigSmtp) | **PUT** /jans-config-api/api/v1/config/smtp | Updates SMTP server configuration.
*JansConfigApi.ConfigurationSMTPApi* | [**testConfigSmtp**](docs/ConfigurationSMTPApi.md#testConfigSmtp) | **POST** /jans-config-api/api/v1/config/smtp/test | Test SMTP server configuration.
*JansConfigApi.CustomScriptsApi* | [**deleteConfigScriptsByInum**](docs/CustomScriptsApi.md#deleteConfigScriptsByInum) | **DELETE** /jans-config-api/api/v1/config/scripts/{inum} | Deletes a custom script.
*JansConfigApi.CustomScriptsApi* | [**getConfigScripts**](docs/CustomScriptsApi.md#getConfigScripts) | **GET** /jans-config-api/api/v1/config/scripts | Gets a list of custom scripts.
*JansConfigApi.CustomScriptsApi* | [**getConfigScriptsByInum**](docs/CustomScriptsApi.md#getConfigScriptsByInum) | **GET** /jans-config-api/api/v1/config/scripts/inum/{inum} | Gets a script by Inum.
*JansConfigApi.CustomScriptsApi* | [**getConfigScriptsByType**](docs/CustomScriptsApi.md#getConfigScriptsByType) | **GET** /jans-config-api/api/v1/config/scripts/type/{type} | Gets list of scripts by type.
*JansConfigApi.CustomScriptsApi* | [**postConfigScripts**](docs/CustomScriptsApi.md#postConfigScripts) | **POST** /jans-config-api/api/v1/config/scripts | Adds a new custom script.
*JansConfigApi.CustomScriptsApi* | [**putConfigScripts**](docs/CustomScriptsApi.md#putConfigScripts) | **PUT** /jans-config-api/api/v1/config/scripts | Updates a custom script.
*JansConfigApi.DatabaseCouchbaseConfigurationApi* | [**deleteConfigDatabaseCouchbaseByName**](docs/DatabaseCouchbaseConfigurationApi.md#deleteConfigDatabaseCouchbaseByName) | **DELETE** /jans-config-api/api/v1/config/database/couchbase/{name} | Deletes a Couchbase configurations by name.
*JansConfigApi.DatabaseCouchbaseConfigurationApi* | [**getConfigDatabaseCouchbase**](docs/DatabaseCouchbaseConfigurationApi.md#getConfigDatabaseCouchbase) | **GET** /jans-config-api/api/v1/config/database/couchbase | Gets list of existing Couchbase configurations.
*JansConfigApi.DatabaseCouchbaseConfigurationApi* | [**getConfigDatabaseCouchbaseByName**](docs/DatabaseCouchbaseConfigurationApi.md#getConfigDatabaseCouchbaseByName) | **GET** /jans-config-api/api/v1/config/database/couchbase/{name} | Gets a Couchbase configurations by name.
*JansConfigApi.DatabaseCouchbaseConfigurationApi* | [**patchConfigDatabaseCouchbaseByName**](docs/DatabaseCouchbaseConfigurationApi.md#patchConfigDatabaseCouchbaseByName) | **PATCH** /jans-config-api/api/v1/config/database/couchbase/{name} | Partially modify an Couchbase configuration.
*JansConfigApi.DatabaseCouchbaseConfigurationApi* | [**postConfigDatabaseCouchbase**](docs/DatabaseCouchbaseConfigurationApi.md#postConfigDatabaseCouchbase) | **POST** /jans-config-api/api/v1/config/database/couchbase | Adds a new Couchbase configuration.
*JansConfigApi.DatabaseCouchbaseConfigurationApi* | [**postConfigDatabaseCouchbaseTest**](docs/DatabaseCouchbaseConfigurationApi.md#postConfigDatabaseCouchbaseTest) | **POST** /jans-config-api/api/v1/config/database/couchbase/test | Tests a Couchbase configuration.
*JansConfigApi.DatabaseCouchbaseConfigurationApi* | [**putConfigDatabaseCouchbase**](docs/DatabaseCouchbaseConfigurationApi.md#putConfigDatabaseCouchbase) | **PUT** /jans-config-api/api/v1/config/database/couchbase | Updates Couchbase configuration.
*JansConfigApi.DatabaseLDAPConfigurationApi* | [**deleteConfigDatabaseLdapByName**](docs/DatabaseLDAPConfigurationApi.md#deleteConfigDatabaseLdapByName) | **DELETE** /jans-config-api/api/v1/config/database/ldap/{name} | Deletes an LDAP configuration.
*JansConfigApi.DatabaseLDAPConfigurationApi* | [**getConfigDatabaseLdap**](docs/DatabaseLDAPConfigurationApi.md#getConfigDatabaseLdap) | **GET** /jans-config-api/api/v1/config/database/ldap | Gets list of existing LDAP configurations.
*JansConfigApi.DatabaseLDAPConfigurationApi* | [**getConfigDatabaseLdapByName**](docs/DatabaseLDAPConfigurationApi.md#getConfigDatabaseLdapByName) | **GET** /jans-config-api/api/v1/config/database/ldap/{name} | Gets an LDAP configuration by name.
*JansConfigApi.DatabaseLDAPConfigurationApi* | [**patchConfigDatabaseLdapByName**](docs/DatabaseLDAPConfigurationApi.md#patchConfigDatabaseLdapByName) | **PATCH** /jans-config-api/api/v1/config/database/ldap/{name} | Partially modify an LDAP configuration.
*JansConfigApi.DatabaseLDAPConfigurationApi* | [**postConfigDatabaseLdap**](docs/DatabaseLDAPConfigurationApi.md#postConfigDatabaseLdap) | **POST** /jans-config-api/api/v1/config/database/ldap | Adds a new LDAP configuration.
*JansConfigApi.DatabaseLDAPConfigurationApi* | [**postConfigDatabaseLdapTest**](docs/DatabaseLDAPConfigurationApi.md#postConfigDatabaseLdapTest) | **POST** /jans-config-api/api/v1/config/database/ldap/test | Tests an LDAP configuration.
*JansConfigApi.DatabaseLDAPConfigurationApi* | [**putConfigDatabaseLdap**](docs/DatabaseLDAPConfigurationApi.md#putConfigDatabaseLdap) | **PUT** /jans-config-api/api/v1/config/database/ldap | Updates LDAP configuration.
*JansConfigApi.DefaultAuthenticationMethodApi* | [**getAcrs**](docs/DefaultAuthenticationMethodApi.md#getAcrs) | **GET** /jans-config-api/api/v1/acrs | Gets default authentication method.
*JansConfigApi.DefaultAuthenticationMethodApi* | [**putAcrs**](docs/DefaultAuthenticationMethodApi.md#putAcrs) | **PUT** /jans-config-api/api/v1/acrs | Updates default authentication method.
*JansConfigApi.OAuthOpenIDConnectClientsApi* | [**deleteOauthOpenidClientsByInum**](docs/OAuthOpenIDConnectClientsApi.md#deleteOauthOpenidClientsByInum) | **DELETE** /jans-config-api/api/v1/openid/clients/{inum} | Delete OpenId Connect client.
*JansConfigApi.OAuthOpenIDConnectClientsApi* | [**getOauthOpenidClients**](docs/OAuthOpenIDConnectClientsApi.md#getOauthOpenidClients) | **GET** /jans-config-api/api/v1/openid/clients | Gets list of OpenID Connect clients
*JansConfigApi.OAuthOpenIDConnectClientsApi* | [**getOauthOpenidClientsByInum**](docs/OAuthOpenIDConnectClientsApi.md#getOauthOpenidClientsByInum) | **GET** /jans-config-api/api/v1/openid/clients/{inum} | Get OpenId Connect Client by Inum
*JansConfigApi.OAuthOpenIDConnectClientsApi* | [**patchOauthOpenidClientsByInum**](docs/OAuthOpenIDConnectClientsApi.md#patchOauthOpenidClientsByInum) | **PATCH** /jans-config-api/api/v1/openid/clients/{inum} | Update modified properties of OpenId Connect client by Inum.
*JansConfigApi.OAuthOpenIDConnectClientsApi* | [**postOauthOpenidClients**](docs/OAuthOpenIDConnectClientsApi.md#postOauthOpenidClients) | **POST** /jans-config-api/api/v1/openid/clients | Create new OpenId connect client
*JansConfigApi.OAuthOpenIDConnectClientsApi* | [**putOauthOpenidClients**](docs/OAuthOpenIDConnectClientsApi.md#putOauthOpenidClients) | **PUT** /jans-config-api/api/v1/openid/clients | Update OpenId Connect client.
*JansConfigApi.OAuthOpenIDConnectSectorIdentifiersApi* | [**deleteOauthOpenidSectorsById**](docs/OAuthOpenIDConnectSectorIdentifiersApi.md#deleteOauthOpenidSectorsById) | **DELETE** /jans-config-api/api/v1/openid/sectoridentifiers/{inum} | Delete OpenID Connect Sector.
*JansConfigApi.OAuthOpenIDConnectSectorIdentifiersApi* | [**getOauthOpenidSectors**](docs/OAuthOpenIDConnectSectorIdentifiersApi.md#getOauthOpenidSectors) | **GET** /jans-config-api/api/v1/openid/sectoridentifiers | Gets list of OpenID Connect Sectors.
*JansConfigApi.OAuthOpenIDConnectSectorIdentifiersApi* | [**getOauthOpenidSectorsById**](docs/OAuthOpenIDConnectSectorIdentifiersApi.md#getOauthOpenidSectorsById) | **GET** /jans-config-api/api/v1/openid/sectoridentifiers/{inum} | Get OpenID Connect Sector by Inum.
*JansConfigApi.OAuthOpenIDConnectSectorIdentifiersApi* | [**patchOauthOpenidSectorsById**](docs/OAuthOpenIDConnectSectorIdentifiersApi.md#patchOauthOpenidSectorsById) | **PATCH** /jans-config-api/api/v1/openid/sectoridentifiers/{inum} | Partially update OpenId Connect Sector by Inum.
*JansConfigApi.OAuthOpenIDConnectSectorIdentifiersApi* | [**postOauthOpenidSectors**](docs/OAuthOpenIDConnectSectorIdentifiersApi.md#postOauthOpenidSectors) | **POST** /jans-config-api/api/v1/openid/sectoridentifiers | Create new OpenID Connect Sector.
*JansConfigApi.OAuthOpenIDConnectSectorIdentifiersApi* | [**putOauthOpenidSectors**](docs/OAuthOpenIDConnectSectorIdentifiersApi.md#putOauthOpenidSectors) | **PUT** /jans-config-api/api/v1/openid/sectoridentifiers | Update OpenId Connect Sector.
*JansConfigApi.OAuthScopesApi* | [**deleteOauthScopesById**](docs/OAuthScopesApi.md#deleteOauthScopesById) | **DELETE** /jans-config-api/api/v1/scopes/{inum} | Delete Scope.
*JansConfigApi.OAuthScopesApi* | [**getOauthScopes**](docs/OAuthScopesApi.md#getOauthScopes) | **GET** /jans-config-api/api/v1/scopes | Gets list of Scopes.
*JansConfigApi.OAuthScopesApi* | [**getOauthScopesByInum**](docs/OAuthScopesApi.md#getOauthScopesByInum) | **GET** /jans-config-api/api/v1/scopes/{inum} | Get Scope by Inum
*JansConfigApi.OAuthScopesApi* | [**patchOauthScopesById**](docs/OAuthScopesApi.md#patchOauthScopesById) | **PATCH** /jans-config-api/api/v1/scopes/{inum} | Update modified attributes of existing Scope by Inum.
*JansConfigApi.OAuthScopesApi* | [**postOauthScopes**](docs/OAuthScopesApi.md#postOauthScopes) | **POST** /jans-config-api/api/v1/scopes | Create Scope.
*JansConfigApi.OAuthScopesApi* | [**putOauthScopes**](docs/OAuthScopesApi.md#putOauthScopes) | **PUT** /jans-config-api/api/v1/scopes | Updates existing Scope.
*JansConfigApi.OAuthUMAResourcesApi* | [**deleteOauthUmaResourcesById**](docs/OAuthUMAResourcesApi.md#deleteOauthUmaResourcesById) | **DELETE** /jans-config-api/api/v1/uma/resources/{id} | Deletes an UMA resource.
*JansConfigApi.OAuthUMAResourcesApi* | [**getOauthUmaResources**](docs/OAuthUMAResourcesApi.md#getOauthUmaResources) | **GET** /jans-config-api/api/v1/uma/resources | Gets list of UMA resources.
*JansConfigApi.OAuthUMAResourcesApi* | [**getOauthUmaResourcesById**](docs/OAuthUMAResourcesApi.md#getOauthUmaResourcesById) | **GET** /jans-config-api/api/v1/uma/resources/{id} | Gets an UMA resource by ID.
*JansConfigApi.OAuthUMAResourcesApi* | [**patchOauthUmaResourcesById**](docs/OAuthUMAResourcesApi.md#patchOauthUmaResourcesById) | **PATCH** /jans-config-api/api/v1/uma/resources/{id} | Partially updates an UMA resource by Inum.
*JansConfigApi.OAuthUMAResourcesApi* | [**postOauthUmaResources**](docs/OAuthUMAResourcesApi.md#postOauthUmaResources) | **POST** /jans-config-api/api/v1/uma/resources | Creates an UMA resource.
*JansConfigApi.OAuthUMAResourcesApi* | [**putOauthUmaResources**](docs/OAuthUMAResourcesApi.md#putOauthUmaResources) | **PUT** /jans-config-api/api/v1/uma/resources | Updates an UMA resource.


## Documentation for Models

 - [JansConfigApi.AppConfiguration](docs/AppConfiguration.md)
 - [JansConfigApi.AppConfigurationAuthenticationFilters](docs/AppConfigurationAuthenticationFilters.md)
 - [JansConfigApi.AppConfigurationAuthenticationProtectionConfiguration](docs/AppConfigurationAuthenticationProtectionConfiguration.md)
 - [JansConfigApi.AppConfigurationCibaEndUserNotificationConfig](docs/AppConfigurationCibaEndUserNotificationConfig.md)
 - [JansConfigApi.AppConfigurationClientAuthenticationFilters](docs/AppConfigurationClientAuthenticationFilters.md)
 - [JansConfigApi.AppConfigurationCorsConfigurationFilters](docs/AppConfigurationCorsConfigurationFilters.md)
 - [JansConfigApi.AuthenticationMethod](docs/AuthenticationMethod.md)
 - [JansConfigApi.CacheConfiguration](docs/CacheConfiguration.md)
 - [JansConfigApi.Client](docs/Client.md)
 - [JansConfigApi.ClientAttributes](docs/ClientAttributes.md)
 - [JansConfigApi.CouchbaseConfiguration](docs/CouchbaseConfiguration.md)
 - [JansConfigApi.CustomAttribute](docs/CustomAttribute.md)
 - [JansConfigApi.CustomScript](docs/CustomScript.md)
 - [JansConfigApi.CustomScriptConfigurationProperties](docs/CustomScriptConfigurationProperties.md)
 - [JansConfigApi.CustomScriptModuleProperties](docs/CustomScriptModuleProperties.md)
 - [JansConfigApi.CustomScriptScriptError](docs/CustomScriptScriptError.md)
 - [JansConfigApi.ErrorResponse](docs/ErrorResponse.md)
 - [JansConfigApi.Fido2Configuration](docs/Fido2Configuration.md)
 - [JansConfigApi.GluuAttribute](docs/GluuAttribute.md)
 - [JansConfigApi.GluuAttributeAttributeValidation](docs/GluuAttributeAttributeValidation.md)
 - [JansConfigApi.InMemoryConfiguration](docs/InMemoryConfiguration.md)
 - [JansConfigApi.InlineResponse200](docs/InlineResponse200.md)
 - [JansConfigApi.JansFido2DynConfiguration](docs/JansFido2DynConfiguration.md)
 - [JansConfigApi.JsonWebKey](docs/JsonWebKey.md)
 - [JansConfigApi.LdapConfiguration](docs/LdapConfiguration.md)
 - [JansConfigApi.LoggingConfiguration](docs/LoggingConfiguration.md)
 - [JansConfigApi.MemcachedConfiguration](docs/MemcachedConfiguration.md)
 - [JansConfigApi.NativePersistenceConfiguration](docs/NativePersistenceConfiguration.md)
 - [JansConfigApi.PatchRequest](docs/PatchRequest.md)
 - [JansConfigApi.RedisConfiguration](docs/RedisConfiguration.md)
 - [JansConfigApi.RequestedParties](docs/RequestedParties.md)
 - [JansConfigApi.Scope](docs/Scope.md)
 - [JansConfigApi.ScopeAttributes](docs/ScopeAttributes.md)
 - [JansConfigApi.SectorIdentifier](docs/SectorIdentifier.md)
 - [JansConfigApi.SmtpConfiguration](docs/SmtpConfiguration.md)
 - [JansConfigApi.UmaResource](docs/UmaResource.md)
 - [JansConfigApi.WebKeysConfiguration](docs/WebKeysConfiguration.md)


## Documentation for Authorization



### jans-auth


- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: 
  - https://jans.io/oauth/jans-auth-server/config/properties.readonly: View Auth Server properties related information
  - https://jans.io/oauth/jans-auth-server/config/properties.write: Manage Auth Server properties related information
  - https://jans.io/oauth/config/fido2.readonly: View FIDO2 related information
  - https://jans.io/oauth/config/fido2.write: Manage FIDO2 related information
  - https://jans.io/oauth/config/attributes.readonly: View attribute related information
  - https://jans.io/oauth/config/attributes.write: Manage attribute related information
  - https://jans.io/oauth/config/acrs.readonly: View ACRS related information
  - https://jans.io/oauth/config/acrs.write: Manage ACRS related information
  - https://jans.io/oauth/config/database/ldap.readonly: View LDAP database related information
  - https://jans.io/oauth/config/database/ldap.write: Manage LDAP database related information
  - https://jans.io/oauth/config/database/couchbase.readonly: View Couchbase database information
  - https://jans.io/oauth/config/database/couchbase.write: Manage Couchbase database related information
  - https://jans.io/oauth/config/scripts.readonly: View cache scripts information
  - https://jans.io/oauth/config/scripts.write: Manage scripts related information
  - https://jans.io/oauth/config/cache.readonly: View cache related information
  - https://jans.io/oauth/config/cache.write: Manage cache related information
  - https://jans.io/oauth/config/smtp.readonly: View SMTP related information
  - https://jans.io/oauth/config/smtp.write: Manage SMTP related information
  - https://jans.io/oauth/config/logging.readonly: View logging related information
  - https://jans.io/oauth/config/logging.write: Manage logging related information
  - https://jans.io/oauth/config/jwks.readonly: View JWKS related information
  - https://jans.io/oauth/config/jwks.write: Manage JWKS related information
  - https://jans.io/oauth/config/openid/clients.readonly: View clients related information
  - https://jans.io/oauth/config/openid/clients.write: Manage clients related information
  - https://jans.io/oauth/config/openid/sectoridentifiers.readonly: View sector related information
  - https://jans.io/oauth/config/openid/sectoridentifiers.write: Manage sector related information
  - https://jans.io/oauth/config/scopes.readonly: View scope related information
  - https://jans.io/oauth/config/scopes.write: Manage scope related information
  - https://jans.io/oauth/config/uma/resources.readonly: View UMA Resource related information
  - https://jans.io/oauth/config/uma/resources.write: Manage UMA Resource related information
