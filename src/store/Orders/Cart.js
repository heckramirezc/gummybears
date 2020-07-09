import { observable, action } from 'mobx';

// Helpers
import request from './../../bin/httpRequest';

// TODO: en v2 se elimina funcion consulrCart
/**
 * Consult the cart or order detail.
 * @param {string} SessionId - is required.
 */
export const consultCart = (SessionId) => {
  const options = {
    method: 'GET',
    url: `${process.env.API}${process.env.MERCHANT}/cart`,
  };

  return request.genericHandler(options, SessionId).then((res) => {
    let callback = { action: 'guestSession', success: false };
    if (!res.error) {
      callback = Object.assign({}, callback, { data: res.data, success: true });
    } else {
      callback = Object.assign({}, callback, { error: res.error });
    }
    return callback;
  });
};

export const genericFunction = (options, sessionIdDisable, actionCallback) => request.genericHandler(options, sessionIdDisable).then((res) => {
  let callback = { action: actionCallback, success: false };
  if (!res.error) {
    callback = {
      ...callback,
      data: res.data,
      success: true,
    };
  } else {
    callback = {
      ...callback,
      error: res.error,
    };
  }
  return callback;
});

class OrderStore {
  // @observable addCart = observable.map();
  @observable getCartInfo = observable.map();
  @observable shippingAddress = observable.map();
  @observable billinggAddress = observable.map();
  @observable dpiResponse = observable.map();
  @observable maxActivClientResponse = observable.map();
  @observable addressListResponse = observable.map();
  @observable warnedUser = false;

  @action
  async getCart(init) {
    const options = {
      method: 'GET',
      url: `${process.env.API}${process.env.MERCHANT}/cart`,
    };
    const response = await genericFunction(options, null, 'cart');
    this.getCartInfo = response;
    if (init === 'user_warned') {
      this.warnedUser = true;
    } else if (init === 'user_not_warned') {
      this.warnedUser = false;
    }

    return response;
  }

  @action
  async getAddons() {
    const options = {
      method: 'GET',
      url: `${process.env.WCAAS}${process.env.MERCHANT}/addon`,
    };
    const response = await genericFunction(options, null, 'addon');
    return response;
  }

  @action
  async addToCart(query, init) {
    const options = {
      method: 'POST',
      url: `${process.env.API}${process.env.MERCHANT}/cart/item/`,
      data: query,
    };

    const response = await genericFunction(options, null, 'addToCart');
    this.getCartInfo = response;
    this.getCart(init);
    return response;
  }

  @action
  async deleteToCart(partNumber) {
    const options = {
      method: 'DELETE',
      url: `${process.env.API}${process.env.MERCHANT}/cart/item/${partNumber}`,
    };

    const response = await genericFunction(options, null, 'deleteCart');
    this.getCartInfo = response;
    return response;
  }

  @action
  async refreshOrder() {
    const options = {
      method: 'DELETE',
      url: `/api/custom/order/${process.env.MERCHANT}`,
    };

    const response = await genericFunction(options, null, 'deleteCart');
    this.getCartInfo = response;
    return response;
  }

  @action
  async addShippingAddress(query) {
    const options = {
      method: 'POST',
      url: `${process.env.API}${process.env.MERCHANT}/cart/shipping_address/`,
      data: query,
    };

    const response = await genericFunction(options, null, 'shippingAddress');
    return response;
  }

  @action
  async addBillingAddress(query) {
    const options = {
      method: 'POST',
      url: `${process.env.API}${process.env.MERCHANT}/cart/billing_address/`,
      data: query,
    };

    const response = await genericFunction(options, null, 'billingAddress');
    return response;
  }

  @action
  async validateNit(query) {
    let calculo = 0;
    let calculo2 = 0;
    let calculo1 = 0;
    let calculo3 = 0;
    let calculo4 = 0;
    let calculo5 = 0;
    const digitos = parseInt(query.numero_documento_cliente.substring(12, 15), 10);
    let resultado = false;
    const res = {};
    res.data = {};
    res.data.data = {};
    if (digitos < 100) {
      for (let posicion = 0; posicion <= 14; posicion += 1) {
        if (!(posicion === 4 || posicion === 11)) {
          calculo += ((15 - posicion) * parseInt(query.numero_documento_cliente.charAt(posicion), 10));
        }
      }
      calculo %= 11;
    } else {
      let n = 1;
      for (let posicion = 0; posicion <= 14; posicion += 1) {
        if (!(posicion === 4 || posicion === 11)) {
          calculo1 = parseInt(query.numero_documento_cliente.charAt(posicion), 10);
          calculo2 = 6 * Math.floor(Math.abs((n + 4) / 6));
          calculo3 = 3 + calculo2;
          calculo4 = calculo3 - n;
          calculo5 = calculo1 * calculo4;
          calculo += calculo5;
          n += 1;
        }
      }
      calculo %= 11;
      if (calculo > 1) {
        calculo = 11 - calculo;
      } else {
        calculo = 0;
      }
    }
    resultado = (calculo === parseInt(query.numero_documento_cliente.charAt(16), 10));
    res.data.data.Result = resultado;
    return res;
  }
  @action
  async validateDpi(query) {
    const sessionIdDisable = true;
    const options = {
      method: 'POST',
      url: `${process.env.AMXGW_HOST}/${process.env.MERCHANT}/dui`,
      data: query,
    };

    const response = await genericFunction(options, sessionIdDisable, 'validateDpi');
    this.dpiResponse = response;

    return response;
  }

  @action
  async validateMaxActiveClient(query) {
    const sessionIdDisable = true;
    const options = {
      method: 'POST',
      url: `${process.env.AMXGW_HOST}/${process.env.MERCHANT}/mac`,
      data: query,
    };

    const response = await genericFunction(options, sessionIdDisable, 'validateMaxActiveClient');
    this.maxActivClientResponse = response;

    return response;
  }

  @action
  async addressList(query) {
    const options = {
      method: 'GET',
      url: `${process.env.MONGO_API}${process.env.MERCHANT}/findStores`,
      data: query,
    };

    const response = await genericFunction(options, null, 'addressList');
    this.addressListResponse = response;

    return response;
  }

  @action
  async syncaddresses(query) {
    const options = {
      method: 'PUT',
      url: `${process.env.ACCOUNTS}${process.env.MERCHANT}/person/syncaddresses`,
      data: query,
    };

    const response = await genericFunction(options, null, 'syncaddresses');
    this.addressListResponse = response;

    return response;
  }
}

export default new OrderStore();
