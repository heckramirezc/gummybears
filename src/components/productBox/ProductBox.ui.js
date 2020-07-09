import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import _ from 'lodash';

// Helpers
import { currencyFormat, imgFormat } from './../../helpers/formatter';

// TODO: export function es6
import helpers from './../../helpers/product';

// TODO: export switch color to productjs
import FacetsUtils from './../../helpers/facets_utils';

const ProductBoxTitle = ({ title }) => {
  const titles = [];

  for (let i = 0, len = (title.items).length; i < len; i += 1) {
    titles.push(<h3 key={`${title.items[i].part_number}--${i}`}>{title.items[i].locales.es_sv.name}</h3>);
    break;
  }

  return (
    <div>
      {titles}
    </div>
  );
};

const ProductBoxImg = ({ image }) => {
  let img = 'Producto sin imagen';
  if (image && image.items && image.items.length && image.items[0].images && image.items[0].images.length) {
    img = <img src={imgFormat('210x180', `${process.env.CDN_PATH}${image.items[0].images[0]}`)} alt="products" />;
  }
  return (
    <picture>
      {img}
    </picture>
  );
};

const ProductBoxPrice = ({ price }) => {
  let curencyOffer;
  let curencyList;
  const hasPromo = price.items[0].pricing.usd.offer_price !== price.items[0].pricing.usd.list_price;
  const getPrice = price && price.items && price.items.length && price.items[0].pricing && price.items[0].pricing.usd;
  if (getPrice) {
    curencyOffer = currencyFormat(price.items[0].pricing.usd.offer_price).split('.');
    curencyList = currencyFormat(price.items[0].pricing.usd.list_price).split('.');
  }

  const onlyOffer = (
    <div>
      <p>Precio del equipo</p>
      <p className="price">
        <span className="symbol">$</span>
        {(curencyOffer ? curencyOffer[0] : [])}.
        <span className="symbol">{(curencyOffer ? curencyOffer[1] : [])}</span>
      </p>
    </div>
  );

  const listVsOffer = (
    <div>
      <p>Precio del equipo</p>
      <p className="price is-promo">
        <span className="symbol">$</span>
        {(curencyOffer ? curencyOffer[0] : [])}.
        <span className="symbol">{(curencyOffer ? curencyOffer[1] : [])}</span>
      </p>
      <del className="price del">
        <del className="symbol">$</del>
        {(curencyList ? curencyList[0] : [])}.
        <del className="symbol">{(curencyList ? curencyList[1] : [])}</del>
      </del>
    </div>
  );

  return (
    <Fragment>
      {hasPromo ? listVsOffer : onlyOffer}
    </Fragment>
  );
};

const ProductBoxColors = ({ colors }) => {
  // const hasPromo = colors.items[0].pricing.usd.offer_price !== colors.items[0].pricing.usd.list_price;
  // const getPrice = colors && colors.items && colors.items.length && colors.items[0].pricing && colors.items[0].pricing.usd;
  // if (getPrice) {
  // curencyList = currencyFormat(price.items[0].pricing.usd.list_price).split('.');
  // }
  const hasPromo = colors.items[0].pricing.usd.offer_price !== colors.items[0].pricing.usd.list_price;
  const itemInfo = helpers.colorProduct(colors);
  const colorList = _.map(itemInfo, (color, key) => {
    const index = `color--${key}`;
    const colorKey = FacetsUtils.getColorsFilter(key);
    const available = color.available;
    let output = '';
    if (available) {
      output = (
        <li key={index}>
          <p><span className={`color-${colorKey}`} /></p>
        </li>
      );
    } else {
      output = '';
      // output = (
      //   <li key={index} className="disabled">
      //     <span className={`color-${colorKey}`} />
      //   </li>
      // );
    }
    return output;
  });


  return (
    <Fragment>
      {hasPromo ? null : <p className="whitespace" />}
      <div className="color">
        <p>{colorList.length} {colorList.length > 1 ? 'colores' : 'color'}</p>
        <ul>
          {colorList}
        </ul>
      </div>
    </Fragment>
  );
};

// const ProductBoxPospago = () => (
//   <Link to="/" className="product--box-pospago">
//     <b>¡Ahorra!</b>
//     <span>Este equipo en plan pospago desde</span>
//     <b>Q895.00</b>
//   </Link>
// );

const ProductBoxUI = ({ props }) => {
  const hasInvetory = true;// props.available && props.buyable;
  const link = `/product/${props.locales.es_sv.seo.name}/${props.part_number}`;
  const box = (
    <article className="product--box">
      <Link to={link} >
        <ProductBoxTitle title={props} />
        <ProductBoxImg image={props} />
        <ProductBoxPrice price={props} />
        <ProductBoxColors colors={props} />
        <b>
          <span>Comprar</span>
        </b>
      </Link>
    </article>
  );
  const output = hasInvetory ? box : '';
  return output;
};

ProductBoxTitle.propTypes = {
  title: PropTypes.shape({}),
};

ProductBoxUI.propTypes = {
  props: PropTypes.shape({
    available: PropTypes.bool,
    buyable: PropTypes.bool,
  }),
  part_number: PropTypes.string,
  locales: PropTypes.func,
};

ProductBoxTitle.defaultProps = {
  title: {},
};

ProductBoxUI.defaultProps = {
  props: {},
  part_number: '',
  locales: () => {},
};

ProductBoxPrice.propTypes = {
  price: PropTypes.shape({}),
};

ProductBoxPrice.defaultProps = {
  price: {},
};

ProductBoxImg.propTypes = {
  image: PropTypes.shape({}),
};

ProductBoxImg.defaultProps = {
  image: {},
};

ProductBoxColors.propTypes = {
  colors: PropTypes.shape({}),
};

ProductBoxColors.defaultProps = {
  colors: {},
};


export default ProductBoxUI;
