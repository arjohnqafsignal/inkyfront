import produce from 'immer';
import {
  LOGIN_GOOGLE,
  LOGOUT_GOOGLE,
  LOGOUT_GOOGLE_SUCCESS,
  LOGIN_GOOGLE_ERROR,
  LOGIN_GOOGLE_SUCCESS,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentUser: null,
  googleResponse: null,
  isLogged: false,
};

const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {  
      case LOGIN_GOOGLE:
        draft.loading = true;
        draft.error = false;
        draft.currentUser = null;
        draft.googleResponse = action.response;
        draft.isLogged = false;
        break;
      case LOGOUT_GOOGLE:
        draft.loading = true;
        draft.error = false;
        draft.currentUser = null;
        draft.googleResponse = null;
        draft.isLogged = false;
        break;

      case LOGIN_GOOGLE_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.currentUser = action.user;
        draft.googleResponse = null;
        draft.isLogged = true;
        break;
        
      case LOGOUT_GOOGLE_SUCCESS:
          draft.loading = false;
          draft.error = false;
          draft.currentUser = null;
          draft.googleResponse = null;
          draft.isLogged = false;
        break;

      case LOGIN_GOOGLE_ERROR:
        draft.error = action.error;
        draft.loading = false;
        draft.currentUser = null;
        draft.googleResponse = null;
        draft.isLogged = false;
        break;
        
    }
  });

export default appReducer;
