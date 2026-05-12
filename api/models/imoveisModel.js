const { DataTypes } = require('sequelize');
const sequelize = require('../database/configDatabase');

const Imovel = sequelize.define('imoveis', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    id_campanha: {
        type: DataTypes.INTEGER
    },
    id_tipo_imovel: {
        type: DataTypes.INTEGER
    },
    tamanho_total_m2: {
        type: DataTypes.NUMBER
    },
    area_construida_m2: {
        type: DataTypes.NUMBER
    },
    comodos: {
        type: DataTypes.JSONB
    },
    descricao: {
        type: DataTypes.TEXT
    },
    valor_venda: {
        type: DataTypes.NUMBER
    },
    valor_avaliacao_caixa: {
        type: DataTypes.NUMBER,
        allowNull: true
    },
    status: {
        type: DataTypes.INTEGER
    },
    created_at: {
        type: DataTypes.DATE
    },

},
    {
        tableName: 'imoveis',
        timestamps: false
    }
);

module.exports = Imovel;