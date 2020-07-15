import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
// components
// import { AccountUser } from './account';

// utilities
import { myOrders, iconCheck, cardVisa, cardMaster, cardAmex } from './../../../helpers/svg';
import { currencyFormat, imgFormat, dateFormatEpoch } from './../../../helpers/formatter';
import { getEstimatedDelivery } from '../../../helpers/orders/order_detail_utils';

const OrderStatusSnipet = props => (
  <article className={props.orderInfo.timestamp ? 'active' : 'none'}>
    <aside>
      <i>{iconCheck}</i>
      <b />
    </aside>
    <section>
      <h6>{props.orderInfo.track ? props.orderInfo.track : props.track}</h6>
      <p>{props.orderInfo.timestamp && props.orderInfo.timestamp !== '0' ? dateFormatEpoch(props.orderInfo.timestamp) : ''}</p>
    </section>
  </article>
);

const OrderItemBox = (props) => {
  const currencyText = currencyFormat(props.total).split('.');
  const delivered = props.delivered;
  let estimatedDay;

  if (Object.keys(delivered).length) {
    estimatedDay = (<div><b>Entregado:</b>{ dateFormatEpoch(delivered.timestamp) }</div>);
  } else {
    estimatedDay = (<div><b>Entrega estimada:</b>{ props.delivery }</div>);
  }

  return (
    <article className="order--item-box">
      <picture>
        <img src={imgFormat('90x90', `${process.env.CDN_PATH}${props.img}`)} alt="title" />
      </picture>
      <section>
        <div>
          <b>Producto:</b>
          <p>{props.item}</p>
          <b>Capacidad: <p>{props.capacity}</p></b>
          <b>Color: <p>{props.color}</p></b>
        </div>
        <div>
          <b>Plan:</b>
          <p>Prepago</p>
        </div>
        { estimatedDay }
        <aside>
          <b>Total:</b>
          <p className="price">
            <span className="symbol">$</span>
            <span>{currencyText[0]}.</span>
            <span className="symbol">{currencyText[1]}</span>
          </p>
        </aside>
      </section>
    </article>
  );
};

const OrderStatus = (props) => {
  const orderStatusSnipet = [];
  if (Object.keys(props.candeled).length) {
    orderStatusSnipet.push(<OrderStatusSnipet orderInfo={props.initial} track="En tienda" />);
    orderStatusSnipet.push(<OrderStatusSnipet orderInfo={props.transition} track="En Camino" />);
    orderStatusSnipet.push(<OrderStatusSnipet orderInfo={props.candeled} track="Cancelado" />);
  } else {
    orderStatusSnipet.push(<OrderStatusSnipet orderInfo={props.initial} track="En tienda" />);
    orderStatusSnipet.push(<OrderStatusSnipet orderInfo={props.transition} track="En Camino" />);
    orderStatusSnipet.push(<OrderStatusSnipet orderInfo={props.delivered} track="Entregado" />);
  }
  return (
    <section className="order--status">
      <div className="module">
        <h2>Estatus de orden</h2>
        {orderStatusSnipet}
      </div>
    </section>
  );
};

const OrderInfo = (props) => {
  let traking;
  if (props.tracking.length) {
    traking = props.tracking.map(url => <a href={url.tracking_url} target="_blank" rel="noopener noreferrer">{url.tracking_code}</a>);
  } else {
    traking = <p>Pendiente</p>;
  }

  return (
    <section className="order--info">
      <h2>Datos personales</h2>
      <section>
        <article>
          <h6>Entregar a:</h6>
          <p>{props.name}</p>
        </article>
        <article>
          <h6>Domicilio:</h6>
          <p>{props.address}</p>
        </article>
        <article>
          <h6>Transportista:</h6>
          <span>AeroFlash</span>
        </article>
        <article>
          <h6>Número de rastreo:</h6>
          {traking}
        </article>
        <article>
          <h6>Forma de pago:</h6>
          <p>Tarjeta Débito/Crédito</p>
          { props.card === 'visa' ? <i>{cardVisa}</i> : null }
          { props.card === 'master' ? <i>{cardMaster}</i> : null }
          { props.card === 'amex' ? <i>{cardAmex}</i> : null }
        </article>
      </section>
    </section>
  );
};

