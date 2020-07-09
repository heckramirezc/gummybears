import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import _ from 'lodash';
import { Helmet } from 'react-helmet';
import he from 'he';

// components
import SearchBox from '../searchBox/SearchBox.ui';
import Loading from '../ui/Loading';
import IEnotification from '../../components/ui/IENotification';

// utilities
// iconPlus, iconMinus
import { logo, iconMovil, iconHogar, iconClub, iconEntretenimiento, iconPromociones, iconIOT } from '../../helpers/svg'; // iconLocation
import { isDesktop } from '../../helpers/ui';

const isIE = (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > -1);

const NavTop = (props) => {
  const getTopSites = props && props.layoutData && props.layoutData.Secciones;
  const topSites = [];
  if (getTopSites) {
    const data = props.layoutData.Secciones;
    for (let i = 0; i < data.length; i += 1) {
      const item = data[i];
      const element = (<a href={he.decode(item.URL)} key={item.Unico}>{he.decode(item.Descripcion)}</a>);
      topSites.push(element);
    }
  }
  const navTopSites = (
    <nav className="nav--top-first">
      {topSites}
    </nav>
  );
  const getTopMenu = props && props.layoutData && props.layoutData.Menus && props.layoutData.Menus[0] && props.layoutData.Menus[0].Hijos;
  let navTopMenu = '';
  if (getTopMenu) {
    const data = props.layoutData.Menus[0].Hijos;
    const dataLength = data.length;
    const getDropdown = data && dataLength && data[dataLength - 1].Hijos;
    const dropdown = [];
    if (getDropdown) {
      const list = data[dataLength - 1].Hijos;
      for (let i = 0; i < list.length; i += 1) {
        const item = list[i];
        const element = <li key={item.Unico}><a href={he.decode(item.URL)}>{he.decode(item.Descripcion)}</a></li>;
        dropdown.push(element);
      }
    }
    navTopMenu = (
      <nav className="nav--top-second">
        <ul className="nav--top-ul"><ul><span className="fa-map-marker" /></ul><ul><a href="#">11 Calle 7-66 Zona 9,<br />Centro Corporativo Heidelberg, Nivel 9,<br />Guatemala, Guatemala</a></ul></ul>
        <ul className="nav--top-ul"><ul><span className="fa-envelope-o" /></ul><ul><a href="#">info@gyssa.com<br />mercadeo@gyssa.com</a></ul></ul>
        <ul className="nav--top-ul"><ul><span className="fa-phone" /></ul><ul><a href="#">+502 2326-6100</a></ul></ul>
        <ul className="nav--top-ul"><ul><span className="fa-clock-o" /></ul><ul><a>Lunes a Viernes<br />8:00 a 17:00 horas</a></ul></ul>
      </nav>
    );
  }
  console.log(navTopSites);
  // console.log(navTopMenu);
  return (
    <div className="nav--top" onMouseLeave={props.handleLeave} onFocus={() => { }}>
      <div className="nav--top-desk">
        <section>
          {/* {navTopSites} */}
          {navTopMenu}
        </section>
        <section className="nav--actions">
          <a onClick={props.handleSearchToggle} className="nav--trigger-search fa-search" />
          <div className="nav--search" onFocus={props.handleClicks}>
            <SearchBox />
          </div>
        </section>
      </div>
    </div>
  );
};

