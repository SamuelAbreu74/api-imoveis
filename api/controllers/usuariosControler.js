const Usuario = require('../models/usuariosModel');
const { sendSuccess, sendError } = require('../utils/responseHelper');

module.exports = {

    // GET /usuarios
    async listarUsuarios(req, res) {
        try {
            const usuarios = await Usuario.findAll();

            return sendSuccess(res, {
                statusCode: 200,
                message: 'Usuários carregados com sucesso!',
                data: usuarios
            });

        } catch (error) {
            return sendError(res, {
                statusCode: 500,
                message: 'Falha ao buscar a lista de usuários.',
                error: error
            });
        }
    },

    // POST /usuarios
    async criarUsuario(req, res) {
        try {
            const novoUsuario = req.body;

            if (!novoUsuario || Object.keys(novoUsuario).length === 0) {
                return sendError(res, {
                    statusCode: 400,
                    message: 'Dados não informados ou incorretos!'
                });
            }

            const usuarioCriado = await Usuario.create(novoUsuario);

            return sendSuccess(res, {
                statusCode: 201,
                message: 'Usuário criado com sucesso!',
                data: usuarioCriado
            });

        } catch (error) {
            return sendError(res, {
                statusCode: 500,
                message: 'Falha ao criar o novo usuário.',
                error: error
            });
        }
    },

    // PUT /usuarios/:id
    async editarUsuario(req, res) {
        try {
            const { id } = req.params;
            const novosDados = req.body;

            const usuario = await Usuario.findByPk(id);
            if (!usuario) {
                return sendError(res, {
                    statusCode: 404,
                    message: 'Usuário não encontrado para edição.'
                });
            }

            const usuarioEditado = await usuario.update(novosDados);

            return sendSuccess(res, {
                statusCode: 200,
                message: 'Usuário editado com sucesso!',
                data: usuarioEditado
            });

        } catch (error) {
            return sendError(res, {
                statusCode: 500,
                message: 'Falha ao editar o usuário.',
                error: error
            });
        }
    },

    // DELETE /usuarios/:id
    async deletarUsuario(req, res) {
        try {
            const { id } = req.params;

            const usuario = await Usuario.findByPk(id);
            if (!usuario) {
                return sendError(res, {
                    statusCode: 404,
                    message: 'Usuário não encontrado para exclusão.'
                });
            }

            await Usuario.destroy({
                where: { id: id }
            });

            return sendSuccess(res, {
                statusCode: 200,
                message: 'Usuário deletado com sucesso!',
                data: { id }
            });

        } catch (error) {
            return sendError(res, {
                statusCode: 500,
                message: 'Falha ao deletar o usuário.',
                error: error
            });
        }
    }
};