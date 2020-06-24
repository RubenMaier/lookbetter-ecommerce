import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css';
import PaginaHome from './paginas/Home'
import PaginaProducto from './paginas/Producto'

function App() {
  const abrirMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const cerrarMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={abrirMenu}>
              &#9776;
            </button>
            <Link to="/">LookBetter</Link>
          </div>
          <div className="header-links">
            <a href="carrito.html">Carrito</a>
            <a href="ingresar.html">Ingresar</a>
          </div>
        </header>
        <aside className="sidebar">
          <h3>Categorías</h3>
          <button className="sidebar-close-button" onClick={cerrarMenu}>x</button>
          <ul>
            <li><a href="index.html">Remeras Geek</a></li>
            <li><a href="index.html">Remeras Minimalista</a></li>
          </ul>

        </aside>
        <main className="main">
          <div className="content">
            <Route path="/producto/:id" component={PaginaProducto} />
            <Route path="/" exact={true} component={PaginaHome} />
          </div>
        </main>
        <footer className="footer">
          Derechos reservados
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
