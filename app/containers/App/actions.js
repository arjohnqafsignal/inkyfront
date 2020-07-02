/*
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOGIN_GOOGLE,
  LOGIN_GOOGLE_ERROR,
  LOGIN_GOOGLE_SUCCESS,
} from './constants';

export function loginGoogle() {
  return {
    type: LOGIN_GOOGLE,
  };
}

export function loginGoogleError(error) {
  return {
    type: LOGIN_GOOGLE_ERROR,
    error,
  };
}

export function loginGoogleSuccess(user) {
  return {
    type: LOGIN_GOOGLE_SUCCESS,
    user,
  };
}
