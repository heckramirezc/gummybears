import React from 'react';
import PropTypes from 'prop-types';

// Helpers
import helpers from './../../helpers/product';
import { icoIncluye, icoResumen, icoEspecificacion, icoEntretenimiento, icoConectividad } from '../../helpers/svg';

const ProductFaq = ({ productFaq, handleBlocks }) => (
  <section className="product--faq">
    <div className="module">
      {(productFaq && Object.keys(productFaq).length) ?
        <section className="product--faq-block" style={{ display: 'inline-block' }} >
          <a onClick={handleBlocks}>
            <h4>{ productFaq['attr-box-a-name'] }</h4>
            <span className="fa-plus" />
          </a>
          <article>
            <p />
            <p>{ productFaq['attr-box-a-desc'] }</p>
          </article>
        </section>
        : null
      }
      {(productFaq && Object.keys(productFaq).length) ?
        <section className="product--faq-block" style={{ display: 'inline-block' }} >
          <a onClick={handleBlocks}>
            <h4>{ productFaq['attr-box-b-name'] }</h4>
            <span className="fa-plus" />
          </a>
          <article>
            <p />
            <p>{ productFaq['attr-box-b-desc'] }</p>
          </article>
        </section>
        : null
      }
    </div>
  </section>
);

const ProductDataSheet = ({ dataSheet }) => (
  <section className="product--datasheet">
    <section>
      <div className="module">
        <header>
          <i>{icoIncluye}</i>
          <h3>Características básicas</h3>
        </header>
        {dataSheet && Object.keys(dataSheet).length && dataSheet['attr-techspech-incluye-pantalla'] ?
          <div>
            <h6>Pantalla</h6>
            <p>{dataSheet['attr-techspech-incluye-pantalla']}</p>
          </div>
          : null
        }
        {dataSheet && Object.keys(dataSheet).length && dataSheet['attr-techspech-incluye-materiales'] ?
          <div>
            <h6>Materiales</h6>
            <p>{dataSheet['attr-techspech-incluye-materiales']}</p>
          </div>
          : null
        }
        {dataSheet && Object.keys(dataSheet).length && dataSheet['attr-techspech-incluye-calidad-imagen'] ?
          <div>
            <h6>Calidad de imagen</h6>
            <p>{dataSheet['attr-techspech-incluye-calidad-imagen']}</p>
          </div>
          : null
        }
        {dataSheet && Object.keys(dataSheet).length && dataSheet['attr-techspech-incluye-pila'] ?
          <div>
            <h6>Batería</h6>
            <p>{dataSheet['attr-techspech-incluye-pila']}</p>
          </div>
          : null
        }
      </div>
    </section>
    <section>
      <div className="module">
        <header>
          <i>{icoResumen}</i>
          <h3>Resumen</h3>
        </header>
        {dataSheet && Object.keys(dataSheet).length && dataSheet['attr-techspech-resumen-camara'] ?
          <div>
            <h6>Cámara</h6>
            <p>{dataSheet['attr-techspech-resumen-camara']}</p>
          </div>
          : null
        }
        {dataSheet && Object.keys(dataSheet).length && dataSheet['attr-techspech-resumen-tiempo-carga'] ?
          <div>
            <h6>Tiempo de recarga</h6>
            <p>{dataSheet['attr-techspech-resumen-tiempo-carga']}</p>
          </div>
          : null
        }
        {dataSheet && Object.keys(dataSheet).length && dataSheet['attr-techspech-resumen-peso'] ?
          <div>
            <h6>Peso</h6>
            <p>{dataSheet['attr-techspech-resumen-peso']}</p>
          </div>
          : null
        }
        {dataSheet && Object.keys(dataSheet).length && dataSheet['attr-techspech-resumen-tamano'] ?
          <div>
            <h6>Tamaño</h6>
            <p>{dataSheet['attr-techspech-resumen-tamano']}</p>
          </div>
          : null
        }
      </div>
    </section>
    <section>
      <div className="module">
        <header>
          <i>{icoEspecificacion}</i>
          <h3>Especificación general</h3>
        </header>
        { dataSheet && Object.keys(dataSheet).length ?
          <div>
            <h6>Batería renovable</h6>
            <p>{dataSheet['attr-techspech-general-bateria-renovable']}</p>
          </div>
          : null
        }
        {dataSheet && Object.keys(dataSheet).length && dataSheet['attr-techspech-general-bateria-duracion'] ?
          <div>
            <h6>Duración de la batería</h6>
            <p>{dataSheet['attr-techspech-general-bateria-duracion']}</p>
          </div>
          : null
        }
        {dataSheet && Object.keys(dataSheet).length && dataSheet['attr-techspech-general-espera'] ?
          <div>
            <h6>Modo de espera</h6>
            <p>{dataSheet['attr-techspech-general-espera']}</p>
          </div>
          : null
        }
        {dataSheet && Object.keys(dataSheet).length && dataSheet['attr-techspech-general-bateria-capacidad'] ?
          <div>
            <h6>Capacidad de la batería</h6>
            <p>{dataSheet['attr-techspech-general-bateria-capacidad']}</p>
          </div>
          : null
        }
        {dataSheet && Object.keys(dataSheet).length && dataSheet['attr-techspech-general-dimensiones'] ?
          <div>
            <h6>Dimensiones del teléfono</h6>
            <p>{dataSheet['attr-techspech-general-dimensiones']}</p>
          </div>
          : null
        }
        {dataSheet && Object.keys(dataSheet).length && dataSheet['attr-techspech-general-peso'] ?
          <div>
            <h6>Peso</h6>
            <p>{dataSheet['attr-techspech-general-peso']}</p>
          </div>
          : null
        }
        {dataSheet && Object.keys(dataSheet).length && dataSheet['attr-techspech-incluye-pantalla'] ?
          <div>
            <h6>Tamaño de la pantalla</h6>
            <p>{dataSheet['attr-techspech-incluye-pantalla']}</p>
          </div>
          : null
        }
        {dataSheet && Object.keys(dataSheet).length && dataSheet['attr-techspech-general-memoria'] ?
          <div>
            <h6>Memoria interna</h6>
            <p>{dataSheet['attr-techspech-general-memoria']}</p>
          </div>
          : null
        }
        {dataSheet && Object.keys(dataSheet).length && dataSheet['attr-techspech-general-memoria-ext'] ?
          <div>
            <h6>Tipo de tarjeta de memoria</h6>
            <p>{dataSheet['attr-techspech-general-memoria-ext']}</p>
          </div>
          : null
        }
        {dataSheet && Object.keys(dataSheet).length && dataSheet['attr-techspech-general-correo-soportado'] ?
          <div>
            <h6>Correo electrónico soportado</h6>
            <p>{dataSheet['attr-techspech-general-correo-soportado']}</p>
          </div>
          : null
        }
        {dataSheet && Object.keys(dataSheet).length && dataSheet['attr-techspech-general-sistema-operativo'] ?
          <div>
            <h6>Sistema operativo</h6>
            <p>{dataSheet['attr-techspech-general-sistema-operativo']}</p>
          </div>
          : null
        }
        {dataSheet && Object.keys(dataSheet).length && dataSheet['attr-techspech-general-sistema-operativo-version'] ?
          <div>
            <h6>Versión del sistema operativo</h6>
            <p>{dataSheet['attr-techspech-general-sistema-operativo-version']}</p>
          </div>
          : null
        }
        {dataSheet && Object.keys(dataSheet).length && dataSheet['attr-techspech-general-procesador'] ?
          <div>
            <h6>Procesador</h6>
            <p>{dataSheet['attr-techspech-general-procesador']}</p>
          </div>
          : null
        }
        {dataSheet && Object.keys(dataSheet).length && dataSheet['attr-techspech-general-sim'] ?
          <div>
            <h6>Tipo de SIM</h6>
            <p>{dataSheet['attr-techspech-general-sim']}</p>
          </div>
          : null
        }
        {dataSheet && Object.keys(dataSheet).length && dataSheet['attr-techspech-general-videollamada'] ?
          <div>
            <h6>Videollamada</h6>
            <p>{dataSheet['attr-techspech-general-videollamada']}</p>
          </div>
          : null
        }
        {dataSheet && Object.keys(dataSheet).length && dataSheet['attr-techspech-general-prueba-agua'] ?
          <div>
            <h6>A prueba de agua</h6>
            <p>{dataSheet['attr-techspech-general-prueba-agua']}</p>
          </div>
          : null
        }
      </div>
    </section>

    <section>
      <div className="module">
        <header>
          <i>{icoEntretenimiento}</i>
          <h3>Entretenimiento</h3>
        </header>
        {dataSheet && Object.keys(dataSheet).length && dataSheet['attr-techspech-entretenimiento-camara-trasera'] ?
          <div>
            <h6>Cámara trasera</h6>
            <p>{dataSheet['attr-techspech-entretenimiento-camara-trasera']}</p>
          </div>
          : null
        }
        {dataSheet && Object.keys(dataSheet).length && dataSheet['attr-techspech-entretenimiento-camara-frontal'] ?
          <div>
            <h6>Cámara frontal</h6>
            <p>{dataSheet['attr-techspech-entretenimiento-camara-frontal']}</p>
          </div>
          : null
        }
        {dataSheet && Object.keys(dataSheet).length && dataSheet['attr-techspech-entretenimiento-flash'] ?
          <div>
            <h6>Flash</h6>
            <p>{dataSheet['attr-techspech-entretenimiento-flash']}</p>
          </div>
          : null
        }
        {dataSheet && Object.keys(dataSheet).length && dataSheet['attr-techspech-entretenimiento-enfoque'] ?
          <div>
            <h6>Enfoque</h6>
            <p>{dataSheet['attr-techspech-entretenimiento-enfoque']}</p>
          </div>
          : null
        }
        {dataSheet && Object.keys(dataSheet).length && dataSheet['attr-techspech-entretenimiento-camara-hd'] ?
          <div>
            <h6>Cámara HD</h6>
            <p>{dataSheet['attr-techspech-entretenimiento-camara-hd']}</p>
          </div>
          : null
        }
        {dataSheet && Object.keys(dataSheet).length && dataSheet['attr-techspech-entretenimiento-video'] ?
          <div>
            <h6>Video</h6>
            <p>{dataSheet['attr-techspech-entretenimiento-video']}</p>
          </div>
          : null
        }
        {dataSheet && Object.keys(dataSheet).length && dataSheet['attr-techspech-entretenimiento-musica'] ?
          <div>
            <h6>Música</h6>
            <p>{dataSheet['attr-techspech-entretenimiento-musica']}</p>
          </div>
          : null
        }
        {dataSheet && Object.keys(dataSheet).length && dataSheet['attr-techspech-entretenimiento-radio'] ?
          <div>
            <h6>Radio</h6>
            <p>{dataSheet['attr-techspech-entretenimiento-radio']}</p>
          </div>
          : null
        }
      </div>
    </section>
    <section>
      <div className="module">
        <header>
          <i>{icoConectividad}</i>
          <h3>Conectividad</h3>
        </header>
        {dataSheet && Object.keys(dataSheet).length && dataSheet['attr-techspech-conectividad-datos'] ?
          <div>
            <h6>Conectividad de datos</h6>
            <p>{dataSheet['attr-techspech-conectividad-datos']}</p>
          </div>
          : null
        }
        {dataSheet && Object.keys(dataSheet).length && dataSheet['attr-techspech-conectividad-banda'] ?
          <div>
            <h6>Tipo de banda</h6>
            <p>{dataSheet['attr-techspech-conectividad-banda']}</p>
          </div>
          : null
        }
        {dataSheet && Object.keys(dataSheet).length && dataSheet['attr-techspech-conectividad-bluetooth'] ?
          <div>
            <h6>Bluetooth</h6>
            <p>{dataSheet['attr-techspech-conectividad-bluetooth']}</p>
          </div>
          : null
        }
        {dataSheet && Object.keys(dataSheet).length && dataSheet['attr-techspech-conectividad-bluetooth-st'] ?
          <div>
            <h6>Estereo Bluetooth</h6>
            <p>{dataSheet['attr-techspech-conectividad-bluetooth-st']}</p>
          </div>
          : null
        }
        {dataSheet && Object.keys(dataSheet).length && dataSheet['attr-techspech-conectividad-wifi'] ?
          <div>
            <h6>Wi-Fi</h6>
            <p>{dataSheet['attr-techspech-conectividad-wifi']}</p>
          </div>
          : null
        }
        {dataSheet && Object.keys(dataSheet).length && dataSheet['attr-techspech-conectividad-gps'] ?
          <div>
            <h6>GPS</h6>
            <p>{dataSheet['attr-techspech-conectividad-gps']}</p>
          </div>
          : null
        }
        {dataSheet && Object.keys(dataSheet).length && dataSheet['attr-techspech-conectividad-3g4g'] ?
          <div>
            <h6>Conexión 3G/4G</h6>
            <p>{dataSheet['attr-techspech-conectividad-3g4g']}</p>
          </div>
          : null
        }
        {dataSheet && Object.keys(dataSheet).length && dataSheet['attr-techspech-conectividad-35mm'] ?
          <div>
            <h6>Conector de Audio</h6>
            <p>{dataSheet['attr-techspech-conectividad-35mm']}</p>
          </div>
          : null
        }
      </div>
    </section>
  </section>
);

