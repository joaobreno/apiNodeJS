import express from "express"
const app = express()

app.use(express.json())

const livros = [
    {id : 1, "titulo": "O Senhor dos Aneis"},
    {id : 2, "titulo": "O Hobbit"}
]

// PÁGINA INICIAL
app.get('/', (req, res) => {
    res.status(200).send('Curso de Node')
})

// ÍNDICE DE LIVROS
app.get('/livros', (req,res) => {
    res.status(200).json(livros)
})

// BUSCAR LIVROS DE ID
app.get('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    res.json(livros[index]);
})

// CADASTRO DE LIVROS
app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('Livro cadastrado com sucesso')
})

// MODIFICAR LIVRO
app.put('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
})

// APAGAR LIVRO
app.delete('/livros/:id', (req, res) => {
    let{id} = req.params;
    let index = buscaLivro(id);
    livros.splice(index, 1);
    res.send(`Livro ${id} removido com sucesso`);
})

// FUNÇÃO DE BUSCA
function buscaLivro(id){
    return livros.findIndex(livro=> livro.id == id)
}

export default app