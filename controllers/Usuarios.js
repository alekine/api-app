
export default{
    obtenerUserLogued: async (req, res) =>{
        res.status(200).send({msg: "estamos en la obtencion de los datos del user logueado"})
    }
}