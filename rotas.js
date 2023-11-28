const express = require('express')
const { listarCategorias } = require('./usuario')
const { cadastrarUsuario } = require('./cadastrarUsuario')
const { camposObrigatoriosLogin } = require('./verificao')
const { loginUsuario } = require('./login')

const rotas = express()

rotas.get('/categoria', listarCategorias)
rotas.post('/usuario',camposObrigatoriosLogin, cadastrarUsuario)
rotas.post('/login', loginUsuario)

module.exports = {
    rotas
}