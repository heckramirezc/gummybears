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

const Solutions = ({ solutionsList, slug }) => {
  if (!solutionsList || !solutionsList.length || !solutionsList.length === 0) return null;
  const Soluciones = solutionsList.map((solucion, key) => (
    <div className="grid-item-solution-category">
      <Link key={key} to={`/producto/${slug}/${solucion.slug}`}>
        <h3>{solucion.title.rendered}</h3>
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
      <Link key={key} to={`/producto/${solucion.slug}`}>
        <h3>{solucion.name}</h3>
        <p>{solucion.acf.short_description}</p>
        <h4>Conocer más</h4>
      </Link>
    </div>
  ));
  return Industrias;
};

const UI = ({ solutionsList, industriesList, productsList, tecnologiesType, handleTabs }) => {
  if (!solutionsList || !solutionsList.length || !solutionsList.length === 0) return null;
  if (!industriesList || !industriesList.length || !industriesList.length === 0) return null;
  let slugs = window.location.pathname.split(/(\/)/g);
  slugs = slugs.filter(x => x !== '/');
  const solucion = solutionsList.find(x => x.slug === slugs[slugs.length - 1]);
  const industria = industriesList.find(x => x.slug === slugs[slugs.length - 1]);
  let categoryName = '';
  let categoryDescripcion = '';
  let categories = [];
  let productosSubcategoria = [];
  let Categorias = '';
  let DetalleCategorias = '';
  switch (slugs[slugs.length - 2]) {
    case 'industria':
      categoryName = industria.name.toUpperCase();
      categories = solutionsList.filter(x => x.slug !== slugs[slugs.length - 1]);
      Categorias = categories.map((categoria, key) => (
        <div className="grid-item">
          <Link key={key} to={`${categoria.slug}`}>{categoria.name}</Link>
        </div>
      ));
      DetalleCategorias = <Industries industriesList={industriesList} />;
      break;
    default:
      categoryName = solucion.name.toUpperCase();
      categories = solutionsList.filter(x => x.slug !== slugs[slugs.length - 1]);
      Categorias = categories.map((categoria, key) => (
        <div className="grid-item">
          <Link key={key} to={`${categoria.slug}`}>{categoria.name}</Link>
        </div>
      ));
      categoryDescripcion = (
        <p>{solucion.description}</p>
      );
      productosSubcategoria = productsList.filter(producto => producto.solutions.some(solution => solution === solucion.id));
      DetalleCategorias = <Solutions solutionsList={productosSubcategoria} slug={slugs[slugs.length - 1]} />;
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
        <div className="catalog--header-subcategory">
          <div>
            {categoryHeader}
            {categoryDescripcion}
          </div>
          <div className="catalog--grid-container-subcategory-header">
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
