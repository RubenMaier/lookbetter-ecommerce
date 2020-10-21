import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { listaProductosActions } from '../store/actions/productosActions'
import './home.css'

function Home(props) {
    const listaDeProductos = useSelector(state => state.listaDeProductosStore)
    const { productos, loading, error } = listaDeProductos
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listaProductosActions())
        return () => {
            //cleanup
        }
    }, [])

    return loading ? <div>Cargando...</div> :
        error ? <div>{error}</div> :
            <ul className="products">
                {
                    productos.map(producto =>
                        <li key={producto._id}>
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