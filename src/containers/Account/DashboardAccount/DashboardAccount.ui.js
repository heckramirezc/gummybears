import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// utilities
import { myOrders, myProfile, myAddress } from './../../../helpers/svg';

const UI = () => (
  <main>
    <section className="account">
      <Helmet title={`Mi Cuenta | ${process.env.COUNTRY}`} />
      {/* <AccountUser /> */}
      <section className="account--dashboard">
        <section>
          <header>
            <h1>Mi Cuenta</h1>
          </header>
          <Link to="/account/orders">
            <i>{myOrders}</i>
            <h2>Mis órdenes</h2>
            <p>Rastrea tus órdenes</p>
          </Link>
          <Link to="/account/addresses">
            <i>{myAddress}</i>
            <h2>Mis direcciones</h2>
            <p>Agrega o edita tus direcciones</p>
          </Link>
          {/* <Link to="/payment">
            <i>{myPayment}</i>
            <h2>Mis formas de pago</h2>
            <p>Edita o agrega más formas de pago</p>
          </Link> */}
          <Link to="/account/profile">
            <i>{myProfile}</i>
            <h2>Mi perfil</h2>
            <p>Edita tus datos personales</p>
          </Link>
        </section>
      </section>
    </section>
  </main>
);

export default UI;
