// component
import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import $ from 'jquery';

// utilities
// import $ from 'jquery';
// import Slider from 'react-slick'; // https://github.com/akiran/react-slick

// Components
// import { ArrowPrev, ArrowNext } from '../../helpers/svg';

// const isIE = (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > -1);

const CatalogBannerBox = ({ eSpotInfo }) => {
  let images;

  if (eSpotInfo) {
    console.log(eSpotInfo);
    images = (
      <picture>
        <source media="(min-width: 760px)" srcSet="http://uat-gummybears.com/wp-content/uploads/2020/06/Enmascarar-grupo-1920.png" />
        <source media="(min-width: 0px)" srcSet="http://uat-gummybears.com/wp-content/uploads/2020/06/Enmascarar-grupo-1920.png" />
        <img src="http://uat-gummybears.com/wp-content/uploads/2020/06/Enmascarar-grupo-1920.png" alt="" />
      </picture>
    );
  }

  return (
    <div>
      { images }
    </div>
  );
};

const CatalogBanner = ({ eSpot }) => {
  /* const bannerSettings = {
    customPaging() {
      return <a><span className="fa fa-circle" /></a>;
    },
    dots: true,
    autoplay: true,
    autoplaySpeed: 4500,
    speed: 1000,
    infinite: true,
    pauseOnHover: false,
    initialSlide: 2,
    arrows: true,
    prevArrow: <ArrowPrev />,
    nextArrow: <ArrowNext />,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slider = ((eSpot.data && eSpot.data.items) || []).map((eSpotInfo, i) => {
    const index = i;
    return (<CatalogBannerBox eSpotInfo={eSpotInfo} key={index} />);
  }); */
  console.log(eSpot);
  return null; /* (
    <section className="catalog--banner">
      <Slider {...bannerSettings}>
        {slider}
      </Slider>
    </section>
  ); */
};

// const closeThis = () => {
//   $(".catalog--quiz").hide();
// }
// const callQuiz = () => {
//   console.log('Link to quiz');
// }

// const CatalogQuiz = () => (
//   <div className="catalog--quiz fixed">
//     <section>
//       <h6>¡Encuenta tu equipo y plan ideal!</h6>
//       <p>Lo único que necesitas es contestar algunas preguntas</p>
//       <div>
//         <a href="#" onClick={callQuiz} role="button" tabIndex="-1">
//           <span>Iniciar</span>
//         </a>
//       </div>
//       <i className="fa fa-times" onClick={closeThis} role="button" tabIndex="-1" />
//     </section>
//   </div>
// );

const UI = props => (
  <main>
    <section className="catalog">
      <CatalogBanner eSpot={props.eSpot} />
      <br /><br />
      <div className="catalog--header-category">
        <h1>SOLUCIONES</h1>
        <div className="catalog--grid-container-header">
          <div className="grid-item">
            <a href="/industria">INDUSTRIA</a>
          </div>
          <div className="grid-item">
            <a href="tecnologia">TECNOLOGÍA</a>
          </div>
        </div>
      </div>
      <div className="catalog--grid-container-category">
        <div className="grid-item">
          <a href="/erp">
            <img src="https://uat-gummybears.com/wp-content/uploads/2020/06/iERP@2x.png" alt="" />
            <h3>ERP</h3>
            <p>Integre la información de todos los departamentos de su empresa en un mismo sistema, adaptándose a su giro de negocio y optimizando sus recursos empresariales.</p>
            <h4>Conocer más</h4>
          </a>
        </div>
        <div className="grid-item">
          <a href="/crm">
            <img src="https://uat-gummybears.com/wp-content/uploads/2020/06/product_icon@2x.png" alt="" />
            <h3>CRM</h3>
            <p>Centre su negocio en los clientes mediante un CRM que le permite optimizar sus procesos orientadas al cliente: ventas, marketing y servicio al cliente. </p>
            <h4>Conocer más</h4>
          </a>
        </div>
        <div className="grid-item">
          <a href="/administracion-de-talento-humano">
            <img src="https://uat-gummybears.com/wp-content/uploads/2020/06/iAdminHum@2x.png" alt="" />
            <h3>Administración del talento humano</h3>
            <p>Coloque a su personal en el centro de su negocio. Gestione el desempeño, compensaciones, aprendizaje, sucesión y desarrollo de los empleados. </p>
            <h4>Conocer más</h4>
          </a>
        </div>
        <div className="grid-item">
          <a href="/big-data">
            <img src="https://uat-gummybears.com/wp-content/uploads/2020/06/iBigData@2x.png" alt="" />
            <h3>Big Data</h3>
            <p>Tome las mejores decisiones analizando información valiosa proveniente de todas sus fuentes de datos, relacionadas a su compañía y su línea de negocios.  </p>
            <h4>Conocer más</h4>
          </a>
        </div>
        <div className="grid-item">
          <a href="/gobierno-de-datos">
            <img src="https://uat-gummybears.com/wp-content/uploads/2020/06/iGobDat@2x.png" alt="" />
            <h3>Gobierno de datos</h3>
            <p>Gobierne el ciclo de vida de los datos maestros para aumentar la calidad y la consistencia de la información en toda su organización.</p>
            <h4>Conocer más</h4>
          </a>
        </div>
        <div className="grid-item">
          <a href="/omnicanalidad">
            <img src="https://uat-gummybears.com/wp-content/uploads/2020/06/iOmni@2x.png" alt="" />
            <h3>Omnicanalidad</h3>
            <p>Permita un acceso consistente y fluido a los productos o servicios financieros; evolucione hacia un enfoque más integral y centrado en el cliente. </p>
            <h4>Conocer más</h4>
          </a>
        </div>
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br />
      <div className="catalog--module">
        {/* <Facets productsFilter={props.productsFilter} resetCatalog={props.resetCatalog} /> */}
      </div>
    </section>
  </main>
);


UI.propTypes = {
  eSpot: PropTypes.shape({}),
  indexPage: PropTypes.shape({
    initPage: PropTypes.number,
    endPage: PropTypes.number,
  }),
  itemsPerPageValue: PropTypes.number.isRequired, // eslint-disable-line
};

UI.defaultProps = {
  eSpot: {},
  indexPage: {},
};

CatalogBanner.propTypes = {
  eSpot: PropTypes.shape({}),
};

CatalogBanner.defaultProps = {
  eSpot: {},
};

CatalogBannerBox.propTypes = {
  eSpotInfo: PropTypes.shape({}),
};

CatalogBannerBox.defaultProps = {
  eSpotInfo: {},
};

export default UI;
