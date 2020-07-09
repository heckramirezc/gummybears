import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const UI = ({ title, children }) => (
  <main>
    <Helmet title={`Editar Dirección | Tienda Claro ${process.env.COUNTRY}`} />
    {/* <AccountUser /> */}
    <section className="account--form">
      <header className="account--header">
        <h1>{title}</h1>
      </header>
      {children}
    </section>
  </main>
);

UI.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.shape({}).isRequired,
};

export default UI;
