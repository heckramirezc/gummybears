import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import $ from 'jquery';

// Helpers
import validate from '../../../helpers/validate_form';

// UI
import UI from './PickupInStore.ui';

class PickupInStore extends Component {
  static contextTypes = {
    router: PropTypes.object,
  }

  constructor(...props) {
    super(...props);
    const billingForm = {
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
      fiscal_number: '',
      invoice_type: '',
      turn: '',
      day: '',
      month: '',
      year: '',
    };

    const customInfo = {
      dpi: '',
      dpiConfirm: '',
      allowed_recipient_1: '',
      allowed_recipient_2: '',
      referral_address: '',
      departamentoid: '',
      municipioid: '',
      pobladoid: '',
      nit: '',
      invoice_type: '',
      turn: '',
      fiscal_number: '',
      day: '',
      month: '',
      year: '',
    };

    this.internalData = {
      id: '',
      first_name: '',
      last_name: '',
      email_1: '',
      dpi: '',
      dpiConfirm: '',
      nit: '',
      phone_1: '',
      invoice_type: '',
      turn: '',
      fiscal_number: '',
      day: '',
      month: '',
      year: '',
    };

    // Create new object.
    const shippingForm = {
      ...billingForm,
    };

    this.state = {
      addressList: {},
      form_billing_info: billingForm,
      form_shipping_info: shippingForm,
      form_custom_info: customInfo,
      error: '',
    };
  }

  componentDidMount() {
    this.findStores();
    validate();
    this.switchBillingForm(false);
    this.toggleInvoiceType('');
    this.initUserInfo();
    this.orderInfo();
  }

  initUserInfo = async () => {
    const userInfo = await this.props.accountStore.dataPerson();
    if (userInfo.success && userInfo.data) {
      const info = userInfo.data.data.addresses.filter(add => add.nickname === 'Envio');
      // console.log('initUserInfo: ', info);
      const userBillingInfo = userInfo.data.data.addresses.filter(add => add.nickname === 'Facturacion');
      const internalData = {
        first_name: info[0].first_name || '',
        last_name: info[0].last_name || '',
        email_1: info[0].email_1 || '',
        dpi: info[0].fax_1 || '',
        fax_1: info[0].fax_1 || '',
        dpiConfirm: info[0].fax_1 || '',
        phone_1: info[0].phone_1 || '',
        invoice_type: info[0].invoice_type || '',
      };
      this.internalData = internalData;

      if (userBillingInfo.length) {
        const billing = {
          ...userBillingInfo[0],
          isChecked: false,
        };
        this.setState({ form_billing_info: billing });
      }
      this.setState({ internalData });
    }
  }

  findStores() {
    this.props.orderStore.addressList();
  }

  switchBillingForm = (addressMode) => {
    const addressForm = this.state;

    if (!addressMode) {
      addressForm.form_billing_info.same_shipping_and_billing_address = true;
      addressForm.form_shipping_info.same_shipping_and_billing_address = true;
      addressForm.form_billing_info.isChecked = false;
    } else {
      addressForm.form_billing_info.same_shipping_and_billing_address = false;
      addressForm.form_shipping_info.same_shipping_and_billing_address = false;
      addressForm.form_billing_info.isChecked = true;
    }
    console.log(addressForm);
    this.setState(addressForm);
  }

  toggleInvoiceType = (invoiceType) => {
    this.setState({ toggleInvoiceType: invoiceType });
  }

  orderInfo = async () => {
    const getCart = await this.props.orderStore.getCart();
    if ((getCart && getCart.data && getCart.data.data && !getCart.data.data.items.length) || !getCart.success) {
      this.context.router.history.push('/not-found');
    }
  }

  handleChange = (e, data) => {
    const newObj = {};
    let addressListData = {};
    const keys = data.split('.');
    const addressForm = this;
    let value = e.target.value;
    if (keys[0] === 'internalData' && keys[1] === 'fax_1') value = value.replace(/\D-+/g, '');
    addressForm[keys[0]][keys[1]] = value;
    const props = this.props.orderStore.addressListResponse;

    (props.data.data || []).map((res) => {
      newObj[res.store_code] = res;
      return res;
    });

    if (addressForm.internalData.id) {
      addressListData = newObj[addressForm.internalData.id];
    }

    this.setState({ ...addressForm, addressList: addressListData });
  }

