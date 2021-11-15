import {
  GET_LOGGING,
  GET_LOGGING_RESPONSE,
  PUT_LOGGING,
  PUT_LOGGING_RESPONSE,
  RESET,
} from '../actions/types'
import reducerRegistry from '../../../../app/redux/reducers/ReducerRegistry'
const INIT_STATE = {
  logging: {},
  loading: false,
}

const reducerName = 'loggingReducer'

export default function loggingReducer(action, state = INIT_STATE) {
  switch (action.type) {
    case GET_LOGGING:
      return {
        ...state,
        loading: true,
      }
    case GET_LOGGING_RESPONSE:
      if (action.payload.data) {
        return {
          ...state,
          logging: action.payload.data,
          loading: false,
        }
      } else {
        return {
          ...state,
          loading: false,
        }
      }
    case PUT_LOGGING:
      return {
        ...state,
        loading: true,
      }
    case PUT_LOGGING_RESPONSE:
      if (action.payload.data) {
        return {
          ...state,
          logging: action.payload.data,
          loading: false,
        }
      } else {
        return {
          ...state,
          loading: false,
        }
      }

    case RESET:
      return {
        ...state,
        logging: INIT_STATE.logging,
        loading: INIT_STATE.loading,
      }
    default:
      return {
        ...state,
      }
  }
}
reducerRegistry.register(reducerName, loggingReducer)