// banners content
const ProductDescription = ({ name, desc, img, partNumber, color, marca, nameProduct }) => {
  const partNumberPath = (partNumber ? partNumber.split('/') : '');
  const linebreak = desc.split('\\n');
  const lines = linebreak.map(p => <p key={p}>{p}</p>);

  return (
    <section className={color}>
      <div className="module">
        <header>
          <h3>{name}</h3>
          {lines}
        </header>
        <picture>
          <img src={(partNumberPath ? `${process.env.ESPOTS}/product_detail/${img}${partNumberPath[partNumberPath.length - 1].replace(/_/gi, '.')}.jpg` : '')} alt={`${marca} ${nameProduct} ${name}`} />
        </picture>
      </div>
    </section>
  );
};

// function handle switch
const ProductDescriptionSwitch = ({ handleSwitch, productDescriptionOstd, pathname, marca, nameProduct }) => (
  <section className="product--description-switch">
    <div className="module">
      <h3>Características destacadas</h3>
      <ul className="product--description-switch-menu">
        <li>
          <a className="first active" onClick={handleSwitch}>
            <i />
          </a>
          <span>{productDescriptionOstd['attr-chars-ostd-a-name']}</span>
        </li>
        <li>
          <a className="second" onClick={handleSwitch}>
            <i />
          </a>
          <span>{productDescriptionOstd['attr-chars-ostd-b-name']}</span>
        </li>
        <li>
          <a className="third" onClick={handleSwitch}>
            <i />
          </a>
          <span>{productDescriptionOstd['attr-chars-ostd-c-name']}</span>
        </li>
      </ul>
      <section className="product--description-switch-content">
        <section className="first-content active">
          {(productDescriptionOstd && !productDescriptionOstd['attr-chars-ostd-a-img'] ?
            <div />
          : <ProductDescription name={productDescriptionOstd['attr-chars-ostd-a-name']} desc={productDescriptionOstd['attr-chars-ostd-a-desc']} img="chars_ostd_a_" partNumber={pathname} color="product--description-white" marca={marca} nameProduct={nameProduct} />
          )}
        </section>
        <section className="second-content">
          {(productDescriptionOstd && !productDescriptionOstd['attr-chars-ostd-a-img'] ?
            <div />
            : <ProductDescription name={productDescriptionOstd['attr-chars-ostd-b-name']} desc={productDescriptionOstd['attr-chars-ostd-b-desc']} img="chars_ostd_b_" partNumber={pathname} color="product--description-white" marca={marca} nameProduct={nameProduct} />
          )}
        </section>
        <section className="third-content">
          {(productDescriptionOstd && !productDescriptionOstd['attr-chars-ostd-a-img'] ?
            <div />
          : <ProductDescription name={productDescriptionOstd['attr-chars-ostd-c-name']} desc={productDescriptionOstd['attr-chars-ostd-c-desc']} img="chars_ostd_c_" partNumber={pathname} color="product--description-white" marca={marca} nameProduct={nameProduct} />
          )}
        </section>
      </section>
    </div>
  </section>
);

