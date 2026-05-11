const Campanha = require("../models/campanhasModel")

module.exports = {

    async listarCampanhas(req, res) {
        try {
            const campanhas = await Campanha.findAll();
            console.log(campanhas)
            return res.send(campanhas);

        } catch (error) {
            return res.status(500).json({message: "erro:", error})
        }
    }
}