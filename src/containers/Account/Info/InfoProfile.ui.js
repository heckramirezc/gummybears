import React from 'react';
import AccountHeader from '../../../components/AccountHeader/AccountHeader';

const InfoProfileData = () => (
  <div className="account--info-profile">
    <p>Nombre</p>
    <p>correo@email.com</p>
    <p>55 4433 2211</p>
    <div>
      <a>Editar</a>
    </div>
  </div>
);

const InfoProfile = () => (
  <AccountHeader title="Mis Perfil">
    <InfoProfileData />
  </AccountHeader>
);

export default InfoProfile;
