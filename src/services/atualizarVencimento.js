import certificados from "../models/Certificado.js"


    const AtualizarVencimentos = async () => {
        try{
          
          const documentos = await certificados.find({ Vencimento: { $exists: true } });
      
          for (const documento of documentos) {
            
            const dataAtual = documento.vencimento;
      
            const novaData = new Date(dataAtual);
            novaData.setDate(novaData.getDate() - 1);
      
            documento.vencimento = novaData;
            await documento.save();

            console.log('Atualização concluída!');
        }

        }catch(error){
          console.error('Erro ao atualizar os vencimentos:', error);
        } 

    }

export default AtualizarVencimentos;

