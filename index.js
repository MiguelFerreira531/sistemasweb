const express = require('express');
const app = express();

let lista = [
    { titulo: 'titulo ficticio 1', descricao: 'obra ficticia' },
    { titulo: 'nome do novo produto', descricao: 'para que serve o novo produto' },
    { titulo: 'JoJo Parte 5', descricao: 'Golden Wind, uma nova aventura de JoJo.' }
];

app.get('/api/lista', (req, res) => {
    console.log(lista);
    res.json(lista);
});

app.use(express.static('.'));

app.listen(3000, () => console.log('Servidor escutando na porta 3000'));
