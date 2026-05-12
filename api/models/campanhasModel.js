const { DataTypes } = require('sequelize');
const sequelize = require('../database/configDatabase');

const Campanha = sequelize.define('campanhas', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    id_tipo_campanha: {
        type: DataTypes.INTEGER
    },
    nome_campanha: {
        type: DataTypes.CHAR
    },
    quantidade_unidades: {
        type: DataTypes.INTEGER
    },
    logradouro: {
        type: DataTypes.CHAR
    },
    numero: {
        type: DataTypes.CHAR
    },
    bairro: {
        type: DataTypes.CHAR
    },
    cidade: {
        type: DataTypes.CHAR
    },
    uf: {
        type: DataTypes.CHAR
    },
    cep: {
        type: DataTypes.CHAR
    },
    created_at: {
        type: DataTypes.DATE
    },

},
    {
        tableName: 'campanhas',
        timestamps: false
    }
);

module.exports = Campanha;