import React from 'react';
import { Link } from 'react-router-dom';
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
          <li><a href="/industria">Industria</a></li>
          <li><a href="/tecnologia/sap">Tecnología</a></li>
        </ul>
        <ul>
          <li><b>SERVICIOS</b></li>
          <li><a href="/servicios/transformacion-digital">Transformación digital</a></li>
          <li><a href="/servicios/implementacion-de-proyectos-de-erp">Implementación de proyectos ERP</a></li>
          <li><a href="/servicios/implementacion-de-proyectos-de-crm">Implementación de proyectos CRM</a></li>
          <li><a href="/servicios/gobierno-de-datos-maestros">Gobierno de Datos</a></li>
          <li><a href="/servicios/data-management">Data Management</a></li>
          <li><a href="/servicios/diseno-y-arquitectura-de-proyectos-de-data-warehouse">Diseño y arquitectura de proyectos de data warehouse</a></li>
          <li><a href="/servicios/analitica-avanzada">Análitica avanzada</a></li>
          <li><a href="/servicios/omnicanalidad">Omnicanalidad</a></li>
          <li><a href="/servicios/tco-costo-total-de-propiedad">TCO Costo Total de Propiedad</a></li>
        </ul>
        <ul>
          <li><b>QUIÉNES SOMOS</b></li>
          <li><a href="/paginas/conozca-mas">Visión / Misión</a></li>
          <li><a href="/paginas/conozca-mas">Valores</a></li>
          <li><a href="/paginas/conozca-mas">Programa de asociados</a></li>
        </ul>
        <ul>
          <li><b>BLOG</b></li>
          <li><a href="/blog">Solución</a></li>
          <li><a href="/blog">Industria</a></li>
          <li><a href="/blog">Tecnología</a></li>
          <li><a href="/blog">Temas</a></li>
        </ul>
        <ul>
          <li><b>CONTÁCTENOS</b></li>
          <li><ul><ul><span className="fa-map-marker" /></ul><ul><a href="https://goo.gl/maps/JkDd6XmdDs82b8pt9">11 Calle 7-66 Zona 9,<br />Centro Corporativo Heidelberg, Nivel 9,<br />Guatemala, Guatemala</a></ul></ul></li>
          <li><br /></li>
          <li><ul><ul><span className="fa-envelope-o" /></ul><ul><a href="mailto:mercadeo@gyssa.com">mercadeo@gyssa.com</a></ul></ul></li>
          <li><br /></li>
          <li><ul><ul><span className="fa-phone" /></ul><ul><a href="tel:+50223266100">+502 2326-6100</a></ul></ul></li>
          {/* <li><br /></li>
          <li><ul><ul><span className="fa-clock-o" /></ul><ul><a>Lunes a Viernes<br />05:15 a 17:15 horas</a></ul></ul></li> */}
          <li><br /></li>
          <li><Link to="/paginas/trabaje-con-nosotros"><strong>TRABAJE CON NOSOTROS</strong></Link></li>
          <li><Link to="/politicas-de-privacidad"><strong>POLÍTICAS DE PRIVACIDAD</strong></Link></li>
          <li><Link to="/soporte"><strong>SOPORTE A CLIENTES</strong></Link></li>
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
  const RedesSociales = socialData.map((data, key) => <a key={key} href={data.acf.enlace} target="_blank" rel="noopener noreferrer nofollow"><img src={data.acf.icon} alt={data.title.rendered} /></a>);
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
    <div className="footer--breadcrumb">
      <section>
        <p><span>{logo}</span></p>
        <hr />
      </section>
    </div>
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

export default Footer;
