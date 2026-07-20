import { ImovelDTO } from "./imoveis.dto";
import Imovel from "./imoveis.model";

export class ImoveisService {

    // LISTAR IMOVEIS
    async listarTodos(): Promise<ImovelDTO[]> {
        const imoveis = await Imovel.findAll()

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
}