import User from "../models/index.js"

export default{
    obtenerUserLogued: async (req, res) =>{
        const {usuario_id} = req.usuario;

        const response = await User.findById(usuario_id);

        if(!response){
            res.status(400).send({
                msg: "No existe el usuario"
            })
        }else{
            res.status(200).send({response});
        }
    }
}