const ProductTabs = ({ handleTabs }) => (
  <section className="product--tabs">
    <a onClick={(e) => { handleTabs(e); }} className="active">Características</a>
    <a onClick={(e) => { handleTabs(e); }}>Ficha Técnica</a>
  </section>
);


const ProductTabsUI = (props) => {
  const productDataSheet = helpers.arrayToObjectProductInfo(/attr-techspech/gi, props.product);
  const productFaq = helpers.arrayToObjectProductInfo(/attr-box/gi, props.product);
  const productDescription = helpers.arrayToObjectProductInfo(/attr-chars-ext/gi, props.product);
  const productDescriptionOstd = helpers.arrayToObjectProductInfo(/attr-chars-ostd/gi, props.product);
  const marca = helpers.arrayToObjectProductInfo(/filt-marca/gi, props.product);
  const nameProduct = props.product && props.product.length ? props.product[0].locales[process.env.LOCALE].name : '';
  // console.log('product', productDescriptionOstd && productDescriptionOstd['attr-chars-ostd-a-img']);
  return (
    <section className="product--details">
      <ProductTabs handleTabs={props.handleTabs} />
      {(productDescription && Object.keys(productDescription).length ?
        <section className="product--description active">
          {(productDescription && productDescription['attr-chars-ext-a-name'] && productDescription['attr-chars-ext-a-name'] !== undefined ? <ProductDescription name={productDescription['attr-chars-ext-a-name']} desc={productDescription['attr-chars-ext-a-desc']} img="chars_ext_a_" partNumber={props.pathName} color="product--description-white" marca={marca['filt-marca']} nameProduct={nameProduct} /> : <div />)}
          {(productDescription && productDescription['attr-chars-ext-b-name'] && productDescription['attr-chars-ext-b-name'] !== undefined ? <ProductDescription name={productDescription['attr-chars-ext-b-name']} desc={productDescription['attr-chars-ext-b-desc']} img="chars_ext_b_" partNumber={props.pathName} color="product--description-gray" marca={marca['filt-marca']} nameProduct={nameProduct} /> : <div />)}
          {(productDescription && productDescription['attr-chars-ext-c-name'] && productDescription['attr-chars-ext-c-name'] !== undefined ? <ProductDescription name={productDescription['attr-chars-ext-c-name']} desc={productDescription['attr-chars-ext-c-desc']} img="chars_ext_c_" partNumber={props.pathName} color="product--description-white" marca={marca['filt-marca']} nameProduct={nameProduct} /> : <div />)}
          {(
            productDescriptionOstd && productDescriptionOstd['attr-chars-ostd-a-img'] && productDescriptionOstd['attr-chars-ostd-b-img'] && productDescriptionOstd['attr-chars-ostd-c-img'] ?
              <ProductDescriptionSwitch handleSwitch={props.handleSwitch} productDescriptionOstd={productDescriptionOstd} pathname={props.pathName} marca={marca['filt-marca']} nameProduct={nameProduct} />
           : <div />
          )}
        </section>
      : null)}
      <ProductDataSheet dataSheet={productDataSheet} />
      <ProductFaq productFaq={productFaq} handleBlocks={props.handleBlocks} />
    </section>
  );
};

