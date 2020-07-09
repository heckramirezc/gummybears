import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import _ from 'lodash';
import { Helmet } from 'react-helmet';
// import Rotation from 'react-rotation';
import ReactImageMagnify from 'react-image-magnify';
import ReactSlick from 'react-slick';
import { FacebookShareButton, TwitterShareButton } from 'react-share';

// Helpers
import { currencyFormat } from './../../helpers/formatter';
import helpers from './../../helpers/product';
import { iconQuestion } from '../../helpers/svg';

// components
// import Cross from './cross';
import ModalNotification from '../../components/ui/ModalNotification';

// Helper
// TODO: export switch color to productjs
import FacetsUtils from './../../helpers/facets_utils';

/*
  Product Main
*/

const ModalSwitchProduct = ({ printProductInfo, closePopup, deletePreviousCart }) => (
  <ModalNotification>
    <header>
      <i>{iconQuestion}</i>
      <h4>Confirmación</h4>
    </header>
    <div className="cart--modal-switch_item">
      <p>¿Deseas sustituir el equipo que ya tienes en carrito por el <b>{printProductInfo}</b>?</p>
      <nav>
        <button onClick={closePopup}><span>No</span></button>
        <button onClick={deletePreviousCart}><span>Si</span></button>
      </nav>
      <span>Perdona la molestia pero por ahora sólo puedes comprar un producto a la vez.</span>
    </div>
  </ModalNotification>
);

ModalSwitchProduct.propTypes = {
  printProductInfo: PropTypes.string,
  closePopup: PropTypes.func,
  deletePreviousCart: PropTypes.func,
};

ModalSwitchProduct.defaultProps = {
  printProductInfo: '',
  closePopup: () => {},
  deletePreviousCart: () => {},
};

const ProductPrice = ({ pricing }) => {
  let currencyOffer;
  let currencyList;
  let hasPromo;
  const getPrice = Object.keys(pricing).length;

  if (getPrice) {
    currencyOffer = currencyFormat(pricing.usd.offer_price).split('.');
    currencyList = currencyFormat(pricing.usd.list_price).split('.');
    hasPromo = pricing.usd.offer_price !== pricing.usd.list_price;
  }

  const onlyOffer = (
    <Fragment>
      <p className="price">
        <span className="symbol">$</span>
        <span>{(currencyOffer ? currencyOffer[0] : '')}.</span>
        <span className="symbol">{(currencyOffer ? currencyOffer[1] : '')}</span>
      </p>
      <p>Precio del equipo</p>
    </Fragment>
  );

  const listVsOffer = (
    <Fragment>
      <p className="block">Precio del equipo</p>
      <p className="price is-promo">
        <span className="symbol">$</span>
        <span>{(currencyOffer ? currencyOffer[0] : '')}.</span>
        <span className="symbol">{(currencyOffer ? currencyOffer[1] : '')}</span>
      </p>
      <del className="price is-promo del">
        <del className="symbol">$</del>
        <del>{(currencyList ? currencyList[0] : '')}.</del>
        <del className="symbol">{(currencyList ? currencyList[1] : '')}</del>
      </del>
    </Fragment>
  );

  return (
    <Fragment>
      {hasPromo ? listVsOffer : onlyOffer}
    </Fragment>
  );
};

export const productConfirm = ({ title }) => (
  <div className="modal">
    <div className="modal--container">
      <div className="modal--bg" onClick={this.closeModals} />
      <section className="modal--products">
        {title}
      </section>
    </div>
  </div>
);


productConfirm.propTypes = {
  title: PropTypes.string.isRequired,
};

const ProductSize = (props) => {
  const sizes = helpers.sizeProduct(props.sizes);

  const sizeList = _.map(sizes[props.colorInit], (data, key) => {
    const index = `size--${key}`;
    return (
      <label key={index}>
        <input
          type="radio"
          name="product-size"
          defaultChecked={props.sizeInit === data.size}
          onClick={() => {
            props.doZoom();
            props.sizeSelected({
              size: data.size,
              pricing: data.pricing,
            });
          }}
        />
        <span>{data.size}</span>
      </label>
    );
  });

  return (
    <section className="product--size">
      <p>Elige la capacidad:</p>
      <div>
        {sizeList}
      </div>
    </section>
  );
};

