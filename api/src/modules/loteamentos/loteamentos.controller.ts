import { Request, Response } from 'express';
import { LoteamentoService } from './loteamentos.service';

export class LoteamentoController {
  private service = new LoteamentoService();

  async listarTodos(req: Request, res: Response): Promise<Response> {
    try {
      const lista = await this.service.listarTodos();
      return res.status(200).json(lista);
    } catch (error) {
      console.error('Erro ao listar loteamentos:', error);
      return res.status(500).json({ error: 'Erro interno no servidor.' });
    }
  }

  async buscarPorId(req: Request, res: Response): Promise<Response> {
    try {
      const id = (req.params.id, 8);
      if (isNaN(id) || id <= 0) {
        return res.status(400).json({ error: 'ID inválido.' });
      }
      const loteamento = await this.service.buscarPorId(id);
      return res.status(200).json(loteamento);
    } catch (error: any) {
      if (error.message === 'Loteamento não encontrado') {
        return res.status(404).json({ error: error.message });
      }
      console.error('Erro ao buscar loteamento:', error);
      return res.status(500).json({ error: 'Erro interno no servidor.' });
    }
  }
}