import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../constantes.js";

export default{


    
createAccessToken (usuario){
    const expToken=new Date();
    expToken.setHours(expToken.getHours()+3);

    const payLoad ={
        token_type:"access",
        usuario_id:usuario._id,
        iat:Date.now(),
        exp:expToken.getTime()
    }

    return jwt.sign(payLoad,JWT_SECRET_KEY)


}

}


