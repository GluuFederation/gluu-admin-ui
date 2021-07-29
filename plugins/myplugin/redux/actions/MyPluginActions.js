import { GET_MY_PLUGIN_DATA } from './types'

export const getMyPluginData = (options) => ({
  type: GET_MY_PLUGIN_DATA,
  payload: { options },
})
