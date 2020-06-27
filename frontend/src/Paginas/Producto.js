import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { detallesProductoActions } from '../store/actions/productosActions'
import './producto.css'

function Producto(props) {
    const [cantidad, setCantidad] = useState(1)
    const detallesProducto = useSelector(state => state.detallesDeProductoStore)
    const { producto, loading, error } = detallesProducto
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(detallesProductoActions(props.match.params.id))
        return () => {
            //cleanup
        }
    }, [])

    const handleAgregarProductoCarrito = () => {
        props.history.push("/carrito/" + props.match.params.id + "?cantidad=" + cantidad)
    }

    return <div>
        <div className="back-button">
            <Link to="/">Volver</Link>
        </div>
        {loading ?
            <div>Cargando...</div> :
            error ?
                <div>{error}</div> :
                (
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
                                    Estado: {producto.cantidadEnStock > 0 ? "En stock" : "Sin stock"}
                                </li>
                                <li>
                                    Cantidad disponible: <select value={cantidad} onChange={(e) => { setCantidad(e.target.value) }}>
                                        {[...Array(producto.cantidadEnStock).keys()].map(x =>
                                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                                        )}
                                    </select>
                                </li>
                                <li>
                                    {producto.cantidadEnStock > 0 ?
                                        <button className="next-button" onClick={handleAgregarProductoCarrito}>Agregar a carrito</button> :
                                        <button className="next-button-disabled">Agregar a carrito</button>
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                )
        }
    </div>
}

export default Producto;