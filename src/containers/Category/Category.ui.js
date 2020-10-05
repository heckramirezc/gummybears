// component
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Solutions = ({ solutionsList }) => {
  if (!solutionsList || !solutionsList.length || !solutionsList.length === 0) return null;
  const Soluciones = solutionsList.map((solucion, key) => (
    <div className="grid-item-industry">
      <Link key={key} to={`/soluciones/${solucion.slug}`}>
        <img src={solucion.acf.icon} alt={key} />
        <h3>{solucion.name}</h3>
        <p>{solucion.acf.short_description}</p>
        <h4>Conozca más</h4>
      </Link>
    </div>
  ));
  return Soluciones;
};

const Industries = ({ industriesList }) => {
  if (!industriesList || !industriesList.length || !industriesList.length === 0) return null;
  const Industrias = industriesList.map((solucion, key) => (
    <div className="grid-item-industry">
      <Link to={`/industria/${solucion.slug}`}>
        <img src={solucion.acf.small_image} alt={key} />
        <h3>{solucion.name}</h3>
        <p>{solucion.acf.short_description}</p>
        <h4>Conozca más</h4>
      </Link>
    </div>
  ));
  return Industrias;
};


const Tecnologies = ({ tecnologiesList, tecnologiesType }) => {
  if (!tecnologiesType || !tecnologiesType.length || !tecnologiesType.length === 0) return null;
  if (!tecnologiesList || !tecnologiesList.length || !tecnologiesList.length === 0) return null;
  let slugs = window.location.pathname.split(/(\/)/g);
  slugs = slugs.filter(x => x !== '/');
  const tecnologieType = tecnologiesType.find(x => x.slug === slugs[slugs.length - 1]);
  const tecnologies = tecnologiesList.filter(x => x.tecnologia[0] === tecnologieType.id);
  const Tecnologias = tecnologies.map((tecnologia, key) => {
    if (slugs[slugs.length - 1] === 'sap') {
      return (
        <div className="grid-item-sap active">
          <Link to={`/producto/${tecnologia.slug}`}>
            <img src={tecnologia.acf.small_image} alt={key} />
            <h3>{tecnologia.title.rendered}</h3>
            <p>{tecnologia.acf.short_description}</p>
            <h4>Conozca más</h4>
          </Link>
        </div>);
    } else {
      return (
        <div className="grid-item-ms active">
          <Link to={`/producto/${tecnologia.slug}`}>
            <img src={tecnologia.acf.small_image} alt={key} />
            <h3>{tecnologia.title.rendered}</h3>
            <p>{tecnologia.acf.short_description}</p>
            <h4>Conozca más</h4>
          </Link>
        </div>);
    }
  });
  return Tecnologias;
};

const UI = ({ solutionsList, industriesList, productsList, tecnologiesType }) => {
  let slugs = window.location.pathname.split(/(\/)/g);
  slugs = slugs.filter(x => x !== '/');
  const categoryName = slugs[slugs.length - 1].toUpperCase();
  const categories = [['soluciones', 'SOLUCIONES'], ['industria', 'INDUSTRIA'], ['tecnologia/sap', 'TECNOLOGÍA']];
  const Categorias = categories.map((categoria, key) => {
    if (categoria[0] === slugs[slugs.length - 1]) {
      return (
        <div className="grid-item active">
          <Link key={key} to={`/${categoria[0]}`}>{categoria[1]}</Link>
        </div>
      );
    } else if (typeof slugs[slugs.length - 2] !== 'undefined' && slugs[slugs.length - 2] === 'tecnologia' && categoria[0] === 'tecnologia/sap') {
      return (
        <div className="grid-item active">
          <Link key={key} to={`/${categoria[0]}`}>{categoria[1]}</Link>
        </div>
      );
    } else {
      return (
        <div className="grid-item">
          <Link key={key} to={`/${categoria[0]}`}>{categoria[1]}</Link>
        </div>
      );
    }
  });
  const tecnologieType = tecnologiesType.find(x => x.slug === slugs[slugs.length - 1]);
  let DetalleCategorias = '';
  switch (window.location.pathname.replace(/(\/)/g, '').replace(/[-_]/g, ' ')) {
    case 'industria':
      DetalleCategorias = <Industries industriesList={industriesList} />;
      break;
    case 'soluciones':
      DetalleCategorias = <Solutions solutionsList={solutionsList} />;
      break;
    default:
      DetalleCategorias = <Tecnologies tecnologiesList={productsList} tecnologiesType={tecnologiesType} />;
      break;
  }
  let categoryHeader = '';
  if (!window.location.pathname.includes('tecnologia')) {
    categoryHeader = <h1>{categoryName}</h1>;
  } else {
    const TiposTecnoogia = tecnologiesType.map((tecnologia, key) => {
      if (tecnologia.id === tecnologieType.id) {
        return (<Link key={key} to={`/tecnologia/${tecnologia.slug}`} className="active">{tecnologia.name.toUpperCase()}</Link>);
      } else {
        return (<Link key={key} to={`/tecnologia/${tecnologia.slug}`} >{tecnologia.name.toUpperCase()}</Link>);
      }
    });
    categoryHeader = (
      <section className="product--tabs">
        {TiposTecnoogia}
      </section>
    );
  }
  return (
    <main>
      <section className="catalog">
        <br /><br />
        <div className="catalog--header-category">
          {categoryHeader}
          <div className="catalog--grid-container-header">
            {Categorias}
          </div>
        </div>
        <div className="catalog--grid-container-category">
          {DetalleCategorias}
        </div>
      </section>
    </main>
  );
};


UI.propTypes = {
  solutionsList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default UI;
