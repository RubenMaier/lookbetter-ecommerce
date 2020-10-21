import React from 'react'
import { Link } from 'react-router-dom'
import './aside.css'
export default () => {
    const cateogrias = [
        {
            _id: 1,
            nombre: 'Remeras Geek',
            enlace: '/'
        },
        {
            _id: 2,
            nombre: 'Remeras Minimalista',
            enlace: '/'
        },
    ]
    const cerrarMenu = () => {
        document.querySelector(".sidebar").classList.remove("open");
    }
    return (
        <aside className="sidebar">
            <h3>Categorías</h3>
            <button className="sidebar-close-button" onClick={cerrarMenu}>x</button>
            <ul>
                {
                    cateogrias.map(categoria =>
                        <li key={categoria._id}>
                            <Link to={categoria.enlace}>
                                {categoria.nombre}
                            </Link>
                        </li>
                    )
                }
            </ul>
        </aside>
    )
}