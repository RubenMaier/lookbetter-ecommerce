import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
export default () => {
    const abrirMenu = () => {
        document.querySelector(".sidebar").classList.add("open");
    }
    return (
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
    )
}