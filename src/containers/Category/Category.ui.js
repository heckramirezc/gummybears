// component
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import $ from 'jquery';

// utilities
// import $ from 'jquery';
// import Slider from 'react-slick'; // https://github.com/akiran/react-slick

// Components
// import { ArrowPrev, ArrowNext } from '../../helpers/svg';

// const isIE = (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > -1);

const Solutions = ({ solutionsList }) => {
  if (!solutionsList || !solutionsList.length || !solutionsList.length === 0) return null;
  const Soluciones = solutionsList.map((solucion, key) => (
    <div className="grid-item-solution">
      <Link key={key} to={`/soluciones/${solucion.slug}`}>
        <img src={solucion.acf.icon} alt={key} />
        <h3>{solucion.name}</h3>
        <p>{solucion.acf.short_description}</p>
        <h4>Conocer más</h4>
      </Link>
    </div>
  ));
  return Soluciones;
};

const Industries = ({ industriesList }) => {
  if (!industriesList || !industriesList.length || !industriesList.length === 0) return null;
  const Industrias = industriesList.map((solucion, key) => (
    <div className="grid-item-industry">
      <Link to={`/industria/${solucion.slug}`}>
        <img src={solucion.acf.small_image} alt={key} />
        <h3>{solucion.name}</h3>
        <p>{solucion.acf.short_description}</p>
        <h4>Conocer más</h4>
      </Link>
    </div>
  ));
  return Industrias;
};


const Tecnologies = ({ tecnologiesList, tecnologiesType }) => {
  console.log(tecnologiesList);
  console.log(tecnologiesType);
  if (!tecnologiesType || !tecnologiesType.length || !tecnologiesType.length === 0) return null;
  if (!tecnologiesList || !tecnologiesList.length || !tecnologiesList.length === 0) return null;
  const Tecnologias = tecnologiesList.map((tecnologia, key) => {
    if (tecnologia.tecnologia[0] === tecnologiesType[0].id) {
      console.log('A--tecnologia.tecnologia[0]', tecnologia.tecnologia[0]);
      console.log('A--tecnologiesType[0].id', tecnologiesType[0].id);
      console.log('MS', tecnologia.title.rendered);
      return (
        <div className="grid-item-ms active">
          <Link to={`/producto/${tecnologia.slug}`}>
            <img src={tecnologia.acf.small_image} alt={key} />
            <h3>{tecnologia.title.rendered}</h3>
            <p>{tecnologia.acf.short_description}</p>
            <h4>Conocer más</h4>
          </Link>
        </div>);
    } else {
      console.log('B--tecnologia.tecnologia[0]', tecnologia.tecnologia[0]);
      console.log('B--tecnologiesType[0].id', tecnologiesType[0].id);
      console.log('SAP', tecnologia.title.rendered);
      return (
        <div className="grid-item-sap">
          <Link to={`/producto/${tecnologia.slug}`}>
            <img src={tecnologia.acf.small_image} alt={key} />
            <h3>{tecnologia.title.rendered}</h3>
            <p>{tecnologia.acf.short_description}</p>
            <h4>Conocer más</h4>
          </Link>
        </div>);
    }
  });
  // console.log(Tecnologias);
  return Tecnologias;
};

const UI = ({ solutionsList, industriesList, productsList, tecnologiesType, handleTabs }) => {
  const categoryName = window.location.pathname.replace(/(\/)/g, '').replace(/[-_]/g, ' ').toUpperCase();
  let categories = [['soluciones', 'SOLUCIONES'], ['industria', 'INDUSTRIA'], ['tecnologia', 'TECNOLOGÍA']];
  categories = categories.filter(x => x[0] !== window.location.pathname.replace(/(\/)/g, '').replace(/[-_]/g, ' '));
  const Categorias = categories.map((categoria, key) => (
    <div className="grid-item">
      <Link key={key} to={`/${categoria[0]}`}>{categoria[1]}</Link>
    </div>
  ));
  let DetalleCategorias = '';
  switch (window.location.pathname.replace(/(\/)/g, '').replace(/[-_]/g, ' ')) {
    case 'industria':
      DetalleCategorias = <Industries industriesList={industriesList} />;
      break;
    case 'tecnologia':
      DetalleCategorias = <Tecnologies tecnologiesList={productsList} tecnologiesType={tecnologiesType} />;
      break;
    default:
      DetalleCategorias = <Solutions solutionsList={solutionsList} />;
      break;
  }
  let categoryHeader = '';
  if (window.location.pathname.replace(/(\/)/g, '').replace(/[-_]/g, ' ') !== 'tecnologia') {
    categoryHeader = <h1>{categoryName}</h1>;
  } else {
    let isFirst = false;
    const TiposTecnoogia = tecnologiesType.map((tecnologia, key) => {
      if (!isFirst) {
        isFirst = true;
        return (<a key={key} onClick={(e) => { handleTabs(e); }} className="active">{tecnologia.name.toUpperCase()}</a>);
      } else {
        return (<a key={key} onClick={(e) => { handleTabs(e); }}>{tecnologia.name.toUpperCase()}</a>);
      }
    });
    categoryHeader = (
      <section className="product--tabs">
        {TiposTecnoogia}
      </section>
    );
  }
  return (
    <main>
      <section className="catalog">
        <br /><br />
        <div className="catalog--header-category">
          {categoryHeader}
          <div className="catalog--grid-container-header">
            {Categorias}
          </div>
        </div>
        <div className="catalog--grid-container-category">
          {DetalleCategorias}
        </div>
      </section>
    </main>
  );
};


UI.propTypes = {
  solutionsList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  indexPage: PropTypes.shape({
    initPage: PropTypes.number,
    endPage: PropTypes.number,
  }),
};

UI.defaultProps = {
  indexPage: {},
};

export default UI;
