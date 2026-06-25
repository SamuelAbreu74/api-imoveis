const Imovel = require('../models/imoveisModel');
const { sendSuccess, sendError } = require('../utils/responseHelper');

module.exports = {

    // GET /imoveis
    async listarImoveis(req, res) {
        try {
            const { classificacao } = req.query;

            const onde = {};

            if (classificacao) {
                onde.classificacao = classificacao;
            }

            const imoveis = await Imovel.findAll({ where: onde });

            return sendSuccess(res, {
                statusCode: 200,
                message: 'Imoveis encontrados com sucesso!',
                data: imoveis
            });

        } catch (error) {
            return sendError(res, {
                statusCode: 500,
                message: 'Falha ao buscar imoveis.',
                error: error
            });
        }
    },

    // POST /imoveis
    async criarImovel(req, res) {
        try {
            const novoImovel = await Imovel.create(req.body);

            return sendSuccess(res, {
                statusCode: 201,
                message: 'Imóvel criado com sucesso!',
                data: novoImovel
            });

        } catch (error) {
            return sendError(res, {
                statusCode: 500,
                message: 'Falha ao criar o imóvel.',
                error: error
            });
        }
    },

    // PUT /imoveis/:id
    async editarImovel(req, res) {
        try {
            const { id } = req.params;
            const novosDados = req.body;

            const imovel = await Imovel.findByPk(id);
            if (!imovel) {
                return sendError(res, {
                    statusCode: 404,
                    message: 'Imóvel não encontrado para edição.'
                });
            }

            const imovelEditado = await imovel.update(novosDados);

            return sendSuccess(res, {
                statusCode: 200,
                message: 'Imóvel editado com sucesso!',
                data: imovelEditado
            });

        } catch (error) {
            return sendError(res, {
                statusCode: 500,
                message: 'Falha ao editar o imóvel.',
                error: error
            });
        }
    },

    // DELETE /imoveis/:id
    async deletarImovel(req, res) {
        try {
            const { id } = req.params;

            const imovel = await Imovel.findByPk(id);
            if (!imovel) {
                return sendError(res, {
                    statusCode: 404,
                    message: 'Imóvel não encontrado para exclusão.'
                });
            }

            await Imovel.destroy({
                where: { id: id }
            });

            return sendSuccess(res, {
                statusCode: 200,
                message: 'Imóvel deletado com sucesso!',
                data: { id }
            });

        } catch (error) {
            return sendError(res, {
                statusCode: 500,
                message: 'Falha ao deletar o imóvel.',
                error: error
            });
        }
    }
};

