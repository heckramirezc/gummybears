import { observable, action } from 'mobx';
import _ from 'lodash';

import request from '../../bin/httpRequest';

export const addonsList = () => {
  const options = {
    method: 'GET',
    url: '/api/wcaas/clarosv/addon/',
  };

  return request.genericHandler(options, null).then((res) => {
    let callback = { action: 'addon', success: false };
    if (!res.error) {
      const data = _.sortBy(res.data.data, val => val.position);
      callback = Object.assign({}, callback, { data, success: true });
    } else {
      callback = Object.assign({}, callback, { error: res.error });
    }

    return callback;
  });
};

class AddonStore {
  @observable autoSuggestResult = observable.map();
  @action catalog(value) {
    const options = {
      method: 'GET',
      url: `${process.env.MONGO_API}${process.env.MERCHANT}/productsByCategory%2F${value}?lang=es_sv&currency=usd`,
    };

    return request.genericHandler(options, null).then((res) => {
      let callback = { action: 'catalog', success: false };
      if (!res.error) {
        // execute clear product list;
        callback = Object.assign({}, callback, { data: res.data.data, success: true });
      } else {
        callback = Object.assign({}, callback, { error: res.error });
      }
      this.catalogResponse = callback;
      return callback;
    });
  }
}

export default new AddonStore();
