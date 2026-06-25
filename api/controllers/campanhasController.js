const Campanha = require("../models/campanhasModel");
const { sendSuccess, sendError } = require("../utils/responseHelper");

module.exports = {

    // GET /campanhas
    async listarCampanhas(req, res) {
        try {
            const campanhas = await Campanha.findAll();

            return sendSuccess(res, {
                statusCode: 200,
                message: 'Campanhas carregadas com sucesso!',
                data: campanhas
            });

        } catch (error) {
            return sendError(res, {
                statusCode: 500,
                message: 'Falha ao buscar a lista de campanhas.',
                error: error
            });
        }
    },

    // POST /campanhas
    async criarCampanha(req, res) {
        try {
            const novaCampanha = await Campanha.create(req.body);

            return sendSuccess(res, {
                statusCode: 201,
                message: 'Campanha criada com sucesso!',
                data: novaCampanha
            });

        } catch (error) {
            return sendError(res, {
                statusCode: 500,
                message: 'Falha ao criar a campanha.',
                error: error
            });
        }
    },

    // PUT /campanhas/:id
    async editarCampanha(req, res) {
        try {
            const { id } = req.params;
            const novosDados = req.body;

            const campanha = await Campanha.findByPk(id);
            if (!campanha) {
                return sendError(res, {
                    statusCode: 404,
                    message: 'Campanha não encontrada para edição.'
                });
            }

            const campanhaEditada = await campanha.update(novosDados);

            return sendSuccess(res, {
                statusCode: 200,
                message: 'Campanha editada com sucesso!',
                data: campanhaEditada
            });

        } catch (error) {
            return sendError(res, {
                statusCode: 500,
                message: 'Falha ao editar a campanha.',
                error: error
            });
        }
    },

    // DELETE /campanhas/:id
    async deletarCampanha(req, res) {
        try {
            const { id } = req.params;

            const campanha = await Campanha.findByPk(id);
            if (!campanha) {
                return sendError(res, {
                    statusCode: 404,
                    message: 'Campanha não encontrada para exclusão.'
                });
            }

            await Campanha.destroy({
                where: { id: id }
            });

            return sendSuccess(res, {
                statusCode: 200,
                message: 'Campanha deletada com sucesso!',
                data: { id }
            });

        } catch (error) {
            return sendError(res, {
                statusCode: 500,
                message: 'Falha ao deletar a campanha.',
                error: error
            });
        }
    }
};