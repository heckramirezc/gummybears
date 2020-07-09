import { observable, action } from 'mobx';
import request from './../../bin/httpRequest';
import { addonsList } from './../../store/Addons/Addons';

const filterFormat = (res) => {
  const chars = [];
  let attrs = [];
  if (res && res.data && res.data.data) {
    const { listFacets } = res.data.data;
    // console.log('listFacets: ', listFacets);
    if (listFacets !== undefined && listFacets.length) {
      for (let i = 0, len = listFacets.length; i < len; i += 1) {
        const { name, atrributes } = listFacets[i];
        // Object creation for characteristic filter
        const re = /filt-chars-/gi;
        if (name.match(re)) {
          for (let i2 = 0, len2 = atrributes.length; i2 < len2; i2 += 1) {
            if (atrributes[i2].label !== '1') {
              atrributes[i2].label = name.replace('filt-chars-', '');
              chars.push(atrributes[i2]);
            }
          }
        } else if (!name.match('OfferPrice_USD')) {
          attrs.push(listFacets[i]);
        }
      }
    }
  }

  attrs.push({
    name: 'filt-caracteristicas',
    atrributes: chars,
  });

  if (res && res.data && res.data.data && res.data.data.skus) {
    attrs = {
      attrs,
      items: res.data.data.skus,
    };
  }

  return attrs;
};

class Facets {
  @observable facetResult = observable.object();
  @observable facetsResponse = observable.object();

  @action allFacets(id) {
    const options = {
      method: 'GET',
      url: `${process.env.WCAAS}${process.env.MERCHANTSV}/productlookup/facets/byCategoryId/${id}`,
    };

    return request.genericHandler(options).then((res) => {
      let callback = { action: 'options', success: false };
      if (!res.error) {
        const filterFormatResult = filterFormat(res);

        callback = Object.assign({}, callback, { data: filterFormatResult, success: true });
      } else {
        callback = Object.assign({}, callback, { error: res.error });
      }
      return callback;
    });
  }

  @action async facetsUpdate(id, query) {
    console.log('facetsUpdate');
    const options = {
      method: 'POST',
      url: `${process.env.WCAAS}${process.env.MERCHANTSV}/${id}/productlookup/facets`,
      data: query,
    };

    return request.genericHandler(options).then(async (res) => {
      let callback = { action: 'facetUpdate', success: false };
      if (!res.error) {
        let excludeAdOns;
        let addons;
        await new Promise(async () => {
          await addonsList().then((resAddons) => {
            addons = resAddons.data[0].filter(x => x.enabled === true && x.auto_cart === true);
          });
        });
        if (res.data.data.skus) excludeAdOns = res.data.data.skus.filter(e => !addons.some(x => x.item_part_number === e.part_number));
        res.data.data.skus = excludeAdOns;
        const filterFormatResult = filterFormat(res);
        callback = Object.assign({}, callback, { data: filterFormatResult.attrs, items: filterFormatResult.items, success: true });
      } else {
        callback = Object.assign({}, callback, { error: res.error });
      }
      return callback;
    });
  }
}

export default new Facets();
