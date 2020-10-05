// component
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import CookieConsent from 'react-cookie-consent';
import { isMobile } from 'react-device-detect';
import Carousel from 'react-grid-carousel';

import Slider from 'react-slick'; // https://github.com/akiran/react-slick

// Components
import { ArrowPrev, ArrowNext } from '../../helpers/svg';

const CatalogBanner = () => {
  const bannerSettings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 1000,
    infinite: true,
    pauseOnHover: false,
    initialSlide: 1,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="catalog--banner">
      <Slider {...bannerSettings}>
        <div>
          <picture>
            <Link to="/producto/microsoft-dynamics-365-unified-op">
              <img src="https://www.gyssa.com/wp/wp-content/uploads/2020/08/Dynamics-365-Unified-Operation.jpg" alt="" />
            </Link>
          </picture>
        </div>
        <div>
          <picture>
            <Link to="/producto/sap-analytics-cloud">
              <img src="https://www.gyssa.com/wp/wp-content/uploads/2020/08/SAP-Analytics-Cloud.jpg" alt="" />
            </Link>
          </picture>
        </div>
        <div>
          <picture>
            <Link to="/producto/sap-cloud-platform">
              <img src="https://www.gyssa.com/wp/wp-content/uploads/2020/08/SAP-Data-Warehouse-Cloud.jpg" alt="" />
            </Link>
          </picture>
        </div>
        <div>
          <picture>
            <Link to="/producto/sap-master-data-governance">
              <img src="https://www.gyssa.com/wp/wp-content/uploads/2020/08/SAP-Master-Data-Governance.jpg" alt="" />
            </Link>
          </picture>
        </div>
        <div>
          <picture>
            <Link to="/producto/singular-sap-business-one">
              <img src="https://www.gyssa.com/wp/wp-content/uploads/2020/08/Singular-SAP-Business-One.jpg" alt="" />
            </Link>
          </picture>
        </div>
      </Slider>
      <img className="catalog--banner-recorte" src="https://www.gyssa.com/wp/wp-content/uploads/2020/08/RECORTE-DE-BANNER.png" alt="" />
      {/* <header className="cart--summary-form-quick">
        <h1>CONTACTO RÁPIDO</h1> */}
      {/* <form onSubmit={handleSubmit} name="addresses"> */}
      {/* <form name="servicesform">
        <div className="checkout--address-form">
          <section>
            <div className="full">
              <p>Nombre</p>
              <label htmlFor="s_phone_1">
                <input
                  type="text"
                  tabIndex={0}
                  placeholder="ingrese su nombre"
                  // name="s_phone_1"
                  // id="s_phone_1"
                  // maxLength={8}
                  // onKeyPress={numberChars}
                  // value={shippingAddress.phone_1 || ''}
                  // onChange={(e) => { handleChange(e, 'form_shipping_info.phone_1'); }}
                />
              </label>
            </div>
            <div className="full">
              <p>Teléfono</p>
              <label htmlFor="s_phone_1">
                <input
                  type="text"
                  tabIndex={0}
                  placeholder="ingrese su número de teléfono"
                  // name="s_phone_1"
                  // id="s_phone_1"
                  // maxLength={8}
                  // onKeyPress={numberChars}
                  // value={shippingAddress.phone_1 || ''}
                  // onChange={(e) => { handleChange(e, 'form_shipping_info.phone_1'); }}
                />
              </label>
            </div>
            <div className="full">
              <p>Correo electrónico</p>
              <label htmlFor="s_phone_1">
                <input
                  type="text"
                  tabIndex={0}
                  placeholder="ingrese su correo electrónico"
                  // name="s_phone_1"
                  // id="s_phone_1"
                  // maxLength={8}
                  // onKeyPress={numberChars}
                  // value={shippingAddress.phone_1 || ''}
                  // onChange={(e) => { handleChange(e, 'form_shipping_info.phone_1'); }}
                />
              </label>
            </div>
            <div className="full">
              <p>Empresa donde trabaja</p>
              <label htmlFor="s_phone_1">
                <input
                  type="text"
                  tabIndex={0}
                  placeholder="ingrese el nombre de la empresa donde trabajas"
                  // name="s_phone_1"
                  // id="s_phone_1"
                  // maxLength={8}
                  // onKeyPress={numberChars}
                  // value={shippingAddress.phone_1 || ''}
                  // onChange={(e) => { handleChange(e, 'form_shipping_info.phone_1'); }}
                />
              </label>
            </div>
          </section>
        </div>
        <aside className="checkout--continue">
          <button type="submit">
            <span>ENVIAR</span>
          </button>
        </aside>
      </form>
    </header> */}
    </section>
  );
};

