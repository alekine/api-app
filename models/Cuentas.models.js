import mongoose from "mongoose";

const cuentas=mongoose.Schema(
    {
        nameFull:String,
        userName:String,
        password:String,
       
    }
);

const Datos=mongoose.model('cuentas',cuentas);

export default Cuentas;