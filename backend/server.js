import express from 'express'
import datos from './datos'
import cors from 'cors'

const HOST_PORT = 5000
const HOST_LINK = "http://localhost:" + HOST_PORT

const app = express()

app.use(cors())

app.get("/api/productos", (req, res) => {
    res.send(datos.productos)
})

app.get("/api/producto/:id", (req, res) => {
    const productoId = req.params.id
    const producto = datos.productos.find(x => x._id === productoId)
    if (producto) {
        res.send(producto)
    } else {
        res.status(400).send({ msg: "Producto no encontrado." })
    }
})

app.listen(HOST_PORT, () => {
    console.log("Servidor iniciado en: " + HOST_LINK)
})