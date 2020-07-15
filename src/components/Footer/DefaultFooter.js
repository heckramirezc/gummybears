import React, { Component } from 'react';
import PropTypes from 'prop-types';

// utilities
import $ from 'jquery';

// UI
import UI from './DefaultFooter.ui';

class Footer extends Component {
  closeMenus() {
    if ($(window).width() > 760) {
      $('.nav--user').removeClass('active');
      $('.nav--links-trigger').removeClass('active');
      $('.nav--menu').slideUp();
    }
  }

  render() {
    return (
      <UI
        closeMenus={this.closeMenus}
        layoutData={this.props.layoutdata}
        socialData={this.props.socialdata}
      />
    );
  }
}

Footer.propTypes = {
  layoutdata: PropTypes.shape({}).isRequired,
  socialdata: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Footer;

