import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Scroll from 'react-scroll';

// import _ from 'lodash';
import { Helmet } from 'react-helmet';
import he from 'he';

// components
import SearchBox from '../searchBox/SearchBox.ui';
import Loading from '../ui/Loading';
import IEnotification from '../../components/ui/IENotification';

import { logo } from '../../helpers/svg'; // iconLocation
import { isDesktop } from '../../helpers/ui';

const ScrollLink = Scroll.Link;
const isIE = (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > -1);

const NavTop = (props) => {
  const navTopMenu = (
    <nav className="nav--top-second">
      <ul className="nav--top-ul"><ul><span className="fa-map-marker" /></ul><ul><a href="https://goo.gl/maps/JkDd6XmdDs82b8pt9">11 Calle 7-66 Zona 9,<br />Centro Corporativo Heidelberg, Nivel 9,<br />Guatemala, Guatemala</a></ul></ul>
      <ul className="nav--top-ul"><ul><span className="fa-envelope-o" /></ul><ul><a href="mailto:mercadeo@gyssa.com">mercadeo@gyssa.com</a></ul></ul>
      <ul className="nav--top-ul"><ul><span className="fa-phone" /></ul><ul><a href="tel:+50223266100">+502 2326-6100</a></ul></ul>
      {/* <ul className="nav--top-ul"><ul><span className="fa-clock-o" /></ul><ul><a>Lunes a Viernes<br />05:15 a 17:15 horas</a></ul></ul> */}
    </nav>
  );
  return (
    <div className="nav--top" >
      <div className="nav--top-desk">
        <section>
          {/* {navTopSites} */}
          {navTopMenu}
        </section>
        <section className="nav--actions">
          <div className="nav--search" onFocus={props.handleClicks}>
            <SearchBox />
          </div>
        </section>
      </div>
    </div>
  );
};

