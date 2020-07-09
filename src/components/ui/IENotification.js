import React from 'react';
import $ from 'jquery';
import { browserEdge } from '../../helpers/svg';

const IEnotification = () => {
  const close = () => {
    $('.ui--ie-notification').fadeOut();
  };
  return (
    <div className="ui--ie-notification">
      <div>
        <a className="link" href="https://www.microsoft.com/es-mx/windows/microsoft-edge" target="_blank" rel="noopener noreferrer">
          <span>Para una óptima experiencia de compra te recomendamos usar un navegador actualizado </span>
          <i>{browserEdge}</i>
        </a>
        <a className="close" onClick={close} />
      </div>
    </div>
  );
};

export default IEnotification;

