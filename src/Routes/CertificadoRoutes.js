import  express  from "express";
import CertificadoController from "../controllers/CertificadoController.js";
import checkToken from "../middleware/autentificado.js";

const router = express.Router();
router.use(checkToken)

router
.get("/certificado", CertificadoController.listarCertificado)
.get("/certificado/:id", CertificadoController.listarCertificadoId)
.post("/certificado", CertificadoController.cadastarCertificado)
.put("/certificado/:id", CertificadoController.atualizarCertificado)
.delete("/certificado/:id", CertificadoController.excluirCertificado)

export default router;