ProductTabsUI.propTypes = {
  product: PropTypes.arrayOf(PropTypes.shape({})),
  handleTabs: PropTypes.func.isRequired,
  handleBlocks: PropTypes.func.isRequired,
  handleSwitch: PropTypes.func.isRequired,
  pathName: PropTypes.string,
};

ProductTabsUI.defaultProps = {
  product: [],
  pathName: '',
};

ProductTabs.propTypes = {
  handleTabs: PropTypes.func,
};

ProductTabs.defaultProps = {
  handleTabs: () => {},
};

ProductDataSheet.propTypes = {
  dataSheet: PropTypes.shape({}),
};

ProductDataSheet.defaultProps = {
  dataSheet: {},
};

ProductFaq.propTypes = {
  productFaq: PropTypes.shape({}),
  handleBlocks: PropTypes.func.isRequired,
};

ProductFaq.defaultProps = {
  productFaq: {},
};

ProductDescriptionSwitch.propTypes = {
  handleSwitch: PropTypes.func.isRequired,
  productDescriptionOstd: PropTypes.shape({}),
  pathname: PropTypes.string,
  marca: PropTypes.string,
  nameProduct: PropTypes.string,
};

ProductDescriptionSwitch.defaultProps = {
  productDescriptionOstd: {},
  pathname: '',
  marca: '',
  nameProduct: '',
};

ProductDescription.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string,
  img: PropTypes.string,
  partNumber: PropTypes.string,
  color: PropTypes.string,
  marca: PropTypes.string,
  nameProduct: PropTypes.string,
};

ProductDescription.defaultProps = {
  name: '',
  desc: '',
  img: '',
  partNumber: '',
  color: '',
  marca: '',
  nameProduct: '',
};


export default ProductTabsUI;
