import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

// fakeData
import data from './data';
import data2 from './data2';

// Components
import Notification from '../../Views/Notification/Notification.ui';

// Constants
import cacs from '../../../helpers/store-hours';

// Helpers
import { textChars, numberChars, duiChars, alphanumericChars, emailChars, nitChars } from '../../../helpers/char-restriction';
import orderedAlphabetical from '../../../helpers/orderings';

const BillingAddressForm = ({ handleChangeAddress, billingAddress, storeAddress }) => { // city, state
  // let mpoList = [];
  // let pobList = [];

  orderedAlphabetical(data, 'depto_name');
  // const dptoList = (data || []).map(v => <option id={v.id_depto} key={v.id_depto} value={v.depto_name}>{v.depto_name}</option>);

  // const cityName = data.reduce((accumulatorCity, currentCity) => {
  //   accumulatorCity[currentCity.depto_name] = currentCity;
  //   return accumulatorCity;
  // }, {});

  // if (state) {
  //   const { mpos } = cityName[state] || [];
  //   orderedAlphabetical(mpos, 'mpo_name');
  //   mpoList = (mpos || []).map(v => <option id={v.id_mpo} key={v.id_mpo} value={v.mpo_name}>{v.mpo_name}</option>);
  //   const stateName = (mpos || []).reduce((accumulatorState, currentState) => {
  //     accumulatorState[currentState.mpo_name] = currentState;
  //     return accumulatorState;
  //   }, {});
  //   if (city) {
  //     const { pob } = stateName[city] || [];
  //     orderedAlphabetical(pob, 'pob_name');
  //     pobList = (pob || []).map(v => <option id={v.id_pob} key={v.id_pob} value={v.pob_name}>{v.pob_name}</option>);
  //   }
  // }

  return (
    <div className="checkout--address-form">
      <section>
        <div className="mid disabled">
          <p>* Nombre</p>
          <label htmlFor="b_first_name">
            <input
              type="text"
              placeholder="ingrese su nombre"
              name="b_first_name"
              id="b_first_name"
              maxLength={30}
              onKeyPress={textChars}
              value={storeAddress.first_name}
              // onChange={(e) => { handleChangeAddress(e, 'form_billing_info.first_name'); }}
              disabled
            />
          </label>
        </div>
        <div className="mid disabled">
          <p>* Apellidos</p>
          <label htmlFor="b_last_name">
            <input
              type="text"
              placeholder="ingrese sus apellidos"
              name="b_last_name"
              id="b_last_name"
              maxLength={30}
              onKeyPress={textChars}
              value={storeAddress.last_name}
              // onChange={(e) => { handleChangeAddress(e, 'form_billing_info.last_name'); }}
              disabled
            />
          </label>
        </div>
        <div className="full">
          <p>* Dirección</p>
          <label htmlFor="b_address_line_1">
            <textarea
              type="text"
              placeholder="ingrese su dirección de facturación completa"
              name="b_address_line_1"
              id="b_address_line_1"
              maxLength={140}
              onKeyPress={alphanumericChars}
              value={billingAddress.address_line_1}
              onChange={(e) => { handleChangeAddress(e, 'form_billing_info.address_line_1'); }}
            />
          </label>
        </div>
        {/*
        <div className="mid disabled">
          <p>* Número de teléfono</p>
          <label htmlFor="b_phone_1">
            <input
              type="text"
              tabIndex={0}
              placeholder="ingrese su número de teléfono a 8 dígitos"
              name="b_phone_1"
              id="b_phone_1"
              maxLength={8}
              onKeyPress={numberChars}
              value={storeAddress.phone_1}
              // onChange={(e) => { handleChangeAddress(e, 'form_billing_info.phone_1'); }}
              disabled
            />
          </label>
        </div>
        <div className="mid">
          <p>* Departamento</p>
          <label className="select" htmlFor="b_state_or_province_name">
            <select
              id="b_state_or_province_name"
              name="b_state_or_province_name"
              tabIndex={0}
              value={billingAddress.state_or_province_name || ''}
              onChange={(e) => { handleChangeAddress(e, 'form_billing_info.state_or_province_name'); }}
            >
              <option value="">Elige una opción</option>
              {dptoList}
            </select>
          </label>
        </div>
        <div className="mid">
          <p>* Municipio</p>
          <label className="select" htmlFor="b_city">
            <select
              id="b_city"
              name="b_city"
              tabIndex={0}
              value={billingAddress.city || ''}
              onChange={(e) => { handleChangeAddress(e, 'form_billing_info.city'); }}
            >
              <option value="">Elige una opción</option>
              {mpoList}
            </select>
          </label>
        </div>
        <div className="mid">
          <p>* Zona/Poblado</p>
          <label className="select" htmlFor="b_address_line_2">
            <select
              id="b_address_line_2"
              name="b_address_line_2"
              value={billingAddress.address_line_2 || ''}
              onChange={(e) => { handleChangeAddress(e, 'form_billing_info.address_line_2'); }}
            >
              <option value="">Elige una opción</option>
              {pobList}
            </select>
          </label>
        </div>
        <div className="mid disabled">
          <p>* Correo Electronico</p>
          <label htmlFor="b_email_1">
            <input
              type="text"
              placeholder="ingrese su correo electrónico"
              name="b_email_1"
              id="b_email_1"
              maxLength={70}
              onKeyPress={emailChars}
              value={storeAddress.email_1}
              // onChange={(e) => { handleChangeAddress(e, 'form_billing_info.email_1'); }}
              disabled
            />
          </label>
        </div>
        */}
        <b>* Campos obligatorios</b>
      </section>
    </div>
  );
};

