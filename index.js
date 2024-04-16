import express from "express";
import cors from "cors";
import routes from "./routes/Datos.routes";
import mongoose from "mongoose";

const app = express();

// Conexion a la base de datos
mongoose.Promise = global.Promise;
const dbUrl = 'mongodb+srv://blancacapa904:Pk5F1WulCKdLt47P@cluster0.vebeflb.mongodb.net/texflix';

mongoose.connect(dbUrl)
  .then(() => console.log('Conectado a la base de datos'))
  .catch(error => console.error('Error al conectar a la base de datos:', error));

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use("/api", routes);

// Puerto
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
