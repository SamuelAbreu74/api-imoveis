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
        type: DataTypes.STRING, 
        allowNull: false
    },
    email: {
        type: DataTypes.STRING, 
        allowNull: false,
        unique: true 
    },
    senha: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    tipo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1 
    },
    ultimo_login: {
        type: DataTypes.DATE
    }
}, {
    tableName: 'usuarios',
    timestamps: true, 
    underscored: true, 
    hooks: {
        beforeCreate: async (usuario) => {
            if (usuario.senha) {
                const salt = await bcrypt.genSalt(10);
                usuario.senha = await bcrypt.hash(usuario.senha, salt);
            }
        },
        beforeUpdate: async (usuario) => {
            if (usuario.changed('senha')) {
                const salt = await bcrypt.genSalt(10);
                usuario.senha = await bcrypt.hash(usuario.senha, salt);
            }
        }
    }
});

module.exports = Usuario;