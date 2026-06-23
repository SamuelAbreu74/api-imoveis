const express = require('express');
const path = require('path');
const campanhasPrivateRoutes = require('./routes/privateRoutes/campanhasRoutes')
const imoveisPrivateRoutes = require('./routes/privateRoutes/imoveisRoutes')
const campanhasPublicRoutes = require('./routes/publicRoutes/campanhasRoutes')
const imoveisPublicRoutes = require('./routes/publicRoutes/imoveisRoutes')
const usuariosPublicRoutes = require('./routes/privateRoutes/usuariosRoutes')
const app = express();
const PORT = 3000;


app.use(express.json());

// Rotas Privadas
app.use('/api', campanhasPrivateRoutes);
app.use('/api', imoveisPrivateRoutes);
app.use('/doc-rotas', express.static(path.join(__dirname, 'doc-rotas')));

// Rotas Publicas
app.use('/api', usuariosPublicRoutes);
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