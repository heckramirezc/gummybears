import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// components
import Cross from '../../components/Cross/Cross';
import ProductMain from './ProductMain';
import ProductSpecs from './ProductSpecs.ui';
import ProductInfo from './ProductInfo.ui';

const UI = props => (
  <main>
    <section className="product">
      <div className="fastlinks">
        <section>
          <span />
          {/* <p><span>Para visualizar todo con respecto a tus órdenes de tienda ingresa a</span> <Link to="/account">Mi cuenta</Link></p> */}
        </section>
      </div>
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
};

UI.defaultProps = {
  product: {
    data: {},
  },
  color: '',
  size: '',
  images: [],
  slug: '',
};

export default UI;
