import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Loading from '../ui/Loading';

// utilities
import { logo } from './../../helpers/svg';

const UI = () => (
  <header className="header">
    <Helmet title={`Proceso de Compra | Tienda Claro ${process.env.COUNTRY}`} />
    <picture>
      <img src="/media/layout/colors.jpg" alt="Claro" />
    </picture>
    <div className="module">
      <Link to="/">{logo}</Link>
      <h1>{window.location.pathname === '/checkout/purchase-limit' ? 'Información importante' : 'Proceso de Compra'}</h1>
    </div>
    <Loading />
  </header>
);

export default UI;
