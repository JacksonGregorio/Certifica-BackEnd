import  express  from "express";
import  cliente from "./ClientesRoutes.js"
import certificados from "./CertificadoRoutes.js";
import colaborador from "./ColaboradorRoutes.js";
import auth from "./authRouters.js"


const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo:"node"})
    })

    app.use(
        express.json(),
        auth,
        cliente,
        certificados,
        colaborador
    )
}

export default routes;