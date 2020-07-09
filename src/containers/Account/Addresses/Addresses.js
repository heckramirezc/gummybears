import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import _ from 'lodash';
// UI
import UI from './Addresses.ui';

class Addresses extends Component {
  static contextTypes = {
    router: PropTypes.object,
  }

  constructor(...props) {
    super(...props);
    this.state = {};
  }

  componentDidMount() {
    document.getElementById('app').scrollIntoView(true);
    this.getPersonInfo();
  }

  getPersonInfo = async () => {
    const person = await this.props.accountStore.dataPerson();
    if (person && !person.success) {
      this.context.router.history.push('/not-found');
    }
  }

  /**
   * @param {string} addressType - BillingAddress or ShippingAddress or shippingAndBillingAddress
   */
  registerAddressForm = (addressType) => {
    this.context.router.history.push('/account/addresses-edit', addressType);
  }

  render() {
    const { person } = this.props.accountStore;
    let shipping = [];
    let billing = [];

    if (person.success) {
      const { addresses } = person.data.data;
      shipping = _.filter(addresses, { nickname: 'Envio' });
      billing = _.filter(addresses, { nickname: 'Facturacion' });
      billing[0].city = '';
      billing[0].state_or_province_name = '';
      billing[0].country = '';
      console.log(billing);
    }

    return (
      <UI
        registerAddressForm={this.registerAddressForm}
        billing={billing[0] || []}
        shipping={shipping[0] || []}
      />
    );
  }
}

Addresses.propTypes = {
  accountStore: PropTypes.shape({
    dataPerson: PropTypes.func,
    person: PropTypes.shape({}),
  }),
};

Addresses.defaultProps = {
  accountStore: {},
};

export default inject('accountStore')(observer(Addresses));
