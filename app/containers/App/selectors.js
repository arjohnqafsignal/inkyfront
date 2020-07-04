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

export default makeAppLoading;
export { selectApp, makeGoogleResponse };
