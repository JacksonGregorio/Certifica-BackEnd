import  express  from "express";
import ColaboradorController from "../controllers/ColaboradorController.js";
import checkToken from "../middleware/autentificado.js";



const router = express.Router();
router.use(checkToken)

router
.get('/colaborador', ColaboradorController.listarColaborador)
.get('/colaborador/:id', ColaboradorController.listarColaboradorId)
.post('/auth/colaborador', ColaboradorController.cadastarColaborador)
.put('/colaborador/:id', ColaboradorController.atualizarColaborador)
.delete('/colaborador/:id', ColaboradorController.excluirColaborador)

export default router;
