import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import he from 'he';

import { logo } from './../../helpers/svg';

// import NotificationUI from '../../containers/Account/Notification/Notification.ui';

// const FooterChat = () => (
//   <div className="footer--chat">
//     <a>
//       <span>{iconChat}</span>
//       <label>Iniciar Chat</label>
//     </a>
//   </div>
// );

const FooterBreadcrumbBox = ({ location }) => {
  // console.log('breadcrumbBox', location);
  const name = location.pathname.replace(/(\/)/g, '')
    .replace(/[-_]/g, ' ')
    .replace(/(product.*)/, 'Equipos')
    .replace(/(cart.*)/, 'Carrito')
    .replace('terms', 'Términos y condiciones')
    .replace('search', 'Búsqueda: ')
    .replace(/(account)/, 'Mi Cuenta')
    .replace(/(.*orders.*)/, 'Mis Órdenes')
    .replace(/(.*address.*)/, 'Mis Direcciones')
    .replace(/(.*profile.*)/, 'Mi Perfil');
  console.log(name);
  return (
    <div className="footer--breadcrumb">
      <section>
        <p><span>{logo}</span></p>
        <hr />
      </section>
    </div>
  );
};
const FooterBreadcrumb = withRouter(FooterBreadcrumbBox);


const FooterLinks = ({ layoutData }) => {
  // console.log('layoutData:::', layoutData);
  const getData = layoutData && layoutData.SeccionesFooter && layoutData.SeccionesFooter.length > 0;
  const list = [];
  if (getData) {
    const data = layoutData.SeccionesFooter[0].Hijos;
    for (let i = 0; i < data.length; i += 1) {
      const item = data[i];
      const title = item.Descripcion;
      const ulKey = item.Unico;
      const links = [];
      const linkList = item.Hijos;
      for (let x = 0; x < linkList.length; x += 1) {
        const link = linkList[x];
        const label = link.Descripcion;
        const url = link.URL;
        const linkKey = link.Unico;
        const element = (<li key={linkKey}><a href={he.decode(url)}>{he.decode(label)}</a></li>);
        links.push(element);
      }
      const output = (
        <ul key={ulKey}>
          <li><b>{he.decode(title)}</b></li>
          {links}
        </ul>
      );
      list.push(output);
    }
  }
  return (
    <div className="footer--links">
      <section>
        <ul>
          <li><b>PRODUCTOS</b></li>
          <li><a href="/soluciones">Solución</a></li>
          <li><a href="/industria">Industría</a></li>
          <li><a href="/tecnologia">Tecnología</a></li>
        </ul>
        <ul>
          <li><b>SERVICIOS</b></li>
          <li><a>Transformación digital</a></li>
          <li><a>Implementación de proyectos ERP</a></li>
          <li><a>Implementación de proyectos CRM</a></li>
          <li><a>Gobierno de Datos</a></li>
          <li><a>Data Management</a></li>
          <li><a>Diseño y arquitectura de proyectos de data warehouse</a></li>
          <li><a>Análitica avanzada</a></li>
          <li><a>Omnicanalidad</a></li>
        </ul>
        <ul>
          <li><b>CONOZCA MÁS</b></li>
          <li><a>Visión / Misión</a></li>
          <li><a>Valores</a></li>
          <li><a>Programa de socios</a></li>
        </ul>
        <ul>
          <li><b>BLOG</b></li>
          <li><a>Solución</a></li>
          <li><a>Industría</a></li>
          <li><a>Tecnología</a></li>
          <li><a>Temas</a></li>
        </ul>
        <ul>
          <li><b>CONTÁCTENOS</b></li>
          <li><ul><ul><span className="fa-map-marker" /></ul><ul><a href="#">11 Calle 7-66 Zona 9,<br />Centro Corporativo Heidelberg, Nivel 9,<br />Guatemala, Guatemala</a></ul></ul></li>
          <li><br /></li>
          <li><ul><ul><span className="fa-envelope-o" /></ul><ul><a href="#">info@gyssa.com<br />mercadeo@gyssa.com</a></ul></ul></li>
          <li><br /></li>
          <li><ul><ul><span className="fa-phone" /></ul><ul><a href="#">+502 2326-6100</a></ul></ul></li>
          <li><br /></li>
          <li><ul><ul><span className="fa-clock-o" /></ul><ul><a>Lunes a Viernes<br />8:00 a 17:00 horas</a></ul></ul></li>
          <li><br /></li>
          <li><b href="#">EMPLEO</b></li>
        </ul>
        {/* {list} */}
      </section>
    </div>
  );
};

const FooterEnd = ({ layoutData, socialData }) => {
  const getData = layoutData && layoutData.Menus && layoutData.Menus[1] && layoutData.Menus[1].Hijos;
  const legal = [];
  if (getData) {
    const data = layoutData.Menus[1].Hijos;
    for (let i = 0; i < data.length; i += 1) {
      const item = data[i];
      const title = item.Descripcion;
      const href = item.URL;
      const key = item.Unico;
      const output = (
        <a href={he.decode(href)} target="_blank" rel="noopener noreferrer nofollow" key={key}>{he.decode(title)}</a>
      );
      legal.push(output);
    }
  }
  if (!socialData || !socialData.length || !socialData.length === 0) return null;
  const RedesSociales = (socialData || []).map((data) => {
    const enlace = data.acf.enlace;
    console.log(enlace);
    return <a href={data.acf.enlace} target="_blank" rel="noopener noreferrer nofollow"><img src={data.acf.icono} alt={data.title.rendered} /></a>;
  });
  return (
    <div className="footer--end">
      <section>
        <nav>
          <div>
            {RedesSociales}
          </div>
        </nav>
      </section>
    </div>
  );
};

const Footer = props => (
  <footer className="footer" role="presentation" onClick={props.closeMenus}>
    <FooterBreadcrumb />
    <FooterLinks layoutData={props.layoutData} />
    <FooterEnd layoutData={props.layoutData} socialData={props.socialData} />
    {/* <FooterChat /> */}
    {/* <NotificationUI /> */}
  </footer>
);

Footer.propTypes = {
  closeMenus: PropTypes.func.isRequired,
  layoutData: PropTypes.shape({}).isRequired,
  socialData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

FooterEnd.propTypes = {
  layoutData: PropTypes.shape({}).isRequired,
  socialData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

FooterLinks.propTypes = {
  layoutData: PropTypes.shape({}).isRequired,
};

FooterBreadcrumbBox.propTypes = {
  location: PropTypes.shape({}).isRequired,
};

export default Footer;
