const express = require ('express');
const app = express();

let lista = [{titulo: 'titulo ficticio 1', descricao: 'obra ficticia'},
{nome: 'nome do novo produto', descricao: 'para que serve o novo produto'}];

app.get('api/lista', (req,res)=> {
    console.log(res);
    res.jason(lista);//mandar como resposta a lista em formato jason
})

app.listen(3000, ()=> console.log('escutando'));
app.use(express.static('site'));