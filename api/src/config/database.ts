import { Sequelize } from "sequelize";
import 'dotenv/config'

// Credenciais
const dbHost = process.env.DB_HOST
const dbPort = process.env.DB_PORT
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS
const dbName = process.env.DB_NAME

if (!dbHost || !dbPort || !dbUser || !dbPass || !dbName) {
    throw new Error('Faltam variáveis de ambiente do banco de dados no arquivo .env');
}

export const sequelize = new Sequelize(dbName, dbUser, dbPass, {
    host: dbHost,
    port: parseInt(dbPort, 10),
    dialect: 'postgres',        
    logging: false
})