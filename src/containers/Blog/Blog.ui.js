import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Notification from '../Views/Notification/Notification.ui';

const UI = (props) => {
  if (!props.postsList || !props.postsList.length || !props.postsList.length === 0) return null;
  if (!props.categoriesList || !props.categoriesList.length || !props.categoriesList.length === 0) return null;
  const Articulos = props.postsList.map((post, key) => {
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
            <h3>{ post.title.rendered.length > 60 ? `${post.title.rendered.substring(0, 60)}...` : post.title.rendered }</h3>
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

  let categorias = props.categoriesList.filter(categories => categories.acf.main_category === false && categories.acf.visible === true);
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
        <section className="checkout--address">
          <section className="product--main">
            <div className="product--info">
              <div className="product--detail" >
                <div className="catalog--grid-container-blog-posts">
                  {Articulos}
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="catalog--blog-lateral">
          <div className="catalog--blog-lateral-total">
            <div className="catalog--blog-lateral-total-header"><h1>Categorías</h1></div>
            <div className="catalog--grid-container-blog-categories">
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
