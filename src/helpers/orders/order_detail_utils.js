import moment from 'moment';
import { TrakingEnum } from './common_data';

function _estimatedDelivery(date, esteemed) {
  const priorDate = new Date(date);
  const estimatedDelivery = [];
  let flag = true;
  let i = 0;

  while (i < esteemed) {
    priorDate.setDate(priorDate.getDate() + 1); // add 1 day
    if (priorDate.getDay() !== 6 && priorDate.getDay() !== 0) {
      i += 1;
    }
    if (i === esteemed - 1 && flag) {
      estimatedDelivery.push(new Date(priorDate));
      flag = false;
    }
  }
  estimatedDelivery.push(new Date(priorDate));

  const fisrtDate = estimatedDelivery[0];
  const secondDate = estimatedDelivery[1];
  let estimatedDate = '';

  const fisrtDateText = moment(fisrtDate).locale('es');
  const fistMonth = fisrtDateText.format('MMMM');
  const secondDateText = moment(secondDate).locale('es');
  const seconMonth = secondDateText.format('MMMM');

  if (fisrtDate.getFullYear() === secondDate.getFullYear()) {
    if (fisrtDate.getMonth() === secondDate.getMonth()) {
      estimatedDate = `Del ${fisrtDate.getDate()} al ${secondDate.getDate()} de ${fistMonth}`;
    } else {
      estimatedDate = `Del ${fisrtDate.getDate()} de ${fistMonth} al ${secondDate.getDate()} de ${seconMonth}`;
    }
  } else {
    estimatedDate = `Del ${fisrtDate.getDate()} de ${fistMonth} del ${fisrtDate.getFullYear()} al ${secondDate.getDate()} de ${seconMonth} del ${secondDate.getFullYear()}`;
  }

  return estimatedDate;
}

function _estimatedDeliveryConfirm(date, esteemed) {
  const priorDate = new Date(date);
  const estimatedDelivery = [];
  let flag = true;
  let i = 0;

  while (i < esteemed) {
    priorDate.setDate(priorDate.getDate() + 1); // add 1 day
    if (priorDate.getDay() !== 6 && priorDate.getDay() !== 0) {
      i += 1;
    }
    if (i === esteemed - 1 && flag) {
      estimatedDelivery.push(new Date(priorDate));
      flag = false;
    }
  }

  const fisrtDate = estimatedDelivery[0];
  let estimatedDate = '';

  const fisrtDateText = moment(fisrtDate).locale('es');
  const fistDay = fisrtDateText.format('DD');
  const fistMonth = fisrtDateText.format('MMM');

  estimatedDate = `${fistDay}-${fistMonth}-${fisrtDate.getFullYear()}`;
  return estimatedDate;
}

function _trackingOperations(order) {
  if (!order.length) return [];
  if (!order[0].tracking_info) return [];
  const events = order.map(event => event.tracking_info.events);
  const tracking = events[0];
  const statusOder = new Set();
  tracking.map((track) => {
    const mySize = TrakingEnum[track.status];
    statusOder.add({ track: TrakingEnum.properties[mySize].code, timestamp: track.timestamp });
    return statusOder;
  });

  // if on store is not in register add on store information
  let isInStore = false;
  statusOder.forEach((track) => {
    if (track.track === 'En Tienda') isInStore = true;
  });
  if (!isInStore) {
    const time = new Date(order[0].checkout_date.$date).getTime();
    const timestamp = time;
    statusOder.add({ track: 'En Tienda', timestamp });
  }

  return statusOder;
}

function _trackingNumber(trackingnumber) {
  if (!trackingnumber.length) return [];
  if (!trackingnumber[0].tracking_info) return [];
  let trackingNumberArray = [];
  if (trackingnumber.length) {
    const tracking = trackingnumber[0].tracking_info.shipments;
    if (tracking.length) {
      trackingNumberArray = tracking.map(track => track);
    }
  }

  return trackingNumberArray;
}

function getTrackingOperations(order) {
  return _trackingOperations(order);
}

function getEstimatedDelivery(date) {
  return _estimatedDelivery(date, 10);
}

function getEstimatedDeliveryConfirm(date) {
  return _estimatedDeliveryConfirm(date, 10);
}

function getTrackingNumber(trackingnumber) {
  return _trackingNumber(trackingnumber);
}

export {
  getTrackingOperations,
  getEstimatedDelivery,
  getEstimatedDeliveryConfirm,
  getTrackingNumber,
};
