import {
  GET_JSON_CONFIG,
  GET_JSONCONFIG_RESPONSE,
  PATCH_JSON_CONFIG,
  PATCH_JSONCONFIG_RESPONSE,
} from '../actions/types'
import reducerRegistry from '../../../../app/redux/reducers/ReducerRegistry'
const INIT_STATE = {
  configuration: {},
  loading: false,
}

const reducerName = 'jsonConfigReducer'

export default function jsonConfigReducer(action, state = INIT_STATE) {
  switch (action.type) {
    case GET_JSON_CONFIG:
      return {
        ...state,
        loading: true,
      }
    case GET_JSONCONFIG_RESPONSE:
      if (action.payload.data) {
        return {
          ...state,
          configuration: action.payload.data,
          loading: false,
        }
      } else {
        return {
          ...state,
          loading: false,
        }
      }

    case PATCH_JSON_CONFIG:
      return {
        ...state,
        loading: true,
      }
    case PATCH_JSONCONFIG_RESPONSE:
      if (action.payload.data) {
        return {
          ...state,
          configuration: action.payload.data,
          loading: false,
        }
      } else {
        return {
          ...state,
          loading: false,
        }
      }
    default:
      return {
        ...state,
      }
  }
}
reducerRegistry.register(reducerName, jsonConfigReducer)
