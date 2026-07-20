import { Router } from "express";
import { ImoveisController } from "./imoveis.controller";

const ImoveisRouter = Router();

const imoveisController = new ImoveisController()

ImoveisRouter.get('/', (req, res) => imoveisController.listarImoveis(req, res))
ImoveisRouter.get('/:id', (req, res) => imoveisController.buscarImovelPorId(req, res))
ImoveisRouter.post('/', (req, res) => imoveisController.criarImovel(req, res))


export default ImoveisRouter;