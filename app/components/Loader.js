import React from 'react';

import PropTypes from 'prop-types';
function Loader(props) {
  if (props.isLoading) {
    return (
      <div>
        <div>
          <div className="preloader">
            <div className="loader">
              <div className="ytp-spinner">
                <div className="ytp-spinner-container">
                  <div className="ytp-spinner-rotator">
                    <div className="ytp-spinner-left">
                      <div className="ytp-spinner-circle" />
                    </div>
                    <div className="ytp-spinner-right">
                      <div className="ytp-spinner-circle" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}


Loader.propTypes = {
  isLoading: PropTypes.bool,
};

export default Loader;
