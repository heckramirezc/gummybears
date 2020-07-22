// component
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';

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
      <img src="https://uat-gummybears.com/wp/wp-content/uploads/2020/06/Enmascarar-grupo-1920.png" alt="" />
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
  const Servicios = props.servicesList.map((servicio, key) => (
    <div className="grid-item">
      <Link key={key} to={`/servicios/${servicio.slug}`}>
        <img src={servicio.acf.icon} alt={servicio.title.rendered} />
        <h3>{servicio.title.rendered}</h3>
      </Link>
    </div>
  ));
  return (
    <main>
      <section className="catalog">
        <CatalogBanner eSpot={props.eSpot} />
        <Element id="servicios" name="servicios">
          <div className="catalog--header-servicios">
            <h1>SERVICIOS</h1>
          </div>
        </Element>
        <div className="catalog--grid-container-servicios">
          {Servicios}
        </div>
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
                <img src="https://uat-gummybears.com/wp-content/uploads/2020/06/btn_env@2x.png" alt="" />
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
                <img src="https://uat-gummybears.com/wp-content/uploads/2020/06/btn_env@2x.png" alt="" />
              </a>
            </Link>
          </div>
          <div className="grid-item">
            <Link to="/tecnologia">
              <a>
                <div>
                  <h3>TECNOLOGÍA</h3>
                  <p>Explore las soluciones integrales de nuestros partners líderes en la Industria tecnológica.  Y encuentre la opción que se adapta mejor a su empresa.</p>
                </div>
                <img src="https://uat-gummybears.com/wp-content/uploads/2020/06/btn_env@2x.png" alt="" />
              </a>
            </Link>
          </div>
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
