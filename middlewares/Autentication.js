import jwt from "../utils/jwt.js"


export default{
    asureAuth: async (req, res, next) =>{
       if(!req.headers.authorization){
        return res.status(403).send({
            msg: "la cabecera no tiene la peticion"
        })
       }

    const token = req.headers.authorization.replace("Bearer ","")
        try{
            const payLoad = jwt.decoded(token);
            
            const {exp} = payload;
            const currentData = new Date().getTime();

            if(exp<=currentData){
                return res.status(400).send({ msg: "el token ha expirado"})
            }

        req.usuario=payload;

        }catch(error){
            return res.status(400).send({
                msg: "token no encontrado o no valido"
            })
        }
    }

}