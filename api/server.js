const express = require('express');
const campanhasRoutes = require('./routes/campanhasRoutes')
const app = express();
const PORT = 3000;


app.use(express.json());

app.use('/api', campanhasRoutes);

app.get('/', (req, res) => {
    res.send('API Funcionando!');
});


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})