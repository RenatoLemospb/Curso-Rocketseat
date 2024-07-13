import http from 'node:http'

//- http
//- metodo http
//- url

//get, post, put, patch, delete

// GET => Buscar um recurso do back-end
// POST => Criar um recusro no back-end
// PUT => Atualizar um recurso no back-end
// PATCH => Atualizar uma informação especifica de um recurso no back-end
// DELETE => Deletar um recurso do back-end

// GET /users => buscando usuarios do back-end
// POST /users => Criar um usuario no back-end

// Stateful - Stateless

// JSON - JavaScript Object Notation

// Cabeçalhos (Requisição/resposta) => Metadados

const users = []

const server = http.createServer((req, res) => {
 const { method, url } = req

 if (method == 'GET' && url == '/users'){
   return res
   .setHeader('Content-type', 'application/json')
   .end(JSON.stringify(users))

    return res.end(users)
 }
 if (method == 'POST' && url == '/users'){
users.push({
    id: 1,
    name: 'John Doe',
    email: 'johndoe@exemplo.com',

})

    return res.end('Criação de usuário')
 }

    return res.end('Hello World')
})

server.listen(3333)
