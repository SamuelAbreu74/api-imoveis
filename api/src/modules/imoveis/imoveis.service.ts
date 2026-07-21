import { Json } from "sequelize/lib/utils";
import { CreateImovelDTO, ImovelDTO } from "./imoveis.dto";
import Imovel from "./imoveis.model";
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
            const {createdAt, updatedAt, ...data}  = imovel.toJSON();

            return{
                ...data,
                // Converte o createdAt para string
                created_at: createdAt ? createdAt.toISOString(): null,
            } as unknown as ImovelDTO;
        });
    }

    // BUSCA POR ID
    async buscarPorId(id: number): Promise<ImovelDTO> {
        const imovel = await Imovel.findByPk(id)

        if(!imovel){
            throw new Error("Imovel nao encontrado.")
        }

        const {createdAt, updatedAt, ...data}  = imovel.toJSON();

        return {
            ...data,
            created_at: createdAt ? createdAt.toISOString() : null,
        } as unknown as ImovelDTO;
    }

    // CRIAR IMOVEL
    async criarImovel(data: CreateImovelDTO): Promise<ImovelDTO> {
        const imovelCriado = await Imovel.create(data as any)

        if(!imovelCriado){
            throw new Error("Erro ao criar um novo imovel");
        }

        const {createdAt, updatedAt, ...dataFormatted}  = imovelCriado.toJSON();

        
        return {
            ...dataFormatted,
            created_at: createdAt ? createdAt.toISOString() : null,
        } as unknown as ImovelDTO;
    }
}