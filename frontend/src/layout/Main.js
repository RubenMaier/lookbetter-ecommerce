import React from 'react'
import PaginaHome from '../paginas/Home'
import PaginaProducto from '../paginas/Producto'
import { Route } from 'react-router-dom'
import './main.css'
export default () => {
    return (
        <main className="main">
            <div className="content">
                <Route path="/producto/:id" component={PaginaProducto} />
                <Route path="/" exact={true} component={PaginaHome} />
            </div>
        </main>
    )
}