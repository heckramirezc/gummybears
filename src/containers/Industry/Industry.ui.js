// component
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Slider from 'react-slick'; // https://github.com/akiran/react-slick
import { isMobile } from 'react-device-detect';
// import $ from 'jquery';

// utilities
import { ArrowPrev, ArrowNext } from '../../helpers/svg';
// import $ from 'jquery';
// import Slider from 'react-slick'; // https://github.com/akiran/react-slick

// Components
// import { ArrowPrev, ArrowNext } from '../../helpers/svg';

// const isIE = (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > -1);


const Industries = ({ industriesList, slug, solutionsList }) => {
  if (!industriesList || !industriesList.length || !industriesList.length === 0) return null;
  console.log(solutionsList);
  const Industrias = industriesList.map((producto, key) => {
    const solucion = solutionsList.find(x => x.id === producto.acf.tag);
    return (
      <div className="grid-item-industry-rel">
        <Link key={key} to={`/producto/${slug}/${producto.slug}`}>
          <b style={{ backgroundColor: solucion.acf.background_tag }}>{solucion.name}</b>
          <h3>{producto.title.rendered}</h3>
          <p>{producto.acf.short_description}</p>
          <h4>Conozca más</h4>
        </Link>
      </div>
    );
  });
  return Industrias;
};

const ClientBanner = ({ clientes, categoriasClientes, slug }) => {
  const cocategoriaClientes = categoriasClientes.find(cat => cat.slug === slug);
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
      slidesToShow: 3,
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

const UI = ({ solutionsList, industriesList, productsList, clientes, categoriasClientes }) => {
  if (!solutionsList || !solutionsList.length || !solutionsList.length === 0) return null;
  if (!industriesList || !industriesList.length || !industriesList.length === 0) return null;
  let slugs = window.location.pathname.split(/(\/)/g);
  slugs = slugs.filter(x => x !== '/');
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
  let solutionsListOrdered;
  const industriesListGrupedSorted = [];
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
    <p className="catalog--header-subcategory-industry-p" dangerouslySetInnerHTML={{ __html: industria.description }} />
  );
  contenidoDestacado = (
    <div className="catalog--header-subcategory-industry-key-content" dangerouslySetInnerHTML={{ __html: industria.acf.key_content }} />
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
  if (industria.acf.position_type === 'Posición en Industria (I)') {
    solutionsListOrdered = _.sortBy(solutionsList, val => val.acf.industry_position).reduce((newArray, element) => {
      newArray.push(element.id);
      return newArray;
    }, []);
  } else {
    solutionsListOrdered = _.sortBy(solutionsList, val => val.acf.industry_position_alternative).reduce((newArray, element) => {
      newArray.push(element.id);
      return newArray;
    }, []);
  }
  const industriesListGruped = _.mapValues(_.groupBy(productosSubcategoria, 'acf.tag'));
  solutionsListOrdered.forEach((e) => {
    if (industriesListGruped[e]) {
      industriesListGrupedSorted.push(industriesListGruped[e]);
    }
  });
  const industriesListOrdered = [].concat(...industriesListGrupedSorted.map(o => o));
  DetalleCategorias = <Industries industriesList={industriesListOrdered} slug={slugs[slugs.length - 1]} solutionsList={solutionsList} />;
  return (
    <main className="product">
      {imagenDestacada}
      <section className="checkout--content">
        <section className="checkout--address">
          <section className="product--main">
            <div className="product--info">
              <h1>{categoryName}</h1>
              {categoryDescripcion}
              {contenidoDestacado}
              {archivoAdjunto}
              <ClientBanner clientes={clientes} categoriasClientes={categoriasClientes} slug={slugs[slugs.length - 1]} />
              <div className="catalog--header-subcategory-industry-related-items"><a>Productos Relacionados</a></div>
              <div className="catalog--grid-container-rel">
                {DetalleCategorias}
              </div>
            </div>
          </section>
        </section>
        <section className="cart--summary">
          <header className="cart--summary-header-industry">
            <p>Industrias</p>
          </header>
          <aside className="cart--summary-total">
            <div className="catalog--grid-container-industry-header">
              {Categorias}
            </div>
          </aside>
        </section>
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
