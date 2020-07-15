import request from './../../bin/httpRequest';

/**
 * @param {string} product - is required.
 */
const productDetail = (product) => {
  const partNumber = product.split('/');
  const options = {
    method: 'GET',
    url: `${process.env.MONGO_API}${process.env.MERCHANT}/product/${partNumber[partNumber.length - 1]}?lang=es_mx&currency=mxn`,
  };

  return request.genericHandler(options).then((res) => {
    let callback = { action: 'product', success: false };
    if (!res.error) {
      callback = Object.assign({}, callback, { data: res.data, success: true });
    } else {
      callback = Object.assign({}, callback, { error: res.error });
    }
    return callback;
  });
};

export default productDetail;
