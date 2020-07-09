import React from 'react';
import PropTypes from 'prop-types';

// helpers
import helpers from './../../helpers/product';

// import image SVG format
import { icoPantalla, icoDiseno, icoCamara, icoRendimiento } from '../../helpers/svg';

const ProductSpecsUI = (props) => {
  const specs = helpers.arrayToObjectProductInfo(/attr-chars/gi, props.product, 'productSpace');
  return (
    <section className="product--specs">
      <div className="module">
        <h2>Características Principales</h2>
        <article>
          <i>{icoPantalla}</i>
          <h3>Pantalla</h3>
          { specs && Object.keys(specs).length ?
            <p>{ specs['attr-chars-main-pantalla'] }</p>
          : null }
        </article>
        <article>
          <i>{icoDiseno}</i>
          <h3>Materiales</h3>
          { specs && Object.keys(specs).length ?
            <p>{ specs['attr-chars-main-materiales'] }</p>
          : null }
        </article>
        <article>
          <i>{icoCamara}</i>
          <h3>Calidad de imagen</h3>
          { specs && Object.keys(specs).length ?
            <p>{ specs['attr-chars-main-calidad-de-imagen'] }</p>
          : null }
        </article>
        <article>
          <i>{icoRendimiento}</i>
          <h3>Batería</h3>
          { specs && Object.keys(specs).length ?
            <p>{ specs['attr-chars-main-pila'] }</p>
          : null }
        </article>
      </div>
    </section>
  );
};

ProductSpecsUI.propTypes = {
  product: PropTypes.arrayOf(PropTypes.shape({})),
};

ProductSpecsUI.defaultProps = {
  product: [],
};

export default ProductSpecsUI;
