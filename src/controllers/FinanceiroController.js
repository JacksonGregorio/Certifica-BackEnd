import financeiro from "../models/Financeiro";

class FinanceiroController{

    static listarfinanceiro = (req, res) => {

        financeiro.find( (err, financeiro) => {
        res.status(200).json( financeiro ) })  

    }

    static listarFinanceiroId = (req, res) =>{

        const id = req.params.id;
        financeiro.findById(id, (err, financeiro) =>{
            if(err){
                res.status(400).send({message : `${err.message} - id não localizado`})
            } else{
                res.status(200).send({financeiro});
            }
        })
    }

    static cadastrafinanceiro = (req, res) => {

        let user = new financeiro(req.body);

        user.save((err) => {
            if(err){
                res.status(500).send({message : `${err.message} - falha ao salvar o financeiro`});
            }else{
                res.status(201).send(user.toJSON());
            }
        })

    }

    static atualizarFinanceiro = (req, res) => {
        const id = req.params.id;

        financeiro.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: "Atualizado com sucesso financeiro"});
            }else{
                res.status(500).send({message: err.message});
            }
        })
    }

    static excluirFinanceiro = (req, res) =>{
        const id = req.params.id;

        financeiro.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: "financeiro excluido com sucesso"});
            }else{
                res.status(500).send({message: err.message});
            }
        })
    }



}

export default FinanceiroController;