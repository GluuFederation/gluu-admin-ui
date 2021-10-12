import { call, all, put, fork, takeLatest, select } from 'redux-saga/effects'
import { GET_MY_PLUGIN_DATA } from '../actions/types'
import {
  getToDos,
} from '../apis/backend-api'
import {
  getMyPluginDataResponse,
} from '../actions/MyPluginActions'

export function* getMyPluginDataWorker({ payload }) {
  try {
    const response = yield call(getToDos)
    if (response) {
      yield put(getMyPluginDataResponse(response))
      return
    }
  } catch (error) {
    console.log('Error in todos .', error)
  }
  yield put(getMyPluginDataResponse())
}

export function* watchGetMyPluginData() {
  yield takeLatest(GET_MY_PLUGIN_DATA, getMyPluginDataWorker)
}

export default function* rootSaga() {
  yield all([fork(watchGetMyPluginData)])
}
