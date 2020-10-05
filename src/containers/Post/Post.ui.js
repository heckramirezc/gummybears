import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton,
  FacebookIcon,
  TwitterIcon,
  PinterestIcon,
} from 'react-share';

import Notification from '../Views/Notification/Notification.ui';

const UI = (props) => {
  if (!props.postsList || !props.postsList.length || !props.postsList.length === 0) return null;
  if (!props.categoriesList || !props.categoriesList.length || !props.categoriesList.length === 0) return null;
  let slugs = window.location.pathname.split(/(\/)/g);
  slugs = slugs.filter(x => x !== '/');
  const articulo = props.postsList.find(x => x.slug === slugs[slugs.length - 1]);
  const Fecha = new Date(articulo.date);
  const catsArticulo = articulo.categories.filter(cat => cat !== props.categoriesList.find(y => y.slug === 'favoritos').id);
  const catsArticuloName = props.categoriesList.filter(catTemp => catsArticulo.includes(catTemp.id));
  const categoriesNames = catsArticuloName.map(item => item.name).join(' - ');

  const imagenDestacada = (
    <img src={articulo.acf.image} alt={articulo.title.rendered} />
  );

  const contenidoDestacado = (
    <div className="product--post-detail-key-content" dangerouslySetInnerHTML={{ __html: articulo.acf.key_content }} />
  );

  let artiulosRelacionados = props.postsList.filter(posts => posts.categories.some(x => catsArticulo.includes(x)));
  artiulosRelacionados = artiulosRelacionados.filter(posts => posts.id !== articulo.id);
  const ArticulosRelacionados = artiulosRelacionados.map((post, key) => {
    const date = new Date(post.date);
    let categoriesArticulo = post.categories.filter(cat => cat !== props.categoriesList.find(y => y.slug === 'favoritos').id);
    categoriesArticulo = props.categoriesList.filter(catTemp => categoriesArticulo.includes(catTemp.id));
    const category = categoriesArticulo.map(item => item.name).join(' - ');
    return (
      <div className="grid-item">
        <Link key={key} to={`/blog/articulos/${post.slug}`}>
          <img src={post.acf.image} alt={post.title.rendered} />
          <div className="grid-item-content">
            <b>{category.toUpperCase()}</b>
            <h3>{ post.title.rendered.length > 55 ? `${post.title.rendered.substring(0, 55)}...` : post.title.rendered }</h3>
            <p>
              {new Intl.DateTimeFormat('es-GT', {
                year: 'numeric',
                month: 'long',
                day: '2-digit',
              }).format(date)}
            </p>
          </div>
        </Link>
      </div>
    );
  });
  //
  const articulosFavoritos = props.postsList.filter(posts => posts.categories.some(x => x === props.categoriesList.find(y => y.slug === 'favoritos').id));
  const ArticulosFavoritos = articulosFavoritos.map((post, key) => {
    const date = new Date(post.date);
    return (
      <div className="grid-item">
        <Link key={key} to={`/blog/articulos/${post.slug}`}>
          <img src={post.acf.image} alt={post.title.rendered} />
          <div className="grid-item-content">
            <h3>{post.title.rendered}</h3>
            <p>
              {new Intl.DateTimeFormat('es-GT', {
                year: 'numeric',
                month: 'long',
                day: '2-digit',
              }).format(date)}
            </p>
          </div>
        </Link>
      </div>
    );
  });

  let categorias = props.categoriesList.filter(categories => categories.acf.visible === true);
  categorias = categorias.filter(categories => categories.count > 0);
  const Categorias = categorias.map((category, key) => (
    <div className="grid-item">
      <Link key={key} to={`/blog/${category.slug}`}>
        {category.name.toUpperCase()}
      </Link>
    </div>
  ));

  const FormularioNewsletter = (
    <form onSubmit={props.handleSubmit} name="newsletterform">
      <div>
        <h3>Suscríbase a nuestro</h3>
        <h3>Newsletter</h3>
        <label htmlFor="email">
          <input
            type="email"
            placeholder="ingrese su correo electrónico"
            name="email"
            id="email"
            onChange={(e) => { props.handleChange(e); }}
          />
        </label>
        <button type="submit">
          <span>Suscríbase</span>
        </button>
        {(props.error) ? <Notification title={props.error} /> : null}
      </div>
    </form>
  );

  const RedesSociales = props.socialData.map((data, key) => <a key={key} href={data.acf.enlace} target="_blank" rel="noopener noreferrer nofollow"><img src={data.acf.blog_icon} alt={data.title.rendered} /></a>);
  return (
    <main className="product">
      <section className="checkout--content">
        <section className="checkout--address-blog">
          <section className="product--main">
            <div className="product--post-info">
              <div className="product--post-info-content">
                <b>{categoriesNames.toUpperCase()}</b>
                <h1>{articulo.title.rendered}</h1>
                <p>
                  {new Intl.DateTimeFormat('es-GT', {
                    year: 'numeric',
                    month: 'long',
                    day: '2-digit',
                  }).format(Fecha)}
                </p>
                {imagenDestacada}
                <div className="product--post-info-content-share">
                  <p>{`Escrito por: ${articulo.acf.autor.nickname}`}</p>
                  <div className="product--post-info-content-share-networks">
                    <FacebookShareButton
                      url={String(window.location)}
                      quote={articulo.title.rendered}
                      className="share-button"
                    >
                      <FacebookIcon size={32} round />
                    </FacebookShareButton>
                    <TwitterShareButton
                      url={String(window.location)}
                      title={articulo.title.rendered}
                      className="product--post-info-content-share-button"
                    >
                      <TwitterIcon size={32} round />
                    </TwitterShareButton>
                    <PinterestShareButton
                      url={String(window.location)}
                      media={articulo.acf.image}
                      className="product--post-info-content-share-button"
                    >
                      <PinterestIcon size={32} round />
                    </PinterestShareButton>
                  </div>
                </div>
              </div>
              <div className="product--post-detail" dangerouslySetInnerHTML={{ __html: articulo.content.rendered }} />
              {contenidoDestacado}
              <div className="product--detail">
                <div className="related-items"><a>Artículos Relacionados</a></div>
                <div className="catalog--grid-container-blog-posts">
                  {ArticulosRelacionados}
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="catalog--blog-lateral">
          <div className="catalog--blog-lateral-total">
            <div className="catalog--blog-lateral-total-header"><h1>Categorías</h1></div>
            <div className="catalog--grid-container-detail-blog-categories">
              {Categorias}
            </div>
          </div>
          <div className="catalog--blog-lateral-header">
            <div className="catalog--blog-lateral-header-header"><h1>Suscríbase y síganos</h1></div>
            <div className="catalog--blog-lateral-header-social">
              {RedesSociales}
            </div>
            <section className="catalog--blog-detail-newsletter">
              <header className="catalog--blog-detail-newsletter-header">
                {FormularioNewsletter}
              </header>
            </section>
          </div>
          <div className="catalog--blog-lateral-form">
            <div className="catalog--blog-lateral-form-header"><h1>Algúnos favoritos</h1></div>
            <div className="catalog--grid-container-blog-favorites">
              {ArticulosFavoritos}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

UI.propTypes = {
  product: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  postsList: PropTypes.arrayOf(PropTypes.shape({})),
  categoriesList: PropTypes.arrayOf(PropTypes.shape({})),
  socialData: PropTypes.arrayOf(PropTypes.shape({})),
};

UI.defaultProps = {
  product: {
    data: {},
  },
  postsList: [],
  categoriesList: [],
  socialData: [],
};

export default UI;
