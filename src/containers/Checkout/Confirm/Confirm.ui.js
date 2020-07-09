import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import he from 'he';
import $ from 'jquery';
import moment from 'moment';
import { getEstimatedDeliveryConfirm } from '../../../helpers/orders/order_detail_utils';

// utilities
import { iconCheck, iconUserData } from '../../../helpers/svg';
import { currencyFormat, imgFormat } from './../../../helpers/formatter';

const ConfirmTotal = ({ total }) => {
  const currencyText = (total && total.amount && total.amount.usd ? currencyFormat(total.amount.usd.grand_total).split('.') : 0);

  return (
    <section className="confirm--total">
      <b>Total:</b>
      <p>
        <span className="symbol">$</span>
        <span>{currencyText[0]}.</span>
        <span className="symbol">{currencyText[1]}</span>
      </p>
    </section>
  );
};

const ConfirmProductBox = ({ orderInfo, addons }) => {
  const addonsList = addons.filter(x => x.enabled === true && x.auto_cart === true);
  const items = (orderInfo ? orderInfo.items : []);
  const getOrderItem = items.filter(e => !addonsList.some(x => x.item_part_number === e.part_number));
  let orderItem;
  (getOrderItem && getOrderItem.length && getOrderItem[0].product ? getOrderItem[0].product.items : []).map((x) => {
    const orderItemPartNumber = x.part_number;
    if (orderItemPartNumber === getOrderItem[0].part_number) orderItem = x;
    return orderItem;
  });

  let first = true;
  const addOns = (addonsList || []).map((data) => {
    const subtotal = (data.price * data.quantity).toString().replace('.', '');
    const total = currencyFormat(subtotal).split('.');
    if (first) {
      first = false;
      return (
        <article>
          <label>Adicional</label>
          <h4><b>{ data.description }</b></h4>
          <i />
          <p>
            <span className="symbol">$</span>
            <span>{total[0]}.</span>
            <span className="symbol">{String(total[1]).padStart(2, '0')}</span>
          </p>
        </article>
      );
    } else {
      return (
        <article>
          <h4><b>{ data.description }</b></h4>
          <i />
          <p>
            <span className="symbol">$</span>
            <span>{total[0]}.</span>
            <span className="symbol">{String(total[1]).padStart(2, '0')}</span>
          </p>
        </article>
      );
    }
  });

  if (orderInfo && orderItem) {
    const oid = localStorage.getItem(`purchase_${orderInfo.external_referer}`);
    if (!oid) {
      localStorage.setItem(`purchase_${orderInfo.external_referer}`, 'ok');
    }
  }

  const currencyText = orderItem && orderItem.pricing && orderItem.pricing.usd ? currencyFormat(orderItem.pricing.usd.offer_price).split('.') : 0;
  const specs = (orderItem ? orderItem.attributes : []).reduce((a, b, i) => {
    const index = `cart-spec-${i}`;
    if (b.name === 'def-capacidad' || b.name === 'def-color') {
      a.push(<p key={index}><b>{b.value}</b></p>);
    }
    return a;
  }, []);

  let img = <div />;

  if (orderItem && orderItem.images && orderItem.images.length) img = <img src={imgFormat('210x180', `${process.env.CDN_PATH}${orderItem.images[0]}`)} alt="title" />;

  return (
    <section className="confirm--product-box">
      <picture>
        {img}
      </picture>
      <aside>
        <label>Cant</label>
        <p>1</p>
      </aside>
      <section>
        <article>
          <label>Equipo</label>
          <h4><b>{(orderItem && orderItem.locales && orderItem.locales.es_sv ? orderItem.locales.es_sv.name : '')}</b></h4>
          {specs}
          <i />
          <p>
            <span className="symbol">$</span>
            <span>{currencyText[0]}.</span>
            <span className="symbol">{currencyText[1]}</span>
          </p>
        </article>
        {addOns}
        <article>
          <label>Envío</label>
          <h4>Costo de envío </h4>
          <i />
          <p>
            <span>Incluido</span>
          </p>
        </article>
      </section>
    </section>
  );
};

const ConfirmAddress = ({ title, name, content, number }) => (
  <article>
    <h3>{title}</h3>
    <p>{name}</p>
    <p>{content}</p>
    <b>{number || ''}</b>
  </article>
);

