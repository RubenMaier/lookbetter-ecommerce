import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import './home.css'

function Home(props) {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        const buscarDatos = async () => {
            axios.defaults.baseURL = window.location.protocol + "//" + window.location.hostname + ":5000";
            const { data } = await axios.get("/api/productos") // data es el nombre del atributo del objeto json que retorna la promesa
            setProductos(data)

        }
        buscarDatos()
        return () => {
            //cleanup
        }
    }, [])

    return <ul className="products">
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