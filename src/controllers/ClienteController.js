import usuario from "../models/Cliente.js"

class ClienteController{

    static listarCliente = (req, res) => {

        usuario.find().populate('Certificados').exec((err, usuario) => {
        res.status(200).json(usuario) 
       })  

    }

    static listarClienteId = (req, res) =>{

        const id = req.params.id;
        
        usuario.findById(id).populate('Certificados', 'nome').exec((err, usuario) =>{
            if(err){
                res.status(400).send({message : `${err.message} - id não localizado`})
            } else{
                res.status(200).send({usuario});
            }
        })
    }

    static cadastarCliente = (req, res) => {

        let user = new usuario(req.body);

        user.save((err) => {
            if(err){
                res.status(500).send({message : `${err.message} - falha ao salvar o cliente`});
            }else{
                res.status(201).send(user.toJSON());
            }
        })

    }

    static atualizarCliente = (req, res) => {
        const id = req.params.id;

        usuario.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: "Atualizado com sucesso"});
            }else{
                res.status(500).send({message: err.message});
            }
        })
    }

    static excluirCliente = (req, res) =>{
        const id = req.params.id;

        usuario.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: "Cliente excluido com sucesso"});
            }else{
                res.status(500).send({message: err.message});
            }
        })
    }

    static listarClienteCertificado = (req, res) =>{

        const Nome = req.query.Nome

        usuario.find({'Nome':Nome }, {}, (err, usuario)=> {
            if(!err){
            res.status(200).send(usuario)
            }
            else{
                res.status(500).send({message: err.message});
            }
        })
        
    }



}

export default ClienteController;