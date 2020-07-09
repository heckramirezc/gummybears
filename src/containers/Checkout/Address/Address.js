import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { TimelineLite, TweenLite } from 'gsap/TweenMax';
import PropTypes from 'prop-types';
import $ from 'jquery';

// Helpers
import validate from '../../../helpers/validate_form';
import { twoDigitsFormatter } from '../../../helpers/formatter';
import { addonsList } from './../../../store/Addons/Addons';

// Components
import UI from './Address.ui';

class AddressCheckout extends Component {
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
      person_2: '',
      references_1: '',
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

    // Create new object.
    const shippingForm = {
      ...billingForm,
    };

    const customInfo = {
      dpi: '',
      dpiConfirm: '',
      allowed_recipient_1: '',
      allowed_recipient_2: '',
      referral_address: '',
      departamentoid: '',
      municipioid: '',
      nit: '',
      invoice_type: '',
      turn: '',
      birthDay: '',
      birthMonth: '',
      birthYear: '',
    };

    const customBillingInfo = {
      ...customInfo,
    };

    this.state = {
      form_billing_info: billingForm,
      form_shipping_info: shippingForm,
      form_custom_info: customInfo,
      form_billing_custom_info: customBillingInfo,
      custom_info: [],
      showForm: true,
      deptoIndex: 0,
      mpoIndex: 0,
      error: '',
      state: null,
      mergeAddress: false,
    };

