import {
    LISTA_PRODUCTOS_REQUEST,
    LISTA_PRODUCTOS_SUCCESS,
    LISTA_PRODUCTOS_FAIL,
    DETALLES_PRODUCTO_REQUEST,
    DETALLES_PRODUCTO_SUCCESS,
    DETALLES_PRODUCTO_FAIL
} from '../constants/productosConstants'
import axios from 'axios'

axios.defaults.baseURL = window.location.protocol + "//" + window.location.hostname + ":5000";

const listaProductosActions = () => async (dispatch) => {
    try {
        dispatch({ type: LISTA_PRODUCTOS_REQUEST })
        const { data } = await axios.get("/api/productos")
        dispatch({ type: LISTA_PRODUCTOS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: LISTA_PRODUCTOS_FAIL, payload: error.message })
    }
}

const detallesProductoActions = (productoId) => async (dispatch) => {
    try {
        console.log(productoId)
        dispatch({ type: DETALLES_PRODUCTO_REQUEST, payload: productoId })
        const { data } = await axios.get("/api/producto/" + productoId)
        dispatch({ type: DETALLES_PRODUCTO_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: DETALLES_PRODUCTO_FAIL, payload: error.message })
    }
}

export { listaProductosActions, detallesProductoActions }