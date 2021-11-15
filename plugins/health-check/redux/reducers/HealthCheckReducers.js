/**
 * HealthCheck Reducers
 */
import { GET_HEALTH_CHECK, GET_HEALTH_CHECK_RESPONSE, RESET } from '../types'
const INIT_STATE = {
  components: [],
  loading: false,
}

export default function healthCheckReducer(action, state = INIT_STATE) {
  switch (action.type) {
    case GET_HEALTH_CHECK:
      return {
        ...state,
        loading: true,
      }
    case GET_HEALTH_CHECK_RESPONSE:
      return {
        ...state,
        components: action.payload.components,
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
