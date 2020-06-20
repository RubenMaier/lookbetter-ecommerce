import React from 'react';
import { Link } from 'react-router-dom'
import datos from '../datos';
import './home.css'

function Home(props) {
    return <ul className="products">
        {
            datos.productos.map(producto =>
                <li>
                    <div className="product">
                        <Link to={'/producto/' + producto._id}>
                            <img className="product-img" src={producto.imagen} alt="producto" />
                        </Link>
                        <div className="product-name">
                            <Link to={'/producto/' + producto._id}>{producto.nombre}</Link>
                        </div>
                        <div className="product-brand">{producto.marca}</div>
                        <div className="product-price">${producto.precio}</div>
                        <div className="product-rating">{producto.rating} Estrellas ({producto.numeroComentarios} reseñas)</div>
                    </div>
                </li>)
        }
    </ul>
}
export default Home;