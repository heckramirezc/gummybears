import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Helmet } from 'react-helmet';

// Components
import AccountHeader from './../../../components/AccountHeader/AccountHeader';

// Helpers
import { textChars, numberChars } from '../../../helpers/char-restriction';

const UI = ({ internalData, handleChange, handleSubmit, logonId }) => {
  const month = [];
  const days = [];
  const year = [];

  for (let i = 0; i < 12; i += 1) {
    const dateText = moment(i).locale('es');
    const monthText = dateText.month(i).format('MMMM');
    const monthNumber = dateText.month(i).format('MM');
    month.push(<option key={monthText} value={monthNumber}>{monthText}</option>);
  }

  const daysInMonth = 31;
  for (let i = 1; i <= daysInMonth; i += 1) {
    const dayText = moment(1).date(i).format('DD');
    days.push(<option key={dayText} value={dayText}>{dayText}</option>);
  }

  for (let i = 1917; i <= 2017; i += 1) {
    year.push(<option key={i} value={i} >{i}</option>);
  }

  return (
    <AccountHeader title="Editar Perfil">
      <Helmet title={`Editar Perfil | ${process.env.COUNTRY}`} />
      <form name="profile" onSubmit={handleSubmit}>
        <div className="half">
          <div>
            <p>Nombre:</p>
            <label htmlFor="first_name">
              <input
                id="first_name"
                name="first_name"
                type="text"
                placeholder="Nombre"
                onKeyPress={textChars}
                value={internalData.first_name}
                onChange={(e) => { handleChange(e, 'internalData.first_name'); }}
              />
            </label>
          </div>
        </div>
        <div className="half">
          <div>
            <p>Apellido:</p>
            <label htmlFor="last_name">
              <input
                id="last_name"
                name="last_name"
                type="text"
                placeholder="Apellido"
                onKeyPress={textChars}
                value={internalData.last_name}
                onChange={(e) => { handleChange(e, 'internalData.last_name'); }}
              />
            </label>
          </div>
        </div>
        <div className="half">
          <p>Dirección de correo:</p>
          <label htmlFor="email_1">
            <input
              id="email_1"
              name="email_1"
              type="email"
              placeholder="ejemplo@claro.com"
              value={logonId}
              onChange={(e) => { handleChange(e, 'internalData.email_1'); }}
              disabled
            />
          </label>
        </div>
        <div className="half">
          <p>Teléfono:</p>
          <label htmlFor="phone_1">
            <input
              id="phone_1"
              name="phone_1"
              type="text"
              placeholder="4433 2211"
              maxLength="8"
              onKeyPress={numberChars}
              value={internalData.phone_1}
              onChange={(e) => { handleChange(e, 'internalData.phone_1'); }}
            />
          </label>
        </div>
        <div className="half">
          <p>Genero:</p>
          <label className="select" htmlFor="" style={{ width: '100%' }}>
            <select
              id="gender"
              name="gender"
              value={internalData.gender}
              onChange={(e) => { handleChange(e, 'internalData.gender'); }}
            >
              <option value="">Selecciona una opcion</option>
              <option value="M">Masculino</option>
              <option value="F">Femenino</option>
            </select>
          </label>
        </div>

        <div className="half">
          <p>Fecha de Nacimiento:</p>
          <label className="select" htmlFor="day">
            <select
              id="day"
              name="day"
              value={internalData.day}
              onChange={(e) => { handleChange(e, 'internalData.day'); }}
            >
              <option value="">Día</option>
              {days}
            </select>
          </label>
          <label className="select" htmlFor="">
            <select
              id="month"
              name="month"
              value={internalData.month}
              onChange={(e) => { handleChange(e, 'internalData.month'); }}
            >
              <option value="">Mes</option>
              {month}
            </select>
          </label>
          <label className="select" htmlFor="">
            <select
              id="year"
              name="year"
              value={internalData.year}
              onChange={(e) => { handleChange(e, 'internalData.year'); }}
            >
              <option value="">Año</option>
              {year}
            </select>
          </label>
        </div>

        <footer>
          <Link to="/account"><span>Cancelar</span></Link>
          <button type="submit"><span>Guardar</span></button>
        </footer>
      </form>
    </AccountHeader>
  );
};

UI.propTypes = {
  internalData: PropTypes.shape({}).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  logonId: PropTypes.string,
};

UI.defaultProps = {
  logonId: '',
};

export default UI;

