const Imovel = require('../models/imoveisModel');

module.exports = {

    async listarImoveis(req, res) {
        try {
            const imoveis = await Imovel.findAll();

            if (!imoveis) {
                return res.status(404).json({ message: "Nenhum Imóvel Encontrado!" })
            }

            return res.status(200).json({ message: "Imóveis Encontrados com Sucesso! ", imoveis });
        } catch (error) {
            return res.status(500).json({ message: "Erro: ", error })
        }
    },

    async criarImovel(req, res) {
        try {
            const novoImovel = await Imovel.create(req.body);
            return res.status(201).json({ message: "Imóvel Criado com Sucesso!", novoImovel })

        } catch (error) {
            return res.status(500).json({ message: "Erro: ", error })
        }
    },

    async editarImovel(req, res) {
        try {
            const { id } = req.params;
            const novosDados = req.body
            
            const imovel = await Imovel.findByPk(id);
            if(!imovel){
                return res.send(404).json({message: "Imóvel não Encontrado"})
            }

            const imovelEditado = await imovel.update(novosDados)

            return res.status(200).json({message: "Imóvel Editado com Sucesso!", imovelEditado}) 

        } catch (error) {
            return res.status(500).json({ message: "Erro: ", error })
        }
    },


    async deletarImovel (req, res) {
        try {
            const { id } = req.params

            const imovel = await Imovel.findByPk(id);
            if(!imovel){
                return res.status(404).json({message: "Imóvel não Encontrado"})
            }

            const imovelDeletado = await Imovel.destroy({
                where: {
                    id: id
                }
            }) 

            return res.status(200).json({message: "Imovel Deletado com Sucesso!", id})

        } catch (error) {
            return res.status(500).json({ message: "Erro: ", error })
        }
    }


}