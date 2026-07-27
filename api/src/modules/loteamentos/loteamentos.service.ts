import Loteamento from "./loteamentos.model";
import Imovel from "../imoveis/imoveis.model";
import { LoteamentoDTO } from "./loteamentos.dto";

export class LoteamentoService {
    async listarTodos(): Promise<LoteamentoDTO[]> {
        const loteamentos = await Loteamento.findAll({
            order: [['nome_loteamento', 'ASC']]
        });

        return loteamentos.map((l) => ({
            ...l.toJSON(),
            created_at: l.createdAt ? l.createdAt.toISOString() : null,
        })) as LoteamentoDTO[];
    }

    async buscarPorId(id: number): Promise<LoteamentoDTO | null> {
        const loteamento = await Loteamento.findByPk(id, {
            include: [
                {
                    model: Imovel,
                    as: 'imoveis',
                    attributes: { exclude: ['updated_at', 'created_at'] },
                }
            ],
            attributes: { exclude: ['updated_at'] }
        });

        if (!loteamento) {
            throw new Error('Loteamento não encontrado');
        }

        const plain = loteamento.get({ plain: true }) as any;

        return {
            ...plain,
            created_at: plain.createdAt ? plain.createdAt.toISOString() : null,
            imoveis: plain.imoveis?.map((imovel: any) => ({
                ...imovel,
                created_at: imovel.createdAt ? imovel.createdAt.toISOString() : null,
            })),
        } as LoteamentoDTO;
    }


}