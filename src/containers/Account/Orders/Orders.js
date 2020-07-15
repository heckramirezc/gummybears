import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import $ from 'jquery';

// UI
import UI from './Orders.ui';

// Helpers
import { getProductsDaysAgo, getProductsMonthsAgo, getProductsStatus } from '../../../helpers/orders/order_utils';

class Orders extends Component {
  static contextTypes = {
    router: PropTypes.object,
  };

  constructor(...props) {
    super(...props);
    this.state = {
      orderHistory: [],
      orderHistoryOriginal: [],
    };
    this.isActive = this.isActive.bind(this);
  }


  componentDidMount() {
    document.getElementById('initial').scrollIntoView(true);
    this.ordersPerson();
    this.person();
  }

  ordersPerson = async () => {
    const order = await this.props.accountStore.ordersPerson();
    if (order.success && order.data) {
      const orderHistory = order.data.data;
      this.setState({ orderHistory });
    }
  }

  person = async () => {
    const person = await this.props.accountStore.dataPerson();
    if (person && !person.success) {
      this.context.router.history.push('/not-found');
    }
  }

  handleChangeOrderHistory = (eve) => {
    let orderHistory;
    const orderHostoryData = this.props.accountStore.orders.data.data;
    if (eve.target.value === 'days') {
      orderHistory = getProductsDaysAgo(orderHostoryData);
      this.setState({ orderHistory });
    } else if (eve.target.value === 'month') {
      orderHistory = getProductsMonthsAgo(orderHostoryData);
      this.setState({ orderHistory });
    } else if (eve.target.value === 'all') {
      this.ordersPerson();
    }
  }

  isActive(e) {
    $('.order--filters-status a').removeClass('active');
    $(e.currentTarget).addClass('active');

    let orderHistory = [];
    if (Object.keys(this.state.orderHistory).length > 0) {
      orderHistory = this.state.orderHistory;
    } else if (this.props.accountStore.orders.success && this.props.accountStore.orders.data && this.props.accountStore.orders.data.data) {
      orderHistory = this.props.accountStore.orders.data.data;
    }

    if ((e.target.value !== '' || e.target.value) && e.target.value !== 'ALL') {
      orderHistory = getProductsStatus(this.props.accountStore.orders.data.data, e.target.value);
      this.setState({ orderHistory });
    } else if (e.target.value === 'ALL') this.ordersPerson();
  }

  render() {
    return (
      <UI
        isActive={this.isActive}
        orderHistory={this.state.orderHistory}
        handleChangeOrderHistory={this.handleChangeOrderHistory}
      />
    );
  }
}

Orders.propTypes = {
  accountStore: PropTypes.shape({
    dataPerson: PropTypes.func,
    ordersPerson: PropTypes.func,
    orders: PropTypes.shape({
      data: PropTypes.shape({
        data: PropTypes.shape({}),
      }),
      success: PropTypes.bool,
    }),
  }).isRequired,
};

export default inject('accountStore')(observer(Orders));
