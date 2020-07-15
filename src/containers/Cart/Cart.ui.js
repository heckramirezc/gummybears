import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// import ModalNotification from '../../components/ui/ModalNotification';

import { currencyFormat, imgFormat } from './../../helpers/formatter';
// import { iconSad } from './../../helpers/svg';

import Cross from '../../components/Cross/Cross';

// const ModalOneTime = props => (
const ModalOneTime = () => (
  // <ModalNotification>
  //   <header>
  //     <i>{iconSad}</i>
  //     <h4>Información importante</h4>
  //   </header>
  //   <div className="cart--modal-one_time">
  //     <p><b>Recuerda que solo puedes comprar un equipo a la vez.</b></p>
  //     <p>Para comprar más equipos finaliza esta compra y repite el proceso.</p>
  //     <a onClick={props.toggle}><span>Cerrar</span></a>
  //   </div>
  // </ModalNotification>
  null
);

export const CartEmpty = () => (
  <div className="cart--empty">
    <p>Tu carrito está vacío</p>
    <Link to="/"><span>Ir a Tienda</span></Link>
  </div>
);

export const CartDetails = ({ itemInfo, deleteItem, product, addOnsList }) => {
  const linkTo = `/product/${itemInfo.locales.es_sv.seo.name}/${product}`;
  const currencyText = currencyFormat(itemInfo.pricing.usd.offer_price).split('.');
  const specs = (itemInfo.attributes || []).reduce((a, b, i) => {
    const index = `cart-spec-${i}`;

    if (b.name === 'def-capacidad' || b.name === 'def-color') {
      a.push(<p key={index}><span>{b.value}</span></p>);
    }

    return a;
  }, []);

  const doDelete = () => {
    deleteItem(itemInfo.part_number);
  };

  const deleteAction = (<a className="delete" onClick={doDelete}>Eliminar del carrito</a>);
  let img = '/media/demo/claro.png';
  if (itemInfo && itemInfo.images && itemInfo.images.length) {
    img = imgFormat('210x180', `${process.env.CDN_PATH}${itemInfo.images[0]}`);
  }
  if (addOnsList && addOnsList.length === 0) return null;
  let first = true;
  const addOns = (addOnsList || []).map((data) => {
    if (first) {
      first = false;
      return <p>{ data.description }</p>;
    } else {
      return <div><br /><p>{ data.description }</p></div>;
    }
  });
  const addOnsPrice = (addOnsList || []).map((data) => {
    const subtotal = (data.price * data.quantity).toString().replace('.', '');
    const total = currencyFormat(subtotal).split('.');
    return <div><p className="price"><span className="symbol">$</span><span>{total[0]}.</span><span className="symbol">{String(total[1]).padStart(2, '0')}</span></p></div>;
  });

  return (
    <section className="cart--content">
      <article className="cart--box">
        <section className="cart--image">
          <h2>Producto</h2>
          <Link to={linkTo} className="cart--image-link">
            <picture>
              <img src={img} alt="alt" />
            </picture>
          </Link>
          {deleteAction}
          <div className="cart--qty">
            <p>1</p>
            <i />
          </div>
        </section>
        <section className="cart--description">
          <section className="cart--head">
            <header>
              <h2>Descripción</h2>
              <h3>Equipo</h3>
              <Link to={linkTo}>{itemInfo.locales.es_sv.name}</Link>
              {specs}
            </header>
            <section>
              <h2>Precio</h2>
              <p className="price">
                <span className="symbol">$</span>
                <span>{currencyText[0]}.</span>
                <span className="symbol">{currencyText[1]}</span>
              </p>
            </section>
          </section>
          <section className="cart--detail">
            <header>
              <h3>Adicional</h3>
              {addOns}
            </header>
            <section>
              <h2>Precio</h2>
              {addOnsPrice}
            </section>
          </section>
          <section className="cart--detail">
            <header>
              <h3>Envío</h3>
              <p>Normal</p>
            </header>
            <section>
              <h2>Precio</h2>
              <p className="price">
                <span>Incluido</span>
              </p>
            </section>
          </section>
        </section>
      </article>
    </section>
  );
};