const ProductColor = (props) => {
  const colors = helpers.colorProduct(props.color);
  const colorList = _.map(colors, (color, key) => {
    const index = `color--${key}`;
    const colorKey = FacetsUtils.getColorsFilter(key);
    const item = (
      <label key={index}>
        <input
          type="radio"
          name="product-color"
          onClick={() => {
            props.doZoom();
            props.colorSelected({
              color: key,
              images: color.images,
              pricing: color.pricing,
              name: color.locales.es_sv.name,
              part_number: color.part_number,
            });
          }}
          checked={key === props.colorInit}
          readOnly
        />
        <i>
          <span className={`color-${colorKey}`} />
        </i>
      </label>
    );
    const output = (color.available && color.isAvailable !== 'unavailable') ? item : '';
    return output;
  });

  return (
    <section className="product--color">
      <p>Colores:</p>
      <div>
        {colorList}
      </div>
    </section>
  );
};

// /**
//  * Agregar openModal.
//  */
const ProductPurchase = (props) => {
  const colors = helpers.itemByColorAndSize(props.itemInfo);
  const sizeProduct = _.each(colors[props.colorInit], data => data.size);
  const purchaseEnabled = props.isAvailable === 'available' ? (
    <a onClick={() => { props.validateCart((sizeProduct[props.sizeInit] ? sizeProduct[props.sizeInit].part_number : null), (props.itemInfo && props.itemInfo.locales && props.itemInfo.locales.es_sv ? props.itemInfo.locales.es_sv.name : null), 1); }}>
      <span>Añadir al carrito</span>
    </a>
  ) : (<p>Agotado</p>);

  return (
    <section className="product--purchase">
      <section>
        <ProductPrice pricing={props.pricing} />
        {/* <a><b>¡Ahorra!</b> <span>en plan pospago desde </span> <b>$895.00</b></a> */}
      </section>
      {purchaseEnabled}
    </section>
  );
};

const ProductHeader = (props) => {
  let currencyOffer;
  let currencyList;
  let hasPromo;
  const getPrice = Object.keys(props.pricing).length;

  if (getPrice) {
    currencyOffer = currencyFormat(props.pricing[process.env.CURRENCY].offer_price);
    currencyList = currencyFormat(props.pricing[process.env.CURRENCY].list_price);
    hasPromo = props.pricing[process.env.CURRENCY].offer_price !== props.pricing[process.env.CURRENCY].list_price;
  }
  const promo = hasPromo && currencyOffer ? ` Precio oferta: ${process.env.CURRENCY_SYMBOL}${currencyOffer}` : '';
  return (
    <header className="product--header">
      <h2>{props.name}</h2>
      <p>{((props.marca).length ? props.marca[0].value : '')}</p>
      <Helmet title={`${props.name} | Tienda Claro ${process.env.COUNTRY}`}>
        <meta name="description" content={`${((props.marca).length ? `${props.marca[0].value} ` : '')}${props.name} ${props.sizeInit} Precio normal: ${process.env.CURRENCY_SYMBOL}${(currencyList || '')}${promo} !Compra ahora! ¡Envío Gratis!`} />
      </Helmet>
    </header>
  );
};

