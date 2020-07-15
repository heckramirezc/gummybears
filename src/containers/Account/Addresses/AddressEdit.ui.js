import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Components
import AccountHeader from '../../../components/AccountHeader/AccountHeader';

// Helpers
import { textChars, numberChars, alphanumericChars } from '../../../helpers/char-restriction';

// fakeData
import data from '../../Checkout/Address/data';

// helpers
import orderedAlphabetical from '../../../helpers/orderings';

const AddressForm = ({ handleChange, addressForm, state }) => {
  let mpoList = [];
  // console.log('addressForm-------------: ', addressForm);

  orderedAlphabetical(data, 'depto_name');
  const dptoList = (data || []).map(v => <option id={v.id_depto} key={v.id_depto} value={v.depto_name}>{v.depto_name}</option>);

  const cityName = data.reduce((accumulatorCity, currentCity) => {
    accumulatorCity[currentCity.depto_name] = currentCity;
    return accumulatorCity;
  }, {});

  if (state) {
    const { mpos } = cityName[state] || [];
    orderedAlphabetical(mpos, 'mpo_name');
    mpoList = (mpos || []).map(v => <option id={v.id_mpo} key={v.id_mpo} value={v.mpo_name}>{v.mpo_name}</option>);
  }
  return (
    <div className="full">
      <div className="half">
        <p>Departamento:</p>
        <label className="select full" htmlFor="a_state_or_province_name">
          <select
            id="a_state_or_province_name"
            name="a_state_or_province_name"
            tabIndex={0}
            value={addressForm.state_or_province_name}
            onChange={(e) => { handleChange(e, 'addressForm.state_or_province_name'); }}
          >
            <option value="">Elige una opción</option>
            {dptoList}
          </select>
        </label>
      </div>
      <div className="half">
        <p>Municipio:</p>
        <label className="select full" htmlFor="a_city">
          <select
            id="a_city"
            name="a_city"
            tabIndex={0}
            value={addressForm.city}
            onChange={(e) => { handleChange(e, 'addressForm.city'); }}
          >
            <option value="">Elige una opción</option>
            {mpoList}
          </select>
        </label>
      </div>
    </div>
  );
};

const UI = ({ handleChange, handleSubmit, addressForm, state }) => {
  const isBilling = addressForm.address_type === 'Billing';

  return (
    <AccountHeader title={`Agregar Direccion de ${isBilling ? 'Facturación' : 'Envío'}`}>
      <form onSubmit={handleSubmit} name="address_edit">
        <div className={`half ${isBilling ? 'disabled' : ''}`}>
          <p>Nombre:</p>
          <label htmlFor="a_first_name">
            <input
              type="text"
              placeholder="Ingresa tu nombre"
              name="a_first_name"
              id="a_first_name"
              maxLength={30}
              onKeyPress={textChars}
              value={addressForm.first_name || ''}
              onChange={(e) => { handleChange(e, 'addressForm.first_name'); }}
              disabled={isBilling}
            />
          </label>
        </div>
        <div className={`half ${isBilling ? 'disabled' : ''}`}>
          <p>Apellidos:</p>
          <label htmlFor="a_last_name">
            <input
              type="text"
              placeholder="Ingresa tus apellidos"
              name="a_last_name"
              id="a_last_name"
              maxLength={30}
              onKeyPress={textChars}
              value={addressForm.last_name || ''}
              onChange={(e) => { handleChange(e, 'addressForm.last_name'); }}
              disabled={isBilling}
            />
          </label>
        </div>
        <div className="half">
          <p>Calle:</p>
          <label htmlFor="a_address_line_1">
            <input
              type="text"
              placeholder="Ingresa calle y número"
              onKeyPress={alphanumericChars}
              value={addressForm.address_line_1 || ''}
              onChange={(e) => { handleChange(e, 'addressForm.address_line_1'); }}
            />
          </label>
        </div>
        <div className={`half ${isBilling ? 'disabled' : ''}`}>
          <p>Número telefónico</p>
          <label htmlFor="a_phone_1">
            <input
              type="text"
              placeholder="Ingresa los 8 dígitos"
              name="a_phone_1"
              id="a_phone_1"
              maxLength={8}
              onKeyPress={numberChars}
              value={addressForm.phone_1 || ''}
              onChange={(e) => { handleChange(e, 'addressForm.phone_1'); }}
              disabled={isBilling}
            />
          </label>
        </div>
        {!isBilling ? <AddressForm handleChange={handleChange} addressForm={addressForm} state={state} /> : <div />}

        {/*
        <div>
          <label className="checkbox">
            <input type="checkbox" />
            <i />
            <span>Utilizar esta dirección como predeterminada</span>
          </label>
        </div>
        */}
        <footer>
          <Link to="/account/addresses"><span>Cancelar</span></Link>
          <button type="submit"><span>Guardar</span></button>
        </footer>
      </form>
    </AccountHeader>
  );
};

UI.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  addressForm: PropTypes.shape({}).isRequired,
  state: PropTypes.string,
};

UI.defaultProps = {
  state: '',
};

export default UI;

