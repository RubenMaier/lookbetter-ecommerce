import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { listaProductosReducer, detallesProductoReducer } from './reducers/productosReducers'

const estadoInicial = {}
const reducer = combineReducers({
    listaDeProductosStore: listaProductosReducer,
    detallesDeProductoStore: detallesProductoReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, estadoInicial, composeEnhancer(applyMiddleware(thunk)))

export default store