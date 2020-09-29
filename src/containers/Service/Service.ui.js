import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UI = (props) => {
  if (!props.servicesList || !props.servicesList.length || !props.servicesList.length === 0) return null;
  let slugs = window.location.pathname.split(/(\/)/g);
  slugs = slugs.filter(x => x !== '/');
  const servicio = props.servicesList.find(x => x.slug === slugs[slugs.length - 1]);
  const ServiciosRelacionados = props.servicesList.map((servicioRelacionado, key) => {
    if (servicioRelacionado.id !== servicio.id) {
      return (
        <div className="grid-item">
          <Link key={key} to={`/servicios/${servicioRelacionado.slug}`}>
            <img src={servicioRelacionado.acf.icon} alt={servicioRelacionado.title.rendered} />
            <h3>{servicioRelacionado.title.rendered}</h3>
          </Link>
        </div>
      );
    } else {
      return (
        <div className="grid-item active">
          <Link key={key} to={`/servicios/${servicioRelacionado.slug}`}>
            <img src={servicioRelacionado.acf.icon} alt={servicioRelacionado.title.rendered} />
            <h3>{servicioRelacionado.title.rendered}</h3>
          </Link>
        </div>
      );
    }
  });

  const imagenDestacada = (
    <section className="catalog--banner-services">
      <div className="catalog--banner-services-contenedor">
        <img src={servicio.acf.image} alt={servicio.title.rendered} />
        <img className="catalog--banner-services-contenedor-mascara" src="https://uat-gummybears.com/wp/wp-content/uploads/2020/08/MASCARA-1.png" alt={servicio.title.rendered} />
      </div>
    </section>
  );

  const FormularioNewsletter = (
    <section className="catalog--layout-1-section-4">
      <header className="catalog--layout-1-section-4-header">
        <div>
          <p>Solicite más información</p>
          <Link to="/paginas/contactenos">
            <span>Ir</span>
          </Link>
        </div>
      </header>
    </section>
  );

  return (
    <main className="product">
      {imagenDestacada}
      <section className="checkout--content-service">
        <section className="checkout--address">
          <section className="product--main">
            <div className="product--info-service">
              <h1>{servicio.title.rendered.toUpperCase()}</h1>
              <br /><p dangerouslySetInnerHTML={{ __html: servicio.acf.description }} />
              <div className="key-content" dangerouslySetInnerHTML={{ __html: servicio.acf.key_content }} />
            </div>
          </section>
        </section>
        <section className="cart--summary" />
      </section>
      <div className="catalog--module">
        {FormularioNewsletter}
      </div>
      <div className="catalog--module">
        <h2>CONOCE MÁS SERVICIOS</h2>
        <div className="catalog--grid-container-servicios-detail">
          {ServiciosRelacionados}
        </div>
      </div>
    </main>
  );
};

UI.propTypes = {
  product: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  servicesList: PropTypes.arrayOf(PropTypes.shape({})),
};

UI.defaultProps = {
  product: {
    data: {},
  },
  servicesList: [],
};

export default UI;
