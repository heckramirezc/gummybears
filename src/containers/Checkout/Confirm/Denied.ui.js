import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import he from 'he';
import Notification from '../../Views/Notification/Notification.ui';

// utilities
import { iconSad } from '../../../helpers/svg';

const ConfirmAddress = ({ title, name, content, number }) => (
  <article>
    <h3>{title}</h3>
    <p>{name}</p>
    <p>{content}</p>
    <b>{number || ''}</b>
  </article>
);

const Denied = ({ orderInfo, errorDescription }) => {
  let title = 'Lo sentimos, tu transacción no pudo ser procesada, contactá a tu banco para más detalle';
  if (errorDescription !== '') title = errorDescription;
  const errorTemplate = <Notification title={title} />;
  return (
    <main className="checkout">
      <Helmet title={`Confirmación de Compra | ${process.env.COUNTRY}`} />
      <section className="denied">
        <header className="denied--header">
          <span>{iconSad}</span>
          <h1>¡No se pudo realizar tu compra!</h1>
          <p>Tú número de orden es: {(orderInfo ? orderInfo.external_referer : '')}</p>
          <br />
          { errorTemplate }
        </header>
        <section className="denied--address">
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
        <footer className="denied--footer">
          <Link to="/checkout/address"><span>Intentar de nuevo</span></Link>
          <Link to="/" id="seguir-comprando"><span>Seguir comprando</span></Link>
        </footer>
      </section>
    </main>
  );
};

Denied.propTypes = {
  orderInfo: PropTypes.shape({}).isRequired,
  errorDescription: PropTypes.string.isRequired,
};

export default Denied;
