const Campanha = require("../models/campanhasModel")

module.exports = {

    async listarCampanhas(req, res) {
        try {
            const campanhas = await Campanha.findAll();
            return res.send(campanhas);

        } catch (error) {
            return res.status(500).json({ message: "erro:", error })
        }
    },


    async criarCampanha(req, res) {
        try {
            const novaCampanha = await Campanha.create(req.body);
            return res.status(201).json({ message: "Campanha Criada com Sucesso!", novaCampanha });

        } catch (error) {
            return res.status(500).json({ message: "Erro:", error })
        }
    },

    async editarCampanha(req, res) {
        try {
            const { id } = req.params
            const novosDados = req.body

            const campanha = await Campanha.findByPk(id)
            if(!campanha){
                return res.status(404).json({message: "Erro: Campanha não Encontrada"})
            }

            const campanhaEditada = await campanha.update(novosDados)


            return res.status(200).json({ message: "Campanha Editada com Sucesso!", campanhaEditada })
        } catch (error) {
            return res.status(500).json({ message: "Erro: ", error });
        }
    },

    async deletarCampanha (req, res) {
        try {
            const { id } = req.params
            
            const campanha = await Campanha.findByPk(id)
            if(!campanha){
                return res.status(404).json({message: "Campanha não Encontrada"})
            }

            const campanhaDeletada = await Campanha.destroy({
                where: {
                    id: id
                }
            })

            return res.status(200).json({message: "Campanha Deletada com Sucesso!", id})

        } catch (error) {
            return res.status(500).json({message: "Erro:", error})
        }
    }


}