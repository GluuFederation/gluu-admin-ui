import {
  GET_LICENSE_DETAILS,
  GET_LICENSE_DETAILS_RESPONSE,
  UPDATE_LICENSE_DETAILS,
  UPDATE_LICENSE_DETAILS_RESPONSE,
} from '../actions/types'
import reducerRegistry from '../../../../app/redux/reducers/ReducerRegistry'
const INIT_STATE = {
  item: {},
  loading: true,
}

const reducerName = 'licenseDetailsReducer'

export default function licenseDetailsReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case GET_LICENSE_DETAILS:
      return handleLoading()
    case GET_LICENSE_DETAILS_RESPONSE:
      if (action.payload.data) {
        return {
          ...state,
          item: action.payload.data,
          loading: false,
        }
      } else {
        return handleDefault()
      }
    case UPDATE_LICENSE_DETAILS:
      return handleLoading()
    case UPDATE_LICENSE_DETAILS_RESPONSE:
      if (action.payload.data) {
        return {
          ...state,
          items: action.payload.data,
          loading: false,
        }
      } else {
        return handleLoading()
      }
    default:
      return handleDefault()
  }

  function handleDefault() {
    return {
      ...state,
      loading: false,
    }
  }

  function handleLoading() {
    return {
      ...state,
      loading: false,
    }
  }
}
reducerRegistry.register(reducerName, licenseDetailsReducer)
