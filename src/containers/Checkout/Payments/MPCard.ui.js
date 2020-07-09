import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';

// import Notification from '../../Views/Notification/Notification.ui';

// Helpers
// import { cardVisa, cardMaster, cardAmex } from './../../../helpers/svg';
// import { textChars, numberChars } from '../../../helpers/char-restriction';

const UI = ({ handleChange, mpCardForm, handleSubmit, error, errorDescription, pickupInStore, widgetUrl }) => {
  console.log(widgetUrl);
  console.log(handleChange);
  console.log(mpCardForm);
  console.log(handleSubmit);
  console.log(pickupInStore);
  document.getElementById('pp_orderId');
  const date = new Date();
  const currentYear = date.getFullYear();
  const year = [];
  const month = [];

  for (let i = 0; i < 10; i += 1) {
    year.push(<option key={currentYear + i} value={currentYear + i} >{currentYear + i}</option>);
  }

  for (let i = 0; i < 12; i += 1) {
    const monthText = moment().month(i).format('MM');
    month.push(<option key={monthText} value={monthText}>{monthText}</option>);
  }

  /* const inputs = Object.keys(payload).map((key) => {
    delete payload.post_action;
    return <input key={key} type="hidden" name={key} value={payload[key]} />;
  }); */
  console.log(error);
  if (error) {
    console.log(errorDescription);
    // let title = 'Lo sentimos, tu transacción no pudo ser procesada, contacta a tu banco para más detalle';
    // if (errorDescription !== '') title = errorDescription;
    // errorTemplate = <Notification title={title} />;
  }
  return (
    <div>
      <h2>Forma de pago</h2>
      <h3>Ingresá los datos de la tarjeta como están en el plástico</h3>
      <p className="pp__label">** Nombre del titular</p>
      <input type="text" id="pp_name" className="pp__input" placeholder="Nombre del Titular" />
      <p id="pp_card__error" className="pp__error">Ingrese una tarjeta válida</p>
      <div id="paymentForm" />
      <div id="ui--notification" className="ui--notification hidden">
        <p>Lo sentimos, tu transacción no pudo ser procesada, contactá a tu banco para más detalle.</p>
      </div>
      <div id="ui--timeout-notification" className="ui--notification hidden">
        <p>Se ha vencido la sesión. Por favor, inicia sesión de nuevo.</p>
      </div>
      <aside className="checkout--continue">
        <Link id="payment-back" to={{ pathname: '/checkout/address', state: { pickupInStore } }}><span>Regresar</span></Link>
        <a id="session-back" href="/" style={{ display: 'none' }}><span>Regresar</span></a>
      </aside>
    </div>
  );
};

UI.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  mpCardForm: PropTypes.shape({}).isRequired,
  error: PropTypes.bool.isRequired,
  pickupInStore: PropTypes.bool.isRequired,
  errorDescription: PropTypes.string.isRequired,
  widgetUrl: PropTypes.string.isRequired,
};

export default UI;
