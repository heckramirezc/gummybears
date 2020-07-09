import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import $ from 'jquery';

// UI
import UI from './DefaultHeader.ui';

class Header extends Component {
  constructor(...props) {
    super(...props);
    this.state = {
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleHover() {
    $('.nav--top-second-dropdown').slideDown();
  }

  handleLeave() {
    console.log('handleLeave');
    $('.nav--sublinks').hide();
  }

  /* handleLeave() {
    $('.nav--top-second-dropdown').slideUp();
  } */

  handleScroll() {
    const y = window.scrollY;
    if (y >= 1) {
      // $('.nav--top').slideUp(100);
      $('.nav--top').slideUp(140);
      $('.ui-log-btn').removeClass('active');
    } else {
      // $('.nav--top').slideDown(100);
      $('.nav--top').slideDown(140);
      $('.ui-log-btn').addClass('active');
    }
    $('.nav--top-third-dropdown').slideUp();
    $('.nav--top-third-trigger').removeClass('active');
  }

  // NavMain
  handleSearchToggle() {
    $('.nav--trigger-search').toggleClass('fa-search fa-times');
    $('.nav--search').slideToggle();
    $('.nav--menu-content.active').removeClass('active');
    $('.nav--trigger-menu.fa-times').toggleClass('fa-bars fa-times');
  }

  handleMenuToggle() {
    // toggle menu
    $('.nav--trigger-menu').toggleClass('fa-bars fa-times');
    $('.nav--menu-content').toggleClass('active');
    // close search
    $('.nav--search').slideUp();
    $('.nav--trigger-search.fa-times').toggleClass('fa-search fa-times');
    // close submenus
    $('.nav--menu-list').slideUp();
    // $('.mobile-icon').addClass('fa-plus').removeClass('fa-minus');
    // re-enable scroll
    // -- $("body.overhidden").removeClass("overhidden");
  }

  // -- Desktop
  handleMenuLinks() {
    $('.nav--links-trigger').remove('active');
    $('.nav--user').removeClass('active');
    $('.nav--menu').slideToggle();
    $('.nav--menu-list-tienda').hide();
    $('.nav--menu-detail-soluciones').hide();
    $('.nav--menu-detail-industria').hide();
    $('.nav--menu-detail-tecnologia').hide();
    $('.nav--menu-list').show();
  }

  handleMenuSoluciones() {
    $('.nav--menu-detail-industria').hide();
    $('.nav--menu-detail-tecnologia').hide();
    $('.nav--menu-detail-soluciones').show();
  }

  handleMenuIndustria() {
    $('.nav--menu-detail-soluciones').hide();
    $('.nav--menu-detail-tecnologia').hide();
    $('.nav--menu-detail-industria').show();
  }

  handleMenuTecnologia() {
    $('.nav--menu-detail-soluciones').hide();
    $('.nav--menu-detail-industria').hide();
    $('.nav--menu-detail-tecnologia').show();
  }

  handleMenuLinksTienda() {
    $('.nav--links-trigger').remove('active');
    $('.nav--user').removeClass('active');
    $('.nav--menu').slideToggle();
    $('.nav--menu-list-tienda').show();
    $('.nav--menu-list').hide();
  }

  handleClicks() {
    $('.nav--user').removeClass('active');
    $('.nav--links-trigger').removeClass('active');
    // $('.nav--menu').slideUp();
    $('.nav--menu-content').removeClass('active');
    if ($('.nav--trigger-menu').hasClass('fa-times')) {
      $('.nav--trigger-menu').toggleClass('fa-bars fa-times');
    }
  }

  // NavMenuLinks
  handleSubmenuMobile() {
    // toggle submenu
    $('.nav--menu-list').slideToggle();
    $('.icon-list').toggleClass('fa-plus fa-minus');
    // enable/disable scroll
    // -- $("body").toggleClass("overhidden");
  }

  handleSubmenuMobileTienda() {
    // toggle submenu
    $('.nav--menu-list-tienda').slideToggle();
    $('.icon-list-tienda').toggleClass('fa-plus fa-minus');
    // enable/disable scroll
    // -- $("body").toggleClass("overhidden");
  }

  render() {
    return (
      <UI
        handleHover={this.handleHover}
        handleLeave={this.handleLeave}
        handleScroll={this.handleScroll}
        handleSearchToggle={this.handleSearchToggle}
        handleMenuToggle={this.handleMenuToggle}
        handleMenuLinks={this.handleMenuLinks}
        handleMenuLinksTienda={this.handleMenuLinksTienda}
        handleMenuSoluciones={this.handleMenuSoluciones}
        handleMenuIndustria={this.handleMenuIndustria}
        handleMenuTecnologia={this.handleMenuTecnologia}
        handleClicks={this.handleClicks}
        handleSubmenuMobile={this.handleSubmenuMobile}
        handleSubmenuMobileTienda={this.handleSubmenuMobileTienda}
        layoutData={this.props.layoutdata}
        socialData={this.props.socialdata}
      />
    );
  }
}

Header.propTypes = {
  layoutdata: PropTypes.shape({}).isRequired,
  socialdata: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default inject()(observer(Header));
