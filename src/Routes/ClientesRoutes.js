import  express  from "express";
import ClienteController from "../controllers/ClienteController.js";
import checkToken from "../middleware/autentificado.js";

const router = express.Router();
router.use(checkToken)

router
.get("/cliente", ClienteController.listarCliente)
.get("/cliente/busca", ClienteController.listarClienteCertificado)
.get("/cliente/:id", ClienteController.listarClienteId)
.post("/cliente", ClienteController.cadastarCliente)
.put("/cliente/:id", ClienteController.atualizarCliente)
.delete("/cliente/:id", ClienteController.excluirCliente)


export default router;