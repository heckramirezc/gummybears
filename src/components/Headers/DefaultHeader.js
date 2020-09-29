import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { observer, inject } from 'mobx-react';
import $ from 'jquery';

// UI
import UI from './DefaultHeader.ui';

class Header extends Component {
  constructor(...props) {
    super(...props);
    this.state = {
    };
    this.handleMenuLinks = this.handleMenuLinks.bind(this);
    this.handleMenuLink = this.handleMenuLink.bind(this);
    this.handleMenuSoluciones = this.handleMenuSoluciones.bind(this);
    this.handleMobileMenuSoluciones = this.handleMobileMenuSoluciones.bind(this);
    this.handleMenuIndustria = this.handleMenuIndustria.bind(this);
    this.handleMobileMenuIndustria = this.handleMobileMenuIndustria.bind(this);
    this.handleMenuTecnologia = this.handleMenuTecnologia.bind(this);
    this.handleMobileMenuTecnologia = this.handleMobileMenuTecnologia.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleMobileMenuClick = this.handleMobileMenuClick.bind(this);
    this.handleMenuClickLogo = this.handleMenuClickLogo.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleHover() {
    $('.nav--top-second-dropdown').slideDown();
  }

  handleLeave() {
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
    // $('.nav--menu').hide();
    $('.nav--trigger-menu').toggleClass('fa-bars fa-times');
    $('.nav--mobilemenu-content').toggleClass('active');
    // close search
    // $('.nav--search').slideUp();
    $('.nav--trigger-search.fa-times').toggleClass('fa-search fa-times');
    // close submenus
    $('.nav--mobilemenu-list').slideUp();
    // $('.mobile-icon').addClass('fa-plus').removeClass('fa-minus');
    // re-enable scroll
    // -- $("body.overhidden").removeClass("overhidden");
  }

  // -- Desktop
  handleMenuLinks(e) {
    $('.nav--links-trigger').removeClass('active');
    $('.nav--menu-list a').removeClass('active');
    $('.nav--link').removeClass('active');
    $(e.currentTarget).addClass('active');
    $('.nav--user').removeClass('active');
    $('.nav--menu').slideToggle();
    $('.nav--menu-list-tienda').hide();
    $('.nav--menu-detail-soluciones').hide();
    $('.nav--menu-detail-industria').hide();
    $('.nav--menu-detail-tecnologia').hide();
    $('.nav--menu-list').show();
  }

  handleMenuLink(e) {
    $('.nav--links-trigger').removeClass('active');
    $('.nav--menu-list a').removeClass('active');
    $('.nav--link').removeClass('active');
    $(e.currentTarget).addClass('active');
  }

  handleMenuClick() {
    // $('.nav--menu').hide();
    $('.nav--trigger-menu').toggleClass('fa-bars fa-times');
    $('.nav--menu-content').toggleClass('active');
  }

  handleMobileMenuClick() {
    // $('.nav--menu').hide();
    $('.nav--trigger-menu').toggleClass('fa-bars fa-times');
    $('.nav--mobilemenu-content').toggleClass('active');
    $('.mobile-soluciones-icon').removeClass('fa-minus');
    $('.mobile-soluciones-icon').addClass('fa-plus');
    $('.mobile-industrias-icon').removeClass('fa-minus');
    $('.mobile-industrias-icon').addClass('fa-plus');
    $('.mobile-tecnologias-icon').removeClass('fa-minus');
    $('.mobile-tecnologias-icon').addClass('fa-plus');
    $('.icon-list').removeClass('fa-minus');
    $('.icon-list').addClass('fa-plus');
    $('.nav--mobilemenu-soluciones').hide();
    $('.nav--mobilemenu-industrias').hide();
    $('.nav--mobilemenu-tecnologias').hide();
  }

  handleMenuClickLogo() {
    // $('.nav--menu').hide();
    $('.nav--trigger-menu').removeClass('fa-times');
    $('.nav--trigger-menu').addClass('fa-bars');
    $('.nav--mobilemenu-content').removeClass('active');
    $('.mobile-soluciones-icon').removeClass('fa-minus');
    $('.mobile-soluciones-icon').addClass('fa-plus');
    $('.mobile-industrias-icon').removeClass('fa-minus');
    $('.mobile-industrias-icon').addClass('fa-plus');
    $('.mobile-tecnologias-icon').removeClass('fa-minus');
    $('.mobile-tecnologias-icon').addClass('fa-plus');
    $('.icon-list').removeClass('fa-minus');
    $('.icon-list').addClass('fa-plus');
    $('.nav--mobilemenu-soluciones').hide();
    $('.nav--mobilemenu-industrias').hide();
    $('.nav--mobilemenu-tecnologias').hide();
  }

  handleMouseLeave() {
    const slug = window.location.pathname.replace(/(\/)/g, '').replace(/[-_]/g, ' ');
    if (!slug.includes('tecnologia') && !slug.includes('soluciones') && !slug.includes('industria') && !slug.includes('producto')) {
      $('.nav--links-trigger').removeClass('active');
      $('.nav--menu-list a').removeClass('active');
      $('.nav--link').removeClass('active');
      const elementos = Array.prototype.slice.call(document.getElementsByClassName('nav--link'));
      let elemento = elementos.find(x => x.pathname === window.location.pathname);
      if (elemento === undefined && window.location.pathname.includes('servicios')) {
        elemento = elementos.find(x => x.innerHTML === 'SERVICIOS');
      }
      $(elemento).addClass('active');
    }
    $('.nav--menu').hide();
    this.forceUpdate();
  }

  handleMenuSoluciones(e) {
    $('.nav--menu-list a').removeClass('active');
    $(e.currentTarget).addClass('active');
    $('.nav--menu-detail-industria').hide();
    $('.nav--menu-detail-tecnologia').hide();
    $('.nav--menu-detail-soluciones').show();
  }

  handleMobileMenuSoluciones() {
    $('.nav--mobilemenu-soluciones').slideToggle();
    $('.mobile-soluciones-icon').toggleClass('fa-plus fa-minus');
  }

  handleMenuIndustria(e) {
    $('.nav--menu-list a').removeClass('active');
    $(e.currentTarget).addClass('active');
    $('.nav--menu-detail-soluciones').hide();
    $('.nav--menu-detail-tecnologia').hide();
    $('.nav--menu-detail-industria').show();
  }

  handleMobileMenuIndustria() {
    $('.nav--mobilemenu-industrias').slideToggle();
    $('.mobile-industrias-icon').toggleClass('fa-plus fa-minus');
  }

  handleMenuTecnologia(e) {
    $('.nav--menu-list a').removeClass('active');
    $(e.currentTarget).addClass('active');
    $('.nav--menu-detail-soluciones').hide();
    $('.nav--menu-detail-industria').hide();
    $('.nav--menu-detail-tecnologia').show();
  }

  handleMobileMenuTecnologia() {
    $('.nav--mobilemenu-tecnologias').slideToggle();
    $('.mobile-tecnologias-icon').toggleClass('fa-plus fa-minus');
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
    $('.nav--mobilemenu-list').slideToggle();
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
        handleMenuLink={this.handleMenuLink}
        handleMenuLinksTienda={this.handleMenuLinksTienda}
        handleMenuSoluciones={this.handleMenuSoluciones}
        handleMobileMenuSoluciones={this.handleMobileMenuSoluciones}
        handleMenuIndustria={this.handleMenuIndustria}
        handleMobileMenuIndustria={this.handleMobileMenuIndustria}
        handleMenuTecnologia={this.handleMenuTecnologia}
        handleMobileMenuTecnologia={this.handleMobileMenuTecnologia}
        handleClicks={this.handleClicks}
        handleSubmenuMobile={this.handleSubmenuMobile}
        handleSubmenuMobileTienda={this.handleSubmenuMobileTienda}
        layoutData={this.props.layoutdata}
        socialData={this.props.socialdata}
        menuData={this.props.menudata}
        solutionsList={this.props.solutionsList}
        industriesList={this.props.industriesList}
        tecnologiesType={this.props.tecnologiesType}
        productsType={this.props.productsType}
        handleMenuClick={this.handleMenuClick}
        handleMobileMenuClick={this.handleMobileMenuClick}
        handleMenuClickLogo={this.handleMenuClickLogo}
        handleMouseLeave={this.handleMouseLeave}
      />
    );
  }
}

Header.propTypes = {
  layoutdata: PropTypes.shape({}).isRequired,
  socialdata: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  menudata: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  solutionsList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  industriesList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  tecnologiesType: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  productsType: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

// export default inject()(observer(Header));
export default Header;
