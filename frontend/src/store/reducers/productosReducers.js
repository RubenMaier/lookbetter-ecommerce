import {
    LISTA_PRODUCTOS_REQUEST,
    LISTA_PRODUCTOS_SUCCESS,
    LISTA_PRODUCTOS_FAIL,
    DETALLES_PRODUCTO_REQUEST,
    DETALLES_PRODUCTO_SUCCESS,
    DETALLES_PRODUCTO_FAIL
} from "../constants/productosConstants"

const ESTADO_INICIAL_LISTAPRODUCTOS = {
    productos: [] // comienza como un arreglo vacío
}

function listaProductosReducer(state = ESTADO_INICIAL_LISTAPRODUCTOS, action) {
    switch (action.type) {
        case LISTA_PRODUCTOS_REQUEST:
            return { loading: true }
        case LISTA_PRODUCTOS_SUCCESS:
            return { loading: false, productos: action.payload }
        case LISTA_PRODUCTOS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

const ESTADO_INICIAL_DETALLESPRODUCTO = {
    producto: {}
}

function detallesProductoReducer(state = ESTADO_INICIAL_DETALLESPRODUCTO, action) {
    switch (action.type) {
        case DETALLES_PRODUCTO_REQUEST:
            return { loading: true }
        case DETALLES_PRODUCTO_SUCCESS:
            return { loading: false, producto: action.payload }
        case DETALLES_PRODUCTO_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export { listaProductosReducer, detallesProductoReducer }