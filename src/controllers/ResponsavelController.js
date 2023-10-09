import responsavel from "../models/Responsavel";

class ResponsavelController{

    static listarResponsavel = (req, res) => {

        responsavel.find( (err, responsavel) => {
        res.status(200).json( responsavel ) })  

    }

    static listarresponsavelId = (req, res) =>{

        const id = req.params.id;
        responsavel.findById(id, (err, responsavel) =>{
            if(err){
                res.status(400).send({message : `${err.message} - id não localizado`})
            } else{
                res.status(200).send({responsavel});
            }
        })
    }

    static cadastarResponsavel = (req, res) => {

        let user = new responsavel(req.body);

        user.save((err) => {
            if(err){
                res.status(500).send({message : `${err.message} - falha ao salvar o responsavel`});
            }else{
                res.status(201).send(user.toJSON());
            }
        })

    }

    static atualizarResponsavel = (req, res) => {
        const id = req.params.id;

        responsavel.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: "Atualizado com sucesso responsavel"});
            }else{
                res.status(500).send({message: err.message});
            }
        })
    }

    static excluirResponsavel = (req, res) =>{
        const id = req.params.id;

        responsavel.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: "responsavel excluido com sucesso"});
            }else{
                res.status(500).send({message: err.message});
            }
        })
    }

}

export default ResponsavelController;