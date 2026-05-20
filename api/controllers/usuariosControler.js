const { where } = require('sequelize');
const Usuario = require('../models/usuariosModel');


module.exports = {

    // GET
    async listarUsuarios(req, res) {
        try {
            const usuarios = await Usuario.findAll();
            if (!usuarios) {
                return res.status(404).json({ message: "Nenhum Usuario Encontrado!" });
            }

            return res.status(200).json({ message: "Usuarios Encontrados com Sucesso!", usuarios });

        } catch (error) {
            return res.status(500).json({ message: "Erro:", error })
        }
    },

    // POST
    async criarUsuario(req, res) {
        try {
            const novoUsuario = req.body

            if (!novoUsuario) {
                return res.status(400).json({ message: "Dados informados incorretamente!" })
            }

            const usuarioCriado = await Usuario.create(novoUsuario);
            if (!usuarioCriado) {
                return res.status(400).json({ message: "Erro ao criar novo usuario!" })
            }

            return res.status(201).json({ message: "Usuario criado com sucesso!", usuarioCriado });

        } catch (error) {
            return res.status(500).json({ message: "Erro:", error })
        }
    },


    // PUT
    async editarUsuario(req, res){
        try {
            const { id } = req.params
            const novosDados = req.body

            const usuario = await Usuario.findByPk(id);
            if(!usuario){
                return res.status(404).json({message: "Usuario não Encontrado"})
            }

            const usuarioEditado = await usuario.update(novosDados)

            return res.status(200).json({message: "Usuario editado com sucesso!", usuarioEditado});

        } catch (error) {
            return res.status(500).json({ message: "Erro:", error })
        }
    },

    // DELETE
    async deletarUsuario(req, res){
        try {
            const { id } = req.params
            
            const usuario = await Usuario.findByPk(id);
            if(!usuario){
                return res.status(404).json({message: "Usuario não Encontrado"})
            }

            const usuarioDeletado = await Usuario.destroy({
                where: {
                    id: id
                }
            })

            return res.status(200).json({message: "Usuario deletado com sucesso!"})

        } catch (error) {
            return res.status(500).json({ message: "Erro:", error })
        }
    }
}