import React from 'react';
import PropTypes from 'prop-types';

const NotificationUI = ({ title }) => (
  <div className="ui--notification">
    <p>{title}</p>
  </div>
);

NotificationUI.propTypes = {
  title: PropTypes.string.isRequired,
};

export default NotificationUI;
