import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// components
import Cross from '../../components/Cross/Cross';
import ProductMain from './ProductMain';
import ProductSpecs from './ProductSpecs.ui';
import ProductInfo from './ProductInfo.ui';

const UI = (props) => {
  if (!props.productsList || !props.productsList.length || !props.productsList.length === 0) return null;
  let slugs = window.location.pathname.split(/(\/)/g);
  slugs = slugs.filter(x => x !== '/');
  const producto = props.productsList.find(x => x.slug === slugs[slugs.length - 1]);
  const productosRelacionados = props.productsList.filter(product => product.tecnologia.some(tecno => tecno === producto.tecnologia[0]));
  // productosRelacionados = productosRelacionados.filter(product => product.id !== producto.id);
  const ProductosRelacionados = productosRelacionados.map((productoRelacionado, key) => {
    if (productoRelacionado.id !== producto.id) {
      return (
        <div className="grid-item">
          <Link key={key} to={`/producto/${productoRelacionado.slug}`}>
            <img src={productoRelacionado.acf.small_image} alt={key} />
            <h3>{productoRelacionado.title.rendered}</h3>
          </Link>
        </div>
      );
    }
    return (
      <div className="grid-item active">
        <Link key={key} to={`/producto/${productoRelacionado.slug}`}>
          <img src={productoRelacionado.acf.small_image} alt={key} />
          <h3>{productoRelacionado.title.rendered}</h3>
        </Link>
      </div>
    );
  });

  const holamundo = (
    <main>
      <section className="product">
        <br />Hola Mundo!
        <div dangerouslySetInnerHTML={{ __html: producto.content.rendered }} />
        <ProductMain allProps={props} product={props.product} color={props.color} size={props.size} images={props.images} />
        <ProductSpecs product={props.product.data} />
        <ProductInfo
          product={props.product.data}
          handleTabs={props.handleTabs}
          handleBlocks={props.handleBlocks}
          handleSwitch={props.handleSwitch}
          pathName={props.pathname}
        />
      </section>
      <Cross slug={props.slug} />
    </main>
  );
  console.log(holamundo);
  return (
    <main className="product">
      <section className="checkout--content">
        <section className="checkout--address">
          <section className="product--main">
            <div className="product--info">
              <h1>{producto.title.rendered.toUpperCase()}</h1>
              <b>{producto.acf.short_description}</b>
              <div className="product--detail" dangerouslySetInnerHTML={{ __html: producto.content.rendered }} />
            </div>
          </section>
        </section>
        <section className="cart--summary">
          <header className="cart--summary-header">
            <p>Conozca más productos</p>
          </header>
          <aside className="cart--summary-total">
            <div className="product--grid-container-mas-productos">
              {ProductosRelacionados}
            </div>
          </aside>
        </section>
      </section>
    </main>
  );
};

UI.propTypes = {
  product: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  color: PropTypes.string,
  size: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string),
  handleTabs: PropTypes.func.isRequired,
  handleBlocks: PropTypes.func.isRequired,
  handleSwitch: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired,
  slug: PropTypes.string,
  productsList: PropTypes.arrayOf(PropTypes.shape({})),
};

UI.defaultProps = {
  product: {
    data: {},
  },
  color: '',
  size: '',
  images: [],
  slug: '',
  productsList: [],
};

export default UI;