const NavMain = (props) => {
  if (!props.socialData || !props.socialData.length || !props.socialData.length === 0) return null;
  const slugActive = window.location.pathname;
  const RedesSociales = props.socialData.map((data, key) => <a key={key} href={data.acf.enlace} target="_blank" rel="noopener noreferrer nofollow"><img src={data.acf.icon} alt={data.title.rendered} /></a>);
  const MenuPrincipal = props.menuData.map((data, key) => {
    if (data.url === '/products') {
      if (slugActive.includes('soluciones') || slugActive.includes('tecnologia') || slugActive.includes('industria') || slugActive.includes('producto')) {
        return (<li key={key}><a className="nav--links-trigger nav--link active" onClick={props.handleMenuLinks} >{data.title.toUpperCase()}</a></li>);
      } else {
        return (<li key={key}><a className="nav--links-trigger nav--link" onClick={props.handleMenuLinks} >{data.title.toUpperCase()}</a></li>);
      }
    } else if (data.url === '#services') {
      if (slugActive === '/') {
        return (
          <li key={key}>
            <ScrollLink to="servicios" spy="true" smooth="true" offset={0} duration={500} className="nav--links-trigger nav--link">
              {data.title.toUpperCase()}
            </ScrollLink>
          </li>);
      } else if (slugActive.includes('servicios')) {
        return (
          <li key={key}>
            <Link to="/#servicios" className="nav--links-trigger nav--link active">
              {data.title.toUpperCase()}
            </Link>
          </li>);
      } else {
        return (
          <li key={key}>
            <Link to="/#servicios" className="nav--links-trigger nav--link">
              {data.title.toUpperCase()}
            </Link>
          </li>);
      }
    }
    let url = '';
    if (data.slug) {
      if (data.slug.includes('blog')) {
        url = `/${data.slug}`;
      } else {
        url = `/paginas/${data.slug}`;
      }
    } else if (data.url.includes('blog')) {
      url = data.url.replace('https://www.gyssa.com/wp/', '/');
    } else {
      url = data.url.replace('https://www.gyssa.com/wp/', '/paginas/');
    }
    if (slugActive.includes(url)) {
      return (<li key={key}><Link to={url} onClick={props.handleMenuLink} className="nav--links-trigger nav--link active" >{data.title.toUpperCase()}</Link></li>);
    } else {
      return (<li key={key}><Link to={url} onClick={props.handleMenuLink} className="nav--links-trigger nav--link" >{data.title.toUpperCase()}</Link></li>);
    }
  });
  const MenuProductos = props.productsType.map((data, key) => {
    switch (data.slug) {
      case 'industria':
        return (<li key={key}><Link to={`/${data.slug}`} onMouseEnter={props.handleMenuIndustria} onClick={props.handleMenuClick}>{data.name}</Link></li>);
      case 'tecnologia':
        return (<li key={key}><Link to={`/${data.slug}/sap`} onMouseEnter={props.handleMenuTecnologia} onClick={props.handleMenuClick}>{data.name}</Link></li>);
      default:
        return (<li key={key}><Link to="/soluciones" onMouseEnter={props.handleMenuSoluciones} onClick={props.handleMenuClick}>{data.name}</Link></li>);
    }
  });
  const MenuSoluciones = props.solutionsList.map((data, key) => (
    <div className="grid-item">
      <Link key={key} to={`/soluciones/${data.slug}`} onClick={props.handleMenuClick}>
        <div>
          <img src={data.acf.icon} alt={data.name} />
          <b>{data.name}</b>
        </div>
        <img src="https://www.gyssa.com/wp/wp-content/uploads/2020/06/btn_env@2x.png" alt={data.name} />
      </Link>
    </div>));

  const MenuIndustrias = props.industriesList.map((data, key) => (
    <div className="grid-item">
      <Link key={key} to={`/industria/${data.slug}`} onClick={props.handleMenuClick}>
        <div>
          <img src={data.acf.small_image} alt={data.name} />
          <b>{data.name}</b>
        </div>
        <img src="https://www.gyssa.com/wp/wp-content/uploads/2020/06/btn_env@2x.png" alt={data.name} />
      </Link>
    </div>));

  const MenuTecnologias = props.tecnologiesType.map((data, key) => (
    <div className="grid-item">
      <Link key={key} to={`/tecnologia/${data.slug}`} onClick={props.handleMenuClick}>
        <div>
          <img src={data.acf.icon} alt={data.name} />
          <b>{data.name}</b>
        </div>
        <img src="https://www.gyssa.com/wp/wp-content/uploads/2020/06/btn_env@2x.png" alt={data.name} />
      </Link>
    </div>));
  return (
    <div className="nav--main">
      <div className="nav--main-content">
        <nav className="nav--links">
          <ul>
            <li><Link to="/" className="nav--logo" onClick={props.handleMenuClickLogo}>{logo}</Link></li>
            {MenuPrincipal}
          </ul>
        </nav>
        <div className="nav--trigger">
          <a onClick={props.handleMenuToggle}><span className="nav--trigger-menu fa-bars" /></a>
          <section className="nav--actions">
            <div className="nav--search" onFocus={props.handleClicks}>
              <SearchBox />
            </div>
          </section>
        </div>
        <section className="nav--social">
          <div>
            {RedesSociales}
          </div>
        </section>
      </div>
      <div className="nav--menu" onMouseLeave={isDesktop ? props.handleMouseLeave : null}>
        <section className="nav--menu-content">
          <div className="nav--menu-list">
            <ul>
              {MenuProductos}
            </ul>
          </div>
          <div className="nav--menu-detail">
            <div className="nav--menu-detail-soluciones">
              <div className="nav--grid-container-industria">
                {MenuSoluciones}
              </div>
            </div>
            <div className="nav--menu-detail-industria">
              <div className="nav--grid-container-industria">
                {MenuIndustrias}
              </div>
            </div>
            <div className="nav--menu-detail-tecnologia">
              <div className="nav--grid-container-industria">
                {MenuTecnologias}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const NavMenuLinks = (props) => {
  if (!props.productsType || !props.productsType.length || !props.productsType.length === 0) return null;
  if (!props.solutionsList || !props.solutionsList.length || !props.solutionsList.length === 0) return null;
  if (!props.industriesList || !props.industriesList.length || !props.industriesList.length === 0) return null;
  if (!props.tecnologiesType || !props.tecnologiesType.length || !props.tecnologiesType.length === 0) return null;
  const getData = props.layoutData && props.layoutData.SeccionesHeader && props.layoutData.SeccionesHeader[0] && props.layoutData.SeccionesHeader[0].Hijos && props.layoutData.SeccionesHeader[0].Hijos[0];
  const MenuSoluciones = props.solutionsList.map((data, key) => (
    <li>
      <Link key={key} to={`/soluciones/${data.slug}`} onClick={props.handleMobileMenuClick}>
        <b>{data.name}</b>
      </Link>
    </li>));

  const MenuIndustrias = props.industriesList.map((data, key) => (
    <li>
      <Link key={key} to={`/industria/${data.slug}`} onClick={props.handleMobileMenuClick}>
        <b>{data.name}</b>
      </Link>
    </li>));

  const MenuTecnologias = props.tecnologiesType.map((data, key) => (
    <li>
      <Link key={key} to={`/tecnologia/${data.slug}`} onClick={props.handleMobileMenuClick}>
        <b>{data.name}</b>
      </Link>
    </li>));
  if (getData) {
    const data = props.layoutData.SeccionesHeader[0].Hijos[0].Hijos;
    for (let i = 0; i < data.length; i += 1) {
      const parent = data[i];
      const children = [];
      const getChildren = parent && parent.Hijos && parent.Hijos.length;
      const theChildren = parent.Hijos;
      if (getChildren) {
        for (let c = 0; c < theChildren.length; c += 1) {
          const child = theChildren[c];
          const link = he.decode(child.URL);
          const label = he.decode(child.Descripcion);
          const key = child.Unico;
          children.push(<li key={`menu-${key}`}><a href={link}>{label}</a></li>);
        }
      }
    }
  }

  const MenuProductos = props.productsType.map((data, key) => {
    switch (data.slug) {
      case 'industria':
        return (
          <ul className="nav--mobilemenu-links" key={key}>
            <li>
              <a onClick={props.handleMobileMenuIndustria}>
                <b>{data.name}</b>
                <span className="mobile-industrias-icon fa-plus" />
              </a>
            </li>
            <ul className="nav--mobilemenu-industrias">
              {MenuIndustrias}
            </ul>
          </ul>
        );
      case 'tecnologia':
        return (
          <ul className="nav--mobilemenu-links" key={key}>
            <li>
              <a onClick={props.handleMobileMenuTecnologia}>
                <b>{data.name}</b>
                <span className="mobile-tecnologias-icon fa-plus" />
              </a>
            </li>
            <ul className="nav--mobilemenu-tecnologias">
              {MenuTecnologias}
            </ul>
          </ul>
        );
      default:
        return (
          <ul className="nav--mobilemenu-links" key={key}>
            <li>
              <a onClick={props.handleMobileMenuSoluciones}>
                <b>{data.name}</b>
                <span className="mobile-soluciones-icon fa-plus" />
              </a>
            </li>
            <ul className="nav--mobilemenu-soluciones">
              {MenuSoluciones}
            </ul>
          </ul>
        );
    }
  });

  const productsNav = (
    <nav className="nav--mobilemenu-list">
      {MenuProductos}
    </nav>
  );

  const MenuPrincipal = props.menuData.map((data, key) => {
    if (data.url === '/products') {
      return (
        <div>
          <a key={key} className="nav--mobilemenu-title" onClick={props.handleSubmenuMobile}>
            <span>{data.title.toUpperCase()}</span>
            <span className="mobile-icon icon-list fa-plus" />
          </a>
          {productsNav}
        </div>
      );
    } else if (data.url === '#services') {
      return (
        <Link to="/#servicios" className="nav--mobilemenu-title" onClick={props.handleMobileMenuClick} key={key}>
          {data.title.toUpperCase()}
          <span className="mobile-icon fa-angle-right" />
        </Link>);
    }
    let url = '';
    if (data.slug) {
      if (data.slug.includes('blog')) {
        url = `/${data.slug}`;
      } else {
        url = `/paginas/${data.slug}`;
      }
    } else if (data.url.includes('blog')) {
      url = data.url.replace('https://www.gyssa.com/wp/', '/');
    } else {
      url = data.url.replace('https://www.gyssa.com/wp/', '/paginas/');
    }
    return (<Link key={key} to={url} onClick={props.handleMobileMenuClick} className="nav--mobilemenu-title" >{data.title.toUpperCase()}<span className="mobile-icon fa-angle-right" /></Link>);
  });

  return (
    <div className="nav--mobilemenu" onMouseLeave={isDesktop ? props.handleMenuLinks : null}>
      <section className="nav--mobilemenu-content">
        {MenuPrincipal}
      </section>
    </div>
  );
};

const UI = ({ handleHover, handleLeave, handleScroll, handleMenuToggle, handleMenuLinks, handleMenuLink, handleMenuLinksTienda, handleMenuSoluciones, handleMobileMenuSoluciones, handleMenuIndustria, handleMobileMenuIndustria, handleMenuTecnologia, handleMobileMenuTecnologia, handleClicks, handleSubmenuMobile, handleSubmenuMobileTienda, layoutData, socialData, menuData, solutionsList, industriesList, tecnologiesType, productsType, handleMenuClick, handleMobileMenuClick, handleMenuClickLogo, handleMouseLeave }) => (
  <div className="nav">
    <Helmet title="GYSSA" />
    <NavTop
      handleHover={handleHover}
      handleLeave={handleLeave}
      handleScroll={handleScroll}
      layoutData={layoutData}
      handleClicks={handleClicks}
    />
    <NavMain
      handleMenuToggle={handleMenuToggle}
      handleMenuLinks={handleMenuLinks}
      handleMenuLink={handleMenuLink}
      handleMenuClick={handleMenuClick}
      handleMenuClickLogo={handleMenuClickLogo}
      handleMouseLeave={handleMouseLeave}
      handleMenuLinksTienda={handleMenuLinksTienda}
      handleMenuSoluciones={handleMenuSoluciones}
      handleMenuIndustria={handleMenuIndustria}
      handleMenuTecnologia={handleMenuTecnologia}
      layoutData={layoutData}
      socialData={socialData}
      menuData={menuData}
      solutionsList={solutionsList}
      industriesList={industriesList}
      tecnologiesType={tecnologiesType}
      productsType={productsType}
    />
    {isIE ? <IEnotification /> : null}
    <NavMenuLinks
      handleSubmenuMobile={handleSubmenuMobile}
      handleSubmenuMobileTienda={handleSubmenuMobileTienda}
      handleMenuLinks={handleMenuLinks}
      handleMenuLinksTienda={handleMenuLinksTienda}
      handleMenuToggle={handleMenuToggle}
      layoutData={layoutData}
      handleMobileMenuClick={handleMobileMenuClick}
      menuData={menuData}
      solutionsList={solutionsList}
      industriesList={industriesList}
      tecnologiesType={tecnologiesType}
      productsType={productsType}
      handleMobileMenuSoluciones={handleMobileMenuSoluciones}
      handleMobileMenuIndustria={handleMobileMenuIndustria}
      handleMobileMenuTecnologia={handleMobileMenuTecnologia}
    />
    <Loading />
  </div>
);

UI.propTypes = {
  handleHover: PropTypes.func.isRequired,
  handleLeave: PropTypes.func.isRequired,
  handleScroll: PropTypes.func.isRequired,
  handleMenuToggle: PropTypes.func.isRequired,
  handleMenuLinks: PropTypes.func.isRequired,
  handleMenuLink: PropTypes.func.isRequired,
  handleMenuClick: PropTypes.func.isRequired,
  handleMobileMenuClick: PropTypes.func.isRequired,
  handleMenuClickLogo: PropTypes.func.isRequired,
  handleMouseLeave: PropTypes.func.isRequired,
  handleMenuSoluciones: PropTypes.func.isRequired,
  handleMobileMenuSoluciones: PropTypes.func.isRequired,
  handleMenuIndustria: PropTypes.func.isRequired,
  handleMobileMenuIndustria: PropTypes.func.isRequired,
  handleMenuTecnologia: PropTypes.func.isRequired,
  handleMobileMenuTecnologia: PropTypes.func.isRequired,
  handleClicks: PropTypes.func.isRequired,
  handleSubmenuMobile: PropTypes.func.isRequired,
  layoutData: PropTypes.shape({}).isRequired,
  socialData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  menuData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  solutionsList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  industriesList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  tecnologiesType: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  productsType: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

NavTop.propTypes = {
  handleClicks: PropTypes.func.isRequired,
  layoutData: PropTypes.shape({
    // Menus: PropTypes.array,
    // Secciones: PropTypes.array,
  }),
};

NavTop.defaultProps = {
  layoutData: {
    Menus: [],
    Secciones: [],
  },
};

NavMain.propTypes = {
  handleMenuToggle: PropTypes.func.isRequired,
  handleMenuLinks: PropTypes.func.isRequired,
  handleMenuLink: PropTypes.func.isRequired,
  handleMenuClick: PropTypes.func.isRequired,
  handleMenuClickLogo: PropTypes.func.isRequired,
  handleMouseLeave: PropTypes.func.isRequired,
  handleMenuSoluciones: PropTypes.func.isRequired,
  handleMenuIndustria: PropTypes.func.isRequired,
  handleMenuTecnologia: PropTypes.func.isRequired,
  layoutData: PropTypes.shape({
    // SeccionesHeader: PropTypes.array,
  }),
  socialData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  menuData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  solutionsList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  industriesList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  tecnologiesType: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  productsType: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

NavMain.defaultProps = {
  layoutData: {
    SeccionesHeader: [],
  },
};

NavMenuLinks.propTypes = {
  handleSubmenuMobile: PropTypes.func.isRequired,
  handleMenuLinks: PropTypes.func.isRequired,
  handleMobileMenuClick: PropTypes.func.isRequired,
  menuData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default UI;
