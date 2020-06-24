import { LISTA_PRODUCTOS_REQUEST, LISTA_PRODUCTOS_SUCCESS, LISTA_PRODUCTOS_FAIL } from '../constants/productosConstants'
import axios from 'axios'

const listaProductosActions = () => async (dispatch) => {
    try {
        dispatch({ type: LISTA_PRODUCTOS_REQUEST })
        axios.defaults.baseURL = window.location.protocol + "//" + window.location.hostname + ":5000";
        const { data } = await axios.get("/api/productos")
        dispatch({ type: LISTA_PRODUCTOS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: LISTA_PRODUCTOS_FAIL, payload: error.message })
    }
}

export { listaProductosActions }