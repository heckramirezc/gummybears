import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import he from 'he';

// helpers
import { currencyFormat, imgFormat } from './../../../helpers/formatter';

const CartSummaryImg = ({ itemInfo }) => (
  <picture>
    <img src={(itemInfo && itemInfo.images && itemInfo.images.length ? imgFormat('90x90', `${process.env.CDN_PATH}${itemInfo.images[0]}`) : '')} alt="alt" />
  </picture>
);

const CartSummaryDesc = ({ itemInfo, addonsList }) => {
  let specs;

  if (Object.keys(itemInfo).length) {
    specs = (itemInfo.attributes).reduce((a, b, i) => {
      const index = `cartSummary-spec-${i}`;

      if (b.name === 'def-capacidad' || b.name === 'def-color') {
        a.push(<p key={index}><span>{b.value}</span></p>);
      }

      return a;
    }, []);
  }

  return (
    <div className="cart--summary-desc">
      <b>{addonsList.some(x => x.item_part_number === itemInfo.part_number) ? 'Adicional' : 'Equipo'}</b>
      <p>{(Object.keys(itemInfo).length ? itemInfo.locales.es_sv.name : '')}</p>
      {specs}
    </div>
  );
};

const CartSummarySub = ({ itemInfo, addonsList }) => {
  const currencyText = currencyFormat(Object.keys(itemInfo).length ? itemInfo.pricing.usd.offer_price : 0).split('.');
  if (addonsList.some(x => x.item_part_number === itemInfo.part_number)) {
    const addOn = addonsList.find(x => x.item_part_number === itemInfo.part_number);
    const subtotal = (addOn.price * addOn.quantity).toString().replace('.', '');
    const total = currencyFormat(subtotal).split('.');
    return (
      <div className="cart--summary-sub">
        <b>Precio</b>
        <p>
          <span className="symbol">$</span>
          <span>{total[0]}.</span>
          <span className="symbol">{String(total[1]).padStart(2, '0')}</span>
        </p>
      </div>
    );
  }
  return (
    <div className="cart--summary-sub">
      <b>Precio</b>
      <p>
        <span className="symbol">$</span>
        <span>{currencyText[0]}.</span>
        <span className="symbol">{currencyText[1]}</span>
      </p>
    </div>
  );
};

const CartSummaryDetail = ({ itemInfo, addonsList }) => (
  <div className="cart--summary-detail">
    <CartSummaryImg itemInfo={itemInfo} />
    <section>
      <CartSummaryDesc itemInfo={itemInfo} addonsList={addonsList} />
      <CartSummarySub itemInfo={itemInfo} addonsList={addonsList} />
    </section>
  </div>
);

const CartSummaryAddress = ({ cartInfo }) => {
  // console.log('cartInfo: ', cartInfo);
  const isPayment = window.location.pathname === '/checkout/payment';
  let output = '';
  if (isPayment) {
    const data = cartInfo && cartInfo.billing_info ? cartInfo.billing_info : null;
    console.log(data);
    const name = data && data.first_name ? `${he.decode(data.first_name)} ${he.decode(data.last_name)}` : '';
    const phone = data && data.phone_1 ? data.phone_1 : null;
    const nit = data && data.custom_info && data.custom_info[0] && data.custom_info[0].key === 'nit' && data.custom_info[0].value !== 'C-F' ? `NIT: ${data.custom_info[0].value}` : '';
    const dui = nit === '' && data && data.fax_1 !== null && data.fax_1 !== '' ? `DUI: ${data.fax_1}` : '';
    const address = data && data.address_line_1 ? `${he.decode(data.address_line_1)}` : '';
    output = (
      <div className="cart--summary-address">
        <section>
          <header>
            <p>Datos Personales</p>
            <Link to="/checkout/address">Editar</Link>
          </header>
          <p>{name}</p>
          <p><b>{phone}</b></p>
        </section>
        <section>
          <header>
            <p>Datos de facturación</p>
            <Link to="/checkout/address">Editar</Link>
          </header>
          <p>{address}</p>
          <p><b>{nit}{dui}</b></p>
        </section>
      </div>
    );
  } else { output = ''; }
  return output;
};

// const CartSummaryUserBlock = () => (
//   <section className="cart--summary-user-block">
//     <header>
//       <b>type</b>
//       <a>Editar</a>
//     </header>
//     <p>info</p>
//     <span>number</span>
//   </section>
// );

