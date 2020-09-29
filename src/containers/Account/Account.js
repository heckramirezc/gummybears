import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

// utilities
import { iconCheck, icoCustomer, icoPortability } from '../../helpers/svg';


export const Customer = () => {
  const closeModal = () => {
    $('.modal--customer').removeClass('active');
    $('.modal').fadeOut();
  };
  const switchModal = () => {
    $('.modal--customer').removeClass('active');
    $('.modal--user').addClass('active');
  };

  return (
    <section className="modal--content">
      <header>
        <i>{icoCustomer}</i>
        <h2>¿Eres cliente Claro?</h2>
      </header>
      <nav>
        <Link to="/checkout" onClick={closeModal} id="no-soy-cliente">No soy cliente</Link>
      </nav>
    </section>
  );
};

export const Portability = () => (
  <section className="modal--content">
    <header>
      <i>{icoPortability}</i>
      <h2>¿Cómo quieres adquirir tu equipo?</h2>
    </header>
    <nav>
      <a>Línea nueva</a>
      <a>Portabilidad</a>
    </nav>
    <a className="back">Regresar</a>
  </section>
);

export const Renewal = () => (
  <section className="modal--content">
    <header>
      <i>{icoPortability}</i>
      <h2>¿Cómo quieres adquirir tu equipo?</h2>
    </header>
    <nav>
      <a>Línea nueva</a>
      <a>Portabilidad</a>
    </nav>
    <section>
      <header>
        <i>{iconCheck}</i>
        <div>
          <h4>Estado de renovación: Con un costo adicional</h4>
          <p>*Aún no termina tu contrato</p>
        </div>
      </header>
      <ul>
        <li><b>Plan:</b> <span>Sin límte</span></li>
        <li><b>Plazo:</b> <span>24 Mensualidades</span></li>
        <li><b>Último pago:</b> <span>$12,000.00</span></li>
      </ul>
      <aside>
        <p className="price">
          <span className="symbol">$</span>
          <span>4,350.</span>
          <span className="symbol">00</span>
          <span className="legend">Costo por renovación</span>
        </p>
      </aside>
    </section>
    <a className="back">Regresar</a>
  </section>
);

export const Number = () => (
  <section className="modal--number">
    <header>
      <h2>Trae tu número a Claro</h2>
      <p>ingrese su número para verificar la disponibilidad</p>
    </header>
    <form>
      <label>
        <input type="text" placeholder="ingrese los 10 dígitos de tu número" />
        <i>{iconCheck}</i>
      </label>
      <p>Tú número esta listo y disponible para transferirlo a Claro</p>
    </form>
    <aside>
      <a>Continuar</a>
    </aside>
    <a className="back">Regresar</a>
  </section>
);
