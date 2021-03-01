/**
 * App Reducers
 */
import { combineReducers } from 'redux'
import authReducer from './AuthReducer'
import scopeReducer from './ScopeReducer'
import attributeReducer from './AttributeReducer'
import openidClientReducer from './OpenidClientReducer'
import customScriptReducer from './CustomScriptReducer'
import smtpReducer from './SmtpReducer'

const reducers = combineReducers({
  authReducer,
  scopeReducer,
  attributeReducer,
  openidClientReducer,
  customScriptReducer,
  smtpReducer,
})

export default reducers
