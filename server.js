const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))

server.set("view engine", "html")

nunjucks.configure("views", {
    express: server
})

server.get('/', function(req, res) {
    return res.render("index")
})

server.get('/receita', function(req, res) {
    return res.render("receita")
})

server.get('/sobre', function(req, res) {
    return res.render("sobre")
})

server.listen(5000, function() {
    console.log('server is runnning')
})