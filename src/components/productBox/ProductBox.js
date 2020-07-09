import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UI from './ProductBox.ui';


class ProductBox extends Component {
  static contextTypes = {
    router: PropTypes.object,
  }

  constructor(...args) {
    super(...args);
    this.state = ({});
  }

  render() {
    return (
      <UI props={this.props.items} productLink={this.productLink} />
    );
  }
}

ProductBox.propTypes = {
  items: PropTypes.shape({}),
};

ProductBox.defaultProps = {
  items: {},
};

export default ProductBox;
