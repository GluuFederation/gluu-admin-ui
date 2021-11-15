import {
  GET_FIDO,
  GET_FIDO_RESPONSE,
  PUT_FIDO,
  PUT_FIDO_RESPONSE,
  RESET,
} from '../actions/types'
import reducerRegistry from './ReducerRegistry';
const INIT_STATE = {
  fido: { fido2Configuration: {} },
  loading: false,
}

const reducerName = 'fidoReducer';

export default function fidoReducer(action ,state = INIT_STATE) {
  switch (action.type) {
    case GET_FIDO:
      return {
        ...state,
        loading: true,
      }
    case GET_FIDO_RESPONSE:
      if (action.payload.data) {
        return {
          ...state,
          fido: action.payload.data,
          loading: false,
        }
      } else {
        return {
          ...state,
          loading: false,
        }
      }
    case PUT_FIDO:
      return {
        ...state,
        loading: true,
      }
    case PUT_FIDO_RESPONSE:
      if (action.payload.data) {
        return {
          ...state,
          fido: action.payload.data,
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
        fido: INIT_STATE.fido,
        loading: INIT_STATE.loading,
      }
    default:
      return {
        ...state,
      }
  }
}

reducerRegistry.register(reducerName, fidoReducer);