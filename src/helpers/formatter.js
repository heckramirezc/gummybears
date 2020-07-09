import numeral from 'numeral';
import moment from 'moment';

const helper = {
  simpleFormat(currenncyStr) {
    const currency = numeral(currenncyStr).format('0,0.');
    return currency;
  },

};


export const currencyFormat = (currency) => {
  const number = numeral(currency);
  const divide = number.divide(100);
  const currentText = numeral(divide).format('Q0,0.00');

  return currentText;
};


export const currencyFormatGTM = (currency) => {
  const number = numeral(currency);
  const divide = number.divide(100);
  const currentText = numeral(divide).format('00.00');

  return currentText;
};

export const dateFormat = (date) => {
  const dateText = moment(date).locale('es');
  return dateText.format('DD - MMMM - YYYY');
};

/**
  @param {string} epoch will need be a number
  @return formate date
 */
export const dateFormatEpoch = (epoch) => {
  let epochDate = epoch;
  if (typeof epoch !== 'number') epochDate = parseInt(epoch, 10);
  if (String(epochDate).length <= 10) epochDate = parseInt(epoch, 10) * 1000;
  const date = new Date(epochDate);
  return dateFormat(date);
};

export const imgFormat = (typeImage, image) => {
  let imgMeasure;
  switch (typeImage) {
    case '90x90':
      imgMeasure = image.replace('.jpg', '_90x90.jpg');
      break;
    case '210x180':
      imgMeasure = image.replace('.jpg', '_210x180.jpg');
      break;
    case '312x400':
      imgMeasure = image.replace('.jpg', '_312x400.jpg');
      break;
    default:
      break;
  }
  return imgMeasure;
};

export const parseQuery = (queryString) => {
  const query = {};
  const pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
  for (let i = 0; i < pairs.length; i += 1) {
    const pair = pairs[i].split('=');
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }
  return query;
};

export const twoDigitsFormatter = (digit) => {
  let format = digit;
  if (!(digit instanceof String)) format = String(digit);
  if (format.length < 2) {
    format = `0${format}`;
  }

  return format;
};

export const fourDigitsFormatter = (digit) => {
  let format;
  if (!(digit instanceof String)) format = String(digit);
  while (format.length < 4) {
    format = `0${format}`;
  }

  return format;
};


export default helper;
