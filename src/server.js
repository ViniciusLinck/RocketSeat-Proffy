// Servidor
const express = require('express')
const server = express()
const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

// configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
// Receber os dados do req.body que esta no pages.js
.use(express.urlencoded({ extended:true }))
// Configurar arquivos estáticos (css, scrips, iamgens)
.use(express.static("public"))
// Rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//START
.listen(5500)