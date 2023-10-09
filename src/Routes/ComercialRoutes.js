import  express  from "express";
import ComercialController from "../controllers/ComercialController.js";
import checkToken from "../middleware/autentificado.js";

const router = express.Router();
router.use(checkToken)

router
.get("/comercial", ComercialController.listarComercial)
.get("/comercial/:id", ComercialController.listarComercialId)
.post("/comercial", ComercialController.cadastarComercial)
.put("/comercial/:id", ComercialController.atualizarComercial)
.delete("/comercial/:id", ComercialController.excluirComercial)

export default router;