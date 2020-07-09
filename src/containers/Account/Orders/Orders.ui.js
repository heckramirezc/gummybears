import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

// helpers
import { myOrders } from './../../../helpers/svg';
import { currencyFormat, dateFormat } from './../../../helpers/formatter';
import { getStatusOrder } from '../../../helpers/orders/order_utils';

const OrderFilters = ({ totalOrders, handleChangeOrderHistory, isActive }) => {
  const enTienda = ('PROCESS' || 'UPDATE');
  return (
    <section className="order--filters">
      {/*
      <nav className="order--filters-status">
        <a id="all" onClick={e => isActive(e)} className="active">Todos</a>
        <a id="in-progress" onClick={e => isActive(e)}>En Curso</a>
        <a id="canceled" onClick={e => isActive(e)}>Cancelados</a>
      </nav>
      */}
      <div className="order--filters-status">
        <p>Elige el estatus de tus órdenes:</p>
        <label className="select">
          <select onChange={isActive}>
            <option value="ALL">Todos</option>
            <option value="PENDING">Pendiente</option>
            <option value={enTienda}>En tienda</option>
            <option value="SHIPPING">En camino</option>
            <option value="CLOSED">Entregado</option>
            <option value="CANCELLED">Cancelado</option>
            <option value="DELIVERED">Recoger en tienda</option>
          </select>
        </label>
      </div>
      <div className="order--filters-date">
        <p>Elige una fecha para ver tus órdenes:</p>
        <label>
          <select onChange={handleChangeOrderHistory}>
            <option value="all">Todos</option>
            <option value="days">Últimos 30 días</option>
            <option value="month">Últimos 6 meses</option>
          </select>
        </label>
        <b>{totalOrders} órdenes en total</b>
      </div>
    </section>
  );
};

const OrderBox = ({ itemInfo, productInfo, trackingInfo }) => {
  const currencyText = currencyFormat(productInfo.amount.usd.grand_total).split('.');

  return (
    <article className="order--box">
      <div>
        <h6>Número de orden:</h6>
        <p>{productInfo.external_referer}</p>
      </div>
      <div>
        <h6>Estatus de orden:</h6>
        <p>{ (getStatusOrder(trackingInfo) || 'En tienda') }</p>
      </div>
      <div>
        <h6>Artículos pedidos:</h6>
        <p>{itemInfo.quantity}</p>
      </div>
      <div>
        <h6>Orden realizada:</h6>
        <p>{ productInfo.checkout_date ? dateFormat(productInfo.checkout_date.$date) : ''}</p>
      </div>
      <aside>
        <h3>Total:</h3>
        <p className="price">
          <span className="symbol">$</span>
          <span>{currencyText[0]}.</span>
          <span className="symbol">{currencyText[1]}</span>
        </p>
      </aside>
      <Link to={`/account/orders/details/${productInfo.external_referer}`}>Ver Detalle</Link>
    </article>
  );
};

const UI = ({ isActive, orderHistory, handleChangeOrderHistory }) => {
  let orderBox;
  let totalOrders;
  // let statusOrder;
  if (Object.keys(orderHistory).length > 0) {
    orderBox = orderHistory.map((data, index) => <OrderBox key={`${index}-key`} itemInfo={data.items[0]} productInfo={data} trackingInfo={data.tracking_info} />);
    totalOrders = orderHistory.length;
  }

  return (
    <main>
      <Helmet title={`Mis Órdenes | Tienda Claro ${process.env.COUNTRY}`} />
      {/* <AccountUser /> */}
      <section className="order">
        <header className="account--header">
          <i>{myOrders}</i>
          <h1>Mis órdenes</h1>
        </header>
        <OrderFilters isActive={isActive} totalOrders={totalOrders} handleChangeOrderHistory={handleChangeOrderHistory} />
        <section className="order--list">
          {orderBox}
        </section>
      </section>
    </main>
  );
};

UI.propTypes = {
  isActive: PropTypes.func.isRequired,
  orderHistory: PropTypes.arrayOf(PropTypes.shape({})),
  handleChangeOrderHistory: PropTypes.func.isRequired,
};

UI.defaultProps = {
  orderHistory: [],
};

OrderBox.propTypes = {
  itemInfo: PropTypes.shape({}),
  productInfo: PropTypes.shape({}),
  trackingInfo: PropTypes.shape({}),
};

OrderBox.defaultProps = {
  itemInfo: {},
  productInfo: {},
  trackingInfo: null,
};
// OrderBox
OrderFilters.propTypes = {
  // isActive: PropTypes.func.isRequired,
  totalOrders: PropTypes.number,
  handleChangeOrderHistory: PropTypes.func.isRequired,
  trackingInfo: PropTypes.shape({}),
  isActive: PropTypes.func.isRequired,
};

OrderFilters.defaultProps = {
  totalOrders: 0,
  trackingInfo: {},
};

export default UI;
