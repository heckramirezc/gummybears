import React from 'react';
import { loadingIcon } from '../../helpers/svg';

const Loading = () => (
  <div id="loader" className="ui--loading active">
    <section>
      <i>{loadingIcon}</i>
      <p>Cargando</p>
    </section>
  </div>
);

export default Loading;
