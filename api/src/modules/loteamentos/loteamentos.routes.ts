import { Router } from 'express';
import { LoteamentoController } from './loteamentos.controller';

const LoteamentosRouter = Router();
const controller = new LoteamentoController();

LoteamentosRouter.get('/', (req, res) => controller.listarTodos(req, res));
LoteamentosRouter.get('/:id', (req, res) => controller.buscarPorId(req, res));

export default LoteamentosRouter;