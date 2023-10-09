import mongoose from "mongoose";

const ColaboradorSchema = new mongoose.Schema({
    
    Usuario:{type:String, required:true},
    Senha:{type:String, required:true},
    Email_Colaborador:{type:String, required:true},
    id:{type:String}

});

ColaboradorSchema.set('toJSON', {
    transform: function (doc, ret) {
      delete ret.Senha;
    }
});

const colaborador = mongoose.model("Colaborador", ColaboradorSchema);


 

export default colaborador;