import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.set('port', process.env.PORT || 10000);

//conexion a base de datos
mongoose.Promise=global.Promise;
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Conectado aL MongoDB Atlas'))
.catch((error) => console.log(error))
//Listening de puertos


app.use(cors());


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api",routes);


app.listen(app.get('port'), () => {
  console.log(`Example app listening on port:` + app.get('port'));
})