const ProductImage = (props) => {
  // const gallery = props.gallery === 'zoom';
  const alt = `${((props.marca).length ? `${props.marca[0].value} ` : '')}${props.name} ${props.sizeInit}`;
  // const type = (
  //   <div className="product--image-type">
  //     { <a onClick={props.doZoom} className={gallery ? 'active' : ''}>Zoom</a> }
  //     { has360 ? <a onClick={props.do360} className={gallery ? '' : 'active'}>360</a> : null }
  //   </div>
  // );
  // const images360 = (props.images || []).map((image, i) => {
  //   const index = i;
  //   const url = `${process.env.CDN_PATH}${image.replace('.jpg', '_312x400.jpg')}`;
  //   return (<img src={url} alt={alt} key={`img-${index}`} />);
  // });
  // const is360 = has360 ? (<Rotation cycle scroll={false} className="product--image-rotate">{images360}</Rotation>) : null;
  const imagesZoom = (props.images || []).map((image, i) => {
    const index = i;
    const small = `${process.env.CDN_PATH}${image.replace('.jpg', '_312x400.jpg')}`;
    const large = `${process.env.CDN_PATH}${image.replace('.jpg', '_1000x1000.jpg')}`;
    return (
      <ReactImageMagnify
        {...
          {
            smallImage: {
              alt,
              isFluidWidth: true,
              src: small,
            },
            largeImage: {
              src: large,
              width: 1000,
              height: 1000,
            },
            enlargedImageContainerDimensions: {
              width: 400,
              height: 400,
            },
            lensStyle: { backgroundColor: 'rgba(0,0,0,.4)' },
            hoverDelayInMs: 0,
            hoverOffDelayInMs: 0,
            enlargedImagePortalId: 'ui--zoom-container',
          }
        }
        key={`zoom-${index}`}
      />
    );
  });
  const dots = (props.images || []).map(image => (`${process.env.CDN_PATH}${image.replace('.jpg', '_90x90.jpg')}`));
  // const dotsLength = props.images.length > 4;
  const dotsView = document.querySelector('.slick-dots li:first-child');
  const dotsPrev = () => { dotsView.style.marginLeft = '0%'; };
  const dotsNext = () => { dotsView.style.marginLeft = '-100%'; };
  const ArrowPrev = () => <a className="slick-arrow slick-prev fa fa-angle-left" onClick={dotsPrev} />;
  const ArrowNext = () => <a className="slick-arrow slick-next fa fa-angle-right" onClick={dotsNext} />;
  const hasArrows = props.images.length > 4;
  const carousel = {
    customPaging(i) {
      return <a><img src={`${dots[i]}`} alt={`${alt} ${i + 1}`} /></a>;
    },
    dots: true,
    infinite: true,
    speed: 500,
    arrows: hasArrows,
    fade: true,
    prevArrow: <ArrowPrev />,
    nextArrow: <ArrowNext />,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const isZoom = (
    <ReactSlick {...carousel}>
      {imagesZoom}
    </ReactSlick>
  );

  return (
    <div className="product--image">
      {/* type */}
      {/* gallery ? isZoom : is360 */}
      {isZoom}
    </div>
  );
};

const UI = (props) => {
  const propsProductInfo = (props && props.productInfo && props.productInfo.data ? props.productInfo.data : []);

  const colors = propsProductInfo.map((values, i) => {
    const index = `color--${i}`;
    return (
      <ProductColor
        key={index}
        color={values}
        colorInit={props.color}
        colorSelected={props.colorSelected}
        doZoom={props.doZoom}
      />
    );
  });

  const sizes = propsProductInfo.map((values, i) => {
    const index = `size--${i}`;
    return (
      <ProductSize
        key={index}
        sizes={values}
        sizeInit={props.size}
        colorInit={props.color}
        sizeSelected={props.sizeSelected}
        doZoom={props.doZoom}
      />
    );
  });

  const addToCart = propsProductInfo.map((values, i) => {
    const index = `addCart--${i}`;
    return (
      <ProductPurchase
        key={index}
        itemInfo={values}
        sizeInit={props.size}
        colorInit={props.color}
        addToCart={props.addToCart}
        validateCart={props.validateCart}
        cartInfo={props.cartInfo}
        pricing={props.pricing}
        isAvailable={props.isAvailable}
      />
    );
  });

  const productHeader = propsProductInfo.map((values, i) => {
    const index = `productHeader--${i}`;
    const marca = _.filter(values.attributes, { name: 'filt-marca' });
    const nameProduct = props.productName !== '' ? props.productName : values.locales[process.env.LOCALE].name;

    return (
      <ProductHeader
        key={index}
        itemInfo={values}
        marca={marca}
        name={nameProduct}
        pricing={props.pricing}
        sizeInit={props.size}
      />
    );
  });

  const productImage = propsProductInfo.map((values, i) => {
    const index = `productImage--${i}`;
    const marca = _.filter(values.attributes, { name: 'filt-marca' });
    const nameProduct = props.productName !== '' ? props.productName : values.locales[process.env.LOCALE].name;

    return (
      <ProductImage
        key={index}
        itemInfo={values}
        images={props.images}
        doZoom={props.doZoom}
        do360={props.do360}
        gallery={props.gallery}
        marca={marca}
        name={nameProduct}
        sizeInit={props.size}
      />
    );
  });

  const card = (<p className="product--card">Recuerda que para activar tu teléfono, debes incluir una tarjeta Superpack Express de $0.01 la cual se adicionará a tu compra. El tiempo de entrega es en un máximo de 10 días hábiles.</p>);
  const title = propsProductInfo && propsProductInfo[0] ? propsProductInfo[0].locales.es_sv.name : 'Claro SV';
  const shareURL = window.location.href;
  const sharing = (
    <div className="product--share">
      <FacebookShareButton url={shareURL} quote={`Claro | ${title}`}><a className="facebook">Compartir</a></FacebookShareButton>
      <TwitterShareButton url={shareURL} title={`Claro | ${title}`} via="claroelsalvador"><a className="twitter">Tweet</a></TwitterShareButton>
    </div>
  );

  return (
    <section className="product--main">
      {productImage}
      <div className="product--info">
        {productHeader}
        {addToCart}
        {colors}
        {sizes}
        {card}
        {sharing}
        {/* showWarning ? cartWarning : null */}
        {/* <ProductCheck /> */}
        <div id="ui--zoom-container" />
      </div>
      {
        props.modals &&
        props.modals.PPopup &&
        <ModalSwitchProduct
          printProductInfo={props.printProductInfo}
          closePopup={props.closePopup}
          deletePreviousCart={props.deletePreviousCart}
        />
      }
    </section>
  );
};

UI.propTypes = {
  productInfo: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  cartInfo: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  color: PropTypes.string,
  size: PropTypes.string,
  productName: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string),
  pricing: PropTypes.shape({}),
  colorSelected: PropTypes.func,
  sizeSelected: PropTypes.func,
  addToCart: PropTypes.func,
  validateCart: PropTypes.func,
  doZoom: PropTypes.func,
  do360: PropTypes.func,
  gallery: PropTypes.string,
  modals: PropTypes.shape({
    PPopup: PropTypes.bool,
  }),
  printProductInfo: PropTypes.string,
  closePopup: PropTypes.func,
  deletePreviousCart: PropTypes.func,
  isAvailable: PropTypes.string.isRequired,
};