const InvoiceForm = ({ handleChange, handleChangeAddress, billingAddress, storeAddress }) => {
  const giroList = (data2 || []).map(v => <option id={v.id_giro} key={v.id_giro} value={v.giro_name}>{v.giro_name}</option>);

  return (
    <div className="checkout--address-form">
      <section>
        <div className="mid">
          <p>* Nümero Fiscal</p>
          <label htmlFor="fiscal_number">
            <input
              type="text"
              placeholder="ingrese nümero fiscal"
              name="fiscal_number"
              id="fiscal_number"
              maxLength={15}
              onKeyPress={alphanumericChars}
              value={storeAddress.fiscal_number || ''}
              onChange={(e) => { handleChange(e, 'internalData.fiscal_number'); }}
            />
          </label>
        </div>
        <div className="full">
          <p>* Dirección</p>
          <label htmlFor="b_address_line_1">
            <textarea
              type="text"
              placeholder="ingrese su dirección de facturación completa"
              name="b_address_line_1"
              id="b_address_line_1"
              required="true"
              maxLength={140}
              onKeyPress={alphanumericChars}
              value={billingAddress.address_line_1 || ''}
              onChange={(e) => { handleChangeAddress(e, 'form_billing_info.address_line_1'); }}
            />
          </label>
        </div>
        <div className="full">
          <p>* Giro</p>
          <label className="select" htmlFor="b_twirl">
            <select
              value={storeAddress.turn || ''}
              id="b_twirl"
              name="b_twirl"
              tabIndex={0}
              onChange={(e) => { handleChange(e, 'internalData.turn'); }}
            >
              <option value="">Elige una opción</option>
              {giroList}
            </select>
          </label>
        </div>
        <b>* Campos obligatorios</b>
      </section>
    </div>
  );
};

