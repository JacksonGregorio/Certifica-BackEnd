import mongoose from "mongoose";

const FinanceiroSchema = new mongoose.Schema(
    {
    Cnpj:{type: String, required:true},
    Email_Financeiro:{type:String, required:true},
    Tel_Financeiro:{type:Number, required:true},
    Ani_Financeiro:{type:Date, required: true},
    Nome_Financeiro:{type:String, required:true},
    id:{type:String}
}
);

const financeiro = mongoose.model("Financeiro", FinanceiroSchema);

export default financeiro;