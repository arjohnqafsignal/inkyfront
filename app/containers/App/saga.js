import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import {
    LOGIN_GOOGLE,
    LOGIN_GOOGLE_ERROR,
    LOGIN_GOOGLE_SUCCESS,
  } from './constants';

import { loginGoogleSuccess } from './actions'
import { makeGoogleResponse } from './selectors'

export function* doGoogleLogin() {
  const googleResponse = yield select(makeGoogleResponse());
  const user = {
    name: googleResponse.profileObj.name,
    email: googleResponse.profileObj.email,
    image: googleResponse.profileObj.imageUrl,
    googleId: googleResponse.profileObj.googleId
  }
  console.log(user);
}
export default function* appSaga() {
    yield takeLatest(LOGIN_GOOGLE, doGoogleLogin);
}
  