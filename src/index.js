import express from 'express'
import {dirname, join} from 'path'
import {fileURLToPath} from 'url'
//import indexRoutes from './routes/index.js'



const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')  //Es como un HTML con características extras
//app.use(indexRoutes)

app.use(express.static(join(__dirname, 'views')))   //Acá unimos la ruta absoluta hasta la carpeta 'src' con la carpeta 'public'

app.listen(3000)    //El nro del puerto
console.log('Server is listening on port', 3000)