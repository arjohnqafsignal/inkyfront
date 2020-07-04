/**
 *
 * OrderProcess
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectOrderProcess from './selectors';
import reducer from './reducer';
import saga from './saga';

export function OrderProcess() {
  useInjectReducer({ key: 'orderProcess', reducer });
  useInjectSaga({ key: 'orderProcess', saga });

  return (
    <div>
      <Helmet>
        <title>OrderProcess</title>
        <meta name="description" content="Description of OrderProcess" />
      </Helmet>
    </div>
  );
}

OrderProcess.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  orderProcess: makeSelectOrderProcess(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(OrderProcess);
