import React from 'react';
import { Link } from 'react-router-dom';

// Components
import CartSummary from './../CartSummary/CartSummary';


const AdditionsExtraBox = () => (
  <label className="additions--extra-box" >
    <h4>title</h4>
    <picture>
      <img src="https://clarogt.wcaas.media/I01.7032.496/I01.7032.496_1_640x480.jpg" alt="additions" />
    </picture>
    <p>
      <span className="symbol">$</span>
      <span>price.</span>
      <span className="symbol">cents</span>
    </p>
    <i>
      <span />
    </i>
  </label>
);

const SizeSpec = () => (
  <section className="product--size">
    <p>Capacidad:</p>
    <div>
      <label>
        <input type="radio" name="product-size" />
        <span>8GB</span>
      </label>
      <label>
        <input type="radio" name="product-size" />
        <span>16GB</span>
      </label>
      <label>
        <input type="radio" name="product-size" />
        <span>32GB</span>
      </label>
    </div>
  </section>
);

const ColorSpec = () => (
  <section className="product--color">
    <p>Colores:</p>
    <div>
      <label>
        <input type="radio" name="product-color" />
        <i>
          <span className="color-black" />
        </i>
      </label>
      <label>
        <input type="radio" name="product-color" />
        <i>
          <span className="color-white" />
        </i>
      </label>
      <label>
        <input type="radio" name="product-color" />
        <i>
          <span className="color-gray" />
        </i>
      </label>
      <label>
        <input type="radio" name="product-color" />
        <i>
          <span className="color-red" />
        </i>
      </label>
    </div>
  </section>
);

const UI = () => (
  <main>
    <section className="additions">
      <div className="module">
        <section className="additions--content">
          <header className="additions--header">
            <h1>Adicionales que te pueden interesar</h1>
          </header>
          <section className="additions--specs">
            <h3>Caracterísiticas de tu equipo:</h3>
            <SizeSpec />
            <ColorSpec />
          </section>
          <section className="additions--extra">
            <h3>Accesorios</h3>
            <section>
              Adicionales.
              <AdditionsExtraBox />
            </section>
          </section>
        </section>
        <aside className="additions--summary">
          <CartSummary />
          <Link to="/cart" className="btn"><span>Carrito de compra</span></Link>
        </aside>
      </div>
    </section>
  </main>
);

export default UI;
