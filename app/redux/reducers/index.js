/**
 * App Reducers
 */
import { combineReducers } from 'redux'
import authReducer from './AuthReducer'
import scopeReducer from './ScopeReducer'
import attributeReducer from './AttributeReducer'
import jsonConfigReducer from './JsonConfigReducer'
import oidcReducer from './OIDCReducer'
import customScriptReducer from './CustomScriptReducer'
import smtpReducer from './SmtpReducer'
import acrReducer from './AcrReducer'
import fidoReducer from './FidoReducer'
import loggingReducer from './LoggingReducer'
import pluginMenuReducer from './PluginMenuReducer'
import { healthCheck } from '../../../plugins/redux/reducers'
import ldapReducer from './LdapReducer'
import couchBaseReducer from './CouchbaseReducer'
import cacheReducer from './CacheReducer'
import { USER_LOGGED_OUT } from '../actions/types'
import jwksReducer from './JwksReducer'
import initReducer from './InitReducer'

const appReducers = {
  authReducer,
  scopeReducer,
  attributeReducer,
  oidcReducer,
  customScriptReducer,
  smtpReducer,
  acrReducer,
  fidoReducer,
  loggingReducer,
  pluginMenuReducer,
  ldapReducer,
  couchBaseReducer,
  cacheReducer,
  jwksReducer,
  initReducer,
  jsonConfigReducer,
}

const allReducers = { ...appReducers, healthCheck }
const reducers = combineReducers(allReducers)

const rootReducer = (state, action) => {
  // when a logout action is dispatched it will reset redux state
  if (action.type === USER_LOGGED_OUT) {
    localStorage.clear()
    state = undefined
  }
  return reducers(state, action)
}

export default rootReducer
