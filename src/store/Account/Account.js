import { observable, action } from 'mobx';

// Helpers
import request from './../../bin/httpRequest';


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
class AccountStore {
  // @observable addCart = observable.map();
  @observable orders = observable.map();
  @observable person = observable.map();
  @observable userGuest = true;
  @observable resetPass = observable.map();
  @observable passReq = observable.map();
  @observable profile = observable.map();

  @action dataPerson() {
    const options = {
      method: 'GET',
      url: `${process.env.ACCOUNTS}${process.env.MERCHANT}/person`,
    };

    return request.genericHandler(options).then((res) => {
      let callback = { action: 'dataPerson', success: false };
      if (!res.error) {
        callback = Object.assign({}, callback, { data: res.data, success: true });
        callback.userGuest = !this.userGuest;
      } else {
        callback = Object.assign({}, callback, { error: res.error });
      }

      this.person = callback;
      return callback;
    });
  }

  @action ordersPerson() {
    const options = {
      method: 'GET',
      url: `${process.env.ACCOUNTS}${process.env.MERCHANT}/person/orderhistory`,
    };

    return request.genericHandler(options).then((res) => {
      let callback = { action: 'ordersPerson', success: false };
      if (!res.error) {
        callback = Object.assign({}, callback, { data: res.data, success: true });
      } else {
        callback = Object.assign({}, callback, { error: res.error });
        // alert('error');
      }
      this.orders = callback;
      return callback;
    });
  }

  @action profilePerson(query, router) {
    const options = {
      method: 'PUT',
      url: `${process.env.ACCOUNTS}${process.env.MERCHANT}/person`,
      data: query,
    };

    return request.genericHandler(options).then((res) => {
      let callback = { action: 'profilePerson', success: false };
      if (!res.error) {
        callback = Object.assign({}, callback, { data: res.data, success: true });
        if (router) router.history.push('/account');
      } else {
        callback = Object.assign({}, callback, { error: res.error });
        // alert('error');
      }
      this.profile = callback;
      return callback;
    });
  }

  @action resetPassword(query) {
    const options = {
      method: 'POST',
      url: `${process.env.CUSTOM_ACCOUNTS}${process.env.MERCHANT}/person/resetPassword`,
      data: query,
    };
    return request.genericHandler(options).then((res) => {
      let callback = { action: 'resetPassword', success: false };
      if (!res.error) {
        callback = Object.assign({}, callback, { data: res.data, success: true });
      } else {
        callback = Object.assign({}, callback, { error: res.error });
      }
      this.resetPass = callback;
      return callback;
    });
  }

  @action passRequested(query) {
    const options = {
      method: 'PUT',
      url: `${process.env.CUSTOM_ACCOUNTS}${process.env.MERCHANT}/person/passwordreset`,
      data: query,
    };

    return request.genericHandler(options).then((res) => {
      let callback = { action: 'passRequested', success: false };
      if (!res.error) {
        callback = Object.assign({}, callback, { data: res.data, success: true });
      } else {
        callback = Object.assign({}, callback, { error: res.error });
        // alert('error');
      }
      this.passReq = callback;
      return callback;
    });
  }

  @action syncAddress() {
    const options = {
      method: 'PUT',
      url: `${process.env.CUSTOM_ACCOUNTS}${process.env.MERCHANT}/person/passwordreset`,
    };

    return request.genericHandler(options).then((res) => {
      let callback = { action: 'syncAddress', success: false };
      if (!res.error) {
        callback = Object.assign({}, callback, { data: res.data, success: true });
        callback.userGuest = !this.userGuest;
      } else {
        callback = Object.assign({}, callback, { error: res.error });
        // alert('error');
      }
      this.person = callback;
      return callback;
    });
  }


  @action
  async personBillingAddress(query) {
    const options = {
      method: 'PUT',
      url: `${process.env.ACCOUNTS}${process.env.MERCHANT}/person/address/billing`,
      data: query,
    };

    const response = await genericFunction(options, null, 'personBillingAddress');
    this.addressListResponse = response;

    return response;
  }

  @action
  async personShippingAddress(query) {
    const options = {
      method: 'PUT',
      url: `${process.env.ACCOUNTS}${process.env.MERCHANT}/person/address/shipping`,
      data: query,
    };

    const response = await genericFunction(options, null, 'personShippingAddress');
    this.addressListResponse = response;

    return response;
  }
}

export default new AccountStore();
