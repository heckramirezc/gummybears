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

const Industries = ({ industriesList, slug }) => {
  if (!industriesList || !industriesList.length || !industriesList.length === 0) return null;
  const Industrias = industriesList.map((solucion, key) => (
    <div className="grid-item-industry-rel">
      <Link key={key} to={`/producto/${slug}/${solucion.slug}`}>
        <img src={solucion.acf.tag_industry} alt={key} />
        <h3>{solucion.title.rendered}</h3>
        <p>{solucion.acf.short_description}</p>
        <h4>Conocer más</h4>
      </Link>
    </div>
  ));
  return Industrias;
};

const UI = ({ solutionsList, industriesList, productsList }) => {
  if (!solutionsList || !solutionsList.length || !solutionsList.length === 0) return null;
  if (!industriesList || !industriesList.length || !industriesList.length === 0) return null;
  let slugs = window.location.pathname.split(/(\/)/g);
  slugs = slugs.filter(x => x !== '/');
  const solucion = solutionsList.find(x => x.slug === slugs[slugs.length - 1]);
  const industria = industriesList.find(x => x.slug === slugs[slugs.length - 1]);
  let categoryName = '';
  let contenidoDestacado = '';
  let archivoAdjunto = '';
  let categoryDescripcion = '';
  let imagenDestacada = '';
  let categories = [];
  let productosSubcategoria = [];
  let Categorias = '';
  let DetalleCategorias = '';
  switch (slugs[slugs.length - 2]) {
    case 'industria':
      categoryName = industria.name.toUpperCase();
      categories = industriesList.filter(x => x.slug !== slugs[slugs.length - 1]);
      Categorias = categories.map((categoria, key) => (
        <div className="grid-item">
          <Link to={`/industria/${categoria.slug}`}>
            <img src={categoria.acf.secondary_image} alt={key} />
          </Link>
        </div>
      ));
      categoryDescripcion = (
        <p dangerouslySetInnerHTML={{ __html: industria.description }} />
      );
      contenidoDestacado = (
        <div className="key-content" dangerouslySetInnerHTML={{ __html: industria.acf.key_content }} />
      );
      if (industria.acf.attached_file) {
        archivoAdjunto = (
          <div className="download-item"><a href={industria.acf.attached_file} download>{industria.acf.description_attached_file}</a></div>
        );
      }
      imagenDestacada = (
        <section className="catalog--banner-industry">
          <img src={industria.acf.featured_image} alt={industria.name} />
        </section>
      );
      productosSubcategoria = productsList.filter(producto => producto.industria.some(indus => indus === industria.id));
      DetalleCategorias = <Industries industriesList={productosSubcategoria} slug={slugs[slugs.length - 1]} />;
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
      imagenDestacada = (
        <section className="catalog--banner-industry">
          <img src={solucion.acf.featured_image} alt={solucion.name} />
        </section>
      );
      productosSubcategoria = productsList.filter(producto => producto.solutions.some(solution => solution === solucion.id));
      DetalleCategorias = <Solutions solutionsList={productosSubcategoria} slug={slugs[slugs.length - 1]} />;
      break;
  }
  return (
    <main>
      <section className="catalog">
        {imagenDestacada}
        <br /><br />
        <div className="catalog--header-subcategory-industry">
          <div className="catalog--header-content-industry" >
            <h1>{categoryName}</h1>
            {categoryDescripcion}
            {contenidoDestacado}
            {archivoAdjunto}
            <div className="related-items"><a>Productos Relacionados</a></div>
            <div className="catalog--grid-container-rel">
              {DetalleCategorias}
            </div>
          </div>
          <div className="catalog--grid-container-industry-header">
            <div className="header-item"><a>Industrias</a></div>
            {Categorias}
          </div>
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
