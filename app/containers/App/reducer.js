import produce from 'immer';
import {
  LOGIN_GOOGLE,
  LOGIN_GOOGLE_ERROR,
  LOGIN_GOOGLE_SUCCESS,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentUser: null,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN_GOOGLE:
        draft.loading = true;
        draft.error = false;
        draft.currentUser = null;
        break;

      case LOGIN_GOOGLE_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.currentUser = action.user;
        break;

      case LOGIN_GOOGLE_ERROR:
        draft.error = action.error;
        draft.loading = false;
        draft.currentUser = null;
        break;
    }
  });

export default appReducer;
