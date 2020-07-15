import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { observer, inject } from 'mobx-react';

const Activation = (props) => {
  console.log(props);
  return (
    <main>
      <Helmet title={`Instrucciones de activación | ${process.env.COUNTRY}`} />
      <section className="page--activation">
        <h2>¡Muchas gracias por tu compra!</h2>
        <h3>Por favor lee la siguiente información:</h3>
        <div>
          <span>1</span>
          <p>Tu compra incluye un teléfono, una tarjeta SIM, y una tarjeta Superpack Express  de 7 días por $0.01.</p>
        </div>
        <div>
          <span>2</span>
          <p>Posterior a recibir tu paquete, inserta la SIM y enciende tu teléfono.</p>
        </div>
        <div>
          <span>3</span>
          <p>Para activar tu número presiona <b>*857#</b> desde tu nuevo teléfono.</p>
        </div>
        <div>
          <span>4</span>
          <p>Ingresa tu número de orden. Puedes encontrarlo en , en tu correo de orden recibida o en tu correo de pago procesado.</p>
        </div>
        <div>
          <span>5</span>
          <p>Recibirás un mensaje de texto con la confirmación de tu número prepago.</p>
        </div>
        <div>
          <span>6</span>
          <p>Para recargar tu tarjeta, raspa el área gris de la tarjeta para obtener tu código de acceso.</p>
        </div>
        <div>
          <span>7</span>
          <p>Marca <b>*999 SEND</b> desde tu Claro e ingresa el código de acceso de tu tarjeta de recarga.</p>
        </div>
        <div>
          <span>8</span>
          <p>Recibirás mensajes de texto de confirmación de la acreditación de la recarga y el paquete de bienvenida.</p>
        </div>
        <div>
          <span>9</span>
          <p>Si tienes algún problema con tu activación o paquete de bienvenida, puedes comunicarte al <b>*90</b> o al <b>2250-5050</b>, es importante que cuentes con los datos de tu factura.</p>
        </div>
      </section>
    </main>
  );
};

Activation.propTypes = {
  accountStore: PropTypes.shape({
    person: PropTypes.shape({
      userGuest: PropTypes.bool,
    }).isRequired,
  }).isRequired,
};

export default inject('accountStore')(observer(Activation));
