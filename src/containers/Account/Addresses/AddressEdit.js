import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import $ from 'jquery';

// Helpers
import validate from '../../../helpers/validate_form';
import { twoDigitsFormatter } from '../../../helpers/formatter';

// UI
import UI from './AddressEdit.ui';

class AddressEdit extends Component {
  static contextTypes = {
    router: PropTypes.object,
  }

  constructor(...props) {
    super(...props);

    const addressForm = {
      first_name: '',
      last_name: '',
      address_line_1: '',
      address_line_2: '',
      address_line_3: '',
      city: '',
      state_or_province_name: '',
      country: 'SV',
      postal_code: '00000',
      email_1: '',
      email_2: '',
      phone_1: '',
      phone_2: '',
      fax_1: '',
      fax_2: '',
      same_shipping_and_billing_address: true,
      isChecked: false,
    };

    const addressFormBilling = {
      ...addressForm,
    };

    this.state = {
      addressForm,
      addressFormBilling,
      email: '',
      typeAddress: null,
      hasData: false,
    };
  }

  componentDidMount() {
    document.getElementById('initial').scrollIntoView(true);
    this.registerTypeAddress();
    this.getPersonInfo();
    validate();
  }

  getPersonInfo = async () => {
    const dataPerson = await this.props.accountStore.dataPerson();

    if (dataPerson && !dataPerson.success) {
      this.context.router.history.push('/not-found');
    }

    if (dataPerson.success && dataPerson.data) {
      const person = dataPerson.data.data.addresses;
      // console.log('person: ', person);
      if (this.state.typeAddress === 'billingAddress') {
        const dataBillingAddress = person.filter(dataAddress => dataAddress.nickname === 'Facturacion');
        if (dataBillingAddress.length) {
          const addressForm = { ...dataBillingAddress[0] };
          // console.log('...dataBillingAddres[0]: ', addressForm);
          this.setState({ addressForm });
        }
      } else if (this.state.typeAddress === 'shippingAddress') {
        const dataShhippingAddress = person.filter(dataAddress => dataAddress.nickname === 'Envio');
        const dataBillingAddress = person.filter(dataAddress => dataAddress.nickname === 'Facturacion');
        if (dataShhippingAddress.length) {
          const addressForm = { ...dataShhippingAddress[0] };
          this.setState({ addressForm });
        }
        if (dataBillingAddress.length) {
          const addressFormBilling = { ...dataBillingAddress[0] };
          this.setState({ addressFormBilling, hasData: true });
        }
        // console.log('STATE: ', this.state);
      }
      this.setState({ email: dataPerson.data.data.logon_id });
      // test@address-edit
    }
  }

  setDataAddress(data) {
    const addressForm = {
      ...data,
    };
    return addressForm;
  }

  registerTypeAddress() {
    this.setState({ typeAddress: this.props.location.state });
  }

  handleChange = (e, data) => {
    const keys = data.split('.');
    const addressForm = this.state;
    addressForm[keys[0]][keys[1]] = e.target.value;

    this.setState(addressForm);
  }

  handleData() {
    const selectDptoIndex = document.getElementById('a_state_or_province_name');
    const selectMpoIndex = document.getElementById('a_city');
    let objCustomOInfo;
    if (selectDptoIndex) {
      const idDepto = selectDptoIndex.selectedOptions[0].id;
      const idMpo = selectMpoIndex.selectedOptions[0].id;
      const newObj = {
        departamentoid: twoDigitsFormatter(idDepto),
        municipioid: twoDigitsFormatter(idMpo),
      };
      objCustomOInfo = Object.keys(newObj).reduce((a, b) => {
        if (newObj[b] !== '') a[b] = newObj[b];
        return a;
      }, {});
    }
    switch (this.state.typeAddress) {
      case 'shippingAddress':
        this.registerShippingAddress(this.state.addressForm, objCustomOInfo, false);
        break;
      case 'billingAddress':
        this.registerBillingAddress(this.state.addressForm, objCustomOInfo);
        break;
      default:
        this.registerShippingAddress(this.state.addressForm, objCustomOInfo, true);
        break;
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const isIE = (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > -1);
    if (isIE) this.handleData();
    else if (!isIE && $("form[name='address_edit']").valid()) this.handleData();
  };

  registerShippingAddress = async (addressForm, objCustomOInfo) => {
    addressForm.email_1 = this.state.email;
    const newShippingAddress = {
      ...addressForm,
      custom: objCustomOInfo,
    };

    const response = await this.props.accountStore.personShippingAddress(newShippingAddress);

    if (response.success) {
      let immutableBillingInfo;
      if (this.state.hasData) {
        immutableBillingInfo = this.state.addressFormBilling;
        immutableBillingInfo.first_name = addressForm.first_name;
        immutableBillingInfo.last_name = addressForm.last_name;
        immutableBillingInfo.phone_1 = addressForm.phone_1;
      } else {
        immutableBillingInfo = newShippingAddress;
      }
      const responseBill = await this.props.accountStore.personBillingAddress(immutableBillingInfo);
      if (responseBill.success) this.context.router.history.push('/account/addresses', '');
      // if (switches) {
      //   this.registerBillingAddress(addressForm);
      // } else {
      //   this.context.router.history.push('/account/addresses', '');
      // }
    }
  }

  registerBillingAddress = async (addressForm, objCustomOInfo) => {
    addressForm.email_1 = this.state.email;
    const newBillingAddress = {
      ...addressForm,
      custom: objCustomOInfo,
    };

    const response = await this.props.accountStore.personBillingAddress(newBillingAddress);

    if (response.success) {
      this.context.router.history.push('/account/addresses', '');
    }
  }

  render() {
    return (
      <UI
        addressForm={this.state.addressForm}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        city={this.state.addressForm.city}
        state={this.state.addressForm.state_or_province_name}
        typeAddress={this.state.typeAddress}
      />
    );
  }
}

AddressEdit.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.string,
  }),
  accountStore: PropTypes.shape({
    personShippingAddress: PropTypes.func,
    personBillingAddress: PropTypes.func,
    dataPerson: PropTypes.func,
  }),
};

AddressEdit.defaultProps = {
  accountStore: {},
  location: {},
};

export default inject('accountStore')(observer(AddressEdit));
