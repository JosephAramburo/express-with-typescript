import express  = require('express');
const router = express.Router();
import { EmpresaController } from '../controllers/empresa.controller';


const controller : EmpresaController = new EmpresaController();
router.post('', controller.save);

module.exports = router;

// export const register = (app : express.Application) => {
//     const controller : EmpresaController = new EmpresaController();

//     app.post('/empresa', controller.save);
// };