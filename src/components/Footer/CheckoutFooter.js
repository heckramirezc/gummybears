import React, { Component } from 'react';
import PropTypes from 'prop-types';

// UI
import UI from './CheckoutFooter.ui';

class FooterCheckout extends Component {
  constructor(...props) {
    super(...props);
    this.state = {};
  }

  render() {
    return (
      <UI layoutData={this.props.layoutdata} />
    );
  }
}

FooterCheckout.propTypes = {
  layoutdata: PropTypes.shape({}).isRequired,
};

export default FooterCheckout;
