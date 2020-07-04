import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the orderProcess state domain
 */

const selectOrderProcessDomain = state => state.orderProcess || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by OrderProcess
 */

const makeSelectOrderProcess = () =>
  createSelector(
    selectOrderProcessDomain,
    substate => substate,
  );

export default makeSelectOrderProcess;
export { selectOrderProcessDomain };
