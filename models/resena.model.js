import mongoose from "mongoose";

const resenas=mongoose.Schema(
    {
        id_movie:String,
        userName:String,
        resena:String,
        calificacion:Number,
       
    }
);

const Resenas=mongoose.model('resenas',resenas);

export default Resenas;