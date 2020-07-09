import { observable, action } from 'mobx';
import _ from 'lodash';

import request from './../../bin/httpRequest';


const clearProductList = (args) => {
  _.remove(args.data, (n) => {
    const imagesValidations = _.filter(n.items, 'images');
    const img = (imagesValidations.length ? imagesValidations : null);

    if (!img || !n.available || !n.buyable) {
      return n;
    }

    return false;
  });
  return args;
};


export const productList = (value) => {
  const options = {
    method: 'GET',
    url: `${process.env.MONGO_API}${process.env.MERCHANT}/productsByCategory%2F${value}?lang=es_sv&currency=usd`,
  };

  return request.genericHandler(options, null).then((res) => {
    let callback = { action: 'catalog', success: false };
    if (!res.error) {
      // execute clear product list;
      clearProductList(res.data);
      const data = _.sortBy(res.data.data, val => val.position);
      callback = Object.assign({}, callback, { data, success: true });
    } else {
      callback = Object.assign({}, callback, { error: res.error });
    }

    return callback;
  });
};

class CatalogStore {
  @observable autoSuggestResult = observable.map();
  @observable catalogResponse = observable.map();
  @observable searchResult = observable.map();
  @observable inventoryStatus = observable.map();

  @action catalog(value) {
    const options = {
      method: 'GET',
      url: `${process.env.MONGO_API}${process.env.MERCHANT}/productsByCategory%2F${value}?lang=es_sv&currency=usd`,
    };

    return request.genericHandler(options, null).then((res) => {
      let callback = { action: 'catalog', success: false };
      if (!res.error) {
        // execute clear product list;
        clearProductList(res.data);
        callback = Object.assign({}, callback, { data: res.data.data, success: true });
      } else {
        callback = Object.assign({}, callback, { error: res.error });
      }
      this.catalogResponse = callback;
      return callback;
    });
  }

  @action async search(query, addonsList) {
    const options = {
      method: 'POST',
      url: `${process.env.WCAAS}${process.env.MERCHANTSV}/productlookup/searchTerm`,
      data: query,
    };

    return request.genericHandler(options).then((res) => {
      let callback = { action: 'search', success: false };
      if (!res.error) {
        console.log('addons1', addonsList);
        const searchWithOutAddOns = res.data.data.filter(e => !addonsList.some(x => x.item_part_number === e.part_number));
        console.log('searchWithOutAddOns', searchWithOutAddOns);
        res.data.data = searchWithOutAddOns;
        console.log('res.data.data', res.data.data);
        callback = Object.assign({}, callback, { data: res.data, success: true });
        this.searchResult = callback;
      } else {
        console.log('Error');
        callback = Object.assign({}, callback, { error: res.error });
        this.searchResult = callback;
      }
      console.log('return.callback', callback);
      return callback;
    });
  }

  @action autoSuggest(query, addonsList) {
    const options = {
      method: 'POST',
      url: `${process.env.WCAAS}${process.env.MERCHANTSV}/productlookup/autoSuggest`,
      data: query,
    };

    return request.genericHandler(options).then((res) => {
      let callback = { action: 'autoSuggest', success: false };
      if (!res.error) {
        console.log('addons1', addonsList);
        const searchWithOutAddOns = res.data.data.filter(e => !addonsList.some(x => x.item_part_number === e.part_number));
        console.log('searchWithOutAddOns', searchWithOutAddOns);
        res.data.data = searchWithOutAddOns;
        console.log('res.data.data', res.data.data);
        callback = Object.assign({}, callback, { data: res.data, success: true });
        this.autoSuggestResult = callback;
      } else {
        callback = Object.assign({}, callback, { error: res.error });
        this.autoSuggestResult = callback;
      }
      return callback;
    });
  }

  @action
  async inventoryStatusService(partNumber) {
    const options = {
      method: 'GET',
      url: `${process.env.CUSTOM_INVENTORY}${process.env.MERCHANTSV}/status/${partNumber}`,
    };
    const response = await request.genericHandler(options, null, 'inventoryStatus');
    return response;
  }
}

export default new CatalogStore();
