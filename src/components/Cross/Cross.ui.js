import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Slider from 'react-slick';
import { CrossPrev, CrossNext } from '../../helpers/svg';

import { currencyFormat, imgFormat } from './../../helpers/formatter';

const CrossBox = ({ data, url }) => {
  const currencyText = currencyFormat(data.items[0].pricing.usd.offer_price).split('.');
  const image = data.items && data.items[0] && data.items[0].images && data.items[0].images[0] ? `${process.env.CDN_PATH}${data.items[0].images[0]}` : '/media/layout/noimage.jpg';
  return (
    <article className="cross--box" >
      <Link to={`/product/${data.locales.es_sv.seo.name}/${url}`}>
        <h3>{data.locales.es_sv.name}</h3>
        <picture>
          <img src={imgFormat('210x180', image)} alt="crossImage" />
        </picture>
        <section>
          <b>Precio inicial del equipo</b>
          <p className="price">
            <span className="symbol">$</span>
            <span>{(currencyText ? currencyText[0] : '')}.</span>
            <span className="symbol">{(currencyText ? currencyText[1] : '')}</span>
          </p>
        </section>
        <b><span>Ver más</span></b>
      </Link>
    </article>
  );
};

const UI = ({ products, addOnsList }) => {
  const crossSettings = {
    infinite: true,
    autoplay: false,
    autoplaySpeed: 4000,
    dots: false,
    speed: 500,
    // centerMode: true,
    slidesToScroll: 1,
    pauseOnHover: true,
    // initialSlide: 1,
    arrows: true,
    prevArrow: <CrossPrev />,
    nextArrow: <CrossNext />,
    responsive: [{
      breakpoint: 760,
      settings: {
        slidesToShow: 2,
      },
    }, {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      },
    }, {
      breakpoint: 1800,
      settings: {
        slidesToShow: 5,
      },
    }],
  };
  let cross = '';
  if (products && products.length) {
    // const pattern = /(\/product\/.*\/)/;
    // const current = window.location.pathname.replace(pattern, '');
    cross = (products || []).map((obj) => {
      const index = obj.locales.es_sv.name;
      if (addOnsList.some(x => x.part_number === obj.part_number)) return null;
      return (<CrossBox data={obj} key={index} url={`${obj.part_number}`} />);
    });
  }

  return (
    <section className="cross">
      <div className="cross--module">
        <h2>Otros usuarios también vieron</h2>
        <Slider {...crossSettings}>
          {cross}
        </Slider>
      </div>
    </section>
  );
};

UI.propTypes = {
  products: PropTypes.shape({}),
};

UI.defaultProps = {
  products: {},
};

CrossBox.propTypes = {
  data: PropTypes.shape({}),
  url: PropTypes.string,
};

CrossBox.defaultProps = {
  data: {},
  url: '',
};


export default UI;
