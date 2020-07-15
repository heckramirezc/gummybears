import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';

import { addonsList } from './../../../store/Addons/Addons';

// UI
import UI from './OrdersDetails.ui';

// Utils
import { getTrackingOperations, getTrackingNumber } from '../../../helpers/orders/order_detail_utils';

class OrdersDetails extends Component {
  static contextTypes = {
    router: PropTypes.object,
  };

  constructor(...props) {
    super(...props);
    this.state = {
      order: [],
      partNumber: '',
      addonsList: [],
    };
  }

  componentDidMount() {
    document.getElementById('initial').scrollIntoView(true);
    this.ordersPerson();
    this.person();
    this.addonsList();
  }

  ordersPerson = async () => {
    const orderPersonResponse = await this.props.accountStore.ordersPerson();
    if (orderPersonResponse.success) {
      const str = this.context.router.history.location.pathname.split('/');
      const partNumber = str[str.length - 1];
      const order = orderPersonResponse.data.data.filter(or => or.external_referer === partNumber);
      this.setState({ order, partNumber });
    }
  }

  person = async () => {
    const person = await this.props.accountStore.dataPerson();
    if (person && !person.success) {
      this.context.router.history.push('/not-found');
    }
  }

  addonsList() {
    addonsList().then((res) => {
      this.setState({ addonsList: res.data[0].filter(x => x.enabled === true && x.show_home === false) });
    });
  }

  render() {
    const trackingEvents = getTrackingOperations(this.state.order);
    const trackingShipments = getTrackingNumber(this.state.order);

    return (
      <UI
        orders={this.state.order}
        partNumber={this.state.partNumber}
        trackingEvents={trackingEvents}
        trackingShipments={trackingShipments}
        addOnsList={this.state.addonsList}
      />
    );
  }
}

OrdersDetails.propTypes = {
  accountStore: PropTypes.shape({
    dataPerson: PropTypes.func,
    ordersPerson: PropTypes.func,
    orders: PropTypes.shape({
      data: PropTypes.shape({}),
    }),
  }).isRequired,
};

export default inject('accountStore')(observer(OrdersDetails));
