import  express  from "express";
import ResponsavelController from "../controllers/ResponsavelController.js";
import checkToken from "../middleware/autentificado.js";

const router = express.Router();
router.use(checkToken)

router
.get("/responsavel", ResponsavelController.listarResponsavel)
.get("/responsavel/:id", ResponsavelController.listarresponsavelId)
.post("/responsavel", ResponsavelController.cadastarResponsavel)
.put("/responsavel/:id", ResponsavelController.atualizarResponsavel)
.delete("/responsavel/:id", ResponsavelController.excluirResponsavel)

export default router;