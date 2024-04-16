import express from "express";
import cors from "cors";
import routes from "./routes/Datos.routes";
import mongoose from "mongoose";


const port = process.env.PORT || 4000;



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

app.listen(port,'0.0.0.0', () => {
  console.log(`Example app listening on port ${port}`)
})



