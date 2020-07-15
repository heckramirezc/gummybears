import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import queryString from 'query-string';
// import { useParams } from 'react-router';

import UI from './Confirm.ui';
import Denied from './Denied.ui';

class Confirm extends Component {
  static contextTypes = {
    router: PropTypes.object,
  }

  constructor(...props) {
    super(...props);
    this.state = {
      error: false,
      errorDescription: '',
      addons: [],
    };
  }

  componentDidMount() {
    document.getElementById('app').scrollIntoView(true);
    this.orderInfo();
  }

  orderInfo = async () => {
    const getCart = await this.props.orderStore.getCart();
    const personResponse = await this.props.accountStore.dataPerson();

    if (personResponse && !personResponse.success) {
      this.context.router.history.push('/cart');
    } else if ((getCart && getCart.data && getCart.data.data && !getCart.data.data.items.length) || !getCart.success) {
      this.context.router.history.push('/cart');
    } else {
      if (getCart.data != null) {
        this.props.location.state = getCart.data.data;
        const addons = await this.props.orderStore.getAddons();
        if (addons.success) {
          this.setState({ addons: addons.data.data.addons });
        }
      }
      this.validateCredomatic();
    }
  }

  validateCredomatic = async () => {
    const paymentResponse = queryString.parse(this.props.location.search);
    const paymentPayload = {
      orderId: paymentResponse.transactionId.substring(0, paymentResponse.transactionId.indexOf('-')),
      authCode: paymentResponse.authCode,
      bankResponseCode: paymentResponse.bankResponseCode,
      bankResponseText: paymentResponse.bankResponseText,
      cardLast4Digits: paymentResponse.cardLast4Digits,
      cardFirst6Digits: paymentResponse.cardFirst6Digits,
      htech: paymentResponse.orderId,
      authcode: paymentResponse.authCode,
      query: {
        ...paymentResponse,
      },
    };
    if (this.props.location.state && this.props.location.state.external_referer !== paymentPayload.orderId) {
      this.context.router.history.push('/cart');
    } else if (paymentResponse.resultStatus && (paymentResponse.resultStatus === 'TRANSACTION_SUCCESSFUL') && (paymentResponse.resultCode === 'BANK_APPROVED' || paymentResponse.resultCode === 'SUCCESS')) {
      const payment = await this.props.paymentsStore.MPaymentInstruction(
        paymentPayload,
        'Htech',
        this.context.router,
      );
      if (payment.error) {
        this.setState({ error: true, errorDescription: 'Lo sentimos, tu transacción no pudo ser procesada, contacta a tu soporte para más detalle.' });
      }
    } else if (paymentResponse.resultStatus !== '') {
      switch (paymentResponse.resultCode) {
        case 'MAX_CARD_PAYMENTS':
          this.setState({ error: true, errorDescription: 'Máximo permitido de compras con una misma tarjeta.' });
          break;
        case 'MAX_EMAIL_PAYMENTS':
          this.setState({ error: true, errorDescription: 'Máximo permitido de compras con un mismo correo.' });
          break;
        case 'MAX_TARGET_USER_PAYMENTS':
          this.setState({ error: true, errorDescription: 'Máximo permitido de compras a un mismo usuario.' });
          break;
        case 'MAX_CARDS_ASSOCIATION':
          this.setState({ error: true, errorDescription: 'Máximo permitido de tarjetas asociadas.' });
          break;
        case 'MAX_TARGET_USER_ASSOCIATION':
          this.setState({ error: true, errorDescription: 'Máximo permitido de usuarios asociados.' });
          break;
        case 'MAX_EMAIL_ASSOCIATION':
          this.setState({ error: true, errorDescription: 'Máximo permitido de correos asociados.' });
          break;
        case 'BLOCKED_CARD':
          this.setState({ error: true, errorDescription: 'Tarjeta en lista negra.' });
          break;
        case 'BLOCKED_TARGET_USER':
        case 'BLOCKED_PAYER':
          this.setState({ error: true, errorDescription: 'Usuario en lista negra.' });
          break;
        case 'MAX_TARGET_ASSOCIATION':
          this.setState({ error: true, errorDescription: 'Ya existe un máximo de números asociados a su cuenta.' });
          break;
        case 'BANK_REJECTED':
          this.setState({ error: true, errorDescription: 'Lo sentimos, tu transacción no pudo ser procesada, contacta a tu soporte para más detalle.' });
          break;
        case 'BANK_FAILED':
          this.setState({ error: true, errorDescription: 'Lo sentimos, tu transacción no pudo ser procesada, contacta a tu soporte para más detalle.' });
          break;
        case 'SYSTEM_REJECTED':
          this.setState({ error: true, errorDescription: 'Lo sentimos, tu transacción no pudo ser procesada, contacta a tu soporte para más detalle.' });
          break;
        case 'SYSTEM_FAILED':
          this.setState({ error: true, errorDescription: 'Lo sentimos, tu transacción no pudo ser procesada, contacta a tu soporte para más detalle.' });
          break;
        case 'NOT_FOUND':
          this.setState({ error: true, errorDescription: 'Lo sentimos, tu transacción no pudo ser procesada, contacta a tu soporte para más detalle.' });
          break;
        case 'TRANSACTION_FOUND':
          this.setState({ error: true, errorDescription: 'Lo sentimos, tu transacción no pudo ser procesada, contacta a tu soporte para más detalle.' });
          break;
        case 'DUPLICATED_TRANSACTION':
          this.setState({ error: true, errorDescription: 'Lo sentimos, tu transacción no pudo ser procesada, contacta a tu soporte para más detalle.' });
          break;
        case 'TOKEN_NOT_FOUND':
          this.setState({ error: true, errorDescription: 'Lo sentimos, tu transacción no pudo ser procesada, contacta a tu soporte para más detalle.' });
          break;
        case 'PENDING_PAYMENT_NOT_FOUND':
          this.setState({ error: true, errorDescription: 'Lo sentimos, tu transacción no pudo ser procesada, contacta a tu soporte para más detalle.' });
          break;
        case 'INVALID_PENDING_PAYMENT_STATUS':
          this.setState({ error: true, errorDescription: 'Lo sentimos, tu transacción no pudo ser procesada, contacta a tu soporte para más detalle.' });
          break;
        case 'STORED_CARDS_LIMIT_REACHED':
          this.setState({ error: true, errorDescription: 'Lo sentimos, tu transacción no pudo ser procesada, contacta a tu soporte para más detalle.' });
          break;
        case 'INVALID_REQUEST':
          this.setState({ error: true, errorDescription: 'Lo sentimos, tu transacción no pudo ser procesada, contacta a tu soporte para más detalle.' });
          break;
        case 'UNTRUSTED_CARD':
          this.setState({ error: true, errorDescription: 'Lo sentimos, tu transacción no pudo ser procesada, contacta a tu soporte para más detalle.' });
          break;
        case 'ERROR_INVALID_FORMAT':
          this.setState({ error: true, errorDescription: 'Lo sentimos, tu transacción no pudo ser procesada, contacta a tu soporte para más detalle.' });
          break;
        case 'ERROR_PAST_DATE':
          this.setState({ error: true, errorDescription: 'Lo sentimos, tu transacción no pudo ser procesada, contacta a tu soporte para más detalle.' });
          break;
        case 'ERROR_INVALID_HASH':
          this.setState({ error: true, errorDescription: 'Lo sentimos, tu transacción no pudo ser procesada, contacta a tu soporte para más detalle.' });
          break;
        case 'SERVER_ERROR':
          this.setState({ error: true, errorDescription: 'Lo sentimos, tu transacción no pudo ser procesada, contacta a tu soporte para más detalle.' });
          break;
        case 'UNAUTHORIZED':
          this.setState({ error: true, errorDescription: 'Lo sentimos, tu transacción no pudo ser procesada, contacta a tu soporte para más detalle.' });
          break;
        case 'MAX_PAYMENT_ATTEMPTS':
          this.setState({ error: true, errorDescription: 'Lo sentimos, tu transacción no pudo ser procesada, contacta a tu soporte para más detalle.' });
          break;
        default:
          this.setState({ error: true, errorDescription: 'Lo sentimos, tu transacción no pudo ser procesada, contacta a tu banco para más detalle.' });
      }
    } else {
      this.setState({ error: true, errorDescription: 'Lo sentimos, tu transacción no pudo ser procesada, contacta a tu soporte para más detalle.' });
    }
  }

