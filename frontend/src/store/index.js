import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { listaProductosReducer } from './reducers/productosReducers'

const estadoInicial = {}
const reducer = combineReducers({
    listaDeProductos: listaProductosReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, estadoInicial, compose(applyMiddleware(thunk)))

export default store