import certificados from "../models/Certificado.js"

class CertificadoController{

    static listarCertificado = (req, res) => {

        certificados.find( (err, certificados) => {
        res.status(200).json( certificados ) })  

    }

    static listarCertificadoId = (req, res) =>{

        const id = req.params.id;
        certificados.findById(id, (err, certificados) =>{
            if(err){
                res.status(400).send({message : `${err.message} - id não localizado`})
            } else{
                res.status(200).send({certificados});
            }
        })
    }

    static cadastarCertificado = (req, res) => {

        let user = new certificados(req.body);

        user.save((err) => {
            if(err){
                res.status(500).send({message : `${err.message} - falha ao salvar o Certificado`});
            }else{
                res.status(201).send(user.toJSON());
            }
        })

    }

    static atualizarCertificado = (req, res) => {
        const id = req.params.id;

        certificados.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: "Atualizado com sucesso"});
            }else{
                res.status(500).send({message: err.message});
            }
        })
    }

    static excluirCertificado = (req, res) =>{
        const id = req.params.id;

        certificados.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: "Certificado excluido com sucesso"});
            }else{
                res.status(500).send({message: err.message});
            }
        })
    }



}

export default CertificadoController;