import {
  GET_SCOPES,
  GET_SCOPES_RESPONSE,
  GET_SCOPE_BY_INUM,
  GET_SCOPE_BY_INUM_RESPONSE,
  ADD_SCOPE,
  ADD_SCOPE_RESPONSE,
  EDIT_SCOPE,
  EDIT_SCOPE_RESPONSE,
  DELETE_SCOPE,
  DELETE_SCOPE_RESPONSE,
  RESET,
  SET_ITEM,
  GET_SCOPE_BY_PATTERN,
  GET_SCOPE_BY_PATTERN_RESPONSE,
  SEARCH_SCOPES,
} from '../actions/types'
import reducerRegistry from '../../../../app/redux/reducers/ReducerRegistry'
const INIT_STATE = {
  items: [],
  item: {},
  loading: false,
}

const reducerName = 'scopeReducer'

export default function scopeReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case GET_SCOPES:
      return {
        ...state,
        loading: true,
      }
    case SEARCH_SCOPES:
      return {
        ...state,
        loading: true,
      }
    case GET_SCOPES_RESPONSE:
      if (action.payload.data) {
        return {
          ...state,
          items: action.payload.data,
          loading: false,
        }
      } else {
        return {
          ...state,
          loading: false,
        }
      }

    case GET_SCOPE_BY_INUM:
      return {
        ...state,
        loading: true,
      }
    case GET_SCOPE_BY_INUM_RESPONSE:
      if (action.payload.data) {
        return {
          ...state,
          item: action.payload.data,
          loading: false,
        }
      } else {
        return {
          ...state,
          loading: false,
        }
      }

    case GET_SCOPE_BY_PATTERN:
      return {
        ...state,
        loading: true,
      }
    case GET_SCOPE_BY_PATTERN_RESPONSE:
      if (action.payload.data) {
        return {
          ...state,
          item: action.payload.data,
          loading: false,
        }
      } else {
        return {
          ...state,
          loading: false,
        }
      }

    case ADD_SCOPE:
      return {
        ...state,
        loading: true,
      }
    case ADD_SCOPE_RESPONSE:
      if (action.payload.data) {
        return {
          ...state,
          items: [action.payload.data, ...state.items],
          loading: false,
        }
      } else {
        return {
          ...state,
          loading: false,
        }
      }

    case EDIT_SCOPE:
      return {
        ...state,
        loading: true,
      }

    case EDIT_SCOPE_RESPONSE:
      if (action.payload.data) {
        return {
          ...state,
          items: [action.payload.data, ...state.items],
          loading: false,
        }
      } else {
        return {
          ...state,
          loading: false,
        }
      }

    case DELETE_SCOPE:
      return {
        ...state,
        loading: true,
      }
    case DELETE_SCOPE_RESPONSE:
      if (action.payload.data) {
        return {
          ...state,
          items: state.items.filter((i) => i.inum !== action.payload.data),
          loading: false,
        }
      } else {
        return {
          ...state,
          loading: false,
        }
      }

    case SET_ITEM:
      return {
        ...state,
        item: action.payload.item,
        loading: false,
      }
    case RESET:
      return {
        ...state,
        items: INIT_STATE.items,
        loading: INIT_STATE.loading,
      }
    default:
      return {
        ...state,
      }
  }
}
reducerRegistry.register(reducerName, scopeReducer)
