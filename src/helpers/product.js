import _ from 'lodash';

const productHelpers = {
  /**
   * Generate color dictionary
   * @param {obj} props
  */
  colorProduct(props) {
    const productList = {};
    _.remove(props.items, (item) => {
      if (item.available === true && item.buyable === true) {
        return false;
      }
      return true;
    });
    _.each(props.items, (data) => {
      const colorFilter = _.filter(data.attributes, { name: 'def-color' });
      const images = [];
      if (colorFilter.length) {
        for (let i = 0; i < 8; i += 1) {
          if (data && data.images && data.images.length && data.images[i]) {
            images.push(data.images[i]);
          }
        }

        productList[colorFilter[0].value] = {
          color: colorFilter[0].value,
          part_number: data.part_number,
          locales: data.locales,
          pricing: data.pricing,
          available: data.available,
          images,
        };
      }
    });
    return productList;
  },

  /**
   * Generate size dictionary
   * @param {obj} props
  */
  sizeProduct(props) {
    const sizeList = {};
    _.each(props.items, (data) => {
      const sizeFilter = _.filter(data.attributes, { name: 'def-capacidad' });
      const colorFilter = _.filter(data.attributes, { name: 'def-color' });
      if (colorFilter.length || sizeFilter.length) {
        if (_.isUndefined(sizeList[colorFilter[0].value])) sizeList[colorFilter[0].value] = [];
        sizeList[colorFilter[0].value].push({
          size: sizeFilter[0].value,
          part_number: data.part_number,
          pricing: data.pricing,
        });
      }
    });
    return sizeList;
  },


  itemByColorAndSize(props) {
    const item = {};
    _.each(props.items, (data) => {
      const sizeFilter = _.filter(data.attributes, { name: 'def-capacidad' });
      const colorFilter = _.filter(data.attributes, { name: 'def-color' });
      if (colorFilter.length || sizeFilter.length) {
        if (_.isUndefined(item[colorFilter[0].value])) item[colorFilter[0].value] = {};
        if (_.isUndefined(item[colorFilter[0].value][sizeFilter[0].value])) {
          item[colorFilter[0].value][sizeFilter[0].value] = {};
        }
        item[colorFilter[0].value][sizeFilter[0].value] = { part_number: data.part_number, available: data.available, buyable: data.buyable, size: sizeFilter[0].value };
      }
    });
    return item;
  },

  arrayToObjectProductInfo(exp, props) {
    let attrs;
    if (props && props.length) {
      _.map(props[0].items, (data) => {
        const attrsTech = _.reduce(data.attributes, (a, b) => {
          if ((b.name).match(exp)) {
            a[b.name] = b.value;
          }
          return a;
        }, {});

        attrs = attrsTech;
      });
    }

    return attrs;
  },
};

export default productHelpers;