// const CartSummaryUser = () => (
//   <footer className="cart--summary-user">
//     <CartSummaryUserBlock type="Datos personales" info="Cecilia Ramírez" number="5544332211" />
//     <CartSummaryUserBlock type="Datos de envío" info="Lago Zurich #34 Col. Polanco. Delegación Miguel Hidalgo. Ciudad de México" />
//   </footer>
// );

const UI = ({ cartInfo, addonsList }) => {
  const itemInfo = {};
  const cartDetails = (cartInfo.items || []).map((data, i) => {
    const index = `item--${data.part_number}--${i}`;
    // item dictionary info.
    (data.product.items).map((items) => {
      itemInfo[items.part_number] = items;
      return items;
    });
    return <CartSummaryDetail key={index} itemInfo={itemInfo[data.part_number]} addonsList={addonsList} />;
  });

  const isRegister = cartInfo && cartInfo.items && cartInfo.items.length === 1;
  let grandTotal;
  if (cartInfo && cartInfo.amount && cartInfo.amount.usd) {
    grandTotal = cartInfo.amount.usd.grand_total;
    if (isRegister) {
      addonsList.forEach((e) => {
        const price = (Math.round((e.price * e.quantity) * 100) / 100).toFixed(2);
        const addOnPrice = price.toString().replace('.', '');
        grandTotal = (parseInt(grandTotal, 10) + parseInt(addOnPrice, 10)).toString();
      });
    }
    grandTotal = currencyFormat(grandTotal).split('.');
    const centsTemp = parseInt(grandTotal[1], 10);
    const cents = centsTemp < 100 ? centsTemp : centsTemp - 100;
    grandTotal[1] = cents;
  }

  // if (addOnsList && addOnsList.length === 0) return null;
  let addOnsDetails = (addonsList || []).map((data) => {
    const subtotal = (data.price * data.quantity).toString().replace('.', '');
    const total = currencyFormat(subtotal).split('.');
    const addOnImg = `/cdn${data.image}`;
    return (
      <div className="cart--summary-detail fakeCard">
        <picture>
          <img src={addOnImg} alt={data.description} />
        </picture>
        <section>
          <div className="cart--summary-desc">
            <b>Adicional</b>
            <p>{ data.description }</p>
          </div>
          <div className="cart--summary-sub">
            <b>Precio</b>
            <p><span className="symbol">$</span><span>{total[0]}.</span><span className="symbol">{String(total[1]).padStart(2, '0')}</span></p>
          </div>
        </section>
      </div>
    );
  });
  if (!isRegister) addOnsDetails = '';

  return (
    <section className="cart--summary">
      <header className="cart--summary-header">
        <p>Resumen de compra</p>
        <Link to="/cart" id="editar-carrito">Editar</Link>
      </header>
      {cartDetails}
      {isRegister ? addOnsDetails : null}
      <aside className="cart--summary-total">
        <b>Total:</b>
        <p>
          <span className="symbol">$</span>
          <span>{grandTotal ? grandTotal[0] : ''}.</span>
          <span className="symbol">{grandTotal ? String(grandTotal[1]).padStart(2, '0') : ''}</span>
        </p>
      </aside>
      <CartSummaryAddress cartInfo={cartInfo} />
    </section>
  );
};

UI.propTypes = {
  cartInfo: PropTypes.shape({}),
};

UI.defaultProps = {
  cartInfo: {},
};

CartSummaryDetail.propTypes = {
  itemInfo: PropTypes.shape({}),
};

CartSummaryDetail.defaultProps = {
  itemInfo: {},
};

CartSummaryDesc.propTypes = {
  itemInfo: PropTypes.shape({}),
};

CartSummaryDesc.defaultProps = {
  itemInfo: {},
};

CartSummarySub.propTypes = {
  itemInfo: PropTypes.shape({}),
};

CartSummarySub.defaultProps = {
  itemInfo: {},
};

CartSummaryImg.propTypes = {
  itemInfo: PropTypes.shape({}),
};

CartSummaryImg.defaultProps = {
  itemInfo: {},
};

CartSummaryAddress.propTypes = {
  cartInfo: PropTypes.shape({}),
};

CartSummaryAddress.defaultProps = {
  cartInfo: {},
};

export default UI;
