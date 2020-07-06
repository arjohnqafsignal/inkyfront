import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import {
    LOGIN_GOOGLE,
    LOGOUT_GOOGLE
  } from './constants';

import { apiLogin } from '../../services/auth';

import { loginGoogleSuccess, loginGoogleError, logoutGoogleSuccess } from './actions'
import { makeGoogleResponse } from './selectors'

export function* doGoogleLogin() {
  const googleResponse = yield select(makeGoogleResponse());
  const user = {
    name: googleResponse.profileObj.name,
    email: googleResponse.profileObj.email,
    image: googleResponse.profileObj.imageUrl,
    google_id: googleResponse.profileObj.googleId
  }
  
  try {
    const response  = yield call(apiLogin, user);
     localStorage.setItem('user', JSON.stringify(response));
     console.log(response);
     yield put(loginGoogleSuccess(response));
  } catch (error) {
    yield put(loginGoogleError("Google Login Failed"));
  }
  
}

export function* doGoogleLogout() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  yield put(logoutGoogleSuccess());
}

export default function* appSaga() {
    yield takeLatest(LOGIN_GOOGLE, doGoogleLogin);
    yield takeLatest(LOGOUT_GOOGLE, doGoogleLogout);
}
  