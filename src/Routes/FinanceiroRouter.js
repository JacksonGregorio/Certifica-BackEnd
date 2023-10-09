import  express  from "express";
import FinanceiroController from "../controllers/FinanceiroController.js";
import checkToken from "../middleware/autentificado.js";

const router = express.Router();
router.use(checkToken)

router
.get("/financeiro", FinanceiroController.listarfinanceiro)
.get("/financeiro/:id", FinanceiroController.listarFinanceiroId)
.post("/financeiro", FinanceiroController.cadastrafinanceiro)
.put("/financeiro/:id", FinanceiroController.atualizarFinanceiro)
.delete("/financeiro/:id", FinanceiroController.excluirFinanceiro)

export default router;