    // Bind
    this.switchBillingForm = this.switchBillingForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleAddress = this.toggleAddress.bind(this);
    this.toggleInvoiceType = this.toggleInvoiceType.bind(this);
  }

  componentDidMount() {
    document.getElementById('app').scrollIntoView(true);
    this.getUserInfo();
    this.renderSteps();
    this.switchBillingForm(false);
    validate();
    this.toggleAddressReturn();
    this.toggleInvoiceType('');
    this.orderInfo();
    this.addAddOns();
  }


  /**
   * join billing and shipping addresses.
   * @param {boolean} addressMode
   * @return {obj}
   */
  switchBillingForm(addressMode) {
    const addressForm = this.state;

    if (!addressMode) {
      addressForm.form_billing_info.same_shipping_and_billing_address = true;
      addressForm.form_shipping_info.same_shipping_and_billing_address = true;
      addressForm.mergeAddress = true;
      addressForm.form_billing_info.isChecked = false;
    } else {
      addressForm.form_billing_info.same_shipping_and_billing_address = false;
      addressForm.form_shipping_info.same_shipping_and_billing_address = false;
      addressForm.mergeAddress = false;
      addressForm.form_billing_info.isChecked = true;
    }

    this.setState(addressForm);
  }

  toggleAddress() {
    this.setState({ showForm: !this.state.showForm });
  }

  toggleInvoiceType(invoiceType) {
    this.setState({ toggleInvoiceType: invoiceType });
  }
  toggleAddressReturn() {
    if (this.props.location.state && this.props.location.state.pickupInStore && this.props.location.state.pickupInStore !== undefined && this.props.location.state.pickupInStore === true) {
      this.setState({ showForm: false });
    }
  }

  orderInfo = async () => {
    const getCart = await this.props.orderStore.getCart();
    const personResponse = await this.props.accountStore.dataPerson();

    if (personResponse && !personResponse.success) {
      this.context.router.history.push('/not-found');
    }

    if ((getCart && getCart.data && getCart.data.data && !getCart.data.data.items.length) || !getCart.success) {
      this.context.router.history.push('/not-found');
    } else {
      let allowedRecipient1 = '';
      let allowedRecipient2 = '';
      const shippingInfo = getCart.data.data.items[0].shipping_info;
      if (Object.keys(shippingInfo).length) {
        const custom = shippingInfo.custom_info;
        const recipient1 = custom.filter(key => key.key === 'allowed_recipient_1');
        const recipient2 = custom.filter(key => key.key === 'allowed_recipient_2');
        if (recipient1.length) allowedRecipient1 = recipient1[0].value;
        if (recipient2.length) allowedRecipient2 = recipient2[0].value;

        const customInfo = {
          dpi: '',
          dpiConfirm: '',
          allowed_recipient_1: allowedRecipient1,
          allowed_recipient_2: allowedRecipient2,
          referral_address: '',
          departamentoid: '',
          municipioid: '',
          pobladoid: '',
          nit: '',
          invoice_type: '',
          turn: '',
        };

        this.setState({ form_custom_info: customInfo });
      }
    }
  }

  handleChange = (e, data) => {
    const keys = data.split('.');
    const addressForm = this.state;
    let value = e.target.value;
    if (keys[0] === 'form_shipping_info' && keys[1] === 'fax_1') value = value.replace(/\D-+/g, '');
    addressForm[keys[0]][keys[1]] = value;
    const selectDptoIndex = document.getElementById('s_state_or_province_name');
    const selectMpoIndex = document.getElementById('s_city');
    const mainPerson = document.getElementById('allowed_recipient_1');
    // const alternativePerson = document.getElementById('allowed_recipient_2');
    // const referencesDom = document.getElementById('s_fax_2');
    const nitField = document.getElementById('nit');
    const dpiField = document.getElementById('dpi');

    const idDepto = selectDptoIndex.options[selectDptoIndex.selectedIndex].id;
    const idMpo = selectMpoIndex.options[selectMpoIndex.selectedIndex].id;
    const person = mainPerson.value;
    // const alternative = alternativePerson.value;
    // const references = referencesDom.value;
    const nit = nitField.value ? nitField.value : '';
    const dpi = dpiField.value;

    const obj = {
      departamentoid: twoDigitsFormatter(idDepto),
      municipioid: twoDigitsFormatter(idMpo),
      nit,
      allowed_recipient_1: person,
      // allowed_recipient_2: alternative,
      // referral_address: references,
      dpi,
    };

    this.setState({
      ...addressForm,
      form_custom_info: {
        ...addressForm.form_custom_info,
        ...obj,
      },
      form_shipping_info: {
        ...addressForm.form_shipping_info,
        city: addressForm.form_shipping_info.city,
        state: addressForm.form_shipping_info.state_or_province_name,
      },
    });

    if (keys[0] === 'form_billing_info') {
      // const bSelectDptoIndex = document.getElementById('b_state_or_province_name');
      // const bSelectMpoIndex = document.getElementById('b_city');
      // const bPobIndex = document.getElementById('b_address_line_2');
      const bReferencesDom = document.getElementById('s_fax_2');

      // const bIdDepto = bSelectDptoIndex.options[bSelectDptoIndex.selectedIndex].id;
      // const bIdMpo = bSelectMpoIndex.options[bSelectMpoIndex.selectedIndex].id;
      // const bIdPob = bPobIndex.options[bPobIndex.selectedIndex].id;
      const bReferences = (bReferencesDom ? bReferencesDom.value : '');

      const bObj = {
        // departamentoid: bIdDepto,
        // municipioid: bIdMpo,
        // pobladoid: bIdPob,
        nit,
        referral_address: bReferences,
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
          fax_1: '',
          address_line_3: '',
        },
      });
    }
  }

  customInfoChange = (e, data) => {
    const keys = data.split('.');
    let value = e.target.value;
    if (keys[0] === 'form_custom_info' && keys[1] === 'dpiConfirm') value = value.replace(/\D-+/g, '');
    const customInfoForm = this.state;
    customInfoForm[keys[0]][keys[1]] = value;

    this.setState(customInfoForm);
  }

  handleData() {
    /*   const newDpiParam = {
      numero_documento_cliente: this.state.form_shipping_info.fax_1,
    }; */

    const newMACParam = {
      id_client: this.state.form_shipping_info.fax_1,
      fecha_nac: `${this.state.form_custom_info.day}/${this.state.form_custom_info.month}/${this.state.form_custom_info.year}`,
    };

    const newNitParam = {
      numero_documento_cliente: this.state.form_billing_custom_info.nit,
    };
    const validateInvoiceType = this.state.custom_info.invoice_type === 'CF';

    // this.props.orderStore.validateDpi(newDpiParam).then((res) => {
    //  if (res && res.data && res.data.data && res.data.data.Result === true) {
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

  handleSubmit(e) {
    e.preventDefault();
    const isIE = (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > -1);

    if (this.state.mergeAddress) {
      this.mergeShippingWithBillingInfo();
    }

    if (isIE) this.handleData();
    else if (!isIE && $('form').valid()) this.handleData();
  }

  shippingAddressRegister() {
    // clone custom info.
    let newObj = { ...this.state.form_custom_info };

    if (newObj.departamentoid.length === 0) {
      const selectDptoIndex = document.getElementById('s_state_or_province_name');
      const selectMpoIndex = document.getElementById('s_city');
      // const pobIndex = document.getElementById('s_address_line_2');
      const mainPerson = document.getElementById('allowed_recipient_1');
      const nitField = document.getElementById('nit');
      // const alternativePerson = document.getElementById('allowed_recipient_2');
      // const referencesDom = document.getElementById('s_fax_2');

      const idDepto = selectDptoIndex.selectedOptions[0].id;
      const idMpo = selectMpoIndex.selectedOptions[0].id;
      // const idPob = pobIndex.selectedOptions[0].id;
      const person = mainPerson.value;
      const nit = nitField.value ? nitField.value : '';
      // const alternative = alternativePerson.value || [];
      // const references = referencesDom.value || [];

      newObj = {
        ...this.state.form_custom_info,
        departamentoid: twoDigitsFormatter(idDepto),
        municipioid: twoDigitsFormatter(idMpo),
        // pobladoid: fourDigitsFormatter(idPob),
        allowed_recipient_1: person,
        // allowed_recipient_2: alternative,
        // referral_address: references,
        dpi: this.state.form_shipping_info.fax_1,
        nit,
      };
    }

    if (newObj && newObj.dpiConfirm) delete newObj.dpiConfirm;
    // create custom info object.
    const objCustomOInfo = Object.keys(newObj).reduce((a, b) => {
      if (newObj[b] !== '') a[b] = newObj[b];
      return a;
    }, {});

    // assign custom info into shipping address form.
    this.state.form_shipping_info.address_line_3 = ''; // temp
    this.state.form_shipping_info.fax_2 = ''; // temp
    const newShippingAddress = {
      nickName: 'Envio',
      ...this.state.form_shipping_info,
      custom: objCustomOInfo,
    };

    this.props.orderStore.addShippingAddress(newShippingAddress).then((res) => {
      if (res.success && res.action === 'shippingAddress') {
        this.billingAddressRegister();
      } else {
        const isIE = (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > -1);
        if (isIE) alert('Error al registrar tu dirección de envío.');
        else {
          this.setState({ error: 'Error al registrar tu dirección de envío.' });
        }
      }
    });
  }

  billingAddressRegister = async () => {
    // assign custom info into billing address form.
    const newObj = { ...this.state.form_billing_custom_info };

    if (newObj && newObj.dpiConfirm) delete newObj.dpiConfirm;
    // create custom info object.
    const objCustomOInfo = Object.keys(newObj).reduce((a, b) => {
      if (newObj[b] !== '') a[b] = newObj[b];
      return a;
    }, {});

    const lastName = document.getElementById('s_last_name');
    const firstName = document.getElementById('s_first_name');
    let address = document.getElementById('s_address_line_1').value;
    if (address === null || (address.value === null || document.getElementById('s_address_line_1') === '')) {
      address = document.getElementById('s_address_line_1');
    }
    const email = document.getElementById('s_email_1');
    const phone = document.getElementById('s_phone_1');
    // assign custom info into shipping address form.
    const newBillingAddress = {
      ...this.state.form_billing_info,
      custom: objCustomOInfo,
    };
    newBillingAddress.last_name = lastName.value;
    newBillingAddress.first_name = firstName.value;
    newBillingAddress.email_1 = email.value;
    newBillingAddress.phone_1 = phone.value;
    // this.props.accountStore.person()
    const billingResponse = await this.props.orderStore.addBillingAddress(newBillingAddress);
    if (billingResponse.success && billingResponse.action === 'billingAddress') {
      const personResponse = await this.props.accountStore.dataPerson();
      if (personResponse.success) {
        const syncaddressesResponse = await this.props.orderStore.syncaddresses();
        if (syncaddressesResponse.success) {
          this.props.paymentsStore.CredomaticPonchout({
            order_id: this.props.orderStore.getCartInfo.data.data.external_referer,
          }).then((resOrderBegin) => {
            if (resOrderBegin.success) {
              this.context.router.history.push({ pathname: '/checkout/payment', state: { pickupInStore: false, orderBegin: resOrderBegin.data.data } });
            } else {
              this.setState({ error: 'Error al procesar la solicitud.' });
            }
          });
        } else {
          this.setState({ error: 'Error al procesar la solicitud.' });
        }
      } else {
        this.setState({ error: 'Error al procesar la solicitud.' });
      }
    } else {
      // alert('Error al registrar tu dirección de facturación');
      this.setState({ error: 'Error al registrar tu dirección de facturación.' });
    }
  }

  mergeShippingWithBillingInfo() {
    const addressForm = this.state;
    const tempAddress = addressForm.form_shipping_info.address_line_1;
    if (this.state.form_custom_info.invoice_type === 'CF') {
      addressForm.form_shipping_info.address_line_1 = addressForm.form_billing_info.address_line_1;
    }
    const mergeAddress = {
      form_billing_info: {
        ...addressForm.form_shipping_info,
      },
    };
    addressForm.form_shipping_info.address_line_1 = tempAddress;
    this.setState(mergeAddress);
  }

  addAddOns = async () => {
    let filt;
    const getCart = await this.props.orderStore.getCart();
    let addonslist;
    await addonsList().then((res) => {
      addonslist = res.data[0].filter(x => x.enabled === true && x.auto_cart === true);
    });
    if (!addonslist) return;

    // filtrar el part number que pertenece a la tarjeta de prepago.
    if (getCart.success && getCart.data && getCart.data.data) {
      const { items } = getCart.data.data || [];
      filt = items.filter(e => addonslist.some(x => x.item_part_number === e.part_number));
    }

    if (filt && !filt.length) {
      await Promise.all(addonslist.map(async (e) => {
        await this.props.orderStore.addToCart({
          part_number: e.item_part_number,
          quantity: e.quantity,
        });
      }));
    }
  }

  renderSteps = () => {
    document.getElementById('initial').scrollIntoView({ block: 'start', behaviour: 'smooth' });
    const tl = new TimelineLite();
    const line = $('.line-progress');
    const step2 = $('.step2');
    const step3 = $('.step3');
    TweenLite.to(step3, 0, { className: '-=active' });
    tl.to(line, 0.3, { width: '50%' }).to(step2, 0.3, { className: '+=active' });
  }

  render() {
    return (
      <UI
        switchBillingForm={this.switchBillingForm}
        billingAddress={this.state.form_billing_info}
        toggleAddress={this.toggleAddress}
        toggleInvoiceType={this.toggleInvoiceType}
        showForm={this.state.showForm}
        handleChange={this.handleChange}
        shippingAddress={this.state.form_shipping_info}
        handleSubmit={this.handleSubmit}
        renderStep1={this.renderStep1}
        renderStep2={this.renderStep2}
        customInfoChange={this.customInfoChange}
        customInfo={this.state.form_custom_info}
        // index
        deptoIndex={this.state.deptoIndex}
        mpoIndex={this.state.mpoIndex}
        // error
        error={this.state.error}
        // options
        city={this.state.form_shipping_info.city}
        state={this.state.form_shipping_info.state}
        bCity={this.state.form_billing_info.city}
        bState={this.state.form_billing_info.state}
        bSddressLine2={this.state.form_billing_info.address_line_2}
        pickupInStore={this.state.showForm}
      />
    );
  }
}

AddressCheckout.propTypes = {
  paymentsStore: PropTypes.shape({
    CredomaticPonchout: PropTypes.func,
  }).isRequired,
  orderStore: PropTypes.shape({
    addShippingAddress: PropTypes.func,
    addBillingAddress: PropTypes.func,
    validateDpi: PropTypes.func,
    validateNit: PropTypes.func,
    validateMaxActiveClient: PropTypes.func,
    orderBegin: PropTypes.func,
    syncaddresses: PropTypes.func,
    getCart: PropTypes.func,
    addToCart: PropTypes.func,
  }).isRequired,
  accountStore: PropTypes.shape({
    dataPerson: PropTypes.func,
  }).isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      pickupInStore: PropTypes.bool,
    }),
  }),
};

AddressCheckout.defaultProps = {
  location: {},
};

export default inject('paymentsStore', 'orderStore', 'accountStore')(observer(AddressCheckout));
