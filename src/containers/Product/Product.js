import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

// Request
import { productsList } from './../../store/Catalog/Catalog';

// UI
import UI from './Product.ui';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      productsList: [],
    });
  }

  componentDidMount() {
    this.productsList();
  }

  componentDidUpdate(prevProps) {
    const coll = document.getElementsByClassName('colapsable');
    for (let i = 0, len = coll.length; i < len; i += 1) {
      coll[i].addEventListener('click', function () {
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        if (content.classList.contains('active')) {
          content.classList.remove('active');
        } else if (content.style.display === 'block') {
          content.style.display = 'none';
        } else {
          content.style.display = 'block';
        }
      });
    }
    const elementos = document.getElementsByClassName('lazyload');
    if (elementos && elementos.length && elementos.length !== 0) {
      Array.prototype.forEach.call(elementos, (elemento) => {
        elemento.src = elemento.dataset.src;
      });
      if (prevProps.location.pathname !== this.props.location.pathname) {
        // this.productResponse(this.props.location.pathname);
        setTimeout(() => { window.scrollTo(0, 0); }, 1000);
      }
    }
  }

  productsList() {
    productsList().then((res) => {
      this.setState({ productsList: res.data });
    });
  }

  render() {
    return (
      <UI
        productsList={this.state.productsList}
      />
    );
  }
}

Product.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  catalogStore: PropTypes.shape({
    catalog: PropTypes.func,
    inventoryStatusService: PropTypes.func,
  }).isRequired,
};

export default inject('catalogStore')(observer(Product));
