import { observable, action } from 'mobx';

// Helpers
import request from './../../bin/httpRequest';

class PaymentStore {
  @observable payMethod = observable.map();

  @action MyIp() {
    const options = {
      method: 'GET',
      url: 'https://api.ipify.org?format=json',
    };
    const sessionIdDisable = true;
    return request.genericHandler(options, sessionIdDisable).then((res) => {
      let callback = { action: 'MyIp', success: false };
      if (!res.error) {
        console.log(res);
        callback = Object.assign({}, callback, { data: res.data, success: true });
        this.token = callback;
      } else {
        callback = Object.assign({}, callback, { error: res.error });
        this.token = callback;
      }
      return callback;
    });
  }

  @action CredomaticPonchout(query) {
    const options = {
      method: 'POST',
      url: `${process.env.SERVICES}${process.env.CREDPONCHOUT}`,
      data: query,
    };
    const sessionIdDisable = true;
    return request.genericHandler(options, sessionIdDisable).then((res) => {
      let callback = { action: 'CredomaticPonchout', success: false };
      if (!res.error) {
        callback = Object.assign({}, callback, { data: res.data, success: true });
        this.token = callback;
      } else {
        callback = Object.assign({}, callback, { error: res.error });
        this.token = callback;
      }
      return callback;
    });
  }

  @action PonchoutForm(query) {
    const queryParameters = `hash=${query.hash}&time=${query.time}&ccnumber=${query.ccnumber}&ccexp=${query.ccexp}&amount=${query.amount}&type=${query.type}&orderid=${query.orderid}&key_id=${query.key_id}&cvv=${query.cvv}&redirect=https://clarogt.wcaas.net/checkout/payment`;
    const options = {
      method: 'POST',
      url: `https://credomatic.compassmerchantsolutions.com/api/transact.php?${queryParameters}`,
    };

    const sessionIdDisable = true;
    return request.genericHandler(options, sessionIdDisable).then((res) => {
      let callback = { action: 'PonchoutForm', success: false };
      if (!res.error) {
        callback = Object.assign({}, callback, { data: res.data, success: true });
        this.token = callback;
      } else {
        callback = Object.assign({}, callback, { error: res.error });
        this.token = callback;
      }
      return callback;
    });
  }

  @action MPToken(query) {
    const options = {
      method: 'POST',
      url: `${process.env.MP_BASE}/card_tokens?public_key=${process.env.MP_KEYS}`,
      data: query,
    };
    const sessionIdDisable = true;
    return request.genericHandler(options, sessionIdDisable).then((res) => {
      let callback = { action: 'MPToken', success: false };
      if (!res.error) {
        callback = Object.assign({}, callback, { data: res.data, success: true });
        this.token = callback;
      } else {
        callback = Object.assign({}, callback, { error: res.error });
        this.token = callback;
      }
      return callback;
    });
  }

  @action MPaymentInstruction(query, payMethod, route) {
    query.payMethodId = payMethod;
    const options = {
      method: 'POST',
      url: `${process.env.API}${process.env.MERCHANT}/cart/payment_instruction/`,
      data: query,
    };
    // TODO: Borrar async this.PreCheckout cuando el servicio truena y crear una alerta de error.
    return request.genericHandler(options).then((res) => {
      let callback = { action: 'MPPaymentInstruction', success: false };
      if (!res.error) {
        callback = Object.assign({}, callback, { data: res.data, success: true });
        this.payInstruction = callback;
        this.PreCheckout(callback.data.data, route);
      } else {
        callback = Object.assign({}, callback, { error: res.error });
        this.payInstruction = callback;
      }
      return callback;
    });
  }

  @action.bound PreCheckout(order, route) {
    const options = {
      method: 'PUT',
      url: `${process.env.API}${process.env.MERCHANT}/cart/precheckout/`,
    };

    // TODO: Borrar async this.Checkout cuando el servicio truena y crear una alerta de error.
    return request.genericHandler(options).then((res) => {
      let callback = { action: 'PreCheckout', success: false };
      if (!res.error) {
        callback = Object.assign({}, callback, { data: res.data, success: true });
        this.preCheckout = callback;
        this.Checkout(order, route);
      } else {
        callback = Object.assign({}, callback, { error: res.error });
        this.preCheckout = callback;
      }
      return callback;
    });
  }

  @action.bound Checkout(order, route) {
    const options = {
      method: 'POST',
      url: `${process.env.API}${process.env.MERCHANT}/cart/checkout/`,
    };

    return request.genericHandler(options).then((res) => {
      let callback = { action: 'Checkout', success: false };
      if (!res.error) {
        callback = Object.assign({}, callback, { data: res.data, success: true });
        this.checkout = callback;
        route.history.push('/checkout/confirm', order);
      } else {
        callback = Object.assign({}, callback, { error: res.error });
        this.checkout = callback;
        const err = res.error.data.errors[0].errorMessage;
        alert(err);
      }

      return callback;
    });
  }
}

export default new PaymentStore();
