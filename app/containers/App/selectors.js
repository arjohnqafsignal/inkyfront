import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectApp = state => state.app || initialState;


const makeAppLoading = () =>
  createSelector(
    selectApp,
    state => state.loading,
  );
const makeGoogleResponse = () =>
  createSelector(
    selectApp,
    state => state.googleResponse,
  );
const makeCurrentUser = () =>
  createSelector(
    selectApp,
    state => state.currentUser,
  );
const makeIsLogged = () =>
  createSelector(
    selectApp,
    state => state.isLogged,
  );

export default makeAppLoading;
export { makeAppLoading, selectApp, makeGoogleResponse, makeCurrentUser, makeIsLogged };
