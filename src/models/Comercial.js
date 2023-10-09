import mongoose from "mongoose";

const ComercialSchema = new mongoose.Schema(
    {
    Cnpj:{type: String, required:true},
    Email_Comercial:{type:String, required:true},
    Tel_Comercial:{type:Number, required:true},
    Ani_Comercial:{type:Date, required: true},
    Nome_Comercial:{type:String, required:true},
    id:{type:String}
}
);

const comercial = mongoose.model("Comercial", ComercialSchema);

export default comercial;