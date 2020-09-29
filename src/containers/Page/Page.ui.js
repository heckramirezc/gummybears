// component
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReCAPTCHA from 'react-google-recaptcha';

import Notification from '../Views/Notification/Notification.ui';
// import { Element } from 'react-scroll';

// import $ from 'jquery';

// utilities
// import $ from 'jquery';
// import Slider from 'react-slick'; // https://github.com/akiran/react-slick

// Components
// import { ArrowPrev, ArrowNext } from '../../helpers/svg';

// const isIE = (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > -1);

const Layout1 = (props) => {
  let Seccion1 = '';
  let Seccion2 = '';
  let Seccion3 = '';
  let Seccion4 = '';
  let Seccion5 = '';
  let Seccion6 = '';
  let Tabs = '';
  if (props.pagina.acf.section_1 !== false) {
    if (props.pagina.acf.section_1.show_tabs === true) {
      Tabs = (
        <section className="catalog--tabs">
          <div className="catalog--tabs-first">
            <a className="active" onClick={(e) => { props.handleTabs(e); }} >{props.pagina.acf.section_1.title1.toUpperCase()}</a>
            <div className="catalog--tabs-separator" />
          </div>
          <a onClick={(e) => { props.handleTabs(e); }} >{props.pagina.acf.section_1.title2.toUpperCase()}</a>
        </section>
      );
    } else {
      Tabs = (
        <section className="catalog--tabs">
          <a className="active">{props.pagina.acf.section_1.title1.toUpperCase()}</a>
        </section>
      );
    }
    Seccion1 = (
      <section className="catalog--layout-1-section-1">
        <header className="catalog--layout-1-section-1-form">
          {Tabs}
          <p className="active">{props.pagina.acf.section_1.content1}</p>
          <p>{props.pagina.acf.section_1.show_tabs === true ? props.pagina.acf.section_1.content2 : null}</p>
        </header>
      </section>
    );
  }
  if (props.pagina.acf.section_2 !== false) {
    Seccion2 = (
      <section className="catalog--layout-1-section-2">
        <div dangerouslySetInnerHTML={{ __html: props.pagina.acf.section_2.content }} />
      </section>
    );
  }
  if (props.pagina.acf.section_3 !== false) {
    console.log('props.pageElements===> ', props.pageElements);
    const pageElements = props.pageElements.filter(x => x.page_elements[0] === props.pagina.acf.section_3.items_section);
    if (pageElements && pageElements.length && pageElements.length > 0) {
      const Items = pageElements.map((elemento, key) => (
        <div className="grid-item">
          <a key={key}>
            <img src={elemento.acf.icon} alt={elemento.title.rendered} />
            <h3>{elemento.title.rendered}</h3>
            <p>{elemento.acf.description}</p>
          </a>
        </div>
      ));
      Seccion3 = (
        <section className="catalog--layout-1-section-3">
          <h2>{props.pagina.acf.section_3.title_section.toUpperCase()}</h2>
          <div className="catalog--grid-container-layout-1">
            {Items}
          </div>
        </section>
      );
    }
  }
  if (props.pagina.acf.section_4 !== false) {
    Seccion4 = (
      <section className="catalog--layout-1-section-4">
        <header className="catalog--layout-1-section-4-header">
          <div>
            <p>{props.pagina.acf.section_4.title_section}</p>
            <Link to={`/paginas/${props.pagina.acf.section_4.url.url.replace('http://uat-gummybears.com/wp/', '').replace('/', '')}`}>
              <span>{props.pagina.acf.section_4.url.title}</span>
            </Link>
          </div>
        </header>
      </section>
    );
  }
  if (props.pagina.acf.section_5 !== false) {
    Seccion5 = (
      <section className="catalog--layout-1-section-5">
        <h2>{props.pagina.acf.section_5.title_section}</h2>
        <div dangerouslySetInnerHTML={{ __html: props.pagina.acf.section_5.description }} />
        <Link to={`/paginas/${props.pagina.acf.section_5.url.url.replace('http://uat-gummybears.com/wp/', '').replace('/', '')}`}>
          <span>{props.pagina.acf.section_5.url.title}</span>
        </Link>
      </section>
    );
  }
  if (props.pagina.acf.section_6 !== false) {
    Seccion6 = (
      <section className="catalog--layout-1-section-6">
        <div dangerouslySetInnerHTML={{ __html: props.pagina.acf.section_6.embed }} />
      </section>
    );
  }
  return (
    <div className="catalog--header-pages-layout-1">
      <div className="catalog--page-content-layout-1" >
        {Seccion1}
        {Seccion2}
        {Seccion3}
        {Seccion4}
        {Seccion5}
        {Seccion6}
      </div>
    </div>
  );
};

