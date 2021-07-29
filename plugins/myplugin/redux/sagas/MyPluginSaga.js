import { call, all, put, fork, takeLatest, select } from 'redux-saga/effects'
import { GET_MY_PLUGIN_DATA } from '../actions/types'

export function* getMyPluginData({ payload }) {
  try {
    //call your backend api
  } catch (e) {
    //handle the error
  }
}

export function* watchGetMyPluginData() {
  yield takeLatest(GET_MY_PLUGIN_DATA, getMyPluginData)
}

export default function* rootSaga() {
  yield all([fork(watchGetMyPluginData)])
}
