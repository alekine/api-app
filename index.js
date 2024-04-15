import express from "express";
import cors from "cors";
import routes from "./routes/Datos.routes";
import mongoose from "mongoose";
const port = process.env.PORT || 4000;


// const app = express();

// // Conexión a la base de datos
// mongoose.Promise = global.Promise;
// const dbUrl = 'mongodb://localhost:27017/netflix';//url correcta
// mongoose.connect(dbUrl)
//   .then(() => console.log('Conectado a la base de datos en el puerto 27017'))
//   .catch(error => console.error('Error al conectar a la base de datos:', error));

// // Configuración de CORS


// app.use(cors());

// // Middleware para manejar JSON y URL-encoded
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Rutas
// app.use("/Movies", routes);

// // Iniciar el servidor
// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//   console.log(`Servidor escuchando en el puerto ${port}`);
// });






const app = express();

//conexion a base de datos
mongoose.Promise=global.Promise;
const dbUrl='mongodb+srv://blancacapa904:Pk5F1WulCKdLt47P@cluster0.vebeflb.mongodb.net/';

mongoose.connect(dbUrl)
.then(mongoose=>console.log('Conectado a la bd en el puerto 27017'));
//Listening de puertos
app.set('port', process.env.PORT || 4000);

app.use(cors());


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api",routes);
app.use(cors());

// app.listen(app.get('port'), () => {
//   console.log(`Example app listening on port:` + app.get('port'));
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



