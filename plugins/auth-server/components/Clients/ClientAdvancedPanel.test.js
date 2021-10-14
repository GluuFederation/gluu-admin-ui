// import { PolarisTestProvider } from '@shopify/polaris';
import 'regenerator-runtime/runtime'
import React from 'react'
import { Provider } from 'react-redux'
import { I18nextProvider } from "react-i18next";
import { act, render, screen, waitFor } from './TestingHelper'
import '@testing-library/jest-dom/extend-expect'

import ClientAdvancedPanel from './ClientAdvancedPanel'
import i18n from "../../../../app/i18n";

beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }))
  });
  window.scroll = jest.fn();
});

afterAll(() => {
  jest.clearAllMocks()
})

test('<ClientAdvancedPanel />', async () => {
  const promise = Promise.resolve()
  const clientData = {
    frontChannelLogoutSessionRequired: false,
    includeClaimsInIdToken: false,
    redirectUris: [],
    claimRedirectUris: [],
    responseTypes: [],
    grantTypes: [],
    requireAuthTime: false,
    postLogoutRedirectUris: [],
    oxAuthScopes: [],
    trustedClient: false,
    persistClientAuthorizations: false,
    customAttributes: [],
    customObjectClasses: ['top'],
    rptAsJwt: false,
    accessTokenAsJwt: false,
    backchannelUserCodeParameter: false,
    disabled: false,
    runIntrospectionScriptBeforeAccessTokenAsJwtCreationAndIncludeClaims: false,
    keepClientAuthorizationAfterExpiration: false,
    allowSpontaneousScopes: false,
    backchannelLogoutSessionRequired: false,
    attributes: {
      tlsClientAuthSubjectDn: null,
      runIntrospectionScriptBeforeAccessTokenAsJwtCreationAndIncludeClaims: false,
      keepClientAuthorizationAfterExpiration: false,
      allowSpontaneousScopes: false,
      backchannelLogoutSessionRequired: false,
      backchannelLogoutUri: [],
      rptClaimsScripts: [],
      consentGatheringScripts: [],
      spontaneousScopeScriptDns: [],
      introspectionScripts: [],
      postAuthnScripts: [],
      additionalAudience: [],
    },
  }
  let props = {
    client:{clientData},
    script:{
      description: "Sample authentication module",
      dn: "inum=A51E-76DA,ou=scripts,o=jans",
      enabled: false,
      internal: false,
      inum: "A51E-76DA",
      level: 10,
      modified: false,
      moduleProperties: [],
      name: "basic",
      programmingLanguage: "PYTHON",
      revision: 1,
      script: `# oxAuth is available under the MIT License (2008). See http://opensource.org/licenses/MIT for full text.
            # Copyright (c) 2016, Janssen
            #
            # Author: Yuriy Movchan
            #
            
            from io.jans.service.cdi.util import CdiUtil
            from io.jans.as.server.security import Identity
            from io.jans.model.custom.script.type.auth import PersonAuthenticationType
            from io.jans.as.server.service import AuthenticationService
            from io.jans.util import StringHelper
            
            import java
            
            class PersonAuthentication(PersonAuthenticationType):
                def __init__(self, currentTimeMillis):
                    self.currentTimeMillis = currentTimeMillis
            
                def init(self, customScript,  configurationAttributes):
                    print "Basic. Initialization"
                    print "Basic. Initialized successfully"
                    return True   
            
                def destroy(self, configurationAttributes):
                    print "Basic. Destroy"
                    print "Basic. Destroyed successfully"
                    return True
                    
                def getAuthenticationMethodClaims(self, requestParameters):
                    return None
                    
                def getApiVersion(self):
                    return 11
            
                def isValidAuthenticationMethod(self, usageType, configurationAttributes):
                    return True
            
                def getAlternativeAuthenticationMethod(self, usageType, configurationAttributes):
                    return None
            
                def authenticate(self, configurationAttributes, requestParameters, step):
                    authenticationService = CdiUtil.bean(AuthenticationService)
            
                    if (step == 1):
                        print "Basic. Authenticate for step 1"
            
                        identity = CdiUtil.bean(Identity)
                        credentials = identity.getCredentials()
            
                        user_name = credentials.getUsername()
                        user_password = credentials.getPassword()
            
                        logged_in = False
                        if (StringHelper.isNotEmptyString(user_name) and StringHelper.isNotEmptyString(user_password)):
                            logged_in = authenticationService.authenticate(user_name, user_password)
            
                        if (not logged_in):
                            return False
            
                        return True
                    else:
                        return False
            
                def prepareForStep(self, configurationAttributes, requestParameters, step):
                    if (step == 1):
                        print "Basic. Prepare for Step 1"
                        return True
                    else:
                        return False
            
                def getExtraParametersForStep(self, configurationAttributes, step):
                    return None
            
                def getCountAuthenticationSteps(self, configurationAttributes):
                    return 1
            
                def getPageForStep(self, configurationAttributes, step):
                    return ""
            
                def getNextStep(self, configurationAttributes, requestParameters, step):
                    return -1
            
                def getLogoutExternalUrl(self, configurationAttributes, requestParameters):
                    print "Get external logout URL call"
                    return None
            
                def logout(self, configurationAttributes, requestParameters):
                    return True
            `,
      scriptType: "PERSON_AUTHENTICATION"
    },
    formik:null
  }
  
  // const { container, rerender } = render(
  //     <ClientAdvancedPanel {...props} />
  // )

  // expect(screen.getByTestId('client-advanced-panel')).toBeInTheDocument()

  // rerender(
  //   <I18nextProvider i18n={{}}>
  //     <ClientAdvancedPanel />
  //   </I18nextProvider>
  // )
  // expect(screen.queryByTestId('client-advanced-panel')).not.toBeInTheDocument()
  // expect(screen.getByText('Client URI:')).toBeInTheDocument()
  // expect(screen.getByText('Access Token as JWT:')).toBeInTheDocument()

  await act(() => promise)
})