// checkoutRedirect
const UI = ({ cartInfo, isEmpty, checkoutRedirect, deleteItem, total, cartModal, warnState, isGuest, cardMessageErrorProp, addOnsList }) => {
  if (!addOnsList) return null;
  const itemInfo = {};
  const iconWarning = '/media/layout/warning.png';
  const cartWarning = (<p><span>Recuerda que sólo puedes comprar </span><b>un equipo a la vez </b><span>y puedes adquirir </span><b>hasta 5 equipos </b><span>en un período de 30 días. El tiempo de entrega es en un máximo de 10 días hábiles.</span></p>);
  const cartDetails = (cartInfo.items || []).map((data, i) => {
    const index = `item--${data.part_number}--${i}`;
    // item dictionary info.
    const productPartNumber = data.product.part_number;
    (data.product.items).map((items) => {
      itemInfo[items.part_number] = items;
      return items;
    });

    return <CartDetails key={index} itemInfo={itemInfo[data.part_number]} deleteItem={deleteItem} total={total} product={productPartNumber} addOnsList={addOnsList} />;
  });

  let grandTotal;
  if (cartInfo && cartInfo.amount && cartInfo.amount.usd) {
    grandTotal = cartInfo.amount.usd.grand_total;
    addOnsList.forEach((e) => {
      const price = (Math.round((e.price * e.quantity) * 100) / 100).toFixed(2);
      const addOnPrice = price.toString().replace('.', '');
      grandTotal = (parseInt(grandTotal, 10) + parseInt(addOnPrice, 10)).toString();
    });
    grandTotal = currencyFormat(grandTotal).split('.');
    const centsTemp = parseInt(grandTotal[1], 10);
    const cents = centsTemp < 100 ? centsTemp : centsTemp - 100;
    grandTotal[1] = cents;
  }
  const showWarn = isGuest !== false && warnState === 'not_warned';
  let cardMessageError = '';
  if (cardMessageErrorProp && cardMessageErrorProp.errorKey && cardMessageErrorProp.errorKey === '_API_BAD_INV') {
    const partNumber = cardMessageErrorProp.errorParameters.split(',');
    cardMessageError = (<p><span>No hay suficiente inventario para adquirir la tarjeta de regalo <b>{partNumber[0]}</b></span></p>);
  }

  return (
    <main>
      <Helmet title={`Carrito de Compra | ${process.env.COUNTRY}`} />
      { isEmpty ? <CartEmpty /> :
      <section className="cart">
        <header className="cart--header">
          <h1>Carrito de Compra</h1>
        </header>
        <div className="cart--warning">
          <img src={iconWarning} alt="warning" />
          {cartWarning}
        </div>
        {
          (cardMessageError !== '' ?
            <div className="cart--warning">
              <img src={iconWarning} alt="warning" />
              {cardMessageError}
            </div>
          :
          cardMessageError)
        }
        {cartDetails}
        <section className="cart--total">
          <section>
            <b>Total:</b>
            <p>
              <span className="symbol">$</span>
              <span>{grandTotal ? grandTotal[0] : ''}.</span>
              <span className="symbol">{grandTotal ? String(grandTotal[1]).padStart(2, '0') : ''}</span>
            </p>
          </section>
        </section>
        <footer className="cart--footer">
          <Link to="/" id="seguir-comprando">
            <span>Seguir comprando</span>
          </Link>
          {checkoutRedirect}
        </footer>
        <Cross />
        { showWarn ? <ModalOneTime toggle={cartModal} /> : null }
      </section>
      }
    </main>
  );
};

UI.propTypes = {
  cartInfo: PropTypes.shape({}),
  isEmpty: PropTypes.bool.isRequired,
  checkoutRedirect: PropTypes.node,
  deleteItem: PropTypes.func,
  total: PropTypes.number,
  cartModal: PropTypes.func.isRequired,
  warnState: PropTypes.string.isRequired,
  isGuest: PropTypes.bool,
};

UI.defaultProps = {
  cartInfo: {},
  deleteItem: () => {},
  total: 0,
  checkoutRedirect: '',
  isGuest: undefined,
};

ModalOneTime.propTypes = {
  toggle: PropTypes.func.isRequired,
};

CartDetails.propTypes = {
  itemInfo: PropTypes.shape({}),
  deleteItem: PropTypes.func,
  product: PropTypes.string.isRequired,
};

CartDetails.defaultProps = {
  itemInfo: {},
  deleteItem: () => {},
};

export default UI;
