import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectRouter = state => state.router;
const selectGlobal = state => state.global || initialState;

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading,
  );

export { makeSelectLocation, makeSelectLoading };
