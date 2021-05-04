/**
 * Auth Reducers
 */
import {
  GET_OAUTH2_CONFIG,
  GET_OAUTH2_CONFIG_RESPONSE,
  USERINFO_REQUEST,
  USERINFO_RESPONSE,
  GET_API_ACCESS_TOKEN,
  GET_API_ACCESS_TOKEN_RESPONSE,
} from '../actions/types'
import reducerRegistry from './ReducerRegistry';
/**
 * initial auth user
 */
const INIT_STATE = {
  isAuthenticated: false,
  userinfo: null,
  userinfo_jwt: null,
  token: null,
  issuer: null,
  permissions: [],
}

const reducerName = 'authReducer';

export default function authReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case GET_OAUTH2_CONFIG:
      return {
        ...state,
        isAuthenticated: false,
      }
    case GET_OAUTH2_CONFIG_RESPONSE:
      if (action.payload.config) {
        return {
          ...state,
          isAuthenticated: false,
          config: action.payload.config,
        }
      } else {
        return {
          ...state,
        }
      }

    case USERINFO_REQUEST:
      return {
        ...state,
      }
    case USERINFO_RESPONSE:
      console.log('======UCLAIMS ' + JSON.stringify(action.payload.uclaims))
      if (action.payload.uclaims) {
        return {
          ...state,
          userinfo: action.payload.uclaims,
          userinfo_jwt: action.payload.ujwt,
          permissions: action.payload.scopes,
          isAuthenticated: true,
        }
      } else {
        return {
          ...state,
          isAuthenticated: true,
        }
      }

    case GET_API_ACCESS_TOKEN:
      return {
        ...state,
      }

    case GET_API_ACCESS_TOKEN_RESPONSE:
      if (action.payload.accessToken) {
        //console.log('======SCOPES ' + JSON.stringify(action.payload.accessToken.scopes))
        return {
          ...state,
          token: action.payload.accessToken,
          issuer: action.payload.accessToken.issuer,
          permissions: action.payload.accessToken.scopes,
          isAuthenticated: true,
        }
      } else {
        return {
          ...state,
        }
      }

    default:
      return {
        ...state,
      }
  }
}
reducerRegistry.register(reducerName, authReducer);