import mongoose from "mongoose";

const datos=mongoose.Schema(
    {
        titulo:String,
        sinopsis:String,
        imagen:String,
        categoria:String,
       
    }
);

const Datos=mongoose.model('Movies',datos);
export default Datos;