UI.defaultProps = {
  productInfo: {
    data: [],
  },
  cartInfo: {
    items: [],
  },
  color: '',
  images: [],
  size: '',
  pricing: {},
  productName: PropTypes.string,
  gallery: PropTypes.string,
  colorSelected: () => {},
  sizeSelected: () => {},
  addToCart: () => {},
  validateCart: () => {},
  doZoom: () => { },
  do360: () => { },
  modals: () => { },
  printProductInfo: '',
  closePopup: () => { },
  deletePreviousCart: () => { },
};

ProductImage.propTypes = {
  doZoom: PropTypes.func.isRequired,
  do360: PropTypes.func.isRequired,
  gallery: PropTypes.string.isRequired,
  itemInfo: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({
      images: PropTypes.arrayOf(PropTypes.string),
    })),
    locales: PropTypes.shape({
      es_sv: PropTypes.shape({
        name: PropTypes.string,
      }),
    }),
  }),
  images: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  marca: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
  })),
  sizeInit: PropTypes.string,
};

ProductImage.defaultProps = {
  itemInfo: {
    items: [{
      images: [],
    }],
    locales: [{}],
  },
  images: [],
  name: '',
  marca: [],
  sizeInit: '',
};

ProductColor.propTypes = {
  color: PropTypes.shape({}),
  colorInit: PropTypes.string,
  colorSelected: PropTypes.func,
  doZoom: PropTypes.func.isRequired,
};

ProductColor.defaultProps = {
  color: {},
  colorInit: '',
  colorSelected: {},
};

ProductSize.propTypes = {
  sizes: PropTypes.shape({}),
  sizeInit: PropTypes.string,
  colorInit: PropTypes.string,
  sizeSelected: PropTypes.func,
  doZoom: PropTypes.func.isRequired,
};

ProductSize.defaultProps = {
  sizes: {},
  sizeInit: '',
  colorInit: '',
  sizeSelected: {},
};

ProductPurchase.propTypes = {
  itemInfo: PropTypes.shape({
    locales: PropTypes.shape({
      es_sv: PropTypes.shape({
        name: PropTypes.string,
      }),
    }),
  }),
  sizeInit: PropTypes.string,
  colorInit: PropTypes.string,
  validateCart: PropTypes.func,
  pricing: PropTypes.shape({}),
  cartInfo: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  isAvailable: PropTypes.string.isRequired,
};

ProductPurchase.defaultProps = {
  itemInfo: {},
  sizeInit: '',
  colorInit: '',
  pricing: {},
  validateCart: () => {},
  cartInfo: {},
};

ProductHeader.propTypes = {
  name: PropTypes.string,
  marca: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
  })),
  pricing: PropTypes.shape({}),
  sizeInit: PropTypes.string,
};

ProductHeader.defaultProps = {
  name: '',
  marca: [],
  pricing: {},
  sizeInit: '',
};

ProductPrice.propTypes = {
  pricing: PropTypes.shape({}),
};

ProductPrice.defaultProps = {
  pricing: {},
};

// Images.propTypes = {
//   eSpotInfo: PropTypes.string.isRequired,
// };

export default UI;