const Layout2 = (props) => {
  const Descripcion = (
    <p>{props.pagina.acf.description}</p>
  );
  let Formulario = '';
  if (props.pagina.acf.form.post_title === 'Formulario de Contacto') {
    Formulario = (
      <form onSubmit={props.handleContactoSubmit} name="servicesform">
        <div className="checkout--address-form">
          <section>
            <div className="mid">
              <p>* Nombre</p>
              <label htmlFor="nombre">
                <input
                  type="text"
                  placeholder="Ingrese su nombre"
                  name="nombre"
                  id="nombre"
                  // maxLength={30}
                  onChange={(e) => { props.handleChange(e); }}
                />
              </label>
            </div>
            <div className="mid">
              <p>* Apellidos</p>
              <label htmlFor="apellidos">
                <input
                  type="text"
                  placeholder="Ingrese sus apellidos"
                  name="apellidos"
                  id="apellidos"
                  // maxLength={30}
                  onChange={(e) => { props.handleChange(e); }}
                />
              </label>
            </div>
            <div className="mid">
              <p>* Teléfono</p>
              <label htmlFor="telefono">
                <input
                  type="text"
                  placeholder="Ingrese su número de teléfono"
                  name="telefono"
                  id="telefono"
                  // maxLength={30}
                  onChange={(e) => { props.handleChange(e); }}
                />
              </label>
            </div>
            <div className="mid">
              <p>* Correo electrónico</p>
              <label htmlFor="correo">
                <input
                  type="email"
                  placeholder="Ingrese su correo electrónico"
                  name="correo"
                  id="correo"
                  // maxLength={30}
                  onChange={(e) => { props.handleChange(e); }}
                />
              </label>
            </div>
            <div className="mid">
              <p>* Empresa donde trabaja</p>
              <label htmlFor="empresa">
                <input
                  type="text"
                  placeholder="Ingrese el nombre de la empresa"
                  name="empresa"
                  id="empresa"
                  // maxLength={30}
                  onChange={(e) => { props.handleChange(e); }}
                />
              </label>
            </div>
            <div className="mid">
              <p>* Cargo que desempeña</p>
              <label htmlFor="cargo">
                <input
                  type="text"
                  placeholder="Ingrese el cargo que desempeña"
                  name="cargo"
                  id="cargo"
                  // maxLength={30}
                  onChange={(e) => { props.handleChange(e); }}
                />
              </label>
            </div>
            <div className="full">
              <p>País</p>
              <label htmlFor="pais">
                <input
                  type="text"
                  tabIndex={0}
                  placeholder="Ingrese su país"
                  name="pais"
                  id="pais"
                  // maxLength={8}
                  // onKeyPress={numberChars}
                  // value={shippingAddress.phone_1 || ''}
                  onChange={(e) => { props.handleChange(e); }}
                />
              </label>
            </div>
            <div className="full">
              <p>Mensaje</p>
              <label htmlFor="mensaje">
                <textarea
                  type="text"
                  tabIndex={0}
                  placeholder="Ingrese su mensaje"
                  name="mensaje"
                  id="mensaje"
                  // maxLength={8}
                  // onKeyPress={numberChars}
                  // value={shippingAddress.phone_1 || ''}
                  onChange={(e) => { props.handleChange(e); }}
                />
              </label>
            </div>
          </section>
        </div>
        <aside className="catalog--continue">
          <button type="submit">
            <span>ENVIAR</span>
          </button>
          <ReCAPTCHA
            sitekey="6Lf0BsYZAAAAAOL-VNCetxkKogK_8jkSphNPsFtA"
            size="invisible"
            ref={props.reCaptchaRef}
            onChange={props.handleChangeReCaptcha}
          />
        </aside>
      </form>
    );
  } else if (props.pagina.acf.form.post_title === 'Formulario de Trabaje con Nosotros') {
    Formulario = (
      <form onSubmit={props.handleTrabajeSubmit} name="servicesform">
        <div className="checkout--address-form">
          <section>
            <div className="mid">
              <p>* Nombre</p>
              <label htmlFor="nombre">
                <input
                  type="text"
                  placeholder="Ingrese su nombre"
                  name="nombre"
                  id="nombre"
                  // maxLength={30}
                  onChange={(e) => { props.handleChange(e); }}
                />
              </label>
            </div>
            <div className="mid">
              <p>* Apellidos</p>
              <label htmlFor="apellidos">
                <input
                  type="text"
                  placeholder="Ingrese sus apellidos"
                  name="apellidos"
                  id="apellidos"
                  // maxLength={30}
                  onChange={(e) => { props.handleChange(e); }}
                />
              </label>
            </div>
            <div className="mid">
              <p>* Correo electrónico</p>
              <label htmlFor="correo">
                <input
                  type="email"
                  placeholder="Ingrese su correo electrónico"
                  name="correo"
                  id="correo"
                  // maxLength={30}
                  onChange={(e) => { props.handleChange(e); }}
                />
              </label>
            </div>
            <div className="mid">
              <p>* Teléfono</p>
              <label htmlFor="telefono">
                <input
                  type="text"
                  placeholder="Ingrese su número de teléfono"
                  name="telefono"
                  id="telefono"
                  // maxLength={30}
                  onChange={(e) => { props.handleChange(e); }}
                />
              </label>
            </div>
            <div className="mid">
              <p>* Profesión</p>
              <label htmlFor="profesion">
                <input
                  type="text"
                  placeholder="Ingrese su profesión"
                  name="profesion"
                  id="profesion"
                  // maxLength={30}
                  onChange={(e) => { props.handleChange(e); }}
                />
              </label>
            </div>
            <div className="mid">
              <p>* Área de Interés / Puesto a aplicar</p>
              <label htmlFor="area">
                <input
                  type="text"
                  placeholder="Ingrese el área o puesto de interés"
                  name="area"
                  id="area"
                  // maxLength={30}
                  onChange={(e) => { props.handleChange(e); }}
                />
              </label>
            </div>
            <div className="full">
              <p>* Curriculum vitae</p>
              <label htmlFor="cv">
                <input
                  type="file"
                  tabIndex={0}
                  placeholder="Cargue su curriculum vitae                  "
                  name="cv"
                  // id="s_phone_1"
                  // maxLength={8}
                  // onKeyPress={numberChars}
                  // value={shippingAddress.phone_1 || ''}
                  onChange={(e) => { props.handleChange(e); }}
                />
              </label>
            </div>
          </section>
        </div>
        <aside className="catalog--continue">
          <button type="submit">
            <span>ENVIAR</span>
          </button>
          <ReCAPTCHA
            sitekey="6Lf0BsYZAAAAAOL-VNCetxkKogK_8jkSphNPsFtA"
            size="invisible"
            ref={props.reCaptchaRef}
            onChange={props.handleChangeReCaptcha}
          />
        </aside>
      </form>
    );
  } else if (props.pagina.acf.form.post_title === 'Formulario de Unete como Socio') {
    Formulario = (
      <form onSubmit={props.handleSociosSubmit} name="servicesform">
        <div className="checkout--address-form">
          <section>
            <div className="mid">
              <p>* Nombre</p>
              <label htmlFor="nombre">
                <input
                  type="text"
                  placeholder="Ingrese su nombre"
                  name="nombre"
                  id="nombre"
                  // maxLength={30}
                  onChange={(e) => { props.handleChange(e); }}
                />
              </label>
            </div>
            <div className="mid">
              <p>* Apellidos</p>
              <label htmlFor="apellidos">
                <input
                  type="text"
                  placeholder="Ingrese sus apellidos"
                  name="apellidos"
                  id="apellidos"
                  // maxLength={30}
                  onChange={(e) => { props.handleChange(e); }}
                />
              </label>
            </div>
            <div className="mid">
              <p>* Teléfono</p>
              <label htmlFor="telefono">
                <input
                  type="text"
                  placeholder="Ingrese su número de teléfono"
                  name="telefono"
                  id="telefono"
                  // maxLength={30}
                  onChange={(e) => { props.handleChange(e); }}
                />
              </label>
            </div>
            <div className="mid">
              <p>* Correo electrónico</p>
              <label htmlFor="correo">
                <input
                  type="email"
                  placeholder="Ingrese su correo electrónico"
                  name="correo"
                  id="correo"
                  // maxLength={30}
                  onChange={(e) => { props.handleChange(e); }}
                />
              </label>
            </div>
            <div className="mid">
              <p>* Empresa donde trabaja</p>
              <label htmlFor="empresa">
                <input
                  type="text"
                  placeholder="Ingrese el nombre de la empresa"
                  name="empresa"
                  id="empresa"
                  // maxLength={30}
                  onChange={(e) => { props.handleChange(e); }}
                />
              </label>
            </div>
            <div className="mid">
              <p>* Cargo que desempeña</p>
              <label htmlFor="cargo">
                <input
                  type="text"
                  placeholder="Ingrese el cargo que desempeña"
                  name="cargo"
                  id="cargo"
                  // maxLength={30}
                  onChange={(e) => { props.handleChange(e); }}
                />
              </label>
            </div>
            <div className="full">
              <p>País</p>
              <label htmlFor="pais">
                <input
                  type="text"
                  tabIndex={0}
                  placeholder="Ingrese su país"
                  name="pais"
                  id="pais"
                  // maxLength={8}
                  // onKeyPress={numberChars}
                  // value={shippingAddress.phone_1 || ''}
                  onChange={(e) => { props.handleChange(e); }}
                />
              </label>
            </div>
            {/* <div className="full">
              <p>Mensaje</p>
              <label htmlFor="s_phone_1">
                <textarea
                  type="text"
                  tabIndex={0}
                  placeholder="Ingrese su mensaje"
                  // name="s_phone_1"
                  // id="s_phone_1"
                  // maxLength={8}
                  // onKeyPress={numberChars}
                  // value={shippingAddress.phone_1 || ''}
                  // onChange={(e) => { handleChange(e, 'form_shipping_info.phone_1'); }}
                />
              </label>
            </div> */}
          </section>
        </div>
        <aside className="catalog--continue">
          <button type="submit">
            <span>ENVIAR</span>
          </button>
          <ReCAPTCHA
            sitekey="6Lf0BsYZAAAAAOL-VNCetxkKogK_8jkSphNPsFtA"
            size="invisible"
            ref={props.reCaptchaRef}
            onChange={props.handleChangeReCaptcha}
          />
        </aside>
      </form>
    );
  }

  let footerForm = '';
  footerForm = props.pagina.acf.footer_form;

  return (
    <div className="catalog--header-pages-layout-2">
      <div className="catalog--page-content-layout-2" >
        <h1>{props.pagina.title.rendered.toUpperCase()}</h1>
        {Descripcion}
        <section className="catalog--page-layout-2-section">
          <header className="catalog--page-layout-2-section-form">
            {Formulario}
            {props.pagina.acf.mostrar_texto_de_pie_de_formulario === true ? <div className="catalog--page-layout-2-section-form-footer-form" dangerouslySetInnerHTML={{ __html: footerForm }} /> : null}
            <br />
            {(props.error) ? <Notification title={props.error} /> : null}
          </header>
        </section>
      </div>
    </div>
  );
};

