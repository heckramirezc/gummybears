import React from 'react';
import PropTypes from 'prop-types';
// import { xclose } from '../../helpers/svg';

const ModalNotification = ({ children }) => (
  <div className="ui--modal-notification active">
    <div>
      <section>
        {children}
        {/* <a className="close" onClick={toggle}>{xclose}</a> */}
      </section>
    </div>
  </div>
);

ModalNotification.propTypes = {
  children: PropTypes.node.isRequired,
  // toggle: PropTypes.func.isRequired,
};

export default ModalNotification;
