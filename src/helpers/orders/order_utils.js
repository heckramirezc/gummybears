import { StatusEnum } from './common_data';

function _extractDaysFromOrderHistory(orderHistory, days) {
  const priorDate = new Date();
  priorDate.setDate(priorDate.getDate() - days);
  const dates = orderHistory.filter((order) => {
    const orderHistoryDate = new Date(order.checkout_date.$date);
    return (orderHistoryDate >= priorDate);
  });
  return dates;
}

function _extractMonthsFromOrderHistory(orderHistory, months) {
  // Ordenar por fecha
  const priorDate = new Date();
  priorDate.setMonth(priorDate.getMonth() - months);
  const dates = orderHistory.filter((order) => {
    const orderHistoryMonth = new Date(order.checkout_date.$date);
    return (orderHistoryMonth >= priorDate);
  });
  return dates;
}

function _extractStatusFromOrderHistory(orderHistory, status) {
  const trackingArray = JSON.parse(JSON.stringify(orderHistory));
  const lastUpdate = [];
  const trackingInfo = [];
  const trackingFiltered = [];

  // erase not traking with events
  trackingArray.map((trak) => {
    if (trak.tracking_info && trak.tracking_info.events.length) {
      trackingInfo.push(trak);
    }
    return false;
  });


  // choose last update in event
  if (trackingInfo.length) {
    trackingInfo.map((last) => {
      const max = last.tracking_info.events.reduce((prev, current) => {
        if (prev.timestamp > current.timestamp) {
          return prev;
        } else return current;
      });
      last.tracking_info.events = [max];
      lastUpdate.push(last);
      return false;
    });
  }


  // elements that are be looking for
  lastUpdate.map((filtered) => {
    if (filtered.tracking_info.events[0].status === status) {
      trackingFiltered.push(filtered);
    }
    return false;
  });

  return trackingFiltered;
}

function _chooseStatusOrders(trackingHistory) { // , filterWord) {
  if (trackingHistory.tracking_info && trackingHistory.tracking_info.events && trackingHistory.tracking_info.events.length) {
    const orderHistory = trackingHistory.reduce((order) => {
      const lastUpdate = order.tracking_info.events.reduce((prev, next) => {
        if (prev.timestamp > next.timestamp) {
          return prev;
        } else return next;
      });
      return lastUpdate;
    });
    return orderHistory;
  }
  return true;
}

function _statusOrder(trackingInfo) {
  if (trackingInfo && trackingInfo.events && trackingInfo.events.length) {
    const max = trackingInfo.events.reduce((prev, current) => {
      if (prev.timestamp > current.timestamp) {
        return prev;
      } else return current;
    });
    const mySize = StatusEnum[max.status];
    const myCode = StatusEnum.properties[mySize].code;

    return myCode;
  }
  return null;
}


function getProductsDaysAgo(orderHistory) {
  return _extractDaysFromOrderHistory(orderHistory, 30);
}

function getProductsMonthsAgo(orderHistory) {
  return _extractMonthsFromOrderHistory(orderHistory, 6);
}

function getProductsStatus(orderHistory, state) {
  return _extractStatusFromOrderHistory(orderHistory, state);
}


function getStatusOrder(trackingInfo) {
  return _statusOrder(trackingInfo);
}
function getChooseStatusOrders(trackingHistory, filterWord) {
  return _chooseStatusOrders(trackingHistory, filterWord);
}

export {
  getProductsDaysAgo,
  getProductsMonthsAgo,
  getProductsStatus,
  getStatusOrder,
  getChooseStatusOrders,
};

