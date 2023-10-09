import colaborador from "../models/Colaborador.js";
import bcrypt from "bcryptjs";


class ColaboradorController{




    static listarColaborador = (req, res) => {

        colaborador.find( (err, colaborador) => {
        res.status(200).json( colaborador ) })  

    }

    static async listarColaboradorId(req, res) {

        const id = req.params.id;

        const usuarioColaborador = await colaborador.findById(id) 

            if(!usuarioColaborador){
            res.status(400).send({message : 'id não localizado'})
        } 

            res.status(200).json({usuarioColaborador});
        
        
    }

     static async cadastarColaborador (req, res) {

        const { Senha ,Email_Colaborador, Usuario, ComfirmaSenha } = req.body;

        if(!Usuario || !Senha || !Email_Colaborador || !ComfirmaSenha){
            return res.status(422).json({message: "Todos os campos são obrigatorios Obrigatorio"})
        }

        if(ComfirmaSenha !== Senha){
            return res.status(422).json({message: "Senhas devem ser iguais"})
        }

        function validarEmail(Email_Colaborador) {
            var re = /\S+@\S+.\S+/;
            return re.test(Email_Colaborador);
        }

        if(!validarEmail(Email_Colaborador)){
            return res.status(422).json({message: "Email invalido"})
        }



        const emailExist = await colaborador.findOne({Email_Colaborador})

        if(emailExist){
            return res.status(422).json({message: "Email já em uso tente outro"})
        }

        const salt = await bcrypt.genSalt(12)
        const senhahash = await bcrypt.hash(Senha, salt)

        const Colaborador = new colaborador({
            Usuario,
            Senha : senhahash,
            Email_Colaborador
        })

        try{

            await Colaborador.save()
            res.status(201).send(Colaborador.toJSON());

        }catch{
            console.log(error)
            res.status(500).json({message: error.message})
        }



    }

    static atualizarColaborador = (req, res) => {
        const id = req.params.id;

        colaborador.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: "Atualizado com sucesso"});
            }else{
                res.status(500).send({message: err.message});
            }
        })
    }

    static excluirColaborador = (req, res) =>{
        const id = req.params.id;

        colaborador.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: "Colaborador excluido com sucesso"});
            }else{
                res.status(500).send({message: err.message});
            }
        })
    }


}




export default ColaboradorController;




