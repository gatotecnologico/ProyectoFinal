import express from 'express'
import  cors from 'cors'
//Creamos la aplicacion a traves del paquete express
const app = express()
//Todo lo que regresa al usuario es de tipo JSON
app.use(express.json())
app.use(cors())
//Rutas para el acceso personal
import personalRutas from './routes/personalRutas';
import clientesRutas from './routes/clientesRutas';
import articulosRutas from './routes/articulosRutas';
import ventasRutas from './routes/ventasRutas';
import comprasRutas from './routes/comprasRutas'
import registroRutas from './routes/registroRutas'

//Puerto para escuchar la peticion del frontend
const PUERTO = 3001
//Activar la ruta base
app.use('/api/personal', personalRutas)
app.use('/api/clientes', clientesRutas)
app.use('/api/articulos', articulosRutas)
app.use('/api/ventas', ventasRutas)
app.use('/api/compras', comprasRutas)
app.use('/api/registro', registroRutas)

//Ruta
// app.get('/hola', (_req, res) => {
//     let fecha = new Date().toLocaleDateString()
//     res.send('mundo con la fecha '+fecha+" con TypeScript")
// })

//Encendemos el servidor y lo ponemos en escucha
app.listen(PUERTO,() => {
    console.log(`Servidor en ejecucion y escuchando en el puerto ${PUERTO}`)
})
