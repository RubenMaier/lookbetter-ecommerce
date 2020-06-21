import express from 'express'
import datos from './datos'

const HOST_PORT = 5000
const HOST_LINK = "http://localhost:" + HOST_PORT

const app = express()

app.get("/api/productos", (req, res) => {
    res.send(datos.productos)
})

app.listen(HOST_PORT, () => {
    console.log("Servidor iniciado en: " + HOST_LINK)
})