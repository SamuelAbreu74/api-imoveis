require('dotenv').config();
const { Sequelize } = require('sequelize')


const USER = process.env.DB_USER;
const PASS = process.env.DB_PASS;
const HOST = process.env.DB_HOST;
const PORT = process.env.DB_PORT;

// PROD DATABASE
const sequelize = new Sequelize('lp_imoveis_prod', USER, PASS, {
    host: HOST,
    dialect: 'postgres',
    port: PORT
})

sequelize.authenticate() 
  .then(() => console.log('Conectado!'))
  .catch(err => console.error('Erro:', err));



module.exports = sequelize