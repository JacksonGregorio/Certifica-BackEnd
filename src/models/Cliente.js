import mongoose from "mongoose";

const EmpresaSchema = new mongoose.Schema(
    {
    id :{type: String,  unique:true},
    _Cnpj:{type:String, required:true},
    Senha:{type:String, required:true},
    Usuario:{type:String, required:true},
    Nome_Cliente:{type:String, required:true},
    Razão_Social:{type:String, required:true},
    Tel_Empresa:{type:String, required:true},
    Certificados:[{
        type: mongoose.Schema.Types.ObjectId , ref:'Certifiado'
    }]
});

EmpresaSchema.set('toJSON', {
    transform: function (doc, ret) {
      delete ret.Senha;
    }
});


const empresa = mongoose.model("Empresa", EmpresaSchema);

export default empresa;