import React, { Component } from 'react';
import PropTypes from 'prop-types';

// UI
import UI from './AccountHeader.ui';

class AccountHeader extends Component {
  constructor(...props) {
    super(...props);
    this.state = {};
  }

  render() {
    return (
      <UI title={this.props.title}>
        {this.props.children}
      </UI>
    );
  }
}

AccountHeader.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.shape({}).isRequired,
};

export default AccountHeader;
