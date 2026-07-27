import 'dotenv/config';
import ImoveisRouter from './modules/imoveis/imoveis.routes';
import express from 'express'
import {sequelize} from './config/database'
import LoteamentosRouter from './modules/loteamentos/loteamentos.routes';
import './config/associations'


const app = express()
const PORT = process.env.PORT;

app.use(express.json());



app.use('/api/public/imoveis', ImoveisRouter)
app.use('/api/public/loteamentos', LoteamentosRouter)


app.listen(PORT, () => {
    sequelize.authenticate()
    .then(() => {
        console.log('Conexão com o PostgreSQL estabelecida com sucesso!');
        
        app.listen(PORT, () => {
            console.log(`Servidor rodando em http://localhost:${PORT}`);
        });
    })
    .catch((error: any) => {
        console.error('Erro ao conectar com o banco de dados:', error);
    });
    
})