import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UI = (props) => {
  if (!props.servicesList || !props.servicesList.length || !props.servicesList.length === 0) return null;
  let slugs = window.location.pathname.split(/(\/)/g);
  slugs = slugs.filter(x => x !== '/');
  const servicio = props.servicesList.find(x => x.slug === slugs[slugs.length - 1]);
  const serviciosRelacionados = props.servicesList.filter(service => service.id !== servicio.id);
  const ServiciosRelacionados = serviciosRelacionados.map((servicioRelacionado, key) => (
    <div className="grid-item">
      <Link key={key} to={`/servicios/${servicioRelacionado.slug}`}>
        <img src={servicioRelacionado.acf.icon} alt={servicioRelacionado.title.rendered} />
        <h3>{servicioRelacionado.title.rendered}</h3>
      </Link>
    </div>
  ));

  return (
    <main className="product">
      <section className="checkout--content">
        <section className="checkout--address">
          <section className="product--main">
            <div className="product--info">
              <h1>{servicio.title.rendered.toUpperCase()}</h1>
              <div className="product--detail" >
                <br /><p dangerouslySetInnerHTML={{ __html: servicio.acf.description }} />
                <div className="key-content" dangerouslySetInnerHTML={{ __html: servicio.acf.key_content }} />
              </div>
            </div>
          </section>
        </section>
        <section className="cart--summary">
          <header className="cart--summary-form">
            <h1>SOLICITE MÁS INFORMACIÓN</h1>
            <p>Escríbenos en breves palabras acerca de tu proyecto y nosotros podremos preparar una propuesta interesante.</p>
            {/* <form onSubmit={handleSubmit} name="addresses"> */}
            <form name="servicesform">
              <div className="checkout--address-form">
                <section>
                  <div className="full">
                    <p>Etiqueta de campo de texto</p>
                    <label htmlFor="s_phone_1">
                      <input
                        type="text"
                        tabIndex={0}
                        placeholder="Placeholder de campo de texto"
                        // name="s_phone_1"
                        // id="s_phone_1"
                        // maxLength={8}
                        // onKeyPress={numberChars}
                        // value={shippingAddress.phone_1 || ''}
                        // onChange={(e) => { handleChange(e, 'form_shipping_info.phone_1'); }}
                      />
                    </label>
                  </div>
                  <div className="full">
                    <p>Etiqueta de campo de texto</p>
                    <label htmlFor="s_phone_1">
                      <input
                        type="text"
                        tabIndex={0}
                        placeholder="Placeholder de campo de texto"
                        // name="s_phone_1"
                        // id="s_phone_1"
                        // maxLength={8}
                        // onKeyPress={numberChars}
                        // value={shippingAddress.phone_1 || ''}
                        // onChange={(e) => { handleChange(e, 'form_shipping_info.phone_1'); }}
                      />
                    </label>
                  </div>
                  <div className="full">
                    <p>Etiqueta de campo de texto</p>
                    <label htmlFor="s_phone_1">
                      <input
                        type="text"
                        tabIndex={0}
                        placeholder="Placeholder de campo de texto"
                        // name="s_phone_1"
                        // id="s_phone_1"
                        // maxLength={8}
                        // onKeyPress={numberChars}
                        // value={shippingAddress.phone_1 || ''}
                        // onChange={(e) => { handleChange(e, 'form_shipping_info.phone_1'); }}
                      />
                    </label>
                  </div>
                  <div className="full">
                    <p>Etiqueta de campo de texto</p>
                    <label htmlFor="s_phone_1">
                      <input
                        type="text"
                        tabIndex={0}
                        placeholder="Placeholder de campo de texto"
                        // name="s_phone_1"
                        // id="s_phone_1"
                        // maxLength={8}
                        // onKeyPress={numberChars}
                        // value={shippingAddress.phone_1 || ''}
                        // onChange={(e) => { handleChange(e, 'form_shipping_info.phone_1'); }}
                      />
                    </label>
                  </div>
                </section>
              </div>
              <aside className="checkout--continue">
                <button type="submit">
                  <span>ENVIAR</span>
                </button>
              </aside>
            </form>
          </header>
        </section>
        <br /><br /><br />
        <h2>CONOCE MÁS SERVICIOS</h2>
        <div className="catalog--grid-container-servicios-detail">
          {ServiciosRelacionados}
        </div>
      </section>
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
