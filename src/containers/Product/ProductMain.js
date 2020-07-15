import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';

// UI
import UI from './ProductMain.ui';

class ProductMain extends Component {
  static contextTypes = {
    router: PropTypes.object,
  }

  constructor(...props) {
    super(...props);
    this.state = {
      cartInfo: {},
      gallery: 'zoom',
      printProductInfo: null,
      modalCartInfo: null,
      printProductQty: 1,
    };

    this.isEmpty = true;
    this.do360 = this.do360.bind(this);
    this.doZoom = this.doZoom.bind(this);
  }

  componentDidMount() {
    document.getElementById('initial').scrollIntoView(true);
    this.getCart();
  }

  getCart() {
    this.props.orderStore.getCart().then((res) => {
      if (res.success) this.isEmpty = false;
      if (res && res.data) {
        this.setState({ cartInfo: res.data.data });
      }
    });
  }

  do360() {
    this.setState({ gallery: '360' });
  }

  doZoom() {
    this.setState({ gallery: 'zoom' });
  }

  closePopup = () => {
    this.props.modals.closePopup();
  };

  deletePreviousCart = () => {
    const { items } = this.state.modalCartInfo;
    (items || []).map((data) => {
      this.props.orderStore.deleteToCart(data.part_number).then((res) => {
        if (res && res.success && res.data && res.data.data) {
          if (res.data.data.items.length === 0) {
            this.addToCart(this.state.printProductInfo, this.state.printProductQty, false);
          }
        }
        return res;
      });
      return data;
    });
  };

  validateCart = async (partNumber, productName, qty) => {
    const orderInfo = await this.props.orderStore.getCart();
    if (orderInfo && !orderInfo.success) {
      this.addToCart(partNumber, qty);
    } else if (orderInfo.data && orderInfo.data.data) {
      let total = 0;

      if (orderInfo.data && orderInfo.data.data && orderInfo.data.data.items.length) {
        const cartQty = ((orderInfo.data.data.items).slice()).map(data => data.quantity);
        for (let i = 0, len = cartQty.length; i < len; i += 1) {
          total += window.parseInt(cartQty[i]);
        }
      }

      this.setState({
        productName,
        printProductInfo: partNumber,
        printProductQty: qty,
        modalCartInfo: orderInfo.data.data,
      });

      if (total >= 1) {
        this.props.modals.openPopup('cart');
      } else {
        this.addToCart(partNumber, qty);
      }
    }
  }

  addToCart = async (partNumber, qty, modaStatus) => {
    const orderInfo = await this.props.orderStore.getCart();
    let init = 'user_warned';

    if (orderInfo && !orderInfo.success) {
      init = 'user_not_warned';
    }

    if (!partNumber) return console.log('Selecciona una capacidad válida'); // alert
    const response = await this.props.orderStore.addToCart(
      {
        part_number: partNumber,
        quantity: qty,
      },
      init,
    );

    if (response && response.success) {
      if (!modaStatus) {
        this.closePopup();
        this.context.router.history.push('/cart');
      }
    }

    return response;
  }

  render() {
    if (this.props.allProps && this.props.allProps.productName !== '') {
      return (
        <UI
          productInfo={this.props.allProps.product}
          cartInfo={this.state.cartInfo}
          color={this.props.allProps.color}
          size={this.props.allProps.size}
          images={this.props.allProps.images}
          productName={this.props.allProps.productName}
          pricing={this.props.allProps.pricing}
          colorSelected={this.props.allProps.colorSelected}
          sizeSelected={this.props.allProps.sizeSelected}
          addToCart={this.addToCart}
          validateCart={this.validateCart}
          do360={this.do360}
          doZoom={this.doZoom}
          gallery={this.state.gallery}
          modals={this.props.modals}
          printProductInfo={this.state.productName}
          closePopup={this.closePopup}
          deletePreviousCart={this.deletePreviousCart}
          isAvailable={this.props.allProps.isAvailable}
        />
      );
    } else {
      return null;
    }
  }
}

ProductMain.propTypes = {
  orderStore: PropTypes.shape({
    addToCart: PropTypes.func,
    getCart: PropTypes.func,
    getCartInfo: PropTypes.shape({}),
    warnedUserAction: PropTypes.func,
    deleteToCart: PropTypes.func,
  }).isRequired,

  allProps: PropTypes.shape({
    product: PropTypes.shape({}),
    color: PropTypes.string,
    size: PropTypes.string,
    productName: PropTypes.string,
    colorSelected: PropTypes.func,
    sizeSelected: PropTypes.func,
    images: PropTypes.arrayOf(PropTypes.string),
    pricing: PropTypes.shape({}),
    isAvailable: PropTypes.string,
  }),
  modals: PropTypes.shape({
    openPopup: PropTypes.func,
    closePopup: PropTypes.func,
  }),
};

ProductMain.defaultProps = {
  modals: {},
  allProps: {
    color: '',
    size: '',
    images: [],
    productName: '',
    colorSelected: () => {},
    sizeSelected: () => {},
    isAvailable: 'available',
  },
};

export default inject('orderStore', 'accountStore', 'modals')(observer(ProductMain));
