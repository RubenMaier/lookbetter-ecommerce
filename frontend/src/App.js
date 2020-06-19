import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const abrirMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const cerrarMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={abrirMenu}>
            &#9776;
                </button>
          <a href="index.html">LookBetter</a>
        </div>
        <div className="header-links">
          <a href="carrito.html">Carrito</a>
          <a href="ingresar.html">Ingresar</a>
        </div>
      </header>
      <aside className="sidebar">
        <h3>Categorias</h3>
        <button className="sidebar-close-button" onClick={cerrarMenu}>x</button>
        <ul>
          <li><a href="index.html">Remeras Geek</a></li>
          <li><a href="index.html">Remeras Minimalista</a></li>
        </ul>

      </aside>
      <main className="main">
        <div className="content">
          <div className="products">
            <li>
              <div className="product">
                <img className="product-img" src="img/geek/remera1.jpg" alt="producto" />
                <div className="product-name">
                  <a href="producto.html">Remera geek 1</a>
                </div>
                <div className="product-brand">OwnBrand</div>
                <div className="product-price">$ 0</div>
                <div className="product-rating">4.5 Estrellas (10 Reseñas)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-img" src="img/geek/remera1.jpg" alt="producto" />
                <div className="product-name">
                  <a href="producto.html">Remera geek 1</a>
                </div>
                <div className="product-brand">OwnBrand</div>
                <div className="product-price">$ 0</div>
                <div className="product-rating">4.5 Estrellas (10 Reseñas)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-img" src="img/geek/remera1.jpg" alt="producto" />
                <div className="product-name">
                  <a href="producto.html">Remera geek 1</a>
                </div>
                <div className="product-brand">OwnBrand</div>
                <div className="product-price">$ 0</div>
                <div className="product-rating">4.5 Estrellas (10 Reseñas)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-img" src="img/geek/remera1.jpg" alt="producto" />
                <div className="product-name">
                  <a href="producto.html">Remera geek 1</a>
                </div>
                <div className="product-brand">OwnBrand</div>
                <div className="product-price">$ 0</div>
                <div className="product-rating">4.5 Estrellas (10 Reseñas)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-img" src="img/geek/remera1.jpg" alt="producto" />
                <div className="product-name">
                  <a href="producto.html">Remera geek 1</a>
                </div>
                <div className="product-brand">OwnBrand</div>
                <div className="product-price">$ 0</div>
                <div className="product-rating">4.5 Estrellas (10 Reseñas)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-img" src="img/geek/remera1.jpg" alt="producto" />
                <div className="product-name">
                  <a href="producto.html">Remera geek 1</a>
                </div>
                <div className="product-brand">OwnBrand</div>
                <div className="product-price">$ 0</div>
                <div className="product-rating">4.5 Estrellas (10 Reseñas)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-img" src="img/geek/remera1.jpg" alt="producto" />
                <div className="product-name">
                  <a href="producto.html">Remera geek 1</a>
                </div>
                <div className="product-brand">OwnBrand</div>
                <div className="product-price">$ 0</div>
                <div className="product-rating">4.5 Estrellas (10 Reseñas)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-img" src="img/geek/remera1.jpg" alt="producto" />
                <div className="product-name">
                  <a href="producto.html">Remera geek 1</a>
                </div>
                <div className="product-brand">OwnBrand</div>
                <div className="product-price">$ 0</div>
                <div className="product-rating">4.5 Estrellas (10 Reseñas)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-img" src="img/geek/remera1.jpg" alt="producto" />
                <div className="product-name">
                  <a href="producto.html">Remera geek 1</a>
                </div>
                <div className="product-brand">OwnBrand</div>
                <div className="product-price">$ 0</div>
                <div className="product-rating">4.5 Estrellas (10 Reseñas)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-img" src="img/geek/remera1.jpg" alt="producto" />
                <div className="product-name">
                  <a href="producto.html">Remera geek 1</a>
                </div>
                <div className="product-brand">OwnBrand</div>
                <div className="product-price">$ 0</div>
                <div className="product-rating">4.5 Estrellas (10 Reseñas)</div>
              </div>
            </li>
          </div>
        </div>
      </main>
      <footer className="footer">
        Derechos reservados
        </footer>
    </div>
  );
}

export default App;
