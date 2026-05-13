const { DataTypes } = require('sequelize');
const sequelize = require('../database/configDatabase');
const bcrypt = require('bcryptjs');

const Usuario = sequelize.define('usuarios', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    email: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    senha: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    tipo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ultimo_login: {
        type: DataTypes.DATE
    },
    updated_at: {
        type: DataTypes.DATE
    },
    created_at: {
        type: DataTypes.DATE
    },
},
    {
        tableName: 'usuarios',
        timestamps: false,
        hooks: {
            // Aciona antes de Criar um novo registro
            beforeCreate: async (usuario) => {
                if(usuario.senha){
                    const salt = await bcrypt.genSalt(10);
                    usuario.senha = await bcrypt.hash(usuario.senha, salt);
                }
            },
            // Aciona antes de Atualizar algum registro
            beforeUpdate: async (usuario) => {
                if(usuario.changed('senha')) {
                    const salt = await bcrypt.genSalt(10);
                    usuario.senha = await bcrypt.hash(usuario.senha, salt);
                }
            }
        }
    }
);

module.exports = Usuario;