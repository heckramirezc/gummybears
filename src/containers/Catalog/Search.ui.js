// component
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

// Components
import ProductBox from './../../components/productBox/ProductBox';

const CatalogGrid = ({ productInfo, addonsList }) => {
  const items = (productInfo || []).map((v, i) => {
    const keys = `catalog--${i}`;
    if (addonsList.some(x => x.part_number === v.part_number)) return <NotFound />;
    return <ProductBox items={v} key={keys} />;
  });

  return (
    <section className="search--grid">
      { items }
      <article className="grid" />
      <article className="grid" />
      <article className="grid" />
    </section>
  );
};

const NotFound = () => {
  const metaTitle = document.location.pathname.replace('/search/', '').replace(/%20/g, ' ');
  return (
    <section className="search--notfound">
      <p>Lo sentimos la búsqueda <b>{metaTitle}</b> no ha coincidido con ningún equipo.</p>
      <ul>
        <li>Intenta de nuevo usando:</li>
        <li><span>Términos más generales</span></li>
        <li><span>Revisando la ortografía</span></li>
      </ul>
    </section>
  );
};

const UI = (props) => {
  const productList = props.productList;
  const results = productList.length > 0;
  const metaTitle = document.location.pathname.replace('/search/', '').replace(/%20/g, ' ');
  return (
    <main>
      <Helmet title={`Resultados: ${metaTitle} | ${process.env.COUNTRY}`} />
      <section className="catalog">
        <header className="catalog--header">
          <h1>Resultados de búsqueda: <b>{metaTitle}</b></h1>
        </header>
        {results ? <CatalogGrid productInfo={props.productList} eSpot={props.eSpot} addonsList={props.addonsList} /> : <NotFound />}
      </section>
    </main>
  );
};

UI.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.shape({})),
  eSpot: PropTypes.shape({}),
  addonsList: PropTypes.arrayOf(PropTypes.shape({})),
};

UI.defaultProps = {
  productList: [],
  eSpot: {},
  addonsList: [],
};

CatalogGrid.propTypes = {
  productInfo: PropTypes.arrayOf(PropTypes.shape({})),
  addonsList: PropTypes.arrayOf(PropTypes.shape({})),
};

CatalogGrid.defaultProps = {
  productInfo: [],
  addonsList: [],
};

export default UI;
