import { GET_MY_PLUGIN_DATA, GET_MY_PLUGIN_DATA_RESPONSE } from './types'

export const getMyPluginData = () => ({
  type: GET_MY_PLUGIN_DATA,
})

export const getMyPluginDataResponse = (data) => ({
  type: GET_MY_PLUGIN_DATA_RESPONSE,
  payload: { data },
})