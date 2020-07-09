import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import $ from 'jquery';

import { addonsList } from './../../store/Addons/Addons';

// UI
import UI from './Cart.ui';


class Cart extends Component {
  static contextTypes = {
    router: PropTypes.object,
  }

  constructor(...props) {
    super(...props);
    this.state = {
      accountStore: {},
      warnState: 'warned_once',
      addonsList: [],
    };
    this.isEmpty = true;
  }

  componentDidMount() {
    document.getElementById('initial').scrollIntoView(true);
    this.dataPerson();
    this.addonsList();
    this.deleteAddOns();
    this.productWarn();
  }

  addonsList() {
    addonsList().then((res) => {
      this.setState({ addonsList: res.data[0].filter(x => x.enabled === true && x.auto_cart === true) });
    });
  }

  dataPerson = async () => {
    const dataPerson = await this.props.accountStore.dataPerson();
    let checkoutRedirect;
    if (dataPerson && !dataPerson.success) {
      checkoutRedirect = (<a onClick={() => this.openModal()}><span>Continuar</span></a>);
    } else {
      checkoutRedirect = <a><span onClick={this.addAddOns}>Continuar</span></a>;
    }
    this.setState({ checkoutRedirect });
  }

  deleteAddOns = async () => {
    let filt;
    const getCart = await this.props.orderStore.getCart();

    // filtrar el part number que pertenece a los addons.
    if (getCart.success && getCart.data && getCart.data.data) {
      const { items } = getCart.data.data || [];
      await addonsList().then((res) => {
        const addonslist = res.data[0].filter(x => x.enabled === true && x.auto_cart === true);
        filt = items.filter(e => addonslist.some(x => x.item_part_number === e.part_number));
      });
    }

    if (filt && filt.length) {
      filt.forEach((e) => {
        this.deleteItem(e.part_number);
      });
    } else this.deleteItemsNotAllowed();
  }

  deleteItemsNotAllowed = async () => {
    const getCart = await this.props.orderStore.getCart();
    if (getCart.success && getCart.data && getCart.data.data) {
      const { items } = getCart.data.data || [];
      if (items.length > 1) {
        const partNumer = items[0].part_number;

        const deleteCart = await this.props.orderStore.deleteToCart(partNumer);
        if (deleteCart.success && deleteCart.data) {
          const refresh = await this.props.orderStore.refreshOrder();
          if (refresh.success && refresh.data) {
            this.props.orderStore.getCart();
          }
        }
      } else if (items[0].quantity > 1) {
        const partNumer = items[0].part_number;
        const response = await this.props.orderStore.deleteToCart(partNumer);
        if (response.success && response.data) this.props.orderStore.addToCart({ part_number: partNumer, quantity: 1 });
      }
    }
  }

  addAddOns = async () => {
    let filt;
    const getCart = await this.props.orderStore.getCart();

    // filtrar el part number que pertenece a la tarjeta de prepago.
    if (getCart.success && getCart.data && getCart.data.data) {
      const { items } = getCart.data.data || [];
      filt = items.filter(e => this.state.addonsList.some(x => x.item_part_number === e.part_number));
    }

    if (filt && filt.length) {
      this.context.router.history.push('/checkout/address');
    } else {
      const success = [];
      const error = [];
      await Promise.all(this.state.addonsList.map(async (e) => {
        const response = await this.props.orderStore.addToCart({
          part_number: e.item_part_number,
          quantity: e.quantity,
        });
        if (response.success && response.action === 'addToCart') {
          success.push(true);
        } else if (!response.success && response.action === 'addToCart' && response.error.data.errors[0]) {
          success.push(false);
          error.push(response.error.data.errors[0]);
        } else {
          success.push(false);
          error.push('Servicio no diponible.');
        }
      }));
      if (success && success.length === this.state.addonsList.length && (error || error.length === 0)) {
        this.context.router.history.push('/checkout/address');
      } else if (error && error.length > 0) {
        console.log('response : ', error[0]);
        this.state.cardMessageError = error[0];
      }
    }
  }

