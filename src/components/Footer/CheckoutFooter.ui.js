import React from 'react';
import PropTypes from 'prop-types';
import he from 'he';

// utilities
import { logo } from './../../helpers/svg';

const FooterCheckout = ({ layoutData }) => {
  const getData = layoutData && layoutData.Menus && layoutData.Menus[1] && layoutData.Menus[1].Hijos;
  const legal = [];
  if (getData) {
    const data = layoutData.Menus[1].Hijos;
    for (let i = 0; i < data.length; i += 1) {
      const item = data[i];
      const title = item.Descripcion;
      const href = item.URL;
      const key = item.Unico;
      const output = (
        <a href={he.decode(href)} target="_blank" rel="noopener noreferrer nofollow" key={key}>{he.decode(title)}</a>
      );
      legal.push(output);
    }
  }
  return (
    <footer className="footer">
      <div className="footer--end">
        <section>
          <p>
            <span>{logo}</span>
            <span>A1----Todos los derechos reservados, Claro {new Date().getFullYear()} ©</span>
          </p>
          <nav>
            {legal}
          </nav>
        </section>
      </div>
    </footer>
  );
};

FooterCheckout.propTypes = {
  layoutData: PropTypes.shape({}).isRequired,
};

export default FooterCheckout;