const ConfirmWarning = () => {
  const trigger = () => {
    $('.ui--warning-modal').toggleClass('active');
  };
  return (
    <div className="ui--warning ui--warning-confirm">
      {iconUserData}
      <p>
        <span><b>IMPORTANTE: </b>Según Ley de Terminales Móviles Decreto 08-2013 para recibir tu teléfono si la entrega es a domicilio es necesario entregar una <b>fotocopia del DUI</b> con el que realizaste la compra y si la entrega es en Tienda Claro únicamente debes presentar el DUI con el que efectuaste la compra.</span>
        <span>Revisa las áreas en las que la copia del DUI no es necesaria.</span>
      </p>
      <aside className="ui--warning-modal">
        <div>
          <section>
            <a onClick={trigger}>x</a>
            <p><b>Áreas habilitadas para fotografía del DUI:</b></p>
            <p>En estas zonas el repartidor tomará una <b>fotografía del DUI</b> con el que realizaste la compra</p>
            <ul>
              <li>Guatemala</li>
              <li>Santa Catarina Pinula (a excepción de zona 10)</li>
              <li>San Jóse Pinula</li>
              <li>Chinautla (únicamente Proyectos 4 y 3, Santa Marta, Primero de Mayo y Villas el Milagro)</li>
              <li>Mixco</li>
              <li>San Pedro Sacatepéquez (únicamente zona 1 y 2)</li>
              <li>Villa Nueva</li>
              <li>Villa Canales</li>
              <li>San Miguel Petapa</li>
            </ul>
          </section>
        </div>
      </aside>
    </div>
  );
};

const Confirm = ({ orderInfo, print, addons }) => (
  <main className="checkout">
    <Helmet title={`Confirmación de Compra | Tienda Claro ${process.env.COUNTRY}`} />
    <section className="confirm">
      <header className="confirm--header">
        <span>{iconCheck}</span>
        <h1>¡Tu compra ha sido realizada con éxito!</h1>
        <p>Tú número de orden es: {(orderInfo ? orderInfo.external_referer : '')}</p>
      </header>
      <section className="confirm--product">
        <h3>Fecha estimada de entrega: { getEstimatedDeliveryConfirm(moment())}</h3>
        <h2>Resumen de compra</h2>
        <ConfirmProductBox orderInfo={orderInfo} addons={addons} />
        <ConfirmTotal total={orderInfo} />
      </section>
      <ConfirmWarning />
      <section className="confirm--address">
        <h2>Datos Personales</h2>
        <ConfirmAddress
          title="Datos de contacto"
          content={(orderInfo && orderInfo.items && orderInfo.items.length && orderInfo.items[0].shipping_info ? `${orderInfo.items[0].shipping_info.first_name || ''} ${orderInfo.items[0].shipping_info.last_name || ''}` : '')}
          number={(orderInfo && orderInfo.items && orderInfo.items.length && orderInfo.items[0].shipping_info ? orderInfo.items[0].shipping_info.phone_1 : '')}
        />
        <ConfirmAddress
          title={`Datos de ${(orderInfo && orderInfo.items && orderInfo.items.length && orderInfo.items[0].shipping_info ? orderInfo.items[0].shipping_info.nickname : '')}`}
          content={
            (orderInfo && orderInfo.items && orderInfo.items.length && orderInfo.items[0].shipping_info ? `${he.decode(orderInfo.items[0].shipping_info.address_line_1 || '')} ${he.decode(orderInfo.items[0].shipping_info.address_line_2 || '')} ${he.decode(orderInfo.items[0].shipping_info.city || '')}, ${he.decode(orderInfo.items[0].shipping_info.state_or_province_name || '')}` : '')
          }
        />
        <ConfirmAddress
          title={`Datos de ${(orderInfo && orderInfo.billing_info ? orderInfo.billing_info.nickname : '')}`}
          name={(orderInfo && orderInfo.items && orderInfo.items.length && orderInfo.items[0].shipping_info ? `${orderInfo.items[0].shipping_info.first_name || ''} ${orderInfo.items[0].shipping_info.last_name || ''}` : '')}
          content={
            (orderInfo && orderInfo.billing_info ? `${he.decode(orderInfo.billing_info.address_line_1 || '')} ${he.decode(orderInfo.billing_info.address_line_2 || '')}` : '')
          }
        />
      </section>
      <footer className="confirm--footer">
        <a onClick={print}><span>Imprimir Resumen</span></a>
        <Link to="/" id="seguir-comprando"><span>Seguir comprando</span></Link>
      </footer>
    </section>
  </main>
);

Confirm.propTypes = {
  orderInfo: PropTypes.shape({}).isRequired,
  print: PropTypes.func.isRequired,
  addons: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

ConfirmProductBox.propTypes = {
  orderInfo: PropTypes.shape({}).isRequired,
};

ConfirmAddress.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string,
  content: PropTypes.string.isRequired,
  number: PropTypes.string,
};

ConfirmAddress.defaultProps = {
  name: '',
  number: '',
};

ConfirmTotal.propTypes = {
  total: PropTypes.shape({}).isRequired,
};

export default Confirm;
