import mongoose from "mongoose";

const ResponsavelSchema = new mongoose.Schema(
    {
    Cnpj:{type: String, required:true},
    Email_Responsavel:{type:String, required:true},
    Tel_Responsavel:{type:Number, required:true},
    Ani_Responsavel:{type:Date, required: true},
    Nome_Responsavel:{type:String, required:true},
    id:{type:String}
}
);

const responsavel = mongoose.model("Responsavel", ResponsavelSchema);

export default responsavel;