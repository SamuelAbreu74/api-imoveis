import { Request, Response } from 'express'
import { ImovelDTO } from './imoveis.dto'
import { ImoveisService } from './imoveis.service'

export class ImoveisController {

    private imoveisService = new ImoveisService();

    // LISTAR IMOVEIS
    async listarImoveis(req: Request, res: Response): Promise<Response> {
        try {
            // Deve chamar o service
            // O service devolve um array de ImovelDTO[]
            const listaDeImoveis = await this.imoveisService.listarTodos()

            return res.status(200).json(listaDeImoveis)
        } catch (error) {
            return res.status(500).json({ error: 'Erro interno no servidor.' })
        }
    }

    // BUSCAR POR ID
    async buscarImovelPorId(req: Request, res: Response): Promise<Response> {
        try {

            // 1. Pega o ID fornecido nos params
            const id = req.params.id as string;
            const imovelId = parseInt(id, 10);

            if (isNaN(imovelId) || imovelId <= 0) {
                return res.status(400).json({
                    error: 'Requisição inválida. O ID do imóvel deve ser um número inteiro positivo.'
                });
            }

            // 2. Chama a funçao dentro do service que busca o imovel com base no ID
            const imovel = await this.imoveisService.buscarPorId(imovelId)


            // 3. Service envia o retorno da funçao
            return res.status(200).json(imovel);
        } catch (error: any) {

            if (error.message === "Imovel nao encontrado.") {
                return res.status(404).json({ error: error.message })
            }
            console.error('[ImoveisController - buscarImovelPorId]:', error);
            return res.status(500).json({ error: 'Erro interno no servidor.' })
        }
    }

    // CRIAR IMOVEL
    async criarImovel(req: Request, res: Response): Promise<Response> {
        try {
            // 1. Pegar dados do novo imovel pela request
            const data = req.body

            // 2. Verificar se todos os dados necessarios estao presentes
            if (
                data.id_campanha === undefined ||
                data.status === undefined ||
                data.valor_venda === undefined
            ) {
                return res.status(400).json({
                    error: 'Requisição inválida. Não foram fornecidos todos os dados necessários para realizar essa ação.'
                });
            }

            // 3. chamar funçao do service passando esse dados
            const novoImovel = await this.imoveisService.criarImovel(data)

            // 4. Retornar que a açao funcionou
            return res.status(201).json({ message: "Imovel criado com sucesso." })


        } catch (error: any) {
            if (error.message === "Erro ao criar um novo imovel") {
                return res.status(422).json({ error: error.message })
            }
            console.error("Erro interno: ", error)
            return res.status(500).json({ error: 'Erro interno no servidor.' })
        }
    }

}