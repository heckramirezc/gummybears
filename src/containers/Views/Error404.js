import React from 'react';
import { Helmet } from 'react-helmet';
import { logo } from '../../helpers/svg';

// const Error404Redirect = () => { setTimeout(() => window.location.pathname = '/', 3000); };

const Error404 = () => (
  <div className="page--error">
    <Helmet title={`Error 404 | Tienda Claro ${process.env.COUNTRY}`} />
    <div><span>{logo}</span></div>
    <section>
      <div><b>404.</b> <p>Oh, oh!</p></div>
      <h2>¡Ups! Lo sentimos, no hemos podido encontrar la página que estás buscando.</h2>
      <p>Te invitamos a regresar a la página principal.</p>
      <a href="https://claro.com.sv/personas">Ir a la página principal</a>
    </section>
    <aside>
      <img src="/media/layout/error404.png" alt="Error 404" />
    </aside>
  </div>
);

export default Error404;
