import comercial from "../models/Comercial"

class ComercialController{

    static listarComercial = (req, res) => {

        comercial.find( (err, comercial) => {
        res.status(200).json( comercial ) })  

    }

    static listarComercialId = (req, res) =>{

        const id = req.params.id;
        comercial.findById(id, (err, comercial) =>{
            if(err){
                res.status(400).send({message : `${err.message} - id não localizado`})
            } else{
                res.status(200).send({comercial});
            }
        })
    }

    static cadastarComercial = (req, res) => {

        let user = new comercial(req.body);

        user.save((err) => {
            if(err){
                res.status(500).send({message : `${err.message} - falha ao salvar o Comercial`});
            }else{
                res.status(201).send(user.toJSON());
            }
        })

    }

    static atualizarComercial = (req, res) => {
        const id = req.params.id;

        comercial.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: "Atualizado com sucesso comercial"});
            }else{
                res.status(500).send({message: err.message});
            }
        })
    }

    static excluirComercial = (req, res) =>{
        const id = req.params.id;

        comercial.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: "Comercial excluido com sucesso"});
            }else{
                res.status(500).send({message: err.message});
            }
        })
    }



}

export default ComercialController;