  print() {
    window.print();
  }

  render() {
    if (this.props.location.state && !this.state.error) {
      return (
        <UI
          orderInfo={this.props.location.state}
          print={this.print}
          addons={this.state.addons}
        />
      );
    } else if (this.state.error && this.state.errorDescription) {
      return (
        <Denied
          orderInfo={this.props.location.state}
          errorDescription={this.state.errorDescription}
        />
      );
    } else {
      return null;
    }
  }
}

Confirm.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({}),
  }).isRequired,
  orderStore: PropTypes.shape({
    getCart: PropTypes.func,
    getAddons: PropTypes.func,
    getCartInfo: PropTypes.shape({
      success: PropTypes.bool,
      data: PropTypes.shape({
        data: PropTypes.shape({
          external_referer: PropTypes.string,
        }),
      }),
    }),
  }),
  accountStore: PropTypes.shape({
    dataPerson: PropTypes.func,
  }),
  paymentsStore: PropTypes.shape({
    CredomaticPonchout: PropTypes.func,
    MPaymentInstruction: PropTypes.func,
  }).isRequired,
};

Confirm.defaultProps = {
  orderStore: {
    getCartInfo: {},
  },
  accountStore: () => {},
};

export default inject('paymentsStore', 'orderStore', 'accountStore')(observer(Confirm));