const NavMain = (props) => {
  const getSeccionesHeader = props && props.layoutData && props.layoutData.SeccionesHeader && props.layoutData.SeccionesHeader[0] && props.layoutData.SeccionesHeader[0].Hijos ? props.layoutData.SeccionesHeader[0].Hijos : [];
  // console.log('seccionesHeader: ', props && props.layoutData && props.layoutData.SeccionesHeader ? props.layoutData.SeccionesHeader[0] : []);
  const seccionesHeader = getSeccionesHeader.map((i) => {
    let output;
    if (i.URL === 'http://www.claro.com.sv/personas/servicios') {
      output = ''; // (<a key={i.Descripcion} className="nav--links-trigger" onClick={props.handleMenuLinks}>{he.decode(i.Descripcion)}</a>);
    } else if (i.Descripcion === 'Tienda' || i.URL === 'https://tiendaenlinea.claro.com.sv') {
      output = ''; // (<Link key={i.Descripcion} className="active" to="/">{he.decode(i.Descripcion)}</Link>);
    } else {
      output = (<a key={i.Descripcion} href={he.decode(i.URL)}>{he.decode(i.Descripcion)}</a>);
    }
    return output;
  });
  console.log(seccionesHeader);
  if (!props.socialData || !props.socialData.length || !props.socialData.length === 0) return null;
  const RedesSociales = (props.socialData || []).map((data) => {
    const enlace = data.acf.enlace;
    console.log(enlace);
    return <a href={data.acf.enlace} target="_blank" rel="noopener noreferrer nofollow"><img src={data.acf.icono} alt={data.title.rendered} /></a>;
  });
  console.log('RedesSociales', RedesSociales);
  console.log(props.handleMenuSoluciones);
  console.log(props.handleMenuIndustria);
  console.log(props.handleMenuTecnologia);

  return (
    <div className="nav--main">
      <div className="nav--main-content">
        <nav className="nav--links">
          <ul>
            <li><a href="https://uat-gummybears.com/" className="nav--logo">{logo}</a></li>
            {/* <li><a className="nav--links-trigger nav--link"  onFocus={props.handleMenuLinks} >PRODUCTOS</a></li> */}
            <li>
              <a className="nav--links-trigger nav--link" onClick={props.handleMenuLinks} >PRODUCTOS</a>
            </li>
            <li><a className="nav--links-trigger nav--link" >SERVICIOS</a></li>
            <li><a className="nav--links-trigger nav--link" >CONOZCA MÁS</a></li>
            <li><a className="nav--links-trigger nav--link" >BLOG</a></li>
            <li><a className="nav--links-trigger nav--link" >CONTÁCTENOS</a></li>
          </ul>
          {/* {seccionesHeader} */}
        </nav>
        <div className="nav--trigger">
          <a onClick={props.handleSearchToggle}><span className="nav--trigger-search fa-search" /></a>
          <a onClick={props.handleMenuToggle}><span className="nav--trigger-menu fa-bars" /></a>
        </div>
        <section className="nav--social">
          <div>
            {RedesSociales}
          </div>
        </section>
      </div>
      <div className="nav--menu" onMouseLeave={isDesktop ? props.handleMenuLinks : null}>
        <section className="nav--menu-content">
          <div className="nav--menu-list">
            <ul>
              <li><a onMouseEnter={props.handleMenuSoluciones} >Soluciones</a></li>
              <li><a onMouseEnter={props.handleMenuIndustria} >Industria</a></li>
              <li><a onMouseEnter={props.handleMenuTecnologia}>Tecnologia</a></li>
            </ul>
          </div>
          <div className="nav--menu-detail">
            <div className="nav--menu-detail-soluciones">
              <div className="nav--grid-container-soluciones">
                <div className="grid-item">
                  <Link to="/erp">
                    <a>
                      <div>
                        <img src="https://uat-gummybears.com/wp-content/uploads/2020/06/iERP@2x.png" alt="" />
                        <b>ERP</b>
                      </div>
                      <img src="https://uat-gummybears.com/wp-content/uploads/2020/06/btn_env@2x.png" alt="" />
                    </a>
                  </Link>
                </div>
                <div className="grid-item">
                  <Link to="/crm">
                    <a>
                      <div>
                        <img src="https://uat-gummybears.com/wp-content/uploads/2020/06/product_icon@2x.png" alt="" />
                        <b>CRM</b>
                      </div>
                      <img src="https://uat-gummybears.com/wp-content/uploads/2020/06/btn_env@2x.png" alt="" />
                    </a>
                  </Link>
                </div>
                <div className="grid-item">
                  <Link to="/administracion-de-talento-humano">
                    <a>
                      <div>
                        <img src="https://uat-gummybears.com/wp-content/uploads/2020/06/iAdminHum@2x.png" alt="" />
                        <b>Administración del Talento Humano</b>
                      </div>
                      <img src="https://uat-gummybears.com/wp-content/uploads/2020/06/btn_env@2x.png" alt="" />
                    </a>
                  </Link>
                </div>
                <div className="grid-item">
                  <Link to="/big-data">
                    <a>
                      <div>
                        <img src="https://uat-gummybears.com/wp-content/uploads/2020/06/iBigData@2x.png" alt="" />
                        <b>Big Data</b>
                      </div>
                      <img src="https://uat-gummybears.com/wp-content/uploads/2020/06/btn_env@2x.png" alt="" />
                    </a>
                  </Link>
                </div>
                <div className="grid-item">
                  <Link to="/gobierno-de-datos">
                    <a>
                      <div>
                        <img src="https://uat-gummybears.com/wp-content/uploads/2020/06/iGobDat@2x.png" alt="" />
                        <b>Gobierno de Datos</b>
                      </div>
                      <img src="https://uat-gummybears.com/wp-content/uploads/2020/06/btn_env@2x.png" alt="" />
                    </a>
                  </Link>
                </div>
                <div className="grid-item">
                  <Link to="/omnicanalidad">
                    <a>
                      <div>
                        <img src="https://uat-gummybears.com/wp-content/uploads/2020/06/iOmni@2x.png" alt="" />
                        <b>Omnicanalidad</b>
                      </div>
                      <img src="https://uat-gummybears.com/wp-content/uploads/2020/06/btn_env@2x.png" alt="" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="nav--menu-detail-industria">
              <div className="nav--grid-container-industria">
                <div className="grid-item">
                  <Link to="/banca-y-aseguradora">
                    <a>
                      <div>
                        <img src="http://uat-gummybears.com/wp-content/uploads/2020/06/pymes@2x.png" alt="" />
                        <b>Banca y seguros</b>
                      </div>
                      <img src="https://uat-gummybears.com/wp-content/uploads/2020/06/btn_env@2x.png" alt="" />
                    </a>
                  </Link>
                </div>
                <div className="grid-item">
                  <Link to="/agroindustria">
                    <a>
                      <div>
                        <img src="http://uat-gummybears.com/wp-content/uploads/2020/06/agroindustria@2x-1.png" alt="" />
                        <b>Agroindustria</b>
                      </div>
                      <img src="https://uat-gummybears.com/wp-content/uploads/2020/06/btn_env@2x.png" alt="" />
                    </a>
                  </Link>
                </div>
                <div className="grid-item">
                  <Link to="/distribucion">
                    <a>
                      <div>
                        <img src="https://uat-gummybears.com/wp-content/uploads/2020/06/distribucion@2x.png" alt="" />
                        <b>Distribución</b>
                      </div>
                      <img src="https://uat-gummybears.com/wp-content/uploads/2020/06/btn_env@2x.png" alt="" />
                    </a>
                  </Link>
                </div>
                <div className="grid-item">
                  <Link to="/manufactura">
                    <a>
                      <div>
                        <img src="http://uat-gummybears.com/wp-content/uploads/2020/06/manufactura@2x-1.png" alt="" />
                        <b>Manufactura</b>
                      </div>
                      <img src="https://uat-gummybears.com/wp-content/uploads/2020/06/btn_env@2x.png" alt="" />
                    </a>
                  </Link>
                </div>
                <div className="grid-item">
                  <Link to="/pymes">
                    <a>
                      <div>
                        <img src="http://uat-gummybears.com/wp-content/uploads/2020/06/pymes@2x-1.png" alt="" />
                        <b>Pymes</b>
                      </div>
                      <img src="https://uat-gummybears.com/wp-content/uploads/2020/06/btn_env@2x.png" alt="" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="nav--menu-detail-tecnologia">
              <div className="nav--grid-container-industria">
                <div className="grid-item">
                  <Link to="/tecnologia-sap">
                    <a>
                      <div>
                        <img src="http://uat-gummybears.com/wp-content/uploads/2020/07/iSAP@2x.png" alt="" />
                        <b>SAP</b>
                      </div>
                      <img src="https://uat-gummybears.com/wp-content/uploads/2020/06/btn_env@2x.png" alt="" />
                    </a>
                  </Link>
                </div>
                <div className="grid-item">
                  <Link to="/tecnologia-microsoft">
                    <a>
                      <div>
                        <img src="http://uat-gummybears.com/wp-content/uploads/2020/07/iMicrosoft@2x.png" alt="" />
                        <b>Microsoft</b>
                      </div>
                      <img src="https://uat-gummybears.com/wp-content/uploads/2020/06/btn_env@2x.png" alt="" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const NavMenuLinks = (props) => {
  // console.log('layoutData: ', props.layoutData);
  const getData = props.layoutData && props.layoutData.SeccionesHeader && props.layoutData.SeccionesHeader[0] && props.layoutData.SeccionesHeader[0].Hijos && props.layoutData.SeccionesHeader[0].Hijos[0];
  // const mobileSoporte = getData && props.layoutData.SeccionesHeader[0].Hijos[1] ? <a href={he.decode(props.layoutData.SeccionesHeader[0].Hijos[1].URL)} className="nav--menu-title"><span>{he.decode(props.layoutData.SeccionesHeader[0].Hijos[1].Descripcion)}</span><span className="mobile-icon fa-angle-right" /></a> : null;
  if (props && props.layoutData && props.layoutData.Eslogan) {
    console.log(props.layoutData.Eslogan);
    console.log(props.layoutData.Eslogan.replace(/&amp;/g, '&'));
  }
  const slogan = props.layoutData && props.layoutData.Eslogan ? <p>{he.decode(props.layoutData.Eslogan.replace(/&amp;/g, '&'))}</p> : null;
  // const slogan = sloganBase ? sloganBase.replace('&iquest;Qu&eacute;', '¿Qué') : null;
  let servicesNav;
  const output = [];
  let tiendaNav;
  const tiendaOutput = [];
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
        console.log('children', children);
      }
      const iconList = [iconMovil, iconHogar, iconClub, iconIOT, iconEntretenimiento, iconPromociones];
      const block = (
        <ul className="nav--menu-links1" key={parent.Unico}>
          <li className="desk icon">{iconList[i]}</li>
          <li><a href={he.decode(parent.URL)}><b>{he.decode(parent.Descripcion)}</b></a></li>
          {children}
        </ul>
      );
      output.push(block);
      // if (output) console('output', output);
      servicesNav = (
        <nav className="nav--menu-list2">
          {output}
        </nav>
      );
    }

    const dataTienda = props.layoutData.SeccionesHeader[0].Hijos[1].Hijos;
    for (let i = 0; i < dataTienda.length; i += 1) {
      const parent = dataTienda[i];
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
      const block = (
        <ul className="nav--menu-links-tienda" key={parent.Unico}>
          <li><a href={he.decode(parent.URL)}><b>{he.decode(parent.Descripcion)}</b></a></li>
          {children}
        </ul>
      );
      tiendaOutput.push(block);
      tiendaNav = (
        <nav className="nav--menu-list-tienda2">
          {tiendaOutput}
        </nav>
      );
      console.log(tiendaNav);
    }
  }

  const getSeccionesHeader = props && props.layoutData && props.layoutData.SeccionesHeader && props.layoutData.SeccionesHeader[0] && props.layoutData.SeccionesHeader[0].Hijos ? props.layoutData.SeccionesHeader[0].Hijos : [];
  // console.log('getSeccionesHeader: ', getSeccionesHeader);
  const seccionesHeaderMobile = getSeccionesHeader.map((i) => {
    let outputMobile;
    if (i.URL === 'http://www.claro.com.sv/personas/servicios') {
      outputMobile = '';
      // (
      //   <React.Fragment key={`servicios-${i.Unico}`}>
      //     <a className="nav--menu-title" onClick={props.handleSubmenuMobile}>
      //       <span>Servicios</span>
      //       <span className="mobile-icon icon-list fa-plus" />
      //     </a>
      //     { servicesNav }
      //   </React.Fragment>
      // );
    } else if (i.Descripcion === 'Tienda' || i.URL === 'https://tiendaenlinea.claro.com.sv') {
      outputMobile = ''; // (<Link to="/" key={`tienda-${i.Unico}`} className="nav--menu-title"><span>{he.decode(i.Descripcion)}</span><span className="mobile-icon fa-angle-right" /></Link>);
    } else {
      outputMobile = (<a key={`${i.Descripcion}-${i.Unico}`} href={he.decode(i.URL)} className="nav--menu-title"><span>{he.decode(i.Descripcion)}</span><span className="mobile-icon fa-angle-right" /></a>);
    }
    return outputMobile;
  });
  console.log(seccionesHeaderMobile);
  console.log(slogan);
  console.log(servicesNav);
  return null; /* (
    <div className="nav--menu1" onMouseLeave={isDesktop ? props.handleMenuLinks : null}>
      <section className="nav--menu-content1">
        <a className="nav--menu-title" onClick={props.handleSubmenuMobile}>
          <span>Productos</span>
          <span className="mobile-icon icon-list fa-plus" />
        </a>
        {servicesNav}
        <a className="nav--menu-title" onClick={props.handleSubmenuMobileTienda}>
          <span>Servicios</span>
          <span className="mobile-icon icon-list-tienda fa-plus" />
        </a>
        {tiendaNav}
        <a className="nav--menu-title" onClick={props.handleSubmenuMobileTienda}>
          <span>Conozca más</span>
          <span className="mobile-icon icon-list-tienda fa-plus" />
        </a>
        {tiendaNav}
        <a className="nav--menu-title" onClick={props.handleSubmenuMobileTienda}>
          <span>Blog</span>
          <span className="mobile-icon icon-list-tienda fa-plus" />
        </a>
        {tiendaNav}
        <a className="nav--menu-title" onClick={props.handleSubmenuMobileTienda}>
          <span>Blog</span>
          <span className="mobile-icon icon-list-tienda fa-plus" />
        </a>
        {tiendaNav}
        <a className="nav--menu-title" onClick={props.handleSubmenuMobileTienda}>
          <span>Contáctenos</span>
          <span className="mobile-icon icon-list-tienda fa-plus" />
        </a>
        {tiendaNav}
      </section>
      <aside className="nav--menu-slogan">
        {slogan}
      </aside>
    </div>
  ); */
};