const UI = ({ orders, partNumber, trackingEvents, trackingShipments, addOnsList }) => {
  let itemInfo = {};
  if (orders.length) {
    orders.map((order) => {
      itemInfo = { items: order.items, external_referer: order.external_referer, amount: order.amount, checkoutDate: order.checkout_date.$date };
      return order;
    });
  }

  let clientInfo;
  let address;
  let item;
  let amount;
  let img;
  let initial;
  let transition;
  let delivered;
  let candeled;
  let delivery;
  let capacity;
  let color;
  let tsCheckoutDate;
  let checkoutDate;
  if (Object.keys(itemInfo).length > 0) {
    const items = itemInfo.items.filter(chooseItem => !addOnsList.some(x => x.item_part_number === chooseItem.part_number));
    clientInfo = `${items[0].shipping_info.first_name} ${items[0].shipping_info.last_name}`;
    address = `${items[0].shipping_info.address_line_1} ${items[0].shipping_info.address_line_2} ${items[0].shipping_info.city}, ${items[0].shipping_info.state_or_province_name}`;
    // phoneNumber = items[0].shipping_info.phone_1;
    const filCapacity = items[0].product.items[0].attributes.filter(cap => cap.name === 'def-capacidad');
    capacity = filCapacity[0].value;
    const filColor = items[0].product.items[0].attributes.filter(cap => cap.name === 'def-color');
    color = filColor[0].value;
    item = items[0].product.locales.es_sv.name;
    amount = itemInfo.amount.usd.grand_total;
    img = items[0].product.items[0].images[0];
    delivery = getEstimatedDelivery(itemInfo.checkoutDate);

    // get trakink info
    trackingEvents.forEach((track) => {
      if (track.track.toLowerCase() === 'en tienda') {
        initial = track;
      }
      if (track.track.toLowerCase() === 'en camino') {
        transition = track;
      }
      if (track.track.toLowerCase() === 'entregado' || track.track.toLowerCase() === 'recoger en tienda') {
        delivered = track;
      }
      if (track.track.toLowerCase() === 'cancelado') {
        candeled = track;
      }
    });
    if (initial === undefined) {
      checkoutDate = new Date(itemInfo.checkoutDate);
      tsCheckoutDate = checkoutDate.getTime();
      initial = { timestamp: tsCheckoutDate, track: 'En Tienda' };
    }
  }

  return (
    <main>
      <Helmet title={`Detalle Orden | ${process.env.COUNTRY}`} />
      {/* <AccountUser /> */}
      <section className="order--detail">
        <header className="account--header">
          <i>{myOrders}</i>
          <h1>Mis órdenes</h1>
        </header>
        <section className="order--item">
          <h2>Detalle de orden: {partNumber}</h2>
          <Link to="/account/orders">Ver todas mis órdenes</Link>
          <OrderItemBox img={img} item={item} color={color} capacity={capacity} plan="" delivery={delivery} total={amount} delivered={delivered} />
        </section>
        <OrderStatus initial={initial} transition={transition} delivered={delivered} candeled={candeled} />
        <OrderInfo name={clientInfo} address={address} tracking={trackingShipments} payment="" card="" />
      </section>
    </main>
  );
};

UI.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.shape({})),
  partNumber: PropTypes.string,
  trackingEvents: PropTypes.shape({}),
  trackingShipments: PropTypes.shape({}),
};

UI.defaultProps = {
  orders: [],
  partNumber: '',
  trackingEvents: {},
  trackingShipments: {},
};

OrderItemBox.propTypes = {
  item: PropTypes.string,
  delivery: PropTypes.string,
  total: PropTypes.string,
  img: PropTypes.string,
  color: PropTypes.string,
  capacity: PropTypes.string,
  delivered: PropTypes.shape({}),
};

OrderItemBox.defaultProps = {
  item: '',
  total: '0000',
  img: '',
  color: '',
  capacity: '',
  delivery: '',
  delivered: {},
};

OrderStatus.propTypes = {
  initial: PropTypes.shape({}),
  delivered: PropTypes.shape({}),
  transition: PropTypes.shape({}),
  candeled: PropTypes.shape({}),
};

OrderStatus.defaultProps = {
  initial: {},
  delivered: {},
  transition: {},
  candeled: {},
};

OrderInfo.propTypes = {
  name: PropTypes.string,
  address: PropTypes.string,
  tracking: PropTypes.string,
  card: PropTypes.string.isRequired,
};

OrderInfo.defaultProps = {
  name: '',
  address: '',
  tracking: '',
};

OrderStatusSnipet.propTypes = {
  orderInfo: PropTypes.shape({
    timestamp: PropTypes.string,
    track: PropTypes.string,
  }),
  track: PropTypes.string.isRequired,
};
OrderStatusSnipet.defaultProps = {
  orderInfo: {
    timestamp: '0',
    track: '',
  },
};
export default UI;