  handleChangeAddress = (e, data) => {
    const keys = data.split('.');
    const addressForm = this.state;
    addressForm[keys[0]][keys[1]] = e.target.value;

    if (keys[0] === 'form_billing_info') {
      // const bSelectDptoIndex = document.getElementById('b_city');
      // const bSelectMpoIndex = document.getElementById('b_state_or_province_name');
      // const bPobIndex = document.getElementById('b_address_line_2');

      // const bIdDepto = bSelectDptoIndex.options[bSelectDptoIndex.selectedIndex].id;
      // const bIdMpo = bSelectMpoIndex.options[bSelectMpoIndex.selectedIndex].id;
      // const bIdPob = bPobIndex.options[bPobIndex.selectedIndex].id;

      const bObj = {
        // departamentoid: bIdDepto,
        // municipioid: bIdMpo,
        // pobladoid: bIdPob,
      };

      this.setState({
        ...addressForm,
        form_billing_custom_info: {
          ...addressForm.form_billing_custom_info,
          ...bObj,
        },
        form_billing_info: {
          ...addressForm.form_billing_info,
          city: addressForm.form_billing_info.city,
          state: addressForm.form_billing_info.state_or_province_name,
          addressLine2: addressForm.form_billing_info.address_line_2,
          fiscal_number: addressForm.form_billing_info.fiscal_number,
          b_twirl: addressForm.form_billing_info.b_twirl,

        },
      });
    }
  }

  handleData() {
    if (this.state.form_billing_info.same_shipping_and_billing_address) {
      this.mergeShippingWithBillingInfo();
    }
    /* const newDpiParam = {
      numero_documento_cliente: this.state.internalData.fax_1,
    }; */

    const newMACParam = {
      id_client: this.state.internalData.fax_1,
      fecha_nac: `${this.state.internalData.day}/${this.state.internalData.month}/${this.state.internalData.year}`,
    };

    const newNitParam = {
      numero_documento_cliente: this.state.internalData.nit ? this.state.internalData.nit : '',
    };
    const validateInvoiceType = this.state.internalData.invoice_type === 'CF';
    this.props.orderStore.validateNit(newNitParam).then((res) => {
      if ((res && res.data && res.data.data && res.data.data.Result === true) || !validateInvoiceType) {
        this.props.orderStore.validateMaxActiveClient(newMACParam).then((activClient) => {
          if (activClient.data && activClient.data.data && activClient.data.status) {
            if (activClient.data.data.Resultado === '1') {
              this.shippingAddressRegister();
            } else if (activClient.data.data.Resultado === '2') {
              this.context.router.history.push('/checkout/purchase-limit');
            } else if (activClient.data.data.Resultado === '3') {
              this.setState({ error: 'Ingresa un DUI válido.' });
            } else {
              this.setState({ error: 'Error al procesar la solicitud.' });
            }
          } else {
            this.setState({ error: 'Error al procesar la solicitud.' });
          }
        });
      } else {
        this.setState({ error: 'Ingresa un NIT valido.' });
      }
      return res;
    }).catch(err => err);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const isIE = (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > -1);
    if (isIE) this.handleData();
    else if (!isIE && $('form').valid()) this.handleData();
  }

  mergeShippingWithBillingInfo = () => {
    const addressForm = {
      first_name: this.internalData.first_name,
      last_name: this.internalData.last_name,
      address_line_1: this.state.addressList.address.address1,
      address_line_2: '',
      address_line_3: '',
      city: this.state.addressList.address.city,
      state_or_province_name: this.state.addressList.address.state,
      country: 'SV',
      postal_code: this.state.addressList.address.zipCode,
      email_1: this.internalData.email_1,
      email_2: '',
      phone_1: this.state.addressList.address.phone1,
      phone_2: '',
      fax_1: this.internalData.email_1,
      fax_2: '',
      b_twirl: '',
      custom: {
        departamentoid: this.state.addressList.address.custom_info[0].value,
        municipioid: this.state.addressList.address.custom_info[1].value,
        pobladoid: this.state.addressList.address.custom_info[2].value,
        referral_address: this.state.addressList.address.betweenStreets,
      },
      same_shipping_and_billing_address: true,
      isChecked: false,
    };
    if (this.internalData.invoice_type === 'CF') {
      addressForm.address_line_1 = document.getElementById('b_address_line_1').value;
    }
    const mergeAddress = {
      form_billing_info: {
        ...addressForm,
      },
    };

    this.setState(mergeAddress);
  }

