import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../constantes.js";

export default{


    
createAccessToken: function (usuario) {
    const expToken=new Date();
    expToken.setHours(expToken.getHours()+3);

    const payload ={
        token_type:"access",
        usuario_id:usuario._id,
        iat:Date.now(),
        exp:expToken.getTime()
    }

    return jwt.sign(payload,JWT_SECRET_KEY)


},

createRefreshToken: function (usuario) {
    const expToken = new Date();

    expToken.setMonth(expToken.getMonth()+1);

    const payload ={
        token_type:"refresh",
        usuario_id: usuario._id,
        iat: expToken.getTime()
    }
    return jwt.sign(payload,JWT_SECRET_KEY);
},

decoded: function(token) {
    return jwt.decode(token, JWT_SECRET_KEY, true);


}

}


