import React from 'react';
import { Link } from 'react-router-dom'
import datos from '../datos';
import './producto.css'

function Producto(props) {
    const producto = datos.productos.find(x => x._id === props.match.params.id)
    return <div>
        <div className="back-button">
            <Link to="/">Volver</Link>
        </div>
        <div className="details">
            <div className="details-img">
                <img src={producto.imagen} alt="producto" />
            </div>
            <div className="details-info">
                <ul>
                    <li>
                        <h4>{producto.nombre}</h4>
                    </li>
                    <li>
                        {producto.rating} Estrellas ({producto.numeroComentarios} reseñas)
                    </li>
                    <li>
                        Descripción:
                        <div>
                            {producto.descripcion}
                        </div>
                    </li>
                </ul>
            </div>
            <div className="details-action">
                <ul>
                    <li>
                        Precio: <b>{producto.precio}</b>
                    </li>
                    <li>
                        Estado: {producto.estado}
                    </li>
                    <li>
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </li>
                    <li>
                        <button className="next-button">Continuar</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
}
export default Producto;