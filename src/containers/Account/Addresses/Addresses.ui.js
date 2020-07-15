import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

// import { Link } from 'react-router-dom';

// utilities
import { myAddress } from '../../../helpers/svg';


const AddressBox = ({ addressType, paramAddressType, addressTypeText, addressInfo }) => {
  // console.log('addressInfo: ', addressInfo);
  const hasData = addressInfo && addressInfo.first_name && addressInfo.address_line_1;
  // console.log('hasData: ', hasData);
  return (
    <article className="account--box">
      <label className="checkbox">
        <b>{addressTypeText}</b>
      </label>
      <h6>{hasData ? 'Nombre' : ''}</h6>
      <p>{addressInfo.first_name} {addressInfo.last_name}</p>
      <h6>{hasData ? 'Domicilio' : ''}</h6>
      <p>{addressInfo.address_line_1} {addressInfo.city} {addressInfo.country} {addressInfo.phone_1}</p>
      <footer>
        <div>
          <button className={hasData ? '' : 'add'} onClick={() => addressType(paramAddressType)}>{hasData ? 'Editar' : 'Agregar'}</button>
        </div>
      </footer>
    </article>
  );
};

AddressBox.propTypes = {
  addressType: PropTypes.func,
  paramAddressType: PropTypes.string,
  addressTypeText: PropTypes.string,
  addressInfo: PropTypes.shape({}),
};

AddressBox.defaultProps = {
  addressType: () => {},
  paramAddressType: '',
  addressTypeText: '',
  addressInfo: {},
};

const UI = ({ registerAddressForm, billing, shipping }) => (
  <main>
    <Helmet title={`Mis Direcciones | ${process.env.COUNTRY}`} />
    <section className="account">
      <div className="module">
        <header className="account--header">
          <i>{myAddress}</i>
          <h1>Mis direcciones</h1>
        </header>
        <section className="account--content">
          <AddressBox addressType={registerAddressForm} paramAddressType="shippingAddress" addressInfo={shipping} addressTypeText="Dirección de Envío" />
          <AddressBox addressType={registerAddressForm} paramAddressType="billingAddress" addressInfo={billing} addressTypeText="Dirección de Facturación" />
          <article className="grid" />
          <article className="grid" />
          <article className="grid" />
        </section>
        {/* // enable when address book is developed
        <footer className="account--button">
          <button onClick={() => registerAddressForm('sameBillingAndShippingAddress')}>Agregar nueva dirección</button>
        </footer>
        */}
      </div>
    </section>
  </main>
);

UI.propTypes = {
  registerAddressForm: PropTypes.func,
  billing: PropTypes.shape({}),
  shipping: PropTypes.shape({}),
};

UI.defaultProps = {
  registerAddressForm: () => {},
  billing: {},
  shipping: {},
};

export default UI;