  shippingAddressRegister = () => {
    const addressForm = {
      first_name: this.internalData.first_name,
      last_name: this.internalData.last_name,
      address_line_1: `${this.state.addressList.address.address1} Agencia ${this.state.addressList.locales.es_sv.name}`,
      address_line_2: '',
      address_line_3: '',
      city: this.state.addressList.address.city,
      state_or_province_name: this.state.addressList.address.state,
      country: 'SV',
      postal_code: this.state.addressList.address.zipCode,
      email_1: this.internalData.email_1,
      email_2: '',
      phone_1: this.state.addressList.address.phone1,
      phone_2: '',
      fax_1: this.internalData.fax_1,
      fax_2: '',

      custom: {
        departamentoid: this.state.addressList.address.custom_info[0].value,
        municipioid: this.state.addressList.address.custom_info[1].value,
        pobladoid: this.state.addressList.address.custom_info[2].value,
        referral_address: this.state.addressList.address.betweenStreets,
        dpi: this.internalData.fax_1,
        invoice_type: this.internalData.invoice_type,
        turn: this.internalData.turn,
        day: this.internalData.day,
        month: this.internalData.month,
        year: this.internalData.year,
        fiscal_number: this.internalData.fiscal_number,
      },
      same_shipping_and_billing_address: true,
      isChecked: false,
    };

    this.props.orderStore.addShippingAddress(addressForm).then((res) => {
      console.log(res.action);
      if (res.success && res.action === 'shippingAddress') {
        this.billingAddressRegister();
      } else {
        const isIE = (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > -1);
        if (isIE) alert('Error al registrar tu dirección de envío');
        else {
          this.setState({ error: 'Error al registrar tu dirección de envío.' });
        }
      }
    });
  }

  billingAddressRegister() {
    // assign custom info into billing address form.
    const newObj = { ...this.state.form_billing_custom_info, nit: this.state.internalData.nit };

    if (newObj && newObj.dpiConfirm) delete newObj.dpiConfirm;
    // create custom info object.
    const objCustomOInfo = Object.keys(newObj).reduce((a, b) => {
      if (newObj[b] !== '') a[b] = newObj[b];
      return a;
    }, {});
    console.log(this.state.internalData.invoice_type);
    let bFistName = document.getElementById('s_first_name');
    let bLastName = document.getElementById('s_last_name');
    let bMail = document.getElementById('s_email_1');
    console.log(bMail);
    let fistName = bFistName.value;
    let lastName = bLastName.value;
    let mail = bMail.value;

    this.state.form_billing_info.first_name = fistName;
    this.state.form_billing_info.last_name = lastName;
    this.state.form_billing_info.email_1 = mail;
    if (this.state.form_billing_info.isChecked) {
      bFistName = document.getElementById('b_first_name');
      bLastName = document.getElementById('b_last_name');
      const bPhone = document.getElementById('b_phone_1');
      bMail = document.getElementById('b_email_1');

      fistName = bFistName.value;
      lastName = bLastName.value;
      const phone = bPhone.value;
      mail = bMail.value;

      this.state.form_billing_info.first_name = fistName;
      this.state.form_billing_info.last_name = lastName;
      this.state.form_billing_info.phone_1 = phone;
      this.state.form_billing_info.email_1 = mail;
    }


    // assign custom info into shipping address form.
    const newBillingAddress = {
      ...this.state.form_billing_info,
      custom: objCustomOInfo,
    };
    // debugger;
    this.props.orderStore.addBillingAddress(newBillingAddress).then((res) => {
      if (res.success && res.action === 'billingAddress') {
        this.props.paymentsStore.CredomaticPonchout({
          order_id: this.props.orderStore.getCartInfo.data.data.external_referer,
        }).then((resOrderBegin) => {
          if (resOrderBegin.success) {
            this.props.orderStore.orderBeginResponse = resOrderBegin;
            this.context.router.history.push({ pathname: '/checkout/payment', state: { pickupInStore: true } });
          } else {
            this.setState({ error: 'Error al procesar la solicitud.' });
          }
        });
      } else {
        this.setState({ error: 'Error al registrar tu dirección de facturación.' });
      }
    });
  }

  render() {
    const props = this.props.orderStore.addressListResponse;
    const addressText = this.state.addressList;

    return (
      <UI
        error={this.state.error}
        addressList={props.data}
        storeAddress={this.internalData}
        handleChange={this.handleChange}
        addressText={addressText}
        handleSubmit={this.handleSubmit}
        switchBillingForm={this.switchBillingForm}
        billingAddress={this.state.form_billing_info}
        city={this.state.form_billing_info.city}
        state={this.state.form_billing_info.state_or_province_name}
        handleChangeAddress={this.handleChangeAddress}
        toggleInvoiceType={this.toggleInvoiceType}
        customInfo={this.customInfo}
      />
    );
  }
}

PickupInStore.propTypes = {
  paymentsStore: PropTypes.shape({
    CredomaticPonchout: PropTypes.func,
  }).isRequired,
  orderStore: PropTypes.shape({
    addressList: PropTypes.func,
    addressListResponse: PropTypes.shape({}),
    addShippingAddress: PropTypes.func,
    addBillingAddress: PropTypes.func,
    validateDpi: PropTypes.func,
    validateMaxActiveClient: PropTypes.func,
    getCart: PropTypes.func,
  }),
  accountStore: PropTypes.shape({
    dataPerson: PropTypes.func,
  }),
};

PickupInStore.defaultProps = {
  orderStore: {},
  accountStore: {},
};

export default inject('paymentsStore', 'orderStore', 'accountStore')(observer(PickupInStore));
