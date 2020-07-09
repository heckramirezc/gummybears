import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import { TimelineLite } from 'gsap/TweenMax';
import $ from 'jquery';
import Cookies from 'universal-cookie';

// Helpers
import validate from '../../../helpers/validate_form';

// Components
import CartSummary from './../../Cart/CartSummary/CartSummary';

// UI
import UI from './MPCard.ui';

const cookies = new Cookies();

const CheckoutSteps = () => (
  <div className="checkout--steps">
    <div className="module">
      <ul>
        <li className="step1 active">
          <span />
          <p>Datos personales</p>
        </li>
        <li className="step2 active">
          <span />
          <p>Datos de envío</p>
        </li>
        <li className="step3">
          <span />
          <p>Forma de pago</p>
        </li>
      </ul>
      <div className="line">
        <div className="line-border" />
        <div className="line-progress" />
      </div>
    </div>
  </div>
);

class CheckoutPayment extends Component {
  static contextTypes = {
    router: PropTypes.object,
  }

  constructor(...props) {
    super(...props);
    const mpCardForm = {
      card_type: '',
      holder: '',
      cardNumber: '',
      method_id: '',
      month: '',
      year: '',
      cvv: '',
      account: '',
    };

    const payload = {
      hash: '',
      time: '',
      ccnumber: '',
      ccexp: '',
      amount: '',
      type: '',
      orderid: '',
      key_id: '',
      cvv: '',
      redirect: '',
    };

    this.state = {
      showBanking: false,
      mpCardForm,
      payload,
      resultStatus: '',
      error: false,
      errorDescription: '',
    };

    // Binds
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.timeout = setTimeout(() => {
      $('#pp_submit').prop('disabled', true).addClass('disabled');
      $('#ui--timeout-notification').removeClass('hidden');
      $('#payment-back').css('display', 'none');
      $('#session-back').css('display', '');
      cookies.remove('Session-Id', { path: '/' });
    }, 3600000);
    const orderBegin = this.props.location.state.orderBegin.payload;
    this.renderSteps();
    validate();
    this.orderInfo();
    const script = document.createElement('script');
    script.src = orderBegin.widgetUrl;

    document.body.appendChild(script);

    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.innerHTML = `(function(w, d, s, p, c) {w.ppc = c || {};w.pk = p;w[p] = w[p] || {};w.ppHock = function(name, func) {w.ppc[name] = func};var f = d.getElementsByTagName(s)[0], j = d.createElement(s);j.async = true;j.src = ' ${orderBegin.widgetUrl} ';j.integrity='${orderBegin.widgetIntegrity} ';f.parentNode.appendChild(j);})(window, document, "script", "processorpay", {elementId: "paymentForm",orderId: ' ${orderBegin.orderId} '});ppHock("onSend", function() {console.log("Send purchase");});ppHock("onError", function (response) {console.log("Error", response); document.getElementById("ui--notification").classList.add("hidden"); setTimeout(() => { document.getElementById("ui--notification").classList.remove("hidden"); }, 1000); });`;
    document.body.appendChild(s);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  orderInfo = async () => {
    const getCart = await this.props.orderStore.getCart();
    const personResponse = await this.props.accountStore.dataPerson();

    if (personResponse && !personResponse.success) {
      this.context.router.history.push('/not-found');
    }

    if ((getCart && getCart.data && getCart.data.data && !getCart.data.data.items.length) || !getCart.success) {
      this.context.router.history.push('/not-found');
    }
  }

  handleChange(e, data) {
    const keys = data.split('.');
    const paymentForm = this.state;
    let value = e.target.value;
    if (keys[0] === 'mpCardForm' && keys[1] === 'cardNumber') value = value.replace(/\D+/g, '');
    paymentForm[keys[0]][keys[1]] = value;
    this.setState(paymentForm);
    // let card_string = $('.card-input').val();
    if ($('.card-input').val().startsWith('3') && $('.card-input').val().length > 0) {
      $('.card').addClass('card-off');
      $('.is-amex').removeClass('card-off');
    } else if ($('.card-input').val().startsWith('4') && $('.card-input').val().length > 0) {
      $('.card').addClass('card-off');
      $('.is-visa').removeClass('card-off');
    } else if ($('.card-input').val().startsWith('5') && $('.card-input').val().length > 0) {
      $('.card').addClass('card-off');
      $('.is-master').removeClass('card-off');
    } else {
      $('.card').addClass('card-off');
    }
  }

  handleData() {
    if (!this.props.orderStore.getCartInfo.success) return alert('Agregar un producto');
    return false;
  }

  handleSubmit(e) {
    console.log(document.getElementById('pp_orderId'));
    e.preventDefault();
    document.getElementById('pp_orderId');
    const isIE = (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > -1);
    if (isIE) this.handleData();
    else if (!isIE && $('form').valid()) this.handleData();
  }

  toggleBanking = () => {
    const show = this.state.showBanking;
    this.setState({ showBanking: !show });
  }

  handleCards() {
    const cardString = $('.card-input').val();
    if (cardString.startsWith('3') && cardString.length > 0) {
      $('.card').addClass('card-off');
      $('.is-amex').removeClass('card-off');
    } else if (cardString.startsWith('4') && cardString.length > 0) {
      $('.card').addClass('card-off');
      $('.is-visa').removeClass('card-off');
    } else if (cardString.startsWith('5') && cardString.length > 0) {
      $('.card').addClass('card-off');
      $('.is-master').removeClass('card-off');
    } else {
      $('.card').addClass('card-off');
    }
  }

  renderSteps = () => {
    document.getElementById('initial').scrollIntoView({ block: 'start', behaviour: 'smooth' });
    const tl = new TimelineLite();
    const line = $('.line-progress');
    const step3 = $('.step3');
    tl.to(line, 0.3, { width: '100%' }).to(step3, 0.3, { className: '+=active' });
    // this.setState({
    //   step1: false,
    //   step2: true,
    //   step3: false,
    // });
  }

  render() {
    const pickupInStore = this.props.location.state && this.props.location.state.pickupInStore && this.props.location.state.pickupInStore !== undefined ? this.props.location.state.pickupInStore : false;
    return (
      <main className="checkout">
        <CheckoutSteps />
        <section className="checkout--content">
          <section className="checkout--payment">
            <UI
              handleChange={this.handleChange}
              mpCardForm={this.state.mpCardForm}
              handleCards={this.handleCards}
              handleSubmit={this.handleSubmit}
              error={this.state.error}
              errorDescription={this.state.errorDescription}
              pickupInStore={pickupInStore}
              widgetUrl={this.props.location.state.orderBegin.payload.widgetUrl}
            />
          </section>
          <CartSummary />
        </section>
      </main>
    );
  }
}

CheckoutPayment.propTypes = {
  orderStore: PropTypes.shape({
    getCart: PropTypes.func,
    getCartInfo: PropTypes.shape({
      success: PropTypes.bool,
      data: PropTypes.shape({
        data: PropTypes.shape({
          external_referer: PropTypes.string,
        }),
      }),
    }),
  }),
  location: PropTypes.shape({
    state: PropTypes.shape({
      pickupInStore: PropTypes.bool,
      orderBegin: PropTypes.shape({
        resultStatus: PropTypes.string,
        orderBegin: PropTypes.shape({
          orderId: PropTypes.string,
          widgetUrl: PropTypes.string,
          widgetIntegrity: PropTypes.string,
        }),
        resultCode: PropTypes.string,
      }),
    }),
  }),
  accountStore: PropTypes.shape({
    dataPerson: PropTypes.func,
  }),
};

CheckoutPayment.defaultProps = {
  orderStore: {
    getCartInfo: {},
    clientIp: '',
  },
  location: {},
  accountStore: {},
};

export default inject('orderStore', 'accountStore')(observer(CheckoutPayment));