const UI = ({ error, addressList, storeAddress, handleChange, addressText, handleSubmit, billingAddress, city, state, switchBillingForm, handleChangeAddress, toggleInvoiceType }) => {
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

  let addressInfo;
  let liHours;
  let hourArrayInfo;
  let cacAddress;
  const addresses = (addressList.data || []).map((res, i) => {
    const index = i;
    return <option key={index} value={res.store_code}>{res.locales.es_sv.name}</option>;
  });

  if (addressText && Object.keys(addressText).length) {
    const storeInfo = `${addressText.address.address1} Agencia ${addressText.locales.es_sv.name},`;
    cacAddress = <h3><span>{storeInfo}</span> {addressText.address.betweenStreets !== '' ? `${addressText.address.betweenStreets},` : ''} {addressText.address.city}, {addressText.address.state}.</h3>;

    const infoHours = decodeURI(cacs.store_hours[addressText.store_code].data);
    hourArrayInfo = infoHours.split('|');

    liHours = hourArrayInfo.map((info) => {
      const cacInfo = info.split('=');
      return <li key={info}><b>{cacInfo[0]} :</b> {cacInfo[1]}</li>;
    });

    addressInfo = <div className="checkout--address-store-border">{cacAddress}<h3>Horarios de atención :</h3><ul>{liHours}</ul></div>;
  }

  return (
    <div className="checkout--address-store">
      <form onSubmit={handleSubmit} name="addresses">
        <section>
          <p>* Nombre de quién recoje la orden:</p>
          <div className="mid">
            <label>
              <input
                type="text"
                id="s_first_name"
                name="s_first_name"
                placeholder="Nombre"
                onKeyPress={textChars}
                value={storeAddress.first_name || ''}
                onChange={(e) => { handleChange(e, 'internalData.first_name'); }}
              />
            </label>
          </div>
          <div className="mid">
            <label>
              <input
                type="text"
                id="s_last_name"
                name="s_last_name"
                placeholder="Apellido"
                onKeyPress={textChars}
                value={storeAddress.last_name || ''}
                onChange={(e) => { handleChange(e, 'internalData.last_name'); }}
              />
            </label>
          </div>
          <p>* Correo electrónico</p>
          <div className="full">
            <label htmlFor="s_email_1">
              <input
                type="text"
                placeholder="ingrese su correo electronico"
                name="s_email_1"
                id="s_email_1"
                maxLength={70}
                onKeyPress={emailChars}
                value={storeAddress.email_1 || ''}
                onChange={(e) => { handleChange(e, 'internalData.email_1'); }}
              />
            </label>
          </div>
          <div className="mid">
            <p>* ingrese DUI</p>
            <label htmlFor="dpi">
              <input
                id="dpi"
                name="dpi"
                type="text"
                maxLength={10}
                onKeyPress={duiChars}
                value={storeAddress.fax_1 || ''}
                onChange={(e) => { handleChange(e, 'internalData.fax_1'); }}
              />
            </label>
          </div>
          <div className="mid">
            <p>* Confirma DUI</p>
            <label htmlFor="s_dpiConfirm">
              <input
                id="dpiConfirm"
                name="dpiConfirm"
                type="text"
                maxLength={10}
                onKeyPress={numberChars}
                value={storeAddress.dpiConfirm || ''}
                onChange={(e) => { handleChange(e, 'internalData.dpiConfirm'); }}
              />
            </label>
          </div>
          <div className="full">
            <p>Fecha de Nacimiento:</p>
            <label className="select" htmlFor="day" style={{ width: '33%' }}>
              <select
                id="day"
                name="day"
                value={storeAddress.day}
                onChange={(e) => { handleChange(e, 'internalData.day'); }}
              >
                <option value="">Día</option>
                {days}
              </select>
            </label>
            <label className="select" htmlFor="" style={{ width: '33%' }}>
              <select
                id="month"
                name="month"
                value={storeAddress.month}
                onChange={(e) => { handleChange(e, 'internalData.month'); }}
              >
                <option value="">Mes</option>
                {month}
              </select>
            </label>
            <label className="select" htmlFor="" style={{ width: '33%' }}>
              <select
                id="year"
                name="year"
                value={storeAddress.year}
                onChange={(e) => { handleChange(e, 'internalData.year'); }}
              >
                <option value="">Año</option>
                {year}
              </select>
            </label>
          </div>
          <p>* Dirección para recoger en tienda</p>
          <label className="select">
            <select id="s_store" name="s_store" value={storeAddress.id || ''} onChange={(e) => { handleChange(e, 'internalData.id'); }}>
              <option value="">Seleccione una opción</option>
              {addresses}
            </select>
          </label>
          {addressInfo}
        </section>
        <h2>Facturación</h2>
        <div className="full">
          <p>*Tipo de facturación</p>
          <label className="select" htmlFor="s_invoice_type">
            <select
              value={storeAddress.invoice_type || ''}
              id="s_invoice_type"
              name="s_invoice_type"
              required="true"
              tabIndex={0}
              onChange={(e) => { handleChange(e, 'internalData.invoice_type'); toggleInvoiceType(storeAddress.invoice_type); switchBillingForm(false); }}
            >
              <option value="">Elige una opción</option>
              <option value="FC">Factura</option>
              <option value="CF">Factura de crédito fiscal</option>
            </select>
          </label>
        </div>
        <div className="full">
          <p>NIT</p>
          <label htmlFor="nit">
            <input
              type="text"
              placeholder="Ingrese los 17 dígitos de su NIT (opcional)"
              name="nit"
              id="nit"
              minLength={4}
              maxLength={17}
              onKeyPress={nitChars}
              value={storeAddress.nit === 'CF' ? '' : storeAddress.nit}
              // value={billingAddress.nit || ''}
              onChange={(e) => { handleChange(e, 'internalData.nit'); }}
            />
          </label>
        </div>
        {storeAddress.invoice_type === 'CF' ? <InvoiceForm handleChange={handleChange} handleChangeAddress={handleChangeAddress} billingAddress={billingAddress} storeAddress={storeAddress} /> : <div />}
        <div className="checkout--options" style={{ visibility: storeAddress.invoice_type === 'CF' ? 'hidden' : 'visible' }}>
          <label>
            <span>¿Deseas usar la misma dirección de envío? </span>
            <p>
              Si <input id="2" type="radio" name="selectBillingAddress" onChange={() => { switchBillingForm(false); }} defaultChecked />
              No <input id="1" type="radio" name="selectBillingAddress" onChange={() => { switchBillingForm(true); }} />
            </p>
          </label>
        </div>
        {billingAddress.isChecked ? <BillingAddressForm handleChangeAddress={handleChangeAddress} billingAddress={billingAddress} storeAddress={storeAddress} city={city} state={state} toggleInvoiceType={toggleInvoiceType} /> : <div />}
        <aside className="checkout--continue">
          <a href="/cart"><span>Regresar</span></a>
          <button type="submit">
            <span>Continuar</span>
          </button>
        </aside>
      </form>
      {(error) ? <Notification title={error} /> : null}
    </div>
  );
};

UI.propTypes = {
  addressList: PropTypes.shape({}),
  storeAddress: PropTypes.shape({}),
  toggleInvoiceType: PropTypes.func.isRequired,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  addressText: PropTypes.shape({}),
  billingAddress: PropTypes.shape({}),
  city: PropTypes.string,
  error: PropTypes.string,
  state: PropTypes.string,
  switchBillingForm: PropTypes.func,
  handleChangeAddress: PropTypes.func,
};

UI.defaultProps = {
  addressList: {},
  storeAddress: {},
  handleChange: () => {},
  handleSubmit: () => {},
  addressText: {},
  billingAddress: {},
  city: '',
  error: '',
  state: '',
  switchBillingForm: () => {},
  handleChangeAddress: () => {},
};

BillingAddressForm.propTypes = {
  billingAddress: PropTypes.shape({}).isRequired,
  storeAddress: PropTypes.shape({}).isRequired,
  // city: PropTypes.string,
  // state: PropTypes.string,
  handleChangeAddress: PropTypes.func,
};

BillingAddressForm.defaultProps = {
  // city: '',
  // state: '',
  handleChangeAddress: () => {},
};


export default UI;
