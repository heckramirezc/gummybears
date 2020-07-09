import React from 'react';
import AccountHeader from '../../../components/AccountHeader/AccountHeader';

const InfoAddressData = () => (
  <div className="account--info-address">
    <p>Nombre</p>
    <p>Calle y número int. ext.</p>
    <p>Colonia, Delegación</p>
    <p>Ciudad, CP</p>
    <div>
      <a>Eliminar</a>
      <a>Editar</a>
    </div>
  </div>
);

const InfoAddress = () => (
  <AccountHeader title="Mis Direcciones">
    <InfoAddressData />
  </AccountHeader>
);

export default InfoAddress;
