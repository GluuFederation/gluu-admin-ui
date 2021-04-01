import { call, all, put, fork, takeLatest, select } from 'redux-saga/effects'
import { isFourZeroOneError } from '../../utils/TokenController'
import {
  getOpenidClientsResponse,
  addClientResponse,
  editClientResponse,
  deleteClientResponse,
} from '../actions/OpenidClientActions'
import { getAPIAccessToken } from '../actions/AuthActions'
import {
  GET_OPENID_CLIENTS,
  ADD_CLIENT,
  EDIT_CLIENT,
  DELETE_CLIENT,
} from '../actions/types'
import OIDCApi from '../api/OIDCApi'
import { getClient } from '../api/base'

const JansConfigApi = require('jans_config_api')

function* newFunction() {
  const token = yield select((state) => state.authReducer.token.access_token)
  const issuer = yield select((state) => state.authReducer.issuer)
  const api = new JansConfigApi.OAuthOpenIDConnectClientsApi(
    getClient(JansConfigApi, token, issuer),
  )
  return new OIDCApi(api)
}

export function* getOauthOpenidClients() {
  try {
    const openIdApi = yield* newFunction()
    const data = yield call(openIdApi.getAllOpenidClients)
    yield put(getOpenidClientsResponse(data))
  } catch (e) {
    yield put(getOpenidClientsResponse(null))
    if (isFourZeroOneError(e)) {
      const jwt = yield select((state) => state.authReducer.userinfo_jwt)
      yield put(getAPIAccessToken(jwt))
    }
  }
}

export function* addNewClient({ payload }) {
  console.log('====================Adding new client')
  try {
    console.log('===================step one')
    const openIdApi = yield* newFunction()
    console.log('===================step two')
    const data = yield call(openIdApi.addNewOpenIdClient, payload.data)
    console.log('===================step three')
    yield put(addClientResponse(data))
  } catch (e) {
    yield put(addClientResponse(null))
    if (isFourZeroOneError(e)) {
      console.log('====error ' + e)
      const jwt = yield select((state) => state.authReducer.userinfo_jwt)
      yield put(getAPIAccessToken(jwt))
    }
  }
}

export function* editAClient({ payload }) {
  try {
    const postBody = {}
    postBody['client'] = JSON.parse(payload.data)
    const api = yield* newFunction()
    const data = yield call(api.editAClient, postBody)
    yield put(editClientResponse(data))
  } catch (e) {
    yield put(editClientResponse(null))
    if (isFourZeroOneError(e)) {
      const jwt = yield select((state) => state.authReducer.userinfo_jwt)
      yield put(getAPIAccessToken(jwt))
    }
  }
}

export function* deleteAClient({ payload }) {
  try {
    const api = yield* newFunction()
    const data = yield call(api.deleteAClient, payload.inum)
    yield put(deleteClientResponse(payload.inum))
  } catch (e) {
    yield put(deleteClientResponse(null))
    if (isFourZeroOneError(e)) {
      const jwt = yield select((state) => state.authReducer.userinfo_jwt)
      yield put(getAPIAccessToken(jwt))
    }
  }
}

export function* getOpenidClientsWatcher() {
  yield takeLatest(GET_OPENID_CLIENTS, getOauthOpenidClients)
}

export function* addClientWatcher() {
  yield takeLatest(ADD_CLIENT, addNewClient)
}

export function* editClientWatcher() {
  yield takeLatest(EDIT_CLIENT, editAClient)
}
export function* deleteClientWatcher() {
  yield takeLatest(DELETE_CLIENT, deleteAClient)
}

export default function* rootSaga() {
  yield all([
    fork(getOpenidClientsWatcher),
    fork(addClientWatcher),
    fork(editClientWatcher),
    fork(deleteClientWatcher),
  ])
}