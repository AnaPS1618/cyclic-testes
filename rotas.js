const express = require('express')
const { listarCategorias } = require('./usuario')
const { cadastrarUsuario } = require('./cadastrarUsuario')
const { camposObrigatoriosLogin } = require('./verificao')

const rotas = express()

rotas.get('/categoria', listarCategorias)
rotas.post('/usuario',camposObrigatoriosLogin, cadastrarUsuario)

module.exports = {
    rotas
}