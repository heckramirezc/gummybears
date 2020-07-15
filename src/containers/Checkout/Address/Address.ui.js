import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';

// Components
import CartSummary from './../../Cart/CartSummary/CartSummary';
import Notification from '../../Views/Notification/Notification.ui';
import CheckoutAddressStore from './PickupInStore';

// fakeData
import data from './data';
import data2 from './data2';


// Helpers
import { textChars, numberChars, alphanumericChars, emailChars, nitChars } from '../../../helpers/char-restriction';
import orderedAlphabetical from '../../../helpers/orderings';

const CheckoutSteps = () => (
  <div className="checkout--steps">
    <div className="module">
      <ul>
        <li className="step1 active">
          <span />
          <p>Datos personales</p>
        </li>
        <li className="step2">
          <span />
          <p>Datos de envío</p>
        </li>
        <li className="step3">
          <span />
          <p>Forma de pago</p>
        </li>
      </ul>
      <div className="line">
        <div className="line-border" />
        <div className="line-progress" />
      </div>
    </div>
  </div>
);


const ShippingAddressForm = ({ handleChange, duiChars, shippingAddress, customInfoChange, customInfo, state, toggleInvoiceType, switchBilling }) => {
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


  let mpoList = [];
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
    // const { stateName } = (mpos || []).reduce((accumulatorState, currentState) => {
    //  accumulatorState[currentState.mpo_name] = currentState;
    //  return accumulatorState;
    // }, {});
  }

  return (
    <Fragment>
      <div className="checkout--address-form">
        <section>
          <div className="mid">
            <p>* Nombre</p>
            <label htmlFor="s_first_name">
              <input
                type="text"
                placeholder="ingresa tu nombre"
                name="s_first_name"
                id="s_first_name"
                maxLength={30}
                onKeyPress={textChars}
                value={shippingAddress.first_name || ''}
                onChange={(e) => { handleChange(e, 'form_shipping_info.first_name'); }}
              />
            </label>
          </div>
          <div className="mid">
            <p>* Apellidos</p>
            <label htmlFor="s_last_name">
              <input
                type="text"
                placeholder="Ingresa tus apellidos"
                name="s_last_name"
                id="s_last_name"
                maxLength={30}
                onKeyPress={textChars}
                value={shippingAddress.last_name || ''}
                onChange={(e) => { handleChange(e, 'form_shipping_info.last_name'); }}
              />
            </label>
          </div>
          <div className="full">
            <p>* Dirección</p>
            <label htmlFor="s_address_line_1">
              <input
                type="text"
                placeholder="Ingresa la calle y número de tu vivienda"
                name="s_address_line_1"
                id="s_address_line_1"
                maxLength={70}
                onKeyPress={alphanumericChars}
                value={shippingAddress.address_line_1 || ''}
                onChange={(e) => { handleChange(e, 'form_shipping_info.address_line_1'); }}
              />
            </label>
          </div>
          <div className="full">
            <p>* Número de teléfono</p>
            <label htmlFor="s_phone_1">
              <input
                type="text"
                tabIndex={0}
                placeholder="Ingresa tu número a 8 dígitos"
                name="s_phone_1"
                id="s_phone_1"
                maxLength={8}
                onKeyPress={numberChars}
                value={shippingAddress.phone_1 || ''}
                onChange={(e) => { handleChange(e, 'form_shipping_info.phone_1'); }}
              />
            </label>
          </div>
          <div className="full">
            <p>Fecha de Nacimiento:</p>
            <label className="select" htmlFor="day" style={{ width: '33%' }}>
              <select
                id="birthDay"
                name="birthDay"
                value={customInfo.day}
                onChange={(e) => { handleChange(e, 'form_custom_info.day'); }}
              >
                <option value="">Día</option>
                {days}
              </select>
            </label>
            <label className="select" htmlFor="" style={{ width: '33%' }}>
              <select
                id="birthhMonth"
                name="birthhMonth"
                value={customInfo.month}
                onChange={(e) => { handleChange(e, 'form_custom_info.month'); }}
              >
                <option value="">Mes</option>
                {month}
              </select>
            </label>
            <label className="select" htmlFor="" style={{ width: '33%' }}>
              <select
                id="birthhYear"
                name="birthhYear"
                value={customInfo.year}
                onChange={(e) => { handleChange(e, 'form_custom_info.year'); }}
              >
                <option value="">Año</option>
                {year}
              </select>
            </label>
          </div>
          <div className="mid">
            <p>* Departamento</p>
            <label className="select" htmlFor="s_state_or_province_name">
              <select
                id="s_state_or_province_name"
                name="s_state_or_province_name"
                tabIndex={0}
                value={shippingAddress.state_or_province_name || ''}
                onChange={(e) => { handleChange(e, 'form_shipping_info.state_or_province_name'); }}
              >
                <option value="">Elige una opción</option>
                {dptoList}
              </select>
            </label>
          </div>
          <div className="mid">
            <p>* Municipio</p>
            <label className="select" htmlFor="s_city">
              <select
                id="s_city"
                name="s_city"
                tabIndex={0}
                value={shippingAddress.city || ''}
                onChange={(e) => { handleChange(e, 'form_shipping_info.city'); }}
              >
                <option value="">Elige una opción</option>
                {mpoList}
              </select>
            </label>
          </div>
          <div className="full">
            <p>* Correo Electronico</p>
            <label htmlFor="s_email_1">
              <input
                type="text"
                placeholder="Ingresa tu correo electrónico"
                name="s_email_1"
                id="s_email_1"
                maxLength={70}
                onKeyPress={emailChars}
                value={shippingAddress.email_1 || ''}
                onChange={(e) => { handleChange(e, 'form_shipping_info.email_1'); }}
              />
            </label>
          </div>
          <div className="mid">
            <p>* Ingresa DUI</p>
            <label htmlFor="dpi">
              <input
                id="dpi"
                name="dpi"
                type="text"
                maxLength={10}
                onKeyPress={duiChars}
                value={shippingAddress.fax_1 || ''}
                onChange={(e) => { handleChange(e, 'form_shipping_info.fax_1'); }}
              />
            </label>
          </div>
          <div className="mid">
            <p>* Confirma DUI</p>
            <label htmlFor="s_dpiConfirm">
              <input
                id="s_dpiConfirm"
                name="s_dpiConfirm"
                type="text"
                maxLength={10}
                onKeyPress={duiChars}
                value={customInfo.dpiConfirm || ''}
                onChange={(e) => { customInfoChange(e, 'form_custom_info.dpiConfirm'); }}
              />
            </label>
          </div>
          {/*
          <div className="full">
            <p>NIT</p>
            <label htmlFor="nit">
              <input
                type="text"
                placeholder="Ingrese los 10 dígitos de su NIT (opcional)"
                name="nit"
                id="nit"
                minLength={4}
                maxLength={14}
                onKeyPress={nitChars}
                value={customInfo.nit || ''}
                onChange={(e) => { handleChange(e, 'form_billing_custom_info.nit'); }}
              />
            </label>
          </div>
          */}
          <div className="full optional">
            <p>Persona que recibe (opcional)</p>
            <label htmlFor="allowed_recipient_1">
              <input
                type="text"
                placeholder="ingresa el nombre (opcional)"
                name="allowed_recipient_1"
                id="allowed_recipient_1"
                maxLength={80}
                pattern="^[A-Za-zaáéíóúÁÉÍÓÚñÑ0,.-9\-\s_]+"
                onKeyPress={textChars}
                value={customInfo.allowed_recipient_1 || ''}
                onChange={(e) => { handleChange(e, 'form_custom_info.allowed_recipient_1'); }}
              />
            </label>
          </div>
          {/*
          <div className="mid optional">
            <p>Persona que recibe (alternativa)</p>
            <label htmlFor="allowed_recipient_2">
              <input
                type="text"
                placeholder="ingresa el nombre (opcional)"
                name="allowed_recipient_2"
                id="allowed_recipient_2"
                maxLength={80}
                pattern="^[A-Za-zaáéíóúÁÉÍÓÚñÑ0,.-9\-\s_]+"
                onKeyPress={textChars}
                value={customInfo.allowed_recipient_2 || ''}
                onChange={(e) => { handleChange(e, 'form_custom_info.allowed_recipient_2'); }}
              />
            </label>
          </div>
          <div className="full optional hide">
            <p>Referencias del domicilio</p>
            <label htmlFor="s_fax_2">
              <input
                type="text"
                placeholder="Datos adcionales para una entrega más eficiente (opcional)"
                name="s_fax_2"
                id="s_fax_2"
                maxLength={100}
                pattern="^[A-Za-zaáéíóúÁÉÍÓÚñÑ0,.-9\-\s_]+"
                onKeyPress={alphanumericChars}
                value={shippingAddress.fax_2 || ''}
                onChange={(e) => { handleChange(e, 'form_shipping_info.fax_2'); }}
              />
            </label>
          </div>
          */}
          <b>* Campos obligatorios</b>
        </section>
      </div>
      <div className="checkout--address-form">
        <section>
          <h2>Facturación</h2>
          <div className="full">
            <p>*Tipo de facturación</p>
            <label className="select" htmlFor="invoice_type">
              <select
                value={customInfo.invoice_type || ''}
                id="invoice_type"
                name="invoice_type"
                tabIndex={0}
                required="required"
                onChange={(e) => { handleChange(e, 'form_custom_info.invoice_type'); toggleInvoiceType(customInfo.invoice_type); switchBilling(false); }}
              >
                <option value="">Elige una opción</option>
                <option value="FC">Factura</option>
                <option value="CF">Factura de crédito fiscal</option>
              </select>
            </label>
          </div>
          <div className="full">
            <p>{customInfo.invoice_type === 'CF' ? '*' : ''}NIT</p>
            <label htmlFor="nit">
              <input
                type="text"
                placeholder={customInfo.invoice_type === 'CF' ? 'Ingrese los 17 dígitos de su NIT' : 'Ingrese los 17 dígitos de su NIT (opcional)'}
                name="nit"
                id="nit"
                minLength={4}
                maxLength={17}
                onKeyPress={nitChars}
                required={customInfo.invoice_type === 'CF'}
                value={customInfo.nit === 'CF' ? '' : customInfo.nit}
                onChange={(e) => { handleChange(e, 'form_billing_custom_info.nit'); }}
              />
            </label>
          </div>
          <div className="mid">
            <p><span>{customInfo.invoice_type === 'FC' ? 'Si deja el NIT en blanco o es incorrecto se agregará a su DUI.' : ''}</span></p>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

const InvoiceForm = ({ handleChange, billingAddress, customInfo }) => {
  console.log('');
  const giroList = (data2 || []).map(v => <option id={v.id_giro} key={v.id_giro} value={v.giro_name}>{v.giro_name}</option>);
  return (
    <div className="checkout--address-form">
      <section>
        <div className="mid">
          <p>* Número Fiscal</p>
          <label htmlFor="b_fiscal_number">
            <input
              type="text"
              placeholder="Ingresa nümero fiscal"
              name="b_fiscal_number"
              id="b_fiscal_number"
              maxLength={15}
              onKeyPress={alphanumericChars}
              required="required"
              value={customInfo.fiscal_number || ''}
              onChange={(e) => { handleChange(e, 'form_custom_info.fiscal_number'); }}
            />
          </label>
        </div>
        <div className="full">
          <p>* Dirección</p>
          <label htmlFor="b_address_line_1">
            <textarea
              type="text"
              placeholder="Ingresa tu dirección de facturación completa"
              name="b_address_line_1"
              id="b_address_line_1"
              maxLength={140}
              onKeyPress={alphanumericChars}
              required="required"
              value={billingAddress.address_line_1 || ''}
              onChange={(e) => { handleChange(e, 'form_billing_info.address_line_1'); }}
            />
          </label>
        </div>
        <div className="full">
          <p>* Giro</p>
          <label className="select" htmlFor="b_turn">
            <select
              value={customInfo.turn || ''}
              id="b_turn"
              name="b_turn"
              tabIndex={0}
              required="required"
              onChange={(e) => { handleChange(e, 'form_custom_info.turn'); }}
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

const BillingAddressForm = ({ handleChange, billingAddress, shippingAddress }) => { // city, state
  console.log('');
  return (
    <div className="checkout--address-form">
      <section>
        <div className="mid disabled">
          <p>* Nombre</p>
          <label htmlFor="b_first_name">
            <input
              type="text"
              placeholder="ingresa tu nombre"
              name="b_first_name"
              id="b_first_name"
              maxLength={30}
              onKeyPress={textChars}
              value={shippingAddress.first_name || ''}
              disabled
            />
          </label>
        </div>
        <div className="mid disabled">
          <p>* Apellidos</p>
          <label htmlFor="b_last_name">
            <input
              type="text"
              placeholder="Ingresa tus apellidos"
              name="b_last_name"
              id="b_last_name"
              maxLength={30}
              onKeyPress={textChars}
              value={shippingAddress.last_name || ''}
              disabled
            />
          </label>
        </div>
        <div className="full">
          <p>* Dirección</p>
          <label htmlFor="b_address_line_1">
            <textarea
              type="text"
              placeholder="Ingresa tu dirección de facturación completa"
              name="b_address_line_1"
              id="b_address_line_1"
              maxLength={140}
              onKeyPress={alphanumericChars}
              value={billingAddress.address_line_1 || ''}
              onChange={(e) => { handleChange(e, 'form_billing_info.address_line_1'); }}
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
              placeholder="Ingresa tu número a 8 dígitos"
              name="b_phone_1"
              id="b_phone_1"
              maxLength={8}
              onKeyPress={numberChars}
              value={shippingAddress.phone_1 || ''}
              // onChange={(e) => { handleChange(e, 'form_billing_info.phone_1'); }}
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
              onChange={(e) => { handleChange(e, 'form_billing_info.state_or_province_name'); }}
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
              onChange={(e) => { handleChange(e, 'form_billing_info.city'); }}
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
              onChange={(e) => { handleChange(e, 'form_billing_info.address_line_2'); }}
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
              placeholder="Ingresa tu correo electrónico"
              name="b_email_1"
              id="b_email_1"
              maxLength={70}
              onKeyPress={emailChars}
              value={shippingAddress.email_1 || ''}
              // onChange={(e) => { handleChange(e, 'form_billing_info.email_1'); }}
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

const CheckoutAddress = ({ switchBilling, billingAddress, toggleAddress, showForm, handleChange, shippingAddress, handleSubmit, customInfoChange, customInfo, deptoIndex, mpoIndex, city, state, addressLine2, bCity, bState, pickupInStore, toggleInvoiceType }) => {
  let addressForm;
  if (showForm && customInfo.invoice_type !== 'CF') {
    addressForm = (
      <form onSubmit={handleSubmit} name="addresses">
        <ShippingAddressForm handleChange={handleChange} shippingAddress={shippingAddress} customInfoChange={customInfoChange} customInfo={customInfo} deptoIndex={deptoIndex} mpoIndex={mpoIndex} state={state} addressLine2={addressLine2} toggleInvoiceType={toggleInvoiceType} switchBilling={switchBilling} />
        <div className="checkout--options">
          <label>
            <span>¿Deseas usar la misma dirección de envío?</span>
            <p>
              Si <input id="2" type="radio" name="selectBillingAddress" onChange={() => { switchBilling(false); }} defaultChecked />
              No <input id="1" type="radio" name="selectBillingAddress" onChange={() => { switchBilling(true); }} />
            </p>
          </label>
        </div>
        {billingAddress.isChecked ? <BillingAddressForm handleChange={handleChange} shippingAddress={shippingAddress} billingAddress={billingAddress} deptoIndex={deptoIndex} mpoIndex={mpoIndex} city={bCity} state={bState} addressLine2={addressLine2} /> : <div />}
        <aside className="checkout--continue">
          <Link to="/cart"><span>Regresar</span></Link>
          <button type="submit">
            <span>Continuar</span>
          </button>
        </aside>
      </form>
    );
  } else if (showForm) {
    addressForm = (
      <form onSubmit={handleSubmit} name="addresses">
        <ShippingAddressForm handleChange={handleChange} shippingAddress={shippingAddress} customInfoChange={customInfoChange} customInfo={customInfo} deptoIndex={deptoIndex} mpoIndex={mpoIndex} state={state} addressLine2={addressLine2} toggleInvoiceType={toggleInvoiceType} switchBilling={switchBilling} />
        <InvoiceForm handleChange={handleChange} shippingAddress={shippingAddress} billingAddress={billingAddress} deptoIndex={deptoIndex} mpoIndex={mpoIndex} city={bCity} state={bState} addressLine2={addressLine2} customInfo={customInfo} />
        <aside className="checkout--continue">
          <Link to="/cart"><span>Regresar</span></Link>
          <button type="submit">
            <span>Continuar</span>
          </button>
        </aside>
      </form>
    );
  } else {
    addressForm = (
      <CheckoutAddressStore city={city} state={state} />
    );
  }

  return (
    <section className="checkout--address">
      <h2>Datos de envío</h2>
      <h3>¿Cómo deseas obtener tu orden?</h3>
      {/* <p>Si tu dirección no es compatible para entrega a domicilio puedes recogerlo en cualquiera de nuestras sucursales.</p> */}
      <div className="checkout--options">
        <label>
          <input type="radio" disabled name="shipping" onChange={toggleAddress} checked={pickupInStore} />
          <span>Envío a domicilio</span>
        </label>
        <label>
          <input type="radio" disabled name="shipping" onChange={toggleAddress} checked={!pickupInStore} />
          <span>Recoger en tienda</span>
        </label>
      </div>
      {addressForm}
    </section>
  );
};


const AddressUI = props => (
  <main className="checkout">
    <CheckoutSteps />
    <section className="checkout--content">
      <CheckoutAddress
        switchBilling={props.switchBillingForm}
        billingAddress={props.billingAddress}
        toggleAddress={props.toggleAddress}
        toggleInvoiceType={props.toggleInvoiceType}
        showForm={props.showForm}
        handleChange={props.handleChange}
        shippingAddress={props.shippingAddress}
        handleSubmit={props.handleSubmit}
        customInfoChange={props.customInfoChange}
        customInfo={props.customInfo}
        deptoIndex={props.deptoIndex}
        mpoIndex={props.mpoIndex}
        city={props.city}
        state={props.state}
        addressLine2={props.addressLine2}
        bCity={props.bCity}
        bState={props.bState}
        pickupInStore={props.pickupInStore}
        invoiceType={props.invoiceType}
      />
      <CartSummary />
      {(props.error) ? <Notification title={props.error} /> : null}
    </section>
  </main>
);

AddressUI.propTypes = {
  switchBillingForm: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  toggleAddress: PropTypes.func.isRequired,
  toggleInvoiceType: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  billingAddress: PropTypes.shape({}).isRequired,
  shippingAddress: PropTypes.shape({}).isRequired,
  showForm: PropTypes.bool.isRequired,
  customInfoChange: PropTypes.func,
  customInfo: PropTypes.shape({}),
  deptoIndex: PropTypes.number,
  mpoIndex: PropTypes.number,
  error: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  addressLine2: PropTypes.string,
  bCity: PropTypes.string,
  bState: PropTypes.string,
  pickupInStore: PropTypes.bool,
  invoiceType: PropTypes.string,
};

AddressUI.defaultProps = {
  customInfoChange: () => {},
  customInfo: {},
  deptoIndex: 0,
  mpoIndex: 0,
  error: '',
  city: '',
  state: '',
  addressLine2: '',
  bCity: '',
  bState: '',
  pickupInStore: true,
  invoiceType: '',
};

CheckoutAddress.propTypes = {
  switchBilling: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  toggleAddress: PropTypes.func.isRequired,
  toggleInvoiceType: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  billingAddress: PropTypes.shape({}).isRequired,
  shippingAddress: PropTypes.shape({}).isRequired,
  showForm: PropTypes.bool.isRequired,
  customInfoChange: PropTypes.func,
  customInfo: PropTypes.shape({}),
  deptoIndex: PropTypes.number,
  mpoIndex: PropTypes.number,
  city: PropTypes.string,
  state: PropTypes.string,
  addressLine2: PropTypes.string,
  bCity: PropTypes.string,
  bState: PropTypes.string,
  pickupInStore: PropTypes.bool,
};

CheckoutAddress.defaultProps = {
  customInfoChange: () => {},
  customInfo: {},
  deptoIndex: 0,
  mpoIndex: 0,
  city: '',
  state: '',
  addressLine2: '',
  bCity: '',
  bState: '',
  pickupInStore: false,
};

ShippingAddressForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  shippingAddress: PropTypes.shape({}).isRequired,
  customInfoChange: PropTypes.func,
  customInfo: PropTypes.shape({}),
  state: PropTypes.string,
};

ShippingAddressForm.defaultProps = {
  customInfoChange: () => {},
  customInfo: {},
  state: '',
};

BillingAddressForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  billingAddress: PropTypes.shape({}).isRequired,
  shippingAddress: PropTypes.shape({}).isRequired,
  // city: PropTypes.string,
  // state: PropTypes.string,
};

// BillingAddressForm.defaultProps = {
//   city: '',
//   state: '',
// };

export default AddressUI;