const UI = ({ handleHover, handleLeave, handleScroll, handleSearchToggle, handleMenuToggle, handleMenuLinks, handleMenuLinksTienda, handleMenuSoluciones, handleMenuIndustria, handleMenuTecnologia, handleClicks, handleSubmenuMobile, handleSubmenuMobileTienda, layoutData, socialData }) => (
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
      handleSearchToggle={handleSearchToggle}
      handleMenuToggle={handleMenuToggle}
      handleMenuLinks={handleMenuLinks}
      handleMenuLinksTienda={handleMenuLinksTienda}
      handleMenuSoluciones={handleMenuSoluciones}
      handleMenuIndustria={handleMenuIndustria}
      handleMenuTecnologia={handleMenuTecnologia}
      layoutData={layoutData}
      socialData={socialData}
    />
    {isIE ? <IEnotification /> : null}
    <NavMenuLinks
      handleSubmenuMobile={handleSubmenuMobile}
      handleSubmenuMobileTienda={handleSubmenuMobileTienda}
      handleMenuLinks={handleMenuLinks}
      handleMenuLinksTienda={handleMenuLinksTienda}
      handleMenuToggle={handleMenuToggle}
      layoutData={layoutData}
    />
    <Loading />
  </div>
);

UI.propTypes = {
  handleHover: PropTypes.func.isRequired,
  handleLeave: PropTypes.func.isRequired,
  handleScroll: PropTypes.func.isRequired,
  handleSearchToggle: PropTypes.func.isRequired,
  handleMenuToggle: PropTypes.func.isRequired,
  handleMenuLinks: PropTypes.func.isRequired,
  handleMenuSoluciones: PropTypes.func.isRequired,
  handleMenuIndustria: PropTypes.func.isRequired,
  handleMenuTecnologia: PropTypes.func.isRequired,
  handleClicks: PropTypes.func.isRequired,
  handleSubmenuMobile: PropTypes.func.isRequired,
  layoutData: PropTypes.shape({}).isRequired,
  socialData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

NavTop.propTypes = {
  handleLeave: PropTypes.func.isRequired,
  handleClicks: PropTypes.func.isRequired,
  layoutData: PropTypes.shape({
    Menus: PropTypes.array,
    Secciones: PropTypes.array,
  }),
};

NavTop.defaultProps = {
  layoutData: {
    Menus: [],
    Secciones: [],
  },
};

NavMain.propTypes = {
  handleSearchToggle: PropTypes.func.isRequired,
  handleMenuToggle: PropTypes.func.isRequired,
  handleMenuLinks: PropTypes.func.isRequired,
  handleMenuSoluciones: PropTypes.func.isRequired,
  handleMenuIndustria: PropTypes.func.isRequired,
  handleMenuTecnologia: PropTypes.func.isRequired,
  layoutData: PropTypes.shape({
    MiClaro: PropTypes.string,
    SeccionesHeader: PropTypes.array,
  }),
  socialData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

NavMain.defaultProps = {
  layoutData: {
    MiClaro: '',
    SeccionesHeader: [],
  },
};

NavMenuLinks.propTypes = {
  handleSubmenuMobile: PropTypes.func.isRequired,
  handleMenuLinks: PropTypes.func.isRequired,
  layoutData: PropTypes.shape({
    Eslogan: PropTypes.string,
    MiClaro: PropTypes.string,
    SeccionesHeader: PropTypes.array,
  }),
};

NavMenuLinks.defaultProps = {
  layoutData: {
    Eslogan: '',
    MiClaro: '',
    SeccionesHeader: {},
  },
};

export default UI;