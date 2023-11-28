const express = require('express')
const { listarCategorias } = require('./usuario')
const { cadastrarUsuario } = require('./cadastrarUsuario')
const { camposObrigatoriosLogin } = require('./verificao')
const { login } = require('./login')

const rotas = express()

rotas.get('/categoria', listarCategorias)
rotas.post('/usuario',camposObrigatoriosLogin, cadastrarUsuario)
rotas.post('login', login)

module.exports = {
    rotas
}