const ClientBanner = ({ clientes, categoriasClientes }) => {
  if (!categoriasClientes || !categoriasClientes.length || !categoriasClientes.length === 0) return null;
  const cocategoriaClientes = categoriasClientes.find(cat => cat.slug === 'todos');
  const clients = clientes.filter(client => client.clientes.some(clientCat => clientCat === cocategoriaClientes.id));
  let bannerSettings = '';
  if (isMobile) {
    bannerSettings = {
      dots: false,
      autoplay: true,
      autoplaySpeed: 6000,
      speed: 1000,
      infinite: true,
      pauseOnHover: false,
      initialSlide: 1,
      arrows: true,
      prevArrow: <ArrowPrev />,
      nextArrow: <ArrowNext />,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  } else {
    bannerSettings = {
      dots: false,
      autoplay: true,
      autoplaySpeed: 6000,
      speed: 1000,
      infinite: true,
      pauseOnHover: false,
      initialSlide: 1,
      arrows: true,
      prevArrow: <ArrowPrev />,
      nextArrow: <ArrowNext />,
      slidesToShow: 5,
      slidesToScroll: 1,
    };
  }
  const Clientes = clients.map((currentClient, key) => (
    <div key={key}>
      <picture>
        <img src={currentClient.acf.icon} alt={currentClient.title.rendered} />
      </picture>
    </div>
  ));

  return (
    <section className="catalog--banner-cliente">
      <div className="catalog--header-productos">
        <h1>CLIENTES</h1>
      </div>
      <Slider {...bannerSettings}>
        {Clientes}
      </Slider>
    </section>
  );
};

const UI = (props) => {
  if (!props.servicesList || !props.servicesList.length || !props.servicesList.length === 0) return null;
  if (!props.postsList || !props.postsList.length || !props.postsList.length === 0) return null;
  if (!props.categoriesList || !props.categoriesList.length || !props.categoriesList.length === 0) return null;
  if (!props.categoriasClientes || !props.categoriasClientes.length || !props.categoriasClientes.length === 0) return null;
  const Servicios = props.servicesList.map((servicio, key) => (
    <div className="grid-item">
      <Link key={key} to={`/servicios/${servicio.slug}`}>
        <img src={servicio.acf.icon} alt={servicio.title.rendered} />
        <h3>{servicio.title.rendered}</h3>
      </Link>
    </div>
  ));

  const ServiciosMobile = props.servicesList.map((servicio, key) => (
    <Carousel.Item>
      <div className="catalog--grid-container-servicios--grid-item">
        <Link key={key} to={`/servicios/${servicio.slug}`}>
          <img src={servicio.acf.icon} alt={servicio.title.rendered} />
          <h3>{servicio.title.rendered}</h3>
        </Link>
      </div>
    </Carousel.Item>
  ));

  const ArticulosRecientes = props.postsList.slice(0, 3).map((post, key) => {
    const date = new Date(post.date);
    let categoriesArticulo = post.categories.filter(cat => cat !== props.categoriesList.find(y => y.slug === 'favoritos').id);
    categoriesArticulo = props.categoriesList.filter(catTemp => categoriesArticulo.includes(catTemp.id));
    const category = categoriesArticulo.map(item => item.name).join(' - ');
    return (
      <div className="grid-item">
        <Link key={key} to={`/blog/articulos/${post.slug}`}>
          <img src={post.acf.image} alt={post.title.rendered} />
          <div className="grid-item-content">
            <b>{category.toUpperCase()}</b>
            <h3>{ post.title.rendered.length > 60 ? `${post.title.rendered.substring(0, 60)}...` : post.title.rendered }</h3>
            <p>
              {new Intl.DateTimeFormat('es-GT', {
                year: 'numeric',
                month: 'long',
                day: '2-digit',
              }).format(date)}
            </p>
          </div>
        </Link>
      </div>
    );
  });

  let ServiciosView = '';
  if (isMobile) {
    ServiciosView = (
      <Carousel
        cols={1}
        rows={2}
        gap={0}
        loop={false}
        showDots
        mobileBreakpoint={0}
      >
        {ServiciosMobile}
      </Carousel>
    );
  } else {
    ServiciosView = (
      <div className="catalog--grid-container-servicios">
        {Servicios}
      </div>
    );
  }
  return (
    <main>
      <section className="catalog">
        <CatalogBanner />
        <Element id="servicios" name="servicios" className="catalog--header-servicios-container">
          <div className="catalog--header-servicios">
            <img src="https://www.gyssa.com/wp/wp-content/uploads/2020/07/bk_servicios@2x.png" alt="" />
            <h1>SERVICIOS</h1>
          </div>
        </Element>
        {ServiciosView}
        <div className="catalog--header-productos">
          <h1>PRODUCTOS</h1>
        </div>
        <div className="catalog--grid-container-soluciones">
          <div className="grid-item">
            <Link to="/soluciones">
              <a>
                <div>
                  <h3>SOLUCIONES</h3>
                  <p>Conozca nuestras soluciones enfocadas a cubrir las necesidades de cada área de su empresa y potencialice la productividad de sus colaboradores.</p>
                </div>
                <img src="https://www.gyssa.com/wp/wp-content/uploads/2020/06/btn_env@2x.png" alt="" />
              </a>
            </Link>
          </div>
          <div className="grid-item">
            <Link to="/industria">
              <a>
                <div>
                  <h3>INDUSTRIA</h3>
                  <p>Conviértase en la empresa líder en su giro de negocios y comience el viaje de la transformación digital con soluciones que se adaptan a su empresa e industria.</p>
                </div>
                <img src="https://www.gyssa.com/wp/wp-content/uploads/2020/06/btn_env@2x.png" alt="" />
              </a>
            </Link>
          </div>
          <div className="grid-item">
            <Link to="/tecnologia/sap">
              <a>
                <div>
                  <h3>TECNOLOGÍA</h3>
                  <p>Explore las soluciones integrales de nuestros partners líderes en la Industria tecnológica y encuentre la opción que se adapte mejor a su empresa.</p>
                </div>
                <img src="https://www.gyssa.com/wp/wp-content/uploads/2020/06/btn_env@2x.png" alt="" />
              </a>
            </Link>
          </div>
        </div>
        <br />
        {/* <iframe title="GYSSA" src="https://www.youtube.com/embed/G_v0GuXx37E" /> */}
        <br />
        <div className="catalog--grid-container-partners">
          <div className="grid-item">
            <div>
              <h3>PARTNERSHIP</h3>
              <p>En GYSSA creemos en el valor de las alianzas, por ello, y con base en la confianza mutua, hemos establecido relación con empresas líderes en la industria de tecnología, para proveerle soluciones enfocadas a mejorar su negocio.</p>
            </div>
          </div>
          <div className="grid-item-image">
            <img src="https://www.gyssa.com/wp/wp-content/uploads/2020/08/iSAPpartner@2x.png" alt="" />
            <img src="https://www.gyssa.com/wp/wp-content/uploads/2020/08/iMSpartner@2x.png" alt="" />
          </div>
        </div>
        <br />
        <ClientBanner clientes={props.clientes} categoriasClientes={props.categoriasClientes} />
        <br />
        {/* <div className="catalog--header-productos">
          <h1>CASOS DE ÉXITO</h1>
        </div>
        <div className="catalog--module">
          <div className="catalog--grid-container-cases">
            <div className="grid-item-cases">
              <Link to="#">
                <iframe title="GYSSA" src="https://www.youtube.com/embed/G_v0GuXx37E" />
                <h3>Titulo de caso de éxito</h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
              </Link>
            </div>
            <div className="grid-item-cases">
              <Link to="#">
                <iframe title="GYSSA" src="https://www.youtube.com/embed/G_v0GuXx37E" />
                <h3>Titulo de caso de éxito</h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
              </Link>
            </div>
            <div className="grid-item-cases">
              <Link to="#">
                <iframe title="GYSSA" src="https://www.youtube.com/embed/G_v0GuXx37E" />
                <h3>Titulo de caso de éxito</h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
              </Link>
            </div>
          </div>
          <section className="catalog--layout-1-section-4">
            <Link to="#">
              <span>VER MÁS CASOS DE ÉXITO</span>
            </Link>
          </section>
        </div> */}
        <div className="catalog--module-blog">
          <Link to="/blog" className="catalog--module-blog--banner">
            <img src="https://www.gyssa.com/wp/wp-content/uploads/2020/09/bannerBlog@2x.png" alt="" />
            <div className="catalog--module-blog--contenido">
              <span>NUESTRO BLOG</span>
              <div className="catalog--grid-container-blog-categories--banner">
                <a>VER MÁS ARTÍCULOS</a>
              </div>
            </div>
          </Link>
        </div>
        <div className="catalog--grid-container-blog">
          {ArticulosRecientes}
        </div>
        <br />
        <br />
        <br />
        <br />
      </section>
      <CookieConsent
        location="bottom"
        buttonText="Comprendo"
        cookieName="statusCookie"
        containerClasses="catalog--cookie-consent"
        sameSite="strict"
        style={{}}
        buttonClasses="catalog--cookie-consent-botones"
        expires={150}
      >
        Este sitio web utiliza cookies para mejorar la experiencia del usuario.
      </CookieConsent>
    </main>
  );
};


UI.propTypes = {
  indexPage: PropTypes.shape({
    initPage: PropTypes.number,
    endPage: PropTypes.number,
  }),
  itemsPerPageValue: PropTypes.number.isRequired, // eslint-disable-line
};

UI.defaultProps = {
  indexPage: {},
};

export default UI;
