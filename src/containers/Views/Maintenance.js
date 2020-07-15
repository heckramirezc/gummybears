import React from 'react';
import { Helmet } from 'react-helmet';
import { logo } from '../../helpers/svg';

const Maintenance = () => (
  <div className="page--error">
    <Helmet title={`En Mantenimiento | ${process.env.COUNTRY}`} />
    <div><span>{logo}</span></div>
    <section>
      <div><b>500.</b> <p>Es un error</p></div>
      <h2>Es un error del servidor.</h2>
      <p>Es posible que esta página esté inactiva debido a las tareas de mantenimiento o que se haya configurado de manera incorrecta.</p>
      <a href="https://uat-gummybears.com/">Ir a la página principal</a>
    </section>
    <aside>
      <img src="/media/layout/error500.png" alt="Error 500" />
    </aside>
  </div>
);

export default Maintenance;
