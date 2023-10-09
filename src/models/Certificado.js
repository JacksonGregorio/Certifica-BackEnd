import mongoose from "mongoose";

const CertificadoSchema = new mongoose.Schema({

    empresa_Cnpj:{type: String, required:true},
    Nome:{type:String, required:true},
    Vencimento:{type:Date, required: true},
    Valor_Certificado:{type:Number, required:true},
    Desconto_Certificado:{type:Number},
    Tipo_Certificado:{type:String},


});

const certificados = mongoose.model("Certificados", CertificadoSchema);



export default certificados;