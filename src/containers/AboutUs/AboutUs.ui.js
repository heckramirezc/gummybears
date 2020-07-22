// component
import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { Element } from 'react-scroll';

// import $ from 'jquery';

// utilities
// import $ from 'jquery';
// import Slider from 'react-slick'; // https://github.com/akiran/react-slick

// Components
// import { ArrowPrev, ArrowNext } from '../../helpers/svg';

// const isIE = (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > -1);

const CatalogBanner = ({ eSpot }) => {
  console.log(eSpot);
  return (
    <section className="catalog--banner">
      <img src="http://uat-gummybears.com/wp/wp-content/uploads/2020/07/cm_bk.png" alt="" />
    </section>
  );
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

const UI = (props) => {
  if (!props.servicesList || !props.servicesList.length || !props.servicesList.length === 0) return null;
  /* const Servicios = props.servicesList.map((servicio, key) => (
    <div className="grid-item">
      <Link key={key} to={`/servicios/${servicio.slug}`}>
        <img src={servicio.acf.icon} alt={servicio.title.rendered} />
        <h3>{servicio.title.rendered}</h3>
      </Link>
    </div>
  )); */
  return (
    <main>
      <section className="catalog">
        <CatalogBanner eSpot={props.eSpot} />
        <div className="catalog--header-productos">
          <h1>CONOZCA MÁS</h1>
        </div>
        <br /><br /><br /><br />
        <div className="catalog--module">
          {/* <Facets productsFilter={props.productsFilter} resetCatalog={props.resetCatalog} /> */}
        </div>
      </section>
    </main>
  );
};


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

export default UI;