// const closeThis = () => {
//   $(".catalog--quiz").hide();
// }
// const callQuiz = () => {
//   console.log('Link to quiz');
// }

// const CatalogQuiz = () => (
//   <div className="catalog--quiz fixed">
//     <section>
//       <h6>¡Encuenta tu equipo y plan ideal!</h6>
//       <p>Lo único que necesitas es contestar algunas preguntas</p>
//       <div>
//         <a href="#" onClick={callQuiz} role="button" tabIndex="-1">
//           <span>Iniciar</span>
//         </a>
//       </div>
//       <i className="fa fa-times" onClick={closeThis} role="button" tabIndex="-1" />
//     </section>
//   </div>
// );

const UI = (props) => {
  let imagenDestacada = '';
  if (!props.pagesList || !props.pagesList.length || !props.pagesList.length === 0) return null;
  let slugs = window.location.pathname.split(/(\/)/g);
  slugs = slugs.filter(x => x !== '/');
  console.log('slugs ', slugs);
  const pagina = props.pagesList.find(x => x.slug === (slugs[slugs.length - 1] === '' ? slugs[slugs.length - 2] : slugs[slugs.length - 1]));
  console.log('pagina ', pagina);
  if (!pagina) return null;

  if (pagina.acf.page_layout === 'Diseño 1' && pagina.acf.section_1 !== false && pagina.acf.section_1.show_background === true) {
    imagenDestacada = (
      <section className="catalog--banner-layout-1">
        <img className="active" src={pagina.acf.section_1.background_1} alt={pagina.title.rendered} />
        {pagina.acf.section_1.show_tabs === true ? <img src={pagina.acf.section_1.background_2} alt={pagina.title.rendered} /> : null}
      </section>
    );
  } else if (pagina.acf.page_layout === 'Diseño 2' && pagina.acf.show_background === true) {
    imagenDestacada = (
      <section className="catalog--banner-layout-1">
        <img className="active" src={pagina.acf.background} alt={pagina.title.rendered} />
      </section>
    );
  }
  return (
    <main>
      <section className="catalog">
        {imagenDestacada}
        <br /><br />
        {pagina.acf.page_layout === 'Diseño 1' ? <Layout1 pagina={pagina} handleTabs={props.handleTabs} pageElements={props.pageElements} /> : <Layout2 pagina={pagina} handleContactoSubmit={props.handleContactoSubmit} handleTrabajeSubmit={props.handleTrabajeSubmit} handleSociosSubmit={props.handleSociosSubmit} handleChange={props.handleChange} error={props.error} reCaptchaRef={props.reCaptchaRef} handleChangeReCaptcha={props.handleChangeReCaptcha} />}
      </section>
    </main>
  );
};


UI.propTypes = {
  eSpot: PropTypes.shape({}),
  indexPage: PropTypes.shape({
    initPage: PropTypes.number,
    endPage: PropTypes.number,
  }),
  itemsPerPageValue: PropTypes.number.isRequired, // eslint-disable-line
  handleContactoSubmit: PropTypes.func.isRequired,
  handleTrabajeSubmit: PropTypes.func.isRequired,
  handleSociosSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
};

UI.defaultProps = {
  eSpot: {},
  indexPage: {},
  error: '',
};

Layout1.propTypes = {
  pagina: PropTypes.shape({}),
  handleTabs: PropTypes.func.isRequired,
};

Layout1.defaultProps = {
  pagina: {},
};

Layout2.propTypes = {
  handleContactoSubmit: PropTypes.func.isRequired,
  handleTrabajeSubmit: PropTypes.func.isRequired,
  handleSociosSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  pagina: PropTypes.shape({}),
  error: PropTypes.string,
};

Layout2.defaultProps = {
  pagina: {},
  error: '',
};

export default UI;
