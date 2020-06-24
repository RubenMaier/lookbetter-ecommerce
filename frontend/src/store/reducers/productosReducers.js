import { LISTA_PRODUCTOS_REQUEST, LISTA_PRODUCTOS_SUCCESS, LISTA_PRODUCTOS_FAIL } from "../constants/productosConstants"

const ESTADO_INICIAL = {
    productos: [] // comienza como un arreglo vacío
}

function listaProductosReducer(state = ESTADO_INICIAL, action) {
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

export { listaProductosReducer }