  deleteItem = async (partNumber) => {
    const response = await this.props.orderStore.deleteToCart(partNumber);
    if (response.success) {
      this.deleteItemsNotAllowed();
    }
  }

  productWarn = async () => {
    const getCart = await this.props.orderStore.getCart();
    const dataPerson = await this.props.accountStore.dataPerson();
    const orders = await this.props.accountStore.ordersPerson();

    if (!this.props.orderStore.warnedUser) {
      this.setState({ warnState: 'not_warned' });
    } else {
      this.setState({ warnState: 'warned_once' });
    }

    if (!getCart.success) {
      this.setState({ warnState: 'not_warned' });
    } else if (getCart && getCart.data && getCart.data.data) {
      await this.props.orderStore.getCart('user_warned');
      if (getCart.data.data.items && getCart.data.data.items.length === 0) this.setState({ warnState: 'warned_once' });
    } else {
      this.setState({ warnState: 'warned_once' });
    }

    if (dataPerson && dataPerson.success) {
      if (orders && orders.success && orders.data && orders.data.data) {
        this.setState({ warnState: 'warned_once' });
      }
    }
  }

  openModal() {
    $('.modal').fadeIn();
    $('.modal--customer').addClass('active');
  }

  toggleModalNotification() {
    $('.ui--modal-notification').toggleClass('active');
  }

  goTop() {
    document.getElementById('initial').scrollIntoView(true);
  }

  render() {
    const isGuest = this.props.accountStore.person.userGuest;
    let cartInfo;
    const orderInfo = this.props.orderStore.getCartInfo;
    let checkoutRedirect;
    let total = 0;

    if (orderInfo.data && orderInfo.data.data && orderInfo.data.data.items.length) {
      const cartQty = ((orderInfo.data.data.items).slice()).map(qty => qty.quantity);

      for (let i = 0, len = cartQty.length; i < len; i += 1) {
        total += window.parseInt(cartQty[i]);
      }

      cartInfo = orderInfo.data.data;
    }

    if (orderInfo && orderInfo.data && orderInfo.data.data && orderInfo.data.data.items.length) {
      this.isEmpty = false;
    } else {
      this.isEmpty = true;
    }

    if (this.state.checkoutRedirect) {
      if (total > 1) {
        checkoutRedirect = <a className="cart--limit-msg" onClick={() => { this.goTop(); }}><span>Excediste el número de items agregados.</span></a>;
      } else {
        checkoutRedirect = this.state.checkoutRedirect;
      }
    }
    return (
      <UI
        cartInfo={cartInfo}
        isEmpty={this.isEmpty}
        checkoutRedirect={checkoutRedirect}
        deleteItem={this.deleteItem}
        total={total}
        cartModal={this.toggleModalNotification}
        isGuest={isGuest}
        warnState={this.state.warnState}
        cardMessageErrorProp={this.state.cardMessageError}
        addOnsList={this.state.addonsList}
      />
    );
  }
}

Cart.propTypes = {
  accountStore: PropTypes.shape({
    dataPerson: PropTypes.func,
    ordersPerson: PropTypes.func,
    person: PropTypes.shape({
      data: PropTypes.shape({}),
      success: PropTypes.bool,
      userGuest: PropTypes.bool,
    }),
  }),
  orderStore: PropTypes.shape({
    addToCart: PropTypes.func,
    getCart: PropTypes.func,
    deleteToCart: PropTypes.func,
    onUpdateCart: PropTypes.func,
    warnedUser: PropTypes.bool,
    refreshOrder: PropTypes.func,
    getCartInfo: PropTypes.shape({
      data: PropTypes.shape({
        data: PropTypes.shape({
          items: PropTypes.shape({}),
        }),
      }),
    }),
  }),
};

Cart.defaultProps = {
  accountStore: {},
  orderStore: {},
};

export default inject('orderStore', 'accountStore')(observer(Cart));
