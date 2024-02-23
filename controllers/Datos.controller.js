import Datos from "../models";

export default {

    postDatos:(req,res,next)=>{
      try {

        res.status(200).send({
            message:"Server de datos"
        })
        
      } catch (error) {
        res.status(500).send({
            message:"Error al enviar"
        })
        next(error);
      }
    },
    getDatos:(req,res,next)=>{},
    putDatos:(req,res,next)=>{},
    delDatos:(req,res,next)=>{}
}