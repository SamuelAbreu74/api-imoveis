const express = require('express');
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
app.use('/api', usuariosPublicRoutes);

// Rotas Publicas
app.use('/api', campanhasPublicRoutes);
app.use('/api', imoveisPublicRoutes)

app.get('/', (req, res) => {
    res.send('API Funcionando!');
});


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})