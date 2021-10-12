import { GET_MY_PLUGIN_DATA, GET_MY_PLUGIN_DATA_RESPONSE } from '../actions/types'

const INIT_STATE = {
  data: [],
  loading: false,
}

const reducerName = 'myPluginReducer'

export default function myPluginReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case GET_MY_PLUGIN_DATA:
      return {
        ...state,
        loading: true,
      }

    case GET_MY_PLUGIN_DATA_RESPONSE:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      }

    default:
      return {
        ...state,
      }
  }
}
