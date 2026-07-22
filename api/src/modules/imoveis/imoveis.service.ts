import { CreateImovelDTO, ImovelDTO } from "./imoveis.dto";
import Imovel from "./imoveis.model";
import { ImovelFoto } from "./imoveis-fotos.model";
import { WhereOptions } from 'sequelize';


export class ImoveisService {

    // LISTAR IMOVEIS
    async listarTodos(classificacaoFiltro?: string): Promise<ImovelDTO[]> {

        const whereClause: WhereOptions = {};

        if (classificacaoFiltro) {
            whereClause.classificacao = classificacaoFiltro;
        }

        const imoveis = await Imovel.findAll({
            where: whereClause,
            attributes: { exclude: ['updated_at'] }
        });

        return imoveis.map((imovel) => {
            const { createdAt, updatedAt, ...data } = imovel.toJSON();

            return {
                ...data,
                // Converte o createdAt para string
                created_at: createdAt ? createdAt.toISOString() : null,
            } as unknown as ImovelDTO;
        });
    }

    // BUSCA POR ID
    async buscarPorId(id: number): Promise<ImovelDTO | null> {
        const imovel = await Imovel.findByPk(id, {
            include: [
                {
                    model: ImovelFoto,
                    as: 'fotos',
                    attributes: ['id', 'url_foto', 'destaque', 'ordem']
                }
            ],
            order:[
                [{model: ImovelFoto, as: 'fotos'}, 'destaque', 'DESC'],
                [{model: ImovelFoto, as: 'fotos'}, 'ordem', 'ASC'],
            ],
            attributes:{exclude: ['updated_at']}
        })

        if (!imovel) {
            throw new Error("Imovel nao encontrado.")
        }

        const { createdAt, updatedAt, ...data } = imovel.toJSON();

        return {
            ...data,
            created_at: createdAt ? createdAt.toISOString() : null,
        } as unknown as ImovelDTO;
    }

    // CRIAR IMOVEL
    async criarImovel(data: CreateImovelDTO): Promise<ImovelDTO> {
        const imovelCriado = await Imovel.create(data as any)

        if (!imovelCriado) {
            throw new Error("Erro ao criar um novo imovel");
        }

        const { createdAt, updatedAt, ...dataFormatted } = imovelCriado.toJSON();


        return {
            ...dataFormatted,
            created_at: createdAt ? createdAt.toISOString() : null,
        } as unknown as ImovelDTO;
    }
}