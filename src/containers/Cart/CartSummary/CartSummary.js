import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';

import { addonsList } from './../../../store/Addons/Addons';

// UI
import UI from './CartSummary.ui';

class CartSummary extends Component {
  constructor(...props) {
    super(...props);
    this.state = {
      cartInfo: {},
      addonsList: [],
    };
  }

  componentDidMount() {
    this.props.orderStore.getCart();
    this.addonsList();
  }

  addonsList() {
    addonsList().then((res) => {
      this.setState({ addonsList: res.data[0].filter(x => x.enabled === true && x.show_home === false), currentPage: 1 });
    });
  }

  render() {
    let cartInfo;
    const orderInfo = this.props.orderStore.getCartInfo;

    if (orderInfo.data && orderInfo.data.data && orderInfo.data.data.items.length) {
      cartInfo = orderInfo.data.data;
    }

    return (
      <UI
        cartInfo={cartInfo}
        addonsList={this.state.addonsList}
      />
    );
  }
}

CartSummary.propTypes = {
  orderStore: PropTypes.shape({
    getCart: PropTypes.func,
    getCartInfo: PropTypes.shape({}),
  }).isRequired,
};

export default inject('orderStore')(observer(CartSummary));
