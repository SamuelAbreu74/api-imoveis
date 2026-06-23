const express = require('express');
const cors = require('cors')
const path = require('path');
const campanhasPrivateRoutes = require('./routes/privateRoutes/campanhasRoutes')
const imoveisPrivateRoutes = require('./routes/privateRoutes/imoveisRoutes')
const campanhasPublicRoutes = require('./routes/publicRoutes/campanhasRoutes')
const imoveisPublicRoutes = require('./routes/publicRoutes/imoveisRoutes')
const usuariosPrivateRoutes = require('./routes/privateRoutes/usuariosRoutes')
const app = express();
const PORT = 5000;


app.use(express.json());

const allowedOrigins = ["http://localhost:3000", "http://localhost:3001" ]

const corsOptions = {
    origin: function (origin, callback){

        if(allowedOrigins.includes(origin) || !origin){
            callback(null, true)
        }else{
            callback(new Error('Não permitido pelo CORS'))
        }
        
    }
}

app.use(cors(corsOptions))

// Rotas Privadas
app.use('/api', campanhasPrivateRoutes);
app.use('/api', imoveisPrivateRoutes);
app.use('/api', usuariosPrivateRoutes);
app.use('/doc-rotas', express.static(path.join(__dirname, 'doc-rotas')));

// Rotas Publicas
app.use('/api', campanhasPublicRoutes);
app.use('/api', imoveisPublicRoutes);


app.get('/', (req, res) => {
    res.send('API Funcionando!');
});

app.get('/doc-rotas', (req, res) => {
    res.sendFile(path.join(__dirname, 'doc-rotas', 'index.html'));
});


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})