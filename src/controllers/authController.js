
import colaborador from "../models/Colaborador.js";
import bcrypt from "bcryptjs";
import  Jwt   from "jsonwebtoken";
import jsonSecret from "../config/jsonSecret.js";

class AuthController{

    static async login(req,res){

        const {Email_Colaborador, Senha} = req.body

        if(!Senha || !Email_Colaborador){
            return res.status(422).json({message: "Todos os campos são obrigatorios Obrigatorio"})
        }

        const Cadastrado = await colaborador.findOne({Email_Colaborador:Email_Colaborador})

        if(!Cadastrado){
            return res.status(404).json({message: "Email utilizado não encontrado"})
        }

        const checkSenha = await bcrypt.compare(Senha, Cadastrado.Senha)

        if(!checkSenha){

            return res.status(404).json({message: "Senha utililzada esta incorreta"})
        }

        try {

            const secret = jsonSecret.secret

            const token = Jwt.sign({
                id: Cadastrado.id,

            },
            secret,
            {
                expiresIn:86400
            })

            const {id, Email_Colaborador} = await decode(token)
            req.usuarioid = id
            req.usuarioEmail = Email_Colaborador


            res.status(200).json({message:'Autentificação feita com sucesso', token})

            
        } catch (error) {
            console.log(error)
            res.status(500).json({message: error.message})
        }
        


        //"Email_Colaborador":"teste5@hotmail.com",
        //"Senha":"teste123"


    }

}